-- AlterTable
ALTER TABLE "course" ADD COLUMN     "counter" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "user_video_stops" (
    "user_id" INTEGER NOT NULL,
    "video_id" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "course_id" INTEGER NOT NULL,

    CONSTRAINT "user_video_stops_pkey" PRIMARY KEY ("user_id","course_id")
);

-- AddForeignKey
ALTER TABLE "user_video_stops" ADD CONSTRAINT "fk_user_video_stops_course" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_video_stops" ADD CONSTRAINT "fk_user_video_stops_user" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_video_stops" ADD CONSTRAINT "fk_user_video_stops_video" FOREIGN KEY ("video_id") REFERENCES "videos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
