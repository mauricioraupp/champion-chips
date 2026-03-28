"use client"

import { useState, useEffect } from "react"
import { getChampionshipInfo } from "@/app/actions/championships"
import ChampionshipHeaderCard from "./cards/ChampionshipHeaderCard"
import StatsGrid from "./cards/StatsGrid"
import TechnicalSummary from "./cards/TechnicalSummary"

interface InfoTabProps {
  leagueId: string
  isOwner: boolean
  initialIsFavorite: boolean
}

export default function InfoTab({ leagueId, isOwner, initialIsFavorite }: InfoTabProps) {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      const res = await getChampionshipInfo(leagueId)
      if (res) setData(res)
      setLoading(false)
    }
    loadData()
  }, [leagueId])

  if (loading) {
    return (
      <div className="p-8 text-center text-neutral-500 italic text-sm animate-pulse">
        Carregando informações do campeonato...
      </div>
    )
  }

  if (!data) {
    return (
      <div className="p-8 text-center text-neutral-500">
        Não foi possível carregar os dados deste torneio.
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
        <ChampionshipHeaderCard 
          leagueId={leagueId}
          name={data.name} 
          logo={data.logo} 
          createdAt={data.createdAt} 
          isPublic={data.public} 
          isOwner={isOwner}
          initialIsFavorite={initialIsFavorite}
        />

      <StatsGrid data={data} />

      <TechnicalSummary data={data} />
    </div>
  )
}