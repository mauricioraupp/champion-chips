'use client'

import React from 'react'
import { Search, Calendar, Pin, ChevronDown } from '@geist-ui/icons'

interface MatchFiltersProps {
  selectedClub: string | null
  setSelectedClub: (club: string | null) => void
  selectedRound: number | null
  setSelectedRound: (round: number | null) => void
  selectedStatus: string | null
  setSelectedStatus: (status: string | null) => void
}

interface FilterButtonProps {
  label: string
  icon: React.ReactNode
  isActive: boolean
  onClick?: () => void
}

export function FilterButton({ label, icon, isActive, onClick }: FilterButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center pl-3 pr-2 py-2 text-sm font-medium text-neutral-900 dark:text-neutral-200 bg-white dark:bg-zinc-950 
        border border-neutral-300 dark:border-neutral-900 rounded-sm hover:bg-neutral-100 dark:hover:bg-zinc-900 cursor-pointer transition-colors"
    >
      {icon}
      <span className="pl-2 pr-1">{label}</span>
      <ChevronDown size={16}/>
    </button>
  )
}

export function MatchFilters({
  selectedClub,
  setSelectedClub,
  selectedRound,
  setSelectedRound,
  selectedStatus,
  setSelectedStatus
}: MatchFiltersProps) {

  const hasAnyFilter = selectedClub || selectedRound || selectedStatus

  return (
    <div className="flex gap-3">
      <FilterButton 
        label={selectedClub ? `Clube: ${selectedClub}` : "Selecionar clube"}
        icon={<Search size={16} />} 
        isActive={!!selectedClub}
        onClick={() => console.log('Filtrar clube')}
      />
      
      <FilterButton 
        label="Todas as rodadas" 
        icon={<Calendar size={16} />} 
        isActive={!!selectedClub}
        onClick={() => console.log('Filtrar rodada')}
      />
      
      <FilterButton 
        label="Status" 
        icon={<Pin size={16} />} 
        isActive={!!selectedClub}
        onClick={() => console.log('Filtrar status')}
      />
    </div>
  )
}