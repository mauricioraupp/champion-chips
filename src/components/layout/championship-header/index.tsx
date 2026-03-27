import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import ChampionshipSelector from "../ChampionshipSelector";
import MobileMenu from "../MobileMenu";
import UserNav from "../UserNav";
import Link from "next/link";

export default async function ChampionshipHeader({ leagueId, isOwner }: { leagueId: string, isOwner: boolean }) {
  const session = await getServerSession();
  
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email! },
    select: {
      id: true,
      email: true,
      name: true,
      image: true
    }
  });

  const currentLeague = await prisma.soccerLeague.findUnique({
    where: { id: leagueId },
    select: {
      id: true,
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
          <Link href="/my-championships" className="flex text-black font-bold text-3xl">champion<span className="text-yellow-600">chips</span></Link>
          
          <p className="hidden sm:block text-5xl italic font-thin pr-2 text-neutral-600">|</p>
              
          <ChampionshipSelector currentLeague={currentLeague} leagues={leagues} isOwner={isOwner}/>
        </div>

        <UserNav user={user} />
        
        <MobileMenu user={user} currentLeague={currentLeague} leagues={leagues} 
        />
      </div>
    </header>
  )
}