"use client"

import { useSearchParams } from 'next/navigation';
import StandingsTab from './tabs/StandingsTab';
import MatchesTab from './tabs/MatchesTab';
import TeamsTab from './tabs/TeamsTab';
import ScorersTab from './tabs/ScorersTab';

export default function ChampionshipDashboard({ leagueId }: { leagueId: string }) {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'tabela';

  return (
    <section className="w-full flex flex-col overflow-y-auto max-h-150">
      <h1 className="text-neutral-800 font-semibold text-xl pb-6">
        {activeTab === "tabela" && "Tabela de classificação"}
        {activeTab === "partidas" && "Calendário de partidas"}
        {activeTab === "clubes" && "Clubes participantes"}
        {activeTab === "artilharia" && "Tabela de artilharia"}
      </h1>
      <div className="border-t border-neutral-300 pt-8 ">
        {activeTab === "tabela" && <StandingsTab leagueId={leagueId}/>}
        {activeTab === "partidas" && <MatchesTab leagueId={leagueId}/>}
        {activeTab === "clubes" && <TeamsTab leagueId={leagueId}/>}
        {activeTab === "artilharia" && <ScorersTab leagueId={leagueId}/>}
      </div>
    </section>
  )
}