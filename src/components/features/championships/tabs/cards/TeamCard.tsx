import { useState, useRef, useEffect } from "react";
import { MoreHorizontal, Edit2, Trash } from '@geist-ui/icons';
import { EditTeamModal } from "./modals/EditTeamModal";
import { DeleteTeamModal } from "./modals/DeleteTeamModal";

export default function TeamCard({ team, league, onUpdate }: { team: any, league: number, onUpdate: () => void }) {
  const [showOptions, setShowOptions] = useState(false);
  const [activeModal, setActiveModal] = useState<"edit" | "delete" | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setShowOptions(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!team) return null;

  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-32 sm:w-60 h-32 sm:h-52 border border-neutral-300 rounded-md bg-neutral-100 hover:border-neutral-400 transition-all p-2">
        <div className="absolute top-2 right-2" ref={menuRef}>
          <button onClick={() => setShowOptions(!showOptions)} className="p-1 hover:bg-neutral-200 rounded-full cursor-pointer">
            <MoreHorizontal size="20" />
          </button>
          {showOptions && (
            <div className="absolute right-0 w-32 bg-white border border-neutral-300 shadow-xl rounded-md z-10 overflow-hidden">
              <button onClick={() => { setActiveModal("edit"); setShowOptions(false); }} className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-neutral-100 cursor-pointer">
                <Edit2 size="14" /> Editar
              </button>
              <button onClick={() => { setActiveModal("delete"); setShowOptions(false); }} className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer">
                <Trash size="14" /> Excluir
              </button>
            </div>
          )}
        </div>

        <figure className="w-12 sm:w-20 h-12 sm:h-20 shadow-inner border border-neutral-200 rounded-full overflow-hidden mb-2">
          <img src={team.logo} className="w-full h-full object-cover" alt={team.name} />
        </figure>
        <span className="font-medium text-neutral-900 sm:text-lg truncate max-w-full text-center px-2">
          {team.name}
        </span>
      </div>

      {activeModal === "edit" && (
        <EditTeamModal team={team} onClose={() => setActiveModal(null)} onUpdate={onUpdate} />
      )}
      {activeModal === "delete" && (
        <DeleteTeamModal team={team} league={league} onClose={() => setActiveModal(null)} onUpdate={onUpdate} />
      )}
    </>
  );
}