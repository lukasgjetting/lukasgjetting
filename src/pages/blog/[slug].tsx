import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import getBlogPosts, { BlogPost } from '../../utils/getBlogPosts';

type SingleBlogPostProps = {
  blogPost: BlogPost | undefined,
};

export const getStaticPaths: GetStaticPaths = () => {
  const blogPosts = getBlogPosts();

  return {
    paths: blogPosts.map((p) => `/blog/${p.slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
SingleBlogPostProps,
{ slug: string }
> = ({ params }) => {
  if (params == null) {
    return { props: { blogPost: undefined } };
  }

  const blogPosts = getBlogPosts();

  return {
    props: {
      blogPost: blogPosts.find((p) => p.slug === params.slug),
    },
  };
};

const SingleBlogPost: NextPage<SingleBlogPostProps> = ({ blogPost }) => {
  if (blogPost == null) {
    return (
      <h1 className="text-4xl font-bold">
        Something went wrong.
      </h1>
    );
  }

  return (
    <div>
      <Head>
        <title>
          {blogPost.title}
          {' '}
          — Lukas Gjetting
        </title>
      </Head>
      <main>
        <div className="flex items-center">
          <div className="pl-8">
            <h1 className="text-4xl font-bold">
              {blogPost.title}
            </h1>
            <div className="mt-1 mb-4 italic">{blogPost.releaseDate}</div>
            <h2 className="text-xl font-extralight leading-relaxed">
              {blogPost.excerpt}
            </h2>
            <br />
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: blogPost.htmlContent }} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SingleBlogPost;
