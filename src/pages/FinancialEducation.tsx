import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Newspaper, ChevronRight, Clock, DollarSign, ExternalLink, TrendingUp } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../context/LanguageContext';
import BudgetCalculator from '../components/calculators/BudgetCalculator';
import SavingsGoalCalculator from '../components/calculators/SavingsGoalCalculator';
import CompoundInterestCalculator from '../components/calculators/CompoundInterestCalculator';
import DebtPayoffCalculator from '../components/calculators/DebtPayoffCalculator';
import RetirementCalculator from '../components/calculators/RetirementCalculator';

interface NewsArticle {
  id: string;
  title: string;
  description: string;
  url: string;
  image_url: string;
  published_at: string;
  source_name: string;
  category: 'banking' | 'economy' | 'crypto';
}

type ActiveCalculator = 'budget' | 'savings' | 'compound' | 'debt' | 'retirement' | null;

function decodeHTMLEntities(text: string): string {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
}

export default function FinancialEducation() {
  const { t, language } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsArticle[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsCategory, setNewsCategory] = useState<'all' | 'economy' | 'crypto'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const activeCalculator = (searchParams.get('calculator') as ActiveCalculator) || null;

  useEffect(() => {
    fetchNews();

    const refreshInterval = setInterval(() => {
      console.log('Auto-refreshing news articles...');
      fetchNews();
    }, 15 * 60 * 1000);

    return () => clearInterval(refreshInterval);
  }, [language]);

  useEffect(() => {
    filterNews();
  }, [newsCategory, newsArticles]);

  const fetchNews = async () => {
    try {
      setNewsLoading(true);

      const categories = ['economy', 'crypto'];
      categories.forEach(category => {
        fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/financial-news?category=${category}`, {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json'
          }
        }).catch(err => console.error(`Background refresh error for ${category}:`, err));
      });

      const { data, error } = await supabase
        .from('news_articles')
        .select('*')
        .order('published_at', { ascending: false })
        .limit(20);

      if (error) throw error;

      const seenUrls = new Set<string>();
      const validNews = (data || []).filter(article => {
        if (!article.image_url || article.image_url.includes('data:image')) return false;
        if (seenUrls.has(article.url)) return false;
        seenUrls.add(article.url);
        return true;
      });

      setNewsArticles(validNews);
      setNewsLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setNewsLoading(false);
    }
  };

  const diversifyBySources = (articles: NewsArticle[]): NewsArticle[] => {
    if (articles.length === 0) return articles;

    const diversified: NewsArticle[] = [];
    const remaining = [...articles];
    const sourceTracker = new Map<string, number>();

    while (remaining.length > 0) {
      let bestIndex = 0;
      let bestScore = Infinity;

      for (let i = 0; i < remaining.length; i++) {
        const article = remaining[i];
        const lastUsed = sourceTracker.get(article.source_name) || -Infinity;
        const score = diversified.length - lastUsed;

        if (score > bestScore || (score === bestScore && i < bestIndex)) {
          bestScore = score;
          bestIndex = i;
        }
      }

      const selected = remaining.splice(bestIndex, 1)[0];
      diversified.push(selected);
      sourceTracker.set(selected.source_name, diversified.length - 1);
    }

    return diversified;
  };

  const diversifyByCategory = (articles: NewsArticle[]): NewsArticle[] => {
    if (articles.length === 0) return articles;

    const byCategory: Record<string, NewsArticle[]> = {
      economy: [],
      crypto: [],
      banking: []
    };

    articles.forEach(article => {
      if (byCategory[article.category]) {
        byCategory[article.category].push(article);
      }
    });

    const diversified: NewsArticle[] = [];
    const categories = ['economy', 'crypto', 'banking'];
    let categoryIndex = 0;

    while (diversified.length < articles.length) {
      const category = categories[categoryIndex];
      if (byCategory[category].length > 0) {
        diversified.push(byCategory[category].shift()!);
      }
      categoryIndex = (categoryIndex + 1) % categories.length;
    }

    return diversified;
  };

  const filterNews = () => {
    let filtered = newsArticles;

    if (newsCategory !== 'all') {
      filtered = filtered.filter(article => article.category === newsCategory);
      filtered = diversifyBySources(filtered);
    } else {
      filtered = diversifyByCategory(filtered);
    }

    setFilteredNews(filtered);
    setCurrentPage(1);
  };

  const getCurrentPageArticles = () => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    return filteredNews.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(filteredNews.length / articlesPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getNewsCategoryIcon = (category: string) => {
    switch (category) {
      case 'banking':
        return DollarSign;
      case 'economy':
        return TrendingUp;
      case 'crypto':
        return Newspaper;
      default:
        return Newspaper;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    const translations: Record<string, { justNow: string; ago: string }> = {
      en: { justNow: 'Just now', ago: 'h ago' },
      fr: { justNow: 'À l\'instant', ago: 'h il y a' },
      it: { justNow: 'Proprio ora', ago: 'h fa' },
      de: { justNow: 'Gerade eben', ago: 'Std. vor' },
      es: { justNow: 'Ahora mismo', ago: 'h hace' },
      el: { justNow: 'Μόλις τώρα', ago: 'ω πριν' }
    };

    const trans = translations[language] || translations.en;

    if (diffInHours < 1) return trans.justNow;
    if (diffInHours < 24) return `${diffInHours}${trans.ago}`;
    return date.toLocaleDateString();
  };


  if (activeCalculator) {
    return (
      <div className="min-h-screen bg-[#F5F5F5]">
        <div className="bg-gradient-to-br from-[#000000] via-[#000000] to-[#000000] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSearchParams({})}
              className="flex items-center gap-2 text-[#E5E5E5] hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
              {t.financialEducation.calculators.backToEducation}
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {activeCalculator === 'budget' && <BudgetCalculator />}
          {activeCalculator === 'savings' && <SavingsGoalCalculator />}
          {activeCalculator === 'compound' && <CompoundInterestCalculator />}
          {activeCalculator === 'debt' && <DebtPayoffCalculator />}
          {activeCalculator === 'retirement' && <RetirementCalculator />}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="bg-gradient-to-br from-[#000000] via-[#000000] to-[#000000] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Newspaper className="w-12 h-12" />
            <h1 className="text-5xl font-bold">
              {t.financialEducation.news.latestNews}
            </h1>
          </div>
          <p className="text-xl text-[#E5E5E5] max-w-3xl">
            Stay informed with the latest financial news from banking, economy, and cryptocurrency markets.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setNewsCategory('all')}
            className={`px-6 py-3 font-semibold transition-all ${
              newsCategory === 'all'
                ? 'bg-[#D00000] text-white shadow-lg'
                : 'bg-white text-[#333333] hover:bg-[#FFFFFF] border-2 border-[#E5E5E5]'
            }`}
          >
            {t.financialEducation.newsCategories.all}
          </button>
          <button
            onClick={() => setNewsCategory('economy')}
            className={`flex items-center gap-2 px-6 py-3 font-semibold transition-all ${
              newsCategory === 'economy'
                ? 'bg-[#D00000] text-white shadow-lg'
                : 'bg-white text-[#333333] hover:bg-[#FFFFFF] border-2 border-[#E5E5E5]'
            }`}
          >
            <TrendingUp className="w-5 h-5" />
            {t.financialEducation.newsCategories.economy}
          </button>
          <button
            onClick={() => setNewsCategory('crypto')}
            className={`flex items-center gap-2 px-6 py-3 font-semibold transition-all ${
              newsCategory === 'crypto'
                ? 'bg-[#D00000] text-white shadow-lg'
                : 'bg-white text-[#333333] hover:bg-[#FFFFFF] border-2 border-[#E5E5E5]'
            }`}
          >
            <Newspaper className="w-5 h-5" />
            {t.financialEducation.newsCategories.crypto}
          </button>
        </div>

        <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#000000] mb-6">
              {newsCategory === 'all' ? t.financialEducation.news.latestNews : t.financialEducation.news.categoryNews[newsCategory]}
            </h2>

            {newsLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white shadow-xl animate-pulse overflow-hidden border-l-4 border-[#CCCCCC]">
                    <div className="p-6">
                      <div className="h-4 bg-[#E5E5E5] rounded w-1/3 mb-4"></div>
                      <div className="h-6 bg-[#CCCCCC] rounded w-full mb-3"></div>
                      <div className="h-6 bg-[#CCCCCC] rounded w-5/6 mb-4"></div>
                      <div className="h-4 bg-[#E5E5E5] rounded w-full mb-2"></div>
                      <div className="h-4 bg-[#E5E5E5] rounded w-5/6 mb-2"></div>
                      <div className="h-4 bg-[#E5E5E5] rounded w-4/6 mb-6"></div>
                      <div className="h-5 bg-[#E5E5E5] rounded w-1/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredNews.length === 0 ? (
              <div className="bg-white p-12 shadow text-center">
                <Newspaper className="w-16 h-16 text-[#CCCCCC] mx-auto mb-4" />
                <p className="text-[#555555]">{t.financialEducation.news.noNews}</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getCurrentPageArticles().map((article, index) => {
                  const CategoryIcon = getNewsCategoryIcon(article.category);

                  return (
                    <article
                      key={article.id}
                      className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden border-l-4 border-[#D00000]"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                        <div className="p-6 flex flex-col justify-between h-full">
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2 text-sm text-[#777777]">
                                <Clock className="w-4 h-4" />
                                <span className="font-medium">{formatDate(article.published_at)}</span>
                              </div>
                              <div className="bg-[#D00000] text-white px-2 py-1 text-xs font-bold flex items-center gap-1 shadow-lg">
                                <CategoryIcon className="w-3 h-3" />
                                <span className="uppercase tracking-wide">{article.category}</span>
                              </div>
                            </div>

                            <h3 className="text-xl font-bold text-[#000000] mb-3 leading-tight group-hover:text-[#D00000] transition-colors line-clamp-2">
                              {decodeHTMLEntities(article.title)}
                            </h3>

                            <p className="text-[#555555] mb-4 leading-relaxed line-clamp-3">
                              {decodeHTMLEntities(article.description)}
                            </p>
                          </div>

                          <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#D00000] font-bold hover:text-[#A00000] transition-all hover:gap-3 group/link"
                          >
                            <span>Read Full Article</span>
                            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                          </a>
                        </div>
                    </article>
                  );
                })}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-12">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-6 py-3 font-semibold transition-all ${
                      currentPage === 1
                        ? 'bg-[#E5E5E5] text-[#CCCCCC] cursor-not-allowed'
                        : 'bg-white text-[#D00000] hover:bg-[#FFF1F1] border-2 border-[#D00000]'
                    }`}
                  >
                    Previous
                  </button>

                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 font-semibold transition-all ${
                          currentPage === page
                            ? 'bg-[#D00000] text-white shadow-lg'
                            : 'bg-white text-[#333333] hover:bg-[#FFFFFF] border-2 border-[#E5E5E5]'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-6 py-3 font-semibold transition-all ${
                      currentPage === totalPages
                        ? 'bg-[#E5E5E5] text-[#CCCCCC] cursor-not-allowed'
                        : 'bg-white text-[#D00000] hover:bg-[#FFF1F1] border-2 border-[#D00000]'
                    }`}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
            )}
        </div>

        <div className="bg-gradient-to-br from-[#FFFFFF] via-[#E5E5E5] to-[#FFFFFF] text-[#000000] p-12 shadow-xl">
          <div className="text-center max-w-3xl mx-auto">
            <Newspaper className="w-16 h-16 mx-auto mb-6 text-[#D00000]" />
            <h2 className="text-3xl font-bold mb-4">{t.financialEducation.finalCta.title}</h2>
            <p className="text-[#000000] mb-8">
              {t.financialEducation.finalCta.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-[#D00000] hover:bg-[#A00000] text-white font-bold py-4 px-8 transition-all">
                {t.financialEducation.finalCta.openAccount}
              </button>
              <button className="bg-white hover:bg-[#FFFFFF] text-[#000000] font-bold py-4 px-8 transition-all">
                {t.financialEducation.finalCta.contactUs}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
