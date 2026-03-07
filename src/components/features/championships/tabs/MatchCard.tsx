export default function MatchCard({ match }: { match: any }) {
  const { HomeTeam, AwayTeam, homeScore, awayScore, status } = match;

  if (!HomeTeam || !AwayTeam) return null;

  const isFinished = status === "FINISHED";

  return(
    <div className={`flex items-center justify-between p-8 border first:rounded-t-sm last:rounded-b-sm transition-all ${
      isFinished ? 'bg-neutral-150 hover:bg-neutral-300 border-neutral-200' : 'bg-neutral-50 hover:bg-neutral-150 border-neutral-300'
    }`}>
      
      {/* Time Casa */}
      <div className="flex items-center gap-3 flex-1 justify-end">
        <span className={`font-semibold ${isFinished ? 'text-neutral-600' : 'text-neutral-900'}`}>
          {match.HomeTeam.name}
        </span>
        <img src={match.HomeTeam.logo} className={`w-8 h-8 ${isFinished ? 'grayscale opacity-70' : ''}`} />
      </div>

      {/* Placar ou Hora */}
      <div className="flex flex-col items-center px-6 min-w-[100px]">
        {isFinished ? (
          <div className="flex items-center gap-2">
            <span className="text-xl font-black text-neutral-800">{match.homeScore}</span>
            <span className="text-neutral-400 text-xs font-bold">X</span>
            <span className="text-xl font-black text-neutral-800">{match.awayScore}</span>
          </div>
        ) : (
          <div className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold tracking-tighter">
            {match.time}
          </div>
        )}
        <span className="text-[10px] uppercase text-neutral-400 mt-1 font-medium">
          {isFinished ? 'Finalizado' : match.date}
        </span>
      </div>

      {/* Time Fora */}
      <div className="flex items-center gap-3 flex-1">
        <img src={match.AwayTeam.logo} className={`w-8 h-8 ${isFinished ? 'grayscale opacity-70' : ''}`} />
        <span className={`font-semibold ${isFinished ? 'text-neutral-600' : 'text-neutral-900'}`}>
          {match.AwayTeam.name}
        </span>
      </div>
    </div>
  )
}