"use client"
import React, { forwardRef, useMemo } from 'react';
import Textfield from './Textfield';
import classes from "@/styles/components/ui/Textfield.module.scss"

import { TextfieldProps } from './Textfield';
const Passwordfield = forwardRef<HTMLInputElement, TextfieldProps>(({ name, title }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const EyeIconClosed = useMemo(() => <svg onClick={handleClick} width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.1924 5.8075C15.5542 4.55879 13.5595 3.86701 11.4999 3.83334C4.79158 3.83334 0.958252 11.5 0.958252 11.5C2.15031 13.7215 3.80367 15.6624 5.80742 17.1925M9.48742 18.9367C10.1471 19.0911 10.8224 19.1683 11.4999 19.1667C18.2083 19.1667 22.0416 11.5 22.0416 11.5C21.4599 10.4117 20.7661 9.38713 19.9716 8.44292M13.5316 9.46834C13.2684 9.18587 12.951 8.95931 12.5983 8.80218C12.2456 8.64504 11.8649 8.56055 11.4789 8.55374C11.0929 8.54692 10.7094 8.61793 10.3515 8.76253C9.99347 8.90713 9.66828 9.12235 9.39527 9.39536C9.12227 9.66836 8.90704 9.99356 8.76245 10.3515C8.61785 10.7095 8.54684 11.093 8.55365 11.479C8.56046 11.865 8.64496 12.2457 8.80209 12.5984C8.95923 12.9511 9.18579 13.2685 9.46825 13.5317M0.958252 22.0417L22.0416 0.958336" stroke="#EBEBEB" strokeLinecap="round" strokeLinejoin="round" />
    </svg>, []);
    const EyeIconOpen = useMemo(() => <svg onClick={handleClick} width="23" height="23" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 24C2 24 10 8 24 8C38 8 46 24 46 24C46 24 38 40 24 40C10 40 2 24 2 24Z" stroke="#EBEBEB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z" stroke="#EBEBEB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    </svg>, []);
    function handleClick() {
        setIsOpen((isOpen) => !isOpen);
    }
    return (
        <Textfield ref={ref} title={title} name={name} type={isOpen ? "text" : "password"} >
            <div className={classes.eye}>
                {isOpen ? EyeIconOpen : EyeIconClosed}
            </div>
        </Textfield>
    );
}
)
export default Passwordfield;
