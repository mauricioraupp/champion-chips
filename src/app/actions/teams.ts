"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function getTeams(leagueId: number) {
  const teams = await prisma.teamsSoccerLeague.findMany({
    where: { soccerLeagueId: leagueId },
    orderBy: [
      { name: 'asc' },
    ]
  })

  return teams
}