"use client"

import { useEffect, useState } from "react"
import { getChampionshipInfo } from "@/app/actions/championships";
import { getStandings } from "@/app/actions/standings"
import { MoreHorizontal } from '@geist-ui/icons';
import Image from 'next/image';
import Link from "next/link";

export default function ChampionshipCreated({ leagueId }: { leagueId: string }) {
  const [championship, setChampionship] = useState<any>(null)
  const [teams, setTeams] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

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
    <Link href={`/my-championships/${leagueId}`} className="relative flex gap-2 lg:gap-12 bg-white border border-neutral-200 rounded-md w-full 
      px-4 sm:px-6 py-3 mx-auto shadow-xs hover:shadow-sm hover:bg-neutral-50 transition-shadow cursor-pointer overflow-x-auto"
    >
      <section className="flex flex-col justify-center text-left border-r-2 border-neutral-200 pb-4 pr-2 lg:pr-12">
        <h1 className="font-bold text-xl text-neutral-900 sm:max-w-48 max-w-24 truncate">{championship.name}</h1>
        <p className="font-medium text-neutral-500 pt-1">Futebol • Liga</p>
        <p className="font-medium text-neutral-500">
          {nextMatch ? `Rodada ${nextMatch.round}` : "Finalizado"}
        </p>
      </section>

      <section className="hidden md:flex flex-col justify-center items-center border-r-2 border-neutral-200 pr-2 lg:pr-12 min-w-fit">
        <h2 className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2">Próxima partida</h2>
        {nextMatch ? (
          <div className="flex flex-col items-center gap-2">
            <article className="flex items-center gap-3">
              <div className="flex flex-col items-center gap-1">
                <Image
                  src={nextMatch.HomeTeam?.logo}
                  width={40}
                  height={40}
                  alt="Escudo Home"
                  className="rounded-full shadow-sm bg-white"
                />
                <span className="text-[10px] font-bold uppercase md:hidden">{nextMatch.HomeTeam?.sigla}</span>
              </div>
              
              <p className="font-black text-neutral-400 text-xl">X</p>
              
              <div className="flex flex-col items-center gap-1">
                <Image
                  src={nextMatch.AwayTeam?.logo}
                  width={40}
                  height={40}
                  alt="Escudo Away"
                  className="rounded-full shadow-sm bg-white"
                />
                <span className="text-[10px] font-bold uppercase md:hidden">{nextMatch.AwayTeam?.sigla}</span>
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
              <tr className="text-[10px] uppercase text-neutral-400 border-b border-neutral-400">
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
                <tr key={entry.id} className="text-sm text-center transition-colors">
                  <td className="text-left flex items-center h-full gap-3 p-1">
                    <span className={`text-xs`}>
                      {index + 1}
                    </span>
                    <span className="hidden sm:block font-semibold text-neutral-800 truncate sm:max-w-24 max-w-13 whitespace-nowrap">
                      {entry.name}
                    </span>
                    <span className="block sm:hidden font-semibold text-neutral-800 truncate sm:max-w-24 max-w-13 whitespace-nowrap">
                      {entry.sigla}
                    </span>
                  </td>
                  <td className="font-bold text-neutral-900">{entry.points}</td>
                  <td className="text-neutral-500">{entry.playedMatches}</td>
                  <td className="hidden sm:table-cell text-neutral-500">{entry.wins}</td>
                  <td className="hidden sm:table-cell text-neutral-500">{entry.draws}</td>
                  <td className="hidden sm:table-cell text-neutral-500">{entry.losses}</td>
                  <td className="hidden xl:table-cell text-neutral-500">{entry.goalsScored}</td>
                  <td className="hidden xl:table-cell text-neutral-500">{entry.goalsConceded}</td>
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

      <div className="absolute top-1 right-2">
                <button className="p-1 hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900 rounded-full cursor-pointer transition-colors">
                  <MoreHorizontal size="20" />
                </button>
                {/* {showOptions && (
                  <div className="absolute right-0 w-32 bg-white border border-neutral-300 shadow-xl rounded-md z-10 overflow-hidden">
                    <button onClick={() => { setActiveModal("edit"); setShowOptions(false); }} className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-neutral-100 cursor-pointer">
                      <Edit2 size="14" /> Editar
                    </button>
                    <button onClick={() => { setActiveModal("delete"); setShowOptions(false); }} className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer">
                      <Trash size="14" /> Excluir
                    </button>
                  </div>
                )} */}
              </div>
    </Link>
  )
}