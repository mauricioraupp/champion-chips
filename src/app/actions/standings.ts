"use server"

import { prisma } from "@/lib/prisma"

export async function getStandings(leagueId: number) {
  const standings = await prisma.teamsSoccerLeague.findMany({
    where: { soccerLeagueId: leagueId },
    orderBy: [
      { points: 'desc' },
      { wins: 'desc' },
      { goalsDiff: 'desc' },
      { goalsScored: 'desc' }
    ]
  })

  return standings
}