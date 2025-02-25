import React from 'react';
import PaginationContainer from '../pagination/PaginationContainer';
import CourseCard from '../cards/CourseCard';
import PaginationGrid from '../pagination/PaginationGrid';

const ResultsContainer = () => {
    return (
        <div>
            <PaginationContainer>
                <PaginationGrid />
            </PaginationContainer>
        </div>
    );
}

export default ResultsContainer;
