import { CornerDownRight } from "@geist-ui/icons";

export default function ActivityItem({ message, name, date }: { message: string, name: string, date: Date }) {
  const formattedDate = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));

  const [onlyDate, onlyTime] = formattedDate.split(", ");

  return (
    <li className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        
        <p className="flex flex-col sm:flex-row gap-1 text-sm text-neutral-600 font-medium">
          <CornerDownRight size={16} className="shrink-0" /> {message} <span className="text-neutral-900 font-bold">{name}</span>
        </p>
      </div>
      
      <div className="flex flex-col items-end shrink-0 ml-4">
        <time className="text-xs text-neutral-500 font-bold tabular-nums">
          {onlyDate}
        </time>
        <time className="text-xs text-neutral-400 font-medium tabular-nums">
          {onlyTime}
        </time>
      </div>
    </li>
  );
}