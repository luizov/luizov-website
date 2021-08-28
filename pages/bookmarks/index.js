import { NextSeo } from "next-seo";
import { getDatabase } from "../../lib/notion";
import { config } from '../../config';
import Page from '../../layouts/Page';
import PageHeader from "../../components/PageHeader";

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

export default function BookmarksPage() {
    return (
        <Page>
            <NextSeo
                title="Bookmarks · Luizov"
                description="A short description goes here."
            />

            <PageHeader
                title="Bookmarks"
                description="This page contains a collection of my favourite articles/resources/websites that I've stumbled upon."
            />
        </Page>
    )
}