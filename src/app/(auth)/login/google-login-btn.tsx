"use client"

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function GoogleLoginBtn() {
  return(
    <button 
      onClick={() => signIn("google", {callbackUrl: "/"})}
      className="flex items-center justify-center py-3 w-full border-2 rounded-sm border-neutral-300 text-lg cursor-pointer"
    >
      <Image src="/g-icon.png" alt="" width={32} height={32} />
      Sign in with Google
    </button>
  )
}