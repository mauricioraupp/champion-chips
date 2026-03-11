"use server"

import { prisma } from "@/lib/prisma"

export async function getPlayers(teamId: number) {
  const players = await prisma.players.findMany({
    where: { teamId: teamId },
    orderBy: [
      { position: 'asc' },
      { name: 'asc' }
    ]
  })

  return players
}