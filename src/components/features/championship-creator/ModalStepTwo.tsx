interface ModalStepTwoProps {
  nextStep: () => void;
  prevStep: () => void;
}

export default function ModalStepTwo({ nextStep, prevStep }: ModalStepTwoProps){
  return(
    <div className="flex flex-col gap-6 w-full">

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700">Formato</label>
        <select 
          name="format"
          className="py-2 px-3 w-full border-2 rounded-sm border-neutral-300 cursor-pointer">
            <option value="league">Liga</option>
            <option value="cup">Copa</option>
        </select>
      </fieldset>

      <fieldset className="flex flex-col gap-2 w-full">
        <label className="font-medium text-neutral-700">Opções</label>
        <div className="flex gap-2">
          <input 
            name="remember"
            type="checkbox" 
            className="relative h-6 w-6 appearance-none rounded-sm border-2 border-neutral-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full 
              after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] 
              after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:border-zinc-950 checked:bg-zinc-950 cursor-pointer"/>
          <span className="font-medium text-neutral-700">Ida e volta</span>
        </div>
      </fieldset>

      <section className="flex justify-between mt-8">
        <button 
          onClick={prevStep}
          className="border-2 border-neutral-600 py-1 sm:py-2 px-4 sm:px-8 rounded-md font-medium text-neutral-700 cursor-pointer">Voltar
        </button>
        <button 
          onClick={nextStep}
          className="bg-black py-1 sm:py-2 px-4 sm:px-8 rounded-md font-medium text-white cursor-pointer">Avançar
        </button>
      </section>
    </div>
  )
}