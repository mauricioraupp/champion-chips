export default function ProfileActionCard({ icon, title, description }: any) {
  return (
    <div className="border border-neutral-300 rounded-md p-5 hover:border-black transition-all cursor-pointer shadow-sm">
      <h3 className="flex items-center gap-2 font-semibold text-sm text-neutral-900 mb-1">{icon}{title}</h3>
      <p className="text-sm text-neutral-500">{description}</p>
    </div>
  );
}