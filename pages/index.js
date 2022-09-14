import { config } from "config";
import { fetchRepos } from "@/lib/github";
import { getDatabase } from "@/lib/notion";

import Layout from '@/layouts/Page';

import HomeHeader from '@/components/HomeHeader';
import Products from '@/components/sections/Products';
import Concepts from '@/components/sections/Concepts';
import Newsletter from '@/components/sections/Newsletter';
import { GithubActivity } from '@/components/sections/GithubActivity';

export default function HomePage({ repos }) {
	const seoTitle = "Luizov · Frontend Designer and Developer";
	const seoDesc = "A freelance designer and fullstack developer working remotely from Bulgaria.";

	return (
		<Layout>
			<HomeHeader
				title="Product Design and Development"
				description={<>A freelance designer and fullstack developer working remotely from Bulgaria. Founder of <a href="https://temattic.com" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 decoration-2 hover:decoration-4 decoration-blue-9 dark:decoration-yellowDark-9 text-slate-12 dark:text-whiteA-12 transition-all">Temattic</a> and other ventures.</>}
			/>

			<Products />
			<Concepts />
			<GithubActivity {...repos} />
			<Newsletter />
		</Layout>
	)
};

export const getStaticProps = async () => {

	const [
		posts,
		{ contributedRepos, starredRepos }
	] = await Promise.all([
		getDatabase(config.notionDatabaseId),
		fetchRepos(config.githubUsername, config.githubToken),
	]);

	return {
		props: {
			posts: posts.data,
			repos: {
				starredRepos,
				contributedRepos,
			}
		},
		revalidate: 60 * 60
	};
};
