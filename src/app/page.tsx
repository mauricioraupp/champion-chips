import { ChampCreated } from "@/components/champ-created";

export default function Home() {
  return (
    <>
      <div className="w-full flex justify-center p-12">
        <h1 className="font-medium text-xl">Torneios Criados</h1>
      </div>
      <section className="flex flex-col gap-8 w-fit mx-auto">
        <ChampCreated/>
        <button className="bg-zinc-950 text-white h-32 w-full rounded-md cursor-pointer">+ Criar Torneio</button>
      </section>
    </>
  );
}
