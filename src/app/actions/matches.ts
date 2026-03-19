"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function getMatches(leagueId: number) {
  const matches = await prisma.match.findMany({
    where: { soccerLeagueId: leagueId },
    include: {
      HomeTeam: true,
      AwayTeam: true,
      Goals: true
    },
    orderBy: [
      { id: 'asc' }
    ]
  })

  return matches
}

export async function updateMatch(matchId: number, leagueId: number, data: any) {
  try {
    const homeScore = parseInt(data.homeScore) || 0;
    const awayScore = parseInt(data.awayScore) || 0;
    const updateData: any = {
      homeScore,
      awayScore,
      status: data.status,
      time: data.time || null,
    };

    if (data.date && data.date.trim() !== "") {
      const localDate = new Date(data.date + 'T00:00:00');
      if (!isNaN(localDate.getTime())) {
        updateData.date = localDate;
      }
    }

    const result = await prisma.$transaction(async (tx) => {
      await tx.goal.deleteMany({
        where: { matchId: matchId }
      });

      const homeGoals = (data.homeScorers || [])
        .filter((id: string) => id !== "")
        .map((id: string) => ({
          matchId: matchId,
          playerId: parseInt(id),
          teamId: data.homeTeamId,
          soccerLeagueId: leagueId
        }));

      const awayGoals = (data.awayScorers || [])
        .filter((id: string) => id !== "")
        .map((id: string) => ({
          matchId: matchId,
          playerId: parseInt(id),
          teamId: data.awayTeamId,
          soccerLeagueId: leagueId
        }));

      const allGoals = [...homeGoals, ...awayGoals];

      if (allGoals.length > 0) {
        await tx.goal.createMany({
          data: allGoals
        });
      }

      return await tx.match.update({
        where: { id: matchId },
        data: updateData,
      });
    });

    await updateLeagueTable(leagueId);

    revalidatePath(`/championships/${leagueId}`, 'page');
    return { success: true, updatedMatch: result };

  } catch (error) {
    console.error("Erro ao atualizar partida:", error);
    return { success: false, error: "Erro ao salvar os dados no banco." };
  }
}

async function updateLeagueTable(leagueId: number) {
  const teams = await prisma.teamsSoccerLeague.findMany({
    where: { soccerLeagueId: leagueId }
  });

  const matches = await prisma.match.findMany({
    where: { 
      soccerLeagueId: leagueId,
      status: "FINISHED"
    }
  });

  for (const team of teams) {
    let points = 0, played = 0, wins = 0, draws = 0, losses = 0, gp = 0, gc = 0;

    matches.forEach(m => {
      if (m.homeTeamId === team.id) {
        played++;
        gp += m.homeScore;
        gc += m.awayScore;
        if (m.homeScore > m.awayScore) { wins++; points += 3; }
        else if (m.homeScore === m.awayScore) { draws++; points += 1; }
        else { losses++; }
      } 
      else if (m.awayTeamId === team.id) {
        played++;
        gp += m.awayScore;
        gc += m.homeScore;
        if (m.awayScore > m.homeScore) { wins++; points += 3; }
        else if (m.awayScore === m.homeScore) { draws++; points += 1; }
        else { losses++; }
      }
    });

    await prisma.teamsSoccerLeague.update({
      where: { id: team.id },
      data: {
        points,
        playedMatches: played,
        wins,
        draws,
        losses,
        goalsScored: gp,
        goalsConceded: gc,
        goalsDiff: gp - gc
      }
    });
  }
}