"use client"

import { UploadButton } from "@uploadthing/react";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import { useState } from "react";

interface AddTeamFormProps {
  onClose: () => void;
  onSave: (team: { name: string; sigla: string; teamLogoUrl: string }) => void;
}

export default function AddTeamForm({ onClose, onSave }: AddTeamFormProps) {
  const [name, setName] = useState("");
  const [sigla, setSigla] = useState("");
  const [teamLogoUrl, setTeamLogoUrl] = useState("");

  const handleConfirm = () => {
    if (!name && !sigla) {
      alert("Dados incompletos.");
      return;
    }

    onSave({ 
      name,
      sigla,
      teamLogoUrl: teamLogoUrl || "/default-team-logo.png"
    });
  };

  return (
    <div className="flex flex-col gap-6 w-full animate-in zoom-in-95">
      <div className="flex flex-col items-center gap-2">
        {teamLogoUrl ? (
          <div className="relative">
             <img src={teamLogoUrl} className="w-24 h-24 object-cover" />
             <button 
               onClick={() => setTeamLogoUrl("")} 
               className="absolute -top-1 -right-1 bg-red-500 text-white font-bold rounded-full w-6 h-6 text-sm cursor-pointer"
             >
               X
             </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <UploadButton<OurFileRouter, "teamLogo">
              endpoint="teamLogo"
              onClientUploadComplete={(res) => setTeamLogoUrl(res[0].url)}
              content={{
                button({ ready }) {
                  if (ready) return " ";
                  return "Carregando...";
                },
              }}
              appearance={{
                button: "bg-zinc-100 text-zinc-800 border-2 border-dashed border-zinc-300 hover:bg-zinc-200 transition-all",
                allowedContent: "hidden"
              }}
            />
            <p className="text-xs text-neutral-500 mt-1">(Opcional)</p>
          </div>
        )}
      </div>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700 text-sm">Nome do Time</label>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="py-2 px-3 border-2 rounded-sm border-neutral-300 focus:border-zinc-800 outline-none"
        />
      </fieldset>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700 text-sm">Sigla</label>
        <input 
        type="text" 
        value={sigla}
        onChange={(e) => setSigla(e.target.value)}
        maxLength={3} 
        placeholder="AAA"
        className="py-2 px-3 border-2 rounded-sm border-neutral-300 uppercase"/>
      </fieldset>

      <div className="flex justify-between mt-6">
        <button onClick={onClose} className="text-neutral-500 hover:underline cursor-pointer">Cancelar</button>
        <button onClick={handleConfirm} className="bg-zinc-950 text-white px-6 py-2 rounded-md font-medium cursor-pointer">
          Confirmar Time
        </button>
      </div>
    </div>
  );
}