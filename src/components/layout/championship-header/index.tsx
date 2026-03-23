import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import ChampionshipSelector from "./ChampionshipSelector";
import Image from "next/image";
import Link from "next/link";
import { Menu } from '@geist-ui/icons'

export default async function ChampionshipHeader({ leagueId }: { leagueId: string }) {
  const session = await getServerSession();
  
  // 1. Adicionado o 'id' no select do usuário
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email! },
    select: {
      id: true, // ESSENCIAL para a próxima query
      email: true,
      name: true,
      image: true
    }
  });

  // 2. Adicionado o 'id' aqui também para o seletor saber quem é o atual
  const currentLeague = await prisma.soccerLeague.findUnique({
    where: { id: leagueId },
    select: {
      id: true, // Adicionado
      name: true,
      logo: true
    }
  })

  const leagues = await prisma.soccerLeague.findMany({
    where: { 
      userId: user?.id
    },
    select: {
      id: true,
      name: true,
      logo: true
    },
    orderBy: {
      name: 'asc'
    }
  });

  return (
    <header className="flex mx-auto w-full max-w-7xl items-center justify-between gap-6 border-b border-neutral-300 h-16 sm:h-25 px-4 sm:px-8">
      <div className="flex justify-between items-center w-full gap-1 rounded-md">
        <div className="flex items-center gap-4">
          <Link href="/my-championships" className="flex text-black font-bold text-3xl tracking-tighter">
            champion<span className="text-yellow-600">chips</span>
          </Link>
          
          <p className="hidden sm:block text-5xl italic font-thin pr-2 text-neutral-600">|</p>
          
          <ChampionshipSelector currentLeague={currentLeague} leagues={leagues}/>
        </div>

        <Link href="/profile" className="relative hidden sm:block w-8 h-8 rounded-full overflow-hidden border border-neutral-200">
          <Image
            src={user?.image || "/default-user-pic.png"}
            alt="Foto de perfil"
            fill
            className="object-cover"
          />
        </Link>

        <div className="block sm:hidden">
          <Menu size={32}/>
        </div>
      </div>
    </header>
  )
}