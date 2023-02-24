import React from 'react';
import { _cs } from '@togglecorp/fujs';
import Link from 'next/link';

import styles from './styles.module.css';

interface Props {
    className?: string;
    label?: string;
    value?: number | string;
    valueHref?: string;
    projectCount?: number | string;
}

function KeyFigure(props: Props) {
    const {
        className,
        label,
        value: valueFromProps,
        valueHref,
        projectCount,
    } = props;

    const value = valueHref ? (
        <Link href={valueHref}>
            {valueFromProps}
        </Link>
    ) : valueFromProps;

    return (
        <div
            className={_cs(
                styles.keyFigure,
                typeof valueFromProps === 'string' && styles.stringValue,
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
            <div
                className={styles.projectCount}
            >
                {projectCount}
            </div>
        </div>
    );
}

export default KeyFigure;
