import React, { HTMLAttributes } from 'react';
import styles from '@/styles/components/ui/Button.module.scss';
const Button = ({ title, style }: { title: string, style?: HTMLAttributes<HTMLButtonElement>['style'] }) => {
    return (
        <button className={styles.button} style={style}>
            {title}
        </button >
    );
}

export default Button;
