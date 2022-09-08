import { _cs } from '@togglecorp/fujs';
import Image from 'next/image';
import { IoIosArrowRoundBack } from 'react-icons/io';

import styles from './styles.module.css';

interface NavigationProps {
    logo: React.ReactNode;
    contact: React.ReactNode;
}

interface TitleProps {
    title: React.ReactNode;
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
    title: React.ReactNode;
    summary: React.ReactNode;
}

interface FooterContentProps {
    firstContent: React.ReactNode;
    secondContent: React.ReactNode;
}

interface ModalContentProps {
    image: React.ReactNode;
    heading: React.ReactNode;
    description: React.ReactNode;
    link: React.ReactNode;
}

export function Title(props: TitleProps) {
    const { title } = props;
    return (
        <div className={styles.title}>
            {title}
        </div>
    );
}

export function Modal(props: ModalContentProps) {
    const {
        heading,
        description,
        image,
        link,
    } = props;

    return (
        <div className={styles.modal}>
            <div className={styles.modalSection}>
                <div className={styles.modalImage}>
                    {image}
                </div>
                <div>
                    <div className={styles.modalTitle}>
                        {heading}
                    </div>
                    <div className={styles.modalDescription}>
                        {description}
                    </div>
                </div>
            </div>
            <hr className={styles.horizontalRow} />
            <div className={styles.viewLink}>
                {link}
            </div>
        </div>
    );
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

export function MainContent(props: MainContentProps) {
    const {
        title,
        summary,
    } = props;

    return (
        <div className={styles.detailSection}>
            <div className={styles.aboutDetail}>
                <div className={styles.aboutPage}>
                    {title}
                </div>
                <div className={styles.detailDescription}>
                    {summary}
                </div>
            </div>
        </div>
    );
}

export function SidePane(props: SidePaneProps) {
    const {
        title,
        subtitle,
    } = props;

    return (
        <div className={styles.detailSection}>
            <div className={styles.detailPage}>
                <div className={styles.fakeLink}>
                    {title}
                </div>
                <div className={styles.fakeDescription}>
                    {subtitle}
                </div>
            </div>
        </div>
    );
}

export function Description(props: DescriptionProps) {
    const {
        description,
    } = props;

    return (
        <div className={styles.detailDescription}>
            {description}
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
        <div className={styles.analysisSection}>
            <a className={styles.projectLinks}
                href=''
            >
                <IoIosArrowRoundBack />
                All Projects
            </a>
            <div className={styles.description}>
                {title}
            </div>
            <div className={styles.links}>
                <div>
                    <div className={styles.fakeLink}>
                        Project Duration
                    </div>
                    <div className={styles.fakeDescription}>
                        {duration}
                    </div>
                </div>
                <div>
                    <div className={styles.fakeLink}>
                        Client
                    </div>
                    <div className={styles.fakeDescription}>
                        {summary}
                    </div>
                </div>
            </div>
        </div>
    );
}



function WorkDetailsPage() {
    return (
        <Heading
            title="Refugee Situational Analysis"
            duration="January 2020-Ongoing"
            summary="International Federation of Red Cross (IFRC) in collaboration with Data Friendly Space"
        >
        </Heading>
    );
}
export default WorkDetailsPage;
