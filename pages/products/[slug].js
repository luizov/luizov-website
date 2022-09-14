import { NextSeo } from "next-seo";
import MainLayout from '@/layouts/MainLayout';

export default function ProductPage() {
	const seoTitle = "Product Name · Luizov";
	const seoDesc = "A short description goes here.";

	return (
		<>
			<NextSeo
				title={seoTitle}
				description={seoDesc}
			/>
		</>
	)
}

ProductPage.layout = MainLayout;
