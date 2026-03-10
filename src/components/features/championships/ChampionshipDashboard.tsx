"use client"

import { useRouter, useSearchParams } from 'next/navigation';
import { Clipboard, Calendar, Shield } from '@geist-ui/icons'
import DashboardSelector from "@/components/features/championships/tabs/DashboardSelector";
import StandingsTab from './tabs/StandingsTab';
import MatchesTab from './tabs/MatchesTab';
import TeamsTab from './tabs/TeamsTab';

export default function ChampionshipDashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeTab = searchParams.get('tab') || 'tabela';

  const setTab = (tabName: string) => {
    if (activeTab !== tabName.toLowerCase()) {
      router.push(`?tab=${tabName.toLowerCase()}`, { scroll: false });
    }
  };

  return(
    <section className="w-full flex flex-col gap-16 items-center">
      <div className="grid grid-rows-1 grid-cols-3 gap-8 w-fit">

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
          title="Times" 
          isActive={activeTab === "times"}
          onClick={() => setTab("times")}
        />
        
      </div>
      <div className="flex items-center justify-center w-full">
        <hr className="w-full border-1 rounded-xs border-neutral-300"/>
        <span className="absolute px-4 font-medium text-neutral-700 bg-neutral-150">
          {activeTab === "tabela" && "Tabela de clasificação"}
          {activeTab === "partidas" && "Partidas"}
          {activeTab === "times" && "Times"}
        </span>
      </div>
      <div className="w-full max-w-6xl animate-in fade-in slide-in-from-bottom-4 duration-500">
        {activeTab === "tabela" && <StandingsTab leagueId={3}/>}
        {activeTab === "partidas" && <MatchesTab leagueId={3}/>}
        {activeTab === "times" && <TeamsTab leagueId={3}/>}
      </div>
    </section>
  )
}