import Parser from 'rss-parser';
import { siteConfig } from '../../content';

const MEDIUM_RSS = siteConfig.blog.rssurl;

export const dynamic = "force-dynamic";
export const revalidate = 0; // Disable caching completely

function estimateReadingTime(text: string) {
  const words = text.split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function cleanAndTruncateContent(content: string, maxLength: number = 300): string {
  if (!content) return '';

  // Remove HTML tags and decode HTML entities
  const cleanText = content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&nbsp;/g, ' ') // Replace &nbsp; with space
    .replace(/&amp;/g, '&') // Replace &amp; with &
    .replace(/&lt;/g, '<') // Replace &lt; with <
    .replace(/&gt;/g, '>') // Replace &gt; with >
    .replace(/&quot;/g, '"') // Replace &quot; with "
    .replace(/&#39;/g, "'") // Replace &#39; with '
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim();

  // Truncate to maxLength and add ellipsis if needed
  if (cleanText.length <= maxLength) return cleanText;

  // Find the last complete sentence or word boundary
  const truncated = cleanText.substring(0, maxLength);
  const lastSentence = truncated.lastIndexOf('.');
  const lastSpace = truncated.lastIndexOf(' ');

  // If we have a sentence boundary, use it; otherwise use word boundary
  const cutPoint = lastSentence > maxLength - 50 ? lastSentence + 1 : lastSpace;

  return truncated.substring(0, cutPoint > 0 ? cutPoint : maxLength).trim() + '...';
}

async function getMediumPosts() {
  try {
    const ParserLib = (await import('rss-parser')).default;
    const parser: Parser = new ParserLib({
      timeout: 10000, // 10 second timeout
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RSS Reader)',
      },
    });

    const feed = await parser.parseURL(MEDIUM_RSS);

    if (!feed.items || feed.items.length === 0) {
      console.warn('No RSS items found');
      return [];
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return feed.items.map((item: any) => {
      // Try multiple content sources in order of preference
      const rawContent = item['content:encodedSnippet'] ||
        item.contentSnippet ||
        item['content:encoded'] ||
        item.content ||
        item.summary ||
        '';

      const cleanExcerpt = cleanAndTruncateContent(rawContent, 280);

      return {
        title: item.title || 'Untitled',
        link: item.link || '',
        pubDate: item.pubDate,
        excerpt: cleanExcerpt,
        readingTime: estimateReadingTime(rawContent),
        categories: item.categories || [],
      };
    });
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    // Return fallback data or empty array
    return [];
  }
}

export default async function BlogGrid() {
  const posts = await getMediumPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {posts.length === 0 ? (
        <div className="col-span-full text-center text-gray-400 py-8">
          <p>No blog posts found. Check back later!</p>
        </div>
      ) : (
        posts.map((post) => (
          <a
            key={post.link}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`block rounded-xl bg-[#181c23] hover:bg-[#23283a] transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-800 hover:border-gray-700 p-6 focus:outline-none focus:ring-2 focus:ring-cyan-400 group h-full`}
          >
            <div className="flex flex-col h-full">
              <h2 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors leading-tight">
                {post.title}
              </h2>

              {post.excerpt && (
                <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
              )}

              <div className="flex items-center justify-between mt-auto pt-2">
                <div className="text-xs text-gray-500 flex items-center gap-2">
                  {post.pubDate && (
                    <span>{new Date(post.pubDate).toLocaleDateString()}</span>
                  )}
                </div>


                <div className="flex gap-1">
                  {post.readingTime && <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full"> {post.readingTime}</span>}
                </div>

              </div>
            </div>
          </a>
        ))
      )}
    </div>
  );
} 