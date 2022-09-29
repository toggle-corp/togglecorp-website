import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

import Head from 'next/head';
import { Button } from '../../components/Button';
import Page from '../../components/Page';
import {
    ApproachSection,
    ExpertiseDetail,
    ExpertiseSection,
    ResearchSection,
    ServiceSection,
} from '../../components/ServiceDetailsPage';

import styles from './styles.module.css';

const ServicePage: NextPage = () => {

    const [isActive, setIsActive] = useState(false);
    const [isActiveSecond, setIsActiveSecond] = useState(false);
    const [isActiveThird, setIsActiveThird] = useState(false);
    const [isActiveFourth, setIsActiveFourth] = useState(false);
    const [isActiveFifth, setIsActiveFifth] = useState(false);

    return (
        <Page>
            <Head>
                <title>
                    Service Page
                </title>
            </Head>
            <div className={styles.service}>
                <ServiceSection
                    heading="Research and Data Analysis"
                    subHeading="We conduct secondary data evaluations with a humanitarian focus on qualitative research, report writing and data analysis."
                    image={
                        <Image
                            src="/organization.png"
                            alt="Organization"
                            width={456}
                            height={552}
                        />
                    }
                />
                <div className={styles.softwareDetail}>
                    Also see:
                    <div className={styles.consultant}>
                        Software Developing, Consulting
                    </div>
                </div>
                <div className={styles.organizationImage}>
                    <div className={styles.organizationList}>
                        Humanitarian organizations we’ve worked with
                    </div>
                    <Image
                        src="/organization-list.png"
                        alt="Organization List"
                        width={1085}
                        height={127}
                    />
                </div>
                <div className={styles.deepDetail}>
                    <div className={styles.deepDetailDescription}>
                        Our in-house platform DEEP centralizes, accelerates and strengthens the inter-agency response to humanitarian crises. It hosts the largest analysis framework repository in the international humanitarian sector.
                        <div className={styles.knowDeep}>
                            <a href="/workpage">
                                Know more about DEEP
                                <IoIosArrowRoundForward />
                            </a>
                        </div>
                    </div>
                    <div className={styles.deepImage}>
                        <Image
                            src="/deep-primary-logo.png"
                            alt="Deep Primary Logo"
                            width={259}
                            height={259}
                        />
                    </div>
                </div>
                <div className={styles.expertise}>
                    <ExpertiseSection
                        heading="Our Expertise"
                        subHeading="We research, analyse, interpret and present data related to humanitarian crises"
                    />
                    <div className={styles.expertiseDetails}>
                        <ExpertiseDetail
                            icon={
                                <Image
                                    src="/planning.png"
                                    alt="Planning Logo"
                                    width={60}
                                    height={60}
                                />
                            }
                            description="We support humanitarian organizations in intervention planning, analyze past results and perform various analyses"
                        />
                        <ExpertiseDetail
                            icon={
                                <Image
                                    src="/monitoring.png"
                                    alt="Monitoring Logo"
                                    width={60}
                                    height={60}
                                />
                            }
                            description="We conduct periodic and continuous monitoring and evaluation of the humanitarian efforts in emergency response"
                        />
                    </div>
                </div>
                <div className={styles.approach}>
                    <ApproachSection
                        heading="Our Approach"
                        subHeading="We believe in effective data sharing and information management during any humanitarian crisis. Access to data is just the beginning."
                        image={
                            <Image
                                src="/dummy-image.png"
                                alt="Dummy Image"
                                width={350}
                                height={400}
                            />}
                        description={
                            <div>
                                <ol type="1">
                                    <li
                                        className={styles.descriptionHeading}
                                        onClick={() => setIsActive(!isActive)}
                                    >
                                        <div>{isActive ? 'Step 1: Data Extraction -' : 'Step 1: Data Extraction +'}</div>
                                    </li>
                                    {isActive && <div className={styles.approachDetailDescription}>
                                        We develop a list of sources that will provide credible information for collecting data. Sources include daily newspapers, academic reports, websites, journals, relevant documents provided by the organizations and infographics. The data from these sources are recorded into our in-house platform called DEEP for the second stage of our work.
                                    </div>
                                    }
                                    <hr
                                        className={styles.horizontalRow}
                                    />
                                    <li
                                        className={styles.descriptionHeading}
                                        onClick={() => setIsActiveSecond(!isActiveSecond)}
                                    >
                                        <div>{isActiveSecond ? 'Step 2: Data Segregation -' : 'Step 2: Data Segregation +'}</div>
                                    </li>
                                    {isActiveSecond && <div className={styles.approachDetailDescription}>
                                        We develop a list of sources that will provide credible information for collecting data. Sources include daily newspapers, academic reports, websites, journals, relevant documents provided by the organizations and infographics. The data from these sources are recorded into our in-house platform called DEEP for the second stage of our work.
                                    </div>
                                    }
                                    <hr
                                        className={styles.horizontalRow}
                                    />
                                    <li
                                        className={styles.descriptionHeading}
                                        onClick={() => setIsActiveThird(!isActiveThird)}
                                    >
                                        <div>{isActiveThird ? 'Step 3: Review and Analysis -' : 'Step 3: Review and Analysis +'}</div>
                                    </li>
                                    {isActiveThird && <div className={styles.approachDetailDescription}>
                                        We develop a list of sources that will provide credible information for collecting data. Sources include daily newspapers, academic reports, websites, journals, relevant documents provided by the organizations and infographics. The data from these sources are recorded into our in-house platform called DEEP for the second stage of our work.
                                    </div>
                                    }
                                    <hr
                                        className={styles.horizontalRow}
                                    />
                                    <li
                                        className={styles.descriptionHeading}
                                        onClick={() => setIsActiveFourth(!isActiveFourth)}
                                    >
                                        <div>{isActiveFourth ? 'Step 4: Monitoring and Evaluation -' : 'Step 4: Monitoring and Evaluation +'}</div>
                                    </li>
                                    {isActiveFourth && <div className={styles.approachDetailDescription}>
                                        We develop a list of sources that will provide credible information for collecting data. Sources include daily newspapers, academic reports, websites, journals, relevant documents provided by the organizations and infographics. The data from these sources are recorded into our in-house platform called DEEP for the second stage of our work.
                                    </div>
                                    }
                                    <hr
                                        className={styles.horizontalRow}
                                    />
                                    <li
                                        className={styles.descriptionHeading}
                                        onClick={() => setIsActiveFifth(!isActiveFifth)}
                                    >
                                        <div>{isActiveFifth ? 'Step 5: Write up -' : 'Step 4: Write up +'}</div>
                                    </li>
                                    {isActiveFifth && <div className={styles.approachDetailDescription}>
                                        We develop a list of sources that will provide credible information for collecting data. Sources include daily newspapers, academic reports, websites, journals, relevant documents provided by the organizations and infographics. The data from these sources are recorded into our in-house platform called DEEP for the second stage of our work.
                                    </div>
                                    }
                                    <hr
                                        className={styles.horizontalRow}
                                    />
                                </ol>
                            </div>
                        }
                    />
                </div>
                <ExpertiseSection
                    heading={undefined}
                    subHeading="Check our research works"
                />
                <div className={styles.researchButtons}>
                    <Button
                        className={styles.workButtons}
                        variant="default"
                    >
                        All Research Works
                    </Button>
                    <Button
                        className={styles.workButtons}
                        variant="default"
                    >
                        Secondary Data Review
                    </Button>
                    <Button
                        className={styles.workButtons}
                        variant="default"
                    >
                        Data Analysis
                    </Button>
                    <Button
                        className={styles.workButtons}
                        variant="default"
                    >
                        Report Writing
                    </Button>
                    <Button
                        className={styles.workButtons}
                        variant="default"
                    >
                        Monitoring and Evaluation
                    </Button>
                </div>
                <hr
                    className={styles.horizontalRow}
                />
                <div className={styles.researchList}>
                    <ResearchSection
                        image={
                            <Image
                                src="/dashboard.png"
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
                            <Image
                                src="/dashboard.png"
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
                <div className={styles.knowWork}>
                    <a href="/worklistpage">
                        See all of the works
                        <IoIosArrowRoundForward />
                    </a>
                </div>
            </div>
        </Page>
    );
}
export default ServicePage;
