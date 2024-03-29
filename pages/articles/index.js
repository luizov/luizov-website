import { NextSeo } from "next-seo";
import { getAllPosts } from '@/lib/api';
import MainLayout from '@/layouts/MainLayout';
import PageHeader from "@/components/PageHeader";
import { HeroPostAlt } from '@/components/Post/HeroPost';
import MoreArticles from '@/components/MoreArticles';
import Newsletter from '@/sections/Newsletter';

export default function ArticlesPage({ allPosts }) {
	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);

	const seoTitle = "Articles · Luizov";
	const seoDesc = "I write about development, design, React, CSS, animations and more!";

	return (
		<>
			<NextSeo
				title={seoTitle}
				description={seoDesc}
				openGraph={{
					title: seoTitle,
					description: seoDesc,
					url: `https://luizov.com/articles/`,
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
					site: "@dimitarluizov",
					cardType: "summary_large_image",
				}}
			/>

			<PageHeader
				title="Articles"
				description="I write about development, design, React, CSS, animations and more!"
			/>
			<section className="pt-4">
				<div className="max-w-5xl mx-auto px-4 sm:px-6">
					{heroPost && (
						<HeroPostAlt
							title={heroPost.title}
							coverImage={heroPost.coverImage}
							date={heroPost.date}
							author={heroPost.author}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
							length={heroPost.content}
						/>
					)}
				</div>
			</section>
			{morePosts.length > 0 && <MoreArticles posts={morePosts} />}
			{/* 	<Newsletter /> */}
		</>
	)
}

ArticlesPage.layout = MainLayout;

export async function getStaticProps() {
	const allPosts = getAllPosts([
		'title',
		'date',
		'slug',
		'author',
		'content',
		'coverImage',
		'excerpt',
	])

	return {
		props: { allPosts },
	}
}
