"use client"

import { useEffect, useState } from "react"
import { getTeams } from "@/app/actions/teams"
import TeamCard from "./cards/TeamCard"
import { CreateTeamModal } from "./cards/modals/CreateTeamModal"

export default function TeamsTab({ leagueId }: { leagueId: string }) {
  const [teams, setTeams] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const loadTeams = async () => {
    const data = await getTeams(leagueId)
    setTeams(data)
    setLoading(false)
  }

  useEffect(() => { loadTeams() }, [leagueId])

  if (loading) return <div className="p-8 text-center text-neutral-500 italic">Carregando times...</div>

  return (
    <div className={`grid grid-cols-2 lg:grid-cols-3 place-items-center w-fit gap-4 sm:gap-6 mx-auto`}>
      {teams.map((team) => (
        <TeamCard
          key={team.id} 
          team={team} 
          league={leagueId}
          onUpdate={loadTeams}
        />
      ))}

      <button 
        onClick={() => setIsCreateModalOpen(true)}
        className={`flex items-center justify-center w-32 sm:w-60 h-32 sm:h-52 rounded-md bg-black
          hover:bg-zinc-900 cursor-pointer transition-colors`}
      >
        <span className={`font-medium text-white sm:text-md`}>
          + Criar time
        </span>
      </button>

      {isCreateModalOpen && (
        <CreateTeamModal 
          leagueId={leagueId}
          onClose={() => setIsCreateModalOpen(false)} 
          onUpdate={loadTeams} 
        />
      )}
    </div>
  )
}