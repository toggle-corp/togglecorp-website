import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';

import GalleryCard from 'components/about-us/GalleryCard';
import Page from 'components/general/Page';
import {
    ApproachSection,
    ExpertiseDetail,
    ResearchSection,
} from 'components/ServiceDetailsPage';

import cultures from 'data/cultures';
import gallery from 'data/gallery';
import expertises from 'data/expertises';
import socialResponsibilities from 'data/socialResponsibilities';
import BannerWithImage from 'components/general/BannerWithImage';

import organizationLogo from 'resources/organization.webp';
import halfTogglecorpLogo from 'resources/half-tc-icon.png';

import styles from './styles.module.css';

const firstCulture = cultures[0];

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
            <Head>
                <title>
                    About Us
                </title>
            </Head>
            <div className={styles.ourStory}>
                <div className={styles.ourStoryHeading}>
                    Our Story
                </div>
                <div className={styles.ourStorySubHeading}>
                    {/* eslint-disable-next-line max-len */}
                    Founded in 2016 with for research and development of digital applications that makes this world [a tiny bit] better.
                    <br />
                    {/* eslint-disable-next-line max-len */}
                    We have a diverse team consisting of software engineers, research specialists, designers , content writers, ...
                </div>
            </div>
            <div className={styles.ourTeam}>
                <div className={styles.teamAtToggleCorp}>
                    <div className={styles.teamToggleHeading}>
                        We are proud of the team we have built
                    </div>
                    <div className={styles.teamToggleCorpSubHeading}>
                        {/* eslint-disable-next-line max-len */}
                        A place that nurtures, cares, and respects. A place where the best and the brightest are appreciated.
                    </div>
                </div>
                <div className={styles.expertiseDetails}>
                    {expertises.map((expertise) => (
                        <ExpertiseDetail
                            key={expertise.key}
                            icon={(
                                <img
                                    src={expertise.image}
                                    alt={expertise.title}
                                    width={60}
                                    height={60}
                                />
                            )}
                            title={expertise.title}
                            description={expertise.description}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.approach}>
                <ApproachSection
                    heading="Our Culture and Core Values"
                    subHeading="We foster a learning culture that encourages every employee to grow their capabilities and careers with the values they believe in."
                    image={activeCulture && (
                        // FIXME: all of the images should be the same size
                        <img
                            src={activeCulture.image}
                            alt="tc logo"
                            width={450}
                            height={750}
                        />
                    )}
                    description={cultures.map((culture) => (
                        <React.Fragment
                            key={culture.key}
                        >
                            <div
                                role="presentation"
                                className={styles.descriptionHeading}
                                onClick={() => setActiveKey(culture.key)}
                            >
                                <img
                                    className={styles.halfLogo}
                                    src={halfTogglecorpLogo}
                                    alt="tc logo"
                                    width={30}
                                    height={30}
                                />
                                <div>
                                    {culture.title}
                                </div>
                            </div>
                            {activeKey === culture.key && (
                                <div className={styles.approachDetailDescription}>
                                    {culture.description}
                                </div>
                            )}
                            <hr
                                className={styles.horizontalRow}
                            />
                        </React.Fragment>
                    ))}
                />
            </div>
            <div className={styles.lifeAtToggleCorp}>
                <div className={styles.lifeToggleHeading}>
                    Life at Togglecorp
                </div>
                <div className={styles.lifeToggleCorpSubHeading}>
                    A team that bonds together and works together
                </div>
            </div>
            <div className={styles.lifeToggleCorp}>
                {gallery.map((galleryItem) => (
                    <GalleryCard
                        key={galleryItem.id}
                        caption={galleryItem.caption}
                        image={(
                            <img
                                className={styles.lifeToggleCorpImg}
                                src={galleryItem.image}
                                alt={galleryItem.imageAlt}
                                // FIXME: all of the images should be the same size
                                width={600}
                                height={250}
                            />
                        )}
                    />
                ))}
            </div>
            <div className={styles.lifeAtToggleCorp}>
                <div className={styles.lifeToggleHeading}>
                    Social Responsibility
                </div>
                <div className={styles.lifeToggleCorpSubHeading}>
                    We help the community that nurtured us in any way we can
                </div>
            </div>
            <div className={styles.socialList}>
                {socialResponsibilities.map((socialResponsibility) => (
                    <ResearchSection
                        key={socialResponsibility.id}
                        image={(
                            <img
                                className={styles.socialListImg}
                                src={socialResponsibility.image}
                                alt={socialResponsibility.imageAlt}
                                // FIXME: all of the images should be the same size
                                width={400}
                                height={250}
                            />
                        )}
                        heading={socialResponsibility.caption}
                        description={undefined}
                        title="Learn More"
                    />
                ))}
            </div>
            <div className={styles.careerAtToggleCorp}>
                <div className={styles.careerToggleHeading}>
                    Career at Togglecorp
                </div>
                <div className={styles.careerToggleCorpSubHeading}>
                    {/* eslint-disable-next-line max-len */}
                    We want people who work sincerely and have fun while do so. In return we provide you a space to grow your skills and an environment that respects you.
                </div>
                <Link href="/careers">
                    See Career Opportunities
                </Link>
            </div>
        </Page>
    );
}
export default AboutUs;
