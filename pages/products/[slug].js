import { NextSeo } from "next-seo";
import Page from '../../layouts/Page';

export default function ProductPage() {
    return (
        <Page>
            <NextSeo
                title="Product Name · Luizov"
                description="A short description goes here."
            />
        </Page>
    )
}