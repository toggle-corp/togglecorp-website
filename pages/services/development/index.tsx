// TO-DO: REMOVE ALL COMMENTS WHEN WORK IS OKAY TO DEPLOY IN THE WEBSITE

import React from 'react';
// import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { IoIosArrowRoundForward } from 'react-icons/io';
// import { unique } from '@togglecorp/fujs';

import Page from 'components/general/Page';
import Section from 'components/general/Section';
// import Card from 'components/general/Card';
// import Button from 'components/general/Button';
import BannerWithImage from 'components/general/BannerWithImage';
import AccordianWithImage from 'components/general/AccordionWithImage';

// import { TagId, getTag } from 'data/tags';
// import staticProjects, { Project } from 'data/projects';
// import { getProjectCoverImage } from 'data/projectImages';
import {
    projectTypes as generalServices,
    getProjectType,
} from 'data/projectTypes';

import {
    keySelector,
    titleSelector,
    descriptionSelector,
    imageSelector,
} from 'utils/common';
import expertiseLogo from 'resources/ourExpertise/expertiseGraph.png';
import deepPrimaryLogo from 'resources/deep-primary-logo.png';
import workListOne from 'resources/development/userStories.png';
import workListTwo from 'resources/development/fidelity.png';
import workListThree from 'resources/development/milestone.png';
import workListFour from 'resources/development/continuous.png';
import workListFive from 'resources/development/delivery.png';

import styles from './styles.module.css';

const developmentProjectType = getProjectType('development');

interface Approach {
    key: string;
    title: string;
    description: string;
    image: StaticImageData;
}

const approaches: Approach[] = [
    {
        key: 'step1',
        title: 'Step 1: Design Document with User Stories',
        description:
            'Understanding user perspective is crucial. We document potential user stories and flows after gathering initial requirements and information.',
        image: workListOne,
    },
    {
        key: 'step2',
        title: 'Step 2: Low Fidelity Mockups',
        description:
            'With a clear understanding of the user\'s perspective, we create low-fidelity mockups to visually represent the product or project flow.',
        image: workListTwo,
    },
    {
        key: 'step3',
        title: 'Step 3: Milestones Creation',
        description:
            'We set project milestones based on project size and complexity to measure progress in our integrated approach.',
        image: workListThree,
    },
    {
        key: 'step4',
        title: 'Step 4: Iterate with Continuous Feedback from Client',
        description:
            'After each small deployment, we collect client feedback to maintain a good relationship and ensure alignment towards our goal.',
        image: workListFour,
    },
    {
        key: 'step5',
        title: 'Step 5: Delivery and Support',
        description:
            'After delivering the product or project, we provide a fixed period of support for our clients\' queries and fixes.',
        image: workListFive,
    },
];

// interface Props {
//     projects: Project[];
//     tags: (TagId | 'all')[];
// }

function DevelopmentPage() {
    // const { projects, tags } = props;

    // const [filteredServiceType, setFilteredServiceType] = useState<TagId | 'all'>(
    //     'all',
    // );

    // const filteredProjects = useMemo(() => {
    //     if (filteredServiceType === 'all') {
    //         return projects;
    //     }
    //     return projects.filter((service) => service.tags.includes(filteredServiceType));
    // }, [projects, filteredServiceType]);

    const otherServices = generalServices.filter(
        (service) => service.key !== developmentProjectType.key,
    );

    return (
        <Page
            pageTitle={developmentProjectType.title}
            banner={(
                <BannerWithImage
                    title={developmentProjectType.title}
                    imageUrl={developmentProjectType.bannerImage}
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
                            One of the platform that we&apos;ve worked on, DEEP, centralizes,
                            accelerates and strengthens the inter-agency response to
                            humanitarian crises. It hosts the largest analysis framework
                            repository in the international humanitarian sector.
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
                description="Let’s solve problems together with our selection of high-level tech stack"
            >
                <div className={styles.expertiseGraphBox}>
                    <div className={styles.expertisePicture}>
                        <Image
                            src={expertiseLogo}
                            alt="Expertise Graph"
                            placeholder="blur"
                        />
                    </div>
                </div>
            </Section>
            <Section
                title="Our Approach"
                description="Togglecorp believes in an integrated approach that enables organizations to achieve long-term innovation"
            >
                <AccordianWithImage
                    data={approaches}
                    keySelector={keySelector}
                    labelSelector={titleSelector}
                    descriptionSelector={descriptionSelector}
                    imageUrlSelector={imageSelector}
                />
            </Section>
            {/* <Section
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
                    <Link href="/works" passHref>
                        eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a className={styles.arrowLink}>
                            <span>See all of the works</span>
                            <IoIosArrowRoundForward className={styles.icon} />
                        </a>
                    </Link>
                </div>
            </Section> */}
        </Page>
    );
}

// export const getStaticProps: GetStaticProps<Props> = async () => {
//     const filteredProjects = staticProjects.filter(
//         (project) => project.projectType === developmentProjectType.key,
//     );
//     const usedTags = unique(filteredProjects.flatMap((item) => item.tags));

//     const props: Props = {
//         projects: filteredProjects,
//         tags: ['all', ...usedTags],
//     };
//     return { props };
// };

export default DevelopmentPage;
