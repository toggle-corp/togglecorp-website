import React, { useMemo, useState } from 'react';
import Head from 'next/head';

import blogs from 'data.json';
import Page from 'components/general/Page';
import Button from 'components/general/Button';
import { ResearchSection } from 'components/ServiceDetailsPage';

import BannerWithImage from 'components/general/BannerWithImage';
import workListOne from 'resources/work-list-1.webp';

import styles from './styles.module.css';

export const buttons = [
    {
        name: 'All',
        value: 'all',
    },
    {
        name: 'Research Article',
        value: 'research',
    },
    {
        name: 'Libraries',
        value: 'libraries',
    },
    {
        name: 'Client Story',
        value: 'client',
    },
    {
        name: 'Case Story',
        value: 'case',
    },
    {
        name: 'Team Story',
        value: 'team',
    },
];

function Blog() {
    const [filteredBlogType, setFilteredBlogType] = useState<string>('all');

    const filteredBlogs = useMemo(() => {
        if (filteredBlogType === 'all') {
            return blogs.blog;
        }
        return blogs.blog.filter((blog) => blog.blogType === filteredBlogType);
    }, [filteredBlogType]);

    return (
        <Page
            banner={(
                <BannerWithImage
                    title="Blog"
                    description="We love writing about things we do and the things we don’t"
                />
            )}
        >
            <Head>
                <title>
                    Blogs
                </title>
            </Head>
            <div className={styles.blogList}>
                <div className={styles.blogLinks}>
                    {buttons
                        && buttons.map((type) => (
                            <>
                                <Button
                                    key={type.value}
                                    className={styles.fakeLink}
                                    name={type.value}
                                    onClick={setFilteredBlogType}
                                >
                                    {type.name}
                                </Button>
                                <div className={styles.fakePoint}>
                                    •
                                </div>
                            </>
                        ))}
                </div>
                <hr
                    className={styles.horizontalRow}
                />
                <div className={styles.researchGrid}>
                    {filteredBlogs.map((blog) => (
                        <div
                            className={styles.researchList}
                            key={blog.id}
                        >
                            <ResearchSection
                                key={blog.blogType}
                                image={(
                                    <img
                                        src={workListOne}
                                        alt="Research"
                                        width={400}
                                        height={250}
                                        className={styles.researchImage}
                                    />
                                )}
                                heading={blog.blogTitle}
                                description={blog.summary}
                                title={blog.blogType}
                                link={`/blogs/${blog.id}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Page>
    );
}

export default Blog;
