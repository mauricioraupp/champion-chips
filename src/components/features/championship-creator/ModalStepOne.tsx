"use client"

import { useState, ChangeEvent } from "react";
import ReturnButton from "@/components/ui/ReturnButton"
import { X } from '@geist-ui/icons'

interface Props {
  nextStep: () => void;
  data: {
    name: string;
    leagueLogoFile: File | null;
    leagueLogoUrl?: string;
  };
  updateData: (newData: Partial<Props["data"]>) => void;
}

export default function ModalStepOne({ nextStep, data, updateData }: Props){
  const [preview, setPreview] = useState(data.leagueLogoFile ? URL.createObjectURL(data.leagueLogoFile) : "");
  const [error, setError] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      updateData({ leagueLogoFile: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleNext = () => {
    if (!data.name.trim()) {
      setError(true);
      return;
    }
    
    setError(false);
    nextStep();
  };

  return(
    <div className="flex flex-col gap-6 w-full">

      <fieldset className="flex flex-col gap-1 w-full">
        <label className={`font-medium text-black dark:text-neutral-300 ${error ? "text-red-500" : "text-neutral-700"}`}>
          Nome do torneio
        </label>
        <input 
          type="text"
          value={data.name} 
          onChange={(e) => {
            updateData({ name: e.target.value });
            if (error) setError(false);
          }}
          className={`py-2 px-3 w-full border rounded-sm outline-none transition-colors ${
            error ? "border-red-400 focus:border-red-500 bg-red-50" : "border-neutral-300 dark:border-neutral-700 focus:border-neutral-800 dark:focus:border-neutral-200"
          }`}
        />
        {error && (
          <span className="text-red-500 text-xs font-medium animate-in fade-in slide-in-from-top-1">
            O nome do torneio é obrigatório.
          </span>
        )}
      </fieldset>

      <div className="flex flex-col items-center gap-2">
        <label className="font-medium text-neutral-700 dark:text-neutral-300 self-start">Emblema do torneio</label>
        {preview ? (
          <div className="relative">
             <img src={preview} className="w-24 h-24 object-cover rounded-full border" />
             <button 
               onClick={() => {
                 updateData({ leagueLogoFile: null });
                 setPreview("");
                }
              }
               className="absolute -top-0 -right-0 flex items-center justify-center bg-red-600 text-white rounded-full w-6 h-6 
                hover:bg-red-800 cursor-pointer transition-colors"
             >
              <X size={20}/>
            </button>
          </div>
        ) : (
          <div className="w-full">
            <label className="flex flex-col items-center justify-center w-full h-12 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 
              border border-dashed border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-950 cursor-pointer transition-all">
              <span className="text-sm font-medium">Selecionar Emblema</span>
              <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
            </label>
            <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mt-1">(Opcional)</p>
          </div>
        )}
      </div>

      <section className="flex justify-between mt-8">
        <ReturnButton/>
        <button 
          onClick={handleNext}
          className={`bg-black dark:bg-neutral-900 py-1 sm:py-2 px-4 sm:px-8 rounded-md font-medium text-white 
            hover:bg-neutral-800 cursor-pointer transition-colors`}
        >Avançar</button>
      </section>
    </div>
  )
}