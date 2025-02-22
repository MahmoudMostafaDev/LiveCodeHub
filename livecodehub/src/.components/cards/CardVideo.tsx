"use client"
import React, { useState } from 'react';
import styles from "@/styles/components/cards/CardViedo.module.scss";
import Image from 'next/image';
interface props {
    title: string;
    image: string
}
const CardVideo: React.FC<props> = ({ title, image }) => {
    const [showImage, setShowImage] = useState(image.startsWith("http") ? image : `/${image}`);
    function onErrorHandler() {
        setShowImage("/Placeholders/video.png");
    }
    return (
        <div className={styles.image}>
            <Image
                className={styles.videoThumbnail}
                src={showImage}
                alt={title}
                width={260}
                height={200}
                onError={onErrorHandler}
                onErrorCapture={onErrorHandler}
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
