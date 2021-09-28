import { NextSeo } from 'next-seo';
import { getDatabase } from '../../lib/notion';
import { getOpenGraphImage } from '../../lib/openGraphScraper';
import { config } from '../../config';
import Page from '../../layouts/Page';
import PageHeader from '../../components/PageHeader';
import Bookmarks from '../../components/Bookmarks/Bookmarks';

export default function BookmarksPage({ bookmarks }) {
    const seoTitle = "Bookmarks · Luizov";
    const seoDesc = "A collection of my favourite articles/resources/websites that I've stumbled upon.";

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
            
            <Bookmarks bookmarks={bookmarks} />

        </Page>
    )
}

export const getStaticProps = async () => {

    const bookmarks = await getDatabase(config.notionDatabaseId);

    const bookmarkImages = await Promise.all(
        bookmarks.data.map(async (entry) => ({
            ...entry,
            image: await getOpenGraphImage(entry.properties.Url.url)
        }))
    );

    return {
        props: {
            bookmarks: bookmarkImages
        },
        revalidate: 60 * 60 // 1 hour
    };
}