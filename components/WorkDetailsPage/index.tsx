import { _cs } from '@togglecorp/fujs';
import { IoIosArrowRoundBack } from 'react-icons/io';

import styles from './styles.module.css';

interface TitleProps {
    title: React.ReactNode;
    className?: string;
}

interface HeadingProps {
    className?: string;
    title: string;
    duration: string;
    summary: string;
    children: React.ReactNode;
}

interface DescriptionProps {
    className?: string;
    description: React.ReactNode;
}

interface SidePaneItemProps {
    className?: string;
    title: React.ReactNode;
    subtitle: React.ReactNode;
}

interface ProjectSectionProps {
    className?: string;
    title: React.ReactNode;
    summary: React.ReactNode;
}

interface SubFooterContentProps {
    className?: string;
    firstContent: React.ReactNode;
    secondContent: React.ReactNode;
}

interface CaseStudyProps {
    className?: string;
    image: React.ReactNode;
    heading: React.ReactNode;
    description: React.ReactNode;
    link: React.ReactNode;
}

export function Title(props: TitleProps) {
    const {
        title,
        className,
    } = props;
    return (
        <div className={_cs(styles.title, className)}>
            {title}
        </div>
    );
}

export function CaseStudy(props: CaseStudyProps) {
    const {
        className,
        heading,
        description,
        image,
        link,
    } = props;

    return (
        <div className={_cs(styles.modal, className)}>
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
export function SubFooter(props: SubFooterContentProps) {
    const {
        className,
        firstContent,
        secondContent,
    } = props;

    return (
        <div className={_cs(styles.footerContent, className)}>
            {firstContent}
            {secondContent}
        </div>
    );
}

export function ProjectSection(props: ProjectSectionProps) {
    const {
        className,
        title,
        summary,
    } = props;

    return (
        <div className={_cs(styles.detailSection, className)}>
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

export function SidePaneItem(props: SidePaneItemProps) {
    const {
        className,
        title,
        subtitle,
    } = props;

    return (
        <div className={_cs(styles.detailSection, className)}>
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
        className,
        description,
    } = props;

    return (
        <div className={_cs(styles.detailDescription, className)}>
            {description}
        </div>
    );
}

export function Heading(props: HeadingProps) {
    const {
        className,
        title,
        duration,
        summary,
        children,
    } = props;

    return (
        <div className={_cs(styles.analysisSection, className)}>
            <a className={styles.projectLinks}
                href='#'
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

function WorkDetailsPage() { }
export default WorkDetailsPage;
