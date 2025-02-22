import { lessonType, PrismaClient, provider } from "@prisma/client";
import { trackSynchronousRequestDataAccessInDev } from "next/dist/server/app-render/dynamic-rendering";

const prisma = new PrismaClient();

let DATA = {
  users: [
    {
      id: 1,
      username: "maged",
      password: "1231",
      provider: "CREDENTIALS",
      email: "maged@gmail.com",
      image: "https://random.imagecdn.app/500/150",
    },
    {
      id: 2,
      username: "ahmed",
      password: "4562",
      provider: "CREDENTIALS",
      email: "ahmed@gmail.com",
      image: "https://random.imagecdn.app/500/151",
    },
    {
      id: 3,
      username: "sara",
      password: "7893",
      provider: "CREDENTIALS",
      email: "sara@gmail.com",
      image: "https://random.imagecdn.app/500/152",
    },
    {
      id: 4,
      username: "youssef",
      password: "1594",
      provider: "CREDENTIALS",
      email: "youssef@gmail.com",
      image: "https://random.imagecdn.app/500/153",
    },
    {
      id: 5,
      username: "fatma",
      password: "7535",
      provider: "CREDENTIALS",
      email: "fatma@gmail.com",
      image: "https://random.imagecdn.app/500/154",
    },
  ],
  teachers: [{ id: 1, userId: 5 }],
  students: [
    {
      id: 1,
      userId: 1,
    },
    {
      id: 2,
      userId: 2,
    },
    {
      id: 3,
      userId: 3,
    },
    {
      id: 4,
      userId: 4,
    },
  ],
  streaks: [
    {
      id: 1,
      value: 2,
      lastAction: new Date(),
    },
    {
      id: 2,
      value: 5,
      lastAction: new Date(),
    },
    {
      id: 3,
      value: 12,
      lastAction: new Date(),
    },
    {
      id: 4,
      value: 0,
      lastAction: new Date(),
    },
  ],
  courses: [
    {
      id: 1,
      name: "Course 1",
      description:
        "This is the description for Course 1. Lorem ipsum dolor sit amet...",
      thumbnail: "https://random.imagecdn.app/500/150?course=1",
      popularity: 3,
      lessons: 5,
      createdAt: new Date(),
      lastModified: new Date(),
    },
    {
      id: 2,
      name: "Course 2",
      description:
        "This is the description for Course 2. Lorem ipsum dolor sit amet...",
      thumbnail: "https://random.imagecdn.app/500/150?course=2",
      popularity: 5,
      lessons: 5,
      createdAt: new Date(),
      lastModified: new Date(),
    },
    {
      id: 3,
      name: "Course 3",
      description:
        "This is the description for Course 3. Lorem ipsum dolor sit amet...",
      thumbnail: "https://random.imagecdn.app/500/150?course=3",
      popularity: 2,
      lessons: 5,
      createdAt: new Date(),
      lastModified: new Date(),
    },
    {
      id: 4,
      name: "Course 4",
      description:
        "This is the description for Course 4. Lorem ipsum dolor sit amet...",
      thumbnail: "https://random.imagecdn.app/500/150?course=4",
      popularity: 4,
      lessons: 5,
      createdAt: new Date(),
      lastModified: new Date(),
    },
    {
      id: 5,
      name: "Course 5",
      description:
        "This is the description for Course 5. Lorem ipsum dolor sit amet...",
      thumbnail: "https://random.imagecdn.app/500/150?course=5",
      popularity: 1,
      lessons: 5,
      createdAt: new Date(),
      lastModified: new Date(),
    },
    {
      id: 6,
      name: "Course 6",
      description:
        "This is the description for Course 6. Lorem ipsum dolor sit amet...",
      thumbnail: "https://random.imagecdn.app/500/150?course=6",
      popularity: 3,
      lessons: 5,
      createdAt: new Date(),
      lastModified: new Date(),
    },
    {
      id: 7,
      name: "Course 7",
      description:
        "This is the description for Course 7. Lorem ipsum dolor sit amet...",
      thumbnail: "https://random.imagecdn.app/500/150?course=7",
      popularity: 5,
      lessons: 5,
      createdAt: new Date(),
      lastModified: new Date(),
    },
    {
      id: 8,
      name: "Course 8",
      description:
        "This is the description for Course 8. Lorem ipsum dolor sit amet...",
      thumbnail: "https://random.imagecdn.app/500/150?course=8",
      popularity: 2,
      lessons: 5,
      createdAt: new Date(),
      lastModified: new Date(),
    },
    {
      id: 9,
      name: "Course 9",
      description:
        "This is the description for Course 9. Lorem ipsum dolor sit amet...",
      thumbnail: "https://random.imagecdn.app/500/150?course=9",
      popularity: 4,
      lessons: 5,
      createdAt: new Date(),
      lastModified: new Date(),
    },
    {
      id: 10,
      name: "Course 10",
      description:
        "This is the description for Course 10. Lorem ipsum dolor sit amet...",
      thumbnail: "https://random.imagecdn.app/500/150?course=10",
      popularity: 1,
      lessons: 5,
      createdAt: new Date(),
      lastModified: new Date(),
    },
  ],
  lessons: [
    { id: 1, lessonType: "VIDEO", sourceId: 1, courseId: 1 },
    { id: 2, lessonType: "VIDEO", sourceId: 2, courseId: 1 },
    { id: 3, lessonType: "VIDEO", sourceId: 3, courseId: 1 },
    { id: 4, lessonType: "VIDEO", sourceId: 4, courseId: 1 },
    { id: 5, lessonType: "VIDEO", sourceId: 5, courseId: 1 },
    { id: 6, lessonType: "VIDEO", sourceId: 6, courseId: 2 },
    { id: 7, lessonType: "VIDEO", sourceId: 7, courseId: 2 },
    { id: 8, lessonType: "VIDEO", sourceId: 8, courseId: 2 },
    { id: 9, lessonType: "VIDEO", sourceId: 9, courseId: 2 },
    { id: 10, lessonType: "VIDEO", sourceId: 10, courseId: 2 },
    { id: 11, lessonType: "VIDEO", sourceId: 11, courseId: 3 },
    { id: 12, lessonType: "VIDEO", sourceId: 12, courseId: 3 },
    { id: 13, lessonType: "VIDEO", sourceId: 13, courseId: 3 },
    { id: 14, lessonType: "VIDEO", sourceId: 14, courseId: 3 },
    { id: 15, lessonType: "VIDEO", sourceId: 15, courseId: 3 },
    { id: 16, lessonType: "VIDEO", sourceId: 16, courseId: 4 },
    { id: 17, lessonType: "VIDEO", sourceId: 17, courseId: 4 },
    { id: 18, lessonType: "VIDEO", sourceId: 18, courseId: 4 },
    { id: 19, lessonType: "VIDEO", sourceId: 19, courseId: 4 },
    { id: 20, lessonType: "VIDEO", sourceId: 20, courseId: 4 },
    { id: 21, lessonType: "VIDEO", sourceId: 21, courseId: 5 },
    { id: 22, lessonType: "VIDEO", sourceId: 22, courseId: 5 },
    { id: 23, lessonType: "VIDEO", sourceId: 23, courseId: 5 },
    { id: 24, lessonType: "VIDEO", sourceId: 24, courseId: 5 },
    { id: 25, lessonType: "VIDEO", sourceId: 25, courseId: 5 },
    { id: 26, lessonType: "VIDEO", sourceId: 26, courseId: 6 },
    { id: 27, lessonType: "VIDEO", sourceId: 27, courseId: 6 },
    { id: 28, lessonType: "VIDEO", sourceId: 28, courseId: 6 },
    { id: 29, lessonType: "VIDEO", sourceId: 29, courseId: 6 },
    { id: 30, lessonType: "VIDEO", sourceId: 30, courseId: 6 },
    { id: 31, lessonType: "VIDEO", sourceId: 31, courseId: 7 },
    { id: 32, lessonType: "VIDEO", sourceId: 32, courseId: 7 },
    { id: 33, lessonType: "VIDEO", sourceId: 33, courseId: 7 },
    { id: 34, lessonType: "VIDEO", sourceId: 34, courseId: 7 },
    { id: 35, lessonType: "VIDEO", sourceId: 35, courseId: 7 },
    { id: 36, lessonType: "VIDEO", sourceId: 36, courseId: 8 },
    { id: 37, lessonType: "VIDEO", sourceId: 37, courseId: 8 },
    { id: 38, lessonType: "VIDEO", sourceId: 38, courseId: 8 },
    { id: 39, lessonType: "VIDEO", sourceId: 39, courseId: 8 },
    { id: 40, lessonType: "VIDEO", sourceId: 40, courseId: 8 },
    { id: 41, lessonType: "VIDEO", sourceId: 41, courseId: 9 },
    { id: 42, lessonType: "VIDEO", sourceId: 42, courseId: 9 },
    { id: 43, lessonType: "VIDEO", sourceId: 43, courseId: 9 },
    { id: 44, lessonType: "VIDEO", sourceId: 44, courseId: 9 },
    { id: 45, lessonType: "VIDEO", sourceId: 45, courseId: 9 },
    { id: 46, lessonType: "VIDEO", sourceId: 46, courseId: 10 },
    { id: 47, lessonType: "VIDEO", sourceId: 47, courseId: 10 },
    { id: 48, lessonType: "VIDEO", sourceId: 48, courseId: 10 },
    { id: 49, lessonType: "VIDEO", sourceId: 49, courseId: 10 },
    { id: 50, lessonType: "VIDEO", sourceId: 50, courseId: 10 },
  ],
  videos: [
    {
      id: 1,
      link: "https://random.imagecdn.app/500/150?video=1",
      title: "Course 1 Lesson 1",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 1,
      duration: 323,
    },
    {
      id: 2,
      link: "https://random.imagecdn.app/500/150?video=2",
      title: "Course 1 Lesson 2",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 2,
      duration: 460,
    },
    {
      id: 3,
      link: "https://random.imagecdn.app/500/150?video=3",
      title: "Course 1 Lesson 3",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 3,
      duration: 200,
    },
    {
      id: 4,
      link: "https://random.imagecdn.app/500/150?video=4",
      title: "Course 1 Lesson 4",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 4,
      duration: 554,
    },
    {
      id: 5,
      link: "https://random.imagecdn.app/500/150?video=5",
      title: "Course 1 Lesson 5",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 5,
      duration: 479,
    },
    {
      id: 6,
      link: "https://random.imagecdn.app/500/150?video=6",
      title: "Course 2 Lesson 1",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 1,
      duration: 204,
    },
    {
      id: 7,
      link: "https://random.imagecdn.app/500/150?video=7",
      title: "Course 2 Lesson 2",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 2,
      duration: 387,
    },
    {
      id: 8,
      link: "https://random.imagecdn.app/500/150?video=8",
      title: "Course 2 Lesson 3",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 3,
      duration: 546,
    },
    {
      id: 9,
      link: "https://random.imagecdn.app/500/150?video=9",
      title: "Course 2 Lesson 4",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 4,
      duration: 464,
    },
    {
      id: 10,
      link: "https://random.imagecdn.app/500/150?video=10",
      title: "Course 2 Lesson 5",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 5,
      duration: 465,
    },
    {
      id: 11,
      link: "https://random.imagecdn.app/500/150?video=11",
      title: "Course 3 Lesson 1",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 1,
      duration: 590,
    },
    {
      id: 12,
      link: "https://random.imagecdn.app/500/150?video=12",
      title: "Course 3 Lesson 2",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 2,
      duration: 180,
    },
    {
      id: 13,
      link: "https://random.imagecdn.app/500/150?video=13",
      title: "Course 3 Lesson 3",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 3,
      duration: 574,
    },
    {
      id: 14,
      link: "https://random.imagecdn.app/500/150?video=14",
      title: "Course 3 Lesson 4",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 4,
      duration: 197,
    },
    {
      id: 15,
      link: "https://random.imagecdn.app/500/150?video=15",
      title: "Course 3 Lesson 5",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 5,
      duration: 180,
    },
    {
      id: 16,
      link: "https://random.imagecdn.app/500/150?video=16",
      title: "Course 4 Lesson 1",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 1,
      duration: 280,
    },
    {
      id: 17,
      link: "https://random.imagecdn.app/500/150?video=17",
      title: "Course 4 Lesson 2",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 2,
      duration: 546,
    },
    {
      id: 18,
      link: "https://random.imagecdn.app/500/150?video=18",
      title: "Course 4 Lesson 3",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 3,
      duration: 512,
    },
    {
      id: 19,
      link: "https://random.imagecdn.app/500/150?video=19",
      title: "Course 4 Lesson 4",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 4,
      duration: 586,
    },
    {
      id: 20,
      link: "https://random.imagecdn.app/500/150?video=20",
      title: "Course 4 Lesson 5",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 5,
      duration: 128,
    },
    {
      id: 21,
      link: "https://random.imagecdn.app/500/150?video=21",
      title: "Course 5 Lesson 1",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 1,
      duration: 574,
    },
    {
      id: 22,
      link: "https://random.imagecdn.app/500/150?video=22",
      title: "Course 5 Lesson 2",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 2,
      duration: 260,
    },
    {
      id: 23,
      link: "https://random.imagecdn.app/500/150?video=23",
      title: "Course 5 Lesson 3",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 3,
      duration: 231,
    },
    {
      id: 24,
      link: "https://random.imagecdn.app/500/150?video=24",
      title: "Course 5 Lesson 4",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 4,
      duration: 464,
    },
    {
      id: 25,
      link: "https://random.imagecdn.app/500/150?video=25",
      title: "Course 5 Lesson 5",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 5,
      duration: 401,
    },
    {
      id: 26,
      link: "https://random.imagecdn.app/500/150?video=26",
      title: "Course 6 Lesson 1",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 1,
      duration: 464,
    },
    {
      id: 27,
      link: "https://random.imagecdn.app/500/150?video=27",
      title: "Course 6 Lesson 2",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 2,
      duration: 291,
    },
    {
      id: 28,
      link: "https://random.imagecdn.app/500/150?video=28",
      title: "Course 6 Lesson 3",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 3,
      duration: 388,
    },
    {
      id: 29,
      link: "https://random.imagecdn.app/500/150?video=29",
      title: "Course 6 Lesson 4",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 4,
      duration: 192,
    },
    {
      id: 30,
      link: "https://random.imagecdn.app/500/150?video=30",
      title: "Course 6 Lesson 5",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 5,
      duration: 193,
    },
    {
      id: 31,
      link: "https://random.imagecdn.app/500/150?video=31",
      title: "Course 7 Lesson 1",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 1,
      duration: 509,
    },
    {
      id: 32,
      link: "https://random.imagecdn.app/500/150?video=32",
      title: "Course 7 Lesson 2",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 2,
      duration: 263,
    },
    {
      id: 33,
      link: "https://random.imagecdn.app/500/150?video=33",
      title: "Course 7 Lesson 3",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 3,
      duration: 221,
    },
    {
      id: 34,
      link: "https://random.imagecdn.app/500/150?video=34",
      title: "Course 7 Lesson 4",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 4,
      duration: 584,
    },
    {
      id: 35,
      link: "https://random.imagecdn.app/500/150?video=35",
      title: "Course 7 Lesson 5",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 5,
      duration: 369,
    },
    {
      id: 36,
      link: "https://random.imagecdn.app/500/150?video=36",
      title: "Course 8 Lesson 1",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 1,
      duration: 451,
    },
    {
      id: 37,
      link: "https://random.imagecdn.app/500/150?video=37",
      title: "Course 8 Lesson 2",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 2,
      duration: 440,
    },
    {
      id: 38,
      link: "https://random.imagecdn.app/500/150?video=38",
      title: "Course 8 Lesson 3",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 3,
      duration: 138,
    },
    {
      id: 39,
      link: "https://random.imagecdn.app/500/150?video=39",
      title: "Course 8 Lesson 4",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 4,
      duration: 336,
    },
    {
      id: 40,
      link: "https://random.imagecdn.app/500/150?video=40",
      title: "Course 8 Lesson 5",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 5,
      duration: 396,
    },
    {
      id: 41,
      link: "https://random.imagecdn.app/500/150?video=41",
      title: "Course 9 Lesson 1",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 1,
      duration: 137,
    },
    {
      id: 42,
      link: "https://random.imagecdn.app/500/150?video=42",
      title: "Course 9 Lesson 2",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 2,
      duration: 585,
    },
    {
      id: 43,
      link: "https://random.imagecdn.app/500/150?video=43",
      title: "Course 9 Lesson 3",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 3,
      duration: 413,
    },
    {
      id: 44,
      link: "https://random.imagecdn.app/500/150?video=44",
      title: "Course 9 Lesson 4",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 4,
      duration: 241,
    },
    {
      id: 45,
      link: "https://random.imagecdn.app/500/150?video=45",
      title: "Course 9 Lesson 5",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 5,
      duration: 290,
    },
    {
      id: 46,
      link: "https://random.imagecdn.app/500/150?video=46",
      title: "Course 10 Lesson 1",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 1,
      duration: 235,
    },
    {
      id: 47,
      link: "https://random.imagecdn.app/500/150?video=47",
      title: "Course 10 Lesson 2",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 2,
      duration: 388,
    },
    {
      id: 48,
      link: "https://random.imagecdn.app/500/150?video=48",
      title: "Course 10 Lesson 3",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 3,
      duration: 237,
    },
    {
      id: 49,
      link: "https://random.imagecdn.app/500/150?video=49",
      title: "Course 10 Lesson 4",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 4,
      duration: 445,
    },
    {
      id: 50,
      link: "https://random.imagecdn.app/500/150?video=50",
      title: "Course 10 Lesson 5",
      thumbnail: "https://random-image-pepebigotes.vercel.app/api/random-image",
      lessonNumber: 5,
      duration: 522,
    },
  ],
  studentProgress: [
    {
      studentId: 1,
      lastCourseId: 1,
      lessonWatchedToday: 12,
      lastLessonWatchedDate: new Date(),
    },
    {
      studentId: 2,
      lastCourseId: 3,
      lessonWatchedToday: 15,
      lastLessonWatchedDate: new Date(),
    },
    {
      studentId: 3,
      lastCourseId: 1,
      lessonWatchedToday: 11,
      lastLessonWatchedDate: new Date(),
    },
    {
      studentId: 4,
      lastCourseId: 4,
      lessonWatchedToday: 23,
      lastLessonWatchedDate: new Date(),
    },
  ],
  studentLastLessonsStops: [
    {
      studentId: 1,
      lessonId: 1,
    },
    {
      studentId: 1,
      lessonId: 7,
    },
    {
      studentId: 1,
      lessonId: 14,
    },

    {
      studentId: 2,
      lessonId: 6,
    },
    {
      studentId: 3,
      lessonId: 5,
    },
    {
      studentId: 4,
      lessonId: 17,
    },
  ],
  enrollments: [
    {
      studentId: 1,
      courseId: 1,
    },
    {
      studentId: 1,
      courseId: 2,
    },
    {
      studentId: 1,
      courseId: 3,
    },
    {
      studentId: 2,
      courseId: 3,
    },
    {
      studentId: 2,
      courseId: 2,
    },
    {
      studentId: 3,
      courseId: 1,
    },
    {
      studentId: 3,
      courseId: 2,
    },
    {
      studentId: 4,
      courseId: 4,
    },
  ],
};

