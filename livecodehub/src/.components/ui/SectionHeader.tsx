import React from 'react';
import styles from "@/styles/components/ui/SectionHeader.module.scss";
const SectionHeader = ({ title, className }: { title: string, className?: string }) => {
    return (
        <h2 className={styles.header + " " + className}>{title}</h2>
    );
}

export default SectionHeader;
