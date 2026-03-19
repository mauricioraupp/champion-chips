import { useState, useEffect } from "react";
import { X } from '@geist-ui/icons';
import { updateMatch } from "@/app/actions/matches";
import { getPlayers } from "@/app/actions/players";
import { toast } from "sonner";

interface EditMatchModalProps {
  match: any;
  onClose: () => void;
  onUpdate: () => void;
}

export function EditMatchModal({ match, onClose, onUpdate }: EditMatchModalProps) {
  const [loading, setLoading] = useState(false);
  const [homePlayers, setHomePlayers] = useState<any[]>([]);
  const [awayPlayers, setAwayPlayers] = useState<any[]>([]);

  const [formData, setFormData] = useState(() => {
    const hScore = match.homeScore || 0;
    const aScore = match.awayScore || 0;

    const savedHomeScorers = match.Goals
      ?.filter((g: any) => g.teamId === match.homeTeamId)
      .map((g: any) => String(g.playerId)) || [];

    const savedAwayScorers = match.Goals
      ?.filter((g: any) => g.teamId === match.awayTeamId)
      .map((g: any) => String(g.playerId)) || [];

    const homeScorers = Array.from({ length: hScore }, (_, i) => savedHomeScorers[i] || "");
    const awayScorers = Array.from({ length: aScore }, (_, i) => savedAwayScorers[i] || "");

    return {
      homeScore: hScore,
      awayScore: aScore,
      date: match.date ? new Date(match.date).toISOString().split('T')[0] : "",
      time: match.time || "",
      status: match.status || "SCHEDULED",
      homeScorers,
      awayScorers,
    };
  });

  useEffect(() => {
    async function load() {
      const [hPlayers, aPlayers] = await Promise.all([
        getPlayers(match.homeTeamId),
        getPlayers(match.awayTeamId)
      ]);
      setHomePlayers(hPlayers);
      setAwayPlayers(aPlayers);
    }
    load();
  }, [match]);

  const handleScoreChange = (team: 'home' | 'away', value: number) => {
    const newScore = Math.max(0, value);
    const scorerKey = team === 'home' ? 'homeScorers' : 'awayScorers';
    const scoreKey = team === 'home' ? 'homeScore' : 'awayScore';

    setFormData(prev => {
      const currentScorers = [...prev[scorerKey]];
      if (newScore > currentScorers.length) {
        const diff = newScore - currentScorers.length;
        for (let i = 0; i < diff; i++) currentScorers.push("");
      } else {
        currentScorers.splice(newScore);
      }

      const otherScore = team === 'home' ? prev.awayScore : prev.homeScore;
      const hasGoals = newScore > 0 || otherScore > 0;
      
      const newStatus = hasGoals ? "FINISHED" : "SCHEDULED";

      return {
        ...prev,
        [scoreKey]: newScore,
        [scorerKey]: currentScorers,
        status: newStatus
      };
    });
  };

  const updateScorer = (team: 'home' | 'away', index: number, playerId: string) => {
    const scorerKey = team === 'home' ? 'homeScorers' : 'awayScorers';
    const updated = [...formData[scorerKey]];
    updated[index] = playerId;
    setFormData({ ...formData, [scorerKey]: updated });
  };

  const handleSave = async () => {
    setLoading(true);
    const payload = {
      ...formData,
      homeTeamId: match.homeTeamId,
      awayTeamId: match.awayTeamId
    };
    try {
      const result = await updateMatch(match.id, match.soccerLeagueId, payload);
      if (result.success) {
        toast.success("Partida atualizada!");
        onUpdate();
        onClose();
      } else {
        toast.error(result.error || "Erro ao salvar");
      }
    } catch (error) {
      toast.error("Erro inesperado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-md shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        <header className="flex items-center justify-between p-4 bg-neutral-100">
          <h3 className="font-bold text-neutral-900">Editar Resultado</h3>
          <button onClick={onClose} className="p-1 rounded-full text-neutral-400 hover:text-neutral-600 hover:bg-neutral-200 cursor-pointer transition-colors">
            <X size="20" />
          </button>
        </header>

        <div className="overflow-y-auto p-6 flex flex-col gap-6">
          <section className="flex items-center justify-around bg-neutral-50 p-4 rounded-sm border border-neutral-200">
            <div className="flex flex-col items-center gap-2">
              <figure className="w-12 h-12 shadow-inner border border-neutral-200 rounded-full overflow-hidden bg-white">
                <img src={match.HomeTeam.logo} className="w-full h-full object-cover" />
              </figure>
              <span className="hidden sm:block text-xs font-bold">{match.HomeTeam.name}</span>
              <span className="block sm:hidden text-xs font-bold">{match.HomeTeam.sigla}</span>
              <input 
                type="number" 
                min="0"
                className="w-16 text-center text-2xl font-black border-b-2 border-neutral-300 focus:border-black outline-none bg-transparent [&::-webkit-inner-spin-button]:appearance-none"
                value={formData.homeScore}
                onChange={(e) => handleScoreChange('home', parseInt(e.target.value) || 0)}
              />
            </div>

            <span className="text-xl font-black text-neutral-300">X</span>

            <div className="flex flex-col items-center gap-2">
              <figure className="w-12 h-12 shadow-inner border border-neutral-200 rounded-full overflow-hidden bg-white">
                <img src={match.AwayTeam.logo} className="w-full h-full object-cover" />
              </figure>
              <span className="hidden sm:block text-xs font-bold">{match.AwayTeam.name}</span>
              <span className="block sm:hidden text-xs font-bold">{match.AwayTeam.sigla}</span>
              <input 
                type="number" 
                min="0"
                className="no-spinner w-16 text-center text-2xl font-black border-b-2 border-neutral-300 focus:border-black outline-none bg-transparent [&::-webkit-inner-spin-button]:appearance-none"
                value={formData.awayScore}
                onChange={(e) => handleScoreChange('away', parseInt(e.target.value) || 0)}
              />
            </div>
          </section>

          <section className="grid grid-cols-2 gap-6 border-t border-neutral-300 pt-4">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-neutral-400 uppercase truncate mb-1">
                {match.HomeTeam.name}
              </label>
              
              <div className="flex flex-col gap-2 max-h-30 overflow-y-auto pr-2 custom-scrollbar">
                {formData.homeScorers.map((scorerId: string | number, idx: number) => (
                  <select 
                    key={`home-goal-${idx}`}
                    value={scorerId}
                    onChange={(e) => updateScorer('home', idx, e.target.value)}
                    className="text-xs border border-neutral-300 p-2 rounded-sm outline-none focus:border-black bg-white w-full"
                  >
                    <option value="">{idx + 1}º Gol</option>
                    {homePlayers.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                  </select>
                ))}
                {formData.homeScore === 0 && <span className="text-[10px] italic text-neutral-400">Sem gols</span>}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-neutral-400 uppercase truncate mb-1">
                {match.AwayTeam.name}
              </label>
              
              <div className="flex flex-col gap-2 max-h-30 overflow-y-auto pr-2 custom-scrollbar">
                {formData.awayScorers.map((scorerId: string | number, idx: number) => (
                  <select 
                    key={`away-goal-${idx}`}
                    value={scorerId}
                    onChange={(e) => updateScorer('away', idx, e.target.value)}
                    className="text-xs border border-neutral-300 p-2 rounded-sm outline-none focus:border-black bg-white w-full"
                  >
                    <option value="">{idx + 1}º Gol</option>
                    {awayPlayers.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                  </select>
                ))}
                {formData.awayScore === 0 && <span className="text-[10px] italic text-neutral-400">Sem gols</span>}
              </div>
            </div>
          </section>

          <section className="grid grid-cols-3 gap-4 border-t border-neutral-300 pt-4">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-neutral-500 uppercase">Data</label>
              <input type="date" className="border border-neutral-300 p-2 text-sm rounded-sm outline-none focus:border-black" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-neutral-500 uppercase">Hora</label>
              <input type="time" className="border border-neutral-300 p-2 text-sm rounded-sm outline-none focus:border-black" value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-neutral-500 uppercase">Status</label>
              <select 
                className={`border p-2 text-sm rounded-sm outline-none transition-colors bg-white ${
                  formData.status === 'FINISHED' ? 'border-green-600 font-bold text-green-800' : 'border-neutral-300'
                }`} 
                value={formData.status} 
                onChange={(e) => setFormData({...formData, status: e.target.value})}
              >
                <option value="SCHEDULED">Agendado</option>
                <option value="FINISHED">Finalizado</option>
              </select>
            </div>
          </section>
        </div>

        <footer className="p-4 bg-neutral-100 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 text-sm font-medium hover:bg-neutral-200 rounded-sm cursor-pointer transition-colors">Cancelar</button>
          <button 
            onClick={handleSave} 
            disabled={loading}
            className="px-6 py-2 bg-black text-white text-sm font-bold truncate rounded-sm hover:bg-neutral-800 disabled:bg-neutral-400 cursor-pointer transition-colors"
          >
            {loading ? "Salvando..." : "Confirmar Resultado"}
          </button>
        </footer>
      </div>
    </div>
  );
}