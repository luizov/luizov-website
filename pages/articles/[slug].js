import { NextSeo } from "next-seo";
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Link from 'next/link';
import readingTime from 'reading-time';
import Page from '@/layouts/Page';
import PostHeader from '@/components/Post/PostHeader';
import PostBody from '@/components/Post/PostBody';
import { IconArrowLeftSmall } from "@/components/base/Icons";
import { getPostBySlug, getAllPosts } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';


export default function Article({ post }) {
	const router = useRouter()
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />
	}

	const seoTitle = `${post.title} · Luizov`;
	const seoDesc = `${post.excerpt}`;
	const url = `https://luizov.com/articles/${post.slug}`;
	const timeAsText = readingTime(post.content).text;

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
					images: [
						{
							url: post.ogImage
								? `https://luizov.com${post.ogImage}`
								: `https://luizov-og-image.vercel.app${encodeURIComponent(post.title)}?desc=${encodeURIComponent(
									seoDesc,
								)}&md=1&article=1&time=${encodeURIComponent(
									timeAsText,
								)}&entryImage=${post.ogImage}&theme=light.png`,
							alt: post.title,
						},
					],
					type: 'article',
					article: {
						publishedTime: post.date,
						modifiedTime: post.updatedAt, // TO DO
						authors: ['https://luizov.com'],
					},
				}}
				twitter={{
					handle: "@dimitarluizov",
					site: "@dimitarluizov",
					cardType: "summary_large_image",
				}}
			/>
			<div className="sticky top-0 z-20 bg-slate-2 dark:bg-blueDark-2">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 border-b border-6 dark:border-blueDark-6">
					<Link href="/articles">
						<a className="font-medium text-blue-9 hover:text-blue-11 dark:text-blueDark-11 dark:hover:text-blueDark-9">
							<IconArrowLeftSmall className="mr-1" />
							Back to all articles
						</a>
					</Link>
				</div>
			</div>
			<article className="max-w-5xl mx-auto py-20 px-4 sm:px-6">
				<PostHeader
					title={post.title}
					coverImage={post.coverImage}
					date={post.date}
					author={post.author}
					length={post.content}
				/>
				<PostBody content={post.content} />
			</article>
		</Page>
	)
};

export async function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'author',
		'content',
		'ogImage',
		'coverImage',
	])
	const content = await markdownToHtml(post.content || '')

	return {
		props: {
			post: {
				...post,
				content,
			},
		},
	}
}

export async function getStaticPaths() {
	const posts = getAllPosts(['slug'])

	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug,
				},
			}
		}),
		fallback: false,
	}
}
