"use client"

import { useEffect, useState } from "react"
import { getTeams } from "@/app/actions/teams"
import TeamCard from "./cards/TeamCard"
import { CreateTeamModal } from "./cards/modals/CreateTeamModal"

export default function TeamsTab({ leagueId, isOwner }: { leagueId: string, isOwner: boolean }) {
  const [teams, setTeams] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const loadTeams = async () => {
    const data = await getTeams(leagueId)
    setTeams(data)
    setLoading(false)
  }

  useEffect(() => { loadTeams() }, [leagueId])

  if (loading) return <div className="p-8 text-center text-neutral-500 dark:text-neutral-400 italic">Carregando times...</div>

  return (
    <div className={`grid grid-cols-2 lg:grid-cols-3 gap-4`}>
      {teams.map((team) => (
        <TeamCard
          key={team.id} 
          team={team} 
          league={leagueId}
          onUpdate={loadTeams}
          isOwner={isOwner}
        />
      ))}

      {isOwner &&
        <button 
          onClick={() => setIsCreateModalOpen(true)}
          className={`flex flex-1 items-center justify-center min-w-32 h-32 sm:h-52 rounded-md bg-black dark:bg-neutral-900
            hover:bg-neutral-800 cursor-pointer transition-colors`}
        >
          <span className={`font-medium text-white sm:text-md`}>
            + Criar time
          </span>
        </button>
      }

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