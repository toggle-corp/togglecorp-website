import React, { useMemo, useState } from 'react';
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
import {
    projectTypes as generalServices,
    getProjectType,
} from 'data/projectTypes';

import organizationListLogo from 'resources/organization-list.webp';
import expertiseLogo from 'resources/ourExpertise/expertiseGraph.png';
import deepPrimaryLogo from 'resources/deep-primary-logo.png';
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
        description:
            'Understanding a user’s perspective is imperative. So, the first thing we do after gathering initial requirements and information designs a document with potential user stories and flows.',
        image: workListOne,
    },
    {
        key: 'step2',
        title: 'Step 2: Low fidelity mockups',
        description:
            'With the user’s perspective clear and fully understood, we dive into creating low-fidelity mockups that visually represent the flow of the product/project. ',
        image: workListOne,
    },
    {
        key: 'step3',
        title: 'Step 3: Creation of milestones',
        description:
            'Milestones are significant for measuring progress. Since we have an integrated approach, we set milestones depending on the size and complexity of the project.',
        image: workListOne,
    },
    {
        key: 'step4',
        title: 'Step 4: Iterate with continuous feedback from client',
        description:
            'We value and maintain excellent relationships with our clients. After every small deployment, we collect feedback from our clients to make sure we are working towards achieving the same goal. ',
        image: workListOne,
    },
    {
        key: 'step5',
        title: 'Step 5: Delivery and support',
        description:
            'After achieving all the goals and objectives, we deliver the product/project to our clients. But our work does not end there. After the final deployment and release, we support our clients’ queries and small fixes for a fixed period of time.',
        image: workListOne,
    },
];

interface Props {
    projects: Project[];
    tags: (TagId | 'all')[];
}

function DevelopmentPage(props: Props) {
    const { projects, tags } = props;

    const [filteredServiceType, setFilteredServiceType] = useState<TagId | 'all'>(
        'all',
    );

    const filteredProjects = useMemo(() => {
        if (filteredServiceType === 'all') {
            return projects;
        }
        return projects.filter((service) => service.tags.includes(filteredServiceType));
    }, [projects, filteredServiceType]);

    const otherServices = generalServices.filter(
        (service) => service.key !== developmentProjectType.key,
    );

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
                                    <Link key={service.key} href={service.link} passHref>
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
                    <h3>Humanitarian organizations we’ve worked with</h3>
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
                            One of the platform that we&apos;ve worked on, DEEP, centralizes,
                            accelerates and strengthens the inter-agency response to
                            humanitarian crises. It hosts the largest analysis framework
                            repository in the international humanitarian sector.
                        </div>
                        <Link href="/works" passHref>
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
                description="Let’s solve problems together with our selection of high-level tech stack"
            >
                <div className={styles.expertiseGraphBox}>
                    <img
                        className={styles.expertisePicture}
                        src={expertiseLogo}
                        alt="Expertise Graph"
                    />
                </div>
            </Section>
            <Section
                title="Our Approach"
                description="Togglecorp believes in an integrated approach that enables organizations to achieve long-term innovation."
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
                description="Check our development works"
                className={styles.ourResearch}
            >
                <div className={styles.researchContent}>
                    <div className={styles.researchTagList}>
                        {tags.map((tag) => (
                            <Button
                                variant={
                                    filteredServiceType === tag ? 'outline-active' : 'outline'
                                }
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
                    <Link href="/works" passHref>
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
    const filteredProjects = staticProjects.filter(
        (project) => project.projectType === developmentProjectType.key,
    );
    const usedTags = unique(filteredProjects.flatMap((item) => item.tags));

    const props: Props = {
        projects: filteredProjects,
        tags: ['all', ...usedTags],
    };
    return { props };
};

export default DevelopmentPage;
