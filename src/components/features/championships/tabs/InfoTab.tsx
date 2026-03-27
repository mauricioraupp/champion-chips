"use client"

import { useState, useEffect } from "react"
import { getChampionshipInfo } from "@/app/actions/championships"
import { toggleFavorite } from "@/app/actions/favorites"
import { Shield, Calendar, Award, Target, Info, Globe, Lock, Share2, Bookmark } from "@geist-ui/icons"
import Image from "next/image"
import { toast } from "sonner"

export default function InfoTab({ leagueId, initialIsFavorite }: { leagueId: string, initialIsFavorite: boolean }) {
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      const res = await getChampionshipInfo(leagueId)
      setData(res)
      setLoading(false)
    }
    loadData()
  }, [leagueId])

  const handleToggleFavorite = async () => {
    if (loading) return;
    
    setLoading(true);
    setIsFavorite(!isFavorite);

    const result = await toggleFavorite(leagueId);

    if (result.error) {
      toast.error(result.error);
      setIsFavorite(isFavorite);
    } else {
      toast.success(result.isFavorite ? "Adicionado aos favoritos" : "Removido dos favoritos");
    }
    setLoading(false);
  };

  if (loading) return <div className="p-8 text-center text-neutral-500 italic text-sm">Carregando informações...</div>

  const stats = [
    { label: "Times", value: data?._count?.Teams || 0, icon: <Shield size={18} /> },
    { label: "Partidas Finalizadas", value: data?.Matches?.filter((m: any) => m.status === "FINISHED").length || 0, icon: <Calendar size={18} /> },
    { label: "Gols Marcados", value: data?._count?.goals || 0, icon: <Target size={18} /> },
    { label: "Rodadas", value: data?.secondLegs ? "Ida e Volta" : "Turno Único", icon: <Award size={18} /> },
  ]

  return (
    <div className="flex flex-col gap-6">
      
      <section className="bg-white border border-neutral-300 rounded-md overflow-hidden shadow-sm">
        <div className="p-8 flex flex-col sm:flex-row items-center gap-6">
          <figure className="relative w-32 h-32 rounded-lg bg-neutral-100 border border-neutral-200 shadow-inner overflow-hidden flex items-center justify-center shrink-0">
            {data?.logo ? (
              <Image src={data.logo} alt={data.name} fill className="object-cover" />
            ) : (
              <Shield className="text-neutral-300" size={48} />
            )}
          </figure>

          <div className="flex flex-col text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <h2 className="text-2xl font-bold text-neutral-900">{data?.name}</h2>
              {data?.public ? (
                <span className="p-1 text-green-600 bg-green-50 rounded-full" title="Público"><Globe size={14}/></span>
              ) : (
                <span className="p-1 text-neutral-400 bg-neutral-50 rounded-full" title="Privado"><Lock size={14}/></span>
              )}
            </div>
            <p className="text-neutral-500 text-sm mb-4">Campeonato criado em {new Date(data?.createdAt).toLocaleDateString('pt-BR')}</p>
            
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 items-center">
              <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-[10px] font-bold uppercase tracking-widest rounded-full border border-neutral-200">
                ID: {leagueId.slice(0, 8)}...
              </span>

              <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border ${
                data?.public ? "bg-blue-50 text-blue-600 border-blue-100" : "bg-neutral-50 text-neutral-500 border-neutral-200"
              }`}>
                {data?.public ? "Disponível para todos" : "Acesso Restrito"}
              </span>

              <button 
                onClick={handleToggleFavorite}
                className="flex items-center gap-2 ml-1 px-2 py-1 text-neutral-500 hover:text-black cursor-pointer transition-colors"
              >
                <Bookmark size={16} className={isFavorite ? "fill-neutral-900 text-neutral-900" : ""} color={isFavorite ? "neutral-900" : "neutral-400"} />
                <span className={"text-[10px] font-bold uppercase tracking-widest"}>Favoritar</span>
              </button>

              {data?.public && (
                <button 
                  onClick={() => {
                    const url = `${window.location.origin}/championships/${leagueId}`;
                    navigator.clipboard.writeText(url);
                    toast.success("Link de acesso copiado!");
                  }}
                  className="flex items-center gap-2 ml-1 px-2 py-1 text-neutral-500 hover:text-black cursor-pointer transition-colors"
                  title="Compartilhar campeonato"
                >
                  <Share2 size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Compartilhar</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="border border-neutral-300 p-4 rounded-md shadow-sm">
            <div className="text-neutral-400 mb-2">{stat.icon}</div>
            <p className="text-2xl font-bold text-neutral-900 leading-none mb-1">{stat.value}</p>
            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      <section className="border border-neutral-300 rounded-md overflow-hidden shadow-sm">
        <header className="px-6 py-4 border-b border-neutral-100 flex items-center gap-2">
          <Info size={16} className="text-neutral-500" />
          <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-widest">Resumo Técnico</h3>
        </header>
        <div className="p-6">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
            <div className="flex justify-between align-center border-b border-neutral-100 pb-2">
              <dt className="text-sm text-neutral-500">Sistema de disputa</dt>
              <dd className="text-sm font-semibold text-neutral-900">Pontos Corridos</dd>
            </div>
            <div className="flex justify-between border-b border-neutral-100 pb-2">
              <dt className="text-sm text-neutral-500">Segundo turno</dt>
              <dd className="text-sm font-semibold text-neutral-900">{data?.secondLegs ? "Ativado" : "Desativado"}</dd>
            </div>
            <div className="flex justify-between border-b border-neutral-100 pb-2">
              <dt className="text-sm text-neutral-500">Visibilidade</dt>
              <dd className="text-sm font-semibold text-neutral-900">{data?.public ? "Pública" : "Privada"}</dd>
            </div>
            <div className="flex justify-between border-b border-neutral-100 pb-2">
              <dt className="text-sm text-neutral-500">Data de Início</dt>
              <dd className="text-sm font-semibold text-neutral-900">{new Date(data?.createdAt).toLocaleDateString()}</dd>
            </div>
          </dl>
        </div>
        <footer className="px-6 py-3 border-t border-neutral-100 text-center">
          <p className="text-[10px] text-neutral-400 uppercase font-medium">Dados atualizados em tempo real conforme resultados das partidas</p>
        </footer>
      </section>

    </div>
  )
}