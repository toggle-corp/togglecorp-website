import { _cs, isNotDefined } from '@togglecorp/fujs';

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
            {vacancies && (
                <Container contentClassName={styles.careerContent}>
                    <Header
                        title="Job openings"
                        description="We are a team of problem-solvers working together solving real world problems. Join us and let's solve problems together."
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
                                salary={vacancy.salary}
                                applyBefore={vacancy.applyBefore}
                            />
                        ))}
                    </div>
                </Container>
            )}
            <Section
                title="Life at Togglecorp"
                description="We foster a learning culture that encourages every employee to grow their capabilities and careers with the values they believe in."
            >
                <div className={styles.collageContainer}>
                    <div className={styles.imageContainer}>
                        <div className={styles.smallImgBox}>
                            <img
                                className={styles.smallImg}
                                src={firstImage}
                                alt="our story"
                            />
                        </div>
                        <div className={styles.smallImgBox}>
                            <img
                                className={styles.smallImg}
                                src={secondImage}
                                alt="our story"
                            />
                        </div>
                        <div className={styles.smallImgBox}>
                            <img
                                className={styles.smallImg}
                                src={thirdImage}
                                alt="our story"
                            />
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <div className={styles.mediumImgBox}>
                            <img
                                className={styles.mediumImg}
                                src={fourthImage}
                                alt="our story"
                            />
                        </div>
                        <div className={styles.mediumImgBox}>
                            <img
                                className={styles.mediumImg}
                                src={fifthImage}
                                alt="our story"
                            />
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <div className={styles.largeImgBox}>
                            <img
                                className={styles.largeImg}
                                src={sixthImage}
                                alt="our story"
                            />
                        </div>
                        <div className={styles.largeImgBox}>
                            <img
                                className={styles.largeImg}
                                src={seventhImage}
                                alt="our story"
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
                        <div>Reach out to us and we&apos;ll let you know more</div>
                    </>
                ) : (
                    <h3>
                        No vacancies available at the moment. But feel free to drop your CV.
                    </h3>
                )}
                <Button
                    name={undefined}
                    variant="primary"
                >
                    <a href="mailto:career@togglecorp.com">
                        Send your CV
                    </a>
                </Button>
            </Container>
        </Page>
    );
}

export default CareerPage;
