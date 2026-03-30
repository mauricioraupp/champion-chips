"use client";

import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import GoogleLoginBtn from "@/components/ui/GoogleAuthButton";
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

  return (
    <form 
      onSubmit={register}
      className="flex flex-col gap-4 sm:gap-7 justify-center items-center h-3/5 w-5/6 sm:w-3/5 max-w-md"
    >
      <div className="w-full">
        <h1 className="text-neutral-900 dark:text-neutral-100 text-4xl font-bold w-full text-left">Seja bem vindo!</h1>
        <p className="text-neutral-700 dark:text-neutral-400 w-full text-left pt-2">Insira seus dados</p>
      </div>

      <GoogleLoginBtn />

      <div className="flex items-center justify-center w-full relative">
        <hr className="w-full border-1 rounded-xs border-neutral-300 dark:border-neutral-800" />
        <span className="absolute px-4 font-medium text-neutral-700 dark:text-neutral-400 -translate-x-1/2 bg-neutral-50 dark:bg-neutral-950 left-1/2">or</span>
      </div>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700 dark:text-neutral-400">Nome</label>
        <input 
          name="name"
          type="text"
          className="bg-white dark:bg-neutral-900 py-2 px-3 w-full border-2 rounded-sm border-neutral-300 dark:border-neutral-800 outline-none focus:border-neutral-500 dark:focus:border-neutral-700 text-neutral-900 dark:text-neutral-100"
        />
      </fieldset>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700 dark:text-neutral-400">Email</label>
        <input 
          name="email"
          type="email"
          className="bg-white dark:bg-neutral-900 py-2 px-3 w-full border-2 rounded-sm border-neutral-300 dark:border-neutral-800 outline-none focus:border-neutral-500 dark:focus:border-neutral-700 text-neutral-900 dark:text-neutral-100"
        />
      </fieldset>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700 dark:text-neutral-400">Senha</label>
        <input 
          name="password"
          type="password" 
          className="bg-white dark:bg-neutral-900 py-2 px-3 w-full border-2 rounded-sm border-neutral-300 dark:border-neutral-800 outline-none focus:border-neutral-500 dark:focus:border-neutral-700 text-neutral-900 dark:text-neutral-100"
        />
      </fieldset>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700 dark:text-neutral-400">Confirme sua senha</label>
        <input 
          name="confirmPassword"
          type="password" 
          className="bg-white dark:bg-neutral-900 py-2 px-3 w-full border-2 rounded-sm border-neutral-300 dark:border-neutral-800 outline-none focus:border-neutral-500 dark:focus:border-neutral-700 text-neutral-900 dark:text-neutral-100"
        />
      </fieldset>

      <button className="bg-black dark:bg-neutral-900 hover:bg-neutral-800 py-3 w-full rounded-md text-neutral-200 font-medium cursor-pointer transition-colors">Criar conta</button>
      
      <p className="font-medium text-neutral-700 dark:text-neutral-400">
        Já possui uma conta? <Link href={"/auth/login"} className="text-sky-600 underline font-medium">Fazer login</Link>
      </p>
    </form>
  )
}