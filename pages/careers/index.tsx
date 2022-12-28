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
                    description="We are constantly seeking new talents that can contribute to our cultural values; someone who shares our vision but can also bring diversity"
                    mode="light"
                />
            )}
        >
            <Container contentClassName={styles.careerContent}>
                <Header
                    title="Job openings"
                    description="We foster a learning culture that encourages every employee to grow their capabilities and careers with the values they believe in."
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
        </Page>
    );
}

export default CareerPage;
