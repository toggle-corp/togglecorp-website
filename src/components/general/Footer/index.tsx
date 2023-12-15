import { _cs } from '@togglecorp/fujs';
import Link from 'next/link';
import Image from 'next/image';
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
    title?: React.ReactNode;
    children?: React.ReactNode;
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
                            <div className={styles.logo}>
                                <Image
                                    src={tcLogo}
                                    alt="TC-logo"
                                />
                            </div>
                        </Link>
                    )}
                    contentClassName={styles.description}
                />
                <FooterSection
                    title="Company"
                >
                    <Link href="/" passHref>
                        <span className={styles.linkHover}>Home</span>
                    </Link>
                    <Link href="/about-us" passHref>
                        <span className={styles.linkHover}>About</span>
                    </Link>
                    <Link href="/careers" passHref>
                        <span className={styles.linkHover}>Career</span>
                    </Link>
                    <Link href="https://blog.togglecorp.com" passHref>
                        <span className={styles.linkHover}>Blogs and Resources</span>
                    </Link>
                    <Link href="/contact-us" passHref>
                        <span className={styles.linkHover}>Contact</span>
                    </Link>
                    <Link href="/team" passHref>
                        <span className={styles.linkHover}>Team</span>
                    </Link>
                    {/* Uncomment below page when all work pages are complete */}
                    {/* <Link href="/works" passHref>
                        <span className={styles.linkHover}>Works</span>
                    </Link> */}
                </FooterSection>
                <FooterSection
                    title="Services"
                >
                    <Link href="/services/development" passHref>
                        <span className={styles.linkHover}>Development</span>
                    </Link>
                    <Link href="/services/research" passHref>
                        <span className={styles.linkHover}>Tagging, Research & Analysis</span>
                    </Link>
                    <Link href="/services/consulting" passHref>
                        <span className={styles.linkHover}>Consulting</span>
                    </Link>
                </FooterSection>
                <FooterSection title="Contact Information">
                    <LabelValue
                        value={(
                            <a
                                href="https://goo.gl/maps/8Wv7xGvbxEaZ4JSK7"
                                target="_blank"
                                rel="noreferrer noopener"
                                className={styles.linkHover}
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
                                    className={styles.linkHover}
                                >
                                    +977-9841331922
                                </a>
                                <span>
                                    ,&nbsp;
                                </span>
                                <a
                                    href="tel:+977-9849831936"
                                    className={styles.linkHover}
                                >
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
                                className={styles.linkHover}
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
                        href="https://www.linkedin.com/company/togglecorp/"
                        passHref
                    >
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a target="_blank" rel="noreferrer">
                            <IoLogoLinkedin
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
                </div>
            </Container>
        </>
    );
}

export default Footer;
