import React from 'react';
import styles from "@/styles/components/cards/MainLesson.module.scss";
import CardVideo from './CardVideo';
interface props {
    courseName: string;
    lessonTitle: string
    thumbnail: string
    finished: number
    lesson: number
}
const MainLesson: React.FC<props> = ({ courseName, lessonTitle, thumbnail, finished, lesson }) => {
    return (
        <div className={styles.card}>
            <CardVideo title={courseName} image={thumbnail} />
            <div className={styles.content}>
                <div className={styles.info}>
                    <h2>{courseName}</h2>
                    <p>Start lesson ({lesson}) :{lessonTitle} </p>
                </div>
                <p className={styles.finished}>Finished : {finished}%</p>
            </div>
        </div>
    );
}

export default MainLesson;
