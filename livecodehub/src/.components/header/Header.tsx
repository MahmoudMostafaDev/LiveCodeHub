"use client"
import React from 'react';
import Search from '@/.components/Search/Search'
import Image from 'next/image';
import styles from "@/styles/components/header/header.module.scss"
import { useAppDispatch, useAppSelector } from '@/lib/reduxHooks';
import { actions } from '@/features/controlUI/controlUISlice';
const Header = () => {
    const isSearchOpen = useAppSelector(state => state.controUI.search.isOpen);
    const dispatch = useAppDispatch();
    return (
        <div className={styles.header}>
            <button className={(isSearchOpen ? styles.searchOpened : '')} onClick={() => dispatch(actions.toogleSidebar())} >
                <Image src="/utils/Menu.png" alt='menu' width={40} height={40} />
            </button>
            <Search />
            <button className={isSearchOpen ? styles.searchOpened : ''} onClick={() => dispatch(actions.toogleUserBar())}>
                <Image src="/utils/person.png" alt='person' width={40} height={40} />
            </button>
        </div >
    );
}

export default Header;
