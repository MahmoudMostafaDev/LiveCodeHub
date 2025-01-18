import Image from 'next/image';
import React from 'react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import styles from '@/styles/components/landing/Header.module.scss'

const Header = () => {
    return (
        <div className={styles.header}>
            <Logo />
            <div className={styles.ctas}>
                <Button title='Sign Up' />
                <Button title='Login' />
            </div>
        </div>
    );
}

export default Header;
