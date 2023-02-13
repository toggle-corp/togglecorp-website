import React, {
    useMemo,
    useState,
} from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { unique } from '@togglecorp/fujs';

import Page from 'components/general/Page';
import Section from 'components/general/Section';
import Card from 'components/general/Card';
import Button from 'components/general/Button';
import BannerWithImage from 'components/general/BannerWithImage';
import AccordianWithImage from 'components/general/AccordionWithImage';

import { TagId, getTag } from 'data/tags';
import staticProjects, { Project } from 'data/projects';
import { projectTypes as generalServices, getProjectType } from 'data/projectTypes';

import organizationListLogo from 'resources/organization-list.webp';
import deepPrimaryLogo from 'resources/deep-primary-logo.png';
import planningLogo from 'resources/planning.png';
import monitoringLogo from 'resources/monitoring.png';
import workListOne from 'resources/work-list-1.webp';
import {
    keySelector,
    titleSelector,
    descriptionSelector,
    imageSelector,
} from 'utils/common';

import styles from './styles.module.css';

const researchProjectType = getProjectType('research');

interface Approach {
    key: string;
    title: string;
    description: string;
    image: string;
}

const approaches: Approach[] = [
    {
        key: 'step1',
        title: 'Step 1: Data Extraction',
        description: 'We develop a list of sources that will provide credible information for collecting data. Sources include daily newspapers, academic reports, websites, journals, relevant documents provided by the organizations and infographics. The data from these sources are recorded into our in-house platform called DEEP for the second stage of our work. ',
        image: workListOne,
    },
    {
        key: 'step2',
        title: 'Step 2: Data Segregation',
        description: 'Data collected are then classified and normalized into homogenous information for easy accessibility. An analytical framework, if required, is set in DEEP where our research and analysis team meticulously disaggregates it, finding its suitable fit within the framework. This process is called tagging.',
        image: workListOne,
    },
    {
        key: 'step3',
        title: 'Step 3: Review and Analysis',
        description: 'This is the most delicate and intricate part of our work where we sift through massive amounts of data to reveal and interpret the information plausibly. Reliability and validity of data are ensured during the analysis by triangulation and usage of multiple sources of data as evidence for the analytical statements. In addition, frequent coordination with the experts is done to ensure the relevance and quality of the writing.',
        image: workListOne,
    },
    {
        key: 'step4',
        title: 'Step 4: Monitoring and Evaluation',
        description: 'All the reports acquired after the secondary data review goes through effective monitoring to have internal and external accountability of the resource used and the results obtained. We have well-established internal measures and processes to ensure data validity. Our highly qualified and dedicated monitoring, quality control, and evaluation team follow standard guidelines in each step of their work to maintain transparency and accountability.',
        image: workListOne,
    },
    {
        key: 'step5',
        title: 'Step 5: Write-Up',
        description: 'Finally, we draft the findings from the analysis to make the information more digestible. We provide both draft and analyzed data to identify crucial information from the supplementary. This draft is sent to the expert groups and clients for final review and publication.',
        image: workListOne,
    },
];

interface Props {
    projects: Project[],
    tags: (TagId | 'all')[];
}

