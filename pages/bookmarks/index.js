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
    const seoTitle = "Bookmarks · Luizov";
    const seoDesc = "A short description goes here.";

    return (
        <Page>
            <NextSeo
                title={seoTitle}
                description={seoDesc}
                openGraph={{
                    title: seoTitle,
                    description: seoDesc,
                    url: `https://luizov.com/bookmarks/`,
                    site_name: 'Dimitar Luizov',
                    images: [
                        {
                            url: `https://luizov.com/utility/og.png`,
                            width: 1200,
                            height: 630,
                            alt: 'Luizov.com',
                        }
                    ]
                }}
                twitter={{
                    handle: "@dimitarluizov",
                    cardType: "summary_large_image",
                }}
            />

            <PageHeader
                title="Bookmarks"
                description="This page contains a collection of my favourite articles/resources/websites that I've stumbled upon."
            />
        </Page>
    )
}