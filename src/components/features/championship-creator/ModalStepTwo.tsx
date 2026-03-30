import { Globe, Lock } from '@geist-ui/icons';

interface Props {
  prevStep: () => void;
  nextStep: () => void;
  data: {
    format: string;
    secondLegs: boolean;
    isPublic: boolean;
  };
  updateData: (newData: Partial<Props["data"]>) => void;
}

export default function ModalStepTwo({ nextStep, prevStep, data, updateData }: Props){
  return(
    <div className="flex flex-col gap-6 w-full">

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700 dark:text-neutral-300">
          Privacidade do Torneio
        </label>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label 
            className={`flex items-start gap-3 p-3 border rounded-md cursor-pointer transition-all ${
              !data.isPublic ? "bg-neutral-50 dark:bg-zinc-950 border-neutral-300 dark:border-neutral-700" : 
              "border-neutral-200 dark:border-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700"
            }`}
          >
            <input 
              type="radio" 
              name="visibility" 
              className="mt-1 accent-black h-4 w-4 shrink-0"
              checked={!data.isPublic}
              onChange={() => updateData({ isPublic: false })}
            />
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 font-bold text-sm text-neutral-800 dark:text-neutral-200">
                <Lock size={14} /> Privado
              </div>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 leading-tight">
                Apenas você poderá visualizar.
              </span>
            </div>
          </label>

          <label 
            className={`flex items-start gap-3 p-3 border rounded-md cursor-pointer transition-all ${
              data.isPublic ? "bg-neutral-50 dark:bg-zinc-950 border-neutral-300 dark:border-neutral-700" : 
              "border-neutral-200 dark:border-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700"
            }`}
          >
            <input 
              type="radio" 
              name="visibility" 
              className="mt-1 accent-black h-4 w-4 shrink-0"
              checked={data.isPublic}
              onChange={() => updateData({ isPublic: true })}
            />
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 font-bold text-sm text-neutral-800 dark:text-neutral-200">
                <Globe size={14} /> Público
              </div>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 leading-tight">
                Visível para todos os usuários com o link direto.
              </span>
            </div>
          </label>
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700 dark:text-neutral-400">Formato</label>
        <select 
          name="format"
          value={data.format} 
          onChange={(e) => updateData({ format: e.target.value })} 
          className="py-2 px-3 w-full border rounded-sm border-neutral-300 dark:border-neutral-700 cursor-pointer">
            <option value="league">Liga</option>
        </select>
      </fieldset>

      <fieldset className="flex flex-col gap-2 w-full">
        <label className="font-medium text-neutral-700 dark:text-neutral-400">Opções</label>
        <div className="flex gap-2">
          <input 
            name="remember"
            type="checkbox"
            checked={data.secondLegs} 
            onChange={(e) => updateData({ secondLegs: e.target.checked })} 
            className="relative h-6 w-6 appearance-none rounded-sm border border-neutral-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full 
              after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] 
              after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] dark:bg-white checked:border-neutral-950 dark:checked:border-neutral-800 checked:bg-neutral-950 cursor-pointer transition-colors"/>
          <span className="font-medium text-neutral-700 dark:text-neutral-400">Ida e volta</span>
        </div>
      </fieldset>

      <section className="flex justify-between mt-8">
        <button 
          onClick={prevStep}
          className="px-4 sm:px-6 rounded-md font-medium hover:bg-neutral-200 dark:hover:bg-neutral-900 cursor-pointer transition-colors">Voltar
        </button>
        <button 
          onClick={nextStep}
          className="bg-black dark:bg-neutral-900 py-1 sm:py-2 px-4 sm:px-8 rounded-md font-medium text-white 
            hover:bg-neutral-800 cursor-pointer transition-colors"
          >
            Avançar
        </button>
      </section>
    </div>
  )
}