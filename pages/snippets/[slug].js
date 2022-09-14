import { NextSeo } from "next-seo";
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Page from '@/layouts/Page';
import SnippetHeader from "@/components/Snippet/SnippetHeader";
import SnippetBody from '@/components/Snippet/SnippetBody';
import { getSnippetBySlug, getAllSnippets } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';

export default function Snippet({ snippet }) {
	const router = useRouter()
	if (!router.isFallback && !snippet?.slug) {
		return <ErrorPage statusCode={404} />
	}

	const seoTitle = `${snippet.title} · Luizov`;
	const seoDesc = `${snippet.description}`;
	const url = `https://luizov.com/articles/${snippet.slug}`;

	return (
		<Page>
			<NextSeo
				title={seoTitle}
				description={seoDesc}
				canonical={url}
				openGraph={{
					title: seoTitle,
					description: seoDesc,
					url: url,
					site_name: 'Dimitar Luizov',
					type: 'article',
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
					site: "@dimitarluizov",
					cardType: "summary_large_image",
				}}
			/>
			<article className="max-w-5xl mx-auto py-20 px-4 sm:px-6">
				<SnippetHeader
					title={snippet.title}
					description={snippet.description}
					logo={snippet.logo}
				/>
				<SnippetBody content={snippet.content} />
			</article>
		</Page>
	)
}

export async function getStaticProps({ params }) {
	const snippet = getSnippetBySlug(params.slug, [
		'title',
		'description',
		'logo',
		'slug',
		'content',
	])
	const content = await markdownToHtml(snippet.content || '')

	return {
		props: {
			snippet: {
				...snippet,
				content,
			},
		},
	}
}

export async function getStaticPaths() {
	const snippets = getAllSnippets(['slug'])

	return {
		paths: snippets.map((snippet) => {
			return {
				params: {
					slug: snippet.slug,
				},
			}
		}),
		fallback: false,
	}
}
