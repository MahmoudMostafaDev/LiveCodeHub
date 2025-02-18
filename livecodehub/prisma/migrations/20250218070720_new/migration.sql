-- CreateEnum
CREATE TYPE "lessonType" AS ENUM ('VIDEO');

-- CreateTable
CREATE TABLE "streak" (
    "studentId" INTEGER NOT NULL,
    "value" INTEGER NOT NULL DEFAULT 0,
    "lastAction" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "streak_pkey" PRIMARY KEY ("studentId")
);

-- CreateTable
CREATE TABLE "studentProgress" (
    "studetId" INTEGER NOT NULL,
    "lastCourseId" INTEGER,
    "lessonWatchedToday" INTEGER,
    "lastLessonWatchedDate" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "course" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "thumbnail" TEXT,
    "popularity" INTEGER,
    "lessons" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastModified" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lesson" (
    "id" SERIAL NOT NULL,
    "lessonType" "lessonType" NOT NULL DEFAULT 'VIDEO',
    "sourceId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "lesson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "video" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'video',
    "thumbnail" TEXT NOT NULL,
    "lessonNumber" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "video_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studentLastLessonsStops" (
    "studentId" INTEGER NOT NULL,
    "lessonId" INTEGER NOT NULL,

    CONSTRAINT "studentLastLessonsStops_pkey" PRIMARY KEY ("studentId","lessonId")
);

-- CreateTable
CREATE TABLE "_courseTostudent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_courseTostudent_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "studentProgress_studetId_key" ON "studentProgress"("studetId");

-- CreateIndex
CREATE UNIQUE INDEX "course_name_key" ON "course"("name");

-- CreateIndex
CREATE UNIQUE INDEX "lesson_sourceId_key" ON "lesson"("sourceId");

-- CreateIndex
CREATE INDEX "_courseTostudent_B_index" ON "_courseTostudent"("B");

-- AddForeignKey
ALTER TABLE "streak" ADD CONSTRAINT "streak_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "studentProgress" ADD CONSTRAINT "studentProgress_lastCourseId_fkey" FOREIGN KEY ("lastCourseId") REFERENCES "course"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentProgress" ADD CONSTRAINT "studentProgress_studetId_fkey" FOREIGN KEY ("studetId") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "studentLastLessonsStops" ADD CONSTRAINT "studentLastLessonsStops_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "_courseTostudent" ADD CONSTRAINT "_courseTostudent_A_fkey" FOREIGN KEY ("A") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_courseTostudent" ADD CONSTRAINT "_courseTostudent_B_fkey" FOREIGN KEY ("B") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
