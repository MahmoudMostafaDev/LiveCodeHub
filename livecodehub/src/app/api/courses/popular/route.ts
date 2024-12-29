import { prisma } from "@/lib/prisma";
export async function GET(req: Request) {
  try {
    const courses = await prisma.course.findMany({
      take: 5,
      orderBy: {
        popularity: "desc",
      },
      select: {
        id: true,
        name: true,
        description: true,
        thumbnail: true,
      },
    });
    return new Response(JSON.stringify(courses), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to get courses", { status: 500 });
  }
}

export async function POST(req: Request) {}
