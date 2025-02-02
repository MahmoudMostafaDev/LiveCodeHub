
import styles from "./page.module.scss";
import MainLesson from '../.components/cards/MainLesson';
import ContinueLearning from '../.components/cards/ContinueLearning';
import CourseCard from '../.components/cards/CourseCard';
import MainPageSections from '../.components/Sections/MainPageSections';
import Header from "@/.components/header/Header";

export default async function Home() {
  return (
    <div className={styles.container} >
      <Header />
      <MainLesson title="Main Lesson" description="Description" image="/Placeholders/video.png" finished={50} lesson={1} />
      <div className={styles.sections}>
        <MainPageSections title="Continue Learning" widthOfElement={280} >
          <ContinueLearning title="Continue Learning" course="Course" finished={50} image="/Placeholders/video.png" />
          <ContinueLearning title="Continue Learning" course="Course" finished={50} image="/Placeholders/video.png" />
          <ContinueLearning title="Continue Learning" course="Course" finished={50} image="/Placeholders/video.png" />
          <ContinueLearning title="Continue Learning" course="Course" finished={50} image="/Placeholders/video.png" />
          <ContinueLearning title="Continue Learning" course="Course" finished={50} image="/Placeholders/video.png" />
        </MainPageSections>
        <MainPageSections title="Popular" widthOfElement={280} >
          <>
            <CourseCard title="Course" image="/Placeholders/video.png" description="Description" finished={50} />
            <CourseCard title="Course" image="/Placeholders/video.png" description="Description" finished={50} />
            <CourseCard title="Course" image="/Placeholders/video.png" description="Description" finished={50} />
            <CourseCard title="Course" image="/Placeholders/video.png" description="Description" finished={50} />
            <CourseCard title="Course" image="/Placeholders/video.png" description="Description" finished={50} />
          </>
        </MainPageSections>
      </div>
    </div>
  );
}
