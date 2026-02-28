import ReturnButton from "@/components/ui/ReturnButton"

export default function ModalStepOne({ nextStep }: { nextStep: () => void }){
  return(
    <div className="flex flex-col gap-6 w-full">

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700">Nome do torneio</label>
        <input 
          name="championshipName"
          type="text"
          className="py-2 px-3 w-full border-2 rounded-sm border-neutral-300"
        />
      </fieldset>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700">Esporte</label>
        <select 
          name="sport"
          className="py-2 px-3 w-full border-2 rounded-sm border-neutral-300 cursor-pointer">
            <option value="soccer">Futebol</option>
        </select>
      </fieldset>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700">Privacidade</label>
        <select 
          name="privacy"
          className="py-2 px-3 w-full border-2 rounded-sm border-neutral-300 cursor-pointer">
            <option value="public">Público</option>
            <option value="private">Privado</option>
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