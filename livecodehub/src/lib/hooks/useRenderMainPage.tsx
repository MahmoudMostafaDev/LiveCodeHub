import React, { useMemo } from "react";
import type { continueLearningType, PopularType, MainVideoType } from "./useGetMainPageData";
import CourseCard from "@/.components/cards/CourseCard";
import ContinueLearning from "@/.components/cards/ContinueLearning";
import MainLesson from "@/.components/cards/MainLesson";



const useRenderMainPage = (continueLearning: continueLearningType, popular: PopularType, mainVideo: MainVideoType) => {

  function getPopularVideos(): React.JSX.Element[] | React.JSX.Element {
    console.log(popular.data);
    if (popular.isLoading) return <p>Loading...</p>;
    if (popular.error.message != "") console.log(popular.error.message);
    if (popular.data?.length) {
      return popular.data.map((course) => {
        return (
          <CourseCard
            key={course.id}
            title={course.name}
            description={course.description}
            image={course.thumbnail}
          />
        );
      });
    }
    return <></>;
  }
  function getContinueLearningVideos(): React.JSX.Element[] | React.JSX.Element {
    if (continueLearning.isLoading) return <p>Loading...</p>;
    if (continueLearning.error.message != "") console.log(continueLearning.error.message);
    if (continueLearning.data?.length) {
      return continueLearning.data.map((video) => {
        const finisherd = (video.lessonNumber / video.lesson.course.lessons) * 100;
        return (
          <ContinueLearning
            key={video.title}
            title={video.title}
            course={video.lesson.course.name}
            finished={finisherd}
            image={video.thumbnail}
          />
        );
      });
    }
    return <></>;
  }

  const continueLearningVideos = useMemo(() => continueLearning.data && continueLearning.data.length > 0 ?
    getContinueLearningVideos() : null, [continueLearning.data])

  const popularVideos = useMemo(() => popular.data && popular.data.length > 0 ?
    getPopularVideos() : null, [popular.data])
  const mainVideoRender = useMemo(() => mainVideo.data ?
    mainVideo.data ? <MainLesson courseName={mainVideo.data.lesson.course.name} lessonTitle={mainVideo.data.title} thumbnail={mainVideo.data.thumbnail} finished={mainVideo.data.lesson.course.lessons / mainVideo.data.lessonNumber * 100} lesson={mainVideo.data.lessonNumber} /> : <></> : null, [mainVideo.data]);
  return {
    continueLearningVideos,
    popularVideos,
    mainVideoRender
  }
};


export default useRenderMainPage;
