import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import md from 'markdown-it';
import { DateTime } from 'luxon';

export type BlogPost = {
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
  published: boolean;
};

const getBlogPosts = (options?: {
  includeDraft?: boolean;
}): BlogPost[] => {
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
      published: metaData.data.published,
      markdown: metaData.content,
    };
  })
    .filter((m) => options?.includeDraft || m.published)
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

  return blogPosts;
};

export default getBlogPosts;