function ResearchPage(props: Props) {
    const {
        projects,
        tags,
    } = props;

    const [filteredServiceType, setFilteredServiceType] = useState<TagId | 'all'>('all');

    const filteredProjects = useMemo(() => {
        if (filteredServiceType === 'all') {
            return projects;
        }
        return projects.filter((service) => service.tags.includes(filteredServiceType));
    }, [projects, filteredServiceType]);

    const otherServices = generalServices.filter((service) => (
        service.key !== researchProjectType.key
    ));

    return (
        <Page
            pageTitle={researchProjectType.title}
            banner={(
                <BannerWithImage
                    title={researchProjectType.title}
                    imageUrl={researchProjectType.image}
                    description={researchProjectType.description}
                    mode="light"
                    stats={(
                        <div className={styles.alsoSee}>
                            Also see:
                            <div className={styles.tags}>
                                {otherServices.map((service, i) => (
                                    <Link
                                        key={service.key}
                                        href={service.link}
                                        passHref
                                    >
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a>
                                            {service.title}
                                            {i < otherServices.length - 1 && ', '}
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                />
            )}
        >
            <Section>
                <div className={styles.organizationsWorkedWith}>
                    <h3>
                        Humanitarian organizations we’ve worked with
                    </h3>
                    <img
                        className={styles.organizationImg}
                        src={organizationListLogo}
                        alt="Organization List"
                    />
                </div>
            </Section>
            <Section>
                <div className={styles.productDetail}>
                    <img
                        className={styles.productImage}
                        src={deepPrimaryLogo}
                        alt="Deep Primary Logo"
                    />
                    <div className={styles.productDescription}>
                        <div className={styles.text}>
                            {/* eslint-disable-next-line max-len */}
                            One of the platform that we&apos;ve worked on, DEEP, centralizes, accelerates and strengthens the inter-agency response to humanitarian crises. It hosts the largest analysis framework repository in the international humanitarian sector.
                        </div>
                        <Link
                            href="/works"
                            passHref
                        >
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className={styles.knowMoreLink}>
                                Know more about DEEP
                                <IoIosArrowRoundForward className={styles.icon} />
                            </a>
                        </Link>
                    </div>
                </div>
            </Section>
            <Section
                className={styles.expertise}
                title="Our Expertise"
                description="We specialize in research, analysis, interpretation, and presentation of data mainly related to humanitarian crises."
            >
                <div className={styles.expertiseList}>
                    <Card
                        imageSrc={monitoringLogo}
                        description="Research, analyze, interpret and present data related to humanitarian crises"
                        variant="mini"
                    />
                    <Card
                        imageSrc={planningLogo}
                        description="Conduct periodic and continuous monitoring and evaluation of the humanitarian efforts in emergency response"
                        variant="mini"
                    />
                    <Card
                        imageSrc={planningLogo}
                        description="We support humanitarian organizations in intervention planning, analyze past results and perform various analyses"
                        variant="mini"
                    />
                </div>
            </Section>
            <Section
                title="Our Approach"
                description="We believe in effective data sharing and information management during any humanitarian crisis. Access to data is just the beginning."
            >
                <AccordianWithImage
                    data={approaches}
                    keySelector={keySelector}
                    labelSelector={titleSelector}
                    descriptionSelector={descriptionSelector}
                    imageUrlSelector={imageSelector}
                />
            </Section>
            <Section
                description="Check our research works"
                className={styles.ourResearch}
            >
                <div className={styles.researchContent}>
                    <div className={styles.researchTagList}>
                        {tags.map((tag) => (
                            <Button
                                variant={filteredServiceType === tag ? 'outline-active' : 'outline'}
                                key={tag}
                                name={tag}
                                onClick={setFilteredServiceType}
                            >
                                {tag === 'all' ? 'All' : getTag(tag)}
                            </Button>
                        ))}
                    </div>
                    <hr className={styles.divider} />
                    <div className={styles.researchList}>
                        {filteredProjects.map((project) => (
                            <Card
                                key={project.id}
                                imageSrc={workListOne}
                                title={project.projectTitle}
                                description={project.summary}
                                tags={project.tags.map(getTag)}
                            />
                        ))}
                    </div>
                    <Link
                        href="/works"
                        passHref
                    >
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className={styles.arrowLink}>
                            See all of the works
                            <IoIosArrowRoundForward className={styles.icon} />
                        </a>
                    </Link>
                </div>
            </Section>
        </Page>
    );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const filteredProjects = staticProjects.filter((project) => (
        project.projectType === researchProjectType.key
    ));
    const usedTags = unique(filteredProjects.flatMap((item) => item.tags));

    const props: Props = {
        projects: filteredProjects,
        tags: ['all', ...usedTags],
    };
    return { props };
};

export default ResearchPage;
