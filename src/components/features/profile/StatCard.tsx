export default function StatCard({ title, stat, Icon }: { title: string, stat: number, Icon: React.ElementType }) {
  return (
    <div className="bg-white dark:bg-zinc-950 border border-neutral-300 dark:border-neutral-900 p-4 rounded-md">
      <div className="text-neutral-400 mb-2">
        <Icon size={18}/>
      </div>
      <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 leading-none mb-1">{stat}</h2>
      <p className="text-[10px] font-bold text-neutral-500 dark:text-neutral-400 uppercase">{title}</p>
    </div>
  )
}