import { NextSeo } from "next-seo";
import Page from '../../layouts/Page';

export default function ProductPage() {
    const seoTitle = "Product Name · Luizov";
    const seoDesc = "A short description goes here.";

    return (
        <Page>
            <NextSeo
                title={seoTitle}
                description={seoDesc}
            />
        </Page>
    )
}