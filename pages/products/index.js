import { NextSeo } from 'next-seo';
import Page from '@/layouts/Page';
import PageHeader from '@/components/PageHeader';
import { ProductCard } from '@/components/sections/Products';
import products from '@/data/products';

export default function ProductsPage() {
	const seoTitle = "Products · Luizov";
	const seoDesc = "A showcase of my most recent and interesting projects.";

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
							alt: 'A showcase of my most recent and interesting projects',
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
				title="Products"
				description="A showcase of my most recent and interesting projects"
			/>
			<section className="section pt-12">
				<div className="max-w-5xl mx-auto px-4 sm:px-6">
					<ul className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-6">
						{products.map((entry) => (
							<ProductCard
								key={entry.name}
								name={entry.name}
								href={entry.href}
								description={entry.description}
								tags={entry.tags}
								imageSrc={entry.imageSrc}
								imageAlt={entry.imageAlt}
								backgroundSrc={entry.backgroundSrc}
							/>
						))}
					</ul>
				</div>
			</section>
		</Page>
	)
}
