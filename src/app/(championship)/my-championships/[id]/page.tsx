import { Suspense } from 'react';
import ChampionshipDashboard from '@/components/features/championships/ChampionshipDashboard';

export default async function SoccerLeagueDashboard({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const leagueId = id;

  return (
    <main className="flex w-screen flex-col sm:w-full py-0 px-6 sm:py-6">
      <Suspense fallback={<div className="text-center">Carregando dashboard...</div>}>
        <ChampionshipDashboard leagueId={leagueId}/>
      </Suspense>
    </main>
  );
}