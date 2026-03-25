export default function ProfileActionCard({ icon, title, description }: any) {
  return (
    <div className="group bg-white border border-neutral-300 rounded-lg p-5 hover:border-black transition-all cursor-pointer shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-neutral-600 group-hover:text-black transition-colors">{icon}</div>
        <h3 className="font-semibold text-sm text-neutral-900">{title}</h3>
      </div>
      <p className="text-sm text-neutral-500">{description}</p>
    </div>
  );
}