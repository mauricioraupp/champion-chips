"use client"

import { useEffect, useState } from "react"
import { getMatches } from "@/app/actions/matches"
import MatchCard from "./MatchCard"

export default function MatchesTab({ leagueId }: { leagueId: number }) {
  const [matches, setMatches] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const data = await getMatches(leagueId)
      setMatches(data)
      setLoading(false)
    }
    load()
  }, [leagueId])

  if (loading) return <div className="p-10 text-center">Carregando partidas...</div>

  if (matches.length === 0) {
    return (
      <div className="p-10 text-center border-2 border-dashed rounded-xl border-neutral-200 text-neutral-400">
        Nenhuma partida cadastrada nesta liga.
      </div>
    )
  }

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto">
      {matches.map((match) => (
        <MatchCard 
          key={match.id} 
          match={match} 
        />
      ))}
    </div>
  )
}