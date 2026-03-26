"use client"

import { useSearchParams } from 'next/navigation';
import StandingsTab from './tabs/StandingsTab';
import MatchesTab from './tabs/MatchesTab';
import TeamsTab from './tabs/TeamsTab';
import ScorersTab from './tabs/ScorersTab';
import SettingsTab from './tabs/SettingsTab';

export default function ChampionshipDashboard({ leagueId }: { leagueId: string }) {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'standings';

  return (
    <section className="w-full flex flex-col overflow-y-auto max-h-202 sm:pt-6 [&::-webkit-scrollbar]:hidden">
      <h1 className="text-neutral-800 font-semibold text-xl pb-1">
        {activeTab === "standings" && "Tabela de classificação"}
        {activeTab === "matches" && "Calendário de partidas"}
        {activeTab === "teams" && "Clubes participantes"}
        {activeTab === "scorers" && "Tabela de artilharia"}
        {activeTab === "settings" && "Configurações"}
      </h1>
      <p className="text-neutral-500 font-medium text-sm pb-6">
        {activeTab === "standings" && "Acompanhe a tabela com o desempenho de cada equipe em tempo real"}
        {activeTab === "matches" && "Gerencie os resultados, datas e horários de todos os confrontos do campeonato"}
        {activeTab === "teams" && "Gerencie os dados de todos os times e jogadores do campeonato"}
        {activeTab === "scorers" && "Acompanhe a tabela com o desempenho dos artilheiros do campeonato"}
        {activeTab === "settings" && "Gerencie todas as informações do campeonato"}
      </p>
      <div>
        {activeTab === "standings" && <StandingsTab leagueId={leagueId}/>}
        {activeTab === "matches" && <MatchesTab leagueId={leagueId}/>}
        {activeTab === "teams" && <TeamsTab leagueId={leagueId}/>}
        {activeTab === "scorers" && <ScorersTab leagueId={leagueId}/>}
        {activeTab === "settings" && <SettingsTab leagueId={leagueId}/>}
      </div>
    </section>
  )
}