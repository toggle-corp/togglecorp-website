import React from 'react';
import { IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.css';

// FIXME: move this to utils
const dateFormatter = new Intl.DateTimeFormat('default', {
    year: 'numeric',
    month: 'short',
});

interface EmployeeCardProps {
    className?: string;
    imageSrc: string;
    name: string;
    position: string;
    description: string;
    date: string;
    linkedInLink?: string;
    instagramLink?: string;
}

function EmployeeCard(props: EmployeeCardProps) {
    const {
        className,
        imageSrc,
        name,
        position,
        description,
        date,
        linkedInLink,
        instagramLink,
    } = props;

    return (
        <div className={_cs(styles.cardSection, className)}>
            <img
                className={styles.displayImage}
                src={imageSrc}
                alt={name}
            />
            <div className={styles.details}>
                <div>
                    <h3>
                        {name}
                    </h3>
                    <div className={styles.position}>
                        {position}
                    </div>
                </div>
                <div className={styles.description}>
                    {description}
                </div>
                <div className={styles.horizontalRow} />
                <div className={styles.employeeDate}>
                    Joined Togglecorp on
                    {' '}
                    {dateFormatter.format(Date.parse(date))}
                </div>
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
            </div>
        </div>
    );
}

export default EmployeeCard;
