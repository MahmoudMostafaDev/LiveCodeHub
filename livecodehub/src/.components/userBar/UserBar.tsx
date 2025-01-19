import React from 'react';
import styles from '@/styles/components/userBar/UserBar.module.scss';
import Image from 'next/image';
const UserBar = () => {
    return (
        <div className={styles.container}>
            <Image src="/utils/pf.png" width={100} height={100} alt="Profile Picture" />
            <h3>Username</h3>
            <p>Streak : 5</p>
            <p>TodatLessons : 10</p>
        </div>
    );
}

export default UserBar;
