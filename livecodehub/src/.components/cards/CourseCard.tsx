import React from 'react';
import styles from "@/styles/components/cards/CourseCard.module.scss";
import CardVideo from './CardVideo';
interface props {
    title: string,
    image: string
    description: string
    finished?: number
}
const CourseCard: React.FC<props> = ({ title, image, description, finished = 0.1 }) => {
    return (
        <div className={styles.card}>
            <CardVideo title={title} image={image} />
            <div className={styles.info}>
                <h3>{title}</h3>
                {finished != 0.1 && <p className={styles.finished}>Finished :{finished} %</p>}
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}

export default CourseCard;
