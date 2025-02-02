import React from 'react';
import SearchBar from '../ui/SearchBar';
import styles from "@/styles/components/Search/search.module.scss"

const Search = () => {
    return (
        <div className={styles.container}>
            <SearchBar />
        </div>
    );
}

export default Search;
