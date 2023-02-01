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
    const { projects } = props;

    return (
        <Page
            className={styles.home}
            pageTitle="Home"
            banner={(
                <Container className={styles.banner} contentClassName={styles.content}>
                    <div className={styles.introductionContent}>
                        <div className={styles.title}>
                            Toggling ideas into reality
                        </div>
                        <div>
                            A flawless digital community contributing to development
                            and research striving towards improving existing processes
                        </div>
                        <div className={styles.tags}>
                            {projectTypes.map((projectType, i) => (
                                <React.Fragment key={projectType.key}>
                                    <Link href={projectType.link}>{projectType.title}</Link>
                                    {i < projectTypes.length - 1 && (
                                        <div className={styles.dot}>•</div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                        <Button
                            className={styles.getStartedButton}
                            name={undefined}
                            variant="primary"
                        >
                            View Services
                        </Button>
                    </div>
                </Container>
            )}
        >
            <Container contentClassName={styles.clientsSection}>
                <h3 className={styles.heading}>Trusted By</h3>
                <img className={styles.clientsImage} src={clientsIcon} alt="Clients" />
            </Container>
            <Section
                title="Who We Are"
                description="A cohesive group of brilliant-minded individuals solving real-world problems."
                sideImageUrl={workListOne}
                actions={(
                    <>
                        <div>
                            A well-experienced firm having worked with several national
                            and international clients aiming to help businesses solve
                            their problems with development, data tagging,
                            analysis, and visualizations.
                        </div>
                        <Button
                            name={undefined}
                            variant="outline-active"
                        >
                            View More
                        </Button>
                    </>
                )}
            >
                <div className={styles.introImages}>
                    <img src={workListOne} alt="intro" />
                    <img src={workListOne} alt="intro" />
                    <img src={workListOne} alt="intro" />
                </div>
            </Section>
            <Section
                className={styles.ourServices}
                title="Our Services"
                description="We specialize in development, consultancy, research and analysis."
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
                title="Highlighted Works"
                description="Togglecorp has assisted multiple clients in achieving their vision by driving change and continuous improvement"
            >
                <div className={styles.recentWorkList}>
                    {projects.map((recentWork) => (
                        <div className={styles.recentWorkCard} key={recentWork.id}>
                            <img
                                className={styles.workPreview}
                                src={getProjectCoverImage(recentWork.id)}
                                alt={recentWork.projectTitle}
                            />
                            <div className={styles.details}>
                                <h4>{recentWork.projectTitle}</h4>
                                <div className={styles.description}>{recentWork.summary}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
            <Container
                className={styles.bottomSection}
                contentClassName={styles.content}
            >
                <h3>Have a project you&apos;d like to talk to us about?</h3>
                <div>Tell us about your need, we&apos;d love to collaborate with you.</div>
                <Button name={undefined} variant="primary">
                    See how we can help you
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
