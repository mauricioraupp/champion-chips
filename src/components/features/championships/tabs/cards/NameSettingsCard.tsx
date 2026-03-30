import { useState } from "react";
import { updateChampionshipName } from "@/app/actions/championships";
import { toast } from "sonner";

interface NameSettingsCardProps {
  leagueId: string;
  initialName: string;
}

export default function NameSettingsCard({ leagueId, initialName }: NameSettingsCardProps) {
  const [name, setName] = useState(initialName);
  const [savedName, setSavedName] = useState(initialName);
  const [saving, setSaving] = useState(false);

  const handleSaveName = async () => {
    if (!name.trim()) return;
    
    setSaving(true);
    const result = await updateChampionshipName(leagueId, name);
    
    if (result.success) {
      setSavedName(name);
      toast.success("Nome atualizado com sucesso!");
    } else {
      toast.error(result.error);
    }
    setSaving(false);
  };

  return (
    <section className="bg-white dark:bg-zinc-950 border border-neutral-300 dark:border-neutral-900 rounded-md overflow-hidden shadow-sm">
      <div className="p-6">
        <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-1">Nome do Campeonato</h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Este é o nome que aparecerá nas tabelas e menus de navegação</p>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full max-w-md px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md text-sm focus:outline-none focus:border-neutral-800 dark:focus:border-neutral-200 transition-colors"
          placeholder="Nome do torneio"
          maxLength={32}
        />
      </div>
      <div className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-300 dark:border-neutral-900 px-6 py-3 flex justify-between items-center gap-2">
        <p className="text-xs text-neutral-500 dark:text-neutral-400">Máximo de 32 caracteres</p>
        <button 
          onClick={handleSaveName}
          disabled={saving || name === savedName}
          className="bg-black dark:bg-neutral-800 text-white text-sm font-medium px-4 py-2 rounded-md shrink-0 hover:bg-neutral-800 dark:hover:bg-neutral-700 
            cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black dark:disabled:hover:bg-neutral-800"
        >
          {saving ? "Salvando..." : "Salvar Alterações"}
        </button>
      </div>
    </section>
  );
}