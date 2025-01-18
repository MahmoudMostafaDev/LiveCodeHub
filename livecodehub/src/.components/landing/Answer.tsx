import React from 'react';
import styles from "@/styles/components/landing/Qna.module.scss";
const Answer = ({ index, title, description, points }: { index: number, title: string, description?: string, points?: string[] }) => {
    return (
        <div className={styles.answer}>
            <h3>{index}. {title}</h3>
            <p>{description}</p>
            {points && points.map((point, index) => <li key={index}>{point}</li>)}
        </div>
    );
}

export default Answer;
