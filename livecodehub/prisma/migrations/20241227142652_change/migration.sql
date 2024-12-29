/*
  Warnings:

  - The primary key for the `user_video_stops` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[user_id,course_id]` on the table `user_video_stops` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "user_video_stops" DROP CONSTRAINT "user_video_stops_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "user_video_stops_user_id_course_id_key" ON "user_video_stops"("user_id", "course_id");
