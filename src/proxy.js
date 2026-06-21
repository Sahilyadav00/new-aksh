import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SESSION_SECRET = process.env.SESSION_SECRET || "akshdigital_secure_session_secret_2026_default_key";
const secret = new TextEncoder().encode(SESSION_SECRET);
const COOKIE_NAME = "admin_session";

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  // We are only concerned with routes starting with /admin
  if (pathname.startsWith("/admin")) {
    const token = request.cookies.get(COOKIE_NAME)?.value;
    let isValid = false;

    if (token) {
      try {
        await jwtVerify(token, secret);
        isValid = true;
      } catch (err) {
        isValid = false;
      }
    }

    // 1. If requesting exact /admin path
    if (pathname === "/admin") {
      if (isValid) {
        return NextResponse.redirect(new URL("/admin/dashboard", request.url));
      } else {
        return NextResponse.redirect(new URL("/admin/login", request.url));
      }
    }

    // 2. If requesting the login page
    if (pathname === "/admin/login") {
      if (isValid) {
        return NextResponse.redirect(new URL("/admin/dashboard", request.url));
      }
      return NextResponse.next();
    }

    // 3. If requesting any other page under /admin (like /admin/dashboard or sub-routes)
    if (pathname.startsWith("/admin/") && pathname !== "/admin/login") {
      if (!isValid) {
        return NextResponse.redirect(new URL("/admin/login", request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
