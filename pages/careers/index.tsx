import Head from 'next/head';

import CareerItem from 'components/careers/CareerItem';
import Page from 'components/general/Page';
import BannerWithImage from 'components/general/BannerWithImage';

import organizationLogo from 'resources/organization.webp';
import vacancies from 'data/vacancies';

import styles from './styles.module.css';

function Career() {
    return (
        <Page
            banner={(
                <BannerWithImage
                    title="Career at Togglecorp"
                    imageUrl={organizationLogo}
                    description="A place to grow your creativity, to imagine a better future and to work on the issues we believe in."
                    mode="light"
                />
            )}
        >
            <Head>
                <title>
                    Career
                </title>
            </Head>
            <div className={styles.career}>
                <div className={styles.careerAtToggleCorp}>
                    <div className={styles.careerToggleHeading}>
                        Our Culture and Core Values
                    </div>
                    <div className={styles.careerToggleCorpSubHeading}>
                        {/* eslint-disable-next-line max-len */}
                        We foster a learning culture that encourages every employee to grow their capabilities and careers with the values they believe in.
                    </div>
                </div>
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
        </Page>
    );
}

export default Career;
