"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, User, LogOut, ChevronRight } from "@geist-ui/icons"
import { signOut } from "next-auth/react"
import Link from "next/link"
import Image from "next/image"

interface League {
  id: string
  name: string
  logo: string | null
}

interface MobileMenuProps {
  user: any
  currentLeague?: League | null
  leagues?: League[]
}

export default function MobileMenu({ user, currentLeague, leagues }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <button onClick={toggleMenu} className="sm:hidden p-1 rounded-full hover:bg-neutral-100 cursor-pointer transition-colors">
        <Menu size={24} color="black"/>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] sm:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[280px] bg-white z-[70] shadow-2xl p-6 flex flex-col sm:hidden"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-xl">Menu</span>
                <button onClick={toggleMenu} className="p-1 rounded-full hover:bg-neutral-100 cursor-pointer transition-colors">
                  <X size={24} />
                </button>
              </div>

              {currentLeague && (
                <div className="mb-8">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-4">
                    Campeonato Atual
                  </p>
                  <div className="flex items-center gap-3 p-2 bg-neutral-100 rounded-md">
                    <figure className="relative w-8 h-8 rounded-md overflow-hidden shadow-sm">
                      <Image src={currentLeague.logo || "/default.png"} alt={currentLeague.name} fill className="object-cover" />
                    </figure>
                    <span className="font-semibold text-neutral-900">{currentLeague.name}</span>
                  </div>
                </div>
              )}

              <nav className="flex-1 space-y-2">
                <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-4">
                  Conta
                </p>
                <Link
                  href="/profile"
                  onClick={toggleMenu}
                  className="flex items-center justify-between w-full p-3 hover:bg-neutral-100 rounded-md text-neutral-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <User size={20} />
                    <span className="font-medium">Minha Conta</span>
                  </div>
                  <ChevronRight size={18} color="black"/>
                </Link>

                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-3 w-full p-3 text-red-600 hover:bg-red-50 rounded-md mt-4 cursor-pointer transition-colors"
                >
                  <LogOut size={20} />
                  <span className="font-medium">Log out</span>
                </button>
              </nav>

              <div className="pt-6 border-t border-neutral-300">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image src={user?.image || "/default-user-pic.png"} alt={user?.name} fill />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold truncate max-w-[150px]">{user?.name}</span>
                    <span className="text-xs text-neutral-500 truncate max-w-[150px]">{user?.email}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}