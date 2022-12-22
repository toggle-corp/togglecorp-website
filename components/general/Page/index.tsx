import React from 'react';
import { _cs } from '@togglecorp/fujs';
import Head from 'next/head';

import Navbar from 'components/general/Navbar';
import Footer from 'components/general/Footer';
import Container from 'components/general/Container';

import styles from './styles.module.css';

interface Props {
    className?: string;
    children: React.ReactNode;
    banner?: React.ReactNode;
    pageTitle: string;
}

function Page(props: Props) {
    const {
        className,
        children,
        banner,
        pageTitle = 'Togglecorp',
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
            <Container className={styles.mainContent}>
                {children}
            </Container>
            <Footer />
        </div>
    );
}

export default Page;
