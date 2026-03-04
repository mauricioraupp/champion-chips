"use client";

import { signIn } from "next-auth/react"
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import GoogleLoginBtn from "@/components/features/auth/GoogleAuthButton";
import Link from "next/link";

export default function LoginForm() {
  const searchParams = useSearchParams()
  const emailSent = searchParams.get("sent");
  const router = useRouter()
  const [loading, setLoading] = useState(false);

  async function login(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setLoading(true);

  const formData = new FormData(e.currentTarget);
  const email = formData.get("email");
  const password = formData.get("password");
  const remember = formData.get("remember");

  try {
    const result = await signIn("credentials", {
      email,
      password,
      remember: formData.get("remember") === "on",
      redirect: false,
    });

    if (result?.error) {
      toast.error("E-mail ou senha incorretos.");
    } else if (result?.ok) {
      toast.success("Bem-vindo de volta!");
      router.push("/profile");
    }
  } catch (error) {
    toast.error("Ocorreu um erro inesperado.");
  } finally {
    setLoading(false);
  }
}
  return(
    <form 
      onSubmit={login}
      className="flex flex-col gap-4 sm:gap-7 justify-center items-center h-3/5 w-5/6 sm:w-3/5 max-w-md"
    >
      {emailSent && (
        <div className="bg-emerald-100 border border-emerald-400 text-emerald-700 px-4 py-3 rounded mb-4 text-sm w-full">
          Link enviado com sucesso! Verifique sua caixa de entrada.
        </div>
      )}
      <div className="w-full">
        <h1 className="text-4xl font-bold w-full text-left">Bem vindo de volta!</h1>
        <p className="text-neutral-700 w-full text-left pt-2">Insira seus dados</p>
      </div>
      <GoogleLoginBtn/>
      <div className="flex items-center justify-center w-full">
        <hr className="w-full border-1 rounded-xs border-neutral-300"/>
        <span className="absolute px-4 font-medium text-neutral-700 -translate-x-1/2 bg-neutral-50 left-1/2">or</span>
      </div>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700">Email</label>
        <input 
          name="email"
          type="email"
          className="py-2 px-3 w-full border-2 rounded-sm border-neutral-300"
        />
      </fieldset>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700">Senha</label>
        <input
          name="password"
          type="password" 
          className="py-2 px-3 w-full border-2 rounded-sm border-neutral-300"/>
      </fieldset>

      <fieldset className="flex flex-col sm:flex-row justify-between w-full">
        <div className="flex gap-2">
          <input 
            name="remember"
            type="checkbox" 
            className="relative h-6 w-6 appearance-none rounded-sm border-2 border-neutral-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full 
              after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] 
              after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:border-zinc-950 checked:bg-zinc-950 cursor-pointer"/>
          <span className="font-medium text-neutral-700">Lembrar de mim</span>
        </div>
        <Link href={"/forgot-password"} className="text-sky-600 underline font-medium pt-4 sm:pt-0">Esqueci minha senha</Link>
      </fieldset>

      <button className="bg-zinc-950 hover:bg-zinc-800 py-3 w-full rounded-md text-neutral-50 cursor-pointer">Entrar</button>
      <p className="font-medium text-neutral-700">Ainda não possui uma conta? <Link href={"/register"} className="text-sky-600 underline font-medium">Fazer cadastro</Link></p>
      <Toaster richColors position="top-center"/>
    </form>
  )
}