import React from 'react';
import styles from "@/styles/components/Sidebar/Sidebar.module.scss"
import Logo from '../ui/Logo';
import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader';
import Section from './Section';
import { itemData } from './Section';
const Sidebar = () => {
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
        <div className={styles.container}>
            <div className={styles.sidebar} >
                <Logo />
                <Section items={overviewSection} />
            </div>
        </div>
    );
}

export default Sidebar;
