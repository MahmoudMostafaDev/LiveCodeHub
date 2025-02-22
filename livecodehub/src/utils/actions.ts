"use server";
import { prisma } from "@/lib/prisma";
import { randomBytes, scrypt } from "crypto";
import { promisify } from "util";
import { validateUsername } from "@/utils/Validate";
import { error } from "console";

export async function signup(userData: { username: string; password: string }) {
  /* codes\
    101: Missing username or password
    102: Password must be between 3 and 50 characters
    103 : username already used
*/
  try {
    if (!userData.username || !userData.password)
      return {
        success: false,
        data: null,
        error: { message: "Missing username or password", code: 101 },
      };
    if (validateUsername(userData.username.trim()).code !== 1)
      return {
        success: false,
        data: null,
        error: validateUsername(userData.username.trim()),
      };
    if (userData.password.length < 3 || userData.password.length > 50)
      return {
        success: false,
        data: null,
        error: {
          message: "Password must be between 3 and 50 characters",
          code: 102,
        },
      };
    const isHere = !!(await prisma.user.findFirst({
      where: { username: userData.username.trim() },
    }));
    if (isHere)
      return {
        success: false,
        data: null,
        error: { message: "Username is already taken", code: 103 },
      };
    const validUsername = userData.username.trim();
    const hashedPassword = await hashPassword(userData.password);
    const result = await prisma.$transaction(async (tx) => {
      const user = await prisma.user.create({
        data: {
          username: validUsername,
          password: hashedPassword,
        },
        select: { id: true, username: true },
      });
      const student = await prisma.student.create({
        data: {
          userId: user.id,
        },
        select: { id: true, userId: true },
      });
      const streak = await prisma.streak.create({
        data: {
          studentId: student.id,
        },
      });
      const studentProgress = await prisma.studentProgress.create({
        data: {
          studentId: student.id,
          lessonWatchedToday: 0,
          lastLessonWatchedDate: new Date(),
        },
      });
      console.log(user, student, streak, studentProgress);
      return {
        success: true,
        data: user,
        error: null,
      };
    });
    return {
      result,
    };
  } catch (err: any) {
    return {
      success: false,
      data: null,
      error: {
        message: "Failed to create user",
        code: 104,
        err: err.message || "",
      },
    };
  }
}

// utils
async function hashPassword(password: string) {
  console.log("hashPassword", password);
  const scryptAsync = promisify(scrypt);
  const salt = randomBytes(16).toString("hex");
  const hashed = await scryptAsync(password, salt, 64);
  return `${hashed}:${salt}`;
}
