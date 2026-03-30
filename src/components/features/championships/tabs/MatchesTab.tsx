"use client"

import { useEffect, useState } from "react"
import { getMatches } from "@/app/actions/matches"
import MatchCard from "./cards/MatchCard"

export default function MatchesTab({ leagueId, isOwner }: { leagueId: string, isOwner: boolean }) {
  const [matches, setMatches] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const loadMatches = async () => {
    const data = await getMatches(leagueId)
    setMatches(data)
    setLoading(false)
  }

  useEffect(() => { loadMatches() }, [leagueId])

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
      {matches.map((match) => (
        <MatchCard
          key={match.id} 
          match={match} 
          onUpdate={loadMatches}
          isOwner={isOwner}
        />
      ))}
    </div>
  )
}