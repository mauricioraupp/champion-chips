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
      <section className="bg-white border border-neutral-300 rounded-md overflow-hidden shadow-sm">
        <div className="p-6">
          <h3 className="text-sm font-semibold text-neutral-900 mb-1">Avatar e Nome</h3>
          <p className="text-sm text-neutral-500 mb-6">Sua foto de perfil será exibida nos campeonatos que você gerencia.</p>
          
          <div className="flex items-center gap-4">
            <figure className="relative w-16 h-16 rounded-full border border-neutral-300 shrink-0 overflow-hidden shadow-inner bg-neutral-100">
              <Image 
                src={user.image || "/default-user-pic.png"} 
                alt="Profile" 
                fill 
                className="object-cover" 
              />
            </figure>
            <div className="flex flex-col gap-0.5">
              <h4 className="font-bold text-lg text-neutral-900 leading-tight">{user.name}</h4>
              <p className="text-sm text-neutral-500">{user.email}</p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-50 border-t border-neutral-300 px-6 py-3 flex justify-end">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-black text-white text-xs font-bold px-4 py-2 rounded-md shrink-0 hover:bg-zinc-800 cursor-pointer transition-all"
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