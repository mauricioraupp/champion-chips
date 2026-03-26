"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Clipboard, Calendar, Shield, Target, Settings } from '@geist-ui/icons'

export default function ChampionshipSideBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'tabela';

  const setTab = (tabName: string) => {
    router.push(`?tab=${tabName}`, { scroll: false });
  };

  const menuItems = [
    { label: 'Tabela', tab: 'standings', onClick: () => setTab("standings"), icon: <Clipboard size={20}/> },
    { label: 'Partidas', tab: 'matches', onClick: () => setTab("matches"), icon: <Calendar size={20}/> },
    { label: 'Clubes', tab: 'teams', onClick: () => setTab("teams"), icon: <Shield size={20}/> },
    { label: 'Artilharia', tab: 'scorers', onClick: () => setTab("scorers"), icon: <Target size={20}/> },
    { label: 'Configurações', tab: 'settings', onClick: () => setTab("settings"), icon: <Settings size={20}/> }
  ]

  return (
    <aside className="flex w-screen sm:w-fit flex-col justify-between">
      <ul className="flex w-full sm:flex-col gap-2 p-4 sm:p-6 justify-between">
        {menuItems.map((item) => {
          const isActive = activeTab === item.tab

          return (
            <button key={item.tab} onClick={item.onClick}>
              <li className={`
                w-full flex py-2 px-2 sm:px-4 sm:gap-4 rounded-md cursor-pointer transition-all
                ${isActive 
                  ? "opacity-100 bg-neutral-100 text-black" 
                  : "opacity-60 hover:opacity-80 hover:bg-neutral-100 text-neutral-800"
                }
              `}>
                {item.icon}
                <p className="hidden sm:block text-sm font-semibold truncate">
                  {item.label}
                </p>
              </li>
            </button>
          )
        })}
      </ul>
    </aside>
  )
}