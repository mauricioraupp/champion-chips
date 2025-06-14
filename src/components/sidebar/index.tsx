import { Home, Folder, FolderPlus, User, Settings, LogOut } from '@geist-ui/icons'
import ListItems from './list-items';

export default function SideBar() {
    const listItem = [
    { icon: <Folder/>, name: 'Meus torneios', color: 'text-black'},
    { icon: <FolderPlus/>, name: 'Criar torneio', color: 'text-black'},
    { icon: <User/>, name: 'Conta', color: 'text-black'},
    { icon: <Settings/>, name: 'Configurações', color: 'text-black'},
    { icon: <LogOut/>, name: 'Sair da conta', color: 'text-red-600'},
  ];

  return(
    <aside className="fixed left-0 h-screen w-fit lg:w-68 bg-neutral-50 border-r-2 border-neutral-300 hidden sm:flex flex-col justify-between 
      items-center lg:items-start py-6 px-2 lg:px-4">
      <ul className="absolute">
        <li className="flex flex-col lg:flex-row items-center cursor-pointer 
          py-4 lg:py-2 px-2 lg:px-4 gap-1 lg:gap-4 rounded-md"
        >
          <Home className="flex"/>
          <p className="hidden lg:flex text-black font-bold text-xl">Champion Chips</p>
        </li>
      </ul>
      <ul className="w-full flex flex-col gap-2 mt-18">
        {listItem.slice(0, 3).map((item) => (
          <ListItems
            key={item.name}
            icon={item.icon}
            name={item.name}
            color={item.color}
          />
        ))}
      </ul>
      <ul className="w-full flex flex-col gap-2">
        {listItem.slice(3, 5).map((item) => (
          <ListItems
            key={item.name}
            icon={item.icon}
            name={item.name}
            color={item.color}
          />
        ))}
      </ul>
    </aside>
  )
}