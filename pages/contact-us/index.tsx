import Head from 'next/head';

import Page from 'components/general/Page';
import BannerWithImage from 'components/general/BannerWithImage';
import KeyFigure from 'components/general/KeyFigure';

import organizationLogo from 'resources/organization.webp';

import styles from './styles.module.css';

function Contact() {
    return (
        <Page
            className={styles.workList}
            banner={(
                <BannerWithImage
                    title="Career at Togglecorp"
                    imageUrl={organizationLogo}
                    description="We love getting emails and calls. Even better, if it’s about work."
                    mode="light"
                    stats={(
                        <div className={styles.keyFigures}>
                            <KeyFigure
                                label="Say Hello"
                                value="info@togglecorp.com"
                            />
                            <KeyFigure
                                label="Career"
                                value="career@togglecorp.com"
                            />
                            <KeyFigure
                                label="Phone"
                                value="+9779801345678"
                            />
                        </div>
                    )}
                />
            )}
        >
            <Head>
                <title>
                    Contact
                </title>
            </Head>
        </Page>
    );
}

export default Contact;
