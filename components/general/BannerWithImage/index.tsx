import React from 'react';
import { _cs } from '@togglecorp/fujs';

import Container from 'components/general/Container';

import styles from './styles.module.css';

interface Props {
    className?: string;
    title?: string;
    description?: string;
    imageUrl?: string;
    stats?: React.ReactNode;
    mode?: 'dark' | 'light';
}

function BannerWithImage(props: Props) {
    const {
        className,
        title,
        description,
        imageUrl,
        stats,
        mode = 'dark',
    } = props;

    return (
        <div className={_cs(styles.bannerWithImage, !imageUrl && styles.noImage, className)}>
            <Container
                className={_cs(styles.topSection, mode === 'light' && styles.light)}
                contentClassName={styles.content}
            >
                <div className={styles.left}>
                    <div className={styles.title}>
                        {title}
                    </div>
                    <div className={styles.description}>
                        {description}
                    </div>
                </div>
                {imageUrl && (
                    <img
                        className={styles.bannerImage}
                        src={imageUrl}
                        alt={imageUrl ? title : ''}
                    />
                )}
            </Container>
            <Container
                className={styles.bottomSection}
                contentClassName={styles.content}
            >
                <div className={styles.statsContainer}>
                    {stats}
                </div>
            </Container>
        </div>
    );
}

export default BannerWithImage;
