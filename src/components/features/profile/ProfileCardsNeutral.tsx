"use client"

interface ProfileCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ProfileCardsNeutral({ icon, title, description }: ProfileCardProps) {
  return (
    <div className={`border-2 border-neutral-300 bg-neutral-50 rounded-md py-2 px-4 cursor-pointer hover:bg-neutral-200 transition`}>
      <h3 className={`font-medium text-lg text-black flex items-center gap-1.5 p-1 w-fit`}>
        {icon}
        {title}
      </h3>
      <p className={`font-medium text-neutral-700 text-sm p-1 border-t-2 border-neutral-300`}>{description}</p>
    </div>
  );
}