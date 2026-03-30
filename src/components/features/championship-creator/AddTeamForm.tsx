"use client"

import { useState } from "react";
import { X } from '@geist-ui/icons'

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
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col items-center gap-2">
        {previewUrl ? (
          <div className="relative">
            <img src={previewUrl} className="w-24 h-24 object-cover rounded-full" />
            <button 
              onClick={() => { setPreviewUrl(""); setTeamLogoFile(null); }} 
              className="absolute -top-0 -right-0 flex items-center justify-center bg-red-600 text-white rounded-full w-6 h-6 
                hover:bg-red-800 cursor-pointer transition-colors"
              >
                <X size={20}/>
              </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <label className="cursor-pointer bg-neutral-50 dark:bg-neutral-900 p-4 border border-dashed 
              border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-950"
            >
              <span className="text-sm font-medium">Selecionar Logo</span>
              <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
            </label>
            <p className="text-xs text-neutral-500 mt-1">(Opcional)</p>
          </div>
        )}
      </div>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700 dark:text-neutral-400">Nome do Time</label>
        <input value={name} onChange={(e) => setName(e.target.value)} 
        className="py-2 px-3 border rounded-sm border-neutral-300 dark:border-neutral-700 outline-none focus:border-neutral-800 dark:focus:border-neutral-200" />
      </fieldset>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700 dark:text-neutral-400">Sigla</label>
        <input value={sigla} onChange={(e) => setSigla(e.target.value)} maxLength={3} 
        className="py-2 px-3 border rounded-sm border-neutral-300 dark:border-neutral-700 outline-none focus:border-neutral-800 dark:focus:border-neutral-200 uppercase placeholder:normal-case" 
        placeholder="AAA" />
      </fieldset>

      <div className="flex justify-between mt-6">
        <button onClick={onClose} className="px-4 sm:px-6 rounded-md font-medium hover:bg-neutral-200 dark:hover:bg-neutral-900 
          cursor-pointer transition-colors"
        >
          Cancelar
        </button>
        <button onClick={handleConfirm} className="bg-black dark:bg-neutral-900 py-1 sm:py-2 px-4 sm:px-8 rounded-md font-medium text-white 
          hover:bg-neutral-800 cursor-pointer transition-colors"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}