import { _cs, isNotDefined } from '@togglecorp/fujs';
import Image from 'next/image';

import Page from 'components/general/Page';
import BannerWithImage from 'components/general/BannerWithImage';
import Header from 'components/general/Header';
import Container from 'components/general/Container';
import bannerImage from 'resources/career/banner.jpeg';
import Button from 'components/general/Button';
import KeyFigure from 'components/general/KeyFigure';

import CareerItem from 'components/careers/CareerItem';
import vacancies from 'components/careers/vacancies';

import Section from 'components/general/Section';

import firstImage from 'resources/career/collage/1.jpeg';
import secondImage from 'resources/career/collage/2.jpeg';
import thirdImage from 'resources/career/collage/5.jpeg';
import fourthImage from 'resources/career/collage/4.jpeg';
import fifthImage from 'resources/career/collage/resizePoolside.jpeg';
import sixthImage from 'resources/career/collage/9.jpeg';
import seventhImage from 'resources/career/collage/resizeMarkhu.jpeg';

import styles from './styles.module.css';

function CareerPage() {
    return (
        <Page
            pageTitle="Careers"
            banner={(
                <BannerWithImage
                    title="Career at Togglecorp"
                    imageUrl={bannerImage}
                    description="We seek new talents who contribute to our values & visions"
                    mode="light"
                    stats={(
                        <div className={styles.contactDetails}>
                            <div className={styles.keyFigures}>
                                <KeyFigure
                                    label="Career"
                                    value="career@togglecorp.com"
                                    valueHref="mailto:career@togglecorp.com"
                                />
                                <KeyFigure
                                    label="Phone"
                                    value="+977-9841331922"
                                    valueHref="tel:+977-9841331922"
                                />
                            </div>
                        </div>
                    )}
                />
            )}
        >
            {vacancies.length > 0 && (
                <Container contentClassName={styles.careerContent}>
                    <Header
                        title="Job openings"
                        description="Unleash your inner superhero with limitless platform to reach your full potential"
                    />
                    <div
                        className={_cs(
                            styles.vacancies,
                            (isNotDefined(vacancies) && styles.noVacancies),
                        )}
                    >
                        {vacancies.map((vacancy) => (
                            <CareerItem
                                key={vacancy.id}
                                position={vacancy.position}
                                department={vacancy.department}
                                openings={vacancy.openings}
                                applyUrl={vacancy.formLink}
                                category={vacancy.category}
                                jobLevel={vacancy.jobLevel}
                                experience={vacancy.experience}
                                salary={vacancy.salary}
                                applyBefore={vacancy.applyBefore}
                            />
                        ))}
                    </div>
                </Container>
            )}
            <Section
                title="Life at Togglecorp"
                description="We cultivate a learning culture that supports our employees&apos; growth and career development aligned with their values"
            >
                <div className={styles.collageContainer}>
                    <div className={styles.imageContainer}>
                        <div className={styles.smallImg}>
                            <Image
                                src={firstImage}
                                alt="our story"
                                placeholder="blur"
                                objectFit="cover"
                            />
                        </div>
                        <div className={styles.smallImg}>
                            <Image
                                src={secondImage}
                                alt="our story"
                                placeholder="blur"
                                objectFit="cover"
                            />
                        </div>
                        <div className={styles.smallImg}>
                            <Image
                                src={thirdImage}
                                alt="our story"
                                placeholder="blur"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <div className={styles.mediumImg}>
                            <Image
                                src={fourthImage}
                                alt="our story"
                                placeholder="blur"
                                objectFit="cover"
                            />
                        </div>
                        <div className={styles.mediumImg}>
                            <Image
                                src={fifthImage}
                                alt="our story"
                                placeholder="blur"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <div className={styles.largeImg}>
                            <Image
                                src={sixthImage}
                                alt="our story"
                                placeholder="blur"
                                objectFit="cover"
                            />
                        </div>
                        <div className={styles.smallImg}>
                            <Image
                                src={seventhImage}
                                alt="our story"
                                placeholder="blur"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
            </Section>
            <Container
                className={styles.bottomSection}
                contentClassName={styles.content}
            >
                {vacancies ? (
                    <>
                        <h3>Want to work with us apart from the available vacancies?</h3>
                        <div>
                            We acknowledge all kinds of talent.
                            Let&apos;s see what you are made up of!
                        </div>

                    </>
                ) : (
                    <>
                        <h3>There are no vacancies available at the moment</h3>
                        <div>But, we welcome talents. Please feel free to drop your CV</div>

                    </>
                )}
                <Button
                    name={undefined}
                    variant="primary"
                >
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScTzfwzlMTzvaq-JS1uX0iXszmIk_hYWkBLtnlSQZtBZFgSjQ/viewform?usp=share_link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Send your CV
                    </a>
                </Button>
            </Container>
        </Page>
    );
}

export default CareerPage;
