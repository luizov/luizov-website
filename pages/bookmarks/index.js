import { NextSeo } from 'next-seo';
import { getDatabase } from '../../lib/notion';
import { getOpenGraphImage } from '../../lib/openGraphScraper';
import { config } from '../../config';
import Page from '../../layouts/Page';
import PageHeader from '../../components/PageHeader';
import BookmarkCard from '../../components/Bookmarks/BookmarkCard';

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

            <section className="relative py-20 bg-mauve-1 border-t border-mauve-6 overflow-hidden dark:bg-mauveDark-2 dark:border-mauveDark-6">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="md:masonry-2-col lg:masonry-3-col box-border gap-x-0 mx-auto before:box-inherit after:box-inherit">
                        {bookmarks.map((entry) => (
                            <BookmarkCard
                                key={entry.id}
                                image={entry.image}
                                title={entry.properties.Bookmark.title[0].plain_text}
                                href={entry.properties.Url.url}
                                description={entry.properties.Description.rich_text[0].plain_text}
                                url={entry.properties.FriendlyUrl.url}
                                date={entry.created_time}
                            />
                        ))}
                    </div>
                </div>
            </section>
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