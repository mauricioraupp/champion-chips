import { Menu, Folder, FolderPlus, User, Settings, LogOut } from '@geist-ui/icons'

export default function SideBar() {
  return(
    <aside className="fixed left-0 h-screen w-19 lg:w-72 bg-neutral-50 border-r-2 border-neutral-300 hidden sm:flex flex-col justify-between py-4 lg:py-8 px-6 lg:px-10">
      <ul className="absolute">
        <li className="flex items-center gap-4">
          <Menu className="flex"/>
          <p className="hidden lg:flex text-black font-bold text-xl">Champion Chips</p>
        </li>
      </ul>
      <ul className="flex flex-col gap-12 mt-32">
        <li className="flex items-center gap-4 cursor-pointer">
          <Folder/>
          <p className="hidden lg:flex text-black">Meus torneios</p>
        </li>
        <li className="flex items-center gap-4 text-black cursor-pointer">
          <FolderPlus/>
          <p className="hidden lg:flex text-black">Criar torneio</p>
        </li>
        <li className="flex items-center gap-4 text-black cursor-pointer">
          <User/>
          <p className="hidden lg:flex text-black">Conta</p>
        </li>
      </ul>
      <ul className="flex flex-col gap-12">
        <li className="flex items-center gap-4 text-black cursor-pointer">
          <Settings/>
          <p className="hidden lg:flex text-black">Configurações</p>
        </li>
        <li className="flex items-center gap-4 text-black cursor-pointer">
          <LogOut/>
          <p className="hidden lg:flex text-black">Sair da conta</p>
        </li>
      </ul>
    </aside>
  )
}