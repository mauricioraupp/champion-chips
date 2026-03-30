import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoreHorizontal, Edit2, Trash } from '@geist-ui/icons';
import { EditTeamModal } from "./modals/EditTeamModal";
import { DeleteTeamModal } from "./modals/DeleteTeamModal";

export default function TeamCard({ team, league, onUpdate, isOwner }: { team: any, league: string, onUpdate: () => void, isOwner: boolean }) {
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
      <div className="relative flex flex-1 flex-col items-center justify-center min-w-32 h-32 sm:h-52 
        bg-white dark:bg-zinc-950 border border-neutral-300 dark:border-neutral-900 rounded-md hover:border-neutral-400 dark:hover:border-neutral-800 transition-colors"
      >
        <div className="absolute top-1 right-2" ref={menuRef}>
          {isOwner &&
            <button onClick={() => setShowOptions(!showOptions)} className="p-1 hover:bg-neutral-200 dark:hover:bg-neutral-900 rounded-full cursor-pointer transition-colors">
              <MoreHorizontal size="20" />
            </button>
          }

          <AnimatePresence>
            {showOptions && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 0 }}
                transition={{ duration: 0.1, ease: "easeOut" }} 
                className="absolute right-0 w-32 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-900 shadow-xl rounded-md z-10 overflow-hidden divide-y-1 divide-neutral-300 dark:divide-neutral-900"
              >
                <button onClick={() => { setActiveModal("edit"); setShowOptions(false); }} className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer">
                  <Edit2 size="14" /> Editar
                </button>
                <button onClick={() => { setActiveModal("delete"); setShowOptions(false); }} className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-neutral-900 cursor-pointer">
                  <Trash size="14" /> Excluir
                </button>
              </motion.div>
            )}
          </AnimatePresence>


        </div>

        <figure className="w-12 sm:w-20 h-12 sm:h-20 shadow-inner bg-white rounded-full overflow-hidden mb-2">
          <img src={team.logo} className="w-full h-full object-cover" alt={team.name} />
        </figure>
        <span className="font-medium text-neutral-900 dark:text-neutral-200 sm:text-lg truncate max-w-full text-center px-2">
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