-- DropForeignKey
ALTER TABLE "user_video_stops" DROP CONSTRAINT "fk_user_video_stops_course";

-- DropForeignKey
ALTER TABLE "user_video_stops" DROP CONSTRAINT "fk_user_video_stops_user";

-- DropForeignKey
ALTER TABLE "user_video_stops" DROP CONSTRAINT "fk_user_video_stops_video";

-- AddForeignKey
ALTER TABLE "user_video_stops" ADD CONSTRAINT "fk_user_video_stops_course" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_video_stops" ADD CONSTRAINT "fk_user_video_stops_user" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_video_stops" ADD CONSTRAINT "fk_user_video_stops_video" FOREIGN KEY ("video_id") REFERENCES "videos"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
