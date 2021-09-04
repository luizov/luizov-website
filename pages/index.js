import { NextSeo } from 'next-seo';
import { config } from "../config";
import { fetchRepos } from "../lib/github";
import { getDatabase } from "../lib/notion";

import Page from '../layouts/Page';

import HomeHeader from '../components/HomeHeader';
import Products from '../components/sections/Products';
import Newsletter from '../components/sections/Newsletter';
import { Bookmarks } from '../components/sections/Bookmarks';
import { GithubActivity } from '../components/sections/GithubActivity';

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

export default function HomePage({ posts, repos }) {
  const seoTitle = "Luizov · Frontend Designer and Developer";
  const seoDesc = "A freelance front-end engineer with a strong focus on interfaces working remotely from Bulgaria.";

  return (
    <Page>
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
        description="A freelance front-end engineer with a strong focus on interfaces working remotely from Bulgaria."
      />

      <Products />
      <Bookmarks posts={posts} />

      <GithubActivity {...repos} />
      <Newsletter />
    </Page>
  )
};
