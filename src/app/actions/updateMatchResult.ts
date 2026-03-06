import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function updateMatchResult(
  matchId: number,
  homeScore: number,
  awayScore: number,
  goals: { playerId: number; teamId: number }[]
) {
  try {
    const match = await prisma.match.findUnique({
      where: { id: matchId },
    })

    if (!match) throw new Error("Partida não encontrada")

    await prisma.$transaction(async (tx) => {
      if (match.status === "FINISHED") {
        await revertTeamStats(tx, match.homeTeamId, match.awayTeamId, match.homeScore, match.awayScore)
        await tx.goal.deleteMany({ where: { matchId } })
      }

      await tx.match.update({
        where: { id: matchId },
        data: {
          homeScore,
          awayScore,
          status: "FINISHED",
        }
      })

      if (goals && goals.length > 0) {
        await tx.goal.createMany({
          data: goals.map(g => ({
            matchId,
            playerId: g.playerId,
            teamId: g.teamId
          }))
        })
      }

      await applyTeamStats(tx, match.homeTeamId, match.awayTeamId, homeScore, awayScore)
    })

    revalidatePath(`/championships/${match.soccerLeagueId}`)
    return { success: true }
  } catch (error) {
    console.error("Erro ao atualizar jogo:", error)
    return { success: false }
  }
}

async function revertTeamStats(tx: any, homeId: number, awayId: number, hScore: number, aScore: number) {
  const isHomeWin = hScore > aScore
  const isAwayWin = aScore > hScore
  const isDraw = hScore === aScore

  await tx.teamsSoccerLeague.update({
    where: { id: homeId },
    data: {
      playedMatches: { decrement: 1 },
      goalsScored: { decrement: hScore },
      goalsConceded: { decrement: aScore },
      goalsDiff: { decrement: hScore - aScore },
      wins: { decrement: isHomeWin ? 1 : 0 },
      draws: { decrement: isDraw ? 1 : 0 },
      losses: { decrement: isAwayWin ? 1 : 0 },
      points: { decrement: isHomeWin ? 3 : isDraw ? 1 : 0 }
    }
  })

  await tx.teamsSoccerLeague.update({
    where: { id: awayId },
    data: {
      playedMatches: { decrement: 1 },
      goalsScored: { decrement: aScore },
      goalsConceded: { decrement: hScore },
      goalsDiff: { decrement: aScore - hScore },
      wins: { decrement: isAwayWin ? 1 : 0 },
      draws: { decrement: isDraw ? 1 : 0 },
      losses: { decrement: isHomeWin ? 1 : 0 },
      points: { decrement: isAwayWin ? 3 : isDraw ? 1 : 0 }
    }
  })
}

async function applyTeamStats(tx: any, homeId: number, awayId: number, hScore: number, aScore: number) {
  const isHomeWin = hScore > aScore
  const isAwayWin = aScore > hScore
  const isDraw = hScore === aScore

  await tx.teamsSoccerLeague.update({
    where: { id: homeId },
    data: {
      playedMatches: { increment: 1 },
      goalsScored: { increment: hScore },
      goalsConceded: { increment: aScore },
      goalsDiff: { increment: hScore - aScore },
      wins: { increment: isHomeWin ? 1 : 0 },
      draws: { increment: isDraw ? 1 : 0 },
      losses: { increment: isAwayWin ? 1 : 0 },
      points: { increment: isHomeWin ? 3 : isDraw ? 1 : 0 }
    }
  })

  await tx.teamsSoccerLeague.update({
    where: { id: awayId },
    data: {
      playedMatches: { increment: 1 },
      goalsScored: { increment: hScore },
      goalsConceded: { increment: aScore },
      goalsDiff: { increment: hScore - aScore },
      wins: { increment: isAwayWin ? 1 : 0 },
      draws: { increment: isDraw ? 1 : 0 },
      losses: { increment: isHomeWin ? 1 : 0 },
      points: { increment: isAwayWin ? 3 : isDraw ? 1 : 0 }
    }
  })
}