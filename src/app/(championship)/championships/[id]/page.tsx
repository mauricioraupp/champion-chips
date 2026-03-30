import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import ChampionshipDashboard from '@/components/features/championships/ChampionshipDashboard';

export default async function SoccerLeagueDashboard({ params }: { params: Promise<{ id: string }> }) {
  const { id: leagueId } = await params;
  const session = await getServerSession(authOptions);

  const league = await prisma.soccerLeague.findUnique({
    where: { id: leagueId },
    select: { userId: true, name: true }
  });

  if (!league) return <div className="p-8 text-center">Campeonato não encontrado.</div>;

  const isOwner = session?.user?.id === league.userId;

  const favoriteRecord = session?.user?.id 
    ? await prisma.favoriteLeague.findUnique({
        where: {
          userId_leagueId: {
            userId: session.user.id,
            leagueId: leagueId,
          },
        },
      })
    : null;

  const isFavorite = !!favoriteRecord;

  return (
    <main className="flex-1 flex flex-col min-h-0 w-full">
      <ChampionshipDashboard leagueId={leagueId} isOwner={isOwner} initialIsFavorite={isFavorite}/>
    </main>
  );
}