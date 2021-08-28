import { NextSeo } from "next-seo";
import { getAllPosts } from "../../lib/mdx";
import Page from '../../layouts/Page';
import PageHeader from "../../components/PageHeader";

export async function getStaticProps() {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
    ])

    return {
        props: { allPosts },
    }
}

export default function ArticlesPage() {

    return (
        <Page>
            <NextSeo
                title="Articles · Luizov"
                description="A short description goes here."
            />

            <PageHeader
                title="Articles"
                description="I write about development, design, React, CSS, animations and more!"
            />
        </Page>
    )
}