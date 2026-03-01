import { UploadButton } from "@uploadthing/react";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import ReturnButton from "@/components/ui/ReturnButton"

interface Props {
  nextStep: () => void;
  data: {
    name: string;
    sport: string;
    leagueLogoUrl?: string;
  };
  updateData: (newData: Partial<Props["data"]>) => void;
}

export default function ModalStepOne({ nextStep, data, updateData }: Props){
  return(
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col items-center gap-2">
        <label className="font-medium text-neutral-700 self-start">Emblema do torneio</label>
        {data.leagueLogoUrl ? (
          <div className="relative">
             <img src={data.leagueLogoUrl} className="w-24 h-24 object-cover" />
             <button 
               onClick={() => updateData({ leagueLogoUrl: "" })}
               className="absolute -top-1 -right-1 bg-red-500 text-white font-bold rounded-full w-6 h-6 text-sm cursor-pointer"
             >
               X
             </button>
          </div>
        ) : (
          <div className="flex flex-col items-center w-full">
            <UploadButton<OurFileRouter, "leagueLogo">
              endpoint="leagueLogo"
              onClientUploadComplete={(res) => {
                updateData({ leagueLogoUrl: res[0].url });
              }}
              content={{
                button({ ready }) {
                  if (ready) return " ";
                  return "Carregando...";
                },
              }}
              appearance={{
                button: "w-full bg-zinc-100 text-zinc-800 border-2 border-dashed border-zinc-300 hover:bg-zinc-200 transition-all",
                container: "w-full",
                allowedContent: "hidden"
              }}
            />
            <p className="text-xs text-neutral-500 mt-1">(Opcional)</p>
          </div>
        )}
      </div>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700">Nome do torneio</label>
        <input 
          name="championshipName"
          type="text"
          value={data.name} 
          onChange={(e) => updateData({ name: e.target.value })}
          className="py-2 px-3 w-full border-2 rounded-sm border-neutral-300"
        />
      </fieldset>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700">Esporte</label>
        <select 
          name="sport"
          value={data.sport} 
          onChange={(e) => updateData({ sport: e.target.value })} 
          className="py-2 px-3 w-full border-2 rounded-sm border-neutral-300 cursor-pointer">
            <option value="soccer">Futebol</option>
        </select>
      </fieldset>

      <section className="flex justify-between mt-8">
        <ReturnButton/>
        <button 
          onClick={nextStep}
          className="bg-black py-1 sm:py-2 px-4 sm:px-8 rounded-md font-medium text-white cursor-pointer">Avançar
        </button>
      </section>
    </div>
  )
}