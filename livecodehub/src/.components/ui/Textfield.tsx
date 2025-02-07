"use client";
import React, { forwardRef } from 'react';
import styles from '@/styles/components/ui/Textfield.module.scss';
import { ReactNode, useState } from 'react';
export type TextfieldProps = {
    title: string;
    name: string;
    type?: "text" | "password";
    children?: ReactNode;
}
const Textfield = forwardRef<HTMLInputElement, TextfieldProps>(({ title, name, type = "text", children = <></> }, ref) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const isUp = !isEmpty || isHovered || isFocused;
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.value) {
            setIsEmpty(false);
        } else {
            setIsEmpty(true);
        }
    }
    return (
        <div className={styles.textfield}>
            <label htmlFor={name} className={!isUp ? styles.labelDown : styles.labelUP}
                onPointerEnter={() => setIsHovered(true)}
                onPointerLeave={() => setIsHovered(false)}>{title}</label>
            <input ref={ref} type={type} id={name} name={name} onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onPointerEnter={() => setIsHovered(true)}
                onPointerLeave={() => setIsHovered(false)} />
            {children}
        </div>
    );
})

export default Textfield;
