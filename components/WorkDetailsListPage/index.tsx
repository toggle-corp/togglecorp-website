import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.css';

interface WorkListProps {
    className?: string;
    heading: React.ReactNode;
    subHeading: React.ReactNode;
    image: React.ReactNode;
}

interface projectDetailProps {
    className?: string;
    projectCompleted: React.ReactNode;
    organizationSupport: React.ReactNode;
}

export function ProjectDetail(props: projectDetailProps) {
    const {
        className,
        projectCompleted,
        organizationSupport,
    } = props;
    return (
        <div className={_cs(styles.projectCompleted, className)}>
            <div>
                Project Completed
                <div className={styles.projectCount}>
                    {projectCompleted}
                </div>
            </div>
            <div className={styles.organization}>
                Organizations Supported
                <div className={styles.projectCount}>
                    {organizationSupport}
                </div>
            </div>
        </div>
    );
}

export function WorkListSection(props: WorkListProps) {
    const {
        className,
        heading,
        subHeading,
        image,
    } = props;
    return (
        <div className={_cs(styles.workListSection, className)}>
            <div className={styles.workSection}>
                <div className={styles.workDescription}>
                    <div className={styles.workDescription}>
                        <div className={styles.workList}>
                            {heading}
                        </div>
                        {subHeading}
                    </div>
                </div>
                <div className={styles.workImage}>
                    {image}
                </div>
            </div>
        </div>
    );
}

function WorkDetailsListPage() { }

export default WorkDetailsListPage;