import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { getStudentId } from "@/utils/DbQuery";
import { getToken } from "next-auth/jwt";
import { checkAuthorization } from "../../auth/authHelpers";
export async function GET(req: NextRequest) {
  //auth
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const username = token?.name as string;
  try {
    const { id, isAuth } = await checkAuthorization(username);
    if (!isAuth || !id) return new Response("Unauthorized", { status: 401 });
    const studentId = await getStudentId(id);
    if (studentId === -1) return new Response("Unauthorized", { status: 401 });
    const streak = await findStreak(studentId);
    if (!streak) {
      const newStreak = await createStreak(studentId, 0);
      return new Response(JSON.stringify({ streak: newStreak.value }), {
        status: 200,
      });
    }
    const [, theSecondLastDay] = getDates();
    //48 hours have passed
    if (streak.lastAction.getTime() < theSecondLastDay.getTime()) {
      const newStreak = await updateStreak(0, studentId);
      return new Response(JSON.stringify({ streak: newStreak.value }), {
        status: 200,
      });
    }
    return new Response(JSON.stringify({ streak: streak.value }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to get streak", { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const username = token?.username as string;
  try {
    const { id, isAuth } = await checkAuthorization(username);
    if (!isAuth || !id) return new Response("Unauthorized", { status: 401 });
    const studentId = await getStudentId(id);
    if (studentId === -1) return new Response("Unauthorized", { status: 401 });
    const streak = await findStreak(studentId);
    if (!streak) {
      const newStreak = await createStreak(studentId, 1);
      return new Response(JSON.stringify(newStreak), {
        status: 200,
      });
    } else {
      const [yesterday, theSecondLastDay] = getDates();
      //if 48 hours have passed
      if (streak.lastAction.getTime() < theSecondLastDay.getTime()) {
        const newStreak = await updateStreak(1, studentId);
        return new Response(JSON.stringify(newStreak), {
          status: 200,
        });
      } else if (isDoneThatDay(streak.lastAction, yesterday)) {
        const newStreak = await updateStreak(streak.value + 1, studentId);
        return new Response(JSON.stringify(newStreak), {
          status: 200,
        });
      } else {
        return new Response(JSON.stringify(streak), {
          status: 200,
        });
      }
    }
  } catch (err) {
    console.log("err");
    if (err instanceof Error) console.log(err.message);
    return new Response("Failed to get video", { status: 500 });
  }
}

function getDates() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const theSecondLastDay = new Date();
  theSecondLastDay.setDate(theSecondLastDay.getDate() - 2);
  return [yesterday, theSecondLastDay];
}

function isDoneThatDay(lastAction: Date, day: Date) {
  return (
    lastAction.getDay() === day.getDay() &&
    lastAction.getMonth() === day.getMonth() &&
    lastAction.getFullYear() === day.getFullYear()
  );
}

async function updateStreak(value: number, id: number) {
  const newStreak = await prisma.streak.update({
    where: { studentId: id },
    data: {
      value,
      lastAction: new Date(),
    },
  });
  return newStreak;
}
async function findStreak(id: number) {
  const streak = await prisma.streak.findUnique({
    where: { studentId: id },
    select: {
      studentId: true,
      value: true,
      lastAction: true,
    },
  });
  return streak;
}
async function createStreak(id: number, value: number) {
  const newStreak = await prisma.streak.create({
    data: {
      value: value,
      studentId: id,
      lastAction: new Date(),
    },
  });
  return newStreak;
}
