import type { NextPage } from 'next'
import Image from 'next/image';
import {
    IoIosArrowRoundBack,
    IoIosArrowRoundForward,
} from 'react-icons/io';
import WorkDetailsPage, {
    Description,
    MainContent,
    Modal,
    Title,
    Heading,
    SidePane,
} from '../../components/WorkDetailsPage';
import Page from '../../components/Page';
import { Button } from '../../components/Button';

import styles from './styles.module.css';

const WorkPage: NextPage = () => {
    return (
        <Page>
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
    )
}
export default WorkPage;
