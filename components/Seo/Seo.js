import { DefaultSeo } from 'next-seo';

const config = {
	title: 'Luizov · Frontend Designer and Fullstack Developer',
	description: 'A freelance designer and fullstack developer working remotely from Bulgaria.',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://luizov.com',
		site_name: 'Dimitar Luizov',
		images: [
			{
				url: `https://luizov.com/utility/og.png`,
				width: 1200,
				height: 630,
				alt: 'Dimitar Luizov',
			}
		]
	},
	twitter: {
		handle: '@dimitarluizov',
		site: '@dimitarluizov',
		cardType: 'summary_large_image'
	}
}

export default function SEO() {
	return (
		<DefaultSeo {...config} />
	)
}
