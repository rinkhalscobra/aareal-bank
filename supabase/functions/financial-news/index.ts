import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
  };
  category: 'banking' | 'economy' | 'crypto';
}

const RSS_FEEDS = {
  banking: [
    { url: 'https://feeds.finance.yahoo.com/rss/2.0/headline?s=financial&region=US&lang=en-US', source: 'Yahoo Finance' },
    { url: 'https://www.cnbc.com/id/10000664/device/rss/rss.html', source: 'CNBC' },
    { url: 'https://feeds.finance.yahoo.com/rss/2.0/headline?s=banking&region=US&lang=en-US', source: 'Yahoo Finance' },
    { url: 'https://www.marketwatch.com/rss/topstories', source: 'MarketWatch' },
    { url: 'https://www.forbes.com/investing/feed/', source: 'Forbes' },
  ],
  economy: [
    { url: 'https://feeds.finance.yahoo.com/rss/2.0/headline?s=economy&region=US&lang=en-US', source: 'Yahoo Finance' },
    { url: 'https://www.cnbc.com/id/20910258/device/rss/rss.html', source: 'CNBC' },
    { url: 'https://feeds.finance.yahoo.com/rss/2.0/headline?s=markets&region=US&lang=en-US', source: 'Yahoo Finance' },
    { url: 'https://www.marketwatch.com/rss/realtimeheadlines', source: 'MarketWatch' },
    { url: 'https://www.forbes.com/business/feed/', source: 'Forbes' },
  ],
  crypto: [
    { url: 'https://cointelegraph.com/rss', source: 'CoinTelegraph' },
    { url: 'https://www.coindesk.com/arc/outboundfeeds/rss/', source: 'CoinDesk' },
    { url: 'https://cointelegraph.com/rss/tag/bitcoin', source: 'CoinTelegraph' },
    { url: 'https://cointelegraph.com/rss/tag/altcoin', source: 'CoinTelegraph' },
    { url: 'https://decrypt.co/feed', source: 'Decrypt' },
  ]
};

const FALLBACK_IMAGES = {
  banking: [
    'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  economy: [
    'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/8293731/pexels-photo-8293731.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  crypto: [
    'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
  ]
};

let imageIndex = 0;

function decodeHTMLEntities(text: string): string {
  const entities: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&apos;': "'",
    '&#39;': "'",
    '&#x27;': "'",
    '&nbsp;': ' ',
    '&mdash;': '—',
    '&ndash;': '–',
    '&hellip;': '…',
    '&rsquo;': "'",
    '&lsquo;': "'",
    '&rdquo;': '"',
    '&ldquo;': '"',
  };

  let decoded = text;
  for (const [entity, char] of Object.entries(entities)) {
    decoded = decoded.replace(new RegExp(entity, 'g'), char);
  }

  decoded = decoded.replace(/&#(\d+);/g, (match, dec) => {
    return String.fromCharCode(parseInt(dec, 10));
  });

  decoded = decoded.replace(/&#x([0-9a-f]+);/gi, (match, hex) => {
    return String.fromCharCode(parseInt(hex, 16));
  });

  return decoded;
}

function parseRSSFeed(xmlText: string, sourceName: string, category: string): NewsArticle[] {
  const articles: NewsArticle[] = [];

  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  const items = xmlText.match(itemRegex) || [];

  for (const item of items) {
    const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/);
    const linkMatch = item.match(/<link><!\[CDATA\[(.*?)\]\]><\/link>|<link>(.*?)<\/link>/);
    const descMatch = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>|<description>(.*?)<\/description>/);
    const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
    const imageMatch = item.match(/<media:content.*?url="(.*?)".*?\/?>|<enclosure.*?url="(.*?)".*?\/?>/);

    if (titleMatch && linkMatch) {
      const rawTitle = (titleMatch[1] || titleMatch[2] || '').trim();
      const title = decodeHTMLEntities(rawTitle);
      const url = (linkMatch[1] || linkMatch[2] || '').trim();
      const rawDescription = (descMatch?.[1] || descMatch?.[2] || '').replace(/<[^>]*>/g, '').trim();
      const description = decodeHTMLEntities(rawDescription);
      const pubDate = pubDateMatch?.[1] || new Date().toISOString();
      let imageUrl = imageMatch?.[1] || imageMatch?.[2] || '';

      if (!imageUrl || imageUrl.includes('data:image')) {
        const fallbackImages = FALLBACK_IMAGES[category as keyof typeof FALLBACK_IMAGES] || FALLBACK_IMAGES.banking;
        imageUrl = fallbackImages[imageIndex % fallbackImages.length];
        imageIndex++;
      }

      if (title && url && title !== '[Removed]') {
        articles.push({
          title,
          description: description || 'Read more to discover the full story.',
          url,
          urlToImage: imageUrl,
          publishedAt: pubDate,
          source: { name: sourceName },
          category: 'banking' as any
        });
      }
    }
  }

  return articles;
}

async function fetchNewsFromRSS(category: string): Promise<NewsArticle[]> {
  try {
    const feeds = RSS_FEEDS[category as keyof typeof RSS_FEEDS] || RSS_FEEDS.banking;
    const allArticles: NewsArticle[] = [];

    for (const feed of feeds) {
      try {
        const response = await fetch(feed.url);
        if (!response.ok) continue;

        const xmlText = await response.text();
        const articles = parseRSSFeed(xmlText, feed.source, category);

        articles.forEach(article => {
          article.category = category as 'banking' | 'economy' | 'crypto';
        });

        allArticles.push(...articles.slice(0, 5));
      } catch (error) {
        console.error(`Error fetching feed ${feed.url}:`, error);
      }
    }

    return allArticles.slice(0, 25);
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

async function getOrRefreshNews(supabase: any, category: string): Promise<NewsArticle[]> {
  try {
    const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000).toISOString();

    const { data: recentArticles, error: fetchError } = await supabase
      .from('news_articles')
      .select('*')
      .eq('category', category)
      .gte('created_at', fifteenMinutesAgo)
      .order('published_at', { ascending: false });

    if (!fetchError && recentArticles && recentArticles.length > 0) {
      console.log(`Returning ${recentArticles.length} cached articles for ${category}`);
      return recentArticles.map((article: any) => ({
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.image_url,
        publishedAt: article.published_at,
        source: { name: article.source_name },
        category: article.category
      }));
    }

    console.log(`Fetching fresh articles for ${category}`);
    const freshArticles = await fetchNewsFromRSS(category);

    if (freshArticles.length > 0) {
      const { error: deleteError } = await supabase
        .from('news_articles')
        .delete()
        .eq('category', category);

      if (deleteError) {
        console.error('Error deleting old articles:', deleteError);
      }

      const articlesToInsert = freshArticles.map(article => ({
        title: article.title,
        description: article.description,
        url: article.url,
        image_url: article.urlToImage,
        published_at: article.publishedAt,
        source_name: article.source.name,
        category: article.category
      }));

      const { error: insertError } = await supabase
        .from('news_articles')
        .insert(articlesToInsert);

      if (insertError) {
        console.error('Error inserting articles:', insertError);
      }
    }

    return freshArticles;
  } catch (error) {
    console.error('Error in getOrRefreshNews:', error);
    return [];
  }
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const url = new URL(req.url);
    const category = url.searchParams.get('category') || 'economy';

    if (!['economy', 'crypto'].includes(category)) {
      return new Response(
        JSON.stringify({ error: 'Invalid category. Must be economy or crypto' }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const articles = await getOrRefreshNews(supabase, category);

    return new Response(
      JSON.stringify({ articles, category }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error in financial-news function:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch news', details: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});
