"use client"

import { useEffect, useState } from "react"
import { getChampionshipInfo } from "@/app/actions/championships";
import { getStandings } from "@/app/actions/standings"
import { MoreHorizontal } from '@geist-ui/icons';
import Image from 'next/image';

export default function ChampionshipCreated({ leagueId }: { leagueId: number }) {
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
    <div className="relative flex flex-col lg:flex-row gap-6 bg-neutral-50 border border-neutral-200 rounded-md w-full max-w-6xl 
      p-4 md:p-6 mx-auto shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <section className="flex flex-col justify-center text-center lg:text-left lg:min-w-[180px] border-b lg:border-b-0 lg:border-r-2 border-neutral-200 pb-4 lg:pb-0 lg:pr-6">
        <h1 className="font-bold text-xl text-neutral-900 truncate">{championship.name}</h1>
        <div className="mt-1 space-y-0.5">
          <p className="text-sm font-medium text-neutral-500">Futebol • Liga</p>
          <p className="text-sm font-bold">
            {nextMatch ? `Rodada ${nextMatch.round}` : "Finalizado"}
          </p>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center py-2 lg:py-0 lg:px-6 min-w-fit">
        <h2 className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-3">Próxima partida</h2>
        {nextMatch ? (
          <div className="flex flex-col items-center gap-2">
            <article className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-1">
                <Image
                  src={nextMatch.HomeTeam?.logo || "/placeholder.png"}
                  width={44}
                  height={44}
                  alt="Escudo Home"
                  className="rounded-full shadow-sm object-contain bg-white p-1"
                />
                <span className="text-[10px] font-bold uppercase md:hidden">{nextMatch.HomeTeam?.sigla}</span>
              </div>
              
              <p className="font-black text-neutral-300 text-xl italic">X</p>
              
              <div className="flex flex-col items-center gap-1">
                <Image
                  src={nextMatch.AwayTeam?.logo || "/placeholder.png"}
                  width={44}
                  height={44}
                  alt="Escudo Away"
                  className="rounded-full shadow-sm object-contain bg-white p-1"
                />
                <span className="text-[10px] font-bold uppercase md:hidden">{nextMatch.AwayTeam?.sigla}</span>
              </div>
            </article>
            <p className="text-xs font-semibold text-neutral-500 mt-1">
              {nextMatch.date ? new Date(nextMatch.date).toLocaleDateString() : "Data a definir"}
            </p>
          </div>
        ) : (
          <p className="text-sm text-neutral-400 italic">Sem jogos pendentes</p>
        )}
      </section>

      <section className="flex-1 min-w-0">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-[10px] uppercase text-neutral-400 border-b border-neutral-100">
                <th className="text-left py-2 font-bold">Equipe</th>
                <th className="px-2 py-2">Pts</th>
                <th className="px-2 py-2">PJ</th>
                <th className="px-2 py-2 hidden sm:table-cell">V</th>
                <th className="px-2 py-2 hidden sm:table-cell">E</th>
                <th className="px-2 py-2 hidden sm:table-cell">D</th>
                <th className="px-2 py-2 hidden md:table-cell">GM</th>
                <th className="px-2 py-2 hidden md:table-cell">GC</th>
                <th className="px-2 py-2">SG</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-50">
              {teams.slice(0, 3).map((entry, index) => (
                <tr key={entry.id} className="text-sm text-center hover:bg-neutral-100/50 transition-colors">
                  <td className="text-left py-3 flex items-center gap-3">
                    <span className={`text-[10px] font-bold w-4 ${index === 0 ? 'text-yellow-500' : 'text-neutral-300'}`}>
                      {index + 1}º
                    </span>
                    <span className="truncate font-semibold text-neutral-800 max-w-[80px] md:max-w-[120px]">
                      {entry.name}
                    </span>
                  </td>
                  <td className="font-bold text-neutral-900">{entry.points}</td>
                  <td className="text-neutral-500">{entry.playedMatches}</td>
                  <td className="hidden sm:table-cell text-neutral-500">{entry.wins}</td>
                  <td className="hidden sm:table-cell text-neutral-500">{entry.draws}</td>
                  <td className="hidden sm:table-cell text-neutral-500">{entry.losses}</td>
                  <td className="hidden md:table-cell text-neutral-500">{entry.goalsScored}</td>
                  <td className="hidden md:table-cell text-neutral-500">{entry.goalsConceded}</td>
                  <td>
                    <span className={`font-bold ${entry.goalsDiff > 0 ? "text-green-500" : entry.goalsDiff < 0 ? "text-red-500" : "text-neutral-400"}`}>
                      {entry.goalsDiff > 0 ? `+${entry.goalsDiff}` : entry.goalsDiff}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <button className="absolute top-4 right-4 p-1 text-neutral-400 hover:text-neutral-900 transition-colors">
        <MoreHorizontal size={20} />
      </button>
    </div>
  )
}