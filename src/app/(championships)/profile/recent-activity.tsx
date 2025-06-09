"use client"

interface RecentActivityProps {
  tournamentName: string;
  teamName: string;
  playerName: string;
  team1: string;
  team2: string
  date: string;
}

export function NewTournament({ tournamentName, date }: RecentActivityProps) {
  return(
    <li className="flex flex-col sm:flex-row justify-between gap-1">
      <p className="order-2 sm:order-1">🏆 Novo torneio <strong>{tournamentName}</strong> criado</p>
      <p className="order-1 sm:order-2 text-neutral-700">há {date}</p>
    </li>
  )
}

export function NewTeam({ teamName, date }: RecentActivityProps) {
  return(
    <li className="flex flex-col sm:flex-row justify-between gap-1">
      <p className="order-2 sm:order-1">⚽ Novo time <strong>{teamName}</strong> criado</p>
      <p className="order-1 sm:order-2 text-neutral-700">há {date}</p>
    </li>
  )
}

export function UpdateTeamStats({ team1, team2, date }: RecentActivityProps) {
  return(
    <li className="flex flex-col sm:flex-row justify-between gap-1">
      <p className="order-2 sm:order-1">📝 Você atualizou as estatísticas de <strong>{team1} x {team2}</strong></p>
      <p className="order-1 sm:order-2 text-neutral-700">há {date}</p>
    </li>
  )
}

export function newPlayer({ playerName, date }: RecentActivityProps) {
  return(
    <li className="flex flex-col sm:flex-row justify-between gap-1">
      <p className="order-2 sm:order-1">👦 Novo jogador <strong>{playerName}</strong> criado</p>
      <p className="order-1 sm:order-2 text-neutral-700">há {date}</p>
    </li>
  )
}

export function UpdatePlayerStats({ playerName, date }: RecentActivityProps) {
  return(
    <li className="flex flex-col sm:flex-row justify-between gap-1">
      <p className="order-2 sm:order-1">📝 Você atualizou as estatísticas de <strong>{playerName}</strong></p>
      <p className="order-1 sm:order-2 text-neutral-700">há {date}</p>
    </li>
  )
}