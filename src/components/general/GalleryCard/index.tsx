import React from 'react';
import { _cs } from '@togglecorp/fujs';
import Image, { StaticImageData } from 'next/image';

import styles from './styles.module.css';

interface Props {
    className?: string;
    imageUrl: string | StaticImageData;
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
            <div className={caption ? styles.image : styles.imageWithoutCaption}>
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    placeholder="blur"
                />
            </div>
            {caption && (
                <div className={styles.captionDescription}>
                    {caption}
                </div>
            )}
        </div>
    );
}

export default GalleryCard;
