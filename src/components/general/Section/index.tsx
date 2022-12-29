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
    centeredContent?: boolean;
}

function Section(props: Props) {
    const {
        className,
        title,
        description,
        children: childrenFromProps,
        actions,
        sideImageUrl,
        centeredContent,
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
                    <div className={styles.left}>
                        {predefinedContent}
                    </div>
                    <img
                        className={styles.sideImage}
                        src={sideImageUrl}
                        alt={title}
                    />
                </div>
                {childrenFromProps}
            </>
        );
    }

    return (
        <Container
            className={_cs(
                styles.section,
                centeredContent && styles.centeredContent,
                className,
            )}
            contentClassName={styles.content}
        >
            {children}
        </Container>
    );
}

export default Section;
