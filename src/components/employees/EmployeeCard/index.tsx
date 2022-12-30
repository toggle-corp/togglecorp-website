import React from 'react';
import { IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io';
import { _cs } from '@togglecorp/fujs';
import Link from 'next/link';

import styles from './styles.module.css';

// FIXME: move this to utils
const dateFormatter = new Intl.DateTimeFormat('default', {
    year: 'numeric',
    month: 'short',
});

interface EmployeeCardProps {
    className?: string;
    imageSrc?: string;
    href?: string;
    name: string;
    position: string;
    description: string;
    date: string;
    linkedInLink?: string;
    instagramLink?: string;
    variant?: 'list' | 'detail';
}

function EmployeeCard(props: EmployeeCardProps) {
    const {
        className,
        imageSrc = '',
        name,
        position,
        description,
        date,
        linkedInLink,
        instagramLink,
        href,
        variant = 'detail',
    } = props;

    const children = (
        <div
            className={_cs(
                styles.cardSection,
                variant === 'list' && styles.list,
                className,
            )}
        >
            <img
                className={styles.displayImage}
                src={imageSrc}
                alt={name}
            />
            <div className={styles.details}>
                <div>
                    {variant === 'detail' && (
                        <h3>
                            {name}
                        </h3>
                    )}
                    {variant === 'list' && (
                        <h5>
                            {name}
                        </h5>
                    )}
                    <div className={styles.position}>
                        {position}
                    </div>
                </div>
                <div
                    className={styles.description}
                    title={description}
                >
                    {description}
                </div>
                <div className={styles.employeeDate}>
                    Joined on:
                    {' '}
                    {dateFormatter.format(Date.parse(date))}
                </div>
                {(linkedInLink || instagramLink) && (
                    <div className={styles.socialMediaIcons}>
                        {linkedInLink && (
                            <a
                                href={linkedInLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IoLogoLinkedin size={24} />
                            </a>
                        )}
                        {instagramLink && (
                            <a
                                href={instagramLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IoLogoInstagram
                                    size={24}
                                />
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
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

export default EmployeeCard;
