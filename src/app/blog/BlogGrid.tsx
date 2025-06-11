import Parser from 'rss-parser';
import { siteConfig } from '../../content';

const MEDIUM_RSS = siteConfig.blog.rssurl;

function estimateReadingTime(text: string) {
  const words = text.split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

async function getMediumPosts() {
  const ParserLib = (await import('rss-parser')).default;
  const parser: Parser = new ParserLib();
  const feed = await parser.parseURL(MEDIUM_RSS);
  return feed.items.map((item: Parser.Item) => {
    const excerpt = item.contentSnippet || '';
    return {
      title: item.title || '',
      link: item.link || '',
      pubDate: item.pubDate,
      excerpt,
      readingTime: estimateReadingTime(excerpt),
    };
  });
}

export default async function BlogGrid() {
  const posts = await getMediumPosts();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <a
          key={post.link}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`block rounded-xl bg-[#181c23] hover:bg-[#23283a] transition shadow border border-gray-800 p-6 focus:outline-none focus:ring-2 focus:ring-cyan-400 group`}
        >
          <h2 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-400 mb-4 text-base line-clamp-2">{post.excerpt}</p>
          <div className="text-xs text-gray-500 flex items-center gap-2">
            {post.pubDate && <span>{new Date(post.pubDate).toLocaleDateString()}</span>}
            {post.readingTime && <span>· {post.readingTime}</span>}
          </div>
        </a>
      ))}
    </div>
  );
} 