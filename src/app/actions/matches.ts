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
    const updatedMatch = await prisma.match.update({
      where: { id: matchId },
      data: {
        homeScore: parseInt(data.homeScore),
        awayScore: parseInt(data.awayScore),
        date: new Date(data.date), 
        time: data.time,
        status: data.status,
      },
    })

    revalidatePath(`/championships/[id]`, 'page') 
    
    return { success: true, updatedMatch }
  } catch (error) {
    console.error("Erro ao atualizar:", error)
    return { success: false, error: "Falha ao atualizar a partida no banco." }
  }
}