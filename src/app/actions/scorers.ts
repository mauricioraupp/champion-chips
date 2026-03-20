"use server"

import { prisma } from "@/lib/prisma"

export async function getScorers(leagueId: string) {
  const stats = await prisma.goal.groupBy({
    by: ['playerId'],
    where: {
      soccerLeagueId: leagueId,
    },
    _count: {
      id: true,
    },
    orderBy: {
      _count: {
        id: 'desc',
      },
    },
  });

  const scorers = await Promise.all(
    stats.map(async (item) => {
      const player = await prisma.players.findUnique({
        where: { id: item.playerId },
        select: {
          name: true,
          TeamsSoccerLeague: {
            select: {
              name: true,
              sigla: true,
              logo: true,
            },
          },
        },
      });

      return {
        id: item.playerId,
        name: player?.name || "Jogador desconhecido",
        teamName: player?.TeamsSoccerLeague?.name || "Sem time",
        teamSigla: player?.TeamsSoccerLeague?.sigla,
        teamLogo: player?.TeamsSoccerLeague?.logo,
        goals: item._count.id,
      };
    })
  );

  return scorers;
}