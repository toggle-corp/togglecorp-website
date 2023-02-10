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
        <div className={_cs(styles.galleryCard, className)}>
            <img
                className={styles.image}
                alt={imageAlt}
                src={imageUrl}
            />
            <div>
                {caption}
            </div>
        </div>
    );
}

export default GalleryCard;
