"use server"

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";

export async function toggleFavorite(leagueId: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return { error: "Não autorizado" };

  const userId = session.user.id;

  try {
    const existing = await prisma.favoriteLeague.findUnique({
      where: { userId_leagueId: { userId, leagueId } }
    });

    if (existing) {
      await prisma.favoriteLeague.delete({ where: { id: existing.id } });
      revalidatePath(`/championships/${leagueId}`);
      return { isFavorite: false };
    } else {
      await prisma.favoriteLeague.create({ data: { userId, leagueId } });
      revalidatePath(`/championships/${leagueId}`);
      return { isFavorite: true };
    }
  } catch (error) {
    return { error: "Erro ao favoritar" };
  }
}