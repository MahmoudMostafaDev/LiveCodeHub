import React from 'react';
import styles from "@/styles/components/cards/CardViedo.module.scss";
import Image from 'next/image';
interface props {
    title: string;
    image: string
}
const CardVideo: React.FC<props> = ({ title, image }) => {
    return (
        <div className={styles.image}>
            <Image
                className={styles.videoThumbnail}
                src={image}
                alt={title}
                width={260}
                height={200}
            />
            <div className={styles.blure}></div>
            <Image
                className={styles.play}
                src={"/utils/videoIcon.png"}
                alt="title"
                width={40}
                height={40}
            />
        </div>
    );
}

export default CardVideo;
