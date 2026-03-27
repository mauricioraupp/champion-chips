"use client"

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import StandingsTab from './tabs/StandingsTab';
import MatchesTab from './tabs/MatchesTab';
import TeamsTab from './tabs/TeamsTab';
import ScorersTab from './tabs/ScorersTab';
import SettingsTab from './tabs/SettingsTab';
import InfoTab from './tabs/InfoTab';

export default function ChampionshipDashboard({ leagueId, isOwner, initialIsFavorite }: { leagueId: string, isOwner: boolean, initialIsFavorite: boolean }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = searchParams.get('tab') || 'info';

  useEffect(() => {
    if (!isOwner && (activeTab === 'settings')) {
      router.replace(`?tab=info`);
    }
  }, [activeTab, isOwner, router]);

  return (
    <section className="w-full flex flex-col overflow-y-auto h-full p-4 sm:p-6 pb-8 [&::-webkit-scrollbar]:hidden">
      <h1 className="text-neutral-800 font-semibold text-xl pb-1">
        {activeTab === "standings" && "Tabela de classificação"}
        {activeTab === "matches" && "Calendário de partidas"}
        {activeTab === "teams" && "Clubes participantes"}
        {activeTab === "scorers" && "Tabela de artilharia"}
        {activeTab === "info" && "Informação"}
        {isOwner && (
          <>
            {activeTab === "settings" && "Configurações"}
          </>
        )}
      </h1>
      <p className="text-neutral-500 font-medium text-sm pb-6">
        {activeTab === "standings" && "Acompanhe a tabela com o desempenho de cada equipe em tempo real"}
        {activeTab === "matches" && "Gerencie os resultados, datas e horários de todos os confrontos do campeonato"}
        {activeTab === "teams" && "Gerencie os dados de todos os times e jogadores do campeonato"}
        {activeTab === "scorers" && "Acompanhe a tabela com o desempenho dos artilheiros do campeonato"}
        {activeTab === "info" && "Veja as informações desse campeonato"}
        {isOwner && (
          <>
            {activeTab === "settings" && "Gerencie todas as informações do campeonato"}
          </>
        )}
      </p>
      <div>
        {activeTab === "standings" && <StandingsTab leagueId={leagueId}/>}
        {activeTab === "matches" && <MatchesTab leagueId={leagueId} isOwner={isOwner}/>}
        {activeTab === "teams" && <TeamsTab leagueId={leagueId} isOwner={isOwner}/>}
        {activeTab === "scorers" && <ScorersTab leagueId={leagueId}/>}
        {activeTab === "info" && <InfoTab leagueId={leagueId} isOwner={isOwner} initialIsFavorite={initialIsFavorite} />}
        {isOwner && (
          <>
            {activeTab === "settings" && <SettingsTab leagueId={leagueId} />}
          </>
        )}
      </div>
    </section>
  )
}