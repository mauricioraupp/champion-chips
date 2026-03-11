import { useState, useEffect, ChangeEvent } from "react";
import { X, Camera, Plus, Trash } from '@geist-ui/icons';
import { useUploadThing } from "@/utils/uploadthing";
import { updateTeam } from "@/app/actions/teams";
import { getPlayers } from "@/app/actions/players"
import { toast } from "sonner";

interface EditModalProps {
  team: any;
  onClose: () => void;
  onUpdate: () => void;
}

interface PlayerData {
  id?: number;
  name: string;
  position: string | null;
}

interface FormData {
  name: string;
  sigla: string;
  players: PlayerData[];
}

export function EditTeamModal({ team, onClose, onUpdate }: EditModalProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [preview, setPreview] = useState(team.logo || "");
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPosition, setNewPosition] = useState("");
  const [formData, setFormData] = useState<FormData>({
    name: team.name,
    sigla: team.sigla,
    players: []
  });

  useEffect(() => {
    async function load() {
      const data = await getPlayers(team.id);
      setFormData(prev => ({ ...prev, players: data }));
    }
    load();
  }, [team.id]);

  const { startUpload } = useUploadThing("teamLogo");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    if (!formData.name || !formData.sigla) return alert("Campos obrigatórios!");
    setIsUploading(true);
    try {
      let finalLogoUrl = team.logo;
      if (logoFile) {
        const res = await startUpload([logoFile]);
        if (res?.[0]) finalLogoUrl = res[0].url;
      }
      const result = await updateTeam(team.id, { ...formData, logo: finalLogoUrl }, team.logo);
      if (result.error) {
        toast.error("Não foi possível editar o time")
      } if (result.success) {
        toast.success("Time editado com sucesso")
        onUpdate();
        onClose();
      }
    } finally {
      setIsUploading(false);
    }
  };

  const addPlayer = () => {
    if (!newPlayerName.trim()) return;
    setFormData(prev => ({
      ...prev,
      players: [
        ...prev.players, 
        { 
          id: undefined, 
          name: newPlayerName, 
          position: newPosition 
        }
      ]
    }));
    setNewPlayerName("");
    setNewPosition("");
  };

  const removePlayer = (idToRemove: number | undefined, index: number) => {
    const updated = formData.players.filter((p: any, i: number) => {
      if (idToRemove) return p.id !== idToRemove;
      return i !== index;
    });
    setFormData({ ...formData, players: updated });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-md shadow-2xl w-full max-w-md overflow-y-auto">
        <header className="flex items-center justify-between p-4 bg-neutral-100">
          <h3 className="font-bold text-neutral-900">Editar Time</h3>
          <button onClick={() => onClose()} className="text-neutral-400 hover:text-neutral-600 cursor-pointer"><X size="20" /></button>
        </header>
        <section className="p-6 flex flex-col gap-6">
          <article className="flex flex-col items-center gap-2">
            <div className="relative group">
              <figure className="w-24 h-24 shadow-inner border border-neutral-200 rounded-full overflow-hidden bg-neutral-100">
                <img src={preview} className="w-full h-full object-cover" alt="Preview" />
              </figure>
              <label className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-full cursor-pointer">
                <Camera color="white" size={24} />
                <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
              </label>
            </div>
            <span className="text-[10px] text-neutral-400 uppercase font-bold">Clique para alterar</span>
          </article>
          <article className="grid grid-cols-4 gap-4">
            <div className="col-span-3 flex flex-col gap-1">
              <label className="text-xs font-bold text-neutral-500 uppercase">Nome</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full border border-neutral-300 rounded-sm p-2 text-sm outline-none focus:border-black" />
            </div>
            <div className="col-span-1 flex flex-col gap-1">
              <label className="text-xs font-bold text-neutral-500 uppercase">Sigla</label>
              <input type="text" value={formData.sigla} maxLength={3} onChange={(e) => setFormData({...formData, sigla: e.target.value})} className="w-full border border-neutral-300 rounded-sm p-2 text-sm outline-none focus:border-black uppercase text-center" />
            </div>
          </article>
          <article className="flex flex-col gap-3">
            <label className="text-xs font-bold text-neutral-500 uppercase border-b border-neutral-300 pb-1">Gerenciar Jogadores</label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="text" 
                placeholder="Nome do jogador" 
                value={newPlayerName}
                onChange={(e) => setNewPlayerName(e.target.value)}
                className="flex-1 border border-neutral-300 rounded-sm p-2 text-sm outline-none focus:border-black"
              />
              <div className="flex gap-2">
                <select 
                  value={newPosition}
                  onChange={(e) => setNewPosition(e.target.value)}
                  className="flex-1 border border-neutral-300 rounded-sm p-2 text-sm outline-none focus:border-black cursor-pointer"
                >
                  <option value={""}>Posição</option>
                  <option value={"Atacante"}>Atacante</option>
                  <option value={"Meio-campo"}>Meio-campo</option>
                  <option value={"Defensor"}>Defensor</option>
                  <option value={"Goleiro"}>Goleiro</option>
                </select>
                <button onClick={addPlayer} className="bg-neutral-100 p-2 border border-neutral-300 rounded-sm hover:bg-neutral-200 cursor-pointer">
                  <Plus size={18}/>
                </button>
              </div>
            </div>
            <div className="max-h-40 overflow-y-auto flex flex-col gap-1 bg-neutral-50 p-2 rounded-sm border border-neutral-300">
              {formData.players.map((player: any, index: number) => {
                const itemKey = player.id ? `db-${player.id}` : `new-${index}`;
                return (
                  <div key={itemKey} className="flex items-center bg-white border border-neutral-200 rounded-xs">
                    <span className="flex-1 text-xs font-medium p-2 text-neutral-700">
                      {player.name}
                    </span>
                    
                    {player.position && (
                      <span className="flex-1 text-xs font-medium p-2 text-neutral-700 border-l border-neutral-300">
                        {player.position}
                      </span>
                    )}

                    <button 
                      type="button"
                      onClick={() => removePlayer(player.id, index)} 
                      className="p-2 text-neutral-400 hover:text-red-500 cursor-pointer"
                    >
                      <Trash size={14}/>
                    </button>
                  </div>
                );
              })}

              {formData.players.length === 0 && <p className="text-[10px] text-center text-neutral-400 py-2 italic">Sem jogadores</p>}
            </div>
          </article>
        </section>
        <footer className="p-4 bg-neutral-100 flex justify-end gap-3">
          <button 
            onClick={() => onClose()} 
            className="px-4 py-2 text-sm text-neutral-800 font-medium rounded-sm hover:bg-neutral-200 cursor-pointer"
          >
            Cancelar
          </button>
          <button 
            onClick={handleSave} 
            disabled={isUploading}
            className="px-6 py-2 bg-black text-white text-sm font-semibold rounded-sm disabled:bg-neutral-400 flex items-center hover:bg-zinc-800 cursor-pointer"
          >
            {isUploading ? "Salvando..." : "Salvar Alterações"}
          </button>
        </footer>
      </div>
    </div>
  );
}