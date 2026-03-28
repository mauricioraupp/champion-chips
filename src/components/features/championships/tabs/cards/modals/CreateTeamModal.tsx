import { useState, ChangeEvent } from "react";
import { X, Camera, Plus, Trash } from '@geist-ui/icons';
import { useUploadThing } from "@/utils/uploadthing";
import { createTeam } from "@/app/actions/teams";
import { toast } from "sonner";
import { AnimatePresence, motion } from "framer-motion";

interface CreateModalProps {
  leagueId: string;
  onClose: () => void;
  onUpdate: () => void;
}

interface PlayerData {
  name: string;
  position: string | null;
}

export function CreateTeamModal({ leagueId, onClose, onUpdate }: CreateModalProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("/default-team-logo.png");
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPosition, setNewPosition] = useState("");
  
  const [formData, setFormData] = useState({
    name: "",
    sigla: "",
    players: [] as PlayerData[]
  });

  const { startUpload } = useUploadThing("teamLogo");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    if (!formData.name || !formData.sigla) return toast.error("Nome e Sigla são obrigatórios!");
    
    setIsUploading(true);
    try {
      let finalLogoUrl = "/default-team-logo.png";
      
      if (logoFile) {
        const res = await startUpload([logoFile]);
        if (res?.[0]) finalLogoUrl = res[0].url;
      }

      const result = await createTeam(leagueId, { ...formData, logo: finalLogoUrl });

      if (result.success) {
        toast.success("Time criado com sucesso!");
        onUpdate();
        onClose();
      } else {
        toast.error(result.error || "Erro ao criar time");
      }
    } catch (error) {
      toast.error("Erro inesperado");
    } finally {
      setIsUploading(false);
    }
  };

  const addPlayer = () => {
    if (!newPlayerName.trim()) return;
    setFormData(prev => ({
      ...prev,
      players: [...prev.players, { name: newPlayerName, position: newPosition || null }]
    }));
    setNewPlayerName("");
    setNewPosition("");
  };

  const removePlayer = (index: number) => {
    setFormData(prev => ({
      ...prev,
      players: prev.players.filter((_, i) => i !== index)
    }));
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }} 
        className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4 backdrop-blur-sm"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0.3 }} 
          className="bg-white rounded-md shadow-2xl w-full max-w-md overflow-y-auto"
        >
          <header className="flex items-center justify-between p-4 bg-neutral-100 border-b border-neutral-200">
            <h3 className="font-bold text-neutral-900">Novo Time</h3>
            <button onClick={onClose} className="text-neutral-400 hover:text-neutral-600 cursor-pointer"><X size="20" /></button>
          </header>

          <section className="p-6 flex flex-col gap-6 border-b border-neutral-200">
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
              <span className="text-[10px] text-neutral-400 uppercase font-bold">Escudo do Time</span>
            </article>

            <article className="grid grid-cols-4 gap-4">
              <div className="col-span-3 flex flex-col gap-1">
                <label className="text-xs font-bold text-neutral-500 uppercase">Nome</label>
                <input 
                  type="text" 
                  placeholder="Nome do time"
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  className="w-full border border-neutral-300 rounded-sm p-2 text-sm outline-none focus:border-black" 
                />
              </div>
              <div className="col-span-1 flex flex-col gap-1">
                <label className="text-xs font-bold text-neutral-500 uppercase">Sigla</label>
                <input 
                  type="text" 
                  maxLength={3} 
                  placeholder="AAA"
                  value={formData.sigla} 
                  onChange={(e) => setFormData({...formData, sigla: e.target.value.toUpperCase()})} 
                  className="w-full border border-neutral-300 rounded-sm p-2 text-sm outline-none focus:border-black text-center" 
                />
              </div>
            </article>

            <article className="flex flex-col gap-3">
              <label className="text-xs font-bold text-neutral-500 uppercase border-b border-neutral-300 pb-1">Elenco Inicial</label>
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
                    <option value="">Posição</option>
                    <option value="Atacante">Atacante</option>
                    <option value="Meio-campo">Meio-campo</option>
                    <option value="Defensor">Defensor</option>
                    <option value="Goleiro">Goleiro</option>
                  </select>
                  <button onClick={addPlayer} className="bg-neutral-100 p-2 border border-neutral-300 rounded-sm hover:bg-neutral-200 cursor-pointer">
                    <Plus size={18}/>
                  </button>
                </div>
              </div>

              <div className="max-h-40 overflow-y-auto flex flex-col gap-1 bg-neutral-50 p-2 rounded-sm border border-neutral-300">
                {formData.players.map((player, index) => (
                  <div key={`new-${index}`} className="flex items-center bg-white border border-neutral-200 rounded-xs">
                    <span className="flex-1 text-xs font-medium p-2 text-neutral-700">{player.name}</span>
                    {player.position && (
                      <span className="flex-1 text-xs font-medium p-2 text-neutral-700 border-l border-neutral-300">{player.position}</span>
                    )}
                    <button onClick={() => removePlayer(index)} className="p-2 text-neutral-400 hover:text-red-500 cursor-pointer"><Trash size={14}/></button>
                  </div>
                ))}
                {formData.players.length === 0 && <p className="text-[10px] text-center text-neutral-400 py-2 italic">Nenhum jogador adicionado</p>}
              </div>
            </article>
          </section>

          <footer className="p-4 bg-neutral-100 flex justify-end gap-3">
            <button onClick={onClose} className="px-4 py-2 text-sm text-neutral-800 font-medium rounded-sm hover:bg-neutral-200 cursor-pointer">Cancelar</button>
            <button 
              onClick={handleSave} 
              disabled={isUploading}
              className="px-6 py-2 bg-black text-white text-sm font-semibold rounded-sm disabled:bg-neutral-400 flex items-center hover:bg-zinc-800 cursor-pointer"
            >
              {isUploading ? "Criando..." : "Criar Time"}
            </button>
          </footer>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}