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
    actions?: React.ReactNode;
    maps?: string;
}

function BannerWithImage(props: Props) {
    const {
        className,
        title,
        description,
        imageUrl,
        stats,
        mode = 'dark',
        actions,
        maps,
    } = props;

    return (
        <div className={_cs(styles.bannerWithImage, !imageUrl && styles.noImage, className)}>
            <Container
                className={_cs(styles.topSection, mode === 'light' && styles.light)}
                contentClassName={styles.content}
            >
                <div className={styles.left}>
                    <span />
                    <span />
                    <span />
                    <div className={styles.title}>
                        {title}
                    </div>
                    <div className={styles.description}>
                        {description}
                    </div>
                    {actions}
                </div>
                {imageUrl && (
                    <img
                        className={styles.bannerImage}
                        src={imageUrl}
                        alt={imageUrl ? title : ''}
                    />
                )}
            </Container>
            {stats && (
                <Container
                    className={styles.bottomSection}
                    contentClassName={styles.content}
                >
                    <div className={styles.statsContainer}>
                        {stats}
                    </div>
                </Container>
            )}
            {!stats && imageUrl && (
                <div className={styles.reserveHeight} />
            )}
            {maps && (
                <Container
                    className={styles.mapSection}
                >
                    <div className={styles.mapOuter}>
                        <iframe
                            className={styles.gmapIframe}
                            title="gaathaMap"
                            width={1150}
                            height={450}
                            id="gmap_canvas"
                            src={maps}
                            frameBorder="0"
                        />
                    </div>
                </Container>
            )}
        </div>
    );
}

export default BannerWithImage;
