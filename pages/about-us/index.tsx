import React from 'react';

import GalleryCard from 'components/general/GalleryCard';
import Page from 'components/general/Page';
import BannerWithImage from 'components/general/BannerWithImage';
import Section from 'components/general/Section';
import Card from 'components/general/Card';
import AccordionWithImage from 'components/general/AccordionWithImage';
import ButtonLikeLink from 'components/general/ButtonLikeLink';
import developmentImage from 'resources/development.png';

import {
    keySelector,
    titleSelector,
    descriptionSelector,
    imageSelector,
} from 'utils/common';
import organizationLogo from 'resources/organization.webp';

import cultures from 'components/about-us/cultures';
import gallery from 'components/about-us/gallery';
import expertises from 'components/about-us/expertises';
import socialResponsibilities from 'components/about-us/socialResponsibilities';

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
                    actions={(
                        <ButtonLikeLink
                            href="/team/"
                            variant="primary"
                        >
                            See our team
                        </ButtonLikeLink>
                    )}
                />
            )}
        >
            <Section
                title="Our story"
            >
                <div className={styles.recentWorkList}>
                    <div className={styles.recentWorkCard}>
                        <div className={styles.details}>
                            <h4>
                                Founded in 2016 with for research and development
                                of digital applications that makes this world [a tiny bit] better.
                            </h4>
                            <div className={styles.description}>
                                We have a diverse team consisting of software engineers, research
                                specialists, designers , content writers, We have a diverse team
                                consisting of software engineers, research specialists, designers.
                            </div>
                        </div>
                        <img
                            className={styles.workPreview}
                            src={developmentImage}
                            alt="our story"
                        />
                    </div>
                    <div className={styles.recentWorkCard}>
                        <div className={styles.details}>
                            <div className={styles.description}>
                                We have a diverse team consisting of software engineers,
                                research specialists, designers , content writers, We have a
                                diverse team consisting of software engineers, research specialists,
                                designers , content writers, We have a diverse team consisting
                                of software engineers, research specialists, designers,
                                content writers, .....
                            </div>
                        </div>
                        <img
                            className={styles.workPreview}
                            src={developmentImage}
                            alt="our story"
                        />
                    </div>
                </div>
            </Section>
            <Section
                title="Our Story"
                description="Togglecorp was founded in 2016 with the goal of developing software products that enhance the user experience"
            >
                With a multicultural staff, Togglecorp specializes in information
                sourcing and management procedures, frontend design, and data
                visualization technologies.
            </Section>
            <Section
                className={styles.ourTeam}
                title="We are proud of the team we have built"
                description="At Togglecorp, we focus on having quality time and quality work, and at the same time, we focus on the all-round development of our employees. Work is fun at TC!"
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
                    keySelector={keySelector}
                    labelSelector={titleSelector}
                    descriptionSelector={descriptionSelector}
                    imageUrlSelector={imageSelector}
                />
            </Section>
            <Section
                title="Life at Togglecorp"
                description="We spend all day staring at screens and working (apart from lunch break). KIDDING! We have fun as much as we work at Togglecorp."
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
                        />
                    ))}
                </div>
            </Section>
            <Section
                className={styles.careerSection}
                title="Career at Togglecorp"
                description="We want people who work sincerely and have fun while do so. In return we provide you a space to grow your skills and an environment that respects you."
                centeredContent
            >
                <ButtonLikeLink
                    href="/careers"
                    variant="primary"
                >
                    See Career Opportunities
                </ButtonLikeLink>
            </Section>
        </Page>
    );
}
export default AboutUs;
