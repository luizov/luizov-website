import { NextSeo } from 'next-seo';
import { getBookmarks, getPageProperties } from '@/lib/notion';
import { getOpenGraphImage } from '@/lib/openGraphScraper';
import { config } from 'config';
import MainLayout from '@/layouts/MainLayout';
import PageHeader from '@/components/PageHeader';
import Bookmarks from '@/components/Bookmarks/Bookmarks';
import BookmarksPagination from '@/components/Bookmarks/BookmarksPagination';

export default function BookmarksPage({ bookmarks, totalPages, currentPage }) {
	const seoTitle = "Bookmarks · Luizov";
	const seoDesc = "A collection of favourite articles, resources and websites that I've stumbled upon.";

	const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
	const prevDisabled = parseInt(currentPage, 10) === 1;

	return (
		<>
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
							alt: 'A collection of favourite articles, resources and websites.',
						}
					]
				}}
				twitter={{
					handle: "@dimitarluizov",
					site: "@dimitarluizov",
					cardType: "summary_large_image",
				}}
			/>

			<PageHeader
				title="Bookmarks"
				description="This page contains a collection of favourite articles, resources and websites that I've stumbled upon."
			/>

			<Bookmarks bookmarks={bookmarks} />

			<BookmarksPagination
				totalPages={totalPages}
				currentPage={currentPage}
				prevDisabled={prevDisabled}
				nextDisabled={nextDisabled}
			/>
		</>
	)
}

BookmarksPage.layout = MainLayout;

export const getStaticProps = async () => {
	let results = [];
	let bookmarks = await getBookmarks(config.notionDatabaseId);

	results = [...bookmarks.data];

	while (bookmarks.has_more) {
		bookmarks = await getBookmarks(
			config.notionDatabaseId,
			bookmarks.next_cursor
		);

		results = [...results, ...bookmarks.data];
	}

	const totalBookomarks = results.length;
	const totalPages = Math.ceil(totalBookomarks / config.bookmarksConfig.pageSize);
	const currentPage = '1';
	const startIndex = (currentPage - 1) * config.bookmarksConfig.pageSize;
	const endIndex = startIndex + config.bookmarksConfig.pageSize;
	const currentResults = results.slice(startIndex, endIndex);

	const bookmarkImages = await Promise.all(
		currentResults.map(async (entry) => ({
			...entry,
			image: await getOpenGraphImage(entry.properties.Url.url)
		}))
	);

	return {
		props: {
			bookmarks: bookmarkImages,
			totalPages,
			currentPage
		},
		revalidate: 60 * 60 // 1 hour
	};
}
