import Page from 'components/general/Page';
import BannerWithImage from 'components/general/BannerWithImage';
import Header from 'components/general/Header';
import Container from 'components/general/Container';
import bannerImage from 'resources/career/banner.jpeg';
import Button from 'components/general/Button';
import KeyFigure from 'components/general/KeyFigure';

import CareerItem from 'components/careers/CareerItem';
import vacancies from 'components/careers/vacancies';

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
            <Container contentClassName={styles.careerContent}>
                <Header
                    title="Job openings"
                    description="We are a team of problem-solvers working together solving real world problems. Join us and let's solve problems together"
                />
                <div className={styles.vacancies}>
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
            <Container
                className={styles.bottomSection}
                contentClassName={styles.content}
            >
                <h3>Want to work with us apart from the available vacancies?</h3>
                <div>Reach out to us and we&apos;ll let you know more</div>
                <Button name={undefined} variant="primary">
                    <a href="mailto:career@togglecorp.com">
                        Drop your CV
                    </a>
                </Button>
            </Container>
        </Page>
    );
}

export default CareerPage;
