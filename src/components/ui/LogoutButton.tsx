"use client"

import { signOut } from "next-auth/react";
import { LogOut } from "@geist-ui/icons";

export default function LogoutButton() {
  return(
    <button 
      onClick={() => signOut()}
      className="flex items-center gap-2 bg-black text-white text-sm font-medium px-4 py-2 rounded-md shrink-0 hover:bg-zinc-800 
        cursor-pointer transition-colors"
    >
      <LogOut size={16} /> Log out
    </button>
  )
}