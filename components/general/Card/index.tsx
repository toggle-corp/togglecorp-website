import React from 'react';
import Link from 'next/link';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.css';

interface Props {
    variant?: 'mini' | 'normal';
    className?: string;
    href?: string;
    imageSrc?: string;
    title?: string;
    description?: string;
    tag?: string;
}

function Card(props: Props) {
    const {
        variant = 'normal',
        className: classNameFromProps,
        imageSrc,
        title,
        description,
        tag,
        href,
    } = props;

    const children = (
        <>
            <img
                className={styles.image}
                src={imageSrc}
                alt={title}
            />
            <div className={styles.details}>
                <h4 className={styles.title}>
                    {title}
                </h4>
                <div
                    className={styles.description}
                    title={description}
                >
                    {description}
                </div>
                {tag && (
                    <>
                        <div className={styles.spacer} />
                        <div className={styles.tag}>
                            {tag}
                        </div>
                    </>
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
