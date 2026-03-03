"use client";

import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation";
import { toast, Toaster } from "sonner";
import GoogleLoginBtn from "@/components/features/auth/GoogleAuthButton";
import Link from "next/link";

export default function RegisterForm() {
  const searchParams = useSearchParams()

  async function register(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (password !== confirmPassword) {
    return toast.error("As senhas não coincidem!");
  }

  if (password.length < 6) {
    return toast.error("A senha deve ter pelo menos 6 caracteres.");
  }

  try {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      return toast.error("Erro ao criar conta.");
    }

    toast.success("Conta criada com sucesso!");

    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/profile",
    });

  } catch (err) {
    toast.error("Erro ao conectar com o servidor.");
  }
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
          name="confirmPassword"
          type="password" 
          className="py-2 px-3 w-full border-2 rounded-sm border-neutral-300"/>
      </fieldset>

      <button className="bg-zinc-950 hover:bg-zinc-800 py-3 w-full rounded-md text-neutral-50 cursor-pointer">Criar conta</button>
      <p className="font-medium text-neutral-700">Já possui uma conta? <Link href={"/login"} className="text-sky-600 underline font-medium">Fazer login</Link></p>
      <Toaster richColors position="top-center"/>
    </form>
    
  )
}