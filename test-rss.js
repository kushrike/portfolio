// Quick test to verify RSS feed is accessible
const Parser = require('rss-parser');

async function testRSSFeed() {
  try {
    const parser = new Parser({
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RSS Reader)',
      },
    });
    
    console.log('Testing RSS feed: https://kushrike.medium.com/feed');
    const feed = await parser.parseURL('https://kushrike.medium.com/feed');
    
    console.log(`✅ RSS feed loaded successfully!`);
    console.log(`📰 Found ${feed.items.length} articles`);
    console.log(`📝 Latest article: "${feed.items[0]?.title}"`);
    console.log(`📅 Published: ${feed.items[0]?.pubDate}`);
    console.log(feed.items[0]);
    
  } catch (error) {
    console.error('❌ RSS feed test failed:', error.message);
  }
}

testRSSFeed();