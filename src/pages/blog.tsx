import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
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
              <Link href={`/blog/${b.slug}`} passHref>
                <a className="block -mx-2 -my-1 px-2 py-1 hover:bg-gray-700 hover:bg-opacity-5">
                  <h3 className="text-xl">{b.title}</h3>
                  <div className="font-light">
                    {b.excerpt}
                  </div>
                  <div className="text-sm mt-2 italic">
                    {b.releaseDate}
                  </div>
                </a>
              </Link>
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
