"use client"

import { useState, useRef, useEffect } from "react"
import { Search, Calendar, Pin, ChevronDown, Check, Delete } from "@geist-ui/icons"
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"

interface MatchFiltersProps {
  selectedClub: string | null
  setSelectedClub: (club: string | null) => void
  selectedRound: number | null
  setSelectedRound: (round: number | null) => void
  selectedStatus: string | null
  setSelectedStatus: (status: string | null) => void
  clubs: { label: string; value: string; logo?: string | null }[]
  rounds: { label: string; value: string }[]
}

interface FilterButtonProps {
  label: string
  title: string
  icon: React.ReactNode
  isActive: boolean
  options: { label: string; value: any; logo?: string | null }[]
  selectedValue: any
  onSelect: (value: any) => void
}

export function FilterButton({ label, title, icon, isActive, options, selectedValue, onSelect }: FilterButtonProps) {
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
    <div ref={menuRef} className="relative inline-block text-left">
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center pl-3 pr-2 py-2 text-sm font-medium rounded-md border cursor-pointer transition-colors
          ${isActive 
            ? "text-white bg-zinc-900 border-zinc-700" 
            : "text-neutral-900 dark:text-neutral-200 bg-white dark:bg-zinc-950 border-neutral-300 dark:border-neutral-900 hover:bg-neutral-100 dark:hover:bg-zinc-900"
          }`}
      >
        {icon}
        <span className="pl-2 pr-1">{label}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}/>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
          className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-900 
            shadow-xl rounded-lg z-1 overflow-hidden divide-y-1 divide-neutral-300 dark:divide-neutral-900">

            <div className="p-1">
              <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 p-2">
                {title}
              </p>

              <div className="space-y-1 max-h-44 overflow-y-auto">
                {options.map((option, idx) => {
                  const isSelected = option.value === selectedValue
                  
                  return(
                    <button
                      key={idx}
                      onClick={() => {
                        onSelect(option.value)
                        setIsOpen(false)
                      }}
                      className={`flex items-center justify-between w-full p-2 rounded-md text-sm transition-all ${
                        isSelected ? "bg-neutral-100 dark:bg-neutral-900" : "hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-700 dark:text-neutral-200"}`
                      }
                    >
                      <div className="flex items-center gap-2">
                        {option.logo && (
                        <div className="relative w-6 h-6 rounded overflow-hidden shadow-sm bg-white">
                          <Image 
                            src={option.logo} 
                            alt={option.label} 
                            fill 
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        )}
                        <span className={`font-semibold truncate ${isSelected ? 'max-w-33' : 'max-w-40'}`}>{option.label}</span>
                      </div>
                      {isSelected && <Check size={14} />}
                    </button>
                  )
                })}
              </div>
            </div>
            {isActive && (
              <div 
                onClick={() => {
                  onSelect(null)
                  setIsOpen(false)
                }}
                className="flex items-center gap-2 px-3 py-2 m-1 rounded-md text-sm text-neutral-800 dark:text-neutral-200 font-semibold 
                  hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer transition-colors"
              >
                <Delete size={16} /> Remover filtro
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function MatchFilters({
  selectedClub,
  setSelectedClub,
  selectedRound,
  setSelectedRound,
  selectedStatus,
  setSelectedStatus,
  clubs,
  rounds
}: MatchFiltersProps) {
  const clubOptions = clubs || []
  const roundOptions = rounds || []
  
  const statusOptions = [
    { label: "Agendada", value: "SCHEDULED" },
    { label: "Finalizada", value: "FINISHED" }
  ]

  const activeClubObj = clubOptions.find(c => c.value === selectedClub)
  const activeClubLabel = activeClubObj ? activeClubObj.label : null
  const activeStatusLabel = statusOptions.find(s => s.value === selectedStatus)?.label

  return (
    <div className="flex items-center gap-3">
      <FilterButton 
        label={selectedClub && activeClubLabel ? `${activeClubLabel}` : "Selecionar clube"}
        title={"Clubes"}
        icon={<Search size={16} />} 
        isActive={!!selectedClub}
        options={clubOptions}
        selectedValue={selectedClub}
        onSelect={(value) => setSelectedClub(value === selectedClub ? null : value)}
      />
      
      <FilterButton 
        label={selectedRound ? `Rodada ${selectedRound}` : "Todas as rodadas"}
        title={"Rodadas"}
        icon={<Calendar size={16} />} 
        isActive={!!selectedRound}
        options={roundOptions}
        selectedValue={selectedRound}
        onSelect={(value) => setSelectedRound(value === selectedRound ? null : value)}
      />
      
      <FilterButton 
        label={selectedStatus && activeStatusLabel ? `${activeStatusLabel}` : "Status"}
        title={"Status"}
        icon={<Pin size={16} />} 
        isActive={!!selectedStatus}
        options={statusOptions}
        selectedValue={selectedStatus}
        onSelect={(value) => setSelectedStatus(value === selectedStatus ? null : value)}
      />
    </div>
  )
}