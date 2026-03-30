"use client"

import { useState } from "react";
import Image from "next/image";
import EditProfileModal from "./modals/EditProfileModal";

interface UserInfoCardProps {
  user: {
    name: string | null;
    email: string | null;
    image: string | null;
  };
}

export default function UserInfoCard({ user }: UserInfoCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="bg-white dark:bg-zinc-950 border border-neutral-300 dark:border-neutral-900 rounded-md overflow-hidden">
        <div className="p-6">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-200 mb-1">Avatar e Nome</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">Sua foto de perfil será exibida nos campeonatos que você gerencia.</p>
          
          <div className="flex items-center gap-4">
            <figure className="relative w-16 h-16 rounded-full border border-neutral-300 dark:border-neutral-900 shrink-0 overflow-hidden shadow-inner bg-neutral-100">
              <Image 
                src={user.image || "/default-user-pic.png"} 
                alt="Profile" 
                fill 
                className="object-cover" 
              />
            </figure>
            <div className="flex flex-col gap-0.5">
              <h4 className="font-bold text-lg text-neutral-900 dark:text-neutral-200 leading-tight">{user.name}</h4>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{user.email}</p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-300 dark:border-neutral-900 px-6 py-3 flex justify-between items-center gap-2">
          <p className="text-xs text-neutral-500 dark:text-neutral-400">Edite sua foto de perfil e nome de exibição</p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-black dark:bg-neutral-800 text-white text-sm font-medium py-2 px-3 rounded-md shrink-0 
              hover:bg-neutral-800 dark:hover:bg-neutral-700 cursor-pointer transition-colors"
          >
            Editar Informações
          </button>
        </div>
      </section>

      {isModalOpen && (
        <EditProfileModal 
          user={user} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
}