import { GetStaticProps, GetStaticPaths } from 'next';
import {
    IoIosArrowRoundBack,
    IoIosArrowRoundForward,
} from 'react-icons/io';
import Link from 'next/link';
import staticBlogs, {
    Blog,
    getBlogCoverImage,
} from 'data/blogs';
import {
    ProjectSection,
} from 'components/WorkDetailsPage';
import Page from 'components/general/Page';
import Button from 'components/general/Button';

import Banner from 'components/general/Banner';
import KeyFigure from 'components/general/KeyFigure';

import styles from './styles.module.css';

type BlogPageProps = {
    specificBlogData: Blog,
    specificNextPost: Blog | null,
    specificPrevPost: Blog | null,
};

function BlogPage(props: BlogPageProps) {
    const {
        specificBlogData,
        specificNextPost,
        specificPrevPost,
    } = props;

    return (
        <Page
            pageTitle="Blog"
            banner={(
                <Banner
                    backLinkTitle="All Blogs"
                    backLinkHref="/blogs/"
                    title={specificBlogData.blogTitle}
                    stats={(
                        <div className={styles.keyFigures}>
                            <KeyFigure
                                label="Posted On"
                                value={specificBlogData.postedOn}
                            />
                            <KeyFigure
                                label="Type"
                                value={specificBlogData.blogType}
                            />
                        </div>
                    )}
                />
            )}
        >
            <div className={styles.deepDashboard}>
                <img
                    className={styles.bannerImg}
                    src={getBlogCoverImage(specificBlogData.id)}
                    alt="Dashboard"
                    width={1400}
                    height={550}
                />
            </div>
            <div className={styles.projectList}>
                <div className={styles.projectSection}>
                    <ProjectSection
                        title="About the Project"
                        summary={specificBlogData.summary}
                    />
                    <ProjectSection
                        title="What we did in the project"
                        summary={(
                            <div>
                                <ol>
                                    <li
                                        className={styles.projectDescription}
                                    >
                                        {specificBlogData.whatWeDid[0]}
                                    </li>
                                    <li
                                        className={styles.projectDescription}
                                    >
                                        {specificBlogData.whatWeDid[1]}
                                    </li>
                                    <li
                                        className={styles.projectDescription}
                                    >
                                        {specificBlogData.whatWeDid[2]}
                                    </li>
                                    <li
                                        className={styles.projectDescription}
                                    >
                                        {specificBlogData.whatWeDid[3]}
                                    </li>
                                    <li
                                        className={styles.projectDescription}
                                    >
                                        {specificBlogData.whatWeDid[4]}
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
                {specificPrevPost && (
                    <div className={styles.projectLinks}>
                        <IoIosArrowRoundBack />
                        <Link
                            href={`/blogs/${specificPrevPost.id}`}
                        >
                            {specificPrevPost.blogTitle}
                        </Link>
                        <div className={styles.linkHeader}>
                            {specificPrevPost.blogType}
                        </div>
                    </div>
                )}
                {specificNextPost && (
                    <div className={styles.projectLinks}>
                        <Link
                            href={`/blogs/${specificNextPost.id}`}
                        >
                            {specificNextPost.blogTitle}
                        </Link>
                        <IoIosArrowRoundForward />
                        <div className={styles.linkHeader}>
                            {specificNextPost.blogType}
                        </div>
                    </div>
                )}
            </div>
        </Page>
    );
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async (context) => {
    const blogId = context.params?.blog;

    const specificBlog = staticBlogs.find((item) => blogId === item.id);

    const specificBlogId = staticBlogs.findIndex((item) => item.id === blogId);
    const prevBlog = staticBlogs[specificBlogId - 1];
    const nextBlog = staticBlogs[specificBlogId + 1];

    if (!specificBlog) {
        return { notFound: true };
    }

    const props: BlogPageProps = {
        specificBlogData: specificBlog,
        specificPrevPost: prevBlog ?? null,
        specificNextPost: nextBlog ?? null,
    };

    return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const pathsWithParams = staticBlogs.map((blog) => ({
        params: { blog: blog.id },
    }));

    return {
        paths: pathsWithParams,
        fallback: 'blocking',
    };
};

export default BlogPage;
