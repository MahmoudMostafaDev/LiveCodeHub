import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";
import { checkAuthorization } from "../auth/authHelpers";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("query")?.trim().toLowerCase();
  if (!query) return generateResponse(400);
  const {authorized , error} = await handleAuth(req);
  if (!authorized) return generateResponse(error);
  const results = //query logic
  return generateResponse(200 , results);
}

async function handleAuth(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token || !token.name) 
    return {
      authorized: false,
     error : 401
    };
  const authResult = await checkAuthorization(token.name);
  if (authResult.isAuth === false)
    return {
      authorized: false,
      error : 401
    };
  return { authorized: true };
}

function generateResponse(code: number, data?: any) {
    const message : Record<number,string> = {
        401 : "Unauthorized",
        400 : "Bad Request",
        500 : "Internal Server Error"
    }
    return new Response(JSON.stringify(code === 200 ? data : {error : message[code]}), {
      status: code,
      headers: { "Content-Type": "application/json" },
    });
}