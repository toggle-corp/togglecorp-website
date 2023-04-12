import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.css';

interface Props {
    variant?: 'mini' | 'normal';
    className?: string;
    href?: string;
    imageSrc?: string | StaticImageData;
    title?: string;
    description?: string;
    tags?: string[];
}

function Card(props: Props) {
    const {
        variant = 'normal',
        className: classNameFromProps,
        imageSrc,
        title,
        description,
        tags,
        href,
    } = props;

    const children = (
        <>
            {imageSrc
                && (
                    <div className={styles.image}>
                        <Image
                            src={imageSrc}
                            alt={title}
                            objectFit="cover"
                        // FIXME: Need to set a condition here regarding svg or png
                        // placeholder="blur"
                        />
                    </div>
                )}
            <div className={styles.details}>
                {title && (
                    <h4>
                        {title}
                    </h4>
                )}
                {description && (
                    <div
                        className={styles.description}
                        title={description}
                    >
                        {description}
                    </div>
                )}
                {tags && tags.length > 0 && (
                    <div className={styles.tag}>
                        {tags.join(', ')}
                    </div>
                )}
            </div>
        </>
    );

    const className = _cs(
        styles.card,
        classNameFromProps,
        variant === 'normal' && styles.normal,
        variant === 'mini' && styles.mini,
    );

    if (!href) {
        return (
            <div className={className}>
                {children}
            </div>
        );
    }

    return (
        <Link
            href={href}
            passHref
        >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className={className}>
                {children}
            </a>
        </Link>
    );
}

export default Card;
