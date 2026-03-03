"use client"

interface StatCardProps {
  title: string;
  stat: number;
}

export default function StatCard({ title, stat }: StatCardProps){
  return(
    <div className="bg-neutral-50 text-center p-4 flex flex-col justify-center items-center cursor-pointer hover:bg-neutral-200 transition">
      <h1 className="text-xl font-medium">{title}</h1>
      <p className="text-3xl font-semibold">{stat}</p>
    </div>
  )
}