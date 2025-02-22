/*
  Warnings:

  - You are about to drop the `_courseTostudent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_courseTostudent" DROP CONSTRAINT "_courseTostudent_A_fkey";

-- DropForeignKey
ALTER TABLE "_courseTostudent" DROP CONSTRAINT "_courseTostudent_B_fkey";

-- AlterTable
ALTER TABLE "course" ADD COLUMN     "studentId" INTEGER;

-- DropTable
DROP TABLE "_courseTostudent";

-- CreateTable
CREATE TABLE "enrollment" (
    "studentId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "enrollment_pkey" PRIMARY KEY ("studentId","courseId")
);

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enrollment" ADD CONSTRAINT "enrollment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "enrollment" ADD CONSTRAINT "enrollment_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
