import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import {
    IoIosArrowRoundBack,
    IoIosArrowRoundForward,
} from 'react-icons/io';

import {
    CaseStudy,
    ProjectSection,
    SidePaneItem,
} from 'components/WorkDetailsPage';

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
            <Head>
                <title>
                    Work page
                </title>
            </Head>
            <div className={styles.dashboardDetail}>
                <img
                    className={styles.bannerImg}
                    src={getWorkCoverImage(specificWorkData.id)}
                    alt="Dashboard"
                    width={1400}
                    height={550}
                />
                <div className={styles.projectList}>
                    <div className={styles.projectDetail}>
                        <SidePaneItem
                            title="View Projects"
                            subtitle={(
                                <a
                                    href={specificWorkData.projectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {specificWorkData.projectUrl}
                                </a>
                            )}
                        />
                        <SidePaneItem
                            title="Work Type"
                            subtitle={getProjectTypeTitle(specificWorkData.projectType)}
                        />
                        <SidePaneItem
                            title="Client Domain"
                            subtitle={specificWorkData.client.domain}
                        />
                    </div>
                    <div className={styles.projectSection}>
                        <ProjectSection
                            title="About the Project"
                            summary={specificWorkData.summary}
                        />
                        <ProjectSection
                            title="What we did in the project"
                            summary={(
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
                            {specificWorkData.skilledUsed}
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
                    </div>
                </div>
                <hr
                    className={styles.horizontalRow}
                />
                <div className={styles.routeLinks}>
                    {specificPrevPost && (
                        <div className={styles.projectLinks}>
                            <IoIosArrowRoundBack />
                            <Link
                                href={`/works/${specificPrevPost.id}`}
                            >
                                {specificPrevPost.projectTitle}
                            </Link>
                            <div className={styles.linkHeader}>
                                {specificPrevPost.client.name}
                            </div>
                        </div>
                    )}
                    {specificNextPost && (
                        <div className={styles.projectLinks}>
                            <Link
                                href={`/works/${specificNextPost.id}`}
                            >
                                {specificNextPost.projectTitle}
                            </Link>
                            <IoIosArrowRoundForward />
                            <div className={styles.linkHeader}>
                                {specificNextPost.client.name}
                            </div>
                        </div>
                    )}
                </div>
            </div>
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
