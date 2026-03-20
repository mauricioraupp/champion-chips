import Link from 'next/link';
import { Folder, FolderPlus, User, Settings, Bookmark } from '@geist-ui/icons'

export default function SideBar() {
  return(
    <aside className="flex w-screen sm:w-fit flex-col justify-between">
      <ul className="flex w-full sm:flex-col gap-2 p-6 justify-between">

        <Link href='/my-championships' className="w-fit">
          <li className={`w-fit flex flex-row items-center py-2 px-2 sm:px-4 sm:gap-4 rounded-md cursor-pointer opacity-60 hover:opacity-100 hover:bg-neutral-200 transition-all`}>
            <Folder size={22}/>
            <p className="hidden sm:block text-base font-semibold truncate text-neutral-800">Meus torneios</p>
          </li>
        </Link>

        <Link href='/my-championships' className="w-fit">
          <li className={`w-fit flex flex-row items-center py-2 px-2 sm:px-4 sm:gap-4 rounded-md cursor-pointer opacity-60 hover:opacity-100 hover:bg-neutral-200 transition-all`}>
            <Bookmark size={22}/>
            <p className="hidden sm:block text-base font-semibold truncate text-neutral-800">Torneios salvos</p>
          </li>
        </Link>

        <Link href='/create-championship' className="w-fit">
          <li className={`w-fit flex flex-row items-center py-2 px-2 sm:px-4 sm:gap-4 rounded-md cursor-pointer opacity-60 hover:opacity-100 hover:bg-neutral-200 transition-all`}>
            <FolderPlus size={22}/>
            <p className="hidden sm:block text-base font-semibold truncate text-neutral-800">Criar torneio</p>
          </li>
        </Link>

        <Link href='/profile' className="w-fit">
          <li className={`w-fit flex flex-row items-center py-2 px-2 sm:px-4 sm:gap-4 rounded-md cursor-pointer opacity-60 hover:opacity-100 hover:bg-neutral-200 transition-all`}>
            <User size={22}/>
            <p className="hidden sm:block text-base font-semibold truncate text-neutral-800">Conta</p>
          </li>
        </Link>

        <Link href='/profile' className="w-fit">
          <li className={`w-fit flex flex-row items-center py-2 px-2 sm:px-4 sm:gap-4 rounded-md cursor-pointer opacity-60 hover:opacity-100 hover:bg-neutral-200 transition-all`}>
            <Settings size={22}/>
            <p className="hidden sm:block text-base font-semibold truncate text-neutral-800">Configurações</p>
          </li>
        </Link>

      </ul>
    </aside>
  )
}