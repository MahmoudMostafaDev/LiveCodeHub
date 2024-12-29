import { getServerSession } from "next-auth";
import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";
import { options } from "./app/api/auth/[...nextauth]/options";
import { getToken } from "next-auth/jwt";
export default withAuth(
  async function middleware(req) {
    // console.log(req.nextauth);
    // const session = await getServerSession(options);
    // const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    // console.log(token);
    // console.log(req.nextauth.token);
    // console.log(req.nextUrl.pathname);
    // console.log("0000000000000000000000000000000");
    // if (req.nextUrl.pathname.startsWith("/api/courses")) {
    //   const headers = new Headers(req.headers);
    //   headers.set("x-user", req.nextauth.token?.username as string);
    //   console.log(req.nextauth.token?.username);
    //   console.log("ss");
    //   return NextResponse.next({ request: new Request(req, { headers }) });
    // }
  },
  {
    callbacks: {
      authorized: (token) => !!token,
    },
  }
);
export const config = { matcher: ["/api/courses/:path*"] };
