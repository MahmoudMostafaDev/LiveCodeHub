
import React from 'react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import styles from '@/styles/components/landing/Header.module.scss'
import Link from 'next/link';


const Header = () => {

    return (
        <div className={styles.header}>
            <Logo />
            <div className={styles.ctas}>
                <Link href='/auth/signup'><Button title='Sign Up' /></Link>
                <Link href='/auth/login'>  <Button title='Login' /></Link>
            </div>
        </div>
    );
}

export default Header;
