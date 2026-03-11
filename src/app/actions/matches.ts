"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function getMatches(leagueId: number) {
  const matches = await prisma.match.findMany({
    where: { soccerLeagueId: leagueId },
    include: {
      HomeTeam: true,
      AwayTeam: true,
    },
    orderBy: [
      { id: 'asc' }
    ]
  })

  return matches
}

export async function updateMatch(matchId: number, data: any) {
  try {
    const updateData: any = {
      homeScore: parseInt(data.homeScore) || 0,
      awayScore: parseInt(data.awayScore) || 0,
      status: data.status,
      time: data.time || null,
    };

    if (data.date && data.date.trim() !== "") {
      const localDate = new Date(data.date + 'T00:00:00');
      if (!isNaN(localDate.getTime())) {
        updateData.date = localDate;
      }
    }

    const updatedMatch = await prisma.match.update({
      where: { id: matchId },
      data: updateData,
    });

    await updateLeagueTable(updatedMatch.soccerLeagueId);

    revalidatePath(`/championships/3`, 'page') 
    return { success: true, updatedMatch }
  } catch (error) {
    console.error("Erro ao atualizar:", error)
    return { success: false, error: "Falha ao atualizar a partida no banco." }
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