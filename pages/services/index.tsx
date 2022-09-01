import React, {
    useMemo,
    useState,
} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { IoIosArrowRoundForward } from 'react-icons/io';

import services from 'data.json';
import Button from 'components/general/Button';
import Page from 'components/general/Page';
import {
    ApproachSection,
    ExpertiseDetail,
    ExpertiseSection,
    ResearchSection,
} from 'components/ServiceDetailsPage';
import BannerWithImage from 'components/general/BannerWithImage';

import organizationLogo from 'resources/organization.webp';
import organizationListLogo from 'resources/organization-list.webp';
import deepPrimaryLogo from 'resources/deep-primary-logo.png';
import planningLogo from 'resources/planning.png';
import monitoringLogo from 'resources/monitoring.png';
import dummyImage from 'resources/dummy-image.webp';
import workListOne from 'resources/work-list-1.webp';

import styles from './styles.module.css';

export const buttons = [
    {
        name: 'All Research Works',
        value: 'all',
    },
    {
        name: 'Secondary Data Review',
        value: 'secondary',
    },
    {
        name: 'Data Analysis',
        value: 'data',
    },
    {
        name: 'Report Writing',
        value: 'report',
    },
    {
        name: 'Monitoring and Evaluation',
        value: 'monitoring',
    },
];

