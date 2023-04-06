import React, { useCallback } from 'react';
import Link from 'next/link';
import { IoIosRibbon, IoIosPeople, IoIosFiling } from 'react-icons/io';
import { _cs } from '@togglecorp/fujs';
import Image from 'next/image';

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
import britishEmbassyIcon from 'resources/trustedBy/britishNew.png';
import idmcIcon from 'resources/trustedBy/IDMC.svg';
import unhcrIcon from 'resources/trustedBy/UNHCR.svg';
import americanRedCrossIcon from 'resources/trustedBy/AmericanRedCross.svg';
import worldVisionIcon from 'resources/trustedBy/WorldVision.png';
import jipsIcon from 'resources/trustedBy/JIPS.svg';
import peopleInNeedIcon from 'resources/trustedBy/PeopleInNeed.svg';
import dataFriendlySpaceIcon from 'resources/trustedBy/DFS.png';
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
            pageTitle="Togglecorp"
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
                                An ambitious team revolutionizing existing processes
                                through software development and data analysis
                            </div>
                            <div className={styles.tags}>
                                {projectTypes.map((projectType, i) => (
                                    <React.Fragment key={projectType.key}>
                                        <Link
                                            href={projectType.link}
                                            passHref
                                        >
                                            <span>
                                                {projectType.title}
                                            </span>
                                        </Link>
                                        {i < projectTypes.length - 1 && (
                                            <div className={styles.dot}>•</div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                            <Button
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
                        <div className={_cs(styles.trustedIcons, styles.darkIconMode)}>
                            <Image
                                src={britishEmbassyIcon}
                                layout="fill"
                                objectFit="contain"
                                alt="british-embassy"
                            />
                        </div>
                        <div className={styles.trustedIcons}>
                            <Image
                                src={idmcIcon}
                                layout="fill"
                                objectFit="contain"
                                alt="IDMC"
                            />
                        </div>
                        <div className={styles.trustedIcons}>
                            <Image
                                src={unhcrIcon}
                                layout="fill"
                                objectFit="contain"
                                alt="UNHCR"
                            />
                        </div>
                        <div className={styles.trustedIcons}>
                            <Image
                                src={americanRedCrossIcon}
                                layout="fill"
                                objectFit="contain"
                                alt="american-red-cross"
                            />
                        </div>
                        <div className={_cs(styles.trustedIcons, styles.darkIconMode)}>
                            <Image
                                src={worldVisionIcon}
                                layout="fill"
                                objectFit="contain"
                                alt="world-vision-icons"
                            />
                        </div>
                    </div>
                    <div className={styles.clientGroupTwo}>
                        <div className={styles.trustedIcons}>
                            <Image
                                src={jipsIcon}
                                layout="fill"
                                objectFit="contain"
                                alt="jips"
                            />
                        </div>
                        <div className={styles.trustedIcons}>
                            <Image
                                src={peopleInNeedIcon}
                                layout="fill"
                                objectFit="contain"
                                alt="people-in-need"
                            />
                        </div>
                        <div className={_cs(styles.trustedIcons, styles.darkIconMode)}>
                            <Image
                                src={dataFriendlySpaceIcon}
                                layout="fill"
                                objectFit="contain"
                                alt="data-friendly-space"
                            />
                        </div>
                        <div className={styles.trustedIcons}>
                            <Image
                                src={ifrcIcon}
                                layout="fill"
                                objectFit="contain"
                                alt="IFRC"
                            />
                        </div>
                        <div className={styles.trustedIcons}>
                            <Image
                                src={smtmIcon}
                                layout="fill"
                                objectFit="contain"
                                alt="SMTM"
                            />
                        </div>
                    </div>
                    <div className={styles.clientGroupThree}>
                        <div className={styles.trustedIcons}>
                            <Image
                                src={okularAnalyticsIcon}
                                layout="fill"
                                objectFit="contain"
                                alt="Okular"
                            />
                        </div>
                        <div className={styles.trustedIcons}>
                            <Image
                                src={boldCodeIcon}
                                layout="fill"
                                objectFit="contain"
                                alt="BoldCode"
                            />
                        </div>
                    </div>
                </div>
            </Container>

            <Section
                title="Who We Are"
                description="A cohesive group of brilliant-minded individuals solving real-world problems"
                sideImageUrl={whoWeAreThree}
                actions={(
                    <>
                        <div>
                            With a dedicated workforce, we have built sustainable solutions
                            for global clients with development and data analysis
                        </div>
                        <ButtonLikeLink
                            className={styles.viewMoreButton}
                            variant="outline"
                            href="/about-us"
                        >
                            View More
                        </ButtonLikeLink>
                    </>
                )}
            >
                <div className={styles.introImages}>
                    <div>
                        <Image
                            src={whoWeAreFour}
                            alt="Who we are"
                            placeholder="blur"
                        />
                    </div>
                    <div>
                        <Image
                            src={whoWeAreOne}
                            alt="Who we are"
                            placeholder="blur"
                        />
                    </div>
                    <div>
                        <Image
                            src={whoWeAreTwo}
                            alt="Who we are"
                            placeholder="blur"
                        />
                    </div>
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
                title="Spotlight"
                description="Togglecorp has assisted organizations achieve their vision by driving change and continuous improvement"
            >
                <div className={styles.recentWorkList}>
                    <div className={styles.recentWorkCard}>
                        <div className={styles.workPreview}>
                            <Image
                                src={deepBanner}
                                alt="DEEP"
                                placeholder="blur"
                            />
                        </div>
                        <div className={styles.details}>
                            <h4>DEEP</h4>
                            <div className={styles.description}>
                                The DEEP provides collaborative workflows and tools for compiling,
                                storing, and structuring qualitative data.
                                It was established after the 2016 Nepal earthquake
                                to enhance collective sense-making and analysis.
                            </div>
                        </div>
                    </div>
                    <div className={styles.recentWorkCard}>
                        <div className={styles.workPreview}>
                            <Image
                                src={analysisBanner}
                                alt="Global COVID-19 Situational Analysis"
                                placeholder="blur"
                            />
                        </div>
                        <div className={styles.details}>
                            <h4>Global COVID-19 Situational Analysis</h4>
                            <div className={styles.description}>
                                USAID-funded project gathering information on COVID-19&apos;s
                                impact on refugees and migrants.
                                It identified unmet needs in Colombia,
                                Burkina Faso, DRC, Nigeria, Syria, and Bangladesh.
                            </div>
                        </div>
                    </div>
                    <div className={styles.recentWorkCard}>
                        <div className={styles.workPreview}>
                            <Image
                                src={npStocks}
                                alt="NP Stocks"
                                placeholder="blur"
                            />
                        </div>
                        <div className={styles.details}>
                            <h4>NPStocks</h4>
                            <div className={styles.description}>
                                NPstocks is a stock application created for the Nepali share market.
                                It provides real-time data and visual charts that
                                aid in decision-making in the secondary share investment.
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Container
                className={styles.bottomSection}
                contentClassName={styles.content}
            >
                <h3>Have a project you would like to talk to us about?</h3>
                <div>Tell us about your need, we would love to collaborate with you.</div>
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
