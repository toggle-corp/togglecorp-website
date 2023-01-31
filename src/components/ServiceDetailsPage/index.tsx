import React from 'react';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.css';

// FIXME: move these elsewhere
export const buttons = [
    {
        value: 'all research works',
        name: 'All Research Works',
    },
    {
        value: 'secondary data review',
        name: 'Secondary Data Review',
    },
    {
        value: 'data analysis',
        name: 'Data Analysis',
    },
    {
        value: 'report writing',
        name: 'Report Writing',
    },
    {
        value: 'monitoring and evaluation',
        name: 'Monitoring and Evaluation',
    },
];

// FIXME: move these elsewhere
export const works = [
    {
        id: 1,
        value: 'all research works',
        name: 'All Research Works',
    },
    {
        id: 2,
        name: 'Secondary Data Review',
        value: 'secondary data review',
    },
    {
        id: 3,
        name: 'Data Analysis',
        value: 'data analysis',
    },
    {
        id: 4,
        name: 'Report Writing',
        value: 'report writing',
    },
    {
        id: 5,
        name: 'Monitoring and Evaluation',
        value: 'monitoring and evaluation',
    },
];

// FIXME: move these elsewhere
export function filterWork(workType: any) {
    const filteredWork = works.filter((type) => type.name === workType);
    return filteredWork;
}

interface ExpertiseSectionProps {
    className?: string;
    heading: React.ReactNode;
    subHeading: string;
}

// NOTE: used in services page
export function ExpertiseSection(props: ExpertiseSectionProps) {
    const {
        className,
        heading,
        subHeading,
    } = props;
    return (
        <div className={_cs(styles.expertiseSection, className)}>
            <div className={styles.expertiseSubheading}>
                <div className={styles.expertiseHeading}>
                    {heading}
                </div>
                {subHeading}
            </div>
        </div>
    );
}

interface ResearchSectionProps {
    className?: string;
    image: React.ReactNode;
    heading: React.ReactNode;
    description: React.ReactNode;
    title: React.ReactNode;
    link?: string;
}

// NOTE: used in about-us, blogs, services page
export function ResearchSection(props: ResearchSectionProps) {
    const {
        className,
        image,
        heading,
        description,
        title,
        link,
    } = props;

    return (
        <div className={_cs(styles.researchModal, className)}>
            {/* FIXME: maybe use Link */}
            <a
                href={link}
            >
                <div className={styles.modalImage}>
                    {image}
                </div>
                <div className={styles.modalHeading}>
                    {heading}
                </div>
                <div className={styles.modalDescription}>
                    <p>
                        {' '}
                        {description}
                        {' '}
                    </p>
                </div>
                <div className={styles.modalTitle}>
                    {title}
                </div>
            </a>
        </div>
    );
}

interface ApproachSectionProps {
    className?: string;
    heading: string;
    subHeading: string;
    image: React.ReactNode;
    description: React.ReactNode;
}

// NOTE: used in about-us, services page
export function ApproachSection(props: ApproachSectionProps) {
    const {
        className,
        heading,
        subHeading,
        image,
        description,
    } = props;
    return (
        <div className={_cs(styles.approachSection, className)}>
            <div className={styles.approachHeading}>
                {heading}
            </div>
            <div className={styles.approachSubheading}>
                {subHeading}
            </div>
            <div className={styles.approachDescription}>
                <div className={styles.description}>
                    {description}
                </div>
                <div>
                    {image}
                </div>
            </div>
        </div>
    );
}

interface ExpertiseDetailProps {
    className?: string;
    icon: React.ReactNode;
    description: string;
    title: React.ReactNode;
}

// NOTE: used in about-us, services page
export function ExpertiseDetail(props: ExpertiseDetailProps) {
    const {
        className,
        icon,
        title,
        description,
    } = props;
    return (
        <div className={_cs(styles.expertiseDetail, className)}>
            <div className={styles.expertiseDescription}>
                {icon}
                <div className={styles.expertiseTitle}>
                    {title}
                </div>
                <div className={styles.iconDescription}>
                    {description}
                </div>
            </div>
        </div>
    );
}
