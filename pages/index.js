import { NextSeo } from 'next-seo';
import { config } from "../config";
import { fetchRepos } from "../lib/github";
import { getDatabase } from "../lib/notion";

import Layout from '../layouts/Page';

import HomeHeader from '../components/HomeHeader';
import Products from '../components/sections/Products';
import Newsletter from '../components/sections/Newsletter';
import { GithubActivity } from '../components/sections/GithubActivity';

export default function HomePage({ posts, repos }) {
  const seoTitle = "Luizov · Frontend Designer and Developer";
  const seoDesc = "A freelance front-end engineer with a strong focus on interfaces working remotely from Bulgaria.";

  return (
    <Layout>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          type: 'website',
          title: seoTitle,
          description: seoDesc,
          url: 'https://luizov.com',
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

      <HomeHeader
        title="Product Design &amp; Development"
        description={<>A freelance designer and fullstack developer working remotely from Bulgaria. Founder of <a href="https://temattic.com" target="_blank" rel="noreferrer" className="font-semibold underline decoration-violet-9 text-mauve-12 hover:text-mauve-10 dark:decoration-violetDark-9 dark:text-mauveDark-12 dark:hover:text-mauveDark-10 transition ease-in">Temattic</a> and other ventures.</>}
      />

      <Products />

      <GithubActivity {...repos} />
      <Newsletter />
    </Layout>
  )
};

export const getStaticProps = async () => {

  const [
    posts,
    { contributedRepos, starredRepos }
  ] = await Promise.all([
    getDatabase(config.notionDatabaseId),
    fetchRepos(config.githubUsername, config.githubToken),
  ]);

  return {
    props: {
      posts: posts.data,
      repos: {
        starredRepos,
        contributedRepos,
      }
    },
    revalidate: 10
  };
};
