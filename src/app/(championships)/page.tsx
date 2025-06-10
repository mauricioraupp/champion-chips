import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ChampCreated from "@/components/champ-created";

export default function Home() {
  const session = getServerSession
  if (!session) {
    redirect("/login")
  }
  return (
    <main className="min-h-[calc(100vh-102px)]">
      <div className="w-full flex justify-center py-12">
        <h1 className="font-medium text-xl">Torneios Criados</h1>
      </div>
      <section className="flex flex-col gap-8 w-fit mx-auto">
        <ChampCreated/>
        <button className="bg-zinc-950 text-white h-32 w-full rounded-md cursor-pointer mb-16">+ Criar Torneio</button>
      </section>
    </main>
  );
}
