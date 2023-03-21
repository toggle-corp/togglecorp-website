import React, {
    useMemo,
    useState,
} from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
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
import { getProjectCoverImage } from 'data/projectImages';

import deepPrimaryLogo from 'resources/deep-primary-logo.png';
import planningLogo from 'resources/analyzeLog.svg';
import monitoringLogo from 'resources/periodicMonitor.svg';
import workListOne from 'resources/consulting/identification.png';
import workListTwo from 'resources/consulting/discussion.png';
import workListThree from 'resources/consulting/proposeSolution.png';
import workListFour from 'resources/consulting/solution.png';
import workListFive from 'resources/consulting/implementation.png';
import workListSix from 'resources/consulting/monitoring.png';

import {
    keySelector,
    titleSelector,
    descriptionSelector,
    imageSelector,
} from 'utils/common';

import styles from './styles.module.css';

const consultingProjectType = getProjectType('consulting');

interface Approach {
    key: string;
    title: string;
    description: string;
    image: string | StaticImageData;
}

const approaches: Approach[] = [
    {
        key: 'step1',
        title: 'Step 1: Problem Identification',
        description: 'Understanding the problem is essential before diving into solutions. So, firstly, our team of experts meets the client to gather as much information as possible to understand the problem. ',
        image: workListOne,
    },
    {
        key: 'step2',
        title: 'Step 2: Discussions',
        description: 'After the initial meeting with the client to understand the problem, we have in-depth internal discussions about the problem the client is facing. We brainstorm as many solutions as possible and select the best solutions to present to the client later.',
        image: workListTwo,
    },
    {
        key: 'step3',
        title: 'Step 3: Propose Solutions',
        description: 'Not all solutions fit the client’s needs. So, the next step would be to meet with the client and present our solutions on paper. Here, we discuss the best potential solutions that we have in mind.',
        image: workListThree,
    },
    {
        key: 'step4',
        title: 'Step 4: Agree on Solution',
        description: 'As the discussion continues, we will try to visualize each solution as it would be implemented. Along the way, we will cross some out, and pick some out to implement. This will be an iterative process, and finally, the best solution will be found. ',
        image: workListFour,
    },
    {
        key: 'step5',
        title: 'Step 5: Implementation',
        description: 'The next step would be to implement the solutions. We visit the client and implement the solution. Necessary training and guidance will be provided as not everybody might understand the solution.',
        image: workListFive,
    },
    {
        key: 'step6',
        title: 'Step 6: Monitoring and Iterating',
        description: 'Change should be gradual. So, we implement the solutions in iterations (for about a year). The final step would then be to monitor the implemented solution. We will monitor the provided solution for a year. If we think some changes are necessary, we edit the proposed solution and implement the updated version of the sort.',
        image: workListSix,
    },
];

interface Props {
    projects: Project[],
    tags: (TagId | 'all')[];
}

function ConsultingPage(props: Props) {
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
        service.key !== consultingProjectType.key
    ));

    return (
        <Page
            pageTitle={consultingProjectType.title}
            banner={(
                <BannerWithImage
                    title={consultingProjectType.title}
                    imageUrl={consultingProjectType.bannerImage}
                    description={consultingProjectType.description}
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
                                            <span>
                                                {service.title}
                                            </span>
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
                <div className={styles.productDetail}>
                    <div className={styles.productImage}>
                        <Image
                            src={deepPrimaryLogo}
                            alt="Deep Primary Logo"
                            placeholder="blur"
                        />
                    </div>
                    <div className={styles.productDescription}>
                        <div className={styles.text}>
                            {/* eslint-disable-next-line max-len */}
                            One of the platform that we&apos;ve worked on, DEEP, centralizes, accelerates and strengthens the inter-agency response to humanitarian crises. It hosts the largest analysis framework repository in the international humanitarian sector.
                        </div>
                        <Link
                            href="https://thedeep.io/"
                            passHref
                        >
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                className={styles.knowMoreLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>Know more about DEEP</span>
                                <IoIosArrowRoundForward className={styles.icon} />
                            </a>
                        </Link>
                    </div>
                </div>
            </Section>
            <Section
                className={styles.expertise}
                title="Our Expertise"
                description="Want some expert consultation? Tell us about your problems we will provide a meaningful solution."
            >
                <div className={styles.expertiseList}>
                    <Card
                        imageSrc={planningLogo}
                        description="We seamlessly integrate our proposed solution to the existing process"
                        variant="mini"
                    />
                    <Card
                        imageSrc={monitoringLogo}
                        description="We implement multiple solutions in an iterative process by involving our clients throughout the process"
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
                description="Check our consulting works"
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
                        {filteredProjects.slice(0, 6).map((project) => (
                            <Card
                                key={project.id}
                                title={project.projectTitle}
                                description={project.summary}
                                href={`/works/${project.id}`}
                                tags={project.tags.map(getTag)}
                                imageSrc={getProjectCoverImage(project.id)}
                            />
                        ))}
                    </div>
                    <Link
                        href="/works"
                        passHref
                    >
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className={styles.arrowLink}>
                            <span>
                                See all of the works
                            </span>
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
        project.projectType === consultingProjectType.key
    ));
    const usedTags = unique(filteredProjects.flatMap((item) => item.tags));

    const props: Props = {
        projects: filteredProjects,
        tags: ['all', ...usedTags],
    };
    return { props };
};

export default ConsultingPage;
