import React from 'react';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.css';

interface Props {
    className?: string;
}

function Separator(props: Props) {
    const {
        className,
    } = props;

    return (
        <div className={_cs(styles.separator, className)} />
    );
}

export default Separator;
