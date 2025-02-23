import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { getToken } from "next-auth/jwt";
import { checkAuthorization } from "../../auth/authHelpers";
import { equal } from "assert";
export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const id = token?.id as string;
  const username = token?.username as string;
  try {
    if (!checkAuthorization(username))
      return new Response(JSON.stringify({}), { status: 401 });
    const video = await getLastVideo(id);
    if (!video) return new Response(JSON.stringify({}), { status: 404 });
    return new Response(JSON.stringify(video), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({}), { status: 500 });
  }
}

async function getLastVideo(id: string) {
  const video = await prisma.video.findFirst({
    where: {
      lesson: {
        studentLastLessonsStops: {
          some: {
            studentId: Number(id),
          },
        },
        course: {
          studentProgress: {
            some: {
              studentId: Number(id),
            },
          },
        },
      },
    },
    select: {
      id: true,
      link: true,
      title: true,
      thumbnail: true,
      duration: true,
      lessonNumber: true,
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
  return video;
}
