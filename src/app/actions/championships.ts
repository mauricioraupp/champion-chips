"use server"

import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getChampionshipsList() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return []; 
  }

  const userLeagues = await prisma.soccerLeague.findMany({
    where: { 
      User: {
        email: session.user.email 
      }
    }
  });

  return userLeagues;
}

export async function getChampionshipInfo(leagueId: string) {
  const league = await prisma.soccerLeague.findUnique({
    where: { id: leagueId },
    include: { 
      Matches: {
        include: {
          HomeTeam: true,
          AwayTeam: true
        }
      }
    }
  })

  return league
}

export async function updateChampionshipName(leagueId: string, newName: string) {
  try {
    await prisma.soccerLeague.update({
      where: { id: leagueId },
      data: { name: newName },
    });

    revalidatePath(`/my-championships/${leagueId}`);
    revalidatePath("/"); 

    return { success: true };
  } catch (error) {
    console.error("Erro ao atualizar nome:", error);
    return { success: false, error: "Não foi possível atualizar o nome." };
  }
}

export async function updateChampionshipLogo(leagueId: string, logoUrl: string | null) {
  try {
    await prisma.soccerLeague.update({
      where: { id: leagueId },
      data: { logo: logoUrl },
    });

    revalidatePath(`/my-championships/${leagueId}`);
    return { success: true };
  } catch (error) {
    console.error("Erro ao atualizar logo:", error);
    return { success: false, error: "Erro ao salvar a nova imagem." };
  }
}

export async function updateChampionshipVisibility(leagueId: string, isPublic: boolean) {
  try {
    await prisma.soccerLeague.update({
      where: { id: leagueId },
      data: { public: isPublic },
    });

    revalidatePath(`/my-championships/${leagueId}`);
    return { success: true };
  } catch (error) {
    return { success: false, error: "Erro ao alterar visibilidade." };
  }
}

export async function deleteChampionship(leagueId: string) {
  try {
    await prisma.soccerLeague.delete({
      where: { id: leagueId },
    });

  } catch (error) {
    console.error("Erro ao deletar liga:", error);
    return { success: false, error: "Erro ao excluir o campeonato." };
  }

  redirect("/my-championships");
}

export async function generateChampionshipMatches(leagueId: string) {
  const league = await prisma.soccerLeague.findUnique({
    where: { id: leagueId },
    include: { 
      Teams: true,
      Matches: true
    }
  })

  if (!league || league.Teams.length < 2) {
    throw new Error("A liga precisa de pelo menos 2 times para gerar jogos.")
  }

  await prisma.match.deleteMany({
    where: { soccerLeagueId: leagueId, status: "SCHEDULED" }
  })

  const teams = league.Teams
  let teamIds = teams.map((t) => t.id)
  
  for (let i = teamIds.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [teamIds[i], teamIds[j]] = [teamIds[j], teamIds[i]];
  }
  
  if (teamIds.length % 2 !== 0) {
    teamIds.push(-1)
  }

  const numTeams = teamIds.length
  const numRounds = numTeams - 1
  const halfSize = numTeams / 2

  const matchesData = []

  for (let round = 0; round < numRounds; round++) {
    for (let i = 0; i < halfSize; i++) {
      const home = teamIds[i]
      const away = teamIds[numTeams - 1 - i]

      if (home !== -1 && away !== -1) {
        const isEvenRound = round % 2 === 0
        matchesData.push({
          soccerLeagueId: leagueId,
          homeTeamId: isEvenRound ? home : away,
          awayTeamId: isEvenRound ? away : home,
          round: round + 1,
          isReturnMatch: false,
          status: "SCHEDULED",
        })
      }
    }
    teamIds.splice(1, 0, teamIds.pop()!)
  }

  if (league.secondLegs) {
    const returnMatches = matchesData.map((m) => ({
      ...m,
      homeTeamId: m.awayTeamId,
      awayTeamId: m.homeTeamId,
      round: m.round + numRounds,
      isReturnMatch: true,
    }))
    matchesData.push(...returnMatches)
  }

  await prisma.match.createMany({
    data: matchesData,
  })

  return { success: true, count: matchesData.length }
}