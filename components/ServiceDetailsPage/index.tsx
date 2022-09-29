import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.css';

interface ServiceProps {
    className?: string;
    heading: React.ReactNode;
    subHeading: React.ReactNode;
    image: React.ReactNode;
}

interface ExpertiseProps {
    className?: string;
    heading: React.ReactNode;
    subHeading: string;
}

interface ExpertiseDetailProps {
    className?: string;
    icon: React.ReactNode;
    description: string;
}

interface ApproachSectionProps {
    className?: string;
    heading: string;
    subHeading: string;
    image: React.ReactNode;
    description: React.ReactNode;
}

interface ResearchSectionProps {
    className?: string;
    image: React.ReactNode;
    heading: React.ReactNode;
    description: React.ReactNode;
    title: React.ReactNode;
}

export function ServiceSection(props: ServiceProps) {
    const {
        className,
        heading,
        subHeading,
        image,
    } = props;
    return (
        <div className={_cs(styles.serviceSection, className)}>
            <div className={styles.researchSection}>
                <div className={styles.researchDescription}>
                    <div className={styles.research}>
                        {heading}
                    </div>
                    <div className={styles.serviceDescription}>
                        {subHeading}
                    </div>
                </div>
                <div className={styles.researchImage}>
                    {image}
                </div>
            </div>
        </div>
    );
}

export function ExpertiseSection(props: ExpertiseProps) {
    const {
        className,
        heading,
        subHeading,
    } = props;
    return (
        <div className={_cs(styles.expertiseSection, className)}>
            <div className={styles.expertiseSubheading}>
            <div className={styles.expertiseHeading}>
                {heading}
            </div>
                {subHeading}
            </div>
        </div>
    );
}

export function ResearchSection(props: ResearchSectionProps) {
    const {
        className,
        image,
        heading,
        description,
        title
    } = props;

    return (
        <div className={_cs(styles.researchModal, className)}>
            <div className={styles.modalImage}>
                {image}
            </div>
            <div className={styles.modalHeading}>
                {heading}
            </div>
            <div className={styles.modalDescription}>
                {description}
            </div>
            <div className={styles.modalTitle}>
                {title}
            </div>
        </div>
    );
}

export function ApproachSection(props: ApproachSectionProps) {
    const {
        className,
        heading,
        subHeading,
        image,
        description,
    } = props;
    return (
        <div className={_cs(styles.approachSection, className)}>
            <div className={styles.approachHeading}>
                {heading}
            </div>
            <div className={styles.approachSubheading}>
                {subHeading}
            </div>
            <div className={styles.approachDescription}>
                <div className={styles.description}>
                    {description}
                </div>
                <div className={styles.approachImage}>
                    {image}
                </div>
            </div>
        </div>
    );
}

export function ExpertiseDetail(props: ExpertiseDetailProps) {
    const {
        className,
        icon,
        description,
    } = props;
    return (
        <div className={_cs(styles.expertiseDetail, className)}>
            <div className={styles.expertiseDescription}>
                {icon}
                <div className={styles.iconDescription}>
                    {description}
                </div>
            </div>
        </div>
    );
}

function ServiceDetailsPage() {}

export default ServiceDetailsPage;
