import React from 'react';
import styles from "@/styles/components/ui/SectionHeader.module.scss";
const SectionHeader = ({ title }: { title: string }) => {
    return (
        <h2 className={styles.header}>{title}</h2>
    );
}

export default SectionHeader;
