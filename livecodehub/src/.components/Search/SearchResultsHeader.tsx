"use client"
import React from 'react';
import { actions } from '@/features/controlUI/controlUISlice';
import { useAppDispatch, useAppSelector } from '@/lib/reduxHooks';
import styles from "@/styles/components/Search/SearchResultsHeader.module.scss"
const SearchResultsHeader = ({ pages, results }: { pages: number, results: number }) => {
    const { currentPage } = useAppSelector(state => state.controUI.search);
    const dispatch = useAppDispatch();
    return (
        <header className={styles.container}>
            <h2>{results} Results</h2>
            <ul>
                {currentPage === 1 ? (
                    <>  <li className={styles.active}>1</li>
                        {pages > 1 && <li onClick={() => dispatch(actions.setCurrentPage(2))} >2</li>}
                        {pages > 2 && <li onClick={() => dispatch(actions.setCurrentPage(3))}>3</li>}
                    </>
                ) : currentPage > 1 && currentPage < pages ? (
                    <>
                        <li onClick={() => dispatch(actions.setCurrentPage(currentPage - 1))}>{currentPage - 1}</li>
                        <li className={styles.active}>{currentPage}</li>
                        <li onClick={() => dispatch(actions.setCurrentPage(currentPage + 1))}>{currentPage + 1}</li>
                    </>
                ) : (
                    <>
                        <li onClick={() => dispatch(actions.setCurrentPage(currentPage - 2))}>{currentPage - 2}</li>
                        <li onClick={() => dispatch(actions.setCurrentPage(currentPage - 1))}>{currentPage - 1}</li>
                        <li className={styles.active}>{currentPage}</li>
                    </>
                )}
                {currentPage < pages - 1 && <li onClick={() => dispatch(actions.setCurrentPage(pages))}>...{pages}</li>
                }</ul>
        </header>
    );
}

export default SearchResultsHeader;
