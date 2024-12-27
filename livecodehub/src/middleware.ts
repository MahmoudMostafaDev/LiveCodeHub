import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    console.log("sh");
    if (
      req.nextUrl.pathname === "/protected" &&
      req.nextauth.token?.name != "Mahmoud Mostafa"
    ) {
      return NextResponse.rewrite(new URL("/denied", req.url));
    }
  },
  {
    callbacks: {
      authorized: (token) => !!token,
    },
  }
);
export const config = { matcher: ["/"] };
