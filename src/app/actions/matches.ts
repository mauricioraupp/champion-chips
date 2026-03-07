"use server"

import { prisma } from "@/lib/prisma"

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