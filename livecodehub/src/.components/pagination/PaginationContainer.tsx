import React from 'react';
import styles from "@/styles/components/Pagination/Pagination.module.scss"
import Pagination from "./Pagination";
const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>214 Results</h2>
                <Pagination pages={44} currentPage={1} />
            </div>
            <div className={styles.content}>
                <div className={styles.body}>
                    {children}
                </div>
                <Pagination pages={44} currentPage={1} />
            </div>

        </div>
    );
}

export default Container;
