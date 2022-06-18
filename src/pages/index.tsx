import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import BlogPostItem from '../components/BlogPostItem';
import getBlogPosts, { BlogPost } from '../utils/getBlogPosts';

export const getStaticProps: GetStaticProps = () => ({
  props: {
    blogPosts: getBlogPosts(),
  },
});

const Home: NextPage<{ blogPosts: BlogPost[] }> = ({ blogPosts }) => (
  <div>
    <Head>
      <title>Home — Lukas Gjetting</title>
    </Head>
    <main>
      <div className="flex items-center">
        <div className="pl-8">
          <h1 className="text-4xl font-bold">
            Hi, I'm Lukas.
          </h1>
          <br />
          <span className="text-xl font-extralight leading-relaxed">
            I am a software developer who enjoys building products for people to use.
            <br />
            <br />
            On here, I write about my journey and my thoughts.
          </span>
          <span className="block text-3xl font-bold mt-8 mb-4">Latest from the blog</span>
          <BlogPostItem blogPost={blogPosts[0]} />
        </div>
      </div>
    </main>
  </div>
);

export default Home;
