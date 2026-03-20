import { Menu } from "@geist-ui/icons"

export default function Header() {
  return(
    <header className="flex mx-auto h-24 w-full max-w-7xl items-center justify-between gap-x-6 border-b border-neutral-300 p-6 lg:px-8">
      <li className="flex justify-between items-center py-7 px-6 gap-1 rounded-md">
        <p className="flex text-black font-bold text-3xl">champion<span className="text-yellow-600">chips</span></p>
        <button className="flex lg:hidden p-2 rounded-full hover:bg-neutral-200 cursor-pointer transition-colors">
          <Menu/>
        </button>
      </li>
    </header>
  )
}