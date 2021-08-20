import { NextSeo } from 'next-seo';
import { config } from "../config";
import { fetchRepos } from "../lib/github";
import { getDatabase } from "../lib/notion";

import Page from '../layouts/Page';

import HomeHeader from '../components/HomeHeader';
import Products from '../components/sections/Products';
import Newsletter from '../components/sections/Newsletter';
import { Articles } from '../components/sections/Articles';
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
  return (
    <Page>
      <NextSeo
        title="Luizov · Frontend Developer and Designer"
        description="A short description goes here."
      />

      <HomeHeader
        title="Product Design, Development &amp; More."
        description="A freelance front-end engineer with a strong focus on interfaces working remotely from Bulgaria."
      />

      <Products />
      <Newsletter />
      <Articles posts={posts} />

      <GithubActivity {...repos} />
    </Page>
  )
};
