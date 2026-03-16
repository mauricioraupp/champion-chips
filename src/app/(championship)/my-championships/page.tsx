import { getChampionshipsList } from "@/app/actions/championships";
import ChampionshipsCreated from "@/components/features/championships/ChampionshipCreated";
import Link from "next/link";

export default async function MyChampionships() {
  const leagues = await getChampionshipsList();

  return (
    <main className="min-h-screen ml-0 sm:ml-25 lg:ml-68 bg-neutral-150">
      <h1 className="font-semibold text-xl text-center sm:pt-16 pt-32 sm:pb-16 pb-16">
        Torneios Criados
      </h1>
      
      <section className="flex flex-col gap-8 w-full max-w-4xl pb-4 px-4 mx-auto">
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
    </main>
  );
}