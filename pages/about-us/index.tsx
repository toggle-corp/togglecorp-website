import Link from 'next/link';
import React from 'react';

import GalleryCard from 'components/general/GalleryCard';
import Page from 'components/general/Page';

import cultures from 'data/cultures';
import gallery from 'data/gallery';
import expertises from 'data/expertises';
import socialResponsibilities from 'data/socialResponsibilities';
import BannerWithImage from 'components/general/BannerWithImage';
import Container from 'components/general/Container';
import Section from 'components/general/Section';
import Card from 'components/general/Card';
import AccordionWithImage from 'components/general/AccordionWithImage';

import organizationLogo from 'resources/organization.webp';

import styles from './styles.module.css';

function AboutUs() {
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
                <div className={styles.activityList}>
                    {expertises.map((activity) => (
                        <Card
                            variant="mini"
                            key={activity.key}
                            imageSrc={activity.image}
                            title={activity.title}
                            description={activity.description}
                        />
                    ))}
                </div>
            </Section>
            <Section
                title="Our Culture and Core Values"
                description="We foster a learning culture that encourages every employee to grow their capabilities and careers with the values they believe in."
            >
                <AccordionWithImage
                    data={cultures}
                    keySelector={(c) => c.key}
                    labelSelector={(c) => c.title}
                    descriptionSelector={(c) => c.description}
                    imageUrlSelector={(c) => c.image}
                />
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
                            imageAlt={galleryItem.imageAlt}
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
