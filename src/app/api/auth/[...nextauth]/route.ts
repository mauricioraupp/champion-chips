import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs"
import { prisma } from "@/lib/prisma";

const handler = NextAuth({
  pages: {
    signIn: "/login"
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 60 * 60
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        remember: { label: "Remember", type: "text" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        })

        if (!user || !user.password) return null

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isValid) return null

        return {
          id: String(user.id),
          name: user.name,
          email: user.email,
          remember: credentials.remember
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    })
  ],
  callbacks: {
    async signIn({ user }) {
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email! },
      });

      if (!existingUser) {
        await prisma.user.create({
          data: {
            email: user.email!,
            name: user.name ?? "",
            image: user.image ?? "",
          },
        });
      }

      return true;
    },
    async jwt({ token, user}) {
      if (user) {
        token.id = user.id;
        token.rememberMe = (user as any).remember === true || (user as any).remember === "on";
      }
      if (!token.rememberMe) {
        const oneDay = 24 * 60 * 60;
        token.exp = Math.floor(Date.now() / 1000) + oneDay;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = Number(token.id);
      }
      return session;
    }
  }
})

export { handler as GET, handler as POST }