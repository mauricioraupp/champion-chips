"use client"

import { useEffect, useState } from "react"
import { getTeams } from "@/app/actions/teams"
import TeamCard from "./TeamCard"

export default function TeamsTab({ leagueId }: { leagueId: number }) {
  const [teams, setTeams] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const loadTeams = async () => {
    const data = await getTeams(leagueId)
    setTeams(data)
    setLoading(false)
  }

  useEffect(() => { loadTeams() }, [leagueId])

  if (loading) return <div className="p-10 text-center">Carregando times...</div>

  if (teams.length === 0) {
    return (
      <div className="p-10 text-center border-2 border-dashed rounded-xl border-neutral-200 text-neutral-400">
        Nenhum time cadastrada nesta liga.
      </div>
    )
  }

  return (
    <div className={`grid grid-cols-2 lg:grid-cols-3 place-items-center w-fit gap-4 sm:gap-6 mx-auto`}>
      {teams.map((teams) => (
        <TeamCard
          key={teams.id} 
          team={teams} 
          onUpdate={loadTeams}
        />
      ))}
      <div 
        className={`flex items-center justify-center w-30 sm:w-60 h-30 sm:h-52 rounded-md bg-black
          hover:bg-zinc-800 cursor-pointer transition-colors`
        }>
        <span className={`font-medium text-white sm:text-md`}>
          + Criar time
        </span>
      </div>
    </div>
  )
}