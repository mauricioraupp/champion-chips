import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { generateChampionshipMatches } from "@/app/actions/championships";
import { UTApi } from "uploadthing/server";

const utapi = new UTApi();

export async function POST(req: Request) {
  const keysToDelete: string[] = [];

  try {
    const session = await getServerSession(authOptions); 

    if (!session?.user?.email) {
      throw new Error("AUTH_REQUIRED");
    }

    const dbUser = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!dbUser) {
      throw new Error("USER_NOT_FOUND");
    }
    
    const body = await req.json();
    const { name, leagueLogoUrl, isPublic, secondLegs, teams, leagueLogoKey } = body;

    if (leagueLogoKey) {
      keysToDelete.push(leagueLogoKey);
    }
    if (teams && Array.isArray(teams)) {
      teams.forEach((team: any) => {
        if (team.teamLogoKey) keysToDelete.push(team.teamLogoKey);
      });
    }

    const newLeague = await prisma.$transaction(async (tx) => {
      return await tx.soccerLeague.create({
        data: {
          name,
          logo: leagueLogoUrl || null,
          public: Boolean(isPublic),
          secondLegs: Boolean(secondLegs),
          userId: dbUser.id,
          Teams: {
            create: teams.map((team: any) => ({
              name: team.name,
              sigla: team.sigla.substring(0, 3).toUpperCase(),
              logo: team.teamLogoUrl || null,
              userId: dbUser.id,
            })),
          },
        },
      });
    });

    try {
      await generateChampionshipMatches(newLeague.id);
    } catch (matchError) {
      console.error("Erro ao gerar partidas, mas a liga foi salva:", matchError);
    }

    return NextResponse.json(newLeague);

  } catch (error: any) {
    console.error("ERRO NO BACKEND:", error.message);

    if (keysToDelete.length > 0) {
      console.log("Iniciando limpeza de arquivos órfãos...");
      try {
        await utapi.deleteFiles(keysToDelete);
        console.log("Arquivos deletados com sucesso.");
      } catch (utError) {
        console.error("Falha ao deletar arquivos no UploadThing:", utError);
      }
    }

    if (error.message === "AUTH_REQUIRED") {
      return new NextResponse("Não autorizado", { status: 401 });
    }
    if (error.message === "USER_NOT_FOUND") {
      return new NextResponse("Usuário não encontrado", { status: 404 });
    }

    return new NextResponse(
      JSON.stringify({ message: "Erro ao processar campeonato." }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}