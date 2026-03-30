export default function ProfileActionCard({ icon, title, description }: any) {
  return (
    <div className="bg-white dark:bg-zinc-950 border border-neutral-300 dark:border-neutral-900 rounded-md p-5 
      hover:border-black dark:hover:border-neutral-700 transition-all cursor-pointer shadow-sm"
    >
      <h3 className="flex items-center gap-2 font-semibold text-sm text-neutral-900 dark:text-neutral-200 mb-1">{icon}{title}</h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">{description}</p>
    </div>
  );
}