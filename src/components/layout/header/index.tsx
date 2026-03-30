import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import UserNav from "../UserNav";
import Link from "next/link";
import MobileMenu from "../MobileMenu";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

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
    <header className="flex mx-auto w-full max-w-7xl items-center justify-between gap-6 border-b border-neutral-300 dark:border-neutral-900 h-16 sm:h-25 px-4 sm:px-8">
      <div className="flex justify-between items-center w-full gap-1 rounded-md">
        <Link href="/championships" className="flex text-black dark:text-white font-bold text-3xl">champion<span className="text-yellow-600">chips</span></Link>

        <div className="flex items-center gap-1 sm:gap-4">
          <ThemeToggle />
          <UserNav user={user} />
          <MobileMenu user={user} currentLeague={null} leagues={[]}/>
        </div>
      </div>
    </header>
  )
}