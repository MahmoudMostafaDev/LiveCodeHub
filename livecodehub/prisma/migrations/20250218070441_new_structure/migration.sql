/*
  Warnings:

  - You are about to drop the column `user_id` on the `teacher` table. All the data in the column will be lost.
  - You are about to drop the `course` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `course_user` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `streak` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `students` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_video_stops` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `videos` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `teacher` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `teacher` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "course_user" DROP CONSTRAINT "fk_course_user_course";

-- DropForeignKey
ALTER TABLE "course_user" DROP CONSTRAINT "fk_course_user_user";

-- DropForeignKey
ALTER TABLE "streak" DROP CONSTRAINT "streak_user_id_fkey";

-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "fk_user_course";

-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_user_id_fkey";

-- DropForeignKey
ALTER TABLE "teacher" DROP CONSTRAINT "teacher_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_video_stops" DROP CONSTRAINT "user_video_stops_course_id_fkey";

-- DropForeignKey
ALTER TABLE "user_video_stops" DROP CONSTRAINT "user_video_stops_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_video_stops" DROP CONSTRAINT "user_video_stops_video_id_fkey";

-- DropForeignKey
ALTER TABLE "videos" DROP CONSTRAINT "videos_course_id_fkey";

-- AlterTable
ALTER TABLE "teacher" DROP COLUMN "user_id",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "course";

-- DropTable
DROP TABLE "course_user";

-- DropTable
DROP TABLE "streak";

-- DropTable
DROP TABLE "students";

-- DropTable
DROP TABLE "user_video_stops";

-- DropTable
DROP TABLE "videos";

-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "student_userId_key" ON "student"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "teacher_userId_key" ON "teacher"("userId");

-- AddForeignKey
ALTER TABLE "teacher" ADD CONSTRAINT "teacher_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
