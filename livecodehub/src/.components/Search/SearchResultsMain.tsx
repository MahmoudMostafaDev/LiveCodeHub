import React from 'react';
import CourseCard from '@/.components/cards/CourseCard';
import styles from "@/styles/components/Search/SearchResultsMain.module.scss"
const SearchResultsMain = () => {
    return (
        <main className={styles.container} >
            <CourseCard title="Course" image="/Placeholders/video.png" description="Description" finished={50} />
            <CourseCard title="Course" image="/Placeholders/video.png" description="Description" finished={50} />
            <CourseCard title="Course" image="/Placeholders/video.png" description="Description" finished={50} />
            <CourseCard title="Course" image="/Placeholders/video.png" description="Description" finished={50} />
            <CourseCard title="Course" image="/Placeholders/video.png" description="Description" finished={50} />
        </main>
    );
}

export default SearchResultsMain;
