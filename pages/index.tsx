import React from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Page from 'components/general/Page';
import Container from 'components/general/Container';
import Button from 'components/general/Button';
import Section from 'components/general/Section';
import Card from 'components/general/Card';

import { projectTypes } from 'data/projectTypes';
import { getProjectCoverImage } from 'data/projectImages';
import staticProjects, { Project } from 'data/projects';

import workListOne from 'resources/work-list-1.webp';
import clientsIcon from 'resources/tc-clients.webp';

import styles from './styles.module.css';

interface Props {
    projects: Project[];
}

function Home(props: Props) {
    const {
        projects,
    } = props;

    return (
        <Page
            className={styles.home}
            pageTitle="Home"
            banner={(
                <Container
                    className={styles.banner}
                    contentClassName={styles.content}
                >
                    <div className={styles.introductionContent}>
                        <div className={styles.title}>
                            We build tech for your idea.
                        </div>
                        <div>
                            {/* eslint-disable-next-line max-len */}
                            Lorem ipsum dolor sit amet consectetur. Et ultrices adipiscing eget lacus libero massa at egestas. Pellentesque nec ullamcorper mauris nisi.
                        </div>
                        <div className={styles.tags}>
                            {projectTypes.map((projectType, i) => (
                                <React.Fragment key={projectType.key}>
                                    <Link
                                        href={projectType.link}
                                    >
                                        {projectType.title}
                                    </Link>
                                    {i < projectTypes.length - 1 && (
                                        <div className={styles.dot}>
                                            •
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                        <Button
                            className={styles.getStartedButton}
                            name={undefined}
                            variant="primary"
                        >
                            Get Started
                        </Button>
                    </div>
                </Container>
            )}
        >
            <Container contentClassName={styles.clientsSection}>
                <h3 className={styles.heading}>
                    Trusted By
                </h3>
                <img
                    className={styles.clientsImage}
                    src={clientsIcon}
                    alt="Clients"
                />
            </Container>
            <Section
                title="Who We Are"
                description="A place that nurtures, cares, and respects. A place where the best and the brightest are appreciated."
                sideImageUrl={workListOne}
                actions={(
                    <>
                        <div>
                            {/* eslint-disable-next-line max-len */}
                            Lorem ipsum dolor sit amet consectetur. Et ultrices adipiscing eget lacus libero massa at egestas. Pellentesque nec ullamcorper mauris nisi.
                        </div>
                        <Button
                            name={undefined}
                            variant="outline-active"
                        >
                            Learn More
                        </Button>
                    </>
                )}
            >
                <div className={styles.introImages}>
                    <img
                        src={workListOne}
                        alt="intro"
                    />
                    <img
                        src={workListOne}
                        alt="intro"
                    />
                    <img
                        src={workListOne}
                        alt="intro"
                    />
                </div>
            </Section>
            <Section
                className={styles.ourServices}
                title="Our Services"
                description="We research, analyse, interpret and present data related to humanitarian crises"
            >
                <div className={styles.serviceList}>
                    {projectTypes.map((projectType) => (
                        <Card
                            key={projectType.key}
                            imageSrc={projectType.image}
                            href={projectType.link}
                            title={projectType.title}
                            description={projectType.description}
                        />
                    ))}
                </div>
            </Section>
            <Section
                title="Our Recent Works"
                description="We research, analyse, interpret and present data related to humanitarian crises"
            >
                <div className={styles.recentWorkList}>
                    {projects.map((recentWork) => (
                        <div
                            className={styles.recentWorkCard}
                            key={recentWork.id}
                        >
                            <img
                                className={styles.workPreview}
                                src={getProjectCoverImage(recentWork.id)}
                                alt={recentWork.projectTitle}
                            />
                            <div className={styles.details}>
                                <h4>
                                    {recentWork.projectTitle}
                                </h4>
                                <div className={styles.description}>
                                    {recentWork.summary}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
            <Container
                className={styles.bottomSection}
                contentClassName={styles.content}
            >
                <h3>
                    Have a project you&apos;d like to talk to us about?
                </h3>
                <div>
                    Tell us about your need, we&apos;d love to hear from you.
                </div>
                <Button
                    name={undefined}
                    variant="primary"
                >
                    Let&apos;s Get Started
                </Button>
            </Container>
        </Page>
    );
}

export const getStaticProps: GetStaticProps<Props> = async () => ({
    props: {
        // FIXME: we need to sort by the latest first
        projects: staticProjects.slice(0, 3),
    },
});

export default Home;
