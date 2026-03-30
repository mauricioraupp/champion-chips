import { useState } from "react"
import { toggleFavorite } from "@/app/actions/favorites"
import { Shield, Globe, Lock, Share2, Bookmark } from "@geist-ui/icons"
import { toast } from "sonner"
import Image from "next/image"

interface HeaderProps {
  leagueId: string;
  name: string;
  logo: string | null;
  createdAt: Date;
  isPublic: boolean;
  isOwner: boolean;
  initialIsFavorite: boolean;
}

export default function ChampionshipHeaderCard({
  leagueId, 
  name, 
  logo, 
  createdAt, 
  isPublic, 
  isOwner, 
  initialIsFavorite 
}: HeaderProps) {
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);

  const handleToggleFavorite = async () => {
    const previousState = isFavorite;
    setIsFavorite(!previousState);

    const result = await toggleFavorite(leagueId);

    if (result.error) {
      toast.error(result.error);
      setIsFavorite(previousState);
    } else {
      toast.success(result.isFavorite ? "Adicionado aos favoritos" : "Removido dos favoritos");
    }
  };

  const handleCopyLink = () => {
    const url = `${window.location.origin}/championships/${leagueId}`;
    navigator.clipboard.writeText(url);
    toast.success("Link de acesso copiado!");
  };

  return (
    <section className="bg-white dark:bg-zinc-950 border border-neutral-300 dark:border-neutral-900 rounded-md overflow-hidden shadow-sm">
      <div className="p-8 flex flex-col sm:flex-row items-center gap-6">
        <figure className="relative w-32 h-32 rounded-md bg-neutral-100 border border-neutral-200 dark:border-neutral-900 overflow-hidden flex items-center justify-center shrink-0">
          {logo ? (
            <Image src={logo} alt={name} fill className="object-cover" />
          ) : (
            <Shield className="text-neutral-300" size={48} />
          )}
        </figure>

        <div className="flex flex-col text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-200">{name}</h2>
            {isPublic ? (
              <span className="p-1 text-green-600 bg-green-50 dark:bg-neutral-900 rounded-full" title="Público">
                <Globe size={14}/>
              </span>
            ) : (
              <span className="p-1 text-neutral-600 bg-neutral-100 dark:bg-neutral-900 rounded-full" title="Privado">
                <Lock size={14}/>
              </span>
            )}
          </div>
          
          <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4">
            Campeonato criado em {new Date(createdAt).toLocaleDateString('pt-BR')}
          </p>

          <div className="flex flex-wrap justify-center sm:justify-start gap-3 items-center">
            <button 
              title={leagueId}
              className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 
                text-[10px] font-bold uppercase tracking-wider rounded-full border border-neutral-200 dark:border-neutral-900"
            >
              ID: {leagueId.slice(0, 8)}...
            </button>

            <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${
              isPublic ? "bg-green-100 dark:bg-neutral-800 text-green-600 border-green-200 dark:border-green-800" : "bg-neutral-100 text-neutral-600 border-neutral-200"
            }`}>
              {isPublic ? "Disponível para todos" : "Acesso Restrito"}
            </span>

            {!isOwner && (
              <button 
                onClick={handleToggleFavorite}
                className="flex items-center gap-2 px-2 py-1 text-neutral-500 dark:text-neutral-300 hover:text-black dark:hover:text-neutral-200 cursor-pointer transition-colors"
              >
                <Bookmark 
                  size={16} 
                  className={isFavorite ? "fill-neutral-900 dark:fill-neutral-300 text-neutral-900 dark:text-neutral-300" : ""} 
                />
                <span className="text-[10px] font-bold uppercase tracking-wider">Favoritar</span>
              </button>
            )}

            {isPublic && (
              <button 
                onClick={handleCopyLink}
                className="flex items-center gap-2 px-2 py-1 text-neutral-500 dark:text-neutral-300 hover:text-black dark:hover:text-neutral-200 cursor-pointer transition-colors"
                title={`${window.location.origin}/championships/${leagueId}`}
              >
                <Share2 size={14} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Compartilhar</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}