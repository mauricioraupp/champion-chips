"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, LogOut } from "@geist-ui/icons"
import { signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

interface UserNavProps {
  user: {
    name?: string | null
    email?: string | null
    image?: string | null
  } | null
}

export default function UserNav({ user }: UserNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative hidden sm:block w-8 h-8 rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-900 
          cursor-pointer active:scale-95 transition-transform focus:outline-none"
      >
        <Image
          src={user?.image || "/default-user-pic.png"}
          alt="Foto de perfil"
          fill
          className="object-cover"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            style={{ originX: 1, originY: 0 }}
            className="absolute right-0 mt-2 w-56 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-900 shadow-xl rounded-lg z-50 overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col">
              <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-200 truncate">
                {user?.name || "Usuário"}
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                {user?.email}
              </span>
            </div>

            <div className="border-t border-neutral-100 dark:border-neutral-900 p-1">
              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 w-full px-3 py-2 text-sm font-semibold text-neutral-600 dark:text-neutral-200 
                  hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-md cursor-default transition-colors"
              >
                <User size={16}/>
                Conta
              </Link>
            </div>

            <div className="border-t border-neutral-100 dark:border-neutral-900 p-1">
              <button
                onClick={() => signOut()}
                className="flex items-center gap-3 w-full px-3 py-2 text-sm font-semibold text-neutral-600 dark:text-neutral-200 
                  hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-md transition-colors"
              >
                <LogOut size={16}/>
                Log out
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}