import { Edit, Tool, UserX, LogOut } from '@geist-ui/icons';
import ProfileCards from './profile-cards';
import ChampCreated from '@/components/champ-created';

export default function ProfilePage() {
  const actions = [
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
      description: 'Exclua sua conta e todas as suas informações (essa ação não pode ser desfeita)',
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

  return (
    <>
      <div className="w-full flex justify-center py-12">
        <h1 className="font-medium text-xl">Informações da conta</h1>
      </div>

      <section className="max-w-5xl min-h-72 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div className="border-2 border-neutral-300 rounded-md py-3 px-6 flex flex-col items-center justify-center mx-auto w-5/6 lg:w-full">
          <div className="w-24 h-24 bg-gray-200 rounded-full mb-3" />
          <h2 className="text-xl font-semibold">João Silva</h2>
          <p className="text-neutral-700 mb-3">joao@email.com</p>
          <button className="bg-zinc-950 rounded-md py-2 px-12 text-white cursor-pointer">
            Editar perfil
          </button>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto w-5/6 lg:w-full">
          {actions.map((item) => (
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

        <div className="max-w-7xl divide-x-2 divide-neutral-300 grid grid-cols-3 col-span-3 mb-12 border-2 border-neutral-300 rounded-md">
          {[
            { label: 'Torneios criados', value: 10 },
            { label: 'Partidas registradas', value: 32 },
            { label: 'Times criados', value: 21 }
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4">
              <h1 className="text-2xl font-bold">{stat.value}</h1>
              <p className="text-neutral-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <article className="bg-neutral-150">
        <div className="w-full flex justify-center py-12">
          <h1 className="font-medium text-xl">Torneios criados</h1>
        </div>

        <section className="flex flex-col gap-8 w-5/6 sm:w-fit mx-auto pb-12">
          <ChampCreated/>
          <ChampCreated/>
        </section>
      </article>

      <section className="flex flex-col gap-12 py-12">
        <div className="w-full flex justify-center">
          <h1 className="font-medium text-xl">Atividade recente</h1>
        </div>
        <ul className="max-w-3xl mx-auto space-y-4 text-neutral-700 w-5/6 sm:w-fit">
          <li>há 2 dias ✅ Você criou o torneio <strong>Campeonato A</strong></li>
          <li>há 2 dias 📝 Você atualizou o placar de <strong>Time1 x Time2</strong></li>
          <li>há 2 dias 👥 Novo time <strong>Os Invencíveis</strong> adicionado</li>
          <button className="bg-zinc-950 rounded-md py-2 px-12 text-white text-center w-full cursor-pointer">Ver mais</button>
        </ul>
      </section>
    </>
  );
}
