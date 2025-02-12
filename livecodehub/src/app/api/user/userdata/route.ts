import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";
import { checkAuthorization } from "../../auth/authHelpers";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  try {
    if (token) {
      if (!token?.name)
        return new Response(JSON.stringify({}), { status: 401 });
      const [isAuthorized, user] = await Promise.all([
        checkAuthorization(token.name as string),
        prisma.user.findFirst({
          where: { username: token.name },
          select: { image: true, username: true },
        }),
      ]);
      if (!isAuthorized)
        return new Response(JSON.stringify({}), { status: 401 });
      if (user) return new Response(JSON.stringify(user), { status: 200 });
      return new Response(JSON.stringify({}), { status: 404 });
    } else {
      return new Response(JSON.stringify({}), { status: 401 });
    }
  } catch (error) {
    return new Response(JSON.stringify({}), { status: 500 });
  }
}
