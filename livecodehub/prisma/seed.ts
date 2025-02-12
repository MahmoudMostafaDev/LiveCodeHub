import { PrismaClient, provider } from "@prisma/client";

const prisma = new PrismaClient();

let DATA = {
  users: [
    {
      id: 1,
      username: "john_doe1",
      password: "hashed_password_1",
      provider: "CREDENTIALS",
      email: "john@example.com",
      image: "https://random.imagecdn.app/500/150",
    },
    {
      id: 11,
      username: "jane_smith1",
      password: "hashed_password_2",
      provider: "GOOGLE",
      email: "jane@example.com",
      image: "https://random.imagecdn.app/500/150",
    },
    {
      id: 12,
      username: "mike_github1",
      provider: "GITHUB",
      email: "mike@example.com",
      image: "https://random.imagecdn.app/500/150",
    },
  ],
  students: [
    {
      user_id: 10,
    },
    {
      user_id: 11,
    },
    {
      user_id: 12,
    },
  ],
  courses: [
    {
      id: 1,
      name: "Introduction to Programming",
      description: "Learn the basics of programming using JavaScript.",
      thumbnail: "intro_programming.png",
      popularity: 120,
      counter: 45,
    },
    {
      id: 2,
      name: "Advanced React",
      description: "Master React hooks and state management.",
      thumbnail: "advanced_react.png",
      popularity: 98,
      counter: 25,
    },
  ],
  course_user: [
    {
      id: 1,
      course_id: 1,
      user_id: 10,
    },
    {
      id: 2,
      course_id: 2,
      user_id: 11,
    },
    {
      id: 3,
      course_id: 1,
      user_id: 12,
    },
  ],
  videos: [
    {
      id: 1,
      title: "Introduction to JavaScript",
      link: "https://example.com/videos/intro_js",
      tumbnail: "intro_js_thumbnail.png",
      length: 300,
      course_id: 1,
    },
    {
      id: 2,
      title: "Advanced React Hooks",
      link: "https://example.com/videos/react_hooks",
      tumbnail: "react_hooks_thumbnail.png",
      length: 450,
      course_id: 2,
    },
  ],
  user_video_stops: [
    {
      user_id: 10,
      video_id: 1,
      order: 1,
      course_id: 1,
    },
    {
      user_id: 11,
      video_id: 2,
      order: 1,
      course_id: 2,
    },
    {
      user_id: 12,
      video_id: 1,
      order: 2,
      course_id: 1,
    },
  ],
};

async function main() {
  DATA.users.forEach(async (user) => {
    await prisma.user.upsert({
      where: { id: user.id },
      update: {},
      create: { ...user, provider: user.provider as any },
    });
  });
  DATA.students.forEach(async (student) => {
    await prisma.students.upsert({
      where: { user_id: student.user_id },
      update: {},
      create: {
        ...student,
      },
    });
  });
  DATA.courses.forEach(async (course) => {
    await prisma.course.upsert({
      where: { id: course.id },
      update: {},
      create: course,
    });
  });
  DATA.course_user.forEach(async (course_user) => {
    await prisma.course_user.upsert({
      where: { id: course_user.id },
      update: {},
      create: course_user,
    });
  });
  DATA.videos.forEach(async (video) => {
    await prisma.videos.upsert({
      where: { id: video.id },
      update: {},
      create: video,
    });
  });
  DATA.user_video_stops.forEach(async (user_video_stop) => {
    await prisma.user_video_stops.upsert({
      where: {
        user_id_course_id: {
          user_id: user_video_stop.user_id,
          course_id: user_video_stop.course_id,
        },
      },
      update: {},
      create: user_video_stop,
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
