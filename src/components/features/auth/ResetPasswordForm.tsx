"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast, Toaster } from "sonner";

export default function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");
  
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const password = formData.get("password") as string;
    const passwordConfirm = formData.get("passwordConfirm") as string;

    if (password !== passwordConfirm) {
      toast.error("As senhas não coincidem!");
      setLoading(false);
      return;
    }

    if (!token) {
      toast.error("Token de recuperação ausente.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        body: JSON.stringify({ token, password }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json()

      if (response.ok) {
        toast.success(`${data.message}`);
        router.push("/login");
      } else {
        toast.error(data.message || "Erro ao resetar senha.");
      }
    } catch (error) {
      toast.error("Ocorreu um erro inesperado.");
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
        <h1 className="text-neutral-900 dark:text-neutral-100 text-4xl font-bold w-full text-left">Redefinir sua senha</h1>
        <p className="text-neutral-700 dark:text-neutral-400 w-full text-left pt-2">Escolha uma nova senha segura para sua conta</p>
      </div>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700 dark:text-neutral-400">Nova senha</label>
        <input 
          name="password"
          type="password"
          required
          minLength={6}
          className="bg-white dark:bg-neutral-900 py-2 px-3 w-full border-2 rounded-sm border-neutral-300 dark:border-neutral-800 outline-none focus:border-neutral-500 dark:focus:border-neutral-700 text-neutral-900 dark:text-neutral-100 transition-colors"
        />
      </fieldset>

      <fieldset className="flex flex-col gap-1 w-full">
        <label className="font-medium text-neutral-700 dark:text-neutral-400">Confirmar nova senha</label>
        <input
          name="passwordConfirm"
          type="password" 
          required
          className="bg-white dark:bg-neutral-900 py-2 px-3 w-full border-2 rounded-sm border-neutral-300 dark:border-neutral-800 outline-none focus:border-neutral-500 dark:focus:border-neutral-700 text-neutral-900 dark:text-neutral-100 transition-colors"
        />
      </fieldset>

      <button 
        disabled={loading}
        className="bg-black dark:bg-neutral-900 hover:bg-neutral-800 py-3 w-full rounded-md text-neutral-200 font-medium cursor-pointer disabled:bg-neutral-400 dark:disabled:bg-neutral-800 transition-colors"
      >
        {loading ? "Processando..." : "Atualizar senha"}
      </button>

      <p className="font-medium text-neutral-700 dark:text-neutral-400">
        Lembrou da senha? <Link href="/auth/login" className="text-sky-600 underline font-medium">Fazer login</Link>
      </p>
      <Toaster richColors position="top-center"/>
    </form>
  );
}