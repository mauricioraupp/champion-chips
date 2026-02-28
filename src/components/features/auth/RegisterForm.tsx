"use client";

import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation";
import GoogleLoginBtn from "@/components/features/auth/GoogleAuthButton";

export default function RegisterForm() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  async function register(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email"),
      password: formData.get("password")
    };

    signIn("credentials", {
      ...data,
      callbackUrl: "/"
    })
  }
  return(
    <form 
      onSubmit={register}
      className="flex flex-col gap-4 sm:gap-7 justify-center items-center h-3/5 w-5/6 sm:w-3/5 max-w-md">

      <div className="w-full">
        <h1 className="text-4xl font-bold w-full text-left">Seja bem vindo!</h1>
        <p className="text-neutral-700 w-full text-left pt-2">Insira seus dados</p>
      </div>
      <GoogleLoginBtn/>
      <div className="flex items-center justify-center w-full">
        <hr className="w-full border-1 rounded-xs border-neutral-300"/>
        <span className="absolute px-4 font-medium text-neutral-700 -translate-x-1/2 bg-neutral-50 left-1/2">or</span>
      </div>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700">Nome</label>
        <input 
          name="name"
          type="text"
          className="py-2 px-3 w-full border-2 rounded-sm border-neutral-300"/>
      </fieldset>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700">Email</label>
        <input 
          name="email"
          type="email"
          className="py-2 px-3 w-full border-2 rounded-sm border-neutral-300"/>
      </fieldset>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700">Senha</label>
        <input 
          name="password"
          type="password" 
          className="py-2 px-3 w-full border-2 rounded-sm border-neutral-300"/>
      </fieldset>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700">Confirme sua senha</label>
        <input 
          name="password"
          type="password" 
          className="py-2 px-3 w-full border-2 rounded-sm border-neutral-300"/>
      </fieldset>

      <button className="bg-zinc-950 py-3 w-full rounded-md text-neutral-50">Entrar</button>
      <p className="font-medium text-neutral-700">Já possui uma conta? <span className="text-sky-600 underline font-medium">Fazer login</span></p>
    </form>
    
  )
}