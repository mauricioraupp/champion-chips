"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, Toaster } from "sonner";

export default function ForgotPasswordForm() {
  const router = useRouter();
  
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Link enviado para o seu e-mail!");
        if (data.isSocial === true) {
          router.push("/login");
        } else if (data.isSocial === false) {
          router.push("/login?sent=true")
        }
      } else {
        toast.error(data.message || "Erro ao solicitar recuperação.");
      }
    } catch (error) {
      toast.error("Ocorreu um erro inesperado ao conectar com o servidor.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 sm:gap-7 justify-center items-center h-3/5 w-5/6 sm:w-3/5 max-w-md"
    >
      <div className="w-full">
        <h1 className="text-4xl font-bold w-full text-left">Informe seu email</h1>
        <p className="text-neutral-700 w-full text-left pt-2">Informe seu email para podermos confirmar sua identidade</p>
      </div>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700">Email</label>
        <input 
          name="email"
          type="email"
          required
          className="py-2 px-3 w-full border-2 rounded-sm border-neutral-300"
        />
      </fieldset>

      <button 
        disabled={loading}
        className="bg-zinc-950 py-3 w-full rounded-md text-neutral-50 cursor-pointer disabled:bg-zinc-500"
      >
        {loading ? "Processando..." : "Recuperar senha"}
      </button>

      <p className="font-medium text-neutral-700">
        Lembrou da senha? <Link href="/login" className="text-sky-600 underline font-medium">Fazer login</Link>
      </p>
      <Toaster richColors position="top-center"/>
    </form>
  );
}