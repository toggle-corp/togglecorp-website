import type { NextPage } from 'next'
import Page from '../../components/Page';
import WorkDetailsPage, { MainContent, SidePane } from '../../components/WorkDetailsPage';
import { Navigation } from '../../components/WorkDetailsPage';
import { Button } from '../../components/Navbar';
import styles from './styles.module.css';

const WorkPage: NextPage = () => {
    return (
        <Page>
            <WorkDetailsPage />
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
            <MainContent
                title="About the Project"
                summary="The project is focused on monitoring Turkey’s refugee crisis and the refugee influx in Turkey which constitute mostly Syrian refugees. The aim of the project is to regularly keep track of the migrant situation in Turkey through multi-sectoral analysis of collected data on Turkey’s displacement patterns, economy, increased demand on essential needs and services. It also identifies the evolution of the conflict between Syria and Afghanistan and the possibility of return, Turkish language ability, and discrimination of refugees and their perceptions on discrimination as a barrier to accessing basic services. A database of carefully annotated relevant documents for Turkey’s Refugee Crisis has been created in DEEP since 2020."
            />
            <MainContent
                title="What we did in the project"
                summary={<div className={styles.projectDescription}>
                    <ol>
                        <li>
                            Collected data related to Turkey’s refugee crisis to identify the potential negative socio-economic impact of refugees' presence on host communities.
                        </li>
                        <li>
                            More than 2600 sources have been reviewed until now by exploration of secondary data related to refugees in Turkey about the accessibility of basic services, discrimination, and the relation between refugees and Turkish people.
                        </li>
                        <li>
                            Regulating the current situation, sentiments about refugees, change over time, refugee influx, the outlook for social cohesion for refugees in Turkey in the near future.
                        </li>
                        <li>
                            Secondary data review of relevant reports, news articles, opinion articles, and academic articles to support IFRC in planning a targeted response.
                        </li>
                    </ol>
                    <hr className={styles.horizontalRow} />
                    <div className={styles.quote}>
                        “Data Analysis performed by Togglecorp helped us determine better solutions for conflict resolution in Afghanistan”
                    </div>
                    <div>
                        Adrian, DFS
                    </div>
                    <div>
                        View Full Testimonial
                    </div>
                    <hr className={styles.horizontalRow} />
                </div>
                }
            />
            <div className={styles.detailSection}>
                <div className={styles.aboutDetail}>
                    <div className={styles.testimonial}>Voluptatibus pariatur perferendis vel eius odit enim. Eius officiis dolor id aliquid et eligendi autem asperiores. Est rem fugit voluptatem alias fuga. Aut blanditiis quo laudantium dicta quidem ullam sapiente sit.</div>
                    <div className={styles.testimonial}>Quasi soluta omnis quaerat voluptatem sapiente. Molestiae molestiae tenetur officia qui. Voluptate nihil sint provident exercitationem velit recusandae libero. Culpa delectus ipsum error sunt.</div>
                    <div className={styles.testimonial}>Veritatis consequuntur ea sed deleniti deserunt. Atque deserunt quia quasi mollitia. Distinctio sit atque quasi nesciunt amet fugit ullam. Aut corrupti fuga sint dicta distinctio. Eveniet earum saepe quaerat quaerat est.</div>
                </div>
            </div>
        </Page>
    )
}
export default WorkPage;
