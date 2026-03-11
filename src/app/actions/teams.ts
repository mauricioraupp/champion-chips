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

    await prisma.teamsSoccerLeague.update({
      where: { id: teamId },
      data: {
        name: data.name,
        sigla: data.sigla.toUpperCase(),
        logo: data.logo,
        Players: {
          deleteMany: {},
          create: data.players.map((p: any) => ({ 
            name: p.name,
            position: p.position
          }))
        }
      },
    })

    revalidatePath(`/championships/3`, 'page')
    return { success: true }
  } catch (error) {
    console.error(error)
    return { success: false, error: "Erro ao atualizar dados." }
  }
}

export async function deleteTeam(teamId: number) {
  try {
    const team = await prisma.teamsSoccerLeague.findUnique({
      where: { id: teamId },
      select: { logo: true }
    });

    await prisma.match.deleteMany({
      where: {
        OR: [{ homeTeamId: teamId }, { awayTeamId: teamId }]
      }
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
    return { success: false, error: "Falha ao excluir o time e seus arquivos." };
  }
}