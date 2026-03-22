import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Header() {
  
  const session = await getServerSession();
  
    const user = await prisma.user.findUnique({
      where: { email: session!.user!.email! },
      select: {
        email: true,
        name: true,
        image: true,
      }
    });
  return(
    <header className="flex mx-auto w-full max-w-7xl items-center justify-between gap-6 border-b border-neutral-300 p-4 sm:p-8">
      <li className="flex justify-between items-center w-full gap-1 rounded-md">
        <p className="flex text-black font-bold text-3xl">champion<span className="text-yellow-600">chips</span></p>
        <Link href="/profile" className="relative w-8 h-8 rounded-full overflow-hidden cursor-pointer">
          <Image
            src={user?.image || "/default-user-pic.png"}
            alt={"Foto de perfil"}
            fill
          />
        </Link>
      </li>
    </header>
  )
}