import Page from 'components/general/Page';
import BannerWithImage from 'components/general/BannerWithImage';
import Header from 'components/general/Header';
import Container from 'components/general/Container';
import organizationLogo from 'resources/organization.webp';

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
                    imageUrl={organizationLogo}
                    description="A place to grow your creativity, to imagine a better future and to work on the issues we believe in."
                    mode="light"
                />
            )}
        >
            <Container contentClassName={styles.careerContent}>
                <Header
                    title="Our Culture and Core Values"
                    description="We foster a learning culture that encourages every employee to grow their capabilities and careers with the values they believe in."
                />
                <div>
                    {vacancies.map((vacancy) => (
                        <CareerItem
                            key={vacancy.id}
                            position={vacancy.position}
                            vacancy={vacancy.department}
                            link={(
                                <a
                                    href={vacancy.formLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Apply
                                </a>
                            )}
                        />
                    ))}
                </div>
            </Container>
        </Page>
    );
}

export default CareerPage;
