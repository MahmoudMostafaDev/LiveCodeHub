"use client";
import styles from "./page.module.scss";
import MainLesson from '../.components/cards/MainLesson';
import ContinueLearning from '../.components/cards/ContinueLearning';
import CourseCard from '../.components/cards/CourseCard';
import MainPageSections from '../.components/Sections/MainPageSections';
import Header from "@/.components/header/Header";
import { error } from 'console';
import useGet from "@/lib/hooks/useGet";
import { getContinueLearning, getMainVideo, getPopularCourses } from "@/lib/FetchFunctions/GETfunctions";
import { JSX, useMemo } from "react";
import { mainVideo } from '../lib/FetchFunctions/GETfunctions';
import useGetMainPageData from "@/lib/hooks/useGetMainPageData";
import useRenderMainPage from "@/lib/hooks/useRenderMainPage";

export default function Home() {
  const mainData = useGetMainPageData();
  const { continueLearningVideos, popularVideos, mainVideoRender } = useRenderMainPage(mainData.continueLearning, mainData.popular, mainData.mainVideo);
  return (
    <div className={styles.container} >
      <Header />
      {mainVideoRender}
      <div className={styles.sections}>
        {continueLearningVideos && <MainPageSections title="Continue Learning" widthOfElement={280}  >
          {continueLearningVideos}
        </MainPageSections>}
        {popularVideos && <MainPageSections title="Popular" widthOfElement={280} >
          {popularVideos}
        </MainPageSections>}
      </div>
    </div>
  );
}
