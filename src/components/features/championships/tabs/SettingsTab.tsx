"use client"

import { useState, useEffect } from "react"
import { getChampionshipInfo } from "@/app/actions/championships"
import NameSettingsCard from "./cards/NameSettingsCard";
import LogoSettingsCard from "./cards/LogoSettingsCard";
import VisibilitySettingsCard from "./cards/VisibilitySettingsCard";
import DangerZoneCard from "./cards/DangerZoneCard";

export default function SettingsTab({ leagueId }: { leagueId: string }) {
  const [data, setData] = useState<{name: string, logo: string | null, public: boolean} | null>(null)
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
      <div className="flex flex-col gap-8 animate-pulse">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-48 bg-neutral-100 rounded-md border border-neutral-200" />
        ))}
      </div>
    )
  }

  if (!data) return <div className="p-8 text-center text-neutral-500">Erro ao carregar dados.</div>

  return (
    <div className="flex flex-col gap-8">
      <NameSettingsCard leagueId={leagueId} initialName={data.name} />
      
      <LogoSettingsCard leagueId={leagueId} initialLogo={data.logo} />
      
      <VisibilitySettingsCard leagueId={leagueId} initialPublic={data.public || false} />
      
      <DangerZoneCard leagueId={leagueId} name={data.name} />
    </div>
  )
}