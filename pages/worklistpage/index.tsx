import type { NextPage } from 'next';
import Head from 'next/head';
// import Image from 'next/image';
import Page from '../../components/Page';
import { ResearchSection } from '../../components/ServiceDetailsPage';
import { ProjectDetail, WorkListSection } from '../../components/WorkDetailsListPage';

import styles from './styles.module.css';

const WorkListPage: NextPage = () => {
    return (
        <Page>
            <Head>
                <title>
                    Work List Page
                </title>
            </Head>
            <div className={styles.workList}>
                <WorkListSection
                    heading="Our Work"
                    subHeading="We work closely with several national and international humanitarian organizations."
                    image={
                        <img
                            src="/organization.png"
                            alt="Organization"
                            width={456}
                            height={552}
                        />
                    }
                />
                <div className={styles.projectDetail}>
                    <ProjectDetail
                        projectCompleted="25"
                        organizationSupport="8"
                    />
                </div>
                <div className={styles.links}>
                    <div className={styles.fakeLink}>
                        All Work
                    </div>
                    <div className={styles.fakePoint}>
                        •
                    </div>
                    <div className={styles.fakeLink}>
                        Research
                    </div>
                    <div className={styles.fakePoint}>
                        •
                    </div>
                    <div className={styles.fakeLink}>
                        Development
                    </div>
                    <div className={styles.fakePoint}>
                        •
                    </div>
                    <div className={styles.fakeLink}>
                        Consulting
                    </div>
                </div>
                <hr
                    className={styles.horizontalRow}
                />
                <div className={styles.researchList}>
                    <ResearchSection
                        image={
                            <img
                                src="/work-list-1.png"
                                alt="Deep Dashboard"
                                width={580}
                                height={250}
                            />
                        }
                        heading="Refugee Situational Analysis"
                        description="The project is focused on monitoring Turkey’s refugee crisis and the refugee influx in Turkey which constitute mostly Syrian refugees."
                        title="Data Analysis"
                    />
                    <ResearchSection
                        image={undefined}
                        heading="Refugee Situational Analysis"
                        description="The project is focused on monitoring Turkey’s refugee crisis and the refugee influx in Turkey which constitute mostly Syrian refugees."
                        title="Data Analysis"
                    />
                </div>
                <div className={styles.researchList}>
                    <ResearchSection
                        image={undefined}
                        heading="Refugee Situational Analysis"
                        description="The project is focused on monitoring Turkey’s refugee crisis and the refugee influx in Turkey which constitute mostly Syrian refugees."
                        title="Data Analysis"
                    />
                    <ResearchSection
                        image={
                            <img
                                src="/work-list-2.png"
                                alt="Deep Dashboard"
                                width={580}
                                height={250}
                            />
                        }
                        heading="Refugee Situational Analysis"
                        description="The project is focused on monitoring Turkey’s refugee crisis and the refugee influx in Turkey which constitute mostly Syrian refugees."
                        title="Data Analysis"
                    />
                </div>
                <div className={styles.researchList}>
                    <ResearchSection
                        image={
                            <img
                                src="/work-list-1.png"
                                alt="Deep Dashboard"
                                width={580}
                                height={250}
                            />
                        }
                        heading="Refugee Situational Analysis"
                        description="The project is focused on monitoring Turkey’s refugee crisis and the refugee influx in Turkey which constitute mostly Syrian refugees."
                        title="Data Analysis"
                    />
                    <ResearchSection
                        image={undefined}
                        heading="Refugee Situational Analysis"
                        description="The project is focused on monitoring Turkey’s refugee crisis and the refugee influx in Turkey which constitute mostly Syrian refugees."
                        title="Data Analysis"
                    />
                </div>
                <div className={styles.researchList}>
                    <ResearchSection
                        image={undefined}
                        heading="Refugee Situational Analysis"
                        description="The project is focused on monitoring Turkey’s refugee crisis and the refugee influx in Turkey which constitute mostly Syrian refugees."
                        title="Data Analysis"
                    />
                    <ResearchSection
                        image={
                            <img
                                src="/work-list-2.png"
                                alt="Deep Dashboard"
                                width={580}
                                height={250}
                            />
                        }
                        heading="Refugee Situational Analysis"
                        description="The project is focused on monitoring Turkey’s refugee crisis and the refugee influx in Turkey which constitute mostly Syrian refugees."
                        title="Data Analysis"
                    />
                </div>
            </div>
        </Page>
    );
}
export default WorkListPage;
