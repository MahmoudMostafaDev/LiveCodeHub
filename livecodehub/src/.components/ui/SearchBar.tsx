import React from 'react';
import styles from "@/styles/components/ui/SearchBar.module.scss";
import Image from 'next/image';
const SearchBar = () => {
    return (
        <form action="" className={styles.search}>
            <input type="text" placeholder='Search' />
            <Image src="/utils/search.png" alt="search" width={18} height={18} />
        </form>
    );
}

export default SearchBar;
