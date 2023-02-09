import React from 'react';
import {
    IoLogoInstagram,
    IoLogoLinkedin,
    IoLogoGithub,
    IoLogoFacebook,
    IoLogoTwitter,
    IoGlobeOutline,
    IoLogoStackoverflow,
} from 'react-icons/io5';

import { _cs } from '@togglecorp/fujs';
import Link from 'next/link';

import styles from './styles.module.css';

interface EmployeeCardProps {
    className?: string;
    imageSrc?: string;
    href?: string;
    name: string;
    position: string;
    funnyDescription?: string;
    description?: string;
    linkedInLink?: string;
    instagramLink?: string;
    githubLink?: string;
    facebookLink?: string,
    blogLink?: string,
    twitterLink?: string,
    stackoverflowLink?: string,
    employeeCardLink?: string;
    variant?: 'list' | 'detail';
}

function EmployeeCard(props: EmployeeCardProps) {
    const {
        className,
        imageSrc = '',
        name,
        position,
        description,
        funnyDescription,
        linkedInLink,
        instagramLink,
        githubLink,
        facebookLink,
        blogLink,
        twitterLink,
        stackoverflowLink,
        employeeCardLink,
        href,
        variant = 'detail',
    } = props;

    const children = (
        <div
            className={_cs(
                styles.cardSection,
                (variant === 'list' && styles.list)
                || (variant === 'detail' && styles.detail),
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
                    {variant === 'list' && employeeCardLink && (
                        <Link
                            href={employeeCardLink}
                            passHref
                        >
                            <h5 className={styles.cardName}>
                                {name}
                            </h5>
                        </Link>
                    )}
                    <div className={styles.position}>
                        {position}
                    </div>
                </div>
                <div
                    title={description}
                >
                    {variant === 'list' && (
                        <div
                            className={styles.description}
                        >
                            {funnyDescription}
                        </div>
                    )}
                    {variant === 'detail' && (
                        <div>
                            {description}
                        </div>
                    )}

                </div>
                <div className={styles.socialMediaIcons}>
                    {(variant === 'detail' || linkedInLink) && (
                        <a
                            href={linkedInLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IoLogoLinkedin size={24} />
                        </a>
                    )}
                    {(variant === 'detail' || instagramLink) && (
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
                    {(variant === 'detail' || githubLink) && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IoLogoGithub
                                size={24}
                            />
                        </a>
                    )}
                    {(variant === 'detail' || facebookLink) && (
                        <a
                            href={facebookLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IoLogoFacebook
                                size={24}
                            />
                        </a>
                    )}
                    {(variant === 'detail' || twitterLink) && (
                        <a
                            href={twitterLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IoLogoTwitter
                                size={24}
                            />
                        </a>
                    )}
                    {(variant === 'detail' || stackoverflowLink) && (
                        <a
                            href={stackoverflowLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IoLogoStackoverflow
                                size={24}
                            />
                        </a>
                    )}
                    {(variant === 'detail' || blogLink) && (
                        <a
                            href={blogLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IoGlobeOutline
                                size={24}
                            />
                        </a>
                    )}
                </div>
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
