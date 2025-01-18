import React from 'react';
import Image from 'next/image';
import logo from "../../../public/Main/logo1.png";
import styles from '@/styles/components/ui/Logo.module.scss'
const Logo = () => {
    return (
        <div>
            <div className={styles.logo}>
                <Image src={logo} alt="logo" width={56} height={56} />
                <h1>LiveCodeHub</h1>
            </div>
        </div>
    );
}

export default Logo;
