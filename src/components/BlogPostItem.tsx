import Link from 'next/link';
import { BlogPost } from '../utils/getBlogPosts';

const BlogPostItem: React.FC<{ blogPost: BlogPost }> = ({
  blogPost,
}) => (
  <Link href={`/blog/${blogPost.slug}`} passHref>
    <a className="block -mx-2 -my-1 px-2 py-1 hover:bg-gray-700 hover:bg-opacity-5">
      <h3 className="text-xl">{blogPost.title}</h3>
      <div className="font-light">
        {blogPost.excerpt}
      </div>
      <div className="text-sm mt-2 italic">
        {blogPost.releaseDate}
      </div>
    </a>
  </Link>
);

export default BlogPostItem;
