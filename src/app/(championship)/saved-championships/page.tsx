import { getSavedChampionshipsList } from "@/app/actions/favorites";
import ChampionshipsCreated from "@/components/features/championships/ChampionshipCreated";

export default async function SavedChampionships() {
  const leagues = await getSavedChampionshipsList();

  return (
    <main className="flex-1 flex flex-col min-h-0 w-full">
      <div className="w-full flex flex-col overflow-y-auto h-full p-4 sm:p-6 pb-8 [&::-webkit-scrollbar]:hidden">
        <h1 className="text-neutral-800 font-semibold text-xl pb-1">
          Torneios Salvos
        </h1>
        <p className="text-neutral-500 font-medium text-sm pb-6">Visualize todos os seus campeonatos salvos</p>

        <section className="flex flex-col gap-8 w-full">
          {leagues.length > 0 ? (
            leagues.map((league) => (
              <ChampionshipsCreated 
                key={league.id} 
                leagueId={league.id} 
              />
            ))
          ) : (
            <p className="text-center text-neutral-500 italic">
              Você ainda não favoritou nenhum torneio.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}