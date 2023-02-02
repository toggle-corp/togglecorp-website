import Page from 'components/general/Page';
import BannerWithImage from 'components/general/BannerWithImage';
import KeyFigure from 'components/general/KeyFigure';
import Section from 'components/general/Section';

import bannerImage from 'resources/contactUs/banner.jpeg';

import styles from './styles.module.css';

const mapLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.474067307377!2d85.31439221565194!3d27.671739182806725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cc62b59c8f%3A0xe38fc6d7cff6e8e8!2sTogglecorp%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1673518956881!5m2!1sen!2snp';

function Contact() {
    return (
        <Page
            pageTitle="Contact Us"
            className={styles.workList}
            banner={(
                <BannerWithImage
                    title="Connect With Us"
                    imageUrl={bannerImage}
                    description="We love getting emails and calls. We just hope that they find us well"
                    mode="light"
                    stats={(
                        <div className={styles.contactDetails}>
                            <div className={styles.keyFigures}>
                                <KeyFigure
                                    label="Say Hello"
                                    valueHref="mailto:info@togglecorp.com"
                                    value="info@togglecorp.com"
                                />
                                <KeyFigure
                                    label="Career"
                                    value="career@togglecorp.com"
                                    valueHref="mailto:career@togglecorp.com"
                                />
                            </div>
                            <KeyFigure
                                label="Phone"
                                value="+977-9841331922"
                                valueHref="tel:+977-9841331922"
                            />
                        </div>
                    )}
                    maps={mapLink}
                />
            )}
        >
            <div />
            <Section
                // TODO: Add collage photos
                title="Life at Togglecorp"
            />
        </Page>
    );
}

export default Contact;
