import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  })

  const { pathname } = req.nextUrl

  if (token && pathname === "/login" || token && pathname === "/register") {
    return NextResponse.redirect(new URL("/profile", req.url))
  }

  if (!token && pathname === "/profile" || !token && pathname === "/") {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/login", "/register", "/profile/:path*"],
}