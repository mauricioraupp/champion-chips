import { Edit, Tool, UserX, LogOut } from '@geist-ui/icons';
import ProfileCards from './profile-cards';
import ActivityItem from './recent-activity';
import ChampCreated from '@/components/champ-created';

export default function ProfilePage() {
  const cards = [
    {
      title: 'Alterar senha',
      description: 'Altere a senha da sua conta',
      icon: <Edit size={20} />,
      color: 'text-black',
      bgColor: 'bg-neutral-50',
      borderColor: 'border-neutral-300'
    },
    {
      title: 'Preferências',
      description: 'Altere as preferências da sua conta',
      icon: <Tool size={20} />,
      color: 'text-black',
      bgColor: 'bg-neutral-50',
      borderColor: 'border-neutral-300'
    },
    {
      title: 'Excluir conta',
      description: 'Delete todas as suas informações (essa ação não pode ser desfeita)',
      icon: <UserX size={20} />,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-400'
    },
    {
      title: 'Sair da conta',
      description: 'Encerre sua sessão',
      icon: <LogOut size={20} />,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-400'
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
    <>
      <div className="w-full flex justify-center py-12">
        <h1 className="font-medium text-xl">Informações da conta</h1>
      </div>

      <main className="lg:h-[calc(100vh-228px)] flex">
        <section className="max-w-4xl min-h-72 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="border-2 border-neutral-300 rounded-md py-10 px-4 flex flex-col items-center justify-center mx-auto w-5/6 lg:w-full">
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-3" />
            <h2 className="text-xl font-semibold">João Silva</h2>
            <p className="text-neutral-700 mb-3">joao@email.com</p>
            <button className="bg-zinc-950 rounded-md py-2 px-12 text-white cursor-pointer">Editar perfil</button>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto w-5/6 lg:w-full">
            {cards.map((item) => (
              <ProfileCards
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
                color={item.color}
                bgColor={item.bgColor}
                borderColor={item.borderColor}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:col-span-3 mb-12 border-2 border-neutral-300 rounded-md mx-auto w-5/6 lg:w-full
            divide-y-2 sm:divide-y-0 divide-x-0 sm:divide-x-2 divide-neutral-300">
            {[
              { label: 'Torneios criados', value: 10 },
              { label: 'Partidas registradas', value: 32 },
              { label: 'Times criados', value: 21 }
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold">{stat.value}</h1>
                <p className="text-neutral-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <section className="flex flex-col gap-12 pt-12 pb-20 bg-neutral-150">
        <div className="w-full flex justify-center">
          <h1 className="font-medium text-xl">Atividade recente</h1>
        </div>
        <ul className="max-w-4xl border-2 border-neutral-300 rounded-md mx-auto py-6 px-8 divide-y-2 divide-neutral-300 space-y-4 w-5/6">
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
            hover:bg-neutral-300 transition">Ver mais
          </button>
        </ul>
      </section>
    </>
  );
}