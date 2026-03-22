"use client"

import { useRouter, useSearchParams } from 'next/navigation';
import { Clipboard, Calendar, Shield, Target } from '@geist-ui/icons'
import DashboardSelector from "@/components/features/championships/tabs/DashboardSelector";
import StandingsTab from './tabs/StandingsTab';
import MatchesTab from './tabs/MatchesTab';
import TeamsTab from './tabs/TeamsTab';
import ScorersTab from './tabs/ScorersTab';

export default function ChampionshipDashboard({ leagueId }: { leagueId: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'tabela';

  const setTab = (tabName: string) => {
    router.push(`?tab=${tabName}`, { scroll: false });
  };

  return (
    <section className="w-full flex flex-col overflow-y-auto max-h-150 my-4">
      <div className="flex items-center border-b border-neutral-200 mb-8 overflow-x-auto no-scrollbar">
        <DashboardSelector 
          icon={<Clipboard size={18}/>} 
          title="Tabela" 
          isActive={activeTab === "tabela"}
          onClick={() => setTab("tabela")}
        />
        <DashboardSelector 
          icon={<Calendar size={18}/>} 
          title="Partidas" 
          isActive={activeTab === "partidas"}
          onClick={() => setTab("partidas")}
        />
        <DashboardSelector 
          icon={<Shield size={18}/>} 
          title="Clubes" 
          isActive={activeTab === "clubes"}
          onClick={() => setTab("clubes")}
        />
        <DashboardSelector 
          icon={<Target size={18}/>} 
          title="Artilharia" 
          isActive={activeTab === "artilharia"}
          onClick={() => setTab("artilharia")}
        />
      </div>

      <div className="w-full max-w-6xl animate-in fade-in slide-in-from-bottom-2 duration-500">
        {activeTab === "tabela" && <StandingsTab leagueId={leagueId}/>}
        {activeTab === "partidas" && <MatchesTab leagueId={leagueId}/>}
        {activeTab === "clubes" && <TeamsTab leagueId={leagueId}/>}
        {activeTab === "artilharia" && <ScorersTab leagueId={leagueId}/>}
      </div>
    </section>
  )
}