import { NextRequest } from "next/server";
import { checkAuthorization } from "../../auth/authHelpers";
import { getToken } from "next-auth/jwt";
import { prisma } from "@/lib/prisma";

//TODO , When create Teacher , Make sure that the user is teacher is not a student

interface courseType {
  name: string;
  description: string;
  thumbnail: string;
  popularity: number;
  lessons: number;
}
export async function POST(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const username = token?.username as string;
  const course = (await req.json()) as courseType;
  try {
    if (!checkAuthorization(username))
      return new Response(JSON.stringify({}), { status: 401 });
    if (checkIsValid(course).code !== 200)
      return new Response(
        JSON.stringify({
          error: checkIsValid(course).error,
          code: checkIsValid(course).code,
        }),
        { status: 400 }
      );
    //reset the course id autoincrement , in case that there is random added record in database , it doesn't affect the autoincrement
    prisma.$queryRaw`SELECT setval(pg_get_serial_sequence('course', 'id'), (SELECT MAX(id) FROM course));
`;
    const newCourse = await prisma.course.create({
      data: {
        name: course.name,
        description: course.description,
        thumbnail: course.thumbnail,
        popularity: course.popularity,
        lessons: course.lessons,
      },
    });
    if (!newCourse) return new Response(JSON.stringify({}), { status: 404 });
    return new Response(JSON.stringify(newCourse), { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return new Response(JSON.stringify({}), { status: 500 });
  }
}

function checkIsValid(course: courseType) {
  if (
    !course.name ||
    !course.description ||
    !course.thumbnail ||
    !course.popularity ||
    !course.lessons
  )
    return {
      error: "some fields are missing",
      code: 100,
    };
  if (isNaN(course.popularity) || isNaN(course.lessons))
    return {
      error: "popularity and lessons should be a number",
      code: 101,
    };
  return {
    error: "",
    code: 200,
  };
}
