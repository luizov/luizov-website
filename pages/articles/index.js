import { NextSeo } from "next-seo";
import { getAllPosts } from '../../lib/api';
import Page from '../../layouts/Page';
import PageHeader from "../../components/PageHeader";
import HeroPost from '../../components/HeroPost';
import MoreArticles from '../../components/MoreArticles';

export default function ArticlesPage({ allPosts }) {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);

    const seoTitle = "Articles · Luizov";
    const seoDesc = "I write about development, design, React, CSS, animations and more!";

    return (
        <Page>
            <NextSeo
                title={seoTitle}
                description={seoDesc}
                openGraph={{
                    title: seoTitle,
                    description: seoDesc,
                    url: `https://luizov.com/articles/`,
                    site_name: 'Dimitar Luizov',
                    images: [
                        {
                            url: `https://luizov.com/utility/og.png`,
                            width: 1200,
                            height: 630,
                            alt: 'Luizov.com',
                        }
                    ]
                }}
                twitter={{
                    handle: "@dimitarluizov",
                    cardType: "summary_large_image",
                }}
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
                    {morePosts.length > 0 && <MoreArticles posts={morePosts} />}
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