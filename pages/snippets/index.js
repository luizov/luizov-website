import { NextSeo } from 'next-seo';

import Page from '../../layouts/Page';
import PageHeader from '../../components/PageHeader';

export default function SnippetsPage() {
	const seoTitle = "Code Snippets · Luizov";
	const seoDesc = "A collection of useful code snippets that solve common problems.";

	return (
		<Page>
			<NextSeo
				title={seoTitle}
				description={seoDesc}
				openGraph={{
					title: seoTitle,
					description: seoDesc,
					url: `https://luizov.com/products/`,
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
				title="Code Snippets"
				description="A collection of useful code snippets that solve common problems"
			/>
		</Page>
	)
}
