const courses = [
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
];

const lessons = [
  ...Array.from({ length: 10 }, (_, courseIndex) =>
    Array.from({ length: 5 }, (_, lessonIndex) => ({
      id: courseIndex * 5 + lessonIndex + 1,
      lessonType: "VIDEO",
      sourceId: courseIndex * 5 + lessonIndex + 1,
      courseId: courseIndex + 1,
    }))
  ).flat(),
];

const videos = [
  ...Array.from({ length: 50 }, (_, videoIndex) => ({
    id: videoIndex + 1,
    link: `https://random.imagecdn.app/500/150?video=${videoIndex + 1}`,
    title: `Course ${Math.floor(videoIndex / 5) + 1} Lesson ${
      (videoIndex % 5) + 1
    }`,
    tumbnail: `https://random-image-pepebigotes.vercel.app/api/random-image`,
    lessonNumber: (videoIndex % 5) + 1,
    duration: Math.floor(Math.random() * (600 - 120 + 1)) + 120, // Random duration between 120s and 600s
  })),
];

console.log({ courses, lessons, videos });
