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
    <section className="bg-white dark:bg-zinc-950 border border-neutral-300 dark:border-neutral-900 rounded-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-200 mb-1">Visibilidade do Campeonato</h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">Controle quem pode visualizar as tabelas e resultados.</p>
        
        <div className="flex flex-col gap-4">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input 
              type="radio" 
              checked={isPublic} 
              onChange={() => setIsPublic(true)}
              className="mt-1 accent-black h-3 w-3 shrink-0"
            />
            <div>
              <span className="flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-200">
                <Globe size={14}/> Público
              </span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Qualquer pessoa com o link pode visualizar.</p>
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
              <span className="flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-200">
                <Lock size={14}/> Privado
              </span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Apenas você e membros convidados podem acessar.</p>
            </div>
          </label>
        </div>
      </div>
      
      <div className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-300 dark:border-neutral-900 px-6 py-3 flex justify-between items-center gap-2">
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Atualmente: <strong>{isPublicSaved ? "Público" : "Privado"}</strong>
        </p>
        <button 
          onClick={handleSaveVisibility}
          disabled={saving || isPublic === isPublicSaved}
          className="bg-black dark:bg-neutral-800 text-white text-sm font-medium px-4 py-2 rounded-md shrink-0 hover:bg-neutral-800 dark:hover:bg-neutral-700 
            cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black dark:disabled:hover:bg-neutral-800"
        >
          {saving ? "Salvando..." : "Salvar Alterações"}
        </button>
      </div>
    </section>
  );
}