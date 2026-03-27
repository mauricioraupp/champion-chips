"use server"

import { prisma } from "@/lib/prisma";
import { UTApi } from "uploadthing/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";

const utapi = new UTApi();

const extractKey = (url: string | null) => {
  if (!url || !url.includes("http")) return null;
  return url.substring(url.lastIndexOf('/') + 1);
};

export async function updateUser(data: { name: string; image?: string | null }) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return { success: false, error: "Não autorizado" };
    }

    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        name: data.name,
        image: data.image,
      },
    });

    revalidatePath("/profile"); 
    revalidatePath("/my-championships");

    return { success: true, user: updatedUser };
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    return { success: false, error: "Erro interno ao salvar alterações" };
  }
}

export async function deleteUserAccount() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return { success: false, error: "Não autorizado" };

  const userId = session.user.id;

  try {
    const userData = await prisma.user.findUnique({
      where: { 
        id: userId 
      },
      include: {
        SoccerLeagues: { 
          select: { 
            logo: true 
          } 
        },
        TeamsSoccerLeague: { 
          select: { 
            logo: true 
          } 
        },
        Players: { 
          select: { 
            picture: true 
          } 
        }
      }
    });

    if (!userData) throw new Error("Usuário não encontrado");

    const keysToDelete = new Set<string>();

    userData.SoccerLeagues.forEach(l => {
      const key = extractKey(l.logo);
      if (key) keysToDelete.add(key);
    });

    userData.TeamsSoccerLeague.forEach(t => {
      const key = extractKey(t.logo);
      if (key) keysToDelete.add(key);
    });

    userData.Players.forEach(p => {
      const key = extractKey((p as any).picture); 
      if (key) keysToDelete.add(key);
    });

    const avatarKey = extractKey(userData.image);
    if (avatarKey && (userData.image?.includes("ufs.sh") || userData.image?.includes("utfs.io"))) {
      keysToDelete.add(avatarKey);
    }

    const finalKeys = Array.from(keysToDelete);
    if (finalKeys.length > 0) {
      await utapi.deleteFiles(finalKeys);
    }

    await prisma.user.delete({
      where: { id: userId }
    });

    return { success: true };

  } catch (error) {
    console.error("Erro ao deletar conta:", error);
    return { success: false, error: "Erro ao limpar dados e deletar conta." };
  }
}