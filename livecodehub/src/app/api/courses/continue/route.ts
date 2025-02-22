import { NextRequest } from "next/server";
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
    const videos = await prisma.video.findMany({
      where: {
        lesson: {
          studentLastLessonsStops: {
            some: {
              studentId: Number(id),
            },
          },
        },
      },
      select: {
        title: true,
        thumbnail: true,
        lessonNumber: true,
        link: true,
        lesson: {
          select: {
            course: {
              select: {
                name: true,
                lessons: true,
              },
            },
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
