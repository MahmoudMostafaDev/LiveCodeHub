import React from 'react';
import styles from "@/styles/components/Pagination/Pagination.module.scss"


const Pagination = ({ pages, currentPage }: { pages: number, currentPage: number }) => {
    let pagesArray: number[] = [];
    if (currentPage === 1) {
        for (let i = 1; i <= pages && i <= 3; i++) {
            pagesArray.push(i);
        }
        if (pages > 3) {
            pagesArray.push(pages);
        }
    } else if (currentPage > pages - 2) {
        for (let i = pages - 3; i <= pages; i++) {
            if (i <= 0) continue
            pagesArray.push(i);
        }
    } else {
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            if (i <= 0) continue
            pagesArray.push(i);
        }
        pagesArray.push(pages);
    }
    return (
        <div className={styles.pagination}>
            {pagesArray.map((page, index) => {
                return (
                    <div key={page} className={styles.page + " " + (page === currentPage ? styles.active : "")}>{index === 3 && page !== currentPage ? `...${page}` : page}</div>
                );
            })}
        </div>
    );
}

export default Pagination;
