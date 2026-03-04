import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { generateChampionshipMatches } from "@/app/actions/championships";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(); 

    if (!session?.user?.email) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    const dbUser = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!dbUser) {
      return new NextResponse("Usuário não encontrado", { status: 404 });
    }

    const body = await req.json();
    const { name, leagueLogoUrl, secondLegs, teams } = body;

    const result = await prisma.soccerLeague.create({
      data: {
        name,
        logo: leagueLogoUrl || null,
        secondLegs,
        userId: dbUser.id,
        Teams: {
          create: teams.map((team: any) => ({
            name: team.name,
            sigla: (team.sigla).substring(0, 3).toUpperCase(),
            logo: team.teamLogoUrl || null,
            userId: dbUser.id,
          })),
        },
      },
      include: {
        Teams: true
      }
    });

    await generateChampionshipMatches(result.id)

    return NextResponse.json(result);

  } catch (error: any) {
    console.error("ERRO PRISMA:", error.code, error.meta);
    return new NextResponse("Erro ao salvar no banco", { status: 500 });
  }
}