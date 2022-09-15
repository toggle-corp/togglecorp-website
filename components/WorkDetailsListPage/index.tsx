import Image from 'next/image';
import { ResearchModal } from '../ServiceDetailsPage';

import styles from './styles.module.css';

interface WorkListProps {
    heading: React.ReactNode;
    subHeading: React.ReactNode;
    image: React.ReactNode;
}

export function WorkListSection(props: WorkListProps) {
    const {
        heading,
        subHeading,
        image,
    } = props;
    return (
        <div className={styles.workListSection}>
            <div className={styles.workSection}>
                <div className={styles.workDescription}>
                    <div className={styles.workList}>
                        {heading}
                    </div>
                    <div className={styles.workDescription}>
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

function WorkDetailsListPage() {
    return (
        <div className={styles.workList}>
            <WorkListSection
                heading="Our Work"
                subHeading="We work closely with several national and international humanitarian organizations."
                image={
                    <Image
                        src="/organization.png"
                        alt="Organization"
                        width={456}
                        height={552}
                    />
                }
            />
            <div className={styles.projectDetail}>
                <div className={styles.projectCompleted}>
                    <div>
                        Project Completed
                        <div className={styles.projectCount}>
                            25
                        </div>
                    </div>
                    <div className={styles.organization}>
                        Organizations Supported
                        <div className={styles.projectCount}>
                            8
                        </div>
                    </div>
                </div>
            </div>
            <hr
                className={styles.horizontalRow}
            />
            <div className={styles.researchList}>
                <ResearchModal
                    image={
                        <Image
                            src="/work-list-1.png"
                            alt="Deep Dashboard"
                            width={580}
                            height={250}
                        />
                    }
                    heading="Refugee Situational Analysis"
                    description="The project is focused on monitoring Turkey’s refugee crisis and the refugee influx in Turkey which constitute mostly Syrian refugees."
                    title="Data Analysis"
                />
                <ResearchModal
                    image={undefined}
                    heading="Refugee Situational Analysis"
                    description="The project is focused on monitoring Turkey’s refugee crisis and the refugee influx in Turkey which constitute mostly Syrian refugees."
                    title="Data Analysis"
                />
            </div>
            <div className={styles.researchList}>
                <ResearchModal
                    image={undefined}
                    heading="Refugee Situational Analysis"
                    description="The project is focused on monitoring Turkey’s refugee crisis and the refugee influx in Turkey which constitute mostly Syrian refugees."
                    title="Data Analysis"
                />
                <ResearchModal
                    image={
                        <Image
                            src="/work-list-2.png"
                            alt="Deep Dashboard"
                            width={580}
                            height={250}
                        />
                    }
                    heading="Refugee Situational Analysis"
                    description="The project is focused on monitoring Turkey’s refugee crisis and the refugee influx in Turkey which constitute mostly Syrian refugees."
                    title="Data Analysis"
                />
            </div>
            <div className={styles.researchList}>
                <ResearchModal
                    image={
                        <Image
                            src="/work-list-1.png"
                            alt="Deep Dashboard"
                            width={580}
                            height={250}
                        />
                    }
                    heading="Refugee Situational Analysis"
                    description="The project is focused on monitoring Turkey’s refugee crisis and the refugee influx in Turkey which constitute mostly Syrian refugees."
                    title="Data Analysis"
                />
                <ResearchModal
                    image={undefined}
                    heading="Refugee Situational Analysis"
                    description="The project is focused on monitoring Turkey’s refugee crisis and the refugee influx in Turkey which constitute mostly Syrian refugees."
                    title="Data Analysis"
                />
            </div>
            <div className={styles.researchList}>
                <ResearchModal
                    image={undefined}
                    heading="Refugee Situational Analysis"
                    description="The project is focused on monitoring Turkey’s refugee crisis and the refugee influx in Turkey which constitute mostly Syrian refugees."
                    title="Data Analysis"
                />
                <ResearchModal
                    image={
                        <Image
                            src="/work-list-2.png"
                            alt="Deep Dashboard"
                            width={580}
                            height={250}
                        />
                    }
                    heading="Refugee Situational Analysis"
                    description="The project is focused on monitoring Turkey’s refugee crisis and the refugee influx in Turkey which constitute mostly Syrian refugees."
                    title="Data Analysis"
                />
            </div>
        </div>
    );
}

export default WorkDetailsListPage;