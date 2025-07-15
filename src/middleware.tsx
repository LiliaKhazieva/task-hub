import { NextRequest, NextResponse } from "next/server";
import { token } from "./lib/token-service";
import { PAGE } from "./config/pages.config";

export function middleware(request: NextRequest) {
  const isLoggedIn = !!request.cookies.get(token.accessToken);
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL(PAGE.AUTH, request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};
