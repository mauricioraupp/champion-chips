import { Suspense } from 'react';
import ChampionshipDashboard from '@/components/features/championships/ChampionshipDashboard';

export default function SoccerLeagueDashboard() {
  return (
    <main className="min-h-screen ml-0 sm:ml-25 lg:ml-68 bg-neutral-150 p-4">
      <h1 className="font-semibold text-xl w-fit mx-auto sm:pt-16 pt-32 sm:pb-16 pb-16">
        Torneio 1
      </h1>
      <Suspense fallback={<div>Carregando dashboard...</div>}>
        <ChampionshipDashboard/>
      </Suspense>
    </main>
  );
}