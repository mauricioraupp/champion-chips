"use client"

import { useState } from "react";
import { useUploadThing } from "@/utils/uploadthing";
import AddTeamForm from "./AddTeamForm";
import { Trash } from '@geist-ui/icons'

interface Team {
  name: string;
  sigla: string;
  teamLogoFile: File | null;
  teamLogoUrl?: string;
  teamLogoKey?: string;
}

interface ModalStepThreeProps {
  prevStep: () => void;
  teams: Team[];
  setTeams: (teams: Team[]) => void;
  data: {
    name: string;
    leagueLogoFile: File | null;
    leagueLogoUrl?: string;
    format: string;
    secondLegs: boolean;
  };
  onFinish: (finalData: any) => void;
}

export default function ModalStepThree({ prevStep, teams, setTeams, data, onFinish }: ModalStepThreeProps) {
  const [isAddingTeam, setIsAddingTeam] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const { startUpload: uploadLeagueLogo } = useUploadThing("leagueLogo");
  const { startUpload: uploadTeamLogo } = useUploadThing("teamLogo");
  
  const handleFinishWithUpload = async () => {
    if (isUploading) return;
    setIsUploading(true);

    try {
      let finalLeagueLogoUrl = data.leagueLogoUrl || "/default-league-logo.png";
      let finalLeagueLogoKey = "";

      if (data.leagueLogoFile) {
        const resLeague = await uploadLeagueLogo([data.leagueLogoFile]);
        if (resLeague?.[0]) {
          finalLeagueLogoUrl = resLeague[0].ufsUrl;
          finalLeagueLogoKey = resLeague[0].key;
        }
      }

      const updatedTeams = await Promise.all(teams.map(async (team) => {
        if (team.teamLogoFile) {
          const res = await uploadTeamLogo([team.teamLogoFile]);
          if (res && res[0]) {
            return {
              ...team,
              teamLogoUrl: res[0].ufsUrl,
              teamLogoKey: res[0].key
            };
          }
        }
        return { ...team, teamLogoUrl: team.teamLogoUrl || "/default-team-logo.png" };
      }));

      const finalData = {
        ...data,
        leagueLogoUrl: finalLeagueLogoUrl,
        leagueLogoKey: finalLeagueLogoKey,
        teams: updatedTeams.map(t => ({
          name: t.name,
          sigla: t.sigla,
          teamLogoUrl: t.teamLogoUrl,
          teamLogoKey: (t as any).teamLogoKey
        }))
      };

      await onFinish(finalData);

    } catch (err: any) {
      console.error("Erro no processo de criação:", err);
      alert("Erro ao processar imagens. Verifique sua conexão.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="w-full">
      {isAddingTeam ? (
        <AddTeamForm onClose={() => setIsAddingTeam(false)} onSave={(newTeam) => {
          setTeams([...teams, newTeam]);
          setIsAddingTeam(false);
        }} />
      ) : (
        <div className="flex flex-col gap-6 w-full animate-in fade-in duration-300">
          
          <article className="flex flex-col gap-1 w-full">
            <button 
              onClick={() => setIsAddingTeam(true)}
              className="bg-black dark:bg-neutral-900 text-white h-12 rounded-md cursor-pointer hover:bg-neutral-800 transition-colors shadow-sm"
            >
              + Adicionar time
            </button>
          </article>

          <div className="flex flex-col gap-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
            {teams.length === 0 ? (
              <div className="h-32 border border-dashed border-neutral-300 rounded-md flex items-center justify-center text-neutral-400 text-sm">
                Nenhum time adicionado
              </div>
            ) : (
              teams.map((team, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-neutral-700 rounded-md shadow-sm shrink-0"
                >
                  <div className="flex items-center gap-3">
                    {(team.teamLogoFile) ? (
                      <img 
                        src={(team.teamLogoFile ? URL.createObjectURL(team.teamLogoFile) : "")} 
                        alt={team.name} 
                        className="w-8 h-8 rounded-full object-cover bg-white" 
                      />
                    ) : (
                      <img className="w-8 h-8 rounded-full flex items-center justify-center bg-white"
                        src="/default-team-logo.png"/>
                    )}
                    <span className="font-medium text-neutral-800 dark:text-neutral-200">{team.name}</span>
                  </div>
                  <button 
                    onClick={() => setTeams(teams.filter((_, i) => i !== index))}
                    className="p-2 rounded-full text-neutral-400 dark:text-neutral-300 hover:text-red-500 text-xs px-2 
                      hover:bg-neutral-200 dark:hover:bg-neutral-900 cursor-pointer transition-colors"
                  >
                    <Trash size="14"/>
                  </button>
                </div>
              ))
            )}
          </div>

          <section className="flex justify-between mt-8">
            <button onClick={prevStep} className="px-4 sm:px-6 rounded-md font-medium hover:bg-neutral-200 dark:hover:bg-neutral-900 
              cursor-pointer transition-colors"
            >
              Voltar
            </button>
            <button 
              onClick={handleFinishWithUpload}
              className={` py-1 sm:py-2 px-4 sm:px-8 rounded-md font-medium text-white transition-colors 
                ${teams.length >= 2 && !isUploading
                  ? "bg-black dark:bg-neutral-900 cursor-pointer hover:bg-neutral-800" 
                  : "bg-neutral-400 cursor-not-allowed"}`}
              disabled={teams.length < 2 || isUploading}
            >
              {isUploading ? "Criando..." : "Criar"}
            </button>
          </section>
        </div>
      )}
    </div>
  );
}