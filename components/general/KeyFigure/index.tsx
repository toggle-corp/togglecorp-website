import React from 'react';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.css';

interface Props {
    className?: string;
    label?: string;
    value?: number | string;
}

function KeyFigure(props: Props) {
    const {
        className,
        label,
        value,
    } = props;

    return (
        <div
            className={_cs(
                styles.keyFigure,
                typeof value === 'string' && styles.stringValue,
                className,
            )}
        >
            <div className={styles.label}>
                {label}
            </div>
            <div
                className={styles.value}
            >
                {value}
            </div>
        </div>
    );
}

export default KeyFigure;
