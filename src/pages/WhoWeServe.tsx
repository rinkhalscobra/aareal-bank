import { Building2, TrendingUp, Smartphone, ArrowLeftRight, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function WhoWeServe() {
  const { t } = useLanguage();

  const segments = [
    {
      icon: Building2,
      title: t.whoWeServe.segments.banks.title,
      description: t.whoWeServe.segments.banks.description,
      color: 'bg-[#0F766E]'
    },
    {
      icon: TrendingUp,
      title: t.whoWeServe.segments.assetManagers.title,
      description: t.whoWeServe.segments.assetManagers.description,
      color: 'bg-[#24476F]'
    },
    {
      icon: Smartphone,
      title: t.whoWeServe.segments.fintechs.title,
      description: t.whoWeServe.segments.fintechs.description,
      color: 'bg-[#0F766E]'
    },
    {
      icon: ArrowLeftRight,
      title: t.whoWeServe.segments.exchanges.title,
      description: t.whoWeServe.segments.exchanges.description,
      color: 'bg-[#24476F]'
    },
    {
      icon: Shield,
      title: t.whoWeServe.segments.casps.title,
      description: t.whoWeServe.segments.casps.description,
      color: 'bg-[#0F766E]'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative w-full h-[400px] md:h-[400px]">
        <img
          src="https://assets.abnamro.com/api/public/content/wm-2025-shot-36-065-landscape-4x1.jpg?t=h640"
          alt="Private Banking"
          className="w-full h-full object-cover"
        />

       <div className="absolute inset-0 bg-gradient-to-r from-[#172033]/80 via-[#172033]/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-24">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                {t.whoWeServe.hero.title}
              </h1>
              <p className="text-2xl text-white">
                {t.whoWeServe.hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 max-w-4xl mx-auto text-center">
            <p className="text-xl text-[#3F4D5F] leading-relaxed">
              {t.whoWeServe.intro.mainDescription}
            </p>
          </div>

          <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://assets.abnamro.com/api/public/content/wm-2025-shot-43-070-landscape-3x2.jpg?t=w624"
                alt="Wealth at every stage of life"
                className="w-full h-auto shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#172033] mb-6">
                {t.whoWeServe.sections.lifeStage.title}
              </h2>
              <p className="text-lg text-[#3F4D5F] leading-relaxed">
                {t.whoWeServe.sections.lifeStage.description}
              </p>
            </div>
          </div>

          <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#172033] mb-6">
                {t.whoWeServe.sections.business.title}
              </h2>
              <p className="text-lg text-[#3F4D5F] leading-relaxed">
                {t.whoWeServe.sections.business.description}
              </p>
            </div>
            <div className="order-2 md:order-2">
              <img
                src="https://assets.abnamro.com/api/public/content/wm-2025-shot-20-216-landscape-3x2.jpg?t=w624"
                alt="Doing business with complete focus"
                className="w-full h-auto shadow-lg"
              />
            </div>
          </div>

          <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://assets.abnamro.com/api/public/content/wm2025-49-288-nl-landscape-3x2.jpg?t=w624"
                alt="Challenges of exceptionally great wealth"
                className="w-full h-auto shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#172033] mb-6">
                {t.whoWeServe.sections.exceptionalWealth.title}
              </h2>
              <p className="text-lg text-[#3F4D5F] leading-relaxed">
                {t.whoWeServe.sections.exceptionalWealth.description}
              </p>
            </div>
          </div>

          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#172033] mb-4">
                {t.whoWeServe.specialServices.title}
              </h2>
              <p className="text-lg text-[#3F4D5F] max-w-3xl mx-auto">
                {t.whoWeServe.specialServices.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src="https://assets.abnamro.com/api/public/content/wm2025-27-014-nl-landscape-16x9.jpg?t=h320"
                    alt={t.whoWeServe.specialServices.partners.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#172033] mb-4">
                    {t.whoWeServe.specialServices.partners.title}
                  </h3>
                  <p className="text-[#3F4D5F] leading-relaxed">
                    {t.whoWeServe.specialServices.partners.description}
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src="https://assets.abnamro.com/api/public/content/wm-2025-shot-06-110-landscape-16x9.jpg?t=h320"
                    alt={t.whoWeServe.specialServices.expats.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#172033] mb-4">
                    {t.whoWeServe.specialServices.expats.title}
                  </h3>
                  <p className="text-[#3F4D5F] leading-relaxed">
                    {t.whoWeServe.specialServices.expats.description}
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src="https://assets.abnamro.com/api/public/content/abn-mp-10-juni-202525203-landscape-16x9.jpg?t=h320"
                    alt={t.whoWeServe.specialServices.associations.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#172033] mb-4">
                    {t.whoWeServe.specialServices.associations.title}
                  </h3>
                  <p className="text-[#3F4D5F] leading-relaxed">
                    {t.whoWeServe.specialServices.associations.description}
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src="https://assets.abnamro.com/api/public/content/wm-2025-shot-26-130-beleggen-pe-landscape-16x9.jpg?t=h320"
                    alt={t.whoWeServe.specialServices.familyOffices.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#172033] mb-4">
                    {t.whoWeServe.specialServices.familyOffices.title}
                  </h3>
                  <p className="text-[#3F4D5F] leading-relaxed">
                    {t.whoWeServe.specialServices.familyOffices.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
