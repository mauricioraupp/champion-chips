import { useEffect, useState } from "react"
import { getScorers } from "@/app/actions/scorers"

export default function ScorersTab({ leagueId }: { leagueId: string }) {
  const [players, setPlayers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getScorers(leagueId)
        setPlayers(data)
      } catch (error) {
        console.error("Erro ao carregar artilharia:", error)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [leagueId])

  if (loading) return <div className="p-8 text-center text-neutral-500 dark:text-neutral-400 italic">Carregando artilharia...</div>
  
  if (players.length === 0) return (
    <div className="p-12 text-center border border-dashed border-neutral-300 dark:border-neutral-800 rounded-md text-neutral-400">
      Nenhum gol registrado nesta liga ainda.
    </div>
  )

  let currentPos = 1;

  return (
    <div className="w-full overflow-x-auto border-neutral-300 dark:border-neutral-900 border rounded-md shadow-sm">
      <table className="w-full text-sm text-left border-collapse">
        <thead className="bg-neutral-50 dark:bg-zinc-900 text-[10px] text-neutral-500 dark:text-neutral-300 uppercase 
          border-b border-neutral-300 dark:border-neutral-900 font-bold"
        >
          <tr>
            <th className="px-4 py-4 text-center w-16">Pos</th>
            <th className="px-4 py-4">Jogador</th>
            <th className="px-4 py-4">Clube</th>
            <th className="px-6 py-4 text-center w-24">Gols</th>
          </tr>
        </thead>
        <tbody className="bg-neutral-50 dark:bg-zinc-950 divide-y divide-neutral-200 dark:divide-neutral-900">
          {players.map((entry, index) => {
            if (index > 0 && entry.goals !== players[index - 1].goals) {
              currentPos = index + 1;
            }

            return (
              <tr key={entry.id} className="text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-950 transition-colors">
                <td className="px-4 py-4 text-center font-bold text-neutral-400 dark:text-neutral-300">
                  {currentPos}º
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-neutral-100 dark:bg-zinc-900 border border-neutral-200 dark:border-neutral-800 flex-shrink-0">
                      <img 
                        src={entry.picture || `https://ui-avatars.com/api/?name=${entry.name}`} 
                        alt={entry.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-bold text-neutral-900 dark:text-neutral-200 whitespace-nowrap">
                      {entry.name}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-white border border-neutral-100 dark:border-neutral-800">
                      <img 
                        src={entry.teamLogo || "/placeholder-team.png"} 
                        alt={entry.teamName} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs text-neutral-600 dark:text-neutral-400 font-medium uppercase truncate max-w-[150px]">
                      {entry.teamName}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-neutral-700 dark:text-neutral-100 font-bold text-lg">
                    {entry.goals}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}