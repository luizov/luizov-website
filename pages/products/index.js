import { NextSeo } from 'next-seo';

import Page from '../../layouts/Page';
import PageHeader from '../../components/PageHeader';

export default function ProductsPage() {
    return (
        <Page>
            <NextSeo
                title="Products · Luizov"
                description="A short description goes here."
            />

            <PageHeader
                title="Products"
                description="I write about development, design, React, CSS, animations and more!"
            />
        </Page>
    )
}