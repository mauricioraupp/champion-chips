"use client"

interface ListItemsProps {
  icon: React.ReactNode;
  name: string;
  color: string;
}

export default function ListItems({ icon, name, color }: ListItemsProps) {
  return (
    <li className={`w-full flex flex-col lg:flex-row items-center ${color} cursor-pointer 
      py-4 lg:py-2 px-px lg:px-4 gap-1 lg:gap-4 rounded-md
      hover:bg-neutral-200 transition-colors`}
    >
      {icon}
      <p className="text-xs lg:text-base">{name}</p>
    </li>
  );
}