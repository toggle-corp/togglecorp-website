import React from 'react';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.css';

interface Props {
    id?: string;
    className?: string;
    contentClassName?: string;
    children?: React.ReactNode;
}

function Container(props: Props) {
    const {
        id,
        className,
        contentClassName,
        children,
    } = props;

    return (
        <div
            id={id}
            className={_cs(styles.container, className)}
        >
            <div className={_cs(styles.content, contentClassName)}>
                {children}
            </div>
        </div>
    );
}

export default Container;
