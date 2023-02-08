import React from 'react';
import { _cs } from '@togglecorp/fujs';

import Container from 'components/general/Container';

import styles from './styles.module.css';

interface Props {
    className?: string;
    title?: React.ReactNode;
    titleClassName?: string;
    description?: React.ReactNode;
    imageUrl?: string;
    contentClassName?: string;
    stats?: React.ReactNode;
    mode?: 'dark' | 'light' | 'transparent';
    actions?: React.ReactNode;
    maps?: string;
}

function BannerWithImage(props: Props) {
    const {
        className,
        contentClassName,
        titleClassName,
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
                className={_cs(
                    styles.topSection,
                    mode === 'light' && styles.light,
                    mode === 'transparent' && styles.transparent,
                    mode === 'dark' && styles.dark,
                )}
                contentClassName={styles.content}
            >
                <div className={_cs(contentClassName, styles.bannerContent)}>
                    <div className={styles.left}>
                        <div className={_cs(titleClassName, styles.title)}>
                            {title}
                        </div>
                        <div className={styles.description}>
                            {description}
                        </div>
                        {actions}
                    </div>
                    {imageUrl && (
                        <img
                            className={_cs(styles.bannerImage)}
                            src={imageUrl}
                            alt={imageUrl ? title : ''}
                        />
                    )}
                </div>
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
                            title="togglecorpMap"
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
