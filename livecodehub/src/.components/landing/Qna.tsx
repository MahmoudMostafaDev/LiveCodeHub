import React from 'react';
import Answer from './Answer';
import styles from "@/styles/components/landing/Qna.module.scss";
const Questions = [
    {
        title: "Live Interactive Sessions",
        description: "Experience real-time coding with expert teachers. Ask questions, get instant feedback, and master coding together"
    },
    {
        title: "Seamless Learning Experience",
        description: `Our platform is optimized for all devices – whether you’re on a laptop, tablet, or mobile.
Flexible & Accessible`
    },
    {
        title: "Flexible & Accessible",
        description: "Join sessions anytime, from anywhere, with easy access to scheduled live sessions."
    },
    {
        title: "Engaging Features",
        points: [
            "Live coding environments",
            "Instant Q&A with teachers",
            "Real-time code corrections"]
    }
]
const Qna = () => {
    return (
        <div className={styles.qna}>
            <h2>Why Choose LiveCodeHub ?!</h2>
            <div className={styles.answers}>
                {Questions.map((item, index) => <Answer key={index} index={index + 1} title={item.title} description={item.description} points={item.points} />)}
            </div>
        </div>
    );
}

export default Qna;
