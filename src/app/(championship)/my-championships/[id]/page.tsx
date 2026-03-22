import { Suspense } from 'react';
import { getChampionshipName } from '@/app/actions/championships';
import ChampionshipDashboard from '@/components/features/championships/ChampionshipDashboard';

export default async function SoccerLeagueDashboard({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const leagueId = id;
  const data = await getChampionshipName(leagueId);

  return (
    <main className="flex w-screen flex-col sm:w-full p-6">
      <h1 className="text-neutral-800 font-semibold text-2xl">
        {data?.name || "Carregando..."}
      </h1>
      <Suspense fallback={<div className="text-center">Carregando dashboard...</div>}>
        <ChampionshipDashboard leagueId={leagueId}/>
      </Suspense>
    </main>
  );
}