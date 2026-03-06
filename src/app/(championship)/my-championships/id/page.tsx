import { Clipboard, Calendar, Shield, Target } from '@geist-ui/icons'
import DashboardSelector from "@/components/features/championships/DashboardSelector";

export default function SoccerLeagueDashboard() {
  return (
    <main className="min-h-screen ml-0 sm:ml-25 lg:ml-68 bg-neutral-150">
        <h1 className="font-semibold text-xl w-fit mx-auto sm:pt-16 pt-32 sm:pb-16 pb-16">Torneio 1</h1>
        <section className="w-full flex flex-col gap-4 items-center">
          <div className="grid grid-rows-1 grid-cols-4 gap-4 w-fit">
            <DashboardSelector icon={<Clipboard size={18}/>} title={"Tabela"}/>
            <DashboardSelector icon={<Calendar size={18}/>} title={"Jogos"}/>
            <DashboardSelector icon={<Shield size={18}/>} title={"Times"}/>
            <DashboardSelector icon={<Target size={18}/>} title={"Artilharia"}/>
          </div>
        </section>
    </main>
  );
}