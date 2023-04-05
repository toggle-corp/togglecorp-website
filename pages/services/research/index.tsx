// TO-DO: REMOVE ALL COMMENTS WHEN WORK IS OKAY TO DEPLOY IN THE WEBSITE

import React from 'react';
// import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { IoIosArrowRoundForward } from 'react-icons/io';
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

import deepPrimaryLogo from 'resources/deep-primary-logo.png';
import planningLogo from 'resources/planning.svg';
import monitoringLogo from 'resources/monitoring.svg';
import workListOne from 'resources/researchAnalysis/extraction.png';
import workListTwo from 'resources/researchAnalysis/segregation.png';
import workListThree from 'resources/researchAnalysis/review.png';
import workListFour from 'resources/researchAnalysis/monitoring.png';
import workListFive from 'resources/researchAnalysis/write.png';
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
    image: string | StaticImageData;
}

const approaches: Approach[] = [
    {
        key: 'step1',
        title: 'Step 1: Data Extraction',
        description: 'We compile credible sources, such as newspapers, reports, websites, journals, organization-provided documents, and infographics, for data collection. These sources are saved for later stages of our work.',
        image: workListOne,
    },
    {
        key: 'step2',
        title: 'Step 2: Data Segregation',
        description: 'Collected data is classified and normalized for easy accessibility. We sort qualitative and quantitative data based on purpose, type, and approach for analysis.',
        image: workListTwo,
    },
    {
        key: 'step3',
        title: 'Step 3: Review and Analysis',
        description: 'Our meticulous data analysis involves examing through large amounts of data to interpret information reliably and accurately. We ensure data validity and reliability through triangulation and multiple sources. Our coordination with experts ensures relevance and quality.',
        image: workListThree,
    },
    {
        key: 'step4',
        title: 'Step 4: Monitoring and Evaluation',
        description: 'Reports from secondary data review and primary data collection undergo effective monitoring for internal and external accountability. Our qualified monitoring, quality control, and evaluation team follows standard guidelines to ensure data validity, transparency, and accountability.',
        image: workListFour,
    },
    {
        key: 'step5',
        title: 'Step 5: Write-Up',
        description: 'We summarize and present the analysis findings for easy understanding. Both draft and analyzed data are used to identify crucial information. The draft is then reviewed by expert groups and clients for final publication.',
        image: workListFive,
    },
];

// interface Props {
//     projects: Project[],
//     tags: (TagId | 'all')[];
// }

function ResearchPage() {
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
        service.key !== researchProjectType.key
    ));

    return (
        <Page
            pageTitle={researchProjectType.title}
            banner={(
                <BannerWithImage
                    title={researchProjectType.title}
                    imageUrl={researchProjectType.bannerImage}
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
                description="We analyze, interpret, and present data with specialization in humanitarian sector"
            >
                <div className={styles.expertiseList}>
                    <Card
                        imageSrc={monitoringLogo}
                        description="We support organizations in intervention planning, analyze past results and perform various analyses"
                        variant="mini"
                    />
                    <Card
                        imageSrc={planningLogo}
                        description="Conduct periodic and continuous monitoring and evaluation of the humanitarian efforts in emergency response"
                        variant="mini"
                    />
                </div>
            </Section>
            <Section
                title="Our Approach"
                // description="We believe in effective data sharing and information management"
                description="We utilize a robust methodology to achieve more accurate observation"
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
                        {filteredProjects.slice(0, 6).map((project) => (
                            <Card
                                key={project.id}
                                imageSrc={getProjectCoverImage(project.id)}
                                title={project.projectTitle}
                                description={project.summary}
                                href={`/works/${project.id}`}
                                tags={project.tags.map(getTag)}
                            />
                        ))}
                    </div>
                    <Link
                        href="/works"
                        passHref
                    >
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
//     const filteredProjects = staticProjects.filter((project) => (
//         project.projectType === researchProjectType.key
//     ));
//     const usedTags = unique(filteredProjects.flatMap((item) => item.tags));

//     const props: Props = {
//         projects: filteredProjects,
//         tags: ['all', ...usedTags],
//     };
//     return { props };
// };

export default ResearchPage;
