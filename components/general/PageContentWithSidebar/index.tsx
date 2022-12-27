import React from 'react';
import { _cs } from '@togglecorp/fujs';
import Link from 'next/link';
import {
    IoIosArrowRoundBack,
    IoIosArrowRoundForward,
} from 'react-icons/io';

import Container from 'components/general/Container';

import styles from './styles.module.css';

interface PageDetails {
    url: string;
    title: string;
    description: string;
}

interface Props {
    className?: string;
    previewImageUrl?: string;
    sideBarContent?: React.ReactNode;
    children?: React.ReactNode;
    prevPageDetails?: PageDetails;
    nextPageDetails?: PageDetails;
}

function PageContentWithSidebar(props: Props) {
    const {
        className,
        previewImageUrl,
        sideBarContent,
        children,
        prevPageDetails,
        nextPageDetails,
    } = props;

    return (
        <Container
            className={_cs(styles.pageContentWithSidebar, className)}
            contentClassName={styles.containerContent}
        >
            {previewImageUrl && (
                <img
                    className={styles.previewImage}
                    src={previewImageUrl}
                    alt="preview"
                />
            )}
            <div className={styles.pageContent}>
                <div className={styles.sideBarContainer}>
                    {sideBarContent}
                </div>
                <div className={styles.mainContent}>
                    {children}
                </div>
            </div>
            {(prevPageDetails || nextPageDetails) && (
                <>
                    <hr className={styles.divider} />
                    <div className={styles.prevNextLinks}>
                        <div>
                            {prevPageDetails && (
                                <Link
                                    href={prevPageDetails.url}
                                    passHref
                                >
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a className={styles.link}>
                                        <IoIosArrowRoundBack className={styles.icon} />
                                        <div className={styles.text}>
                                            <div className={styles.projectTitle}>
                                                {prevPageDetails.title}
                                            </div>
                                            <div>
                                                {prevPageDetails.description}
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            )}
                        </div>
                        <div className={styles.nextLink}>
                            {nextPageDetails && (
                                <Link
                                    href={nextPageDetails.url}
                                    passHref
                                >
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a className={styles.link}>
                                        <div className={styles.text}>
                                            <div className={styles.projectTitle}>
                                                {nextPageDetails.title}
                                            </div>
                                            <div>
                                                {nextPageDetails.description}
                                            </div>
                                        </div>
                                        <IoIosArrowRoundForward className={styles.icon} />
                                    </a>
                                </Link>
                            )}
                        </div>
                    </div>
                </>
            )}
        </Container>
    );
}

export default PageContentWithSidebar;
