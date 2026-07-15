import { useLanguage } from '../context/LanguageContext';
import { Users, Target, Award, UserPlus, ArrowRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PersonalBanking() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="relative bg-[#000000] text-white py-32 lg:py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/personalbanking.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/80 via-[#000000]/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 max-w-3xl leading-tight">
            {t.personalBanking.hero.title}
          </h1>
          <p className="text-2xl lg:text-3xl text-[#F5F5F5] max-w-2xl font-light">
            {t.personalBanking.hero.subtitle}
          </p>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl lg:text-2xl text-[#333333] leading-relaxed text-center">
            {t.personalBanking.intro}
          </p>
        </div>
      </div>

      <div className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#000000] text-center mb-4">
            {t.personalBanking.getToKnow.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            <div
              onClick={() => navigate(`/${language}/who-we-serve`)}
              className="bg-white p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer group border-l-4 border-[#D00000] hover:border-[#A00000] flex items-start gap-6 justify-between"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#000000] mb-2">{t.personalBanking.getToKnow.forWho.title}</h3>
                <p className="text-[#555555]">{t.personalBanking.getToKnow.forWho.description}</p>
              </div>
              <ArrowRight className="w-6 h-6 text-[#D00000] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </div>

            <div
              onClick={() => navigate(`/${language}/our-approach`)}
              className="bg-white p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer group border-l-4 border-[#D00000] hover:border-[#A00000] flex items-start gap-6 justify-between"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#000000] mb-2">{t.personalBanking.getToKnow.approach.title}</h3>
                <p className="text-[#555555]">{t.personalBanking.getToKnow.approach.description}</p>
              </div>
              <ArrowRight className="w-6 h-6 text-[#D00000] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </div>
      </div>
           </div>
         </div>

      <div className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://assets.abnamro.com/api/public/content/wm2025-27-073-landscape-3x2.jpg?t=w624"
                alt="Financial planning"
                className="w-full h-auto shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-[#000000] mb-6">
                {t.personalBanking.wealthPlan.title}
              </h2>
              <p className="text-[#333333] leading-relaxed">
                {t.personalBanking.wealthPlan.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
            <img
              src="https://assets.abnamro.com/api/public/content/still-abn-300-klibansky-landscape-16x9.png?t=h320"
              alt="300 years of expertise"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#000000] mb-3">{t.personalBanking.highlights.expertise.title}</h3>
              <p className="text-[#333333] leading-relaxed">
                {t.personalBanking.highlights.expertise.description}
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
            <img
              src="https://assets.abnamro.com/api/public/content/aamp-events-1-landscape-16x9.jpg?t=h320"
              alt="Events"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#000000] mb-3">{t.personalBanking.highlights.events.title}</h3>
              <p className="text-[#333333] leading-relaxed">
                {t.personalBanking.highlights.events.description}
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
            <img
              src="https://assets.abnamro.com/api/public/content/winnaars-cashcow-awards-2024-abn-amro-landscape-16x9.JPG?t=h320"
              alt="Best Private Bank"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#000000] mb-3">{t.personalBanking.highlights.bestBank.title}</h3>
              <p className="text-[#333333] leading-relaxed">
                {t.personalBanking.highlights.bestBank.description}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 shadow-lg">
          <h3 className="text-3xl font-bold mb-6 text-[#000000]">{t.personalBanking.testimonials.title}</h3>

          <div className="space-y-6">
            <div className="border-l-4 border-[#D00000] pl-6 py-4 bg-[#F5F5F5]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D00000] text-[#D00000]" />
                ))}
              </div>
              <p className="text-[#333333] mb-3 italic">
                "{t.personalBanking.testimonials.testimonial1.quote}"
              </p>
              <p className="text-sm font-bold text-[#000000]">- {t.personalBanking.testimonials.testimonial1.author}</p>
            </div>

            <div className="border-l-4 border-[#D00000] pl-6 py-4 bg-[#F5F5F5]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D00000] text-[#D00000]" />
                ))}
              </div>
              <p className="text-[#333333] mb-3 italic">
                "{t.personalBanking.testimonials.testimonial2.quote}"
              </p>
              <p className="text-sm font-bold text-[#000000]">- {t.personalBanking.testimonials.testimonial2.author}</p>
            </div>

            <div className="border-l-4 border-[#D00000] pl-6 py-4 bg-[#F5F5F5]">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D00000] text-[#D00000]" />
                ))}
              </div>
              <p className="text-[#333333] mb-3 italic">
                "{t.personalBanking.testimonials.testimonial3.quote}"
              </p>
              <p className="text-sm font-bold text-[#000000]">- {t.personalBanking.testimonials.testimonial3.author}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F5F5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#000000] text-white p-12 shadow-xl">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center">{t.personalBanking.comparison.title}</h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-white/20">
                    <th className="text-left py-4 px-6 font-bold">{t.personalBanking.comparison.feature}</th>
                    <th className="text-center py-4 px-6 font-bold">{t.personalBanking.comparison.checking}</th>
                    <th className="text-center py-4 px-6 font-bold">{t.personalBanking.comparison.savings}</th>
                    <th className="text-center py-4 px-6 font-bold">{t.personalBanking.comparison.moneyMarket}</th>
                    <th className="text-center py-4 px-6 font-bold">{t.personalBanking.comparison.cd}</th>
                  </tr>
                </thead>
                <tbody className="text-[#E5E5E5]">
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-6">{t.personalBanking.comparison.minimumBalance}</td>
                    <td className="py-4 px-6 text-center">$0</td>
                    <td className="py-4 px-6 text-center">$0</td>
                    <td className="py-4 px-6 text-center">$2,500</td>
                    <td className="py-4 px-6 text-center">$1,000</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-6">{t.personalBanking.comparison.interestRate}</td>
                    <td className="py-4 px-6 text-center">0.01%</td>
                    <td className="py-4 px-6 text-center">0.50%</td>
                    <td className="py-4 px-6 text-center">1.25%</td>
                    <td className="py-4 px-6 text-center">3.00%</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-6">{t.personalBanking.comparison.monthlyFee}</td>
                    <td className="py-4 px-6 text-center">$0</td>
                    <td className="py-4 px-6 text-center">$0</td>
                    <td className="py-4 px-6 text-center">$0</td>
                    <td className="py-4 px-6 text-center">$0</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-6">{t.personalBanking.comparison.debitCard}</td>
                    <td className="py-4 px-6 text-center text-[#FF4D4D]">✓</td>
                    <td className="py-4 px-6 text-center text-[#D00000]">✗</td>
                    <td className="py-4 px-6 text-center text-[#FF4D4D]">✓</td>
                    <td className="py-4 px-6 text-center text-[#D00000]">✗</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-6">{t.personalBanking.comparison.checkWriting}</td>
                    <td className="py-4 px-6 text-center text-[#FF4D4D]">✓</td>
                    <td className="py-4 px-6 text-center text-[#D00000]">✗</td>
                    <td className="py-4 px-6 text-center text-[#FF4D4D]">✓</td>
                    <td className="py-4 px-6 text-center text-[#D00000]">✗</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">{t.personalBanking.comparison.onlineBanking}</td>
                    <td className="py-4 px-6 text-center text-[#FF4D4D]">✓</td>
                    <td className="py-4 px-6 text-center text-[#FF4D4D]">✓</td>
                    <td className="py-4 px-6 text-center text-[#FF4D4D]">✓</td>
                    <td className="py-4 px-6 text-center text-[#FF4D4D]">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
