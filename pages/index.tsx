import Head from 'next/head';

import Page from 'components/general/Page';
import TaskItem from 'components/home/TaskItem';

import clientsIcon from 'resources/tc-clients.webp';

import styles from './styles.module.css';

function Home() {
    return (
        <Page className={styles.home}>
            <Head>
                <title>
                    Togglecorp - Home
                </title>
            </Head>
            <div className={styles.introSection}>
                <h1 className={styles.description}>
                    {/* eslint-disable-next-line max-len */}
                    We assist humanitarian and development agencies help people reliably and efficiently.
                </h1>
                <div className={styles.links}>
                    <div className={styles.fakeLink}>
                        Tech Development
                    </div>
                    <div className={styles.fakeLink}>
                        •
                    </div>
                    <div className={styles.fakeLink}>
                        Research and Analysis
                    </div>
                    <div className={styles.fakeLink}>
                        •
                    </div>
                    <div className={styles.fakeLink}>
                        Consulting
                    </div>
                </div>
            </div>
            <div className={styles.clientsSection}>
                <h3 className={styles.description}>
                    {/* eslint-disable-next-line max-len */}
                    We work closely with several national and international clients and is focused primarily on the development and humanitarian communities
                </h3>
                <img
                    className={styles.toggleClientImg}
                    src={clientsIcon}
                    alt="Clients"
                    width={1000}
                    height={350}
                />
            </div>
            <div className={styles.tasksSection}>
                <h2 className={styles.description}>
                    A team to assist you in all your technology and research needs
                </h2>
                <div className={styles.taskList}>
                    <TaskItem
                        className={styles.task}
                        title="Technology Design and Development"
                        summary="We design and develop systems of various complexities that run on web, mobile and desktop platforms."
                    />
                    <TaskItem
                        className={styles.task}
                        title="Data Science and Visualization"
                        summary="We specialize in data analysis and visualization using statistics and machine learning technologies."
                    />
                    <TaskItem
                        className={styles.task}
                        title="Data Research and Analysis"
                        summary="We carryout humanitarian driven secondary data review with a focus on qualitative data research, report writing and data analysis."
                    />
                    <TaskItem
                        className={styles.task}
                        title="Consulting"
                        summary="We provide consultancy services regarding software architecture design, database design, programming practices and various technologies."
                    />
                </div>
            </div>
        </Page>
    );
}

export default Home;
