import { _cs } from '@togglecorp/fujs';
import Image from 'next/image';

import styles from './styles.module.css';

interface NavigationProps {
    logo: React.ReactNode;
    contact: React.ReactNode;
}

interface HeadingProps {
    title: React.ReactNode;
    duration: React.ReactNode;
    summary: React.ReactNode;
}

interface DescriptionProps {
    description: React.ReactNode;
}

interface SidePaneProps {
    title: React.ReactNode;
    subtitle: React.ReactNode;
}

interface MainContentProps {
    summary: React.ReactNode;
}

interface FooterContentProps {
    firstContent: React.ReactNode;
    secondContent: React.ReactNode;
}

function Footer(props: FooterContentProps) {
    const {
        firstContent,
        secondContent,
    } = props;

    return (
        <div className={styles.footerContent}>
            {firstContent}
            {secondContent}
        </div>
    );
}

function MainContent(props: MainContentProps) {
    const {
        summary
    } = props;

    return (
        <div className={styles.sidePane}>
            {summary}
        </div>
    );
}

function SidePane(props: SidePaneProps) {
    const {
        title,
        subtitle,
    } = props;

    return (
        <div className={styles.sidePane}>
            {title}
            {subtitle}
        </div>
    );
}

function Description(props: DescriptionProps) {
    const {
        description,
    } = props;

    return (
        <div className={styles.description}>
            {description}
        </div>
    );
}

function Navigation(props: NavigationProps) {
    const {
        logo,
        contact,
    } = props;

    return (
        <div className={styles.logo}>
            {logo}
            <Image
                src="/tc-clients.png"
                alt="Togglecorp clients"
                width={1000}
                height={400}
            />
            {contact}
        </div>
    );
}

function Heading(props: HeadingProps) {
    const {
        title,
        duration,
        summary,
    } = props;

    return (
        <div className={styles.navigationTask}>
            <div className={styles.navigationTitle}>
                {title}
            </div>
            <div className={styles.navigationDuration}>
                {duration}
            </div>
            <div className={styles.navigationSummary}>
                {summary}
            </div>
        </div>
    );
}



function WorkDetailsPage() {

    return (
        <div className={styles.analysisSection}>
            <div>All Projects</div>
            <div className={styles.description}>Refugee Situational Analysis</div>
            <div className={styles.links}>
                <div>
                    <div className={styles.fakeLink}>Project Duration</div>
                    <div className={styles.fakeDescription}>January 2020 - Ongoing</div>
                </div>
                <div>
                    <div className={styles.fakeLink}>Client</div>
                    <div className={styles.fakeDescription}>International Federation of Red Cross (IFRC)
                        in collaboration with Data Friendly Space</div>
                </div>
            </div>
        </div>
    );
}
export default WorkDetailsPage;
