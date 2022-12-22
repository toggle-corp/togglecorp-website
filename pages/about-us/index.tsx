import Link from 'next/link';
import React, { useState } from 'react';
import { _cs } from '@togglecorp/fujs';

import GalleryCard from 'components/about-us/GalleryCard';
import Page from 'components/general/Page';
import { ResearchSection } from 'components/ServiceDetailsPage';

import cultures from 'data/cultures';
import gallery from 'data/gallery';
import expertises from 'data/expertises';
import socialResponsibilities from 'data/socialResponsibilities';
import BannerWithImage from 'components/general/BannerWithImage';
import Container from 'components/general/Container';
import Card from 'components/general/Card';

import organizationLogo from 'resources/organization.webp';
import halfTogglecorpLogo from 'resources/half-tc-icon.png';

import styles from './styles.module.css';

const firstCulture = cultures[0];

interface SectionProps {
    className?: string;
    title: string;
    description: string;
    children: React.ReactNode;
}

function Section(props: SectionProps) {
    const {
        className,
        title,
        description,
        children,
    } = props;

    return (
        <Container
            className={_cs(styles.section, className)}
            contentClassName={styles.content}
        >
            <h5 className={styles.title}>
                {title}
            </h5>
            <div className={styles.description}>
                {description}
            </div>
            {children}
        </Container>
    );
}

function AboutUs() {
    const [activeKey, setActiveKey] = useState<string | undefined>(firstCulture?.key);

    const activeCulture = activeKey
        ? cultures.find((culture) => culture.key === activeKey)
        : undefined;

    return (
        <Page
            pageTitle="About Us"
            banner={(
                <BannerWithImage
                    title="About Us"
                    imageUrl={organizationLogo}
                    description="A place to grow your creativity, to imagine a better future and to work on the issues we believe in."
                    mode="light"
                />
            )}
        >
            <Section
                title="Our Story"
                description="Founded in 2016 with for research and development of digital applications that makes this world [a tiny bit] better."
            >
                {/* eslint-disable-next-line max-len */}
                We have a diverse team consisting of software engineers, research specialists, designers , content writers, ...
            </Section>
            <Section
                className={styles.ourTeam}
                title="We are proud of the team we have built"
                description="A place that nurtures, cares, and respects. A place where the best and the brightest are appreciated."
            >
                <div className={styles.expertiseList}>
                    {expertises.map((expertise) => (
                        <Card
                            variant="mini"
                            key={expertise.key}
                            imageSrc={expertise.image}
                            title={expertise.title}
                            description={expertise.description}
                        />
                    ))}
                </div>
            </Section>
            <Section
                title="Our Culture and Core Values"
                description="We foster a learning culture that encourages every employee to grow their capabilities and careers with the values they believe in."
            >
                <div className={styles.coreValueDetails}>
                    <div className={styles.cultureList}>
                        {cultures.map((culture) => (
                            <React.Fragment
                                key={culture.key}
                            >
                                <div
                                    role="presentation"
                                    className={styles.cultureItem}
                                    onClick={() => setActiveKey(culture.key)}
                                >
                                    <img
                                        className={styles.halfLogo}
                                        src={halfTogglecorpLogo}
                                        alt="tc logo"
                                    />
                                    <h5 className={styles.cultureTitle}>
                                        {culture.title}
                                    </h5>
                                </div>
                                {activeKey === culture.key && (
                                    <div className={styles.cultureDescription}>
                                        {culture.description}
                                    </div>
                                )}
                                <hr
                                    className={styles.horizontalRow}
                                />
                            </React.Fragment>
                        ))}
                    </div>
                    {activeCulture && (
                        <img
                            className={styles.activeCultureImage}
                            src={activeCulture.image}
                            alt="tc logo"
                        />
                    )}
                </div>
            </Section>
            <Section
                title="Life at Togglecorp"
                description="A team that bonds together and works together"
            >
                <div className={styles.galleryList}>
                    {gallery.map((galleryItem) => (
                        <GalleryCard
                            key={galleryItem.id}
                            caption={galleryItem.caption}
                            imageUrl={galleryItem.image}
                        />
                    ))}
                </div>
            </Section>
            <Section
                title="Social Responsibility"
                description="We help the community that nurtured us in any way we can"
            >
                <div className={styles.socialList}>
                    {socialResponsibilities.map((socialResponsibility) => (
                        <Card
                            key={socialResponsibility.id}
                            imageSrc={socialResponsibility.image}
                            description={socialResponsibility.caption}
                            tag="Learn More"
                        />
                    ))}
                </div>
            </Section>
            <Container contentClassName={styles.careerSection}>
                <div className={styles.careerTitle}>
                    Career at Togglecorp
                </div>
                <div className={styles.careerDescription}>
                    {/* eslint-disable-next-line max-len */}
                    We want people who work sincerely and have fun while do so. In return we provide you a space to grow your skills and an environment that respects you.
                </div>
                <Link href="/careers">
                    See Career Opportunities
                </Link>
            </Container>
        </Page>
    );
}
export default AboutUs;
