"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UTApi } from "uploadthing/server"

const utapi = new UTApi();

const extractKey = (url: string | null) => {
  if (!url || url.startsWith("/") || !url.includes("http")) return null;
  return url.substring(url.lastIndexOf('/') + 1);
};

export async function getTeams(leagueId: string) {
  return await prisma.teamsSoccerLeague.findMany({
    where: { soccerLeagueId: leagueId },
    orderBy: [{ name: 'asc' }]
  });
}

export async function createTeam(leagueId: string, data: any) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return { success: false, error: "Não autorizado" };

  const userId = session.user.id;

  try {
    return await prisma.$transaction(async (tx) => {
      const newTeam = await tx.teamsSoccerLeague.create({
        data: {
          name: data.name,
          sigla: data.sigla.toUpperCase(),
          logo: data.logo || null,
          soccerLeagueId: leagueId,
          userId: userId,
          Players: {
            create: data.players.map((p: any) => ({
              name: p.name,
              position: p.position,
              userId: userId
            }))
          }
        }
      });

      const league = await tx.soccerLeague.findUnique({
        where: { id: leagueId },
        select: { secondLegs: true }
      });

      const allTeams = await tx.teamsSoccerLeague.findMany({
        where: { soccerLeagueId: leagueId }
      });

      const matchups: { homeTeamId: number; awayTeamId: number }[] = [];
      
      for (let i = 0; i < allTeams.length; i++) {
        for (let j = i + 1; j < allTeams.length; j++) {
          matchups.push({
            homeTeamId: allTeams[i].id,
            awayTeamId: allTeams[j].id
          });
        }
      }

      const shuffle = (array: any[]) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      };
      shuffle(matchups);

      const firstLeg = matchups.map(m => ({
        homeTeamId: m.homeTeamId,
        awayTeamId: m.awayTeamId,
        soccerLeagueId: leagueId,
        status: "SCHEDULED",
        isReturnMatch: false
      }));

      const secondLeg = league?.secondLegs 
        ? matchups.map(m => ({
            homeTeamId: m.awayTeamId,
            awayTeamId: m.homeTeamId,
            soccerLeagueId: leagueId,
            status: "SCHEDULED",
            isReturnMatch: true
          }))
        : [];

      const combinedMatches = [...firstLeg, ...secondLeg];
      const matchesPerRound = Math.floor(allTeams.length / 2) || 1;

      const finalSchedule = combinedMatches.map((match, index) => ({
        ...match,
        round: Math.floor(index / matchesPerRound) + 1
      }));

      await tx.match.deleteMany({
        where: { soccerLeagueId: leagueId, status: "SCHEDULED" }
      });

      await tx.match.createMany({
        data: finalSchedule
      });

      revalidatePath(`/championships/${leagueId}`);
      return { success: true, error: null };
    });
  } catch (error) {
    console.error("Erro ao criar time e partidas:", error);
    return { success: false, error: "Erro ao gerar calendário de jogos." };
  }
}

export async function updateTeam(teamId: number, leagueId: string, data: any, oldLogoUrl?: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return { success: false, error: "Não autorizado" };

  const userId = session.user.id;

  try {
    if (data.logo && oldLogoUrl && data.logo !== oldLogoUrl) {
      const fileKey = extractKey(oldLogoUrl);
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
              teamId: teamId,
              userId: userId
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

      revalidatePath(`/championships/${leagueId}`);
      return { success: true, error: null };
    });
  } catch (error) {
    console.error(error);
    return { success: false, error: "Erro ao sincronizar jogadores." };
  }
}

export async function deleteTeam(teamId: number, leagueId: string) {
  try {
    const teamCount = await prisma.teamsSoccerLeague.count({
      where: { soccerLeagueId: leagueId }
    });

    if (teamCount <= 2) {
      return { success: false, error: "A liga deve ter pelo menos 2 times." };
    }

    const team = await prisma.teamsSoccerLeague.findUnique({
      where: { id: teamId },
      include: { Players: true }
    });

    if (!team) return { success: false, error: "Time não encontrado." };

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

      let p = 0, w = 0, d = 0, l = 0;
      if (opponentScore > deletedTeamScore) { p = 3; w = 1; }
      else if (opponentScore === deletedTeamScore) { p = 1; d = 1; }
      else { l = 1; }

      await prisma.teamsSoccerLeague.update({
        where: { id: opponentId },
        data: {
          points: { decrement: p },
          playedMatches: { decrement: 1 },
          wins: { decrement: w },
          draws: { decrement: d },
          losses: { decrement: l },
          goalsScored: { decrement: opponentScore },
          goalsConceded: { decrement: deletedTeamScore },
          goalsDiff: { decrement: opponentScore - deletedTeamScore },
        },
      });
    }

    const keysToDelete: string[] = [];
    const teamLogoKey = extractKey(team.logo);
    if (teamLogoKey) keysToDelete.push(teamLogoKey);

    if (keysToDelete.length > 0) {
      await utapi.deleteFiles(keysToDelete);
    }

    await prisma.match.deleteMany({
      where: { OR: [{ homeTeamId: teamId }, { awayTeamId: teamId }] }
    });

    await prisma.teamsSoccerLeague.delete({
      where: { id: teamId },
    });

    revalidatePath(`/championships/${leagueId}`);
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Falha ao recalcular estatísticas e excluir o time." };
  }
}