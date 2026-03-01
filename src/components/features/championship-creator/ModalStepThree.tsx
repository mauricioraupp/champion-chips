"use client"

import { useState } from "react";
import AddTeamForm from "./AddTeamForm";

interface Team {
  name: string;
  sigla: string;
  teamLogoUrl: string;
}

interface ModalStepThreeProps {
  prevStep: () => void;
  teams: Team[];
  setTeams: (teams: Team[]) => void;
  onFinish: () => void;
}

export default function ModalStepThree({ 
  prevStep,
  teams,
  setTeams,
  onFinish
}: ModalStepThreeProps) {

  const [isAddingTeam, setIsAddingTeam] = useState(false);
  const handleSaveTeam = (newTeam: Team) => {
    setTeams([...teams, newTeam]);
    setIsAddingTeam(false);
  };

  return (
    <div className="w-full">
      {isAddingTeam ? (
        <AddTeamForm 
          onClose={() => setIsAddingTeam(false)} 
          onSave={handleSaveTeam} 
        />
      ) : (
        <div className="flex flex-col gap-6 w-full animate-in fade-in duration-300">
          <article className="flex flex-col gap-1 w-full">
            <button 
              onClick={() => setIsAddingTeam(true)}
              className="bg-zinc-950 text-white h-12 rounded-md cursor-pointer hover:bg-zinc-800 transition-colors shadow-sm"
            >
              + Adicionar time
            </button>
          </article>

          <div className="flex flex-col gap-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
            {teams.length === 0 ? (
              <div className="h-32 border-2 border-dashed border-neutral-200 rounded-md flex items-center justify-center text-neutral-400 text-sm">
                Nenhum time adicionado
              </div>
            ) : (
              teams.map((team, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 bg-white border border-neutral-200 rounded-md shadow-sm shrink-0"
                >
                  <div className="flex items-center gap-3">
                    {team.teamLogoUrl ? (
                      <img src={team.teamLogoUrl} alt={team.name} className="w-8 h-8 rounded-xs object-cover" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-[10px] font-bold">
                        {team.name.substring(0, 2).toUpperCase()}
                      </div>
                    )}
                    <span className="font-medium text-neutral-800">{team.name}</span>
                  </div>
                  <button 
                    onClick={() => setTeams(teams.filter((_, i) => i !== index))}
                    className="text-neutral-400 hover:text-red-500 text-xs px-2 cursor-pointer"
                  >
                    Remover
                  </button>
                </div>
              ))
            )}
          </div>

          <section className="flex justify-between mt-8">
            <button 
              onClick={prevStep}
              className="border-2 border-neutral-600 py-2 px-8 rounded-md font-medium text-neutral-700 cursor-pointer hover:bg-neutral-50 transition-colors"
            >
              Voltar
            </button>
            
            <button 
              onClick={onFinish}
              className={`py-2 px-8 rounded-md font-medium text-white transition-all 
                ${teams.length >= 2 
                  ? "bg-black cursor-pointer hover:bg-zinc-800" 
                  : "bg-neutral-400 cursor-not-allowed"}`}
              disabled={teams.length < 2}
            >
              Criar
            </button>
          </section>
        </div>
      )}
    </div>
  )
}