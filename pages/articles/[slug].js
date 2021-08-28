import { NextSeo } from "next-seo";
import Image from 'next/image';
import { getPostBySlug, getAllPosts, markdownToHtml } from "../../lib/mdx";
import Page from '../../layouts/Page';
import PageHeader from '../../components/PageHeader';

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ])
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}

export default function Post({ post }) {
    const seoTitle = `${post.title} · Luizov`;
    const seoDesc = `${meta.summary}`;
    const url = `https://luizov.com/articles/${meta.slug}`;

    return (
        <Page>
            <NextSeo
                title={seoTitle}
                description={seoDesc}
                canonical={url}
            />
            <PageHeader
                title={meta.title}
                description="A freelance front-end engineer with a strong focus on interfaces working remotely from Bulgaria."
            />
            <article
                className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full"
            >
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-electric-900 dark:text-white">
                    {frontMatter.title}
                </h1>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
                    <div className="flex items-center">
                        <Image
                            alt="Dimitar Luizov"
                            height={24}
                            width={24}
                            src="/logo.svg"
                            className="rounded-full"
                        />
                        <p className="text-sm text-electric-700 dark:text-electric-300 ml-2">
                            {frontMatter.by}
                            {'Dimitar Luizov / '}
                            {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
                        </p>
                    </div>
                    <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
                        {frontMatter.readingTime.text}
                        {` • `}
                        { /* TO DO */}
                        {/*                 <ViewCounter slug={frontMatter.slug} /> */}
                    </p>
                </div>
                <div className="prose dark:prose-dark max-w-none w-full">
                    {children}
                </div>
            </article>
        </Page>
    )
}