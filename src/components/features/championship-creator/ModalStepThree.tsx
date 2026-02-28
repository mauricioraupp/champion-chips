"use client"

import { useState } from "react"
import AddTeamForm from "./AddTeamForm"

export default function ModalStepThree({ prevStep }: { prevStep: () => void }) {
  const [isAddingTeam, setIsAddingTeam] = useState(false);

  return (
    <div className="w-full">
      {isAddingTeam ? (
        <AddTeamForm onClose={() => setIsAddingTeam(false)} />
      ) : (
        <div className="flex flex-col gap-6 w-full animate-in fade-in duration-300">
          <article className="flex flex-col gap-1 w-full">
            <button 
              onClick={() => setIsAddingTeam(true)}
              className="bg-zinc-950 text-white h-12 rounded-md cursor-pointer hover:bg-zinc-800 transition-colors"
            >
              + Adicionar time
            </button>
          </article>

          <div className="h-32 border-2 border-dashed border-neutral-200 rounded-md flex items-center justify-center text-neutral-400 text-sm">
            Nenhum time adicionado
          </div>

          <section className="flex justify-between mt-8">
            <button 
              onClick={prevStep}
              className="border-2 border-neutral-600 py-2 px-8 rounded-md font-medium text-neutral-700 cursor-pointer"
            >
              Voltar
            </button>
            <button className="bg-black py-2 px-8 rounded-md font-medium text-white opacity-50 cursor-not-allowed" disabled>
              Criar
            </button>
          </section>
        </div>
      )}
    </div>
  )
}