import { Shield, Calendar, Award, Target } from "@geist-ui/icons"

export default function StatsGrid({ data }: { data: any }) {
  const stats = [
    { 
      label: "Clubes", 
      value: data?._count?.Teams || 0, 
      icon: <Shield size={18} /> 
    },
    { 
      label: "Partidas Finalizadas", 
      value: data?.Matches?.filter((m: any) => m.status === "FINISHED").length || 0, 
      icon: <Calendar size={18} /> 
    },
    { 
      label: "Gols Marcados", 
      value: data?._count?.goals || 0, 
      icon: <Target size={18} /> 
    },
    { 
      label: "Rodadas", 
      value: data?.secondLegs ? "Ida e Volta" : "Turno Único", 
      icon: <Award size={18} /> 
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white dark:bg-zinc-950 border border-neutral-300 dark:border-neutral-900 p-4 rounded-md shadow-sm">
          <div className="text-neutral-400 mb-2">{stat.icon}</div>
          <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 leading-none mb-1">{stat.value}</p>
          <p className="text-[10px] font-bold text-neutral-500 dark:text-neutral-400 uppercase">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}