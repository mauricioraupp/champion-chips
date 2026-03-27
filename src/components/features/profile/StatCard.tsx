export default function StatCard({ title, stat, Icon }: { title: string, stat: number, Icon: React.ElementType }) {
  return (
    <div className="border border-neutral-300 p-4 rounded-md shadow-sm">
      <div className="text-neutral-400 mb-2">
        <Icon size={18}/>
      </div>
      <h2 className="text-2xl font-bold text-neutral-900 leading-none mb-1">{stat}</h2>
      <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">{title}</p>
    </div>
  )
}