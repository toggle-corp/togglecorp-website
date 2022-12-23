import React from 'react';
import { _cs } from '@togglecorp/fujs';

import Container from 'components/general/Container';
import styles from './styles.module.css';

interface Props {
    className?: string;
    title?: string;
    description?: string;
    children: React.ReactNode;
}

function Section(props: Props) {
    const {
        className,
        title,
        description,
        children,
    } = props;

    return (
        <Container
            className={_cs(styles.section, className)}
            contentClassName={styles.content}
        >
            {title && (
                <h5 className={styles.title}>
                    {title}
                </h5>
            )}
            {description && (
                <div className={styles.description}>
                    {description}
                </div>
            )}
            {children}
        </Container>
    );
}

export default Section;
