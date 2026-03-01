import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(); 

    if (!session?.user) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    const userId = (session.user as any).id;

    const body = await req.json();
    const { sport, name, leagueLogoUrl, format, secondLegs, teams } = body;

    if (sport === "soccer") {
      const result = await prisma.soccerLeague.create({
        data: {
          name,
          logo: leagueLogoUrl || "",
          format,
          secondLegs,
          stage: 1,
          userId,
          Teams: {
            create: teams.map((team: any) => ({
              name: team.name,
              sigla: team.sigla.toUpperCase(),
              logo: team.teamLogoUrl,
              userId,
            })),
          },
        },
      });

      return NextResponse.json(result);
    }

    return new NextResponse("Esporte não suportado", { status: 400 });
  } catch (error) {
    console.error("Erro na criação:", error);
    return new NextResponse("Erro interno", { status: 500 });
  }
}