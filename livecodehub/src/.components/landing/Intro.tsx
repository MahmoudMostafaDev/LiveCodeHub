import React from 'react';
import styles from "@/styles/components/landing/Intro.module.scss"
import Image from 'next/image';
import landing from "../../../public/Main/landing.png";
import Button from '../ui/Button';
import Link from 'next/link';
const Intro = () => {
    return (
        <div className={styles.intro}>
            <div className={styles.content}>
                <h2>Learn, Code, and Grow with Live
                    Interactive Sessions!</h2>
                <p>Join a dynamic platform designed for teachers and students to engage in real-time coding sessions. Whether you're a student eager to learn or a teacher looking to guide, LiveCodeHub offers the perfect environment to enhance your coding skills.</p>
                <Link href='/auth/signup'> <Button title='Start Now' /></Link>
            </div>
            <Image src={landing} alt="landing" width={385} height={385} />
        </div>
    );
}

export default Intro;
