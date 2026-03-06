"use client"

import { useRouter, useSearchParams } from 'next/navigation';
import { Clipboard, Calendar, Shield, Target } from '@geist-ui/icons'
import DashboardSelector from "@/components/features/championships/tabs/DashboardSelector";
import StandingsTab from './tabs/StandingsTab';
import MatchesTab from './tabs/MatchesTab';
import TeamsTab from './tabs/TeamsTab';
import ScorersTab from './tabs/ScorersTab';

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
    <section className="w-full flex flex-col gap-8 items-center">
    <div className="grid grid-rows-1 grid-cols-4 gap-8 w-fit">

      <DashboardSelector 
        icon={<Clipboard size={20}/>} 
        title="Tabela" 
        isActive={activeTab === "tabela"}
        onClick={() => setTab("tabela")}
      />
    
      <DashboardSelector 
        icon={<Calendar size={20}/>} 
        title="Jogos" 
        isActive={activeTab === "jogos"}
        onClick={() => setTab("jogos")}
      />
      <DashboardSelector 
        icon={<Shield size={20}/>} 
        title="Times" 
        isActive={activeTab === "times"}
        onClick={() => setTab("times")}
      />
      <DashboardSelector 
        icon={<Target size={20}/>} 
        title="Artilharia" 
        isActive={activeTab === "artilharia"}
        onClick={() => setTab("artilharia")}
      />
    </div>
    <div className="w-full max-w-4xl mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {activeTab === "tabela" && <StandingsTab leagueId={1}/>}
      {activeTab === "jogos" && <MatchesTab/>}
      {activeTab === "times" && <TeamsTab/>}
      {activeTab === "artilharia" && <ScorersTab/>}
    </div>
  </section>
  )
}