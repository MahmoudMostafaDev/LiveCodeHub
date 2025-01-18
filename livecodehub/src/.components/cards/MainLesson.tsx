import React from 'react';
import styles from "@/styles/components/cards/MainLesson.module.scss";
import Image from 'next/image';
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
            <div className={styles.image}>
                <Image className={styles.videoThumbnail} src={image} alt="title" width={260} height={200} />
                <div className={styles.blure}></div>
                <Image className={styles.play} src={"/utils/videoIcon.png"} alt="title" width={40} height={40} />
            </div>
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
