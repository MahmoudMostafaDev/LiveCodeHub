"use client"
import React from 'react';
import styles from '@/styles/components/userBar/UserBar.module.scss';
import Image from 'next/image';

import { useAppDispatch, useAppSelector } from '@/lib/reduxHooks';
import { actions } from '../../features/controlUI/controlUISlice';
const UserBar = () => {
    const store = useAppSelector(state => state.controUI);
    const dispatch = useAppDispatch();
    return (
        <div className={styles.container + " " + (store.userBar.isOpen && styles.open)}>
            <button onClick={() => dispatch(actions.toogleUserBar())} className={styles.closeButton}>
                <Image src="/utils/arrowRight.png" width={30} height={30} alt="Profile Picture" className={styles.colse} />
            </button>
            <Image src="/utils/pf.png" width={100} height={100} alt="Profile Picture" />
            <h3>Username</h3>
            <p>Streak : 5</p>
            <p>TodatLessons : 10</p>
        </div>

    );
}

export default UserBar;
