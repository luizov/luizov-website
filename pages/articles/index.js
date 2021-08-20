import { NextSeo } from "next-seo";
import { getDatabase } from "../../lib/notion";
import { config } from '../../config';
import Page from '../../layouts/Page';
import PageHeader from "../../components/PageHeader";
import { Blog } from '../../components/sections/Blog';

export const getStaticProps = async () => {

    const [
        posts
    ] = await Promise.all([
        getDatabase(config.notionDatabaseId)
    ]);

    return {
        props: {
            posts: posts.data
        },
        revalidate: 10
    };
};

export default function ArticlesPage({ posts }) {
    return (
        <Page>
            <NextSeo
                title="Articles · Luizov"
                description="A short description goes here."
            />

            <PageHeader
                title="Articles"
                description="I write about development, design, React, CSS, animations and more!"
            />

            <Blog posts={posts} />
        </Page>
    )
}