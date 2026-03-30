"use client"

import { signOut } from "next-auth/react";
import { LogOut } from "@geist-ui/icons";

export default function LogoutButton() {
  return(
    <button 
      onClick={() => signOut()}
      className="flex items-center justify-center gap-2 w-30 bg-black dark:bg-neutral-900 text-white text-sm font-medium py-2 
        rounded-md shrink-0 hover:bg-neutral-800 dark:hover:bg-neutral-800 cursor-pointer transition-colors"
    >
      <LogOut size={16} /> Log out
    </button>
  )
}