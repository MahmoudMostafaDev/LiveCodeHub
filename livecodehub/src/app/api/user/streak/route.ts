import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { getToken } from "next-auth/jwt";
import { checkAuthorization } from "../../auth/authHelpers";
export async function GET(req: NextRequest) {
  //auth
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const username = token?.username as string;
  try {
    const { id, isAuth } = await checkAuthorization(username);
    if (!isAuth || !id) return new Response("Unauthorized", { status: 401 });

    const streak = await findStreak(id);
    if (!streak) {
      const newStreak = await createStreak(id, 0);
      return new Response(JSON.stringify(newStreak), {
        status: 200,
      });
    }
    const [, theSecondLastDay] = getDates();
    //48 hours have passed
    if (streak.lastAction.getTime() < theSecondLastDay.getTime()) {
      const newStreak = await updateStreak(0, id);
      return new Response(JSON.stringify(newStreak), {
        status: 200,
      });
    }
    return new Response(JSON.stringify(streak), { status: 200 });
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
    const streak = await findStreak(id);
    if (!streak) {
      const newStreak = await createStreak(id, 1);
      return new Response(JSON.stringify(newStreak), {
        status: 200,
      });
    } else {
      const [yesterday, theSecondLastDay] = getDates();
      //if 48 hours have passed
      if (streak.lastAction.getTime() < theSecondLastDay.getTime()) {
        const newStreak = await updateStreak(1, id);
        return new Response(JSON.stringify(newStreak), {
          status: 200,
        });
      } else if (isDoneThatDay(streak.lastAction, yesterday)) {
        const newStreak = await updateStreak(streak.value + 1, id);
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
    where: { user_id: id },
    data: {
      value,
      lastAction: new Date(),
    },
  });
  return newStreak;
}
async function findStreak(id: number) {
  const streak = await prisma.streak.findUnique({
    where: { user_id: id },
    select: {
      id: true,
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
      user_id: id,
      lastAction: new Date(),
    },
  });
  return newStreak;
}
