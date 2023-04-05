// TO-DO: REMOVE ALL COMMENTS WHEN WORK IS OKAY TO DEPLOY IN THE WEBSITE

import React from 'react';
// import { GetStaticProps } from 'next';
import Link from 'next/link';
import { StaticImageData } from 'next/image';
// import { unique } from '@togglecorp/fujs';

import Page from 'components/general/Page';
import Section from 'components/general/Section';
import Card from 'components/general/Card';
// import Button from 'components/general/Button';
import BannerWithImage from 'components/general/BannerWithImage';
import AccordianWithImage from 'components/general/AccordionWithImage';

// import { TagId, getTag } from 'data/tags';
// import staticProjects, { Project } from 'data/projects';
import { projectTypes as generalServices, getProjectType } from 'data/projectTypes';
// import { getProjectCoverImage } from 'data/projectImages';

import {
    keySelector,
    titleSelector,
    descriptionSelector,
    imageSelector,
} from 'utils/common';
import planningLogo from '../../../src/resources/analyzeLog.svg';
import monitoringLogo from '../../../src/resources/periodicMonitor.svg';
import workListOne from '../../../src/resources/consulting/identification.png';
import workListTwo from '../../../src/resources/consulting/discussion.png';
import workListThree from '../../../src/resources/consulting/proposeSolution.png';
import workListFour from '../../../src/resources/consulting/solution.png';
import workListFive from '../../../src/resources/consulting/implementation.png';
import workListSix from '../../../src/resources/consulting/monitoring.png';

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
        description: 'Understanding the problem is essential. Our expert team meets with the client to gather information for a comprehensive study.',
        image: workListOne,
    },
    {
        key: 'step2',
        title: 'Step 2: Discussions',
        description: 'After understanding the client\'s problem, our team conducts internal discussions and brainstorm multiple solutions. We select the best solutions to present to the client.',
        image: workListTwo,
    },
    {
        key: 'step3',
        title: 'Step 3: Propose Solutions',
        description: 'After internal discussions, we present potential solutions to the client for further discussion and selection. Not all solutions may fit the client\'s needs, so this step is crucial in aligning our proposed solutions with the client\'s requirements.',
        image: workListThree,
    },
    {
        key: 'step4',
        title: 'Step 4: Agree on Solution',
        description: 'We visually explore and discuss potential solutions, eliminating some and selecting others in an iterative process to find the best outcome for the client.',
        image: workListFour,
    },
    {
        key: 'step5',
        title: 'Step 5: Implementation',
        description: 'Implementation is the next step. We provide on-site implementation and necessary training to ensure successful adoption to the system.',
        image: workListFive,
    },
    {
        key: 'step6',
        title: 'Step 6: Monitoring and Iterating',
        description: 'We implement solutions gradually in iterations over approximately a year. The final step is monitoring the implemented solution for another year, making necessary adjustments as needed.',
        image: workListSix,
    },
];

// interface Props {
//     projects: Project[],
//     tags: (TagId | 'all')[];
// }

function ConsultingPage() {
    // const {
    //     projects,
    //     tags,
    // } = props;

    // const [filteredServiceType, setFilteredServiceType] = useState<TagId | 'all'>('all');

    // const filteredProjects = useMemo(() => {
    //     if (filteredServiceType === 'all') {
    //         return projects;
    //     }
    //     return projects.filter((service) => service.tags.includes(filteredServiceType));
    // }, [projects, filteredServiceType]);

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
            <Section
                className={styles.expertise}
                title="Our Expertise"
                description="Want some expert consultation? Tell us about your problems and we will provide robust solutions"
            >
                <div className={styles.expertiseList}>
                    <Card
                        imageSrc={planningLogo}
                        description="We seamlessly integrate our proposed solution to the existing process"
                        variant="mini"
                    />
                    <Card
                        imageSrc={monitoringLogo}
                        description="We implement multiple solutions in an iterative process by involving our clients throughout the cycle"
                        variant="mini"
                    />
                </div>
            </Section>
            <Section
                title="Our Approach"
                description="We forge a formidable plan until we find the one that matches your organization's ambition"
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
                        eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a className={styles.arrowLink}>
                            <span>
                                See all of the works
                            </span>
                            <IoIosArrowRoundForward className={styles.icon} />
                        </a>
                    </Link>
                </div>
            </Section> */}
        </Page>
    );
}

// export const getStaticProps: GetStaticProps<Props> = async () => {
//     const filteredProjects = staticProjects.filter((project) => (
//         project.projectType === consultingProjectType.key
//     ));
//     const usedTags = unique(filteredProjects.flatMap((item) => item.tags));

//     const props: Props = {
//         projects: filteredProjects,
//         tags: ['all', ...usedTags],
//     };
//     return { props };
// };

export default ConsultingPage;
