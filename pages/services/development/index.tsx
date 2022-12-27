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

const developmentProjectType = getProjectType('development');

interface Approach {
    key: string;
    title: string;
    description: string;
    image: string;
}

const approaches: Approach[] = [
    {
        key: 'step1',
        title: 'Step 1: Design doc with user stories',
        description: 'We develop a list of sources that will provide credible information for collecting data. Sources include daily newspapers, academic reports, websites, journals, relevant documents provided by the organizations and infographics. The data from these sources are recorded into our in-house platform called DEEP for the second stage of our work.',
        image: workListOne,
    },
    {
        key: 'step2',
        title: 'Step 2: Low fidelity mockups',
        description: 'We develop a list of sources that will provide credible information for collecting data. Sources include daily newspapers, academic reports, websites, journals, relevant documents provided by the organizations and infographics. The data from these sources are recorded into our in-house platform called DEEP for the second stage of our work.',
        image: workListOne,
    },
    {
        key: 'step3',
        title: 'Step 3: Creation of milestones',
        description: 'We develop a list of sources that will provide credible information for collecting data. Sources include daily newspapers, academic reports, websites, journals, relevant documents provided by the organizations and infographics. The data from these sources are recorded into our in-house platform called DEEP for the second stage of our work.',
        image: workListOne,
    },
    {
        key: 'step4',
        title: 'Step 4: Iterate with continuous feedback from client',
        description: 'We develop a list of sources that will provide credible information for collecting data. Sources include daily newspapers, academic reports, websites, journals, relevant documents provided by the organizations and infographics. The data from these sources are recorded into our in-house platform called DEEP for the second stage of our work.',
        image: workListOne,
    },
    {
        key: 'step5',
        title: 'Step 5: Delivery and support',
        description: 'We develop a list of sources that will provide credible information for collecting data. Sources include daily newspapers, academic reports, websites, journals, relevant documents provided by the organizations and infographics. The data from these sources are recorded into our in-house platform called DEEP for the second stage of our work.',
        image: workListOne,
    },
];

interface Props {
    projects: Project[],
    tags: (TagId | 'all')[];
}

function DevelopmentPage(props: Props) {
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
        service.key !== developmentProjectType.key
    ));

    return (
        <Page
            pageTitle={developmentProjectType.title}
            banner={(
                <BannerWithImage
                    title={developmentProjectType.title}
                    imageUrl={developmentProjectType.image}
                    description={developmentProjectType.description}
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
                description="Togglecorp is proud to offer technical expertise with a wide range of high level of tech stack such as:"
            >
                <div className={styles.expertiseList}>
                    <Card
                        imageSrc={planningLogo}
                        description="Application Development: Javascript, Typescript, ReactJS, GraphQL Python, Django React Native, Expo"
                        variant="mini"
                    />
                    <Card
                        imageSrc={monitoringLogo}
                        description="Machine Learning Technologies: Python"
                        variant="mini"
                    />
                    <Card
                        imageSrc={planningLogo}
                        description="Visualization Technologies: MapboxGL, D3.js"
                        variant="mini"
                    />
                    <Card
                        imageSrc={monitoringLogo}
                        description="Build and Deployment: AWS, Azure"
                        variant="mini"
                    />
                </div>
            </Section>
            <Section
                title="Our Approach"
                description="We always believe in our client’s products. So, to do that, all the work we do usually begins with an in depth requirement analysis. After going back and forth on our understanding of the project, we’ll finalize the doc and work on the next steps."
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
        project.projectType === developmentProjectType.key
    ));
    const usedTags = unique(filteredProjects.flatMap((item) => item.tags));

    const props: Props = {
        projects: filteredProjects,
        tags: ['all', ...usedTags],
    };
    return { props };
};

export default DevelopmentPage;
