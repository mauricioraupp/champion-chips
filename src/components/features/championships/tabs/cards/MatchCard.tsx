import { useEffect, useState } from "react";
import { updateMatch } from "@/app/actions/matches";
import { Edit } from '@geist-ui/icons'
import { toast } from "sonner";

export default function MatchCard({ match, onUpdate }: { match: any, onUpdate: () => void }) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    homeScore: match.homeScore,
    awayScore: match.awayScore,
    date: new Date(match.date).toISOString().split('T')[0],
    time: match.time,
    status: match.status
  })

  const handleSave = async () => {
    const result = await updateMatch(match.id, match.soccerLeagueId, formData)
    if (result.error) {
      toast.error("Não foi possível editar a partida")
    } else if (result.success) {
      toast.success("Partida editada com sucesso")
      setIsEditing(false)
      onUpdate()
    }
  }

  useEffect(() => {
    setFormData({
      homeScore: match.homeScore,
      awayScore: match.awayScore,
      date: match.date ? new Date(match.date).toISOString().split('T')[0] : "",
      time: match.time,
      status: match.status
    });
  }, [match]);

  if (!match.HomeTeam || !match.AwayTeam) return null;

  const isFinished = match.status === "FINISHED";

  if (isEditing) {
    return (
      <div className="flex flex-col gap-4 p-4 bg-blue-50 border border-blue-200">

        <div className="flex items-center justify-center gap-4">
          <input 
            type="number" 
            className="bg-neutral-50 w-12 border border-neutral-500 rounded-xs text-center"
            value={formData.homeScore}
            onChange={(e) => setFormData({...formData, homeScore: e.target.value})}
          />
          <span className="font-bold">X</span>
          <input 
            type="number" 
            className="bg-neutral-50 w-12 border border-neutral-500 rounded-xs text-center"
            value={formData.awayScore}
            onChange={(e) => setFormData({...formData, awayScore: e.target.value})}
          />
        </div>

        <div className="flex gap-2 justify-center">
          <input 
            type="date" 
            className="bg-neutral-50 text-xs border border-neutral-500 rounded-xs p-1"
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
          />
          <input 
            type="time" 
            className="bg-neutral-50 text-xs border border-neutral-500 rounded-xs p-1"
            value={formData.time || ""}
            onChange={(e) => setFormData({...formData, time: e.target.value})}
          />
          <select 
            className="bg-neutral-50 text-xs border border-neutral-500 rounded-xs p-1"
            value={formData.status}
            onChange={(e) => setFormData({...formData, status: e.target.value})}
          >
            <option value="SCHEDULED">Agendado</option>
            <option value="FINISHED">Finalizado</option>
          </select>
        </div>

        <div className="flex justify-end gap-2">
          <button onClick={() => setIsEditing(false)} className="text-sm text-neutral-700 hover:font-medium cursor-pointer">Cancelar</button>
          <button onClick={handleSave} className="bg-black text-sm text-white px-3 py-1 rounded-sm hover:bg-zinc-800 hover:font-medium cursor-pointer">Salvar</button>
        </div>

      </div>
    )
  }

  return(
    <div className={`relative flex items-center justify-between px-4 py-6 sm:p-10 border rounded-md hover:border-neutral-400 ${
      isFinished ? 'bg-neutral-200 border-neutral-200' : 'bg-neutral-50 border-neutral-300'
    }`}>
      
      <div className="flex items-center gap-1 sm:gap-2 flex-1 justify-end">
        <span className={`font-semibold ${isFinished ? 'text-neutral-600' : 'text-neutral-900'} hidden sm:block`}>
          {match.HomeTeam.name}
        </span>
        <span className={`text-sm font-semibold ${isFinished ? 'text-neutral-600' : 'text-neutral-900'} block sm:hidden`}>
          {match.HomeTeam.sigla}
        </span>
        <figure className={`w-6 sm:w-8 h-6 sm:h-8 ${isFinished ? 'grayscale opacity-70' : ''}`}>
          <img src={match.HomeTeam.logo} className="w-full h-full object-cover rounded-full"/>
        </figure>
      </div>

      <div className="flex flex-col items-center px-1 sm:px-4 min-w-[100px]">
        {isFinished ? (
          <div className="flex items-center gap-2">
            <span className="text-xl font-black text-neutral-800">{match.homeScore}</span>
            <span className="text-neutral-400 text-xs font-bold">X</span>
            <span className="text-xl font-black text-neutral-800">{match.awayScore}</span>
          </div>
        ) : (
          <p className="bg-neutral-300 text-xs font-medium text-neutral-700 uppercase px-2 py-1 ">
            {match.time ? match.time : "Agendada"}
          </p>
        )}
        <span className="text-xs font-medium text-neutral-400 uppercase">
          {isFinished 
            ? 'Finalizado' 
            : match.date 
              ? new Date(match.date).toLocaleDateString('pt-BR') 
              : '--/--/----'} 
        </span>
      </div>

      <div className="flex items-center gap-1 sm:gap-2 flex-1">
        <figure className={`w-6 sm:w-8 h-6 sm:h-8 ${isFinished ? 'grayscale opacity-70' : ''}`}>
          <img src={match.AwayTeam.logo} className="w-full h-full object-cover rounded-full"/>
        </figure>
        <span className={`font-semibold ${isFinished ? 'text-neutral-600' : 'text-neutral-900'} hidden sm:block`}>
          {match.AwayTeam.name}
        </span>
        <span className={`text-sm font-semibold ${isFinished ? 'text-neutral-600' : 'text-neutral-900'} block sm:hidden`}>
          {match.AwayTeam.sigla}
        </span>
      </div>
      <button className={`sm:absolute sm:right-8 p-2 ${isFinished ? 'hover:bg-neutral-300' : 'hover:bg-neutral-200' } rounded-full transition-colors cursor-pointer`}>
        <Edit onClick={() => setIsEditing(true)} size="20"/>
      </button>
    </div>
  )
}