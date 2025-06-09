"use client"

interface ActivityItemProps {
  icon: string;
  message: string;
  name: string;
  date: string;
}

export default function ActivityItem({ icon, message, name, date }: ActivityItemProps) {
  return (
    <li className="flex flex-col sm:flex-row justify-between gap-1 pb-4 nth-last-2:border-b-0 nth-last-2:pb-0">
      <p className="order-2 sm:order-1 font-medium text-neutral-700">
        {icon} {message}
        <strong className="font-semibold text-black"> {name}</strong>
      </p>
      <p className="order-1 sm:order-2 text-neutral-700">há {date}</p>
    </li>
  );
}