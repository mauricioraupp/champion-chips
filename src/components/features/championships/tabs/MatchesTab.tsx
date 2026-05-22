"use client"

import { useEffect, useState } from "react"
import { getMatches, getFilterOptions } from "@/app/actions/matches"
import MatchCard from "./cards/MatchCard"
import { MatchFilters } from "@/components/ui/FilterButtons"

export default function MatchesTab({ leagueId, isOwner }: { leagueId: string, isOwner: boolean }) {
  const [matches, setMatches] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const [filterData, setFilterData] = useState<{ clubs: any[], rounds: any[] }>({ clubs: [], rounds: [] })
  const [selectedClub, setSelectedClub] = useState<string | null>(null)
  const [selectedRound, setSelectedRound] = useState<number | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)

  const filteredMatches = matches.filter((match) => {
    const matchesClub = selectedClub ? String(match.homeTeamId) === selectedClub || String(match.awayTeamId) === selectedClub : true
    const matchesRound = selectedRound ? match.round === selectedRound : true
    const matchesStatus = selectedStatus ? match.status === selectedStatus : true

    return matchesClub && matchesRound && matchesStatus
  })

  const loadMatches = async () => {
    const data = await getMatches(leagueId)
    setMatches(data)
    setLoading(false)
  }

  const loadFilterOptions = async () => {
    const data = await getFilterOptions(leagueId)
    setFilterData(data)
  }

  useEffect(() => { 
    loadMatches() 
    loadFilterOptions()
  }, [leagueId])

  if (loading) return <div className="p-8 text-center text-neutral-500 italic">Carregando partidas...</div>

  if (matches.length === 0) {
    return (
      <div className="p-10 text-center border-2 border-dashed rounded-xl border-neutral-200 dark:border-neutral-900 text-neutral-400 dark:text-neutral-300">
        Nenhuma partida cadastrada nesta liga.
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 pb-4 w-full mx-auto">
      <MatchFilters 
        selectedClub={selectedClub}
        setSelectedClub={setSelectedClub}
        selectedRound={selectedRound}
        setSelectedRound={setSelectedRound}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        clubs={filterData.clubs}
        rounds={filterData.rounds}
      />
      {filteredMatches.length > 0 ? (
        filteredMatches.map((match) => (
          <MatchCard
            key={match.id} 
            match={match} 
            onUpdate={loadMatches}
            isOwner={isOwner}
          />
        ))
      ) : (
        <div className="p-10 text-center text-neutral-500">
          Nenhuma partida encontrada para os filtros selecionados.
        </div>
      )}
    </div>
  )
}