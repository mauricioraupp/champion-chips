"use client";

import { MotionHeader } from "@/components/MotionWrapper";
import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "@geist-ui/icons";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ErrorContent() {
  const searchParams = useSearchParams();
  const errorType = searchParams.get("error");

  const errorConfig = {
    "league-not-exist": {
      title: "Ops! Torneio não encontrado.",
      description: "A liga que você está procurando não existe ou o link pode ter expirado.",
    },
    "private-league": {
      title: "Acesso Restrito.",
      description: "Este torneio é privado. Você precisa estar logado como administrador para visualizar estes dados.",
    },
    default: {
      title: "Ops! Algo deu errado.",
      description: "A página que você está procurando não existe ou você não tem permissão para acessá-la.",
    },
  };

  const content = errorConfig[errorType as keyof typeof errorConfig] || errorConfig.default;

  return (
    <MotionHeader
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-yellow-600/10 text-yellow-600 border border-yellow-600/20">
        <AlertTriangle size={40} />
      </div>

      <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        {content.title}
      </h2>

      <p className="mx-auto max-w-md text-neutral-500 dark:text-neutral-400 font-medium mb-10 text-lg">
        {content.description}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-neutral-900 dark:bg-white px-8 text-sm font-black text-white dark:text-black transition-all hover:scale-105 active:scale-95"
        >
          <ArrowLeft size={16} /> Voltar para o Início
        </Link>

        <Link
          href="/championships"
          className="flex h-12 items-center justify-center px-8 text-sm font-bold text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
        >
          Meus Campeonatos
        </Link>
      </div>
    </MotionHeader>
  );
}

export default function GlobalError() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#030303] text-neutral-900 dark:text-neutral-100 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

      <main className="relative z-10 px-6 text-center">
        <Suspense fallback={<div className="text-neutral-500">Carregando...</div>}>
          <ErrorContent />
        </Suspense>
      </main>
    </div>
  );
}