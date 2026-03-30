"use client"

import { useEffect, useState, useRef } from "react"
import { getChampionshipInfo } from "@/app/actions/championships";
import { getStandings } from "@/app/actions/standings"
import { MoreHorizontal, Share2 } from '@geist-ui/icons';
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import Image from 'next/image';

export default function ChampionshipCreated({ leagueId }: { leagueId: string }) {
  const router = useRouter();
  const [championship, setChampionship] = useState<any>(null)
  const [teams, setTeams] = useState<any[]>([])
  const [showOptions, setShowOptions] = useState(false);
  const [loading, setLoading] = useState(true)
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    async function loadData() {
      const [info, standings] = await Promise.all([
        getChampionshipInfo(leagueId),
        getStandings(leagueId)
      ]);
      setChampionship(info);
      setTeams(standings);
      setLoading(false);
    }
    loadData();
  }, [leagueId])

  if (loading) return <div className="p-8 text-center animate-pulse">Carregando campeonato...</div>
  if (!championship) return <div className="p-8 text-center text-red-500">Campeonato não encontrado.</div>

  const nextMatch = championship.Matches?.find((m: any) => m.status === "SCHEDULED");

  return (
    <div 
      onClick={() => router.push(`/championships/${leagueId}`)} 
      className="relative flex gap-2 lg:gap-12 bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-neutral-900 rounded-md w-full 
        px-4 sm:px-6 py-3 mx-auto shadow-xs hover:shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-950 transition-shadow cursor-pointer overflow-x-auto"
    >
      <section className="flex flex-col justify-center text-left border-r-2 border-neutral-200 dark:border-neutral-900 pb-4 pr-2 lg:pr-12">
        <h1 className="font-bold text-xl text-neutral-900 dark:text-neutral-200 sm:max-w-48 max-w-24 truncate">{championship.name}</h1>
        <p className="font-medium text-neutral-500 dark:text-neutral-400 pt-1">Futebol • Liga</p>
        <p className="font-medium text-neutral-500 dark:text-neutral-400">
          {nextMatch ? `Rodada ${nextMatch.round}` : "Finalizado"}
        </p>
      </section>

      <section className="hidden md:flex flex-col justify-center items-center border-r-2 border-neutral-200 dark:border-neutral-900 pr-2 lg:pr-12 min-w-fit">
        <h2 className="text-[10px] uppercase tracking-wider font-bold text-neutral-400 mb-2">Próxima partida</h2>
        {nextMatch ? (
          <div className="flex flex-col items-center gap-2">
            <article className="flex items-center gap-3">
              <div className="flex flex-col items-center gap-1">
                {nextMatch.HomeTeam?.logo && (
                  <Image
                    src={nextMatch.HomeTeam.logo}
                    width={40}
                    height={40}
                    alt="Escudo Home"
                    className="rounded-full shadow-sm bg-white"
                  />
                )}
              </div>
              
              <p className="font-black text-neutral-400 text-xl">X</p>
              
              <div className="flex flex-col items-center gap-1">
                {nextMatch.AwayTeam?.logo && (
                  <Image
                    src={nextMatch.AwayTeam.logo}
                    width={40}
                    height={40}
                    alt="Escudo Away"
                    className="rounded-full shadow-sm bg-white"
                  />
                )}
              </div>
            </article>
            <p className="text-xs font-semibold text-neutral-500">
              {nextMatch.date ? new Date(nextMatch.date).toLocaleDateString() : "Data a definir"}
            </p>
          </div>
        ) : (
          <p className="text-sm text-neutral-400 italic">Sem jogos pendentes</p>
        )}
      </section>

      <section className="flex-1 mr-5">
        <table className="w-full h-full">
          <thead>
            <tr className="text-[10px] uppercase text-neutral-400 border-b border-neutral-400 dark:border-neutral-900">
              <th className="text-left font-bold pb-1">Clube</th>
              <th className="w-10 pb-1 ">Pts</th>
              <th className="w-10 pb-1 ">PJ</th>
              <th className="w-10 pb-1 hidden sm:table-cell">V</th>
              <th className="w-10 pb-1 hidden sm:table-cell">E</th>
              <th className="w-10 pb-1 hidden sm:table-cell">D</th>
              <th className="w-10 pb-1 hidden xl:table-cell">GM</th>
              <th className="w-10 pb-1 hidden xl:table-cell">GC</th>
              <th className="w-6 pb-1 text-right">SG</th>
            </tr>
          </thead>
          <tbody>
            {teams.slice(0, 3).map((entry, index) => (
              <tr key={entry.id} className="text-sm text-center text-neutral-500 dark:text-neutral-400 transition-colors">
                <td className="text-left flex items-center h-full gap-3 p-1">
                  <span className="text-xs">{index + 1}</span>
                  <span className="hidden sm:block font-semibold text-neutral-800 dark:text-neutral-300 truncate sm:max-w-24 max-w-13 whitespace-nowrap">
                    {entry.name}
                  </span>
                  <span className="block sm:hidden font-semibold text-neutral-800 dark:text-neutral-300 truncate sm:max-w-24 max-w-13 whitespace-nowrap">
                    {entry.sigla}
                  </span>
                </td>
                <td className="font-bold text-neutral-900 dark:text-neutral-200">{entry.points}</td>
                <td className="">{entry.playedMatches}</td>
                <td className="hidden sm:table-cell">{entry.wins}</td>
                <td className="hidden sm:table-cell">{entry.draws}</td>
                <td className="hidden sm:table-cell">{entry.losses}</td>
                <td className="hidden xl:table-cell">{entry.goalsScored}</td>
                <td className="hidden xl:table-cell">{entry.goalsConceded}</td>
                <td className="text-right pr-[2px]">
                  <span className={`font-bold ${entry.goalsDiff > 0 ? "text-green-500" : entry.goalsDiff < 0 ? "text-red-500" : "text-neutral-400"}`}>
                    {entry.goalsDiff > 0 ? `+${entry.goalsDiff}` : entry.goalsDiff}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div 
        ref={menuRef} 
        className="absolute top-1 right-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setShowOptions(!showOptions);
          }} 
          className="p-1 hover:bg-neutral-200 dark:hover:bg-neutral-900 text-neutral-600 dark:text-white 
            hover:text-neutral-900 dark:hover:text-neutral-200 rounded-full cursor-pointer transition-colors"
        >
          <MoreHorizontal size="20" />
        </button>

        <AnimatePresence>
          {showOptions && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="absolute right-0 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-900 shadow-xl rounded-md z-10 overflow-hidden"
            >
              <button 
                onClick={(e) => { 
                  e.stopPropagation();
                  const url = `${window.location.origin}/championships/${leagueId}`;
                  navigator.clipboard.writeText(url);
                  toast.success("Link de acesso copiado!");
                  setShowOptions(false); 
                }} 
                className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer text-left"
                title={`${window.location.origin}/championships/${leagueId}`}
              >
                <Share2 size="14" /> Compartilhar
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}