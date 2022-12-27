import Link from 'next/link';
import Page from 'components/general/Page';
import Container from 'components/general/Container';
import Button from 'components/general/Button';
import Section from 'components/general/Section';
import Card from 'components/general/Card';

import services from 'data/services';

import workListOne from 'resources/work-list-1.webp';
import clientsIcon from 'resources/tc-clients.webp';

import styles from './styles.module.css';

const recentWorks = [
    {
        image: workListOne,
        title: 'Refugee Situational Analysis',
        description: 'We develop a list of sources that will provide credible information for collecting data. Sources include daily newspapers, academic reports, websites, journals, relevant documents provided by the organizations and infographics.',
    },
    {
        image: workListOne,
        title: 'Post Distribution Monitoring (PDM) of BHAKARI Program by Mercy Corps',
        description: 'We develop a list of sources that will provide credible information for collecting data. Sources include daily newspapers, academic reports, websites, journals, relevant documents provided by the organizations and infographics.',
    },
    {
        image: workListOne,
        title: 'Refugee Situational Analysis',
        description: 'We develop a list of sources that will provide credible information for collecting data. Sources include daily newspapers, academic reports, websites, journals, relevant documents provided by the organizations and infographics.',
    },
];

function Home() {
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
                        <div className={styles.description}>
                            {/* eslint-disable-next-line max-len */}
                            We assist humanitarian and development agencies help people reliably and efficiently.
                        </div>
                        <div className={styles.tags}>
                            {services.map((service, i) => (
                                <>
                                    <Link
                                        href={service.link}
                                    >
                                        {service.title}
                                    </Link>
                                    {i < services.length - 1 && (
                                        <div className={styles.dot}>
                                            •
                                        </div>
                                    )}
                                </>
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
                        <div className={styles.brief}>
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
                    {services.map((service) => (
                        <Card
                            imageSrc={service.image}
                            href={service.link}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </Section>
            <Section
                title="Our Recent Works"
                description="We research, analyse, interpret and present data related to humanitarian crises"
            >
                <div className={styles.recentWorkList}>
                    {recentWorks.map((recentWork) => (
                        <div className={styles.recentWorkCard}>
                            <img
                                className={styles.workPreview}
                                src={recentWork.image}
                                alt={recentWork.title}
                            />
                            <div className={styles.details}>
                                <h4>
                                    {recentWork.title}
                                </h4>
                                <div className={styles.description}>
                                    {recentWork.description}
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

export default Home;
