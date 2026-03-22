"use client"

import Link from 'next/link';
import { usePathname } from "next/navigation"
import { Folder, FolderPlus, User, Settings, Bookmark } from '@geist-ui/icons'

export default function SideBar() {
  const pathname = usePathname()

  const menuItems = [
    { label: 'Meus torneios', href: '/my-championships', icon: <Folder size={22}/> },
    { label: 'Torneios salvos', href: '/saved-championships', icon: <Bookmark size={22}/> },
    { label: 'Criar torneio', href: '/create-championship', icon: <FolderPlus size={22}/> },
    { label: 'Configurações', href: '/settings', icon: <Settings size={22}/> },
  ]

  return (
    <aside className="flex w-screen sm:w-fit flex-col justify-between">
      <ul className="flex w-full sm:flex-col gap-2 p-4 sm:p-6 justify-between">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || pathname === item.href

          return (
            <Link key={item.href} href={item.href}>
              <li className={`
                w-full flex py-2 px-2 sm:px-4 sm:gap-4 rounded-md cursor-pointer transition-all
                ${isActive 
                  ? "opacity-100 bg-neutral-200 text-black" 
                  : "opacity-60 hover:opacity-80 hover:bg-neutral-200 text-neutral-800"
                }
              `}>
                {item.icon}
                <p className="hidden sm:block text-base font-semibold truncate">
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