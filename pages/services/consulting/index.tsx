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

import staticWorks, {
    Work,
    Tag,
    getTagTitle,
} from 'data/works';

import generalServices, { consultationService } from 'data/services';
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
        description: 'We develop a list of sources that will provide credible information for collecting data. Sources include daily newspapers, academic reports, websites, journals, relevant documents provided by the organizations and infographics. The data from these sources are recorded into our in-house platform called DEEP for the second stage of our work.',
        image: workListOne,
    },
    {
        key: 'step2',
        title: 'Step 2: Data Segregation',
        description: 'We develop a list of sources that will provide credible information for collecting data. Sources include daily newspapers, academic reports, websites, journals, relevant documents provided by the organizations and infographics. The data from these sources are recorded into our in-house platform called DEEP for the second stage of our work.',
        image: workListOne,
    },
    {
        key: 'step3',
        title: 'Step 3: Review and Analysis',
        description: 'We develop a list of sources that will provide credible information for collecting data. Sources include daily newspapers, academic reports, websites, journals, relevant documents provided by the organizations and infographics. The data from these sources are recorded into our in-house platform called DEEP for the second stage of our work.',
        image: workListOne,
    },
];

interface Props {
    works: Work[],
    tags: (Tag | 'all')[];
}

function Consulting(props: Props) {
    const {
        works,
        tags,
    } = props;

    const [filteredServiceType, setFilteredServiceType] = useState<Tag | 'all'>('all');

    const filteredProjects = useMemo(() => {
        if (filteredServiceType === 'all') {
            return works;
        }
        return works.filter((service) => service.tags.includes(filteredServiceType));
    }, [works, filteredServiceType]);

    const otherServices = generalServices.filter((service) => (
        service.key !== consultationService.key
    ));

    return (
        <Page
            pageTitle={consultationService.title}
            banner={(
                <BannerWithImage
                    title={consultationService.title}
                    imageUrl={consultationService.image}
                    description={consultationService.description}
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
                description="We research, analyse, interpret and present data related to humanitarian crises"
            >
                <div className={styles.expertiseList}>
                    <Card
                        imageSrc={planningLogo}
                        description="We support humanitarian organizations in intervention planning, analyze past results and perform various analyses"
                        variant="mini"
                    />
                    <Card
                        imageSrc={monitoringLogo}
                        description="We conduct periodic and continuous monitoring and evaluation of the humanitarian efforts in emergency response"
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
                                {tag === 'all' ? 'All' : getTagTitle(tag)}
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
                                tags={project.tags.map(getTagTitle)}
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
    const consultingWorks = staticWorks.filter((work) => (
        work.projectType === consultationService.key
    ));
    const consultingTags = unique(consultingWorks.flatMap((item) => item.tags));

    const props: Props = {
        works: consultingWorks,
        tags: ['all', ...consultingTags],
    };
    return { props };
};

export default Consulting;
