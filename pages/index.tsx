import React, { useCallback } from 'react';
import Link from 'next/link';
import { IoIosRibbon, IoIosPeople, IoIosFiling } from 'react-icons/io';

import Page from 'components/general/Page';
import Container from 'components/general/Container';
import Button from 'components/general/Button';
import Section from 'components/general/Section';
import Card from 'components/general/Card';
import ButtonLikeLink from 'components/general/ButtonLikeLink';
import BannerWithImage from 'components/general/BannerWithImage';

import { projectTypes } from 'data/projectTypes';
import whoWeAreOne from 'resources/homeSection/whoWeAre6.jpeg';
import whoWeAreTwo from 'resources/homeSection/whoWeAre5.jpeg';
import whoWeAreThree from 'resources/homeSection/whoWeAre3.jpeg';
import whoWeAreFour from 'resources/homeSection/whoWeAre8.jpeg';
import deepBanner from 'resources/homeSection/deep.jpeg';
import npStocks from 'resources/homeSection/np-stocks.webp';
import analysisBanner from 'resources/homeSection/analysis.jpeg';
import boldCodeIcon from 'resources/trustedBy/BoldCode.svg';
import okularAnalyticsIcon from 'resources/trustedBy/OkularAnalytics.svg';
import britishEmbassyIcon from 'resources/trustedBy/BritishEmbassy.svg';
import idmcIcon from 'resources/trustedBy/IDMC.svg';
import unhcrIcon from 'resources/trustedBy/UNHCR.svg';
import americanRedCrossIcon from 'resources/trustedBy/AmericanRedCross.svg';
import worldVisionIcon from 'resources/trustedBy/WorldVision.svg';
import jipsIcon from 'resources/trustedBy/JIPS.svg';
import peopleInNeedIcon from 'resources/trustedBy/PeopleInNeed.svg';
import dataFriendlySpaceIcon from 'resources/trustedBy/DFS.svg';
import ifrcIcon from 'resources/trustedBy/IFRC.svg';
import smtmIcon from 'resources/trustedBy/smtmCapital.svg';
import bannerImage from 'resources/homeSection/banner.jpeg';

import styles from './styles.module.css';

