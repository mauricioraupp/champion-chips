import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { Edit, Tool, LogOut, Shield } from '@geist-ui/icons';
import StatCard from "@/components/features/profile/StatCard";
import ActivityItem from '@/components/features/profile/ActivityItem';
import ProfileActionCard from "@/components/features/profile/ProfileActionCard";
import { DeleteAccountButton } from "@/components/ui/DeleteAccountButton";

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

  return (
    <main className="flex-1 flex flex-col min-h-0 w-full">
      <div className="w-full flex flex-col overflow-y-auto h-full p-4 sm:p-6 pb-8 [&::-webkit-scrollbar]:hidden">
        <h1 className="text-neutral-800 font-semibold text-xl pb-1">Configurações da Conta</h1>
        <p className="text-neutral-500 font-medium text-sm pb-6">Gerencie suas informações pessoais e visualize suas estatísticas na plataforma.</p>
        <section className="flex flex-col gap-8 w-full">

          <section className="bg-white border border-neutral-300 rounded-md overflow-hidden shadow-sm">
            <div className="p-6">
              <h3 className="text-sm font-semibold text-neutral-900 mb-1">Avatar e Nome</h3>
              <p className="text-sm text-neutral-500 mb-6">Sua foto de perfil será exibida nos campeonatos que você gerencia.</p>
              
              <div className="flex items-center gap-2">
                <figure className="relative w-16 h-16 rounded-full border border-neutral-300 shrink-0 overflow-hidden shadow-inner">
                  <Image src={user.image || "/default-user-pic.png"} alt="Profile" fill className="object-cover" />
                </figure>
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-lg text-neutral-900">{user.name}</h4>
                  <p className="text-sm text-neutral-500">{user.email}</p>
                </div>
              </div>
            </div>
            <div className="bg-neutral-50 border-t border-neutral-300 px-6 py-3 flex justify-end">
              <button className="bg-black text-white text-sm font-medium px-4 py-2 rounded-md shrink-0 hover:bg-zinc-800 
                cursor-pointer transition-colors"
              >
                Editar Informações
              </button>
            </div>
          </section>

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

          <section className="bg-white border border-neutral-300 rounded-md overflow-hidden shadow-sm">
            <div className="p-6">
              <h3 className="text-sm font-semibold text-neutral-900 mb-1">Atividade Recente</h3>
              <p className="text-sm text-neutral-500 mb-4">Acompanhe suas últimas interações no sistema.</p>
              
              <ul className="divide-y divide-neutral-100">
                <ActivityItem icon="🏆" message="Criou o torneio" name="Copa 2024" date="2 dias" />
                <ActivityItem icon="⚽" message="Adicionou o time" name="Gremio" date="3 dias" />
                <ActivityItem icon="👦" message="Cadastrou o jogador" name="Lucas Silva" date="3 horas" />
              </ul>
            </div>
            <div className="bg-neutral-50 border-t border-neutral-300 px-6 py-3 flex justify-center">
              <button className="text-xs font-semibold text-neutral-600 hover:text-black transition-colors">
                Ver todo o histórico
              </button>
            </div>
          </section>

          <section className="bg-white border border-neutral-300 rounded-md shadow-sm">
            <div className="p-6 flex justify-between items-center gap-2">
              <div>
                <h3 className="text-sm font-semibold text-neutral-900">Sair da Conta</h3>
                <p className="text-sm text-neutral-500">Encerre sua sessão atual com segurança.</p>
              </div>
              <button className="flex items-center gap-2 bg-black text-white text-sm font-medium px-4 py-2 rounded-md shrink-0 hover:bg-zinc-800 
                cursor-pointer transition-colors"
              >
                <LogOut size={16} /> Log out
              </button>
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