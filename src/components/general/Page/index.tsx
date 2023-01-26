import React, { useRef } from 'react';
import { _cs } from '@togglecorp/fujs';
import Head from 'next/head';
import { FaArrowUp } from 'react-icons/fa';

import Navbar from 'components/general/Navbar';
import Footer from 'components/general/Footer';

import styles from './styles.module.css';

interface Props {
    className?: string;
    children: React.ReactNode;
    banner?: React.ReactNode;
    pageTitle: string;
    mainContentClassName?: string;
}

function Page(props: Props) {
    const {
        className,
        children,
        banner,
        pageTitle = 'Togglecorp',
        mainContentClassName,
    } = props;

    const ref = useRef<HTMLDivElement>(null);

    const goToTop = () => {
        if (ref.current) {
            ref.current.scrollIntoView({
                block: 'start',
                inline: 'nearest',
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={_cs(styles.page, className)} ref={ref}>
            <Head>
                <title>
                    {pageTitle}
                </title>
            </Head>
            <Navbar />
            {banner}
            <div className={_cs(styles.mainContent, mainContentClassName)}>
                {children}
            </div>
            <Footer />
            <div className={styles.scrollTopButton}>
                <FaArrowUp
                    className={styles.scrollTop}
                    onClick={goToTop}
                    size={24}
                />
            </div>
        </div>
    );
}

export default Page;
