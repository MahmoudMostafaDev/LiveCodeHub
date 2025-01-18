import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Logo from '../ui/Logo';
import styles from '@/styles/components/auth/IntroSection.module.scss'
/*
    should put into screen that divided into two sections
*/
const IntroSection = ({ photo, text }: { photo: StaticImageData, text: string }) => {
    return (
        <div className={styles.intro}>
            <Logo />
            <div className={styles.content}>  <h2>{text}</h2>
                <Image src={photo} alt="login" /></div>

        </div>
    );
}

export default IntroSection;
