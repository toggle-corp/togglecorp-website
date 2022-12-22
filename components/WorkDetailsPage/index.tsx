import React from 'react';
import { _cs } from '@togglecorp/fujs';
import Link from 'next/link';
import { IoIosArrowRoundBack } from 'react-icons/io';

import styles from './styles.module.css';

interface CaseStudyProps {
    className?: string;
    image: React.ReactNode;
    heading: React.ReactNode;
    description: React.ReactNode;
    link: React.ReactNode;
}

// NOTE: used in work page
export function CaseStudy(props: CaseStudyProps) {
    const {
        className,
        heading,
        description,
        image,
        link,
    } = props;

    return (
        <div className={_cs(styles.modal, className)}>
            <div className={styles.modalSection}>
                <div className={styles.modalImage}>
                    {image}
                </div>
                <div>
                    <div className={styles.modalTitle}>
                        {heading}
                    </div>
                    <div className={styles.modalDescription}>
                        {description}
                    </div>
                </div>
            </div>
            <hr className={styles.horizontalRow} />
            <div className={styles.viewLink}>
                {link}
            </div>
        </div>
    );
}

interface ProjectSectionProps {
    className?: string;
    title: React.ReactNode;
    summary: React.ReactNode;
}

// NOTE: used in blog and work page
export function ProjectSection(props: ProjectSectionProps) {
    const {
        className,
        title,
        summary,
    } = props;

    return (
        <div className={_cs(styles.detailSection, className)}>
            <div className={styles.aboutDetail}>
                <div className={styles.aboutPage}>
                    {title}
                </div>
                <div className={styles.detailDescription}>
                    {summary}
                </div>
            </div>
        </div>
    );
}

interface SidePaneItemProps {
    className?: string;
    title: React.ReactNode;
    subtitle: React.ReactNode;
}

// NOTE: used in work page
export function SidePaneItem(props: SidePaneItemProps) {
    const {
        className,
        title,
        subtitle,
    } = props;

    return (
        <div className={_cs(styles.detailSection, className)}>
            <div className={styles.detailPage}>
                <div className={styles.fakeLink}>
                    {title}
                </div>
                <div className={styles.fakeDescription}>
                    {subtitle}
                </div>
            </div>
        </div>
    );
}

interface HeadingProps {
    className?: string;
    title: string;
    duration: string;
    summary: string;
    backLink: string;
    backLinkContent: React.ReactNode;
    leftTitle: string;
    rightTitle: string;
}

// NOTE: used in work page
export function Heading(props: HeadingProps) {
    const {
        className,
        title,
        duration,
        summary,
        backLink,
        backLinkContent,
        leftTitle,
        rightTitle,
    } = props;

    return (
        <div className={_cs(styles.analysisSection, className)}>
            <Link
                href={backLink}
                passHref
            >
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                    className={styles.projectLinks}
                >
                    <IoIosArrowRoundBack size={22} />
                    {backLinkContent}
                </a>
            </Link>
            <div className={styles.description}>
                {title}
            </div>
            <div className={styles.links}>
                <div>
                    <div className={styles.fakeLink}>
                        {leftTitle}
                    </div>
                    <div className={styles.fakeDescription}>
                        {duration}
                    </div>
                </div>
                <div>
                    <div className={styles.fakeLink}>
                        {rightTitle}
                    </div>
                    <div className={styles.fakeDescription}>
                        {summary}
                    </div>
                </div>
            </div>
        </div>
    );
}
