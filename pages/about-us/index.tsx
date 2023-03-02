import React from 'react';

import GalleryCard from 'components/general/GalleryCard';
import Page from 'components/general/Page';
import BannerWithImage from 'components/general/BannerWithImage';
import Section from 'components/general/Section';
import Card from 'components/general/Card';
import AccordionWithImage from 'components/general/AccordionWithImage';
import ButtonLikeLink from 'components/general/ButtonLikeLink';
import Container from 'components/general/Container';

import {
    keySelector,
    titleSelector,
    descriptionSelector,
    imageSelector,
} from 'utils/common';
import bannerImage from 'resources/aboutUs/banner.jpeg';
import firstImage from 'resources/aboutUs/ourStory/1.jpeg';
import secondImage from 'resources/aboutUs/ourStory/2.jpeg';
import thirdImage from 'resources/aboutUs/ourStory/3.jpeg';

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
                    imageUrl={bannerImage}
                    description="A place to grow your creativity & work on the issues you believe in"
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
                description="While volunteering in the UN after the earthquake, one of our co-founders encountered humanitarians discussing ways to handle the data related problems in the sector."
            >
                <div className={styles.recentWorkList}>
                    <div className={styles.recentWorkCard}>
                        <img
                            className={styles.workPreview}
                            src={firstImage}
                            alt="our story"
                        />
                        <div className={styles.details}>
                            <div className={styles.description}>
                                Discussions began, attracting a few more people,
                                leading them to start working on a project without
                                thinking what it would entail to.
                                Little did they know it was a start of
                                something amazing.
                            </div>
                            <div className={styles.description}>
                                Years later, Togglecorp has catered solutions for several national
                                and international organizations,
                                and continued on solving real-world problems.
                                We cannot wait to see what comes next.
                            </div>
                        </div>
                    </div>
                    <div className={styles.recentWorkCard}>
                        <img
                            className={styles.workPreviewImg}
                            src={thirdImage}
                            alt="our story"
                        />
                        <img
                            className={styles.workPreviewImg}
                            src={secondImage}
                            alt="our story"
                        />
                    </div>
                </div>
            </Section>
            <Section
                className={styles.ourTeam}
                title="We are proud of the team we have built"
                description="At Togglecorp, we focus on having quality time and work. At the same time, on the all-round development and growth of our team. Work is fun at TC!"
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
                description="People have left their marks on Togglecorp over the years, and they have become our core values and culture"
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
                description="Having fun as much as we work is the essence of Togglecorp"
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
                description="We give back to the community that shaped and nurtured us in any way we can"
            >
                <div className={styles.socialList}>
                    {socialResponsibilities.map((socialResponsibility) => (
                        <GalleryCard
                            key={socialResponsibility.id}
                            imageUrl={socialResponsibility.image}
                            imageAlt={socialResponsibility.imageAlt}
                        />
                    ))}
                </div>
            </Section>
            <Container
                className={styles.bottomSection}
                contentClassName={styles.content}
            >
                <h4>
                    We provide you a space to grow your skills, have fun,
                    and an environment that respects you.
                </h4>
                <ButtonLikeLink
                    href="/careers"
                    variant="primary"
                >
                    See Career Opportunities
                </ButtonLikeLink>
            </Container>
        </Page>
    );
}
export default AboutUs;
