import { _cs } from '@togglecorp/fujs';
import Link from 'next/link';
import {
    IoLocation,
    IoCall,
    IoMail,
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoLinkedin,
} from 'react-icons/io5';

import Container from 'components/general/Container';
import LabelValue from 'components/general/LabelValue';

import tcLogo from 'resources/togglecorp.svg';

import styles from './styles.module.css';

interface FooterSectionProps {
    title: React.ReactNode;
    children: React.ReactNode;
    contentClassName?: string;
}

function FooterSection(props: FooterSectionProps) {
    const {
        title,
        children,
        contentClassName,
    } = props;

    return (
        <div className={styles.footerSection}>
            <h4>
                {title}
            </h4>
            <div className={_cs(styles.sectionContent, contentClassName)}>
                {children}
            </div>
        </div>
    );
}

interface Props {
    className?: string;
}

function Footer(props: Props) {
    const { className } = props;

    return (
        <>
            <Container
                className={_cs(styles.footer, className)}
                contentClassName={styles.content}
            >
                <FooterSection
                    title={(
                        <Link
                            href="/"
                            passHref
                        >
                            <img
                                className={styles.logo}
                                src={tcLogo}
                                alt="TC"
                            />
                        </Link>
                    )}
                    contentClassName={styles.description}
                >
                    For years, our team of experts have
                    worked together with a single goal.
                </FooterSection>
                <FooterSection
                    title="Company"
                >
                    <Link href="/"> Home </Link>
                    <Link href="/about-us"> About </Link>
                    <Link href="/contact-us"> Contact </Link>
                    <Link href="/team"> Team </Link>
                    <Link href="/works"> Works </Link>
                </FooterSection>
                <FooterSection
                    title="Services"
                >
                    <Link href="/services/development"> Software Development </Link>
                    <Link href="/services/research"> Data Analysis </Link>
                    <Link href="/services/consulting"> Consulting </Link>
                </FooterSection>
                <FooterSection title="Contact information">
                    <LabelValue
                        value="Manbhawan, Lalitpur, Nepal"
                        label={<IoLocation />}
                    />
                    <LabelValue
                        value={(
                            <>
                                <a href="tel:+977-9841331922">
                                    +977-9841331922
                                </a>
                                <span>
                                    ,&nbsp;
                                </span>
                                <a href="tel:+977-9849831936">
                                    +977-9849831936
                                </a>
                            </>
                        )}
                        label={<IoCall />}
                    />
                    <LabelValue
                        label={<IoMail />}
                        value={(
                            <a
                                target="_blank"
                                href="mailto:info@togglecorp.com"
                                rel="noreferrer noopener"
                            >
                                info@togglecorp.com
                            </a>
                        )}
                    />
                    <FooterSection title="Contact With Us">
                        <div className={styles.socialMediaIcons}>
                            <Link
                                href="https://www.facebook.com/togglecorp"
                                passHref
                            >
                                <IoLogoFacebook
                                    className={styles.socialMedia}
                                />
                            </Link>
                            <Link
                                href="https://www.instagram.com/togglecorp/"
                                passHref
                            >
                                <IoLogoInstagram
                                    className={styles.socialMedia}
                                />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/togglecorp/"
                                passHref
                            >
                                <IoLogoLinkedin
                                    className={styles.socialMedia}
                                />
                            </Link>
                        </div>
                    </FooterSection>
                </FooterSection>
            </Container>
            <Container className={styles.copyrightContainer}>
                <div className={styles.copyRight}>
                    Copyright
                    {' '}
                    {new Date().getFullYear()}
                    {' '}
                    Togglecorp Solutions Pvt Ltd. All rights reserved.
                </div>
            </Container>
        </>
    );
}

export default Footer;
