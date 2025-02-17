import React from "react";
import {
  getContinueLearning,
  getMainVideo,
  getPopularCourses,
} from "../FetchFunctions/GETfunctions";
import useGet from "./useGet";
import CourseCard from "@/.components/cards/CourseCard";
import ContinueLearning from "@/.components/cards/ContinueLearning";
import type { mainVideo, ContinueLearningvideo, PopularCourses } from "../FetchFunctions/GETfunctions";

const useGetMainPageData = () => {
  const continueLearning = useGet(getContinueLearning);
  const popular = useGet(getPopularCourses);
  const mainVideo = useGet(getMainVideo);

  return { continueLearning, popular, mainVideo };
};


export default useGetMainPageData;
export type continueLearningType = {
  data: ContinueLearningvideo[] | null;
  error: {
    message: string;
    showErrorToUser: boolean;
  },
  isLoading: boolean;
}
export type PopularType = {
  data: PopularCourses[] | null;
  error: {
    message: string;
    showErrorToUser: boolean;
  },
  isLoading: boolean;
}
export type MainVideoType = {
  data: mainVideo | null;
  error: {
    message: string;
    showErrorToUser: boolean;
  },
  isLoading: boolean;
}