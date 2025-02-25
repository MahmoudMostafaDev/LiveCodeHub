import React from 'react';
import styles from "./page.module.scss";
import Header from '@/.components/header/Header';
import ResultsContainer from '../../.components/Results/ResultsContainer';
const Page = () => {
    return (
        <div className={styles.container}>
            <Header />
            <ResultsContainer />
        </div>
    );
}

export default Page;
