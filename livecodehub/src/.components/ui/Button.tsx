import React, { HTMLAttributes } from 'react';
import styles from '@/styles/components/ui/Button.module.scss';

const Button = ({ title, style, ...props }: { title: string, style?: HTMLAttributes<HTMLButtonElement>['style'], [props: string]: any }) => {
    return (
        <button className={styles.button} style={style}  {...props} >
            {title}
        </button >
    );
}

export default Button;
