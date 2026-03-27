import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  })

  const { pathname } = req.nextUrl

  const isAuthPage = 
    pathname.startsWith("/auth")
  
  const isProtectedRoute = 
    pathname === "/profile" || 
    pathname.startsWith("/profile") ||
    pathname === "/create-championship" ||
    pathname.startsWith("/championships")

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/profile", req.url))
  }

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/auth/login", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/auth/:path*",
    "/profile/:path*",
    "/create-championship",
    "/championships/:path*",
  ],
}