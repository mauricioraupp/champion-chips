"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { UTApi } from "uploadthing/server"

const utapi = new UTApi();

export async function getTeams(leagueId: number) {
  const teams = await prisma.teamsSoccerLeague.findMany({
    where: { soccerLeagueId: leagueId },
    orderBy: [
      { name: 'asc' },
    ]
  })

  return teams
}

export async function updateTeam(teamId: number, data: any, oldLogoUrl?: string) {
  try {
    if (data.logo && oldLogoUrl && data.logo !== oldLogoUrl) {
      const fileKey = oldLogoUrl.split("/f/")[1];
      if (fileKey) await utapi.deleteFiles(fileKey);
    }

    return await prisma.$transaction(async (tx) => {
      const incomingIds = data.players.map((p: any) => p.id).filter(Boolean);

      await tx.players.deleteMany({
        where: {
          teamId: teamId,
          id: { notIn: incomingIds }
        }
      });

      for (const p of data.players) {
        if (p.id) {
          await tx.players.update({
            where: { id: p.id },
            data: { name: p.name, position: p.position }
          });
        } else {
          await tx.players.create({
            data: { 
              name: p.name, 
              position: p.position, 
              teamId: teamId 
            }
          });
        }
      }

      await tx.teamsSoccerLeague.update({
        where: { id: teamId },
        data: {
          name: data.name,
          sigla: data.sigla.toUpperCase(),
          logo: data.logo,
        },
      });

      revalidatePath(`/championships/3`, 'page');
      return { success: true, error: null };
    });
  } catch (error) {
    console.error(error);
    return { success: false, error: "Erro ao sincronizar jogadores." };
  }
}

export async function deleteTeam(teamId: number, leagueId: number) {
  try {

    const teamCount = await prisma.teamsSoccerLeague.count({
      where: { soccerLeagueId: leagueId }
    });

    if (teamCount <= 2) {
      return { 
        success: false, 
        error: "A liga deve ter pelo menos 2 times. Não é possível excluir." 
      };
    }

    const matchesToCancel = await prisma.match.findMany({
      where: {
        OR: [{ homeTeamId: teamId }, { awayTeamId: teamId }],
        status: "FINISHED",
      },
    });

    for (const match of matchesToCancel) {
      const isHomeTeam = match.homeTeamId === teamId;
      const opponentId = isHomeTeam ? match.awayTeamId : match.homeTeamId;
      
      const opponentScore = isHomeTeam ? match.awayScore : match.homeScore;
      const deletedTeamScore = isHomeTeam ? match.homeScore : match.awayScore;

      let pointsToSubtract = 0;
      let winToSubtract = 0;
      let drawToSubtract = 0;
      let lossToSubtract = 0;

      if (opponentScore > deletedTeamScore) {
        pointsToSubtract = 3;
        winToSubtract = 1;
      } else if (opponentScore === deletedTeamScore) {
        pointsToSubtract = 1;
        drawToSubtract = 1;
      } else {
        lossToSubtract = 1;
      }

      await prisma.teamsSoccerLeague.update({
        where: { id: opponentId },
        data: {
          points: { decrement: pointsToSubtract },
          playedMatches: { decrement: 1 },
          wins: { decrement: winToSubtract },
          draws: { decrement: drawToSubtract },
          losses: { decrement: lossToSubtract },
          goalsScored: { decrement: opponentScore },
          goalsConceded: { decrement: deletedTeamScore },
          goalsDiff: { decrement: opponentScore - deletedTeamScore },
        },
      });
    }

    await prisma.match.deleteMany({
      where: { OR: [{ homeTeamId: teamId }, { awayTeamId: teamId }] }
    });

    const team = await prisma.teamsSoccerLeague.findUnique({
      where: { id: teamId },
      select: { logo: true }
    });

    if (team?.logo) {
      const fileKey = team.logo.split("/f/")[1];
      if (fileKey) await utapi.deleteFiles(fileKey);
    }

    await prisma.teamsSoccerLeague.delete({
      where: { id: teamId },
    });

    revalidatePath(`/championships/3`, 'page');
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Falha ao recalcular estatísticas e excluir o time." };
  }
}