import React from 'react';
import styles from "@/styles/components/Sidebar/Sidebar.module.scss"
import Image from 'next/image';
const Item = ({ active, title, image }: { active: boolean, title: string, image: string }) => {
    return (
        <li className={active && styles.active || ""}>
            <Image src={image} width={25} height={25} alt="e" />
            <span>{title}</span>
        </li>
    );
}

export default Item;
