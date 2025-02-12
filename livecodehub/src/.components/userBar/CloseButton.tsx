"use client"
import React from 'react';
import Image from 'next/image';
import styles from '@/styles/components/userBar/UserBar.module.scss';
import { useAppDispatch } from '../../lib/reduxHooks';
import { actions } from '../../features/controlUI/controlUISlice';
const CloseButton = () => {
    const dispatch = useAppDispatch();
    return (
        <button onClick={() => dispatch(actions.toogleUserBar())} className={styles.closeButton}>
            <Image src="/utils/arrowRight.png" width={30} height={30} alt="Profile Picture" className={styles.close} />
        </button>
    );
}

export default CloseButton;
