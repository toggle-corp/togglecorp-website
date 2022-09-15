import { _cs } from '@togglecorp/fujs';
import Image from 'next/image';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Button } from '../Button';

import styles from './styles.module.css';

interface ServiceProps {
    heading: React.ReactNode;
    subHeading: React.ReactNode;
    image: React.ReactNode;
}

interface ExpertiseProps {
    heading: React.ReactNode;
    subHeading: string;
}

interface ExpertiseDetailProps {
    icon: React.ReactNode;
    description: string;
}

interface ApproachSectionProps {
    heading: string;
    subHeading: string;
    image: React.ReactNode;
    description: React.ReactNode;
}

interface ResearchModalProps {
    image: React.ReactNode;
    heading: React.ReactNode;
    description: React.ReactNode;
    title: React.ReactNode;
}

export function ServiceSection(props: ServiceProps) {
    const {
        heading,
        subHeading,
        image,
    } = props;
    return (
        <div className={styles.serviceSection}>
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
        heading,
        subHeading,
    } = props;
    return (
        <div className={styles.expertiseSection}>
            <div className={styles.expertiseHeading}>
                {heading}
            </div>
            <div className={styles.expertiseSubheading}>
                {subHeading}
            </div>
        </div>
    );
}

export function ResearchModal(props: ResearchModalProps) {
    const {
        image,
        heading,
        description,
        title
    } = props;

    return (
        <div className={styles.researchModal}>
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
        heading,
        subHeading,
        image,
        description,
    } = props;
    return (
        <div className={styles.approachSection}>
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
        icon,
        description,
    } = props;
    return (
        <div className={styles.expertiseDetail}>
            <div className={styles.expertiseDescription}>
                {icon}
                <div className={styles.iconDescription}>
                    {description}
                </div>
            </div>
        </div>
    );
}

function ServiceDetailsPage() {
    return (
        <div className={styles.service}>
            <ServiceSection
                heading="Research and Data Analysis"
                subHeading="We conduct secondary data evaluations with a humanitarian focus on qualitative research, report writing and data analysis."
                image={
                    <Image
                        src="/organization.png"
                        alt="Organization"
                        width={456}
                        height={552}
                    />
                }
            />
            <div className={styles.softwareDetail}>
                Also see:
                <div className={styles.consultant}>
                    Software Developing, Consulting
                </div>
            </div>
            <div className={styles.organizationList}>
                Humanitarian organizations we’ve worked with
            </div>
            <div className={styles.organizationImage}>
                <Image
                    src="/organization-list.png"
                    alt="Organization List"
                    width={1085}
                    height={127}
                />
            </div>
            <div className={styles.deepDetail}>
                <div className={styles.deepDetailDescription}>
                    Our in-house platform DEEP centralizes, accelerates and strengthens the inter-agency response to humanitarian crises. It hosts the largest analysis framework repository in the international humanitarian sector.
                    <div className={styles.knowDeep}>
                        <a href="#">
                            Know more about DEEP
                            <IoIosArrowRoundForward />
                        </a>
                    </div>
                </div>
                <div className={styles.deepImage}>
                    <Image
                        src="/deep-primary-logo.png"
                        alt="Deep Primary Logo"
                        width={259}
                        height={259}
                    />
                </div>
            </div>
            <div className={styles.expertise}>
                <ExpertiseSection
                    heading="Our Expertise"
                    subHeading="We research, analyse, interpret and present data related to humanitarian crises"
                />
                <div className={styles.expertiseDetails}>
                    <ExpertiseDetail
                        icon={
                            <Image
                                src="/planning.png"
                                alt="Planning Logo"
                                width={60}
                                height={60}
                            />
                        }
                        description="We support humanitarian organizations in intervention planning, analyze past results and perform various analyses"
                    />
                    <ExpertiseDetail
                        icon={
                            <Image
                                src="/monitoring.png"
                                alt="Monitoring Logo"
                                width={60}
                                height={60}
                            />
                        }
                        description="We conduct periodic and continuous monitoring and evaluation of the humanitarian efforts in emergency response"
                    />
                </div>
            </div>
            <div className={styles.approach}>
                <ApproachSection
                    heading="Our Approach"
                    subHeading="We believe in effective data sharing and information management during any humanitarian crisis. Access to data is just the beginning."
                    image={
                        <Image
                            src="/dummy-image.png"
                            alt="Dummy Image"
                            width={350}
                            height={400}
                        />}
                    description={
                        <div>
                            <ol type="1">
                                <li
                                    className={styles.descriptionHeading}
                                >
                                    Data Extraction
                                    <div className={styles.approachDetailDescription}>
                                        We develop a list of sources that will provide credible information for collecting data. Sources include daily newspapers, academic reports, websites, journals, relevant documents provided by the organizations and infographics. The data from these sources are recorded into our in-house platform called DEEP for the second stage of our work.
                                    </div>
                                </li>
                                <hr
                                    className={styles.horizontalRow}
                                />
                                <li
                                    className={styles.descriptionHeading}
                                >
                                    Data Segregation
                                </li>
                                <hr
                                    className={styles.horizontalRow}
                                />
                                <li
                                    className={styles.descriptionHeading}
                                >
                                    Review and Analysis
                                </li>
                                <hr
                                    className={styles.horizontalRow}
                                />
                                <li
                                    className={styles.descriptionHeading}
                                >
                                    Monitoring and Evaluation
                                </li>
                                <hr
                                    className={styles.horizontalRow}
                                />
                                <li
                                    className={styles.descriptionHeading}
                                >
                                    Write Up
                                </li>
                                <hr
                                    className={styles.horizontalRow}
                                />
                            </ol>
                        </div>
                    }
                />
            </div>
            <ExpertiseSection
                heading={undefined}
                subHeading="Check our research works"
            />
            <div className={styles.researchButtons}>
                <Button
                    variant="secondary"
                >
                    All Research Works
                </Button>
                <Button
                    variant="secondary"
                >
                    Secondary Data Review
                </Button>
                <Button
                    variant="secondary"
                >
                    Data Analysis
                </Button>
                <Button
                    variant="secondary"
                >
                    Report Writing
                </Button>
                <Button
                    variant="secondary"
                >
                    Monitoring and Evaluation
                </Button>
            </div>
            <hr
                className={styles.horizontalRow}
            />
            <div className={styles.researchList}>
                <ResearchModal
                    image={
                        <Image
                            src="/dashboard.png"
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
                            src="/dashboard.png"
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
            <div className={styles.knowwork}>
                <a href="#">
                    See all of the works
                    <IoIosArrowRoundForward />
                </a>
            </div>
        </div>
    );
}
export default ServiceDetailsPage;
