import { getChampionshipsList } from "@/app/actions/championships";
import ChampionshipsCreated from "@/components/features/championships/ChampionshipCreated";
import Link from "next/link";

export default async function MyChampionships() {
  const leagues = await getChampionshipsList();

  return (
    <main className="flex w-screen flex-col gap-1 px-4 sm:w-full sm:p-6">
      <h1 className="text-neutral-800 font-semibold text-xl">
        Torneios Criados
      </h1>
      <p className="text-neutral-500 font-medium text-sm">Gerencie todos os seus torneios criados</p>
      
      <div className="overflow-y-auto max-h-154 my-4">
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
            Você ainda não criou nenhum torneio.
          </p>
        )}

        <Link href="/create-championship">
          <button className="bg-zinc-950 text-white h-32 w-full rounded-md cursor-pointer hover:bg-zinc-900 transition-colors font-medium">
            + Criar Torneio
          </button>
        </Link>
      </section>
      </div>
    </main>
  );
}