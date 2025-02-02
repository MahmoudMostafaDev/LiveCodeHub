"use client"
import React from 'react';
import styles from "@/styles/components/ui/SearchBar.module.scss";
import Image from 'next/image';
import { useAppDispatch } from '@/lib/reduxHooks';
import { actions } from '@/features/controlUI/controlUISlice';
const SearchBar = ({ isOpen, searchValue }: { isOpen: boolean, searchValue: string }) => {
    const dispatch = useAppDispatch();
    return (
        <form onSubmit={(e) => e.preventDefault()} action="" className={styles.search + (!isOpen ? ' ' + styles.closed : '')}>
            <input onChange={(e) => dispatch(actions.setSearchValue(e.target.value))} value={searchValue} onFocus={() => dispatch(actions.foucusSearch())} type="text" placeholder='Search' />
            <Image src="/utils/search.png" alt="search" width={18} height={18} />
        </form>
    );
}

export default SearchBar;
