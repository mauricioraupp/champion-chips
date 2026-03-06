interface DashboardSelectorProps {
  title: string;
  icon: any;
}

export default function DashboardSelector({icon: Icon, title}: DashboardSelectorProps) {
  return(
    <article className="flex flex-col items-center gap-2 cursor-pointer">
      <figure className="bg-neutral-300 w-8 h-8 rounded-full flex items-center justify-center">
        {Icon}
      </figure>
      <p className="text-xs text-center">
        {title}
      </p>
    </article>
  )
}