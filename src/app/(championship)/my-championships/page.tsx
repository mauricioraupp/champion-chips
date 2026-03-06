import ChampionshipsCreated from "@/components/features/championships/ChampionshipCreated";

export default function MyChampionships() {
  return (
    <main className="min-h-screen ml-0 sm:ml-25 lg:ml-68 bg-neutral-150">
      <h1 className="font-semibold text-xl text-center sm:pt-16 pt-32 sm:pb-16 pb-16">Torneios Criados</h1>
      <section className="flex flex-col gap-8 w-fit mx-auto">
        <ChampionshipsCreated/>
        <button className="bg-zinc-950 text-white h-32 w-full rounded-md cursor-pointer">+ Criar Torneio</button>
      </section>
    </main>
  );
}
