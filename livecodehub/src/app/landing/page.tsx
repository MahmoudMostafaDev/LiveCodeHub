import Header from '@/.components/landing/Header';
import React from 'react';
import Intro from '@/.components/landing/Intro';
import styles from "./page.module.scss";
import Qna from '../../.components/landing/Qna';
const Page = () => {
    return (
        <div className={styles.page}>
            <Header />
            <Intro />
            <Qna />
        </div>
    );
}

export default Page;
