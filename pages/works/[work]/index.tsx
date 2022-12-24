import { GetStaticProps, GetStaticPaths } from 'next';
import { CaseStudy } from 'components/WorkDetailsPage';
import PageContentWithSidebar from 'components/general/PageContentWithSidebar';
import Banner from 'components/general/Banner';
import KeyFigure from 'components/general/KeyFigure';

import staticWorks, {
    Work,
    getWorkCoverImage,
    getProjectTypeTitle,
} from 'data/works';
import Page from 'components/general/Page';
import Button from 'components/general/Button';

import modalImage from 'resources/modal_image.webp';
import deepDescriptionLogo from 'resources/deep-description-logo.webp';

import styles from './styles.module.css';

type WorkPageProps = {
    specificWorkData: Work,
    specificPrevPost: Work | null,
    specificNextPost: Work | null,
};

function WorkPage(props: WorkPageProps) {
    const {
        specificWorkData,
        specificPrevPost,
        specificNextPost,
    } = props;

    return (
        <Page
            pageTitle="Work"
            banner={(
                <Banner
                    backLinkTitle="All Projects"
                    backLinkHref="/works/"
                    title={specificWorkData.projectTitle}
                    stats={(
                        <div className={styles.keyFigures}>
                            <KeyFigure
                                label="Project Duration"
                                value={specificWorkData.projectDuration}
                            />
                            <KeyFigure
                                label="Client"
                                value={specificWorkData.client.name}
                            />
                        </div>
                    )}
                />
            )}
        >
            <PageContentWithSidebar
                previewImageUrl={getWorkCoverImage(specificWorkData.id)}
                sideBarContent={(
                    <>
                        <KeyFigure
                            label="View Projects"
                            value={specificWorkData.projectTitle}
                            valueHref={specificWorkData.projectUrl}
                        />
                        <KeyFigure
                            label="Work Type"
                            value={getProjectTypeTitle(specificWorkData.projectType)}
                        />
                        <KeyFigure
                            label="Client Domain"
                            value={specificWorkData.client.domain}
                        />
                    </>
                )}
                nextPageDetails={specificNextPost ? {
                    url: `/works/${specificNextPost.id}`,
                    title: specificNextPost.projectTitle,
                    description: specificNextPost.client.name,
                } : undefined}
                prevPageDetails={specificPrevPost ? {
                    url: `/works/${specificPrevPost.id}`,
                    title: specificPrevPost.projectTitle,
                    description: specificPrevPost.client.name,
                } : undefined}
            >
                <div>
                    <h3>
                        About the Project
                    </h3>
                    <div>
                        {specificWorkData.summary}
                    </div>
                </div>
                <div>
                    <h3>
                        What we did in the project
                    </h3>
                    <div>
                        <ol>
                            <li
                                className={styles.projectDescription}
                            >
                                {specificWorkData.whatWeDid[0]}
                            </li>
                            <li
                                className={styles.projectDescription}
                            >
                                {specificWorkData.whatWeDid[1]}
                            </li>
                            <li
                                className={styles.projectDescription}
                            >
                                {specificWorkData.whatWeDid[2]}
                            </li>
                            <li
                                className={styles.projectDescription}
                            >
                                {specificWorkData.whatWeDid[3]}
                            </li>
                        </ol>
                        <hr
                            className={styles.horizontalRow}
                        />
                        <div className={styles.quoteDetails}>
                            <div className={styles.quote}>
                                {/* eslint-disable-next-line max-len */}
                                Data Analysis performed by Togglecorp helped us determine better solutions for conflict resolution in Afghanistan
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
                </div>
                <div className={styles.descriptionList}>
                    <p>
                        {/* eslint-disable-next-line max-len */}
                        Voluptatibus pariatur perferendis vel eius odit enim. Eius officiis dolor id aliquid et eligendi autem asperiores. Est rem fugit voluptatem alias fuga. Aut blanditiis quo laudantium dicta quidem ullam sapiente sit.
                    </p>
                    <p>
                        {/* eslint-disable-next-line max-len */}
                        Quasi soluta omnis quaerat voluptatem sapiente. Molestiae molestiae tenetur officia qui. Voluptate nihil sint provident exercitationem velit recusandae libero. Culpa delectus ipsum error sunt.
                    </p>
                    <p>
                        {/* eslint-disable-next-line max-len */}
                        Veritatis consequuntur ea sed deleniti deserunt. Atque deserunt quia quasi mollitia. Distinctio sit atque quasi nesciunt amet fugit ullam. Aut corrupti fuga sint dicta distinctio. Eveniet earum saepe quaerat quaerat est.
                    </p>
                </div>
                <div className={styles.deepLogo}>
                    <img
                        className={styles.deepImg}
                        src={deepDescriptionLogo}
                        alt="Deep"
                        width={750}
                        height={500}
                    />
                </div>
                <div className={styles.caseStudy}>
                    Case Study
                </div>
                <CaseStudy
                    heading="Use of Qualitative Data Analysis in conflict resolution in low-income cities"
                    description="Read about the various applications of data analytics and business analytics tools that Tredence uses to provide advanced analytics solutions that drive ..."
                    link="View Full Case Study"
                    image={(
                        <img
                            className={styles.caseImg}
                            src={modalImage}
                            alt="TC"
                            width={250}
                            height={250}
                        />
                    )}
                />
                <div className={styles.descriptionList}>
                    <p className={styles.paragraph}>
                        {/* eslint-disable-next-line max-len */}
                        Voluptatibus pariatur perferendis vel eius odit enim. Eius officiis dolor id aliquid et eligendi autem asperiores. Est rem fugit voluptatem alias fuga. Aut blanditiis quo laudantium dicta quidem ullam sapiente sit.
                    </p>
                    <p className={styles.paragraph}>
                        {/* eslint-disable-next-line max-len */}
                        Quasi soluta omnis quaerat voluptatem sapiente. Molestiae molestiae tenetur officia qui. Voluptate nihil sint provident exercitationem velit recusandae libero. Culpa delectus ipsum error sunt.
                    </p>
                    <p className={styles.paragraph}>
                        {/* eslint-disable-next-line max-len */}
                        Veritatis consequuntur ea sed deleniti deserunt. Atque deserunt quia quasi mollitia. Distinctio sit atque quasi nesciunt amet fugit ullam. Aut corrupti fuga sint dicta distinctio. Eveniet earum saepe quaerat quaerat est.
                    </p>
                </div>
                <div className={styles.caseStudy}>
                    Skills Used
                </div>
                <div className={styles.reviewSection}>
                    {specificWorkData.skillsUsed}
                </div>
                <div className={styles.organisationSection}>
                    {/* eslint-disable-next-line max-len */}
                    We have worked with IFRC and other organizations to enhace their technological and analysis capabilities
                </div>
                <div className={styles.organisationSection}>
                    Learn how we can help you to enhance yours.
                </div>
                <Button
                    name={undefined}
                    className={styles.freeButton}
                    variant="primary"
                    disabled
                >
                    Book a free consultation
                </Button>
            </PageContentWithSidebar>
        </Page>
    );
}

export const getStaticProps: GetStaticProps<WorkPageProps> = async (context) => {
    const workId = context.params?.work;

    const specificWork = staticWorks.find((item) => workId === item.id);
    const specificWorkIndex = staticWorks.findIndex((item) => item.id === workId);

    const prevWork = staticWorks[specificWorkIndex - 1];
    const nextWork = staticWorks[specificWorkIndex + 1];

    if (!specificWork) {
        return { notFound: true };
    }

    const props: WorkPageProps = {
        specificWorkData: specificWork,
        specificPrevPost: prevWork ?? null,
        specificNextPost: nextWork ?? null,
    };
    return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const pathsWithParams = staticWorks.map((work) => ({
        params: { work: work.id },
    }));

    return {
        paths: pathsWithParams,
        fallback: 'blocking',
    };
};

export default WorkPage;
