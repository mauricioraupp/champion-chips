import { useEffect, useState } from "react"
import { getStandings } from "@/app/actions/standings"

export default function StandingsTab({ leagueId }: { leagueId: number }) {
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

  if (loading) return <div className="p-8 text-center">Carregando classificação...</div>

  return (
    <div className="w-full overflow-x-auto border-neutral-300 border-1 rounded-sm">
      <table className="w-full text-sm text-left">
        <thead className="bg-neutral-50 text-xs text-neutral-500 uppercase border-b border-neutral-300">
          <tr>
            <th className="px-4 py-4 font-medium text-center">Pos</th>
            <th className="px-4 py-4 font-medium">Clube</th>
            <th className="px-3 py-4 text-center">P</th>
            <th className="px-3 py-4 text-center">J</th>
            <th className="px-3 py-4 text-center">V</th>
            <th className="px-3 py-4 text-center">E</th>
            <th className="px-3 py-4 text-center">D</th>
            <th className="px-2 py-4 text-center">GP</th>
            <th className="px-2 py-4 text-center">GC</th>
            <th className="px-2 py-4 text-center">SG</th>
          </tr>
        </thead>
        <tbody className="bg-neutral-50 divide-y divide-neutral-200">
          {teams.map((entry, index) => (
            <tr key={entry.id}>
              <td className="px-4 py-4 text-center font-medium text-neutral-400">
                {index + 1}
              </td>
              <td className="px-4 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xs flex-shrink-0 overflow-hidden flex items-center justify-center">
                  {entry.logo ? (
                    <img 
                      src={entry.logo} 
                      alt={entry.name} 
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-[10px] font-bold text-neutral-400">{entry.sigla}</span>
                  )}
                </div>
                <span className="font-semibold text-neutral-800 uppercase">
                  {entry.name}
                </span>
              </td>
              <td className="px-3 py-4 text-center font-bold">
                {entry.points}
              </td>
              <td className="px-3 py-4 text-center text-neutral-600">{entry.playedMatches}</td>
              <td className="px-3 py-4 text-center text-neutral-600">{entry.wins}</td>
              <td className="px-3 py-4 text-center text-neutral-600">{entry.draws}</td>
              <td className="px-3 py-4 text-center text-neutral-600">{entry.losses}</td>
              <td className="px-3 py-4 text-center text-neutral-600">{entry.goalsScored}</td>
              <td className="px-3 py-4 text-center text-neutral-600">{entry.goalsConceded}</td>
              <td className="px-3 py-4 text-center text-neutral-600">
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