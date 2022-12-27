import React, {
    useMemo,
    useState,
} from 'react';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

import services from 'data.json';
import Page from 'components/general/Page';
import Section from 'components/general/Section';
import Card from 'components/general/Card';
import Button from 'components/general/Button';
import BannerWithImage from 'components/general/BannerWithImage';
import AccordianWithImage from 'components/general/AccordionWithImage';

import organizationLogo from 'resources/organization.webp';
import organizationListLogo from 'resources/organization-list.webp';
import deepPrimaryLogo from 'resources/deep-primary-logo.png';
import planningLogo from 'resources/planning.png';
import monitoringLogo from 'resources/monitoring.png';
import workListOne from 'resources/work-list-1.webp';

import styles from './styles.module.css';

const approaches = [
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

const researchTags = [
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

function Consulting() {
    const [filteredServiceType, setFilteredServiceType] = useState<string>('all');

    const filteredProjects = useMemo(() => {
        if (filteredServiceType === 'all') {
            return services.service;
        }
        return services.service.filter((service) => service.researchType === filteredServiceType);
    }, [filteredServiceType]);

    return (
        <Page
            pageTitle="Our Services"
            banner={(
                <BannerWithImage
                    title="Research and Data Analysis"
                    imageUrl={organizationLogo}
                    description="We turn these insights into practical solutions for our clients to help them run their businesses more effectively."
                    mode="light"
                    stats={(
                        <div className={styles.alsoSee}>
                            Also see:
                            <div className={styles.tags}>
                                Consulting
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
                    keySelector={(a) => a.key}
                    labelSelector={(a) => a.title}
                    descriptionSelector={(a) => a.description}
                    imageUrlSelector={(a) => a.image}
                />
            </Section>
            <Section
                description="Check our research works"
                className={styles.ourResearch}
            >
                <div className={styles.researchContent}>
                    <div className={styles.researchTagList}>
                        {researchTags.map((type) => (
                            <Button
                                variant={filteredServiceType === type.value ? 'outline-active' : 'outline'}
                                key={type.value}
                                name={type.value}
                                onClick={setFilteredServiceType}
                            >
                                {type.name}
                            </Button>
                        ))}
                    </div>
                    <hr className={styles.divider} />
                    <div className={styles.researchList}>
                        {filteredProjects.map((project) => (
                            <Card
                                key={project.id}
                                imageSrc={workListOne}
                                title={project.serviceTitle}
                                description={project.summary}
                                tag={project.researchType}
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
export default Consulting;
