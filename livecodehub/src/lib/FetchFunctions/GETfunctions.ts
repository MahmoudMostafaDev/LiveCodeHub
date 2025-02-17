//GET fetch Functions should return this structure : { data : any, error : string, showErrorToUser : boolean }

import type { GetStructure } from "../hooks/useGet";
import Link from "next/link";

async function getFunction<T>(
  url: string,
  errorHandle: (res: Response) => Promise<GetStructure<null>>
): Promise<GetStructure<T | null>> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      return await errorHandle(res);
    }
    try {
      const data: T = await res.json();
      return { data, error: "", showErrorToUser: false };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Invalid Response Format";
      return { data: null, error: errorMessage, showErrorToUser: true };
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "network error";
    return { data: null, error: errorMessage, showErrorToUser: false };
  }
}

const streakError = async (res: Response): Promise<GetStructure<null>> => {
  const { status } = res;
  let error = "";
  let showErrorToUser = false;
  switch (status) {
    case 401:
      error = "Unauthorized";
      showErrorToUser = true;
      break;
    case 500:
      error = "can't get your streak";
      showErrorToUser = true;
      break;
    default:
      error = res.statusText || "Unexpected error";
      showErrorToUser = true;
      break;
  }
  return { data: null, error, showErrorToUser };
};
export const getStreak = async () =>
  await getFunction<{ streak: number }>("/api/user/streak", streakError);

const todayLessonsError = async (
  res: Response
): Promise<GetStructure<null>> => {
  const { status } = res;
  let error = "";
  let showErrorToUser = false;
  switch (status) {
    case 401:
      error = "Unauthorized";
      showErrorToUser = true;
      break;
    case 500:
      error = "can't get your today lessons";
      showErrorToUser = true;
      break;
    default:
      error = res.statusText || "Unexpected error";
      showErrorToUser = true;
      break;
  }
  return { data: null, error, showErrorToUser };
};

export const getTodayLessons = async () =>
  await getFunction<number>("/api/user/todaylessons", todayLessonsError);

const userInfoError = async (res: Response): Promise<GetStructure<null>> => {
  const { status } = res;
  let error = "";
  let showErrorToUser = false;
  switch (status) {
    case 401:
      error = "Unauthorized";
      showErrorToUser = true;
      break;
    case 404:
      error = "Can't find your info";
      showErrorToUser = true;
      break;
    case 500:
      error = "can't get your info";
      showErrorToUser = true;
      break;
    default:
      error = res.statusText || "Unexpected error";
      showErrorToUser = true;
      break;
  }
  return { data: null, error, showErrorToUser };
};

export const getUserInfor = async () =>
  await getFunction<{ image: string; username: string }>(
    "/api/user/userdata",
    userInfoError
  );

const continueLearningError = async (
  res: Response
): Promise<GetStructure<null>> => {
  const { status } = res;
  console.log(status);
  let error = "";
  let showErrorToUser = false;
  switch (status) {
    case 401:
      error = "Unauthorized";
      showErrorToUser = true;
      break;
    case 404:
      error = "none";
      showErrorToUser = true;
      break;
    case 500:
      error = "can't get Videos";
      showErrorToUser = true;
      break;
    default:
      error = res.statusText || "Unexpected error";
      showErrorToUser = true;
      break;
  }
  return { data: null, error, showErrorToUser };
};
export type ContinueLearningvideo = {
  course: {
    name: string;
    counter: number;
  };
  order: number;
  video: {
    title: string;
    tumbnail: string;
  };
};
export const getContinueLearning = async () =>
  await getFunction<ContinueLearningvideo[]>(
    "/api/courses/continue",
    continueLearningError
  );

export type PopularCourses = {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
};

const popularError = async (res: Response): Promise<GetStructure<null>> => {
  const { status } = res;
  console.log(status);
  let error = "";
  let showErrorToUser = false;
  switch (status) {
    case 404:
      error = "none";
      showErrorToUser = true;
      break;
    case 500:
      error = "can't get Courses";
      showErrorToUser = true;
      break;
    default:
      error = res.statusText || "Unexpected error";
      showErrorToUser = true;
      break;
  }
  return { data: null, error, showErrorToUser };
};

export const getPopularCourses = async () =>
  await getFunction<PopularCourses[]>("/api/courses/popular", popularError);

export type mainVideo = {
  id: number;
  link: string;
  title: string;
  tumbnail: string;
  length: number;
  order: number;
  course: string;
  totalVideos: number;
};

const mainVideoError = async (res: Response): Promise<GetStructure<null>> => {
  const { status } = res;
  console.log(status);
  let error = "";
  let showErrorToUser = false;
  switch (status) {
    case 401:
      error = "Unauthorized";
      showErrorToUser = true;
      break;
    case 404:
      error = "none";
      showErrorToUser = true;
      break;
    case 500:
      error = "can't get Videos";
      showErrorToUser = true;
      break;
    default:
      error = res.statusText || "Unexpected error";
      showErrorToUser = true;
      break;
  }
  return { data: null, error, showErrorToUser };
};

export const getMainVideo = async () =>
  await getFunction<mainVideo>("/api/courses/lastcourse", mainVideoError);
