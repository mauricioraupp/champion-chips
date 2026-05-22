"use client"

import { useState, useRef, useEffect } from "react"
import { Search, Calendar, Pin, ChevronDown } from "@geist-ui/icons"

interface MatchFiltersProps {
  selectedClub: string | null
  setSelectedClub: (club: string | null) => void
  selectedRound: number | null
  setSelectedRound: (round: number | null) => void
  selectedStatus: string | null
  setSelectedStatus: (status: string | null) => void
  clubs: { label: string; value: string }[]
  rounds: { label: string; value: string }[]
}

interface FilterButtonProps {
  label: string
  icon: React.ReactNode
  isActive: boolean
  options: { label: string; value: any }[]
  onSelect: (value: any) => void
}

export function FilterButton({ label, icon, isActive, options, onSelect }: FilterButtonProps) {
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

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-xl bg-white dark:bg-neutral-800 divide-y divide-neutral-300 dark:divide-zinc-950
        border border-neutral-300 dark:border-neutral-900 z-50 max-h-60 overflow-y-auto">
            {options.map((option, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  onSelect(option.value)
                  setIsOpen(false)
                }}
                className="block w-full text-left font-medium px-4 py-3 text-sm text-neutral-700 dark:text-neutral-200 
                hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer transition-colors"
              >
                {option.label}
              </button>
            ))}
        </div>
      )}
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

  const hasAnyFilter = selectedClub || selectedRound || selectedStatus

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
        label={selectedClub && activeClubLabel ? `Clube: ${activeClubLabel}` : "Selecionar clube"}
        icon={<Search size={16} />} 
        isActive={!!selectedClub}
        options={clubOptions}
        onSelect={(value) => setSelectedClub(value === selectedClub ? null : value)}
      />
      
      <FilterButton 
        label={selectedRound ? `Rodada ${selectedRound}` : "Todas as rodadas"}
        icon={<Calendar size={16} />} 
        isActive={!!selectedRound}
        options={roundOptions}
        onSelect={(value) => setSelectedRound(value === selectedRound ? null : value)}
      />
      
      <FilterButton 
        label={selectedStatus && activeStatusLabel ? `Status: ${activeStatusLabel}` : "Status"}
        icon={<Pin size={16} />} 
        isActive={!!selectedStatus}
        options={statusOptions}
        onSelect={(value) => setSelectedStatus(value === selectedStatus ? null : value)}
      />
      
      {hasAnyFilter && (
        <button 
          onClick={() => {
            setSelectedClub(null)
            setSelectedRound(null)
            setSelectedStatus(null)
          }}
          className="text-xs text-red-400 hover:text-red-300 underline pl-2 transition-colors cursor-pointer"
        >
          Limpar Filtros
        </button>
      )}
    </div>
  )
}