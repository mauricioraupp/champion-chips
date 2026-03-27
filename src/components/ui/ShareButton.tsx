"use client"

import { Share, Check } from "@geist-ui/icons";
import { useState } from "react";
import { toast } from "sonner";

export function ShareButton({ leagueId, leagueName }: { leagueId: string; leagueName: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = `${window.location.origin}/championships/${leagueId}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: leagueName,
          text: `Acompanhe o campeonato ${leagueName} no nosso app!`,
          url: url,
        });
      } catch (err) { console.log(err) }
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Link copiado para compartilhar!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-neutral-300 rounded-md text-[10px] font-bold uppercase tracking-widest hover:bg-neutral-50 transition-all active:scale-95 shadow-sm cursor-pointer min-w-[140px]"
    >
      {copied ? <Check size={14} className="text-green-600" /> : <Share size={14} />}
      {copied ? "Link Copiado" : "Compartilhar"}
    </button>
  );
}