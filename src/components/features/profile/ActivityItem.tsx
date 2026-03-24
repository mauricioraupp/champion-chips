export default function ActivityItem({ icon, message, name, date }: any) {
  return (
    <li className="flex items-center justify-between py-4 group hover:bg-neutral-50/50 transition-colors px-1">
      <div className="flex items-center gap-3">
        <span className="text-lg grayscale group-hover:grayscale-0 transition-all">{icon}</span>
        <p className="text-sm text-neutral-600 font-medium">
          {message} <span className="text-neutral-900 font-bold">{name}</span>
        </p>
      </div>
      <time className="text-xs text-neutral-400 font-medium whitespace-nowrap">há {date}</time>
    </li>
  );
}