import { _cs } from '@togglecorp/fujs';
import Image from 'next/image';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Button } from '../Button';

import styles from './styles.module.css';

interface TitleProps {
    title: React.ReactNode;
}

interface HeadingProps {
    title: string;
    duration: string;
    summary: string;
    children: React.ReactNode;
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
export function Footer(props: FooterContentProps) {
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

export function Heading(props: HeadingProps) {
    const {
        title,
        duration,
        summary,
        children,
    } = props;

    return (
        <div className={styles.analysisSection}>
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

function WorkDetailsPage() {
    return (
        <>
            <Heading
                title="Refugee Situational Analysis"
                duration="January 2020-Ongoing"
                summary="International Federation of Red Cross (IFRC) in collaboration with Data Friendly Space"
            >
            </Heading>
            <div className={styles.deepDashboard}>
                <Image
                    src="/dashboard.png"
                    alt="Dashboard"
                    width={1138}
                    height={466}
                />
            </div>
            <div className={styles.projectList}>
                <div className={styles.projectDetail}>
                    <SidePane
                        title="View Projects"
                        subtitle="RHCP News"
                    />
                    <SidePane
                        title="Work Type"
                        subtitle="Research and Data Analysis"
                    />
                    <SidePane
                        title="Client Domain"
                        subtitle="Humanitarian Effort"
                    />
                </div>
                <div>
                    <MainContent
                        title="About the Project"
                        summary="The project is focused on monitoring Turkey’s refugee crisis and the refugee influx in Turkey which constitute mostly Syrian refugees. The aim of the project is to regularly keep track of the migrant situation in Turkey through multi-sectoral analysis of collected data on Turkey’s displacement patterns, economy, increased demand on essential needs and services. It also identifies the evolution of the conflict between Syria and Afghanistan and the possibility of return, Turkish language ability, and discrimination of refugees and their perceptions on discrimination as a barrier to accessing basic services. A database of carefully annotated relevant documents for Turkey’s Refugee Crisis has been created in DEEP since 2020."
                    />
                    <MainContent
                        title="What we did in the project"
                        summary={
                            <div>
                                <ol>
                                    <li
                                        className={styles.projectDescription}
                                    >
                                        Collected data related to Turkey’s refugee crisis to identify the potential negative socio-economic impact of refugees' presence on host communities.
                                    </li>
                                    <li
                                        className={styles.projectDescription}
                                    >
                                        More than 2600 sources have been reviewed until now by exploration of secondary data related to refugees in Turkey about the accessibility of basic services, discrimination, and the relation between refugees and Turkish people.
                                    </li>
                                    <li
                                        className={styles.projectDescription}
                                    >
                                        Regulating the current situation, sentiments about refugees, change over time, refugee influx, the outlook for social cohesion for refugees in Turkey in the near future.
                                    </li>
                                    <li
                                        className={styles.projectDescription}
                                    >
                                        Secondary data review of relevant reports, news articles, opinion articles, and academic articles to support IFRC in planning a targeted response.
                                    </li>
                                </ol>
                                <hr
                                    className={styles.horizontalRow}
                                />
                                <div className={styles.quoteDetails}>
                                    <div className={styles.quote}>
                                        “Data Analysis performed by Togglecorp helped us determine better solutions for conflict resolution in Afghanistan”
                                    </div>
                                    <div className={styles.writer}>
                                        Adrian, DFS
                                    </div>
                                    <div className={styles.testimonial}>
                                        View Full Testimonial
                                    </div>
                                </div>
                                <hr
                                    className={styles.horizontalRow}
                                />
                            </div>
                        }
                    />
                    <div className={styles.descriptionList}>
                        <Description
                            description="Voluptatibus pariatur perferendis vel eius odit enim. Eius officiis dolor id aliquid et eligendi autem asperiores. Est rem fugit voluptatem alias fuga. Aut blanditiis quo laudantium dicta quidem ullam sapiente sit."
                        />
                        <Description
                            description="Quasi soluta omnis quaerat voluptatem sapiente. Molestiae molestiae tenetur officia qui. Voluptate nihil sint provident exercitationem velit recusandae libero. Culpa delectus ipsum error sunt."
                        />
                        <Description
                            description="Veritatis consequuntur ea sed deleniti deserunt. Atque deserunt quia quasi mollitia. Distinctio sit atque quasi nesciunt amet fugit ullam. Aut corrupti fuga sint dicta distinctio. Eveniet earum saepe quaerat quaerat est."
                        />
                    </div>
                    <div className={styles.deepLogo}>
                        <Image
                            src="/deep-description-logo.png"
                            alt="Deep"
                            width={750}
                            height={500}
                        />
                    </div>
                    <Title
                        title="Case Study"
                    />
                    <Modal
                        heading="Use of Qualitative Data Analysis in conflict resolution in low-income cities"
                        description="Read about the various applications of data analytics and business analytics tools that Tredence uses to provide advanced analytics solutions that drive ..."
                        link="View Full Case Study"
                        image={
                            <Image
                                src="/modal_image.png"
                                alt="TC"
                                width={250}
                                height={250}
                            />
                        }
                    />
                    <div className={styles.descriptionList}>
                        <Description
                            description="Voluptatibus pariatur perferendis vel eius odit enim. Eius officiis dolor id aliquid et eligendi autem asperiores. Est rem fugit voluptatem alias fuga. Aut blanditiis quo laudantium dicta quidem ullam sapiente sit."
                        />
                        <Description
                            description="Quasi soluta omnis quaerat voluptatem sapiente. Molestiae molestiae tenetur officia qui. Voluptate nihil sint provident exercitationem velit recusandae libero. Culpa delectus ipsum error sunt."
                        />
                        <Description
                            description="Veritatis consequuntur ea sed deleniti deserunt. Atque deserunt quia quasi mollitia. Distinctio sit atque quasi nesciunt amet fugit ullam. Aut corrupti fuga sint dicta distinctio. Eveniet earum saepe quaerat quaerat est."
                        />
                    </div>
                    <Title
                        title="Skills Used"
                    />
                    <div className={styles.reviewSection}>
                        Secondary Data Review, Descriptive Analysis
                    </div>
                    <div className={styles.organisationSection}>
                        We have worked with IFRC and other organizations to enhace their technological and analysis capabilities

                        Learn how we can help you to enhance yours.
                    </div>
                    <Button
                        className={styles.button}
                        variant='primary'
                    >
                        Book a free consultation
                    </Button>
                </div>
            </div>
            <hr
                className={styles.horizontalRow}
            />
        </>
    );
}
export default WorkDetailsPage;
