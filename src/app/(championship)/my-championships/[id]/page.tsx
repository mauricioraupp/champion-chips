import { Suspense } from 'react';
import { getChampionshipName } from '@/app/actions/championships';
import ChampionshipDashboard from '@/components/features/championships/ChampionshipDashboard';

export default async function SoccerLeagueDashboard({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const leagueId = Number(id);
  const data = await getChampionshipName(leagueId);

  return (
    <main className="min-h-screen ml-0 sm:ml-25 lg:ml-68 bg-neutral-150">
      <h1 className="font-semibold text-xl w-fit mx-auto sm:pt-16 pt-32 sm:pb-16 pb-16">
        {data?.name || "Carregando..."}
      </h1>
      <Suspense fallback={<div className="text-center">Carregando dashboard...</div>}>
        <ChampionshipDashboard leagueId={leagueId}/>
      </Suspense>
    </main>
  );
}