/*
  Warnings:

  - You are about to drop the column `counterData` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `last_course` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `todayCounter` on the `user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "streak" DROP CONSTRAINT "fk_streak_user";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "fk_user_course";

-- DropForeignKey
ALTER TABLE "user_video_stops" DROP CONSTRAINT "fk_user_video_stops_user";

-- AlterTable
ALTER TABLE "course_user" ADD COLUMN     "studentsUser_id" INTEGER;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "counterData",
DROP COLUMN "last_course",
DROP COLUMN "todayCounter",
ADD COLUMN     "courseId" INTEGER;

-- CreateTable
CREATE TABLE "students" (
    "user_id" INTEGER NOT NULL,
    "last_course" INTEGER,
    "todayCounter" INTEGER NOT NULL DEFAULT 0,
    "counterData" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "students_user_id_key" ON "students"("user_id");

-- AddForeignKey
ALTER TABLE "course_user" ADD CONSTRAINT "course_user_studentsUser_id_fkey" FOREIGN KEY ("studentsUser_id") REFERENCES "students"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "fk_user_course" FOREIGN KEY ("last_course") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "streak" ADD CONSTRAINT "fk_streak_user" FOREIGN KEY ("user_id") REFERENCES "students"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_video_stops" ADD CONSTRAINT "fk_user_video_stops_user" FOREIGN KEY ("user_id") REFERENCES "students"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;
