import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";

import { Edit, Tool, QuestionCircle, LogOut } from '@geist-ui/icons';
import Image from "next/image";
import ProfileCardsNeutral from '@/components/features/profile/ProfileCardsNeutral';
import ProfileCardsRed from "@/components/features/profile/ProfileCardsRed";
import ActivityItem from '@/components/features/profile/RecentActivity';
import StatCard from "@/components/features/profile/StatCards";

export default async function ProfilePage() {
  const cardsNeutral = [
    { 
      title: 'Editar perfil', 
      description: 'Altere os dados exibidos em seu perfil', 
      icon: <Edit size={20}/> 
    },
    { 
      title: 'Preferências', 
      description: 'Altere as preferências da sua conta', 
      icon: <Tool size={20}/> 
    },
    { 
      title: 'Ajuda', 
      description: 'Dúvidas ou Sugestões? Fale conosco ou acesse nosso guia', 
      icon: <QuestionCircle size={20}/> 
    }
  ];
  const cardsRed = [
    { 
      title: 'Sair da conta', 
      description: 'Encerre sua sessão', 
      icon: <LogOut size={20} color="red" /> 
    }
  ];

  const recentActivities = [
    { type: 'champ', name: 'Copa 2024', date: '2 dias' },
    { type: 'team', name: 'Time Azul', date: '1 dia' },
    { type: 'team', name: 'Gremio', date: '3 dias' },
    { type: 'champ', name: 'Copa 2024', date: '2 dias' },
    { type: 'team', name: 'Time Azul', date: '1 dia' },
    { type: 'player', name: 'Lucas Silva', date: '3 horas' },
  ];

  const session = await getServerSession();

  const user = await prisma.user.findUnique({
    where: { email: session!.user!.email! },
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

  if (!user) {
    return <div>Usuário não encontrado.</div>;
  }

  return (
    <main className="flex w-screen flex-col gap-1 px-4 sm:w-full sm:p-6">
      <section className="flex flex-col gap-8">
        <article className="w-full flex flex-col gap-1 ">
          <h1 className="font-semibold text-xl">Informações da conta</h1>
          <p className="text-neutral-500 font-medium text-sm">Verifique as informações ou altere os dados da sua conta</p>
          <section className="lg:h-[calc(100vh-128px)] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 w-full my-4">
            <div className="bg-neutral-50 border-2 border-neutral-300 rounded-md py-10 px-4 flex flex-col items-center justify-center mx-auto w-full">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-3 relative">
                <Image
                  src={user.image || "/default-user-pic.png"}
                  alt={"Foto de perfil"}
                  fill
                  className="rounded-full"
                />
              </div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-neutral-700 mb-3">{user.email}</p>
              <button className="bg-zinc-950 rounded-md py-2 px-12 text-white cursor-pointer hover:bg-zinc-700 transition">Editar perfil</button>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto w-full">
              {cardsNeutral.map((item) => (
                <ProfileCardsNeutral
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
              {cardsRed.map((item) => (
                <ProfileCardsRed
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:col-span-3 mb-12 border-2 border-neutral-300 rounded-md mx-auto w-full
              divide-y-2 sm:divide-y-0 divide-x-0 sm:divide-x-2 divide-neutral-300">
                <StatCard
                  title={"Torneios criados"}
                  stat={user._count.SoccerLeagues}
                />
                <StatCard
                  title={"Times criados"}
                  stat={user._count.TeamsSoccerLeague}
                />
                <StatCard
                  title={"Jogadores criados"}
                  stat={user._count.Players}
                />
            </div>
          </section>
        </article>

        <article className="w-full flex flex-col gap-8">
          <h1 className="font-semibold text-xl">Atividade recente</h1>
          <section className="border-2 border-neutral-300 bg-neutral-50 rounded-md mx-auto py-6 px-8 divide-y-2 divide-neutral-300 space-y-4 w-full">
            {recentActivities.map((item, index) => {
              if (item.type === 'champ') {
                return (
                  <ActivityItem
                    key={index}
                    icon="🏆"
                    message="Novo torneio criado:"
                    name={item.name}
                    date={item.date}
                  />
                );
              } else if (item.type === 'team') {
                return (
                  <ActivityItem
                    key={index}
                    icon="⚽"
                    message="Novo time criado:"
                    name={item.name}
                    date={item.date}
                  />
                );
              } else if (item.type === 'player') {
                return (
                  <ActivityItem
                    key={index}
                    icon="👦"
                    message="Novo jogador criado:"
                    name={item.name}
                    date={item.date}
                  />
                );
              }
            })}
            <button 
              className="border-2 border-neutral-300 font-semibold text-neutral-800 text-md text-center rounded-md py-3 px-12 w-full cursor-pointer 
              hover:bg-neutral-200 transition">Ver mais
            </button>
          </section>
        </article>
      </section>
    </main>
  );
}