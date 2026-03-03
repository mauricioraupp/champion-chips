"use client"

import { useState, ChangeEvent } from "react";
import ReturnButton from "@/components/ui/ReturnButton"

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
        <label className={`font-medium ${error ? "text-red-500" : "text-neutral-700"}`}>
          Nome do torneio
        </label>
        <input 
          type="text"
          value={data.name} 
          onChange={(e) => {
            updateData({ name: e.target.value });
            if (error) setError(false);
          }}
          className={`py-2 px-3 w-full border-2 rounded-sm outline-none transition-colors ${
            error ? "border-red-400 focus:border-red-500 bg-red-50" : "border-neutral-300 focus:border-zinc-800"
          }`}
        />
        {error && (
          <span className="text-red-500 text-xs font-medium animate-in fade-in slide-in-from-top-1">
            O nome do torneio é obrigatório.
          </span>
        )}
      </fieldset>

      <div className="flex flex-col items-center gap-2">
        <label className="font-medium text-neutral-700 self-start">Emblema do torneio</label>
        {preview ? (
          <div className="relative">
             <img src={preview} className="w-24 h-24 object-cover rounded-md border" />
             <button 
               onClick={() => {
                 updateData({ leagueLogoFile: null });
                 setPreview("");
                }
              }
               className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 font-semibold cursor-pointer"
             >X</button>
          </div>
        ) : (
          <div className="w-full">
            <label className="flex flex-col items-center justify-center w-full h-12 bg-zinc-100 text-zinc-800 border-2 border-dashed border-zinc-300 rounded-md hover:bg-zinc-200 cursor-pointer transition-all">
              <span className="text-sm font-medium">Selecionar Emblema</span>
              <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
            </label>
            <p className="text-center text-xs text-neutral-500 mt-1">(Opcional)</p>
          </div>
        )}
      </div>

      <section className="flex justify-between mt-8">
        <ReturnButton/>
        <button 
          onClick={handleNext}
          className={`bg-black py-1 sm:py-2 px-4 sm:px-8 rounded-md font-medium text-white cursor-pointer`}
        >Avançar</button>
      </section>
    </div>
  )
}