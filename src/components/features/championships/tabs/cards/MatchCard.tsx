import { useState } from "react";
import { Edit } from '@geist-ui/icons';
import { EditMatchModal } from "./modals/EditMatchModal";

export default function MatchCard({ match, onUpdate, isOwner }: { match: any, onUpdate: () => void, isOwner: boolean }) {
  const [showModal, setShowModal] = useState(false);
  const isFinished = match.status === "FINISHED";

  if (!match.HomeTeam || !match.AwayTeam) return null;

  return (
      <div className={`relative flex items-center justify-between px-4 sm:px-10 h-32 shrink-0 border border-neutral-300 dark:border-neutral-900 
        rounded-md hover:border-neutral-400 dark:hover:border-neutral-800 shadow-sm transition-all ${
        isFinished ? 'bg-neutral-200 dark:bg-neutral-900' : 'bg-white dark:bg-zinc-950'
      }`}>
        
        <div className="flex items-center gap-1 sm:gap-2 flex-1 justify-end">
          <span className={`font-semibold ${isFinished ? 'text-neutral-600 dark:text-neutral-400' : 'text-neutral-900 dark:text-neutral-200'} hidden sm:block`}>
            {match.HomeTeam.name}
          </span>
          <span className={`text-sm font-semibold ${isFinished ? 'text-neutral-600 dark:text-neutral-400' : 'text-neutral-900 dark:text-neutral-200'} block sm:hidden`}>
            {match.HomeTeam.sigla}
          </span>
          <figure className={`w-6 sm:w-8 h-6 sm:h-8 bg-white rounded-full ${isFinished ? 'grayscale opacity-70' : ''}`}>
            <img src={match.HomeTeam.logo} className="w-full h-full object-cover rounded-full"/>
          </figure>
        </div>

        <div className="flex flex-col items-center px-1 sm:px-4 min-w-30">
          {isFinished ? (
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-neutral-800 dark:text-neutral-100">{match.homeScore}</span>
              <span className="text-xs font-bold text-neutral-400">X</span>
              <span className="text-xl font-black text-neutral-800 dark:text-neutral-100">{match.awayScore}</span>
            </div>
          ) : (
            <p className="bg-neutral-400 dark:bg-neutral-900 text-[10px] font-bold text-white dark:text-neutral-300 uppercase px-2 py-0.5 rounded-xs">
              {match.time ? match.time : "Agendada"}
            </p>
          )}
          <span className="text-[10px] font-bold text-neutral-400 uppercase mt-1">
            {match.date ? new Date(match.date).toLocaleDateString('pt-BR') : '--/--/----'}
          </span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 flex-1">
          <figure className={`w-6 sm:w-8 h-6 sm:h-8 bg-white rounded-full ${isFinished ? 'grayscale opacity-70' : ''}`}>
            <img src={match.AwayTeam.logo} className="w-full h-full object-cover rounded-full"/>
          </figure>
          <span className={`font-semibold ${isFinished ? 'text-neutral-600 dark:text-neutral-400' : 'text-neutral-900 dark:text-neutral-200'} hidden sm:block`}>
            {match.AwayTeam.name}
          </span>
          <span className={`text-sm font-semibold ${isFinished ? 'text-neutral-600 dark:text-neutral-400' : 'text-neutral-900 dark:text-neutral-200'} block sm:hidden`}>
            {match.AwayTeam.sigla}
          </span>
        </div>

        {isOwner && 
          <button 
            onClick={() => setShowModal(true)}
            className={`sm:absolute sm:right-8 p-2 rounded-full transition-colors cursor-pointer ${
              isFinished ? 'hover:bg-neutral-300 dark:hover:bg-neutral-800' : 'hover:bg-neutral-200 dark:hover:bg-neutral-900'
            }`}
          >
            <Edit size="18"/>
          </button>
        }
        
        {showModal && (
        <EditMatchModal 
          match={match} 
          onClose={() => setShowModal(false)} 
          onUpdate={onUpdate} 
        />
      )}
      </div>
  );
}