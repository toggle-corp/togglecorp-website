import React from 'react';
import Link from 'next/link';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { _cs } from '@togglecorp/fujs';

import Container from 'components/general/Container';

import styles from './styles.module.css';

interface Props {
    className?: string;
    backLinkTitle?: string;
    backLinkHref?: string;
    title?: string;
    stats?: React.ReactNode;
}

function Banner(props: Props) {
    const {
        className,
        backLinkTitle,
        backLinkHref,
        title,
        stats,
    } = props;

    return (
        <Container
            className={_cs(styles.banner, className)}
            contentClassName={styles.content}
        >
            {backLinkHref && (
                <Link
                    href={backLinkHref}
                    passHref
                >
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className={styles.backLink}>
                        <IoIosArrowRoundBack className={styles.icon} />
                        <div className={styles.label}>
                            {backLinkTitle}
                        </div>
                    </a>
                </Link>
            )}
            {/* NOTE: this is to increase gap */}
            <span />
            <h2>
                {title}
            </h2>
            {stats}
        </Container>
    );
}

export default Banner;
