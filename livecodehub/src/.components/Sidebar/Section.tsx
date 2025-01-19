import React from 'react';
import styles from "@/styles/components/Sidebar/Sidebar.module.scss"
import SectionHeader from '../ui/SectionHeader';
import Item from './Item';
export type itemData = {
    title: string,
    image: string
    isActive?: boolean
}
const Section = ({ items }: { items: itemData[] }) => {
    return (
        <div>
            <SectionHeader title="Overview" className={styles.header} />
            <ul>
                {items.map((item, index) => (
                    <Item key={index} active={item.isActive || false} title={item.title} image={item.image} />
                ))}
            </ul>
        </div>
    );
}

export default Section;
