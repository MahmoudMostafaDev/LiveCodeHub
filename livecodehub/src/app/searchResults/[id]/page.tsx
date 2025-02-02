
import Header from '@/.components/header/Header';
import styles from "./page.module.scss";
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/reduxHooks';
import SearchResultsHeader from '../../../.components/Search/SearchResultsHeader';
import SearchResultsMain from '../../../.components/Search/SearchResultsMain';

const Page = () => {
    return (
        <div className={styles.container} >
            <Header />
            <div className={styles.results}>
                <SearchResultsHeader pages={5} results={10} />
                <SearchResultsMain />
            </div>
        </div>
    );
}

export default Page;
