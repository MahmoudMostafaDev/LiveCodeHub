"use client"
import React from 'react';
import styles from "@/styles/components/Sidebar/Sidebar.module.scss"
import Logo from '../ui/Logo';
import Section from './Section';
import Image from 'next/image';
import { actions } from '@/features/controlUI/controlUISlice';
import { useAppDispatch, useAppSelector } from '@/lib/reduxHooks';
const Sidebar = () => {
    const dispatch = useAppDispatch();
    const { sidebar } = useAppSelector(state => state.controUI);

    const overviewSection = [
        {
            title: "Main page",
            image: "/utils/user.png"
        }, {
            title: "second page",
            image: "/utils/user.png",
            isActive: true
        }, {
            title: "third page",
            image: "/utils/user.png"
        },
    ]
    return (
        <div className={styles.container + " " + (sidebar.isOpen && styles.open)}>
            <button onClick={() => dispatch(actions.toogleSidebar())} className={styles.closeButton}>
                <Image src="/utils/arrowLeft.png" width={30} height={30} alt="Profile Picture" className={styles.colse} />
            </button>
            <div className={styles.sidebar}  >
                <Logo />
                <Section items={overviewSection} />
            </div>
        </div>
    );
}

export default Sidebar;
