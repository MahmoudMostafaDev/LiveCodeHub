import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { getToken } from "next-auth/jwt";
import { checkAuthorization } from "../../auth/authHelpers";
export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const username = token?.username as string;
  try {
    if (!checkAuthorization(username))
      return new Response("Unauthorized", { status: 401 });
    const video = await getLastVideo(username);
    if (!video) return new Response("Video Not Found", { status: 404 });
    return new Response(JSON.stringify(formatVideo(video)), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to get video", { status: 500 });
  }
}

async function getLastVideo(username: string) {
  //find user have the username -> Select the last course he have
  // --> get coures name , thumbnail , counter (number of videos)
  // then get the video of this course that he stops at from user_video_stops
  // where the username = username of it  -> get title , order
  /* Structure 
     {
      course: {
        counter: ,
        name : ,
        thumbnail: ,
        user_video_stops: [ 
          // with index zero only
          {
            order: ,
            video: {
              id: ,
              title: ,
            }}]}*/
  const video = await prisma.user.findFirst({
    where: {
      username: username,
    },
    select: {
      course: {
        select: {
          counter: true,
          name: true,
          thumbnail: true,
          user_video_stops: {
            where: {
              user: {
                username: username,
              },
            },
            select: {
              order: true,
              video: {
                select: {
                  id: true,
                  title: true,
                },
              },
            },
          },
        },
      },
    },
  });
  return video;
}

function formatVideo(video: any) {
  return {
    course_name: video.course.name,
    course_thumbnail: video.course.thumbnail,
    courseFinished: (
      (video.course.user_video_stops[0].order / video.course.counter) *
      100
    ).toFixed(2),
    video_id: video.course.user_video_stops[0].video.id,
    video_title: video.course.user_video_stops[0].video.title,
    video_order: video.course.user_video_stops[0].order,
  };
}
