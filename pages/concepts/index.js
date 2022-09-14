import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Page from '@/layouts/Page';
import PageHeader from '@/components/PageHeader';

const IMAGE_LIST = [
	{
		imageSrc: '/playground/1.jpg',
		imageAlt: 'Alt text.',
	},
	{
		imageSrc: '/playground/2.jpg',
		imageAlt: 'Alt text.',
	},
	{
		imageSrc: '/playground/3.jpg',
		imageAlt: 'Alt text.',
	},
	{
		imageSrc: '/playground/4.jpg',
		imageAlt: 'Alt text.',
	},
	{
		imageSrc: '/playground/5.jpg',
		imageAlt: 'Alt text.',
	},
	{
		imageSrc: '/playground/6.jpg',
		imageAlt: 'Alt text.',
	},
	{
		imageSrc: '/playground/7.jpg',
		imageAlt: 'Alt text.',
	},
	{
		imageSrc: '/playground/8.jpg',
		imageAlt: 'Alt text.',
	},
	{
		imageSrc: '/playground/9.jpg',
		imageAlt: 'Alt text.',
	},
	{
		imageSrc: '/playground/10.jpg',
		imageAlt: 'Alt text.',
	},
	{
		imageSrc: '/playground/11.jpg',
		imageAlt: 'Alt text.',
	},
	{
		imageSrc: '/playground/12.jpg',
		imageAlt: 'Alt text.',
	},
	{
		imageSrc: '/playground/13.jpg',
		imageAlt: 'Alt text.',
	},
	{
		imageSrc: '/playground/14.jpg',
		imageAlt: 'Alt text.',
	},
	{
		imageSrc: '/playground/15.jpg',
		imageAlt: 'Alt text.',
	},
];

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
	typeof window === 'undefined'
		? Buffer.from(str).toString('base64')
		: window.btoa(str)

export const PlaygroundImage = ({ src, alt }) => {
	return (
		<div className="relative w-full h-80 bg-slate-4 dark:bg-slateDark-4 rounded-md overflow-hidden sm:aspect-w-16 sm:aspect-h-12 transition">
			<Image
				src={src}
				alt={alt}
				layout="fill"
				className="w-full h-full object-center object-cover"
				placeholder="blur"
				blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1600, 1200))}`}
			/>
		</div>
	)
}

export default function ConceptsPage() {
	const seoTitle = "Design Concepts · Luizov";
	const seoDesc = "A collection of design concepts and product explorations.";

	return (
		<Page>
			<NextSeo
				title={seoTitle}
				description={seoDesc}
				openGraph={{
					title: seoTitle,
					description: seoDesc,
					url: `https://luizov.com/concepts/`,
					site_name: 'Dimitar Luizov',
					images: [
						{
							url: `https://luizov.com/utility/og.png`,
							width: 1200,
							height: 630,
							alt: 'A collection of design concepts and product explorations',
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
				title="Design Concepts"
				description="A collection of design concepts and product explorations"
			/>

			<section className="section">
				<div className="max-w-5xl mx-auto px-4 sm:px-6">
					<div className="mt-12 space-y-4 lg:grid lg:grid-cols-1">
						{IMAGE_LIST.slice(0).reverse().map((entry, index) => (
							<PlaygroundImage
								key={index}
								src={entry.imageSrc}
								alt={entry.imageAlt}
							/>
						))}
					</div>
				</div>
			</section>
		</Page>
	)
}
