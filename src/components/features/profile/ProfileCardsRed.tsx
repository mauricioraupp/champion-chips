"use client"

interface ProfileCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ProfileCardsRed({ icon, title, description }: ProfileCardProps) {
  return (
    <div className={`border-2 border-red-400 bg-red-50 rounded-md py-2 px-4 cursor-pointer hover:bg-red-100 transition`}>
      <h3 className={`font-medium text-lg text-red-600 flex items-center gap-1.5 p-1 w-fit`}>
        {icon}
        {title}
      </h3>
      <p className={`font-medium text-neutral-700 text-sm p-1 border-t-2 border-red-400`}>{description}</p>
    </div>
  );
}