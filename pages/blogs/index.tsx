import React, { useMemo, useState } from 'react';
import { GetStaticProps } from 'next';

import Page from 'components/general/Page';
import Container from 'components/general/Container';
import staticBlogs, {
    Blog,
    BlogType,
    getBlogCoverImage,
    getBlogTypeTitle,
} from 'data/blogs';
import Card from 'components/general/Card';
import Tabs from 'components/general/Tabs';
import Separator from 'components/general/Separator';
import { selfSelector } from 'utils/common';

import BannerWithImage from 'components/general/BannerWithImage';

import styles from './styles.module.css';

export const blogFilterOptions: (BlogType | 'all')[] = [
    'all',
    'research',
    'libraries',
    'client',
    'case',
    'team',
];

interface BlogsPageProps {
    blogs: Blog[];
}

function BlogsPage(props: BlogsPageProps) {
    const {
        blogs,
    } = props;

    const [
        filteredBlogType,
        setFilteredBlogType,
    ] = useState<BlogType | 'all'>('all');

    const filteredBlogs = useMemo(() => {
        if (filteredBlogType === 'all') {
            return blogs;
        }
        return blogs.filter((blog) => (
            blog.blogType === filteredBlogType
        ));
    }, [blogs, filteredBlogType]);

    const labelSelector = React.useCallback((blogType: BlogType | 'all') => (
        blogType === 'all' ? 'All Blogs' : getBlogTypeTitle(blogType)
    ), []);

    return (
        <Page
            className={styles.blogs}
            pageTitle="Our Blogs"
            banner={(
                <BannerWithImage
                    title="Blog"
                    description="We love writing about things we do and the things we don’t"
                />
            )}
        >
            <Container contentClassName={styles.blogContent}>
                <Tabs
                    options={blogFilterOptions}
                    value={filteredBlogType}
                    onChange={setFilteredBlogType}
                    keySelector={selfSelector}
                    labelSelector={labelSelector}
                />
                <Separator />
                <div className={styles.blogList}>
                    {filteredBlogs.map((blog) => (
                        <Card
                            key={blog.id}
                            className={styles.blog}
                            imageSrc={getBlogCoverImage(blog.id)}
                            title={blog.blogTitle}
                            description={blog.summary}
                            href={`/blogs/${blog.id}`}
                        />
                    ))}
                </div>
            </Container>
        </Page>
    );
}

export const getStaticProps: GetStaticProps<BlogsPageProps> = async () => ({
    props: {
        blogs: staticBlogs,
    },
});

export default BlogsPage;
