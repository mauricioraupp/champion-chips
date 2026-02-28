interface AddTeamFormProps {
  onClose: () => void;
  // onSave: (teamData: any) => void; <-- No futuro, você passará a função de salvar aqui
}

export default function AddTeamForm({ onClose }: AddTeamFormProps) {
  return (
    <div className="flex flex-col gap-6 w-full animate-in fade-in zoom-in-95 duration-300">
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-lg text-neutral-800">Novo Time</h3>
        <p className="text-sm text-neutral-500">Insira os detalhes da equipe abaixo.</p>
      </div>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700 text-sm">Nome do Time</label>
        <input 
          type="text" 
          autoFocus
          className="py-2 px-3 border-2 rounded-sm border-neutral-300 focus:border-zinc-800 outline-none transition-colors" 
        />
      </fieldset>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700 text-sm">Sigla</label>
        <input type="text" className="py-2 px-3 border-2 rounded-sm border-neutral-300 uppercase" maxLength={3} placeholder="AAA" />
      </fieldset>

      <section className="flex justify-between gap-4 mt-8">
        <button 
          type="button"
          onClick={onClose}
          className="text-neutral-500 font-medium hover:underline cursor-pointer"
        >
          Cancelar
        </button>
        <button 
          type="button"
          onClick={onClose} 
          className="bg-zinc-950 text-white px-6 py-2 rounded-md font-medium hover:bg-zinc-800 cursor-pointer"
        >
          Confirmar Time
        </button>
      </section>
    </div>
  );
}