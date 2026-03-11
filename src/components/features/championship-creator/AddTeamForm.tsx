"use client"

import { useState } from "react";

interface AddTeamFormProps {
  onClose: () => void;
  onSave: (team: { name: string; sigla: string; teamLogoFile: File | null }) => void;
}

export default function AddTeamForm({ onClose, onSave }: AddTeamFormProps) {
  const [name, setName] = useState("");
  const [sigla, setSigla] = useState("");
  const [teamLogoFile, setTeamLogoFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setTeamLogoFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleConfirm = () => {
    if (!name || !sigla) {
      alert("Nome e Sigla são obrigatórios.");
      return;
    }
    onSave({ name, sigla, teamLogoFile });
  };

  return (
    <div className="flex flex-col gap-6 w-full animate-in zoom-in-95">
      <div className="flex flex-col items-center gap-2">
        {previewUrl ? (
          <div className="relative">
            <img src={previewUrl} className="w-24 h-24 object-cover rounded-full" />
            <button 
              onClick={() => { setPreviewUrl(""); setTeamLogoFile(null); }} 
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 cursor-pointer"
            >X</button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <label className="cursor-pointer bg-zinc-100 p-4 border-2 border-dashed border-zinc-300 rounded-md hover:bg-zinc-200">
              <span className="text-sm text-zinc-600">Selecionar Logo</span>
              <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
            </label>
            <p className="text-xs text-neutral-500 mt-1">(Opcional)</p>
          </div>
        )}
      </div>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700 text-sm">Nome do Time</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="py-2 px-3 border-2 rounded-sm border-neutral-300 outline-none" />
      </fieldset>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700 text-sm">Sigla</label>
        <input value={sigla} onChange={(e) => setSigla(e.target.value)} maxLength={3} className="py-2 px-3 border-2 rounded-sm border-neutral-300 uppercase placeholder:normal-case" placeholder="AAA"/>
      </fieldset>

      <div className="flex justify-between mt-6">
        <button onClick={onClose} className="text-neutral-500 hover:underline cursor-pointer">Cancelar</button>
        <button onClick={handleConfirm} className="bg-zinc-950 text-white px-6 py-2 rounded-md font-medium cursor-pointer">Confirmar Time</button>
      </div>
    </div>
  );
}