import { NextSeo } from "next-seo";
import { getAllPosts } from '../../lib/api';
import Page from '../../layouts/Page';
import PageHeader from "../../components/PageHeader";
import HeroPost from '../../components/HeroPost';

export default function ArticlesPage({ allPosts }) {
    const heroPost = allPosts[0];

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
            <section>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    {heroPost && (
                        <HeroPost
                            title={heroPost.title}
                            coverImage={heroPost.coverImage}
                            date={heroPost.date}
                            author={heroPost.author}
                            slug={heroPost.slug}
                            excerpt={heroPost.excerpt}
                        />
                    )}
                </div>
            </section>
        </Page>
    )
}

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