import { getChampionshipsList } from "@/app/actions/championships";
import ChampionshipsCreated from "@/components/features/championships/ChampionshipCreated";
import Link from "next/link";

export default async function MyChampionships() {
  const leagues = await getChampionshipsList();

  return (
    <main className="flex-1 flex flex-col min-h-0 w-full">
      <div className="w-full flex flex-col overflow-y-auto h-full p-4 sm:p-6 pb-8 [&::-webkit-scrollbar]:hidden">
        <h1 className="text-neutral-800 dark:text-neutral-200 font-semibold text-xl pb-1">
          Torneios Criados
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 font-medium text-sm pb-6">Gerencie todos os seus torneios criados</p>

        <section className="flex flex-col gap-8 w-full">
          {leagues.length > 0 ? (
            leagues.map((league) => (
              <ChampionshipsCreated 
                key={league.id} 
                leagueId={league.id} 
              />
            ))
          ) : (
            <p className="text-center text-neutral-500 dark:text-neutral-400 italic">
              Você ainda não criou nenhum torneio.
            </p>
          )}
          <Link href="/create-championship">
            <button className="bg-zinc-950 dark:bg-neutral-900 text-white h-32 w-full rounded-md cursor-pointer hover:bg-neutral-800 transition-colors font-medium">
              + Criar Torneio
            </button>
          </Link>
        </section>
      </div>
    </main>
  );
}