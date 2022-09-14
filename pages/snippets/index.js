import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';
import { getAllSnippets } from '@/lib/api';
import MainLayout from '@/layouts/MainLayout';
import PageHeader from '@/components/PageHeader';

export default function SnippetsPage({ allSnippets }) {
	const seoTitle = "Code Snippets · Luizov";
	const seoDesc = "A collection of useful code snippets that solve common problems.";

	return (
		<>
			<NextSeo
				title={seoTitle}
				description={seoDesc}
				openGraph={{
					title: seoTitle,
					description: seoDesc,
					url: `https://luizov.com/snippets/`,
					site_name: 'Dimitar Luizov',
					images: [
						{
							url: `https://luizov.com/utility/og.png`,
							width: 1200,
							height: 630,
							alt: 'A collection of useful code snippets that solve common problems.',
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
				title="Code Snippets"
				description="A collection of useful code snippets that solve common problems"
			/>
			<section className="section pt-12">
				<div className="max-w-5xl mx-auto px-4 sm:px-6">
					<ul className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-6">
						{allSnippets.map(snippet => (
							<li key={snippet.slug}>

								{/* <!-- Card --> */}
								<Link href={`/snippets/${snippet.slug}`}>
									<a
										className="flex flex-col p-4 sm:p-6 h-full bg-white dark:bg-blueDark-4 dark:hover:bg-blueDark-5 border border-slate-6 dark:border-blueDark-6 hover:border-slate-7 dark:hover:border-blueDark-7 shadow-md sm:hover:shadow-lg rounded-md"
									>

										{/* <!-- Card header --> */}
										<div className="flex flex-col space-y-6 mb-4">
											<div className="relative w-12 h-12">
												<Image
													src={`/logos/${snippet.logo}`}
													alt={`${snippet.logo} logo`}
													className="rounded-full"
													layout="fill"
													objectFit="cover"
												/>
											</div>
											<h3 className="h4 font-headings text-slate-12 dark:text-whiteA-12">
												{snippet.title}
											</h3>
										</div>

										{/* <!-- Card body --> */}
										<div className="text-slate-11 dark:text-whiteA-11">
											{snippet.description}
										</div>
									</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	)
}

SnippetsPage.layout = MainLayout;

export async function getStaticProps() {
	const allSnippets = getAllSnippets([
		'title',
		'slug',
		'content',
		'description',
		'logo'
	])

	return {
		props: { allSnippets },
	}
}
