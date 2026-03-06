"use server"

import { getStandings } from "@/app/actions/standings"

export default async function StandingsTab({ leagueId }: { leagueId: number }) {
  const teams = await getStandings(leagueId)

  return (
    <div className="w-full overflow-x-auto bg-white rounded-xl shadow-sm border border-neutral-200">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-neutral-500 uppercase bg-neutral-50 border-b">
          <tr>
            <th className="px-4 py-4 font-medium text-center">Pos</th>
            <th className="px-4 py-4 font-medium">Clube</th>
            <th className="px-3 py-4 text-center font-bold">P</th>
            <th className="px-3 py-4 text-center">J</th>
            <th className="px-3 py-4 text-center">V</th>
            <th className="px-3 py-4 text-center">E</th>
            <th className="px-3 py-4 text-center">D</th>
            <th className="px-3 py-4 text-center">GP</th>
            <th className="px-3 py-4 text-center">GC</th>
            <th className="px-3 py-4 text-center">SG</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-100">
          {teams.map((entry, index) => (
            <tr key={entry.id} className="hover:bg-neutral-50 transition-colors">
              <td className="px-4 py-4 text-center font-medium text-neutral-400">
                {index + 1}º
              </td>
              <td className="px-4 py-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-neutral-200 rounded-full flex-shrink-0" /> {/* Logo aqui */}
                <span className="font-semibold text-neutral-800 uppercase">
                  {entry.name}
                </span>
              </td>
              <td className="px-3 py-4 text-center font-bold text-blue-600 bg-blue-50/30">
                {entry.points}
              </td>
              <td className="px-3 py-4 text-center text-neutral-600">{entry.playedMatches}</td>
              <td className="px-3 py-4 text-center text-neutral-600">{entry.wins}</td>
              <td className="px-3 py-4 text-center text-neutral-600">{entry.draws}</td>
              <td className="px-3 py-4 text-center text-neutral-600">{entry.losses}</td>
              <td className="px-3 py-4 text-center text-neutral-600">{entry.goalsScored}</td>
              <td className="px-3 py-4 text-center text-neutral-600">{entry.goalsConceded}</td>
              <td className="px-3 py-4 text-center font-medium">
                <span className={entry.goalsDiff > 0 ? "text-green-600" : entry.goalsDiff < 0 ? "text-red-600" : ""}>
                  {entry.goalsDiff > 0 ? `+${entry.goalsDiff}` : entry.goalsDiff}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}