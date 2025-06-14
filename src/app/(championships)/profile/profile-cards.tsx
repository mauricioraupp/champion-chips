"use client"

interface ProfileCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  hover: string;
}

export default function ProfileCards({ icon, title, description, color, bgColor, borderColor, hover }: ProfileCardProps) {
  return (
    <div className={`border-2 ${borderColor} ${bgColor} rounded-md py-2 px-4 cursor-pointer hover:${hover} transition`}>
      <h3 className={`font-medium text-lg ${color} flex items-center gap-1.5 p-1 w-fit`}>
        {icon}
        {title}
      </h3>
      <p className={`font-medium text-neutral-700 text-sm p-1 border-t-2 ${borderColor}`}>{description}</p>
    </div>
  );
}