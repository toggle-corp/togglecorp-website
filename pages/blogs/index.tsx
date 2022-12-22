import React, { useMemo, useState } from 'react';
import { IoEllipseSharp } from 'react-icons/io5';
import { GetStaticProps } from 'next';
import { _cs } from '@togglecorp/fujs';

import Page from 'components/general/Page';
import Button from 'components/general/Button';
import staticBlogs, {
    Blog,
    BlogType,
    getBlogCoverImage,
    getBlogTypeTitle,
} from 'data/blogs';
import Card from 'components/general/Card';

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
            <div className={styles.tabList}>
                <div className={styles.tabs}>
                    {blogFilterOptions.map((type, i) => (
                        <React.Fragment
                            key={type}
                        >
                            <Button
                                variant="tab"
                                className={_cs(
                                    styles.tab,
                                    filteredBlogType === type && styles.active,
                                )}
                                name={type}
                                onClick={setFilteredBlogType}
                            >
                                {type === 'all' ? 'All Blogs' : getBlogTypeTitle(type)}
                            </Button>
                            {i < (blogFilterOptions.length - 1) && (
                                <IoEllipseSharp className={styles.dot} />
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <div className={styles.horizontalRow} />
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
            </div>
        </Page>
    );
}

export const getStaticProps: GetStaticProps<BlogsPageProps> = async () => ({
    props: {
        blogs: staticBlogs,
    },
});

export default BlogsPage;
