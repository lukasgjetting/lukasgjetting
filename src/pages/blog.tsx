import fs from 'fs';
import matter from 'gray-matter';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import path from 'path';
import md from 'markdown-it';
import { DateTime } from 'luxon';

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  htmlContent: string;
  releaseDate: string;
};

type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  releaseDate: Date;
  markdown: string;
};

export const getStaticProps: GetStaticProps = () => {
  const postsPath = path.join(process.cwd(), 'posts');

  const files = fs.readdirSync(postsPath);
  const blogPosts = files
    .filter((f) => f.endsWith('.md'))
    .map<BlogPostMeta>((f) => {
    const fileContent = fs.readFileSync(path.join(postsPath, f), 'utf-8');
    const metaData = matter(fileContent);

    return {
      slug: f.replace('.md', ''),
      title: metaData.data.title,
      excerpt: metaData.data.excerpt,
      releaseDate: metaData.data.releaseDate,
      markdown: fileContent,
    };
  })
    .sort((a, b) => b.releaseDate.valueOf() - a.releaseDate.valueOf())
    .map<BlogPost>((metaData) => ({
    slug: metaData.slug,
    title: metaData.title,
    excerpt: metaData.excerpt,
    releaseDate: DateTime
      .fromISO(metaData.releaseDate.toISOString())
      .toLocaleString(DateTime.DATE_MED, { locale: 'en' }),
    htmlContent: md().render(metaData.markdown),
  }));

  return {
    props: {
      blogPosts,
    },
  };
};

const Blog: NextPage<{ blogPosts: BlogPost[] }> = ({ blogPosts }) => (
  <div>
    <Head>
      <title>Blog — Lukas Gjetting</title>
    </Head>
    <main>
      <div className="flex items-center">
        <div className="pl-8">
          <h1 className="text-4xl font-bold">
            Blog
          </h1>
          <br />
          <h2 className="text-xl font-extralight leading-relaxed">
            This is where I write about my journey and my thoughts.
          </h2>
          <br />
          {blogPosts.map((b, index) => (
            <>
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
            </>
          ))}
        </div>
      </div>
    </main>
  </div>
);

export default Blog;
