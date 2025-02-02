"use client"
import React from 'react';
import Search from '@/.components/Search/Search'
import Image from 'next/image';
import styles from "@/styles/components/header/header.module.scss"
import { useAppDispatch } from '@/lib/reduxHooks';
import { actions } from '@/features/controlUI/controlUISlice';
const Header = () => {
    const dispatch = useAppDispatch();
    return (
        <div className={styles.header}>
            <button onClick={() => dispatch(actions.toogleSidebar())} >
                <Image src="/utils/Menu.png" alt='menu' width={40} height={40} />
            </button>
            <Search />
            <button onClick={() => dispatch(actions.toogleUserBar())}>
                <Image src="/utils/person.png" alt='person' width={40} height={40} />
            </button>
        </div >
    );
}

export default Header;
