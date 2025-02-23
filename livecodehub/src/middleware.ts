import { getServerSession } from "next-auth";
import withAuth, { NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { options } from "./app/api/auth/[...nextauth]/options";
import { getToken, JWT } from "next-auth/jwt";
// to get token :     const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    return req.nextUrl.pathname.startsWith("/api")
      ? apiManager(req, token)
      : manageProtectedPages(req, token);
  },
  {
    callbacks: {
      authorized: ({ token }) => true,
    },
  }
);
export const config = { matcher: ["/:path*"] };

async function manageProtectedPages(
  req: NextRequestWithAuth,
  token: JWT | null
) {
  const { pathname } = req.nextUrl;

  if (
    !token &&
    !pathname.startsWith("/landing") &&
    !pathname.startsWith("/auth")
  ) {
    return NextResponse.redirect(new URL("/landing", req.url));
  } else if (
    token &&
    ["/auth", "/landing"].some((route) => pathname.startsWith(route))
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  } else if (pathname.startsWith("/admin") && token?.name !== "maged") {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

async function apiManager(req: NextRequestWithAuth, token: JWT | null) {
  if (req.nextUrl.pathname.startsWith("/api/courses")) {
    const headers = new Headers(req.headers);
    headers.set("x-user", token?.username as string);
    return NextResponse.next({ request: new Request(req, { headers }) });
  }
}
