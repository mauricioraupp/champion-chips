"use server"

import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

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

export async function getChampionshipInfo(leagueId: number) {
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

export async function getChampionshipName(leagueId: number) {
  const league = await prisma.soccerLeague.findUnique({
    where: { id: leagueId },
    
  })

  return league
}

export async function generateChampionshipMatches(leagueId: number) {
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