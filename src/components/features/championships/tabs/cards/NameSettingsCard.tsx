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
    <section className="bg-white border border-neutral-300 rounded-md overflow-hidden shadow-sm">
      <div className="p-6">
        <h3 className="text-sm font-semibold text-neutral-800 mb-1">Nome do Campeonato</h3>
        <p className="text-sm text-neutral-500 mb-4">Este é o nome que aparecerá nas tabelas e menus de navegação</p>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full max-w-md px-3 py-2 border border-neutral-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-black transition-all"
          placeholder="Nome do torneio"
          maxLength={32}
        />
      </div>
      <div className="bg-neutral-50 border-t border-neutral-300 px-6 py-3 flex justify-between items-center gap-2">
        <p className="text-xs text-neutral-500">Máximo de 32 caracteres</p>
        <button 
          onClick={handleSaveName}
          disabled={saving || name === savedName}
          className="bg-black text-white text-sm font-medium px-4 py-2 rounded-md shrink-0 hover:bg-zinc-800 
            cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black"
        >
          {saving ? "Salvando..." : "Salvar Alterações"}
        </button>
      </div>
    </section>
  );
}