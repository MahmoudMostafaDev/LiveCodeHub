import React from "react";
import styles from "@/styles/components/cards/ContinueLearning.module.scss";
import Image from "next/image";
import CardVideo from './CardVideo';
interface props {
    title: string;
    course: string;
    finished: number;
    image: string
}
const ContinueLearning: React.FC<props> = ({ title, image, course, finished }) => {
    return (
        <div className={styles.card}>
            <CardVideo title={title} image={image} />
            <div className={styles.content}>
                <div className={styles.info}>
                    <h2>{title}</h2>
                    <p>
                        {course}
                    </p>
                </div>
                <p className={styles.finished}>Finished : {finished}%</p>
            </div>
        </div>
    );
};

export default ContinueLearning;
