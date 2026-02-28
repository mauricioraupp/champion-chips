import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ChampionshipCreated from "@/components/features/championships/ChampionshipCreated";

export default function Home() {
  const session = getServerSession
  if (!session) {
    redirect("/login")
  }
  return (
    <main className="min-h-screen ml-0 sm:ml-25 lg:ml-68 bg-neutral-150">
      <section className="flex flex-col gap-8 w-fit mx-auto py-16">
        <h1 className="font-semibold text-xl">Torneios Criados</h1>
        <ChampionshipCreated/>
        <button className="bg-zinc-950 text-white h-32 w-full rounded-md cursor-pointer">+ Criar Torneio</button>
      </section>
    </main>
  );
}
