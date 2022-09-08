import type { NextPage } from 'next'
import Image from 'next/image';
import {
    IoIosArrowRoundBack,
    IoIosArrowRoundForward,
} from 'react-icons/io';
import WorkDetailsPage, {
    Description,
    MainContent,
    Modal,
    SidePane,
    Title,
} from '../../components/WorkDetailsPage';
import Page from '../../components/Page';
import { Button } from '../../components/Navbar';

import styles from './styles.module.css';

const WorkPage: NextPage = () => {
    return (
        <Page>
            <WorkDetailsPage />
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
            <div className={styles.routeLinks}>
                <a className={styles.projectLinks}
                    href=''
                >
                    <IoIosArrowRoundBack />
                    HNO Support
                    <div className={styles.linkHeader}>
                        Data Friendly Support
                    </div>
                </a>
                <a className={styles.projectLinks}
                    href=''
                >
                    COVID -19 Information Management
                    <IoIosArrowRoundForward />
                    <div className={styles.linkHeader}>
                        GIMAC with DFS
                    </div>
                </a>
            </div>
        </Page>
    )
}
export default WorkPage;
