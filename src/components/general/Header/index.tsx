import React from 'react';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.css';

interface Props {
    className?: string;
    title?: string;
    description?: number | string;
}

function Header(props: Props) {
    const {
        className,
        title,
        description,
    } = props;

    return (
        <div className={_cs(styles.header, className)}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    );
}

export default Header;
