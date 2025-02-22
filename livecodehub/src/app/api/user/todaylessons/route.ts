import { NextRequest } from "next/server";
import { getStudentId } from "@/utils/DbQuery";
import { prisma } from "@/lib/prisma";
import { getToken } from "next-auth/jwt";
import { checkAuthorization } from "../../auth/authHelpers";
export async function GET(req: NextRequest) {
  //auth
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const username = token?.name as string;
  try {
    const { id, isAuth } = await checkAuthorization(username);
    if (!isAuth || !id)
      return new Response(JSON.stringify({}), { status: 401 });
    const studentId = await getStudentId(id);
    if (studentId === -1)
      return new Response(JSON.stringify({}), { status: 401 });
    const lessonsCounter = await findLessonsCounter(studentId);
    if (!lessonsCounter) {
      const newLessonsCounter = await updateCounter(studentId, 0);
      return new Response(JSON.stringify(newLessonsCounter.progress), {
        status: 200,
      });
    } else {
      if (
        lessonsCounter.lastAction &&
        isDoneThatDay(lessonsCounter.lastAction, new Date())
      ) {
        return new Response(JSON.stringify(lessonsCounter.progress), {
          status: 200,
        });
      } else {
        const newLessonsCounter = await updateCounter(studentId, 0);
        return new Response(JSON.stringify(newLessonsCounter.progress), {
          status: 200,
        });
      }
    }
  } catch (error) {
    console.log(error);
    return new Response("Failed to get Lessons Counter", { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const username = token?.username as string;
  try {
    const { id, isAuth } = await checkAuthorization(username);
    if (!isAuth || !id) return new Response("Unauthorized", { status: 401 });
    const lessonsCounter = await findLessonsCounter(id);
    if (!lessonsCounter) {
      const newLessonsCounter = await updateCounter(id, 1);
      return new Response(JSON.stringify(newLessonsCounter.progress), {
        status: 200,
      });
    } else if (
      lessonsCounter.lastAction &&
      lessonsCounter.progress &&
      isDoneThatDay(lessonsCounter.lastAction, new Date())
    ) {
      const newLessonsCounter = await updateCounter(
        id,
        lessonsCounter.progress + 1
      );
      return new Response(JSON.stringify(newLessonsCounter.progress), {
        status: 200,
      });
    } else {
      const newLessonsCounter = await updateCounter(id, 1);
      return new Response(JSON.stringify(newLessonsCounter.progress), {
        status: 200,
      });
    }
  } catch (err) {
    console.log("err");
    if (err instanceof Error) console.log(err.message);
    return new Response("Server Error ", { status: 500 });
  }
}

function isDoneThatDay(lastAction: Date, day: Date) {
  return (
    lastAction.getDay() === day.getDay() &&
    lastAction.getMonth() === day.getMonth() &&
    lastAction.getFullYear() === day.getFullYear()
  );
}

async function findLessonsCounter(id: number) {
  const data = await prisma.studentProgress.findUnique({
    where: { studentId: id },
    select: {
      lessonWatchedToday: true,
      lastLessonWatchedDate: true,
    },
  });
  if (!data) return null;
  return {
    progress: data.lessonWatchedToday,
    lastAction: data.lastLessonWatchedDate,
  };
}

async function updateCounter(id: number, value: number) {
  const newCounter = await prisma.studentProgress.update({
    where: { studentId: id },
    data: {
      lessonWatchedToday: value,
      lastLessonWatchedDate: new Date(),
    },
  });

  return {
    progress: newCounter.lessonWatchedToday,
    lastAction: newCounter.lastLessonWatchedDate,
  };
}
