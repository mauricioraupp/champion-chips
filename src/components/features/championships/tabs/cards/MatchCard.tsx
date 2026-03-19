import { useState } from "react";
import { Edit } from '@geist-ui/icons';
import { EditMatchModal } from "./modals/EditMatchModal";

export default function MatchCard({ match, onUpdate }: { match: any, onUpdate: () => void }) {
  const [showModal, setShowModal] = useState(false);
  const isFinished = match.status === "FINISHED";

  if (!match.HomeTeam || !match.AwayTeam) return null;

  return (
      <div className={`relative flex items-center justify-between px-4 py-6 sm:p-10 border rounded-md hover:border-neutral-400 shadow-sm transition-all ${
        isFinished ? 'bg-neutral-200 border-neutral-200' : 'bg-white border-neutral-300'
      }`}>
        
        <div className="flex items-center gap-1 sm:gap-2 flex-1 justify-end">
          <span className={`font-semibold ${isFinished ? 'text-neutral-600' : 'text-neutral-900'} hidden sm:block`}>
            {match.HomeTeam.name}
          </span>
          <span className={`text-sm font-semibold ${isFinished ? 'text-neutral-600' : 'text-neutral-900'} block sm:hidden`}>
            {match.HomeTeam.sigla}
          </span>
          <figure className={`w-6 sm:w-8 h-6 sm:h-8 ${isFinished ? 'grayscale opacity-70' : ''}`}>
            <img src={match.HomeTeam.logo} className="w-full h-full object-cover rounded-full"/>
          </figure>
        </div>

        <div className="flex flex-col items-center px-1 sm:px-4 min-w-[120px]">
          {isFinished ? (
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-neutral-800">{match.homeScore}</span>
              <span className="text-neutral-400 text-xs font-bold text-[10px]">X</span>
              <span className="text-xl font-black text-neutral-800">{match.awayScore}</span>
            </div>
          ) : (
            <p className="bg-neutral-400 text-[10px] font-semibold text-white uppercase px-2 py-0.5 rounded-xs">
              {match.time ? match.time : "Agendada"}
            </p>
          )}
          <span className="text-[10px] font-bold text-neutral-400 uppercase mt-1">
            {match.date ? new Date(match.date).toLocaleDateString('pt-BR') : '--/--/----'}
          </span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 flex-1">
          <figure className={`w-6 sm:w-8 h-6 sm:h-8 ${isFinished ? 'grayscale opacity-70' : ''}`}>
            <img src={match.AwayTeam.logo} className="w-full h-full object-cover rounded-full"/>
          </figure>
          <span className={`font-semibold ${isFinished ? 'text-neutral-600' : 'text-neutral-900'} hidden sm:block`}>
            {match.AwayTeam.name}
          </span>
          <span className={`text-sm font-semibold ${isFinished ? 'text-neutral-600' : 'text-neutral-900'} block sm:hidden`}>
            {match.AwayTeam.sigla}
          </span>
        </div>

        <button 
          onClick={() => setShowModal(true)}
          className={`sm:absolute sm:right-8 p-2 rounded-full transition-colors cursor-pointer ${
            isFinished ? 'hover:bg-neutral-300 text-neutral-500' : 'hover:bg-neutral-200 text-black'
          }`}
        >
          <Edit size="18"/>
        </button>
        
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