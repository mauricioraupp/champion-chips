"use client"

import Link from 'next/link';
import { usePathname } from "next/navigation"
import { Folder, FolderPlus, User, Settings, Bookmark } from '@geist-ui/icons'

export default function SideBar() {
  const pathname = usePathname()

  const menuItems = [
    { label: 'Meus torneios', href: '/my-championships', icon: <Folder size={20}/> },
    { label: 'Torneios salvos', href: '/saved-championships', icon: <Bookmark size={20}/> },
    { label: 'Criar torneio', href: '/create-championship', icon: <FolderPlus size={20}/> },
    { label: 'Conta', href: '/profile', icon: <User size={20}/> },
    { label: 'Configurações', href: '/settings', icon: <Settings size={20}/> },
  ]

  return (
    <aside className="flex w-screen sm:w-fit flex-col justify-between">
      <ul className="flex w-full sm:flex-col gap-2 p-4 sm:px-6 sm:py-12 justify-between">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || pathname === item.href

          return (
            <Link key={item.href} href={item.href}>
              <li className={`
                w-full flex py-2 px-2 sm:px-4 sm:gap-4 rounded-md cursor-pointer transition-all
                ${isActive 
                  ? "opacity-100 bg-neutral-100 text-black" 
                  : "opacity-60 hover:opacity-80 hover:bg-neutral-100 text-neutral-800"
                }
              `}>
                {item.icon}
                <p className="hidden sm:block text-sm font-semibold truncate">
                  {item.label}
                </p>
              </li>
            </Link>
          )
        })}
      </ul>
    </aside>
  )
}