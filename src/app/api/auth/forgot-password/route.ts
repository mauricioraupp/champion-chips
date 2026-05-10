import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";
import crypto from "crypto";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return Response.json({ message: "Esse e-mail não existe em nosso banco de dados" }, { status: 404 });
    }

    if (!user.password) {
      await transporter.sendMail({
        from: `"ChampionChips" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: "Login via Google - ChampionChips",
        html: `
          <div style="font-family: sans-serif;">
            <h1>Olá, ${user.name}!</h1>
            <p>Você utiliza o <strong>Login do Google</strong> para acessar nossa plataforma.</p>
            <p>Não é necessário redefinir uma senha para este método.</p>
          </div>
        `,
      });
      return Response.json({ success: true, isSocial: true, message: "Verifique seu e-mail." });
    }

    const token = crypto.randomBytes(32).toString("hex");
    const expires = new Date(Date.now() + 3600000);

    await prisma.passwordResetToken.upsert({
      where: { email },
      update: { token, expires },
      create: { email, token, expires },
    });

    const resetLink = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${token}`;

    await transporter.sendMail({
      from: `"ChampionChips" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Recuperação de Senha - ChampionChips",
      html: `
        <div style="font-family: sans-serif;">
          <h1>Olá, ${user.name}!</h1>
          <p>Você solicitou a alteração de senha. Clique no botão abaixo para prosseguir:</p>
          <a href="${resetLink}" style="background: #000; color: #fff; padding: 12px 24px; border-radius: 5px; text-decoration: none; display: inline-block;">
            Alterar Senha
          </a>
          <p style="margin-top: 20px; font-size: 12px; color: #666;">Este link expira em 1 hora.</p>
        </div>
      `,
    });

    return Response.json({ 
      success: true, 
      isSocial: false,
      message: "E-mail enviado com sucesso!" 
    });

  } catch (error) {
    console.error("Erro no Nodemailer:", error);
    return Response.json({ error: "Erro ao enviar e-mail" }, { status: 500 });
  }
}