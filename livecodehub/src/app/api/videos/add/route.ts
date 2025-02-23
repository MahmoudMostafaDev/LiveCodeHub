import { NextRequest } from "next/server";
import { checkAuthorization } from "../../auth/authHelpers";
import { getToken } from "next-auth/jwt";
import { prisma } from "@/lib/prisma";

//TODO , When create Teacher , Make sure that the user is teacher is not a student
//TODO , when create Teacher , Make sure he is admin to this course

interface videoType {
  courseId: number;
  title: string;
  link: string;
  thumbnail: string;
  duration: number;
}
export async function POST(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const username = token?.username as string;
  const video = (await req.json()) as videoType;
  try {
    if (!checkAuthorization(username))
      return new Response(JSON.stringify({}), { status: 401 });
    const validation = checkIsValid(video);
    if (validation.code !== 200)
      return new Response(
        JSON.stringify({
          error: validation.error,
          code: validation.code,
        }),
        { status: 400 }
      );
    if (
      (await prisma.course.findUnique({ where: { id: video.courseId } })) ===
      null
    )
      return new Response(JSON.stringify({}), { status: 404 });
    await resetTablesAutoIncrement();
    const newVideo = await prisma.$transaction(async (prisma) => {
      const newVideo = await prisma.video.create({
        data: {
          title: video.title,
          link: video.link,
          thumbnail: video.thumbnail,
          duration: video.duration,
          lessonNumber:
            ((
              await prisma.course.findUnique({
                where: {
                  id: video.courseId,
                },
                select: {
                  lessons: true,
                },
              })
            )?.lessons as number) + 1,
        },
      });
      const newLesson = await prisma.lesson.create({
        data: {
          lessonType: "VIDEO",
          sourceId: newVideo.id,
          courseId: video.courseId,
        },
      });
      return newVideo;
    });

    return new Response(JSON.stringify(newVideo), { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return new Response(JSON.stringify({}), { status: 500 });
  }
}

function checkIsValid(video: videoType) {
  if (
    !video.title ||
    !video.link ||
    !video.thumbnail ||
    !video.duration ||
    !video.courseId
  )
    return {
      error: "some fields are missing",
      code: 100,
    };
  if (typeof video.duration !== "number" || typeof video.courseId !== "number")
    return {
      error: "duration and courseId should be a number",
      code: 101,
    };
  return {
    error: "",
    code: 200,
  };
}

async function resetTablesAutoIncrement() {
  //reset the video id autoincrement , in case that there is random added record in database , it doesn't affect the autoincrement
  await prisma.$queryRaw`SELECT setval(pg_get_serial_sequence('video', 'id'), (SELECT MAX(id) FROM video));
`;
  //reset the lesson id autoincrement , in case that there is random added record in database , it doesn't affect the autoincrement
  await prisma.$queryRaw`SELECT setval(pg_get_serial_sequence('lesson', 'id'), (SELECT MAX(id) FROM lesson));
`;
}
