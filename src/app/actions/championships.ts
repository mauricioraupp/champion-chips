"use server"

import { prisma } from "@/lib/prisma"
import { logActivity } from "@/lib/activity-log";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { UTApi } from "uploadthing/server";

const utapi = new UTApi();
const defaultLogo = "default-league-logo.png";

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
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return { success: false, error: "Não autorizado" };

  try {
    const currentLeague = await prisma.soccerLeague.findUnique({
      where: { id: leagueId },
      select: { name: true }
    });

    if (!currentLeague) return { success: false, error: "Campeonato não encontrado" };

    await prisma.soccerLeague.update({
      where: { id: leagueId },
      data: { name: newName },
    });

    await logActivity(
      session.user.id, 
      "Alterou o nome do campeonato", 
      newName,
      "UPDATE"
    );

    revalidatePath(`/my-championships/${leagueId}`);
    revalidatePath("/profile");

    return { success: true };
  } catch (error) {
    console.error("Erro ao atualizar nome:", error);
    return { success: false, error: "Não foi possível atualizar o nome." };
  }
}

export async function updateChampionshipLogo(leagueId: string, logoUrl: string | null) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return { success: false, error: "Não autorizado" };

  try {
    const currentLeague = await prisma.soccerLeague.findUnique({
      where: { id: leagueId },
      select: { logo: true, name: true }
    });

    if (!currentLeague) return { success: false, error: "Campeonato não encontrado" };

    if (currentLeague?.logo && currentLeague.logo !== defaultLogo && currentLeague.logo !== logoUrl) {
      try {
        const fileKey = currentLeague.logo.split("/f/")[1];
        if (fileKey) {
          await utapi.deleteFiles(fileKey);
        }
      } catch (deleteError) {
        console.error("Aviso: Falha ao deletar arquivo antigo do UploadThing", deleteError);
      }
    }

    await prisma.soccerLeague.update({
      where: { id: leagueId },
      data: { logo: logoUrl },
    });

    await logActivity(
      session.user.id, 
      "Alterou a logo do campeonato", 
      currentLeague.name,
      "UPDATE"
    );

    revalidatePath(`/my-championships/${leagueId}`);
    return { success: true };
  } catch (error) {
    console.error("Erro ao atualizar logo:", error);
    return { success: false, error: "Erro ao salvar a nova imagem no banco." };
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
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return { success: false, error: "Não autorizado" };

  let fileKeys: string[] = [];

  try {
    const leagueData = await prisma.soccerLeague.findUnique({
      where: { id: leagueId },
      include: {
        Teams: {
          include: {
            Players: true
          }
        }
      }
    });

    if (!leagueData) return { success: false, error: "Campeonato não encontrado." };

    const extractKey = (url: string | null) => {

      if (!url || url.startsWith("/") || url === defaultLogo) {
        return;
      }

      if (url.includes("http")) {
        const parts = url.split("/");
        const key = parts[parts.length - 1];
        if (key) {
          fileKeys.push(key);
        }
      } else {
        fileKeys.push(url);
      }
    };

    extractKey(leagueData.logo);
    leagueData.Teams.forEach((team) => {
      extractKey(team.logo);
      team.Players.forEach((player) => extractKey(player.picture));
    });

    if (fileKeys.length > 0) {
      const uniqueKeys = Array.from(new Set(fileKeys));
      const utResponse = await utapi.deleteFiles(uniqueKeys);
      console.log("Resposta do UploadThing:", utResponse);
    }

    await prisma.soccerLeague.delete({
      where: { id: leagueId },
    });

    await logActivity(
      session.user.id, 
      "Deletou o campeonato", 
      leagueData.name,
      "DELETE"
    );

  } catch (error) {
    if (error instanceof Error && error.message === 'NEXT_REDIRECT') {
       throw error;
    }
    console.error("Erro crítico na deleção:", error);
    return { success: false, error: "Falha ao limpar dados." };
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