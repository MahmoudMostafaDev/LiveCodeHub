"use client"
import React, { useEffect } from 'react';
import SearchBar from '../ui/SearchBar';
import styles from "@/styles/components/Search/search.module.scss"
import { useAppSelector, useAppDispatch } from '@/lib/reduxHooks';
import { actions } from '@/features/controlUI/controlUISlice';
const Search = () => {
    const { isOpen, isFoucused, searchValue } = useAppSelector(state => state.controUI.search);
    const dispatch = useAppDispatch();
    const ref = React.useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                dispatch(actions.closeSearch());
                dispatch(actions.blurSearch());
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    })
    return (
        <div ref={ref} onClick={() => dispatch(actions.openSearch())} className={styles.container + (isOpen ? ' ' + styles.opened : '') + (isFoucused ? ' ' + styles.foucused : '')}>
            <SearchBar isOpen={isOpen} searchValue={searchValue} />
            <ul>
                <li>Result 1</li>
                <li>Result 2</li>
                <li>Result 3</li>
                <li>Result 4</li>
                <li>Result 3</li>
            </ul>
        </div>
    );
}

export default Search;
