import type { NextPage } from 'next';
import {
    IoIosArrowRoundBack,
    IoIosArrowRoundForward,
} from 'react-icons/io';
import WorkDetailsPage from '../../components/WorkDetailsPage';
import Page from '../../components/Page';
import Head from 'next/head';

import styles from './styles.module.css';

const WorkPage: NextPage = () => {
    return (
        <Page>
            <Head>
                <title>
                    Work page
                </title>
            </Head>
            <WorkDetailsPage />
            <div className={styles.routeLinks}>
                <a className={styles.projectLinks}
                    href='#'
                >
                    <IoIosArrowRoundBack />
                    HNO Support
                    <div className={styles.linkHeader}>
                        Data Friendly Support
                    </div>
                </a>
                <a className={styles.projectLinks}
                    href='#'
                >
                    COVID-19 Information Management
                    <IoIosArrowRoundForward />
                    <div className={styles.linkHeader}>
                        GIMAC with DFS
                    </div>
                </a>
            </div>
        </Page>
    );
}
export default WorkPage;