function Home() {
    const handleScrollToServices = useCallback(() => {
        const element = document.getElementById('services-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <Page
            className={styles.home}
            pageTitle="Home"
            banner={(
                <BannerWithImage
                    className={styles.banner}
                    contentClassName={styles.bannerContent}
                    topSectionClassName={styles.topSection}
                    topSectionContentClassName={styles.topSectionContent}
                    title="Toggling ideas into reality"
                    titleClassName={styles.homeTitle}
                    imageUrl={bannerImage}
                    mode="transparent"
                    description={(
                        <div className={styles.introductionContent}>
                            <div className={styles.bannerDescription}>
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
                                onClick={handleScrollToServices}
                            >
                                View Services
                            </Button>
                        </div>
                    )}
                />
            )}
        >
            <Container contentClassName={styles.clientsSection}>
                <div className={styles.clientLogoGroup}>
                    <h3 className={styles.heading}>Trusted By</h3>
                    <div className={styles.clientGroupOne}>
                        <img
                            className={styles.trustedIcons}
                            src={britishEmbassyIcon}
                            alt="british-embassy"
                        />
                        <img
                            className={styles.trustedIcons}
                            src={idmcIcon}
                            alt="IDMC"
                        />
                        <img
                            className={styles.trustedIcons}
                            src={unhcrIcon}
                            alt="UNHCR"
                        />
                        <img
                            className={styles.trustedIcons}
                            src={americanRedCrossIcon}
                            alt="american-red-cross"
                        />
                        <img
                            className={styles.trustedIcons}
                            src={worldVisionIcon}
                            alt="world-vision-icons"
                        />
                    </div>
                    <div className={styles.clientGroupTwo}>
                        <img
                            className={styles.trustedIcons}
                            src={jipsIcon}
                            alt="jips"
                        />
                        <img
                            className={styles.trustedIcons}
                            src={peopleInNeedIcon}
                            alt="people-in-need"
                        />
                        <img
                            className={styles.trustedIcons}
                            src={dataFriendlySpaceIcon}
                            alt="data-friendly-space"
                        />
                        <img
                            className={styles.trustedIcons}
                            src={ifrcIcon}
                            alt="IFRC"
                        />
                        <img
                            className={styles.trustedIcons}
                            src={smtmIcon}
                            alt="SMTM"
                        />
                    </div>
                    <div className={styles.clientGroupThree}>
                        <img
                            className={styles.trustedIcons}
                            src={okularAnalyticsIcon}
                            alt="Okular"
                        />
                        <img
                            className={styles.trustedIcons}
                            src={boldCodeIcon}
                            alt="BoldCode"
                        />
                    </div>
                </div>
            </Container>

            <Section
                title="Who We Are"
                description="A cohesive group of brilliant-minded individuals solving real-world problems."
                sideImageUrl={whoWeAreThree}
                actions={(
                    <>
                        <div>
                            An experienced team having worked with several national
                            and international clients,
                            including humanitarian organizations, aiming to help solve
                            problems with development, data tagging and
                            analysis, and visualizations.
                        </div>
                        <ButtonLikeLink
                            className={styles.viewMoreButton}
                            variant="outline-active"
                            href="/about-us"
                        >
                            View More
                        </ButtonLikeLink>
                    </>
                )}
            >
                <div className={styles.introImages}>
                    <img src={whoWeAreFour} alt="Who we are" />
                    <img src={whoWeAreOne} alt="Who we are" />
                    <img src={whoWeAreTwo} alt="Who we are" />
                </div>
            </Section>
            <Section
                className={styles.statSection}
            >
                <div className={styles.projectCount}>
                    <div className={styles.statBox}>
                        <div className={styles.statBoxContainer}>
                            <IoIosFiling
                                size={32}
                                className={styles.statIcon}
                            />
                        </div>
                        <div className={styles.statInfo}>
                            <span className={styles.statNumber}>
                                250+
                            </span>
                            <span className={styles.statDescription}>
                                Projects Completed
                            </span>
                        </div>
                    </div>
                    <div className={styles.statBox}>
                        <div className={styles.statBoxContainer}>
                            <IoIosRibbon
                                size={32}
                                className={styles.statIcon}
                            />
                        </div>
                        <div className={styles.statInfo}>
                            <span className={styles.statNumber}>
                                20+
                            </span>
                            <span className={styles.statDescription}>
                                Satisfied Clients
                            </span>
                        </div>
                    </div>
                    <div className={styles.statBox}>
                        <div className={styles.statBoxContainer}>
                            <IoIosPeople
                                size={32}
                                className={styles.statIcon}
                            />
                        </div>
                        <div className={styles.statInfo}>
                            <span className={styles.statNumber}>
                                40+
                            </span>
                            <span className={styles.statDescription}>
                                Active Employees
                            </span>
                        </div>
                    </div>
                </div>
            </Section>
            <Section
                id="services-section"
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
                description="Togglecorp has assisted multiple organizations achieve their vision by driving change and continuous improvement"
            >
                <div className={styles.recentWorkList}>
                    <div className={styles.recentWorkCard}>
                        <img
                            className={styles.workPreview}
                            src={deepBanner}
                            alt="DEEP"
                        />
                        <div className={styles.details}>
                            <h4>DEEP</h4>
                            <div className={styles.description}>
                                The DEEP offers a suite of tools
                                and collaborative workflows that meet the needs
                                for compiling, storing, and structuring qualitative
                                information. It was initially established in 2016 in
                                the aftermath of the Nepal Earthquake to strengthen
                                collective sense-making and analysis.
                            </div>
                        </div>
                    </div>
                    <div className={styles.recentWorkCard}>
                        <img
                            className={styles.workPreview}
                            src={analysisBanner}
                            alt="Global COVID-19 Situational Analysis"
                        />
                        <div className={styles.details}>
                            <h4>Global COVID-19 Situational Analysis</h4>
                            <div className={styles.description}>
                                Funded by USAID, this project focused on
                                providing extensive information
                                regarding the impact of COVID-19
                                on refugees and migrants and identifying
                                the unmet needs of affected people due
                                to COVID-19 and the pre-existing
                                humanitarian crisis in Columbia,
                                Burkina Faso, DRC, Nigeria, Syria, and Bangladesh.
                            </div>
                        </div>
                    </div>
                    <div className={styles.recentWorkCard}>
                        <img
                            className={styles.workPreview}
                            src={npStocks}
                            alt="NP Stocks"
                        />
                        <div className={styles.details}>
                            <h4>NPStocks</h4>
                            <div className={styles.description}>
                                NPstocks is a stock application created for Nepali stock market.
                                It is an application that aids the users with
                                decision making in investing in the secondary
                                share market with real-time share market data and multiple
                                appealing visual charts.
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Container
                className={styles.bottomSection}
                contentClassName={styles.content}
            >
                <h3>Have a project you&apos;d like to talk to us about?</h3>
                <div>Tell us about your need, we&apos;d love to collaborate with you.</div>
                <ButtonLikeLink
                    href="/contact-us"
                    variant="primary"
                >
                    See how we can help you
                </ButtonLikeLink>
            </Container>
        </Page>
    );
}
export default Home;
