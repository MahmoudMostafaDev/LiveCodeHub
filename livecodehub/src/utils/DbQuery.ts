"use server";
import { prisma } from "@/lib/prisma";

export async function getStudentId(id: number) {
  const student = await prisma.student.findUnique({
    where: { userId: id },
    select: { id: true },
  });

  return student ? student.id : -1;
}
