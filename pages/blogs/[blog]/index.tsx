import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import {
    IoIosArrowRoundBack,
    IoIosArrowRoundForward,
} from 'react-icons/io';
import Link from 'next/link';

// FIXME: move this to certain folder
import blogs from 'data.json';
import {
    ProjectSection,
} from 'components/WorkDetailsPage';
import Page from 'components/general/Page';
import Button from 'components/general/Button';

import Banner from 'components/general/Banner';
import KeyFigure from 'components/general/KeyFigure';

import dashboardImage from 'resources/dashboard.webp';

import styles from './styles.module.css';

interface BlogInterface {
    id: string;
    blogType: string;
    blogTitle: string;
    postedOn: string;
    summary: string;
    whatWeDid: string[];
}

interface BlogPageProps {
    specificblogData: BlogInterface,
    specificprevpost: BlogInterface | null,
    specificnextpost: BlogInterface | null,
}

function Blog(props: BlogPageProps) {
    const {
        specificblogData,
        specificnextpost,
        specificprevpost,
    } = props;
    return (
        <Page
            banner={(
                <Banner
                    backLinkTitle="All Blogs"
                    backLinkHref="/blogs/"
                    title={specificblogData.blogTitle}
                    stats={(
                        <div className={styles.keyFigures}>
                            <KeyFigure
                                label="Posted On"
                                value={specificblogData.postedOn}
                            />
                            <KeyFigure
                                label="Type"
                                value={specificblogData.blogType}
                            />
                        </div>
                    )}
                />
            )}
        >
            <Head>
                <title>
                    Blog
                </title>
            </Head>
            <div className={styles.deepDashboard}>
                <img
                    className={styles.bannerImg}
                    src={dashboardImage}
                    alt="Dashboard"
                    width={1138}
                    height={466}
                />
            </div>
            <div className={styles.projectList}>
                <div className={styles.projectSection}>
                    <ProjectSection
                        title="About the Project"
                        summary={specificblogData.summary}
                    />
                    <ProjectSection
                        title="What we did in the project"
                        summary={(
                            <div>
                                <ol>
                                    <li
                                        className={styles.projectDescription}
                                    >
                                        {specificblogData.whatWeDid[0]}
                                    </li>
                                    <li
                                        className={styles.projectDescription}
                                    >
                                        {specificblogData.whatWeDid[1]}
                                    </li>
                                    <li
                                        className={styles.projectDescription}
                                    >
                                        {specificblogData.whatWeDid[2]}
                                    </li>
                                    <li
                                        className={styles.projectDescription}
                                    >
                                        {specificblogData.whatWeDid[3]}
                                    </li>
                                    <li
                                        className={styles.projectDescription}
                                    >
                                        {specificblogData.whatWeDid[4]}
                                    </li>
                                </ol>
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
                    <div className={styles.organisationSection}>
                        {/* eslint-disable-next-line max-len */}
                        We have worked with IFRC and other organizations to enhace their technological and analysis capabilities.
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
                {specificprevpost && (
                    <div className={styles.projectLinks}>
                        <IoIosArrowRoundBack />
                        <Link
                            href={`/blogs/${specificprevpost.id}`}
                        >
                            {specificprevpost.blogTitle}
                        </Link>
                        <div className={styles.linkHeader}>
                            {specificprevpost.blogType}
                        </div>
                    </div>
                )}
                {specificnextpost && (
                    <div className={styles.projectLinks}>
                        <Link
                            href={`/blogs/${specificnextpost.id}`}
                        >
                            {specificnextpost.blogTitle}
                        </Link>
                        <IoIosArrowRoundForward />
                        <div className={styles.linkHeader}>
                            {specificnextpost.blogType}
                        </div>
                    </div>
                )}
            </div>
        </Page>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const blogId = context.params?.blog;
    const specificBlog = blogs.blog.find((item) => blogId === item.id);

    const specificBlogId = blogs.blog.findIndex((item) => item.id === blogId);
    const prevBlog = blogs.blog[specificBlogId - 1];
    const nextBlog = blogs.blog[specificBlogId + 1];

    if (!specificBlog) {
        return { notFound: true };
    }

    const props: BlogPageProps = {
        specificblogData: specificBlog,
        specificprevpost: prevBlog ?? null,
        specificnextpost: nextBlog ?? null,
    };

    return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const pathsWithParams = blogs.blog.map((blog: BlogInterface) => ({
        params: { blog: blog.id },
    }));

    return {
        paths: pathsWithParams,
        fallback: 'blocking',
    };
};

export default Blog;
