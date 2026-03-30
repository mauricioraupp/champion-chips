import DeleteChampionshipButton from "@/components/ui/DeleteChampionshipButton";

interface DangerZoneCardProps {
  leagueId: string;
  name: string;
}

export default function DangerZoneCard({ leagueId, name }: DangerZoneCardProps) {
  return (
    <section className="bg-white dark:bg-zinc-950 border border-red-500 dark:border-red-600 rounded-md overflow-hidden shadow-sm">
      <div className="p-6 flex justify-between items-center gap-2">
        <div>
          <h3 className="text-sm font-semibold text-red-600">Excluir Campeonato</h3>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm">Remover permanentemente este campeonato e todos os seus dados.</p>
        </div>
        <DeleteChampionshipButton leagueId={leagueId} name={name}/>
      </div>
    </section>
  );
}