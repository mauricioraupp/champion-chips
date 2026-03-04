import { prisma } from "@/lib/prisma";
import { Resend } from "resend";
import crypto from "crypto";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return Response.json({ message: "Esse e-mail não existe em nosso banco de dados" }, { status: 404 });
    }

    if (!user.password) {
      await resend.emails.send({
        from: "ChampionChips <onboarding@resend.dev>",
        to: [email],
        subject: "Login via Google - ChampionChips",
        html: `
          <h1>Olá, ${user.name}!</h1>
          <p>Você utiliza o <strong>Login do Google</strong> para acessar nossa plataforma.</p>
          <p>Não é necessário (nem possível) redefinir uma senha para este método de acesso.</p>
        `,
      });
      return Response.json({ 
        success: true, 
        isSocial: true,
        message: "Você faz login pelo Google. Verifique seu e-mail."
      });
    }

    const token = crypto.randomBytes(32).toString("hex");
    const expires = new Date(Date.now() + 3600000);

    await prisma.passwordResetToken.upsert({
      where: { email },
      update: { token, expires },
      create: { email, token, expires },
    });

    const resetLink = `${process.env.NEXTAUTH_URL}/reset-password?token=${token}`;

    await resend.emails.send({
      from: "ChampionChips <onboarding@resend.dev>",
      to: [email],
      subject: "Recuperação de Senha - ChampionChips",
      html: `
        <h1>Olá, ${user.name}!</h1>
        <p>Você solicitou a alteração de senha. Clique no botão abaixo para prosseguir:</p>
        <a href="${resetLink}" style="background: #000000; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; display: inline-block; hover: backgound: #242424">
          Alterar Senha
        </a>
        <p>Este link expira em 1 hora.</p>
      `,
    });

    return Response.json({ 
      success: true, 
      isSocial: false,
      message: "Você receberá um email com instruções para a redefinição de senha." 
    });

  } catch (error) {
    console.error(error);
    return Response.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}