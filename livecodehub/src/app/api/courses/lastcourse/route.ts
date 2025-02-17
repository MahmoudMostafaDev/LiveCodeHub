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
  const course = await prisma.course.findFirst({
    where: {
      id: {
        equals: (
          await prisma.students.findFirst({
            where: {
              user_id: Number(id),
            },
            select: {
              last_course: true,
            },
          })
        )?.last_course as number,
      },
    },
    select: {
      id: true,
      name: true,
      counter: true,
    },
  });
  if (!course) return null;
  const video = await prisma.videos.findFirst({
    where: {
      user_video_stops: {
        some: {
          user_id: Number(id),
          course_id: {
            equals: course.id,
          },
        },
      },
    },
    select: {
      id: true,
      link: true,
      title: true,
      tumbnail: true,
      length: true,
      order: true,
    },
  });
  return { ...video, course: course.name, totalVideos: course.counter };
}
