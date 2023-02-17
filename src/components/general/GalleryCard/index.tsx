import React from 'react';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.css';

interface Props {
    className?: string;
    imageUrl: string;
    imageAlt?: string;
    caption?: React.ReactNode;
}

// NOTE: used in about-us page
function GalleryCard(props: Props) {
    const {
        className,
        imageUrl,
        caption,
        imageAlt,
    } = props;

    return (
        <div className={caption
            ? _cs(styles.galleryCardWithCaption, className)
            : _cs(styles.galleryCard, className)}
        >
            <img
                className={caption ? styles.image : styles.imageWithoutCaption}
                alt={imageAlt}
                src={imageUrl}
            />
            {caption && (
                <div className={styles.captionDescription}>
                    {caption}
                </div>
            )}
        </div>
    );
}

export default GalleryCard;
