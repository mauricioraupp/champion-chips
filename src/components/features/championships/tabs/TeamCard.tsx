"use client"

import { useState, useEffect, useRef, ChangeEvent } from "react";
import { updateTeam, deleteTeam } from "@/app/actions/teams";
import { MoreHorizontal, Edit2, Trash, X, Camera, Plus } from '@geist-ui/icons';
import { useUploadThing } from "@/utils/uploadthing";

export default function TeamCard({ team, onUpdate }: { team: any, onUpdate: () => void }) {
  const [showOptions, setShowOptions] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [preview, setPreview] = useState(team.logo || "");
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPosition, setNewPosition] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  const { startUpload } = useUploadThing("teamLogo");

  const [formData, setFormData] = useState({
    name: team.name,
    sigla: team.sigla,
    players: team.Players || []
  });

  useEffect(() => {
    setFormData({
      name: team.name,
      sigla: team.sigla,
      players: team.Players || []
    });
    setPreview(team.logo || "");
  }, [team]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowOptions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSaveEdit = async () => {
    if (!formData.name || !formData.sigla) {
      alert("Nome e Sigla são obrigatórios.");
      return;
    }

    setIsUploading(true);
    let finalLogoUrl = team.logo;

    try {
      if (logoFile) {
        const res = await startUpload([logoFile]);
        if (res && res[0]) {
          finalLogoUrl = res[0].url;
        }
      }

      const result = await updateTeam(
        team.id, 
        { ...formData, logo: finalLogoUrl }, 
        team.logo
      );

      if (result.success) {
        setShowEditModal(false);
        setLogoFile(null);
        onUpdate();
      } else {
        alert(result.error);
      }
    } catch (err) {
      alert("Erro ao processar atualização.");
    } finally {
      setIsUploading(false);
    }
  };

  const addPlayer = () => {
    if (!newPlayerName.trim()) return;
    setFormData({
      ...formData,
      players: [...formData.players, { id: Date.now(), name: newPlayerName, position: newPosition }]
    });
    setNewPlayerName("");
  };

  const removePlayer = (index: number) => {
    const updated = formData.players.filter((_: any, i: number) => i !== index);
    setFormData({ ...formData, players: updated });
  };

  const handleDeleteConfirm = async () => {
    const result = await deleteTeam(team.id);
    if (result.success) {
      setShowDeleteModal(false);
      onUpdate();
    } else {
      alert(result.error);
    }
  };

  if (!team) return null;

  return (
    <>
      <div className="relative flex items-center justify-center w-32 sm:w-60 h-32 sm:h-52 border border-neutral-300 rounded-md bg-neutral-100 transition-all hover:border-neutral-400">
        <div className="absolute top-2 right-2" ref={menuRef}>
          <button onClick={() => setShowOptions(!showOptions)} className="p-1 hover:bg-neutral-200 rounded-full cursor-pointer">
            <MoreHorizontal size="20" />
          </button>
          {showOptions && (
            <div className="absolute right-0 w-32 bg-white border border-neutral-300 shadow-xl rounded-md z-10">
              <button onClick={() => { setShowEditModal(true); setShowOptions(false); }} className="flex items-center gap-2 w-full px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 cursor-pointer">
                <Edit2 size="14" /> Editar
              </button>
              <button onClick={() => { setShowDeleteModal(true); setShowOptions(false); }} className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer">
                <Trash size="14" /> Excluir
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center justify-center gap-2 p-2">
          <figure className="w-12 sm:w-20 h-12 sm:h-20 shadow-sm border border-neutral-200 rounded-full overflow-hidden">
            <img src={team.logo} className="w-full h-full object-cover" alt={team.name} />
          </figure>
          <span className="font-medium text-neutral-900 sm:text-lg truncate max-w-28 sm:max-w-56 text-center">
            {team.name}
          </span>
        </div>
      </div>

      {showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-md shadow-2xl w-full max-w-md overflow-y-auto">
            <article className="flex items-center justify-between p-4 bg-neutral-100">
              <h3 className="font-bold text-neutral-900">Editar Time</h3>
              <button onClick={() => setShowEditModal(false)} className="text-neutral-400 hover:text-neutral-600 cursor-pointer"><X size="20" /></button>
            </article>

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
                  {formData.players.map((player: any, index: number) => (
                    <div key={player.id || index} className="flex items-center bg-white border border-neutral-200 rounded-xs">
                      <span className="flex-1 text-xs font-medium p-2 text-neutral-700">{player.name}</span>
                      {player.position && (
                        <span className="flex-1 text-xs font-medium p-2 text-neutral-700 border-l border-neutral-300">
                          {player.position}
                        </span>
                      )}
                      <button onClick={() => removePlayer(index)} className="p-2 text-neutral-400 hover:text-red-500 cursor-pointer"><Trash size={14}/></button>
                    </div>
                  ))}
                  {formData.players.length === 0 && <p className="text-[10px] text-center text-neutral-400 py-2 italic">Sem jogadores</p>}
                </div>
              </article>
            </section>

            <section className="p-4 bg-neutral-100 flex justify-end gap-3">
              <button 
                onClick={() => setShowEditModal(false)} 
                className="px-4 py-2 text-sm text-neutral-800 font-medium rounded-sm hover:bg-neutral-200 cursor-pointer"
              >
                Cancelar
              </button>
              <button 
                onClick={handleSaveEdit} 
                disabled={isUploading}
                className="px-6 py-2 bg-black text-white text-sm font-semibold rounded-sm disabled:bg-neutral-400 flex items-center hover:bg-zinc-800 cursor-pointer"
              >
                {isUploading ? "Salvando..." : "Salvar Alterações"}
              </button>
            </section>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-sm overflow-hidden p-6 text-center">
            <div className="bg-red-100 text-red-600 p-3 rounded-full w-fit mx-auto mb-4"><Trash size="30" /></div>
            <h3 className="font-bold text-xl text-neutral-900 mb-2">Excluir Time?</h3>
            <p className="text-neutral-600 text-sm mb-6">Esta ação apagará o time <strong>{team.name}</strong> permanentemente.</p>
            <div className="flex justify-center gap-3">
              <button 
                onClick={() => setShowDeleteModal(false)} 
                className="flex-1 px-4 py-2 text-sm font-semibold hover:bg-neutral-200 rounded-sm cursor-pointer"
              >
                Cancelar
              </button>
              <button 
                onClick={handleDeleteConfirm} 
                className="flex-1 px-4 py-2 text-sm bg-red-600 text-white hover:bg-red-800 rounded-sm font-medium cursor-pointer"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}