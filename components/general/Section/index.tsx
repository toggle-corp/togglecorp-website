import React from 'react';
import { _cs } from '@togglecorp/fujs';

import Container from 'components/general/Container';
import styles from './styles.module.css';

interface Props {
    className?: string;
    title?: string;
    description?: string;
    actions?: React.ReactNode;
    children: React.ReactNode;
    sideImageUrl?: string;
}

function Section(props: Props) {
    const {
        className,
        title,
        description,
        children: childrenFromProps,
        actions,
        sideImageUrl,
    } = props;

    const predefinedContent = (
        <>
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
            {actions}
        </>
    );

    let children = (
        <>
            {predefinedContent}
            {childrenFromProps}
        </>
    );

    if (sideImageUrl) {
        children = (
            <>
                <div className={styles.predefinedContainer}>
                    <img
                        className={styles.sideImage}
                        src={sideImageUrl}
                        alt={title}
                    />
                    <div className={styles.left}>
                        {predefinedContent}
                    </div>
                </div>
                {childrenFromProps}
            </>
        );
    }

    return (
        <Container
            className={_cs(styles.section, className)}
            contentClassName={styles.content}
        >
            {children}
        </Container>
    );
}

export default Section;
