interface DashboardSelectorProps {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export default function DashboardSelector({ icon, title, isActive, onClick }: DashboardSelectorProps) {
  return (
    <article 
      onClick={onClick}
      className={`flex flex-col items-center gap-2 cursor-pointer transition-all ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-90'}`}
    >
      <figure className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-black text-white' : 'bg-neutral-300 text-neutral-600'}`}>
        {icon}
      </figure>
      <p className={`text-xs text-center font-medium ${isActive ? 'text-black' : 'text-neutral-500'}`}>
        {title}
      </p>
    </article>
  )
}