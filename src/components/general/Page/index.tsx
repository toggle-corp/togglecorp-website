import React, { useRef, useEffect, useState } from 'react';
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
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
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
                {showTopBtn && (
                    <FaArrowUp
                    className={styles.scrollTop}
                    onClick={goToTop}
                    size={24}
                />
                )}
            </div>
        </div>
    );
}

export default Page;
