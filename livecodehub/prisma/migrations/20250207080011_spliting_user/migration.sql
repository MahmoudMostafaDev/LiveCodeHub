/*
  Warnings:

  - You are about to drop the column `studentsUser_id` on the `course_user` table. All the data in the column will be lost.
  - You are about to drop the column `courseId` on the `user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "course_user" DROP CONSTRAINT "course_user_studentsUser_id_fkey";

-- DropForeignKey
ALTER TABLE "course_user" DROP CONSTRAINT "fk_course_user_user";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_courseId_fkey";

-- AlterTable
ALTER TABLE "course_user" DROP COLUMN "studentsUser_id";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "courseId";

-- RenameForeignKey
ALTER TABLE "streak" RENAME CONSTRAINT "fk_streak_user" TO "streak_user_id_fkey";

-- RenameForeignKey
ALTER TABLE "user_video_stops" RENAME CONSTRAINT "fk_user_video_stops_course" TO "user_video_stops_course_id_fkey";

-- RenameForeignKey
ALTER TABLE "user_video_stops" RENAME CONSTRAINT "fk_user_video_stops_user" TO "user_video_stops_user_id_fkey";

-- RenameForeignKey
ALTER TABLE "user_video_stops" RENAME CONSTRAINT "fk_user_video_stops_video" TO "user_video_stops_video_id_fkey";

-- RenameForeignKey
ALTER TABLE "videos" RENAME CONSTRAINT "fk_videos_course" TO "videos_course_id_fkey";

-- AddForeignKey
ALTER TABLE "course_user" ADD CONSTRAINT "fk_course_user_user" FOREIGN KEY ("user_id") REFERENCES "students"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;
