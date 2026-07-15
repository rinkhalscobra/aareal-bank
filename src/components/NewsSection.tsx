import { useState, useEffect } from 'react';
import { Newspaper, TrendingUp, DollarSign, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../lib/supabase';

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

function decodeHTMLEntities(text: string): string {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
}

export default function NewsSection() {
  const { t, language } = useLanguage();
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    setError(false);

    try {
      const categories = ['economy', 'crypto'];

      categories.forEach(category => {
        fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/financial-news?category=${category}`, {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json'
          }
        }).catch(err => console.error(`Background refresh error for ${category}:`, err));
      });

      const { data, error: dbError } = await supabase
        .from('news_articles')
        .select('*')
        .order('published_at', { ascending: false })
        .limit(3);

      if (dbError) {
        throw dbError;
      }

      const seenUrls = new Set<string>();
      const newsArticles: NewsArticle[] = (data || [])
        .filter(article => {
          if (!article.image_url || article.image_url.includes('data:image')) return false;
          if (seenUrls.has(article.url)) return false;
          seenUrls.add(article.url);
          return true;
        })
        .map(article => ({
          title: decodeHTMLEntities(article.title),
          description: decodeHTMLEntities(article.description),
          url: article.url,
          urlToImage: article.image_url,
          publishedAt: article.published_at,
          source: { name: article.source_name },
          category: article.category
        }));

      setArticles(newsArticles);
      setLoading(false);
    } catch (err) {
      console.error('Failed to fetch news:', err);
      setError(true);
      setLoading(false);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'banking':
        return <DollarSign size={16} />;
      case 'economy':
        return <TrendingUp size={16} />;
      case 'crypto':
        return <Newspaper size={16} />;
      default:
        return <Newspaper size={16} />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return date.toLocaleDateString();
  };

  if (loading) {
    return (
      <section className="bg-[#F5F5F5] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-[#E5E5E5] rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-[#E5E5E5] rounded w-96 mx-auto max-w-full"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-[#F5F5F5] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#D00000]">{t.news.error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F5F5F5] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#000000] mb-4">{t.news.title}</h2>
          <p className="text-lg sm:text-xl text-[#555555] px-4">{t.news.subtitle}</p>
        </div>

        {articles.length === 0 ? (
          <div className="text-center text-[#555555] py-12">
            <p>{t.news.noArticles}</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {articles.map((article, index) => (
                <article
                  key={`${article.url}-${index}`}
                  className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                >
                <div className="p-4 sm:p-6 border-l-4 border-[#D00000]">
                  <div className="flex items-center justify-between mb-3 gap-2">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-[#777777]">
                      <Clock size={14} className="flex-shrink-0" />
                      <span className="whitespace-nowrap">{formatDate(article.publishedAt)}</span>
                    </div>
                    <div className="bg-[#D00000] text-white px-2 py-1 text-xs font-bold flex items-center gap-1 flex-shrink-0">
                      {getCategoryIcon(article.category)}
                      <span className="uppercase hidden xs:inline">{article.category}</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#000000] mb-3 line-clamp-2 group-hover:text-[#D00000] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#555555] mb-4 line-clamp-3">
                    {article.description}
                  </p>

                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm sm:text-base text-[#D00000] font-semibold hover:text-[#A00000] transition-colors"
                  >
                    {t.news.readMore}
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

            <div className="text-center mt-8 sm:mt-12">
              <Link
                to={`/${language}/financial-education`}
                className="inline-flex items-center gap-2 sm:gap-3 bg-[#D00000] hover:bg-[#A00000] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <span>View All Financial News & Education</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
