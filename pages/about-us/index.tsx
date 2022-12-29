import React from 'react';

import GalleryCard from 'components/general/GalleryCard';
import Page from 'components/general/Page';
import BannerWithImage from 'components/general/BannerWithImage';
import Section from 'components/general/Section';
import Card from 'components/general/Card';
import AccordionWithImage from 'components/general/AccordionWithImage';
import ButtonLikeLink from 'components/general/ButtonLikeLink';

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
                    keySelector={keySelector}
                    labelSelector={titleSelector}
                    descriptionSelector={descriptionSelector}
                    imageUrlSelector={imageSelector}
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
