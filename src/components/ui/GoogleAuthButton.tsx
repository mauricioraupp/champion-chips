"use client"

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function GoogleLoginBtn() {
  return(
    <button 
      type="button"
      onClick={() => signIn("google", {callbackUrl: "/profile"})}
      className="bg-white dark:bg-neutral-900 flex items-center justify-center py-3 w-full border-2 rounded-sm 
      border-neutral-300 dark:border-neutral-800 text-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer transition-colors"
    >
      <Image src="/g-icon.png" alt="" width={32} height={32} />
      Sign in with Google
    </button>
  )
}