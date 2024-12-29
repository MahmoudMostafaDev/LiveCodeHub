-- DropForeignKey
ALTER TABLE "course_user" DROP CONSTRAINT "fk_course_user_course";

-- DropForeignKey
ALTER TABLE "course_user" DROP CONSTRAINT "fk_course_user_user";

-- AddForeignKey
ALTER TABLE "course_user" ADD CONSTRAINT "fk_course_user_course" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "course_user" ADD CONSTRAINT "fk_course_user_user" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
