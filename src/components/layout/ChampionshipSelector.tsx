"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, Plus, Check } from "@geist-ui/icons"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"
import Link from "next/link"

interface League {
  id: string;
  name: string;
  logo: string | null;
}

interface ChampionshipSelectorProps {
  currentLeague: League | null; 
  leagues: League[];
}

export default function ChampionshipSelector({ currentLeague, leagues }: ChampionshipSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative hidden sm:inline-block" ref={containerRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-56 rounded-md p-1 pr-2 hover:bg-neutral-100 cursor-pointer transition-colors"
      >
        <article className="flex items-center gap-2">
          {currentLeague?.logo && (
            <div className="relative w-8 h-8 rounded-md shadow-sm overflow-hidden">
              <Image 
                src={currentLeague.logo} 
                alt={currentLeague.name} 
                fill 
              />
            </div>
          )}
          <span className="font-semibold text-sm text-neutral-900">
            {currentLeague?.name || "Selecionar"}
          </span>
        </article>
        <ChevronDown size={18}/>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
          className="absolute top-full left-0 mt-1 w-56 bg-white border border-neutral-300 shadow-xl rounded-lg z-1 overflow-hidden divide-y-1 divide-neutral-300">
            
            <div className="p-2">
              <p className="text-xs font-semibold text-neutral-500 p-2">
                Torneios
              </p>
              
              <div className="space-y-1">
                {leagues?.map((league) => {
                  const isSelected = currentLeague?.id === league.id
                  
                  return (
                    <button
                      key={league.id}
                      onClick={() => {router.push(`/my-championships/${league.id}`)
                      setIsOpen(false)
                      }}
                      className={`flex items-center justify-between w-full p-2 rounded-md text-sm cursor-pointer transition-all ${
                        isSelected ? "bg-neutral-100" : "hover:bg-neutral-50 text-neutral-700"}`
                      }
                    >
                      <div className="flex items-center gap-2">
                        <div className="relative w-6 h-6 rounded overflow-hidden shadow-sm">
                          {league.logo && <Image src={league.logo} alt={league.name} fill/>}
                        </div>
                        <span className={`font-semibold truncate ${isSelected ? 'max-w-33' : 'max-w-40'}`}>{league.name}</span>
                      </div>
                      {isSelected && <Check size={14} color="black" />}
                    </button>
                  )
                })}
              </div>
            </div>

            <Link 
              href="/create-championship"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-3 py-2 m-2 rounded-md text-sm text-neutral-800 font-semibold 
                hover:text-black hover:bg-neutral-100 transition-colors"
            >
              <Plus size={16} color="black" />
              Criar torneio
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}