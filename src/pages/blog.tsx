import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import BlogPostItem from '../components/BlogPostItem';
import ConvertKitForm from '../components/ConvertKitForm';
import getBlogPosts, { BlogPost } from '../utils/getBlogPosts';

export const getStaticProps: GetStaticProps = () => ({
  props: {
    blogPosts: getBlogPosts(),
  },
});

const Blog: NextPage<{ blogPosts: BlogPost[] }> = ({ blogPosts }) => (
  <div>
    <Head>
      <title>Blog — Lukas Gjetting</title>
    </Head>
    <main>
      <div className="flex items-center">
        <div>
          <h1 className="text-4xl font-bold">
            Blog
          </h1>
          <br />
          <h2 className="text-xl font-extralight leading-relaxed">
            This is where I write about my journey and my thoughts.
          </h2>
          <br />
          {blogPosts.map((b, index) => (
            <React.Fragment key={b.slug}>
              <BlogPostItem blogPost={b} />
              {index < blogPosts.length - 1 && (
                <hr className="my-2" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </main>
    <ConvertKitForm />
  </div>
);

export default Blog;
