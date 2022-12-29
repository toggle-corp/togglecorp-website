import { _cs } from '@togglecorp/fujs';
import Link from 'next/link';
import {
    IoLocation,
    IoCall,
    IoMail,
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
                For almost 10 years, our team of experts have worked together with a single goal.
            </FooterSection>
            <FooterSection
                title="Company"
            >
                <div>
                    Home
                </div>
                <div>
                    Services
                </div>
                <div>
                    Blog
                </div>
                <div>
                    Contact
                </div>
                <div>
                    About Us
                </div>
            </FooterSection>
            <FooterSection
                title="Services"
            >
                <div>
                    Software Development
                </div>
                <div>
                    Data Analysis
                </div>
                <div>
                    Consulting
                </div>
                <div>
                    UI / UX Design
                </div>
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
                            className={styles.email}
                            target="_blank"
                            href="mailto:info@togglecorp.com"
                            rel="noreferrer noopener"
                        >
                            info@togglecorp.com
                        </a>
                    )}
                />
            </FooterSection>
        </Container>
    );
}

export default Footer;
