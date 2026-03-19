"use client"

import { useRouter, useSearchParams } from 'next/navigation';
import { Clipboard, Calendar, Shield, Target } from '@geist-ui/icons'
import DashboardSelector from "@/components/features/championships/tabs/DashboardSelector";
import StandingsTab from './tabs/StandingsTab';
import MatchesTab from './tabs/MatchesTab';
import TeamsTab from './tabs/TeamsTab';
import ScorersTab from './tabs/ScorersTab';

export default function ChampionshipDashboard({ leagueId }: { leagueId: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeTab = searchParams.get('tab') || 'tabela';

  const setTab = (tabName: string) => {
    if (activeTab !== tabName.toLowerCase()) {
      router.push(`?tab=${tabName.toLowerCase()}`, { scroll: false });
    }
  };

  return(
    <section className="w-full flex flex-col gap-16 items-center pb-16">
      <div className="grid grid-rows-1 grid-cols-4 gap-8 w-fit">

        <DashboardSelector 
          icon={<Clipboard size={20}/>} 
          title="Tabela" 
          isActive={activeTab === "tabela"}
          onClick={() => setTab("tabela")}
        />
      
        <DashboardSelector 
          icon={<Calendar size={20}/>} 
          title="Partidas" 
          isActive={activeTab === "partidas"}
          onClick={() => setTab("partidas")}
        />

        <DashboardSelector 
          icon={<Shield size={20}/>} 
          title="Clubes" 
          isActive={activeTab === "clubes"}
          onClick={() => setTab("clubes")}
        />

        <DashboardSelector 
          icon={<Target size={20}/>} 
          title="Artilharia" 
          isActive={activeTab === "artilharia"}
          onClick={() => setTab("artilharia")}
        />
        
      </div>
      <div className="flex items-center justify-center w-full px-4">
        <hr className="w-full border-1 rounded-xs border-neutral-300"/>
        <span className="absolute px-4 font-medium text-neutral-700 bg-neutral-150">
          {activeTab === "tabela" && "Tabela de clasificação"}
          {activeTab === "partidas" && "Partidas"}
          {activeTab === "clubes" && "Clubes"}
          {activeTab === "artilharia" && "Artilharia"}
        </span>
      </div>
      <div className="w-full max-w-6xl px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {activeTab === "tabela" && <StandingsTab leagueId={leagueId}/>}
        {activeTab === "partidas" && <MatchesTab leagueId={leagueId}/>}
        {activeTab === "clubes" && <TeamsTab leagueId={leagueId}/>}
        {activeTab === "artilharia" && <ScorersTab leagueId={leagueId}/>}
      </div>
    </section>
  )
}