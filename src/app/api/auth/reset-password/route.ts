import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { token, password } = await req.json();

    const tokenRecord = await prisma.passwordResetToken.findUnique({
      where: { token },
    });

    if (!tokenRecord || tokenRecord.expires < new Date()) {
      return Response.json(
        { message: "Este link de recuperação expirou ou é inválido." },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.$transaction([
      prisma.user.update({
        where: { email: tokenRecord.email },
        data: { password: hashedPassword },
      }),
      prisma.passwordResetToken.delete({
        where: { token },
      }),
    ]);

    return Response.json({ success: true, message: "Senha atualizada com sucesso!" });

  } catch (error) {
    console.error("Erro ao resetar senha:", error);
    return Response.json(
      { error: "Erro interno ao processar sua nova senha." },
      { status: 500 }
    );
  }
}