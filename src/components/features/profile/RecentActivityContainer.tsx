"use client"

import { useState, useMemo } from "react";
import ActivityItem from "./ActivityItem";
import { X } from "@geist-ui/icons";
import { motion, AnimatePresence } from "framer-motion";

export default function RecentActivityContainer({ allActivities }: { allActivities: any[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("ALL");

  const initialItems = allActivities.slice(0, 3);

  const filteredActivities = useMemo(() => {
    if (filter === "ALL") return allActivities;
    return allActivities.filter((act) => act.type === filter);
  }, [filter, allActivities]);

  const filterOptions = [
    { id: "ALL", label: "Tudo" },
    { id: "CREATE", label: "Criações" },
    { id: "UPDATE", label: "Edições" },
    { id: "MATCH", label: "Partidas" },
    { id: "DELETE", label: "Deletes" },
  ];

  return (
    <>
      <section className="bg-white border border-neutral-300 rounded-md overflow-hidden shadow-sm">
        <div className="p-6 pb-0">
          <h3 className="text-sm font-semibold text-neutral-900 mb-1">Atividade Recente</h3>
          <p className="text-sm text-neutral-500 mb-2">Suas últimas ações no sistema.</p>
          
          <ul className="divide-y divide-neutral-100">
            {initialItems.length > 0 ? (
              initialItems.map((activity) => (
                <ActivityItem 
                  key={activity.id}
                  message={activity.action}
                  name={activity.targetName}
                  date={activity.createdAt}
                />
              ))
            ) : (
              <div className="py-2 italic text-sm text-neutral-400">Nenhuma atividade registrada.</div>
            )}
          </ul>
        </div>

        <div className="bg-neutral-50 border-t border-neutral-300 px-6 py-3 flex justify-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="hover:bg-neutral-200 text-sm font-medium text-neutral-700 px-3 py-2 rounded-md hover:text-neutral-800 cursor-pointer transition-colors"
          >
            Histórico completo
          </button>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
              className="bg-white w-full max-w-2xl rounded-md shadow-2xl flex flex-col max-h-[85vh] overflow-hidden text-neutral-900 z-10"
            >
              
              <header className="flex items-center justify-between p-4 bg-neutral-100 border-b border-neutral-200">
                <h3 className="font-bold text-neutral-900">Histórico Completo</h3>
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="p-1 hover:bg-neutral-200 rounded-full text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </header>

              <div className="border-b border-neutral-200 bg-white flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0 py-4">
                {filterOptions.map((opt, index) => (
                  <button
                    key={opt.id}
                    onClick={() => setFilter(opt.id)}
                    className={`
                      px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all border cursor-pointer whitespace-nowrap
                      ${index === 0 ? 'ml-6' : ''} 
                      ${index === filterOptions.length - 1 ? 'mr-6' : ''}
                      ${filter === opt.id 
                        ? "bg-black text-white border-black shadow-md" 
                        : "bg-neutral-50 text-neutral-500 border-neutral-200 hover:border-neutral-400"
                      }
                    `}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <div className="overflow-y-auto h-80 custom-scrollbar">
                <ul className="divide-y divide-neutral-100 px-6">
                  {filteredActivities.length > 0 ? (
                    filteredActivities.map((activity) => (
                      <ActivityItem 
                        key={activity.id}
                        message={activity.action}
                        name={activity.targetName}
                        date={activity.createdAt}
                      />
                    ))
                  ) : (
                    <div className="py-12 text-center text-sm text-neutral-400 italic">
                      Nenhum registro encontrado para esta categoria.
                    </div>
                  )}
                </ul>
              </div>

              <footer className="p-4 bg-neutral-100 border-t border-neutral-200 flex justify-end">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 bg-black text-white text-sm font-semibold rounded-sm hover:bg-zinc-800 cursor-pointer transition-all flex items-center gap-2 shadow-md active:scale-95"
                >
                  Fechar
                </button>
              </footer>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}