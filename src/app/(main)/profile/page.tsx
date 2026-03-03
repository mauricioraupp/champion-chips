import { Edit, Tool, UserX, LogOut } from '@geist-ui/icons';
import ProfileCards from '@/components/features/profile/ProfileCards';
import ActivityItem from '@/components/features/profile/RecentActivity';

export default function ProfilePage() {
  const cards = [
    {
      title: 'Alterar senha',
      description: 'Altere a senha da sua conta',
      icon: <Edit size={20} />,
      color: 'text-black',
      bgColor: 'bg-neutral-50',
      borderColor: 'border-neutral-300',
      hover: 'bg-neutral-200'
    },
    {
      title: 'Preferências',
      description: 'Altere as preferências da sua conta',
      icon: <Tool size={20} />,
      color: 'text-black',
      bgColor: 'bg-neutral-50',
      borderColor: 'border-neutral-300',
      hover: 'bg-neutral-200'
    },
    {
      title: 'Excluir conta',
      description: 'Delete todas as suas informações (essa ação não pode ser desfeita)',
      icon: <UserX size={20} />,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-400',
      hover: 'bg-red-200'
    },
    {
      title: 'Sair da conta',
      description: 'Encerre sua sessão',
      icon: <LogOut size={20} />,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-400',
      hover: 'bg-red-200'
    },
  ];
  const recentActivities = [
    { type: 'champ', name: 'Copa 2024', date: '2 dias' },
    { type: 'team', name: 'Time Azul', date: '1 dia' },
    { type: 'team', name: 'Gremio', date: '3 dias' },
    { type: 'champ', name: 'Copa 2024', date: '2 dias' },
    { type: 'team', name: 'Time Azul', date: '1 dia' },
    { type: 'player', name: 'Lucas Silva', date: '3 horas' },
  ];

  return (
    <main className="ml-0 sm:ml-25 lg:ml-68 bg-neutral-150">
      <section className="mx-auto max-w-5xl w-9/10 sm:py-16 py-24 flex flex-col gap-8">
        <article className="w-full flex flex-col gap-8">
          <h1 className="font-semibold text-xl">Informações da conta</h1>
          <section className="lg:h-[calc(100vh-128px)] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 w-full">
            <div className="bg-neutral-50 border-2 border-neutral-300 rounded-md py-10 px-4 flex flex-col items-center justify-center mx-auto w-full">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-3" />
              <h2 className="text-xl font-semibold">João Silva</h2>
              <p className="text-neutral-700 mb-3">joao@email.com</p>
              <button className="bg-zinc-950 rounded-md py-2 px-12 text-white cursor-pointer hover:bg-zinc-700 transition">Editar perfil</button>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto w-full">
              {cards.map((item) => (
                <ProfileCards
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  color={item.color}
                  bgColor={item.bgColor}
                  borderColor={item.borderColor}
                  hover={item.hover}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:col-span-3 mb-12 border-2 border-neutral-300 rounded-md mx-auto w-full
              divide-y-2 sm:divide-y-0 divide-x-0 sm:divide-x-2 divide-neutral-300">
              {[
                { label: 'Torneios criados', value: 6 },
                { label: 'Times criados', value: 22 },
                { label: 'Jogadores criados', value: 32 }
              ].map((stat) => (
                <div key={stat.label} className="bg-neutral-50 text-center p-4 flex flex-col justify-center items-center cursor-pointer hover:bg-neutral-200 transition">
                  <h1 className="text-2xl font-bold">{stat.value}</h1>
                  <p className="text-neutral-700">{stat.label}</p>
                </div>
              ))}
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