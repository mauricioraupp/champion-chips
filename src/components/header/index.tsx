export default function Header() {
  return(
    <header className="bg-zinc-950 py-10 px-14 flex justify-between">
      <ul className="flex gap-12">
        <li className="text-white cursor-pointer">Meus torneios</li>
        <li className="text-white cursor-pointer">Criar torneio</li>
      </ul>
      <ul>
        <li className="text-white self-end cursor-pointer">Conta</li>
      </ul>
    </header>
  )
}