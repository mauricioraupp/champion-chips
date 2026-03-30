import ChampionshipSideBar from "@/components/layout/championship-sidebar";
import ChampionshipHeader from "@/components/layout/championship-header";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function MyChampionshipLayout({ children, params }: { children: React.ReactNode; params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await getServerSession(authOptions);

  const league = await prisma.soccerLeague.findUnique({
    where: { id: id },
    select: { userId: true, public: true }
  });

  if (!league) {
    redirect("/not-found?error=league-not-exist");
  }

  const isOwner = session?.user?.id === league?.userId;

  if (!league.public && !isOwner) {
    redirect("/not-found?error=private-league"); 
  }

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <ChampionshipHeader leagueId={id} isOwner={isOwner}/> 
      <div className="mx-auto flex w-full max-w-7xl h-[calc(100dvh-64px)] sm:py-8 flex-col sm:flex-row overflow-hidden">
        <ChampionshipSideBar isOwner={isOwner} />
        {children}
      </div>
      <Toaster richColors position="top-center"/>
    </div>
  );
}