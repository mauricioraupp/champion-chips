"use client"
import { useState } from "react";
import { useUploadThing } from "@/utils/uploadthing";
import AddTeamForm from "./AddTeamForm";

interface Team {
  name: string;
  sigla: string;
  teamLogoFile: File | null;
  teamLogoUrl?: string;
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
    setIsUploading(true);
    try {
      const updatedTeams = [...teams];
      let finalLeagueLogoUrl = data.leagueLogoUrl;

      if (data.leagueLogoFile) {
        const resLeague = await uploadLeagueLogo([data.leagueLogoFile]);
        if (resLeague && resLeague[0]) {finalLeagueLogoUrl = resLeague[0].ufsUrl}
      }

      for (let i = 0; i < updatedTeams.length; i++) {
        if (updatedTeams[i].teamLogoFile) {
          const res = await uploadTeamLogo([updatedTeams[i].teamLogoFile!]);
          if (res && res[0]) {
            updatedTeams[i].teamLogoUrl = res[0].ufsUrl;
          }
        }
      }

      const finalData = {
        ...data,
        leagueLogoUrl: finalLeagueLogoUrl,
        teams: updatedTeams.map(t => ({
          name: t.name,
          sigla: t.sigla,
          teamLogoUrl: t.teamLogoUrl || "/default-team-logo.png"
        }))
      };

      setTeams(updatedTeams);
      
      onFinish(finalData); 

    } catch (err) {
      alert("Erro ao fazer upload das imagens.");
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
                    {(team.teamLogoFile) ? (
                      <img 
                        src={(team.teamLogoFile ? URL.createObjectURL(team.teamLogoFile) : "")} 
                        alt={team.name} 
                        className="w-8 h-8 rounded-full object-cover" 
                      />
                    ) : (
                      <img className="w-8 h-8 flex items-center justify-center"
                        src="/default-team-logo.png"/>
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
            <button onClick={prevStep} className="font-medium cursor-pointer">Voltar</button>
            <button 
              onClick={handleFinishWithUpload}
              className={`py-2 px-8 rounded-md font-medium text-white transition-all 
                ${teams.length >= 2 && !isUploading
                  ? "bg-black cursor-pointer hover:bg-zinc-800" 
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