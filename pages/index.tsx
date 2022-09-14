import type { NextPage } from 'next'
import Image from 'next/image';
import Head from 'next/head';

import Page from '../components/Page';

import styles from './styles.module.css'

interface TaskProps {
    title: React.ReactNode;
    summary: React.ReactNode;
}

function Task(props: TaskProps) {
    const {
        title,
        summary,
    } = props;

    return (
        <div className={styles.task}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.summary}>
                {summary}
            </div>
        </div>
    );
}

const Home: NextPage = () => {
    return (
        <Page className={styles.home}>
            <Head>
                <title>
                    Togglecorp - Home
                </title>
            </Head>
            <div className={styles.introSection}>
                <div className={styles.description}>
                    We assist humanitarian and development agencies help people reliably and efficiently.
                </div>
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
                <div className={styles.description}>
                    We work closely with several national and international clients and is focused primarily on the development and humanitarian communities
                </div>
                <Image
                    src="/tc-clients.png"
                    alt="Togglecorp clients"
                    width={1000}
                    height={400}
                />
            </div>
            <div className={styles.tasksSection}>
                <div className={styles.description}>
                    A team to assist you in all your technology and research needs
                </div>
                <div className={styles.taskList}>
                    <Task
                        title="Technology Design and Development"
                        summary="We design and develop systems of various complexities that run on web, mobile and desktop platforms."
                    />
                    <Task
                        title="Data Science and Visualization"
                        summary="We specialize in data analysis and visualization using statistics and machine learning technologies."
                    />
                    <Task
                        title="Data Research and Analysis"
                        summary="We carryout humanitarian driven secondary data review with a focus on qualitative data research, report writing and data analysis."
                    />
                    <Task
                        title="Consulting"
                        summary="We provide consultancy services regarding software architecture design, database design, programming practices and various technologies."
                    />
                </div>
            </div>
        </Page>
    )
}

export default Home
