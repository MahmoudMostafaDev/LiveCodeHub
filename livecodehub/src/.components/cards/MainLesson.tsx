import React from 'react';
import styles from "@/styles/components/cards/MainLesson.module.scss";
import CardVideo from './CardVideo';
interface props {
    title: string;
    description: string
    image: string
    finished: number
    lesson: number
}
const MainLesson: React.FC<props> = ({ title, description, image, finished, lesson }) => {
    return (
        <div className={styles.card}>
            <CardVideo title={title} image={image} />
            <div className={styles.content}>
                <div className={styles.info}>
                    <h2>{title}</h2>
                    <p>Start lesson ({lesson}) :{description} </p>
                </div>
                <p className={styles.finished}>Finished : {finished}%</p>
            </div>
        </div>
    );
}

export default MainLesson;
