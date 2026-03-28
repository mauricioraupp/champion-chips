import { useState } from "react";
import { updateChampionshipVisibility } from "@/app/actions/championships";
import { Globe, Lock } from "@geist-ui/icons";
import { toast } from "sonner";

interface VisibilitySettingsCardProps {
  leagueId: string;
  initialPublic: boolean;
}

export default function VisibilitySettingsCard({ leagueId, initialPublic }: VisibilitySettingsCardProps) {
  const [isPublic, setIsPublic] = useState(initialPublic);
  const [isPublicSaved, setIsPublicSaved] = useState(initialPublic);
  const [saving, setSaving] = useState(false);

  const handleSaveVisibility = async () => {
    setSaving(true);
    const result = await updateChampionshipVisibility(leagueId, isPublic);
    if (result.success) {
      toast.success("Visibilidade atualizada!");
      setIsPublicSaved(isPublic);
    } else {
      toast.error(result.error);
    }
    setSaving(false);
  };

  return (
    <section className="bg-white border border-neutral-300 rounded-md overflow-hidden shadow-sm">
      <div className="p-6">
        <h3 className="text-sm font-semibold text-neutral-900 mb-1">Visibilidade do Campeonato</h3>
        <p className="text-sm text-neutral-500 mb-6">Controle quem pode visualizar as tabelas e resultados.</p>
        
        <div className="flex flex-col gap-4">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input 
              type="radio" 
              checked={isPublic} 
              onChange={() => setIsPublic(true)}
              className="mt-1 accent-black h-3 w-3 shrink-0"
            />
            <div>
              <span className="flex items-center gap-2 text-sm font-medium text-neutral-900">
                <Globe size={14}/> Público
              </span>
              <p className="text-xs text-neutral-500">Qualquer pessoa com o link pode visualizar.</p>
            </div>
          </label>

          <label className="flex items-start gap-3 cursor-pointer group">
            <input 
              type="radio" 
              checked={!isPublic} 
              onChange={() => setIsPublic(false)}
              className="mt-1 accent-black h-3 w-3 shrink-0"
            />
            <div>
              <span className="flex items-center gap-2 text-sm font-medium text-neutral-900">
                <Lock size={14}/> Privado
              </span>
              <p className="text-xs text-neutral-500">Apenas você e membros convidados podem acessar.</p>
            </div>
          </label>
        </div>
      </div>
      
      <div className="bg-neutral-50 border-t border-neutral-300 px-6 py-3 flex justify-between items-center gap-2">
        <p className="text-xs text-neutral-500">
          Atualmente: <strong>{isPublicSaved ? "Público" : "Privado"}</strong>
        </p>
        <button 
          onClick={handleSaveVisibility}
          disabled={saving || isPublic === isPublicSaved}
          className="bg-black text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-zinc-800 transition-colors disabled:opacity-50"
        >
          {saving ? "Salvando..." : "Salvar Alterações"}
        </button>
      </div>
    </section>
  );
}