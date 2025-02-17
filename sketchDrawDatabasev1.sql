CREATE TABLE "courses"(
    "id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "popularity" BIGINT NOT NULL,
    "lessons" BIGINT NOT NULL
);
ALTER TABLE
    "courses" ADD PRIMARY KEY("id");
CREATE TABLE "Course_user"(
    "id" BIGINT NOT NULL,
    "course_id" BIGINT NOT NULL,
    "studentId" BIGINT NOT NULL
);
ALTER TABLE
    "Course_user" ADD PRIMARY KEY("id");
CREATE TABLE "users"(
    "id" BIGINT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT NOT NULL
);
ALTER TABLE
    "users" ADD PRIMARY KEY("id");
CREATE TABLE "teachers"(
    "id" BIGINT NOT NULL,
    "user_id" BIGINT NOT NULL
);
ALTER TABLE
    "teachers" ADD PRIMARY KEY("id");
CREATE TABLE "students"(
    "id" BIGINT NOT NULL,
    "user_id" BIGINT NOT NULL,
    "lessonsWatchedToday" BIGINT NOT NULL,
    "LastLessonDate" DATE NOT NULL
);
ALTER TABLE
    "students" ADD PRIMARY KEY("id");
CREATE TABLE "student_progress"(
    "id" BIGINT NOT NULL,
    "studentId" BIGINT NOT NULL,
    "lastCourseId" BIGINT NOT NULL,
    "lessonWatchedToday" BIGINT NOT NULL
);
ALTER TABLE
    "student_progress" ADD PRIMARY KEY("id");
CREATE TABLE "Streak"(
    "id" BIGINT NOT NULL,
    "studentId" BIGINT NOT NULL,
    "value" BIGINT NOT NULL,
    "lastAction" DATE NOT NULL
);
ALTER TABLE
    "Streak" ADD PRIMARY KEY("id");
CREATE TABLE "user_video_stops"(
    "id" BIGINT NOT NULL,
    "videoId" BIGINT NOT NULL,
    "studentId" BIGINT NOT NULL
);
ALTER TABLE
    "user_video_stops" ADD PRIMARY KEY("id");
CREATE TABLE "videos"(
    "id" BIGINT NOT NULL,
    "link" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "lessonNumber" BIGINT NOT NULL,
    "duration" BIGINT NOT NULL,
    "lesson_id" BIGINT NOT NULL
);
ALTER TABLE
    "videos" ADD PRIMARY KEY("id");
CREATE TABLE "Lesson"(
    "id" BIGINT NOT NULL,
    "lessonType" VARCHAR(255) CHECK
        ("lessonType" IN('')) NOT NULL,
        "sourceId" BIGINT NOT NULL,
        "courseId" BIGINT NOT NULL
);
ALTER TABLE
    "Lesson" ADD PRIMARY KEY("id");
ALTER TABLE
    "Course_user" ADD CONSTRAINT "course_user_course_id_foreign" FOREIGN KEY("course_id") REFERENCES "courses"("id");
ALTER TABLE
    "Lesson" ADD CONSTRAINT "lesson_sourceid_foreign" FOREIGN KEY("sourceId") REFERENCES "videos"("id");
ALTER TABLE
    "teachers" ADD CONSTRAINT "teachers_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");
ALTER TABLE
    "Streak" ADD CONSTRAINT "streak_studentid_foreign" FOREIGN KEY("studentId") REFERENCES "students"("id");
ALTER TABLE
    "student_progress" ADD CONSTRAINT "student_progress_studentid_foreign" FOREIGN KEY("studentId") REFERENCES "students"("id");
ALTER TABLE
    "user_video_stops" ADD CONSTRAINT "user_video_stops_videoid_foreign" FOREIGN KEY("videoId") REFERENCES "videos"("id");
ALTER TABLE
    "users" ADD CONSTRAINT "users_id_foreign" FOREIGN KEY("id") REFERENCES "students"("id");
ALTER TABLE
    "user_video_stops" ADD CONSTRAINT "user_video_stops_studentid_foreign" FOREIGN KEY("studentId") REFERENCES "students"("id");
ALTER TABLE
    "Lesson" ADD CONSTRAINT "lesson_courseid_foreign" FOREIGN KEY("courseId") REFERENCES "courses"("id");
ALTER TABLE
    "student_progress" ADD CONSTRAINT "student_progress_lastcourseid_foreign" FOREIGN KEY("lastCourseId") REFERENCES "courses"("id");
ALTER TABLE
    "Course_user" ADD CONSTRAINT "course_user_studentid_foreign" FOREIGN KEY("studentId") REFERENCES "students"("id");