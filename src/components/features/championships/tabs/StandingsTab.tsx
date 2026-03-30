import { useEffect, useState } from "react"
import { getStandings } from "@/app/actions/standings"

export default function StandingsTab({ leagueId }: { leagueId: string }) {
  const [teams, setTeams] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      const data = await getStandings(leagueId)
      setTeams(data)
      setLoading(false)
    }
    loadData()
  }, [leagueId])

  if (loading) return <div className="p-8 text-center text-neutral-500 dark:text-neutral-400 italic">Carregando classificação...</div>

  return (
    <div className="w-full overflow-x-auto border-neutral-300 dark:border-neutral-900 border rounded-md">
      <table className="w-full text-sm text-left border-collapse">
        <thead className="bg-neutral-100 dark:bg-zinc-900 text-[10px] text-neutral-500 dark:text-neutral-300 uppercase 
          border-b border-neutral-300 dark:border-neutral-900 font-bold"
        >
          <tr>
            <th className="px-4 py-4 text-center w-16">Pos</th>
            <th className="px-4 py-4 ">Clube</th>
            <th className="px-3 py-4 text-center">PTS</th>
            <th className="px-3 py-4 text-center">PJ</th>
            <th className="px-3 py-4 text-center">V</th>
            <th className="px-3 py-4 text-center">E</th>
            <th className="px-3 py-4 text-center">D</th>
            <th className="px-2 py-4 text-center">GP</th>
            <th className="px-2 py-4 text-center">GC</th>
            <th className="px-2 py-4 text-center">SG</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-zinc-950 divide-y divide-neutral-200 dark:divide-neutral-900">
          {teams.map((entry, index) => (
            <tr key={entry.id} className="text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-950 transition-colors">
              <td className="px-4 py-4 text-center font-bold text-neutral-400 dark:text-neutral-300">
                {index + 1}º
              </td>
              <td className="px-4 py-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex-shrink-0 overflow-hidden flex items-center justify-center">
                  {entry.logo ? (
                    <img 
                      src={entry.logo} 
                      alt={entry.name} 
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-[10px] font-bold text-neutral-400">{entry.sigla}</span>
                  )}
                </div>
                <span className="font-bold text-neutral-900 dark:text-neutral-200 whitespace-nowrap">
                  {entry.name}
                </span>
              </td>
              <td className="px-3 py-4 text-center text-black dark:text-neutral-100 font-bold">
                {entry.points}
              </td>
              <td className="px-3 py-4 text-center">{entry.playedMatches}</td>
              <td className="px-3 py-4 text-center">{entry.wins}</td>
              <td className="px-3 py-4 text-center">{entry.draws}</td>
              <td className="px-3 py-4 text-center">{entry.losses}</td>
              <td className="px-3 py-4 text-center">{entry.goalsScored}</td>
              <td className="px-3 py-4 text-center">{entry.goalsConceded}</td>
              <td className="px-3 py-4 text-center text-black dark:text-neutral-100 font-semibold">
                <span className={entry.goalsDiff > 0 ? "text-green-600" : entry.goalsDiff < 0 ? "text-red-600" : ""}>
                  {entry.goalsDiff}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}