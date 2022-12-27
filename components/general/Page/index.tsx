import React from 'react';
import { _cs } from '@togglecorp/fujs';
import Head from 'next/head';

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

    return (
        <div className={_cs(styles.page, className)}>
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
        </div>
    );
}

export default Page;
