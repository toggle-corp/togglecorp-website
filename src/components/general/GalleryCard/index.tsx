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
        <div
            className={
                _cs(
                    styles.galleryCard,
                    !caption && styles.withoutCaption,
                    className,
                )
            }
        >
            <div className={styles.imageContainer}>
                <Image
                    className={styles.image}
                    src={imageUrl}
                    alt={imageAlt}
                    placeholder="blur"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            {caption && (
                <div className={styles.caption}>
                    {caption}
                </div>
            )}
        </div>
    );
}

export default GalleryCard;
