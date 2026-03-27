import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import { Edit, Tool, Shield } from '@geist-ui/icons';
import UserInfoCard from "@/components/features/profile/cards/UserInfoCard";
import StatCard from "@/components/features/profile/StatCard";
import RecentActivityContainer from "@/components/features/profile/RecentActivityContainer";
import ProfileActionCard from "@/components/features/profile/ProfileActionCard";
import DeleteAccountButton from "@/components/ui/DeleteAccountButton";
import LogoutButton from "@/components/ui/LogoutButton";

export default async function ProfilePage() {
  const session = await getServerSession();
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email! },
    select: {
      email: true,
      name: true,
      image: true,
      _count: {
        select: { 
          SoccerLeagues: true, 
          TeamsSoccerLeague: true, 
          Players: true 
        }
      }
    }
  });

  if (!user) return <div className="p-8 text-center text-neutral-500">Usuário não encontrado.</div>;

  const allActivities = await prisma.activity.findMany({
    where: { userId: session!.user.id },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return (
    <main className="flex-1 flex flex-col min-h-0 w-full">
      <div className="w-full flex flex-col overflow-y-auto h-full p-4 sm:p-6 pb-8 [&::-webkit-scrollbar]:hidden">
        <h1 className="text-neutral-800 font-semibold text-xl pb-1">Configurações da Conta</h1>
        <p className="text-neutral-500 font-medium text-sm pb-6">Gerencie suas informações pessoais e visualize suas estatísticas na plataforma.</p>
        <section className="flex flex-col gap-8 w-full">

          <UserInfoCard user={user}/>

          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard title="Torneios" stat={user._count.SoccerLeagues} />
            <StatCard title="Times" stat={user._count.TeamsSoccerLeague} />
            <StatCard title="Jogadores" stat={user._count.Players} />
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProfileActionCard 
              title="Preferências" 
              description="Ajuste notificações e o idioma da plataforma." 
              icon={<Tool size={18}/>} 
            />
            <ProfileActionCard 
              title="Segurança" 
              description="Altere sua senha ou configure autenticação em duas etapas." 
              icon={<Shield size={18}/>} 
            />
          </div>

          <RecentActivityContainer allActivities={allActivities} />

          <section className="bg-white border border-neutral-300 rounded-md shadow-sm">
            <div className="p-6 flex justify-between items-center gap-2">
              <div>
                <h3 className="text-sm font-semibold text-neutral-900">Sair da Conta</h3>
                <p className="text-sm text-neutral-500">Encerre sua sessão atual com segurança.</p>
              </div>
              <LogoutButton/>
            </div>
          </section>

          <section className="bg-white border border-red-300 rounded-md shadow-sm">
            <div className="p-6 flex justify-between items-center gap-2">
              <div>
                <h3 className="text-sm font-semibold text-red-600">Deletar Conta</h3>
                <p className="text-sm text-neutral-500">Delete todos os dados da sua conta <span className="font-semibold text-neutral-800">(irreversível)</span></p>
              </div>
              <DeleteAccountButton/>
            </div>
          </section>  
        </section>
      </div>
    </main>
  );
}