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
                    <Link href="/services/development"> Development </Link>
                    <Link href="/services/research"> Research & Analysis </Link>
                    <Link href="/services/consulting"> Consulting </Link>
                </FooterSection>
                <FooterSection title="Contact information">
                    <LabelValue
                        value={(
                            <a
                                href="https://goo.gl/maps/8Wv7xGvbxEaZ4JSK7"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Manbhawan, Lalitpur, Nepal
                            </a>
                        )}
                        label={<IoLocation />}
                    />
                    <LabelValue
                        value={(
                            <>
                                <a
                                    href="tel:+977-9841331922"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
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
                                href="mailto:info@togglecorp.com"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                info@togglecorp.com
                            </a>
                        )}
                    />
                </FooterSection>
            </Container>
            <Container
                className={styles.copyrightContainer}
                contentClassName={styles.copyRightContent}
            >
                <div className={styles.copyRight}>
                    Copyright
                    {' '}
                    {new Date().getFullYear()}
                    {' '}
                    Togglecorp Solutions Pvt Ltd. All rights reserved.
                </div>
                <div className={styles.socialMediaIcons}>
                    <Link
                        href="https://www.facebook.com/togglecorp"
                        passHref
                    >
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a target="_blank" rel="noreferrer">
                            <IoLogoFacebook
                                className={styles.socialMedia}
                            />
                        </a>
                    </Link>
                    <Link
                        href="https://www.instagram.com/togglecorp/"
                        passHref
                    >
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a target="_blank" rel="noreferrer">
                            <IoLogoInstagram
                                className={styles.socialMedia}
                            />
                        </a>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/togglecorp/"
                        passHref
                    >
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a target="_blank" rel="noreferrer">
                            <IoLogoLinkedin
                                className={styles.socialMedia}
                            />
                        </a>
                    </Link>
                </div>
            </Container>
        </>
    );
}

export default Footer;
