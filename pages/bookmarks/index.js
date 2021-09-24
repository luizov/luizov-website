import { NextSeo } from 'next-seo';
import { getDatabase } from '../../lib/notion';
import { getOpenGraphImage } from '../../lib/openGraphScraper';
import { config } from '../../config';
import Page from '../../layouts/Page';
import PageHeader from '../../components/PageHeader';
import { BookmarkCard } from '../../components/sections/Bookmarks';

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

            <section className="relative py-20 bg-mauve-2 border-t border-mauve-6 overflow-hidden dark:bg-mauveDark-2 dark:border-mauveDark-6">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="hidden lg:block lg:col-span-3">
                        <div aria-label="Sidebar" className="sticky top-6 divide-y divide-gray-300">
                            <h2 className="text-2xl text-mauve-12 font-bold tracking-tight dark:text-mauveDark-12">
                                Categories
                            </h2>
                        </div>
                    </div>

                    <div className="lg:col-span-9">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {console.log(bookmarks)}
                            {bookmarks.map((entry) => (
                                <BookmarkCard
                                    key={entry.id}
                                    image={entry.image}
                                    title={entry.properties.Bookmark.title[0].plain_text}
                                    href={entry.properties.Url.url}
                                    description={entry.properties.Description.rich_text[0].plain_text}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Page>
    )
}

export const getStaticProps = async () => {

    const bookmarks = await getDatabase(config.notionDatabaseId);

    // const bookmarkBlocks = await Promise.all(
    //     bookmarks.data
    //         .map(async (bookmark) => {
    //             return {
    //                 id: bookmark.id,
    //                 children: await getBlocks(bookmark.id),
    //             }
    //         })
    // );

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