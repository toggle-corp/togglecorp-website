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
    image: React.ReactNode;
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
        image,
        name,
        position,
        description,
        date,
        linkedInLink,
        instagramLink,
    } = props;

    return (
        <div className={_cs(styles.cardSection, className)}>
            {image}
            <div className={styles.employeeContainer}>
                <div>
                    <h4>
                        {name}
                    </h4>
                    <div className={styles.employeePosition}>
                        {position}
                    </div>
                </div>
                <div>
                    {description}
                </div>
                <div
                    className={styles.horizontalRow}
                />
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
                            <IoLogoLinkedin
                                size={24}
                            />
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
