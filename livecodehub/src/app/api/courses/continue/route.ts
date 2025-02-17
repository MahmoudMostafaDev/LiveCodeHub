import NextAuth, { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { options } from "../../auth/[...nextauth]/options";
import { prisma } from "@/lib/prisma";
import { getToken } from "next-auth/jwt";
import { checkAuthorization } from "../../auth/authHelpers";

export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const username = token?.username as string;
  const id = token?.id as string;
  try {
    if (!checkAuthorization(username))
      return new Response("Unauthorized", { status: 401 });
    const videos = await prisma.user_video_stops.findMany({
      where: {
        students: {
          user_id: Number(id),
        },
      },
      select: {
        order: true,
        video: {
          select: {
            id: true,
            tumbnail: true,
            title: true,
          },
        },
        course: {
          select: {
            name: true,
            counter: true,
          },
        },
      },
    });

    if (!videos) return new Response(JSON.stringify({}), { status: 404 });
    return new Response(JSON.stringify(videos), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ ff: "ff" }), {
      status: 500,
    });
  }
}
