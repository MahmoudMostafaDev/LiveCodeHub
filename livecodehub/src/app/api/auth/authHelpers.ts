import { prisma } from "@/lib/prisma";
export async function checkAuthorization(username: string) {
  if (!username) {
    return { id: null, isAuth: false };
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
      select: {
        id: true,
      },
    });
    if (!user) return { id: null, isAuth: false };
    return { id: user.id, isAuth: true };
  } catch (error) {
    console.log("error");
    console.log(error);
    throw new Error();
  }
}
