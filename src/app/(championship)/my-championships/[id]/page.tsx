import { Suspense } from 'react';
import ChampionshipDashboard from '@/components/features/championships/ChampionshipDashboard';

export default async function SoccerLeagueDashboard({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const leagueId = id;

  return (
    <main className="flex-1 flex flex-col min-h-0 w-full">
      <Suspense fallback={<div className="text-center">Carregando dashboard...</div>}>
        <ChampionshipDashboard leagueId={leagueId}/>
      </Suspense>
    </main>
  );
}