async function main() {
  DATA.users.forEach(async (user: any) => {
    await prisma.user.upsert({
      where: { id: user.id },
      update: {},
      create: { ...user, id: user.id },
    });
  });
  DATA.students.forEach(async (student: any) => {
    await prisma.student.upsert({
      where: { id: student.id },
      update: {},
      create: { ...student, id: student.id },
    });
  });
  DATA.teachers.forEach(async (teacher: any) => {
    await prisma.teacher.upsert({
      where: { id: teacher.id },
      update: {},
      create: { ...teacher, id: teacher.id },
    });
  });
  DATA.streaks.forEach(async (streak: any) => {
    await prisma.streak.upsert({
      where: { studentId: streak.id },
      update: {},
      create: {
        value: streak.value,
        lastAction: streak.lastAction,
        studentId: streak.id,
      },
    });
  });
  DATA.courses.forEach(async (course: any) => {
    console.log(course);
    await prisma.course.upsert({
      where: { id: course.id },
      update: {},
      create: { id: course.id, ...course },
    });
  });
  DATA.videos.forEach(async (video: any) => {
    await prisma.video.upsert({
      where: { id: video.id },
      update: {},
      create: { ...video, id: video.id },
    });
  });
  DATA.lessons.forEach(async (lesson: any) => {
    await prisma.lesson.upsert({
      where: { id: lesson.id },
      update: {},
      create: { ...lesson, id: lesson.id, sourceId: lesson.sourceId },
    });
  });
  DATA.studentProgress.forEach(async (studentProgress: any) => {
    await prisma.studentProgress.upsert({
      where: { studentId: studentProgress.studentId },
      update: {},
      create: { ...studentProgress, studentId: studentProgress.studentId },
    });
  });
  DATA.studentLastLessonsStops.forEach(async (studentLastLessonsStops: any) => {
    await prisma.studentLastLessonsStops.upsert({
      where: {
        studentId_lessonId: {
          studentId: studentLastLessonsStops.studentId,
          lessonId: studentLastLessonsStops.lessonId,
        },
      },
      update: {},
      create: {
        ...studentLastLessonsStops,
        studentId: studentLastLessonsStops.studentId,
      },
    });
  });
  DATA.enrollments.forEach(async (enrollment: any) => {
    await prisma.enrollment.upsert({
      where: {
        studentId_courseId: {
          studentId: enrollment.studentId,
          courseId: enrollment.courseId,
        },
      },
      update: {},
      create: { ...enrollment, studentId: enrollment.studentId },
    });
  });
}
main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

////////////////
let DataS = {
  courses: [
    {
      id: 1,
      name: "FIGHT FOR FREEDOM",
    },
  ],
  users: [
    {
      id: 1,
      username: "maged",
      password: "1231",
      image: "https://random.imagecdn.app/500/150",
    },
  ],
  students: [{}],
};
