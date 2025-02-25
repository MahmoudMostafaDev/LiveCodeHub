import React from 'react';
import CourseCard from '../cards/CourseCard';
import styles from "@/styles/components/Pagination/Pagination.module.scss";
const PaginationGrid = () => {
    return (
        <ul className={styles.grid}>
            <li><CourseCard title='Title' description='Description' image=':' /> </li>
            <li><CourseCard title='Title' description='Description' image=':' /> </li>
            <li><CourseCard title='Title' description='Description' image=':' /> </li>
            <li><CourseCard title='Title' description='Description' image=':' /> </li>
            <li><CourseCard title='Title' description='Description' image=':' /> </li>
            <li><CourseCard title='Title' description='Description' image=':' /> </li>
        </ul>

    );
}

export default PaginationGrid;
