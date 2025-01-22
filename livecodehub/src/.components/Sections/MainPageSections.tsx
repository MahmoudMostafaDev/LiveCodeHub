"use client"
import React from 'react';
import styles from "@/styles/components/Sections/MainPageSections.module.scss";
import SectionHeader from '../ui/SectionHeader';

interface MainPageSectionsProps {
    widthOfElement: number;
    children: React.ReactNode
    title: string
}
const MainPageSections: React.FC<MainPageSectionsProps> = ({ title, widthOfElement, children }) => {
    const ref = React.useRef<HTMLUListElement>(null);
    function handleScrolRightlbtn() {
        /* 
            -scrollFormEnd : where the edge of the container is from the end of the scrollable area
            -currentFromEnd : how many elements are from the end of the scrollable area
            -limit : is the position of the of element in the scrollable area 
                if widthOfElement = 200 , then the first element will be at 0 , second at 200 , third at 400
            -difference : the distance between the limit and the scrollFromEnd (edge of container)
                -if it's greater than 70 then we need to scroll to the next element since
                    since large different indicate that big part of the element is shown 
                -if it's smaller than 70 then we need to scroll to the element since it's not totally visible in containe
            -Where to scroll = (desired element - 1) * widthOfElement
        */
        if (ref.current) {
            const scrollFromEnd = ref.current.scrollLeft + ref.current.clientWidth;
            const currentFromEnd = Math.ceil(scrollFromEnd / widthOfElement);
            const limit = (currentFromEnd - 1) * widthOfElement;
            const difference = scrollFromEnd - limit;
            if (difference > 70) {
                const nextScroll = (currentFromEnd) * widthOfElement;
                ref.current.scrollTo({ left: nextScroll, behavior: "smooth" });
            } else {
                const nextScroll = (currentFromEnd - 1) * widthOfElement;
                ref.current.scrollTo({ left: nextScroll, behavior: "smooth" });
            }
        }
    }
    function handleScrolLeftlbtn() {
        /*
            -current : is the index of element on the left of the screen
            -limit : is the position of the of element in the scrollable area 
                if widthOfElement = 200 , then the first element will be at 0 , second at 200 , third at 400
            -difference : the distance between the limit and the current scroll from left
                -if it's greater than 70 then we need to scroll to current element to make it fully visible
                -if it's smaller than 70 then we need to scroll to pervious element since big part of current is visible
            -Where to scroll = (desired element - 1) * widthOfElement
        */
        if (ref.current) {
            const current = Math.ceil(ref.current.scrollLeft / widthOfElement);
            const limit = (current - 1) * widthOfElement;
            const difference = ref.current.scrollLeft - limit;
            if (difference > 70) {
                const nextScroll = (current - 1) * widthOfElement;
                ref.current.scrollTo({ left: nextScroll, behavior: "smooth" });
            } else {
                const nextScroll = (current - 1 - 1) * widthOfElement;
                ref.current.scrollTo({ left: nextScroll, behavior: "smooth" });
            }
        }

    }
    return (
        <div className={styles.container}>
            <SectionHeader title={title} className={styles.header} />
            <ul ref={ref} >
                {React.Children.map(children, (child) => {
                    return (
                        <li>
                            {child}
                        </li>
                    );
                })}
            </ul>
            <button className={styles.leftbtn} onClick={handleScrolLeftlbtn}></button>
            <button className={styles.rightbtn} onClick={handleScrolRightlbtn}></button>
        </div>
    );
}

export default MainPageSections;
