interface DashboardSelectorProps {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export default function DashboardSelector({ icon, title, isActive, onClick }: DashboardSelectorProps) {
  return (
    <button 
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-3 border-b-2 cursor-pointer transition-all
        ${isActive 
          ? 'border-black text-black opacity-100' 
          : 'border-transparent text-neutral-600 opacity-60 hover:opacity-100'
        }
      `}
    >
      <span className={`${isActive ? 'text-black' : 'text-neutral-600'}`}>
        {icon}
      </span>
      <p className="text-sm font-semibold whitespace-nowrap">
        {title}
      </p>
    </button>
  )
}