function Service() {
    const [isActive, setIsActive] = useState(false);
    const [isActiveSecond, setIsActiveSecond] = useState(false);
    const [isActiveThird, setIsActiveThird] = useState(false);
    const [isActiveFourth, setIsActiveFourth] = useState(false);
    const [isActiveFifth, setIsActiveFifth] = useState(false);

    const [filteredServiceType, setFilteredServiceType] = useState<string>('all');

    const filteredProjects = useMemo(() => {
        if (filteredServiceType === 'all') {
            return services.service;
        }
        return services.service.filter((service) => service.researchType === filteredServiceType);
    }, [filteredServiceType]);

    return (
        <Page
            banner={(
                <BannerWithImage
                    title="Research and Data Analysis"
                    imageUrl={organizationLogo}
                    description="We conduct secondary data evaluations with a humanitarian focus on qualitative research, report writing and data analysis."
                    mode="light"
                />
            )}
        >
            <Head>
                <title>
                    Service
                </title>
            </Head>
            <div className={styles.service}>
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
                    <img
                        className={styles.organizationImg}
                        src={organizationListLogo}
                        alt="Organization List"
                        width={1085}
                        height={127}
                    />
                </div>
                <div className={styles.deepDetail}>
                    <div className={styles.deepDetailDescription}>
                        {/* eslint-disable-next-line max-len */}
                        Our in-house platform DEEP centralizes, accelerates and strengthens the inter-agency response to humanitarian crises. It hosts the largest analysis framework repository in the international humanitarian sector.
                        <div className={styles.knowDeep}>
                            <Link
                                href="/works"
                                passHref
                            >
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a>
                                    Know more about DEEP
                                    <IoIosArrowRoundForward />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.deepImage}>
                        <img
                            src={deepPrimaryLogo}
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
                            icon={(
                                <img
                                    src={planningLogo}
                                    alt="Planning Logo"
                                    width={60}
                                    height={60}
                                />
                            )}
                            title={undefined}
                            description="We support humanitarian organizations in intervention planning, analyze past results and perform various analyses"
                        />
                        <ExpertiseDetail
                            icon={(
                                <img
                                    src={monitoringLogo}
                                    alt="Monitoring Logo"
                                    width={60}
                                    height={60}
                                />
                            )}
                            title={undefined}
                            description="We conduct periodic and continuous monitoring and evaluation of the humanitarian efforts in emergency response"
                        />
                    </div>
                </div>
                <div className={styles.approach}>
                    <ApproachSection
                        heading="Our Approach"
                        subHeading="We believe in effective data sharing and information management during any humanitarian crisis. Access to data is just the beginning."
                        image={(
                            <img
                                src={dummyImage}
                                alt="Dummy"
                                width={350}
                                height={400}
                            />
                        )}
                        description={(
                            <div>
                                <ol type="1">
                                    <li
                                        role="presentation"
                                        className={styles.descriptionHeading}
                                        onClick={() => setIsActive(!isActive)}
                                    >
                                        <div>{isActive ? 'Step 1: Data Extraction -' : 'Step 1: Data Extraction +'}</div>
                                    </li>
                                    {isActive && (
                                        <div className={styles.approachDetailDescription}>
                                            {/* eslint-disable-next-line max-len */}
                                            We develop a list of sources that will provide credible information for collecting data. Sources include daily newspapers, academic reports, websites, journals, relevant documents provided by the organizations and infographics. The data from these sources are recorded into our in-house platform called DEEP for the second stage of our work.
                                        </div>
                                    )}
                                    <hr
                                        className={styles.horizontalRow}
                                    />
                                    <li
                                        role="presentation"
                                        className={styles.descriptionHeading}
                                        onClick={() => setIsActiveSecond(!isActiveSecond)}
                                    >
                                        <div>{isActiveSecond ? 'Step 2: Data Segregation -' : 'Step 2: Data Segregation +'}</div>
                                    </li>
                                    {isActiveSecond && (
                                        <div className={styles.approachDetailDescription}>
                                            {/* eslint-disable-next-line max-len */}
                                            We develop a list of sources that will provide credible information for collecting data. Sources include daily newspapers, academic reports, websites, journals, relevant documents provided by the organizations and infographics. The data from these sources are recorded into our in-house platform called DEEP for the second stage of our work.
                                        </div>
                                    )}
                                    <hr
                                        className={styles.horizontalRow}
                                    />
                                    <li
                                        role="presentation"
                                        className={styles.descriptionHeading}
                                        onClick={() => setIsActiveThird(!isActiveThird)}
                                    >
                                        <div>{isActiveThird ? 'Step 3: Review and Analysis -' : 'Step 3: Review and Analysis +'}</div>
                                    </li>
                                    {isActiveThird && (
                                        <div className={styles.approachDetailDescription}>
                                            {/* eslint-disable-next-line max-len */}
                                            We develop a list of sources that will provide credible information for collecting data. Sources include daily newspapers, academic reports, websites, journals, relevant documents provided by the organizations and infographics. The data from these sources are recorded into our in-house platform called DEEP for the second stage of our work.
                                        </div>
                                    )}
                                    <hr
                                        className={styles.horizontalRow}
                                    />
                                    <li
                                        role="presentation"
                                        className={styles.descriptionHeading}
                                        onClick={() => setIsActiveFourth(!isActiveFourth)}
                                    >
                                        <div>{isActiveFourth ? 'Step 4: Monitoring and Evaluation -' : 'Step 4: Monitoring and Evaluation +'}</div>
                                    </li>
                                    {isActiveFourth && (
                                        <div className={styles.approachDetailDescription}>
                                            {/* eslint-disable-next-line max-len */}
                                            We develop a list of sources that will provide credible information for collecting data. Sources include daily newspapers, academic reports, websites, journals, relevant documents provided by the organizations and infographics. The data from these sources are recorded into our in-house platform called DEEP for the second stage of our work.
                                        </div>
                                    )}
                                    <hr
                                        className={styles.horizontalRow}
                                    />
                                    <li
                                        role="presentation"
                                        className={styles.descriptionHeading}
                                        onClick={() => setIsActiveFifth(!isActiveFifth)}
                                    >
                                        <div>{isActiveFifth ? 'Step 5: Write up -' : 'Step 5: Write up +'}</div>
                                    </li>
                                    {isActiveFifth && (
                                        <div className={styles.approachDetailDescription}>
                                            {/* eslint-disable-next-line max-len */}
                                            We develop a list of sources that will provide credible information for collecting data. Sources include daily newspapers, academic reports, websites, journals, relevant documents provided by the organizations and infographics. The data from these sources are recorded into our in-house platform called DEEP for the second stage of our work.
                                        </div>
                                    )}
                                    <hr
                                        className={styles.horizontalRow}
                                    />
                                </ol>
                            </div>
                        )}
                    />
                </div>
                <div className={styles.expertiseSectionList}>
                    <ExpertiseSection
                        heading={undefined}
                        subHeading="Check our research works"
                    />
                    <div className={styles.researchButtons}>
                        {buttons
                            && buttons.map((type) => (
                                <Button
                                    key={type.value}
                                    className={styles.workButtons}
                                    name={type.value}
                                    onClick={setFilteredServiceType}
                                >
                                    {type.name}
                                </Button>
                            ))}
                    </div>
                    <hr
                        className={styles.horizontalRow}
                    />
                    <div className={styles.researchGrid}>
                        {filteredProjects.map((project) => (
                            <div
                                className={styles.researchList}
                                key={project.id}
                            >
                                <ResearchSection
                                    key={project.serviceTitle}
                                    image={(
                                        <img
                                            className={styles.researchImage}
                                            src={workListOne}
                                            alt="Research"
                                            width={605}
                                            height={250}
                                        />
                                    )}
                                    heading={project.serviceTitle}
                                    description={project.summary}
                                    title={project.researchType}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.knowWork}>
                    <Link
                        href="/works"
                        passHref
                    >
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className={styles.arrowLink}>
                            See all of the works
                            <IoIosArrowRoundForward />
                        </a>
                    </Link>
                </div>
            </div>
        </Page>
    );
}
export default Service;
