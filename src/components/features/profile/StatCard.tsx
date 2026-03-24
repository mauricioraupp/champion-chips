export default function StatCard({ title, stat }: { title: string, stat: number }) {
  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">{title}</p>
      <h2 className="text-3xl font-bold text-neutral-900 tracking-tighter">{stat}</h2>
    </div>
  )
}