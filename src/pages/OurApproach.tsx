import { useLanguage } from '../context/LanguageContext';

export default function OurApproach() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="relative w-full mb-20">
        <img
          src="https://assets.abnamro.com/api/public/content/wm-2025-shot-33-028-landscape-4x1.jpg?t=h640"
          alt={t.ourApproachPage.title}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/70 via-[#000000]/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
              {t.ourApproachPage.title}
            </h1>
            <p className="text-2xl lg:text-3xl text-white mb-12 font-light">
              {t.ourApproachPage.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white p-12 shadow-lg mb-16">
          <p className="text-xl text-[#333333] leading-relaxed mb-6">
            {t.ourApproachPage.intro.paragraph1}
          </p>
          <p className="text-xl text-[#333333] leading-relaxed">
            {t.ourApproachPage.intro.paragraph2}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img
              src="https://assets.abnamro.com/api/public/content/wm-2025-shot-48-033-landscape-3x2.jpg?t=w624"
              alt={t.ourApproachPage.rightPartner.title}
              className="w-full h-auto shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-[#000000] mb-6">
              {t.ourApproachPage.rightPartner.title}
            </h2>
            <p className="text-lg text-[#333333] leading-relaxed">
              {t.ourApproachPage.rightPartner.description}
            </p>
          </div>
        </div>

        <div className="bg-white p-12 shadow-lg mb-16">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl lg:text-3xl text-[#000000] font-light italic mb-8 leading-relaxed">
              "{t.ourApproachPage.testimonial.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <img
                src="https://assets.abnamro.com/api/public/content/entrepreneur-hans-gitsels-square-1x1.png?t=w72"
                alt={t.ourApproachPage.testimonial.author}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <p className="font-bold text-[#000000] text-lg">{t.ourApproachPage.testimonial.author}</p>
                <p className="text-[#555555]">{t.ourApproachPage.testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-12 shadow-lg">
          <h2 className="text-4xl font-bold text-[#000000] mb-12 text-center">
            {t.ourApproachPage.atYourService.title}
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-[#000000] mb-4">
                {t.ourApproachPage.atYourService.privateBanker.title}
              </h3>
              <p className="text-lg text-[#333333] leading-relaxed">
                {t.ourApproachPage.atYourService.privateBanker.description}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#000000] mb-4">
                {t.ourApproachPage.atYourService.expertise.title}
              </h3>
              <p className="text-lg text-[#333333] leading-relaxed">
                {t.ourApproachPage.atYourService.expertise.description}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#000000] mb-4">
                {t.ourApproachPage.atYourService.tailored.title}
              </h3>
              <p className="text-lg text-[#333333] leading-relaxed">
                {t.ourApproachPage.atYourService.tailored.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          <div>
            <img
              src="https://assets.abnamro.com/api/public/content/wm-2025-shot-44-161-landscape-3x2.jpg?t=w624"
              alt={t.ourApproachPage.familyBanking.title}
              className="w-full h-auto shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#000000] mb-6">
              {t.ourApproachPage.familyBanking.title}
            </h2>
            <p className="text-lg text-[#333333] leading-relaxed">
              {t.ourApproachPage.familyBanking.description}
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-[#000000] mb-8">{t.ourApproachPage.alsoOfInterest.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg overflow-hidden transition-transform hover:scale-105">
              <img
                src="https://assets.abnamro.com/api/public/content/aamp-events-1-landscape-16x9.jpg?t=h320"
                alt={t.ourApproachPage.alsoOfInterest.events.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#000000] mb-3">{t.ourApproachPage.alsoOfInterest.events.title}</h3>
                <p className="text-[#333333]">
                  {t.ourApproachPage.alsoOfInterest.events.description}
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg overflow-hidden transition-transform hover:scale-105">
              <img
                src="https://assets.abnamro.com/api/public/content/wm-2025-shot-35-194-landscape-16x9.jpg?t=h320"
                alt={t.ourApproachPage.alsoOfInterest.secureBanking.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#000000] mb-3">{t.ourApproachPage.alsoOfInterest.secureBanking.title}</h3>
                <p className="text-[#333333]">
                  {t.ourApproachPage.alsoOfInterest.secureBanking.description}
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg overflow-hidden transition-transform hover:scale-105">
              <img
                src="https://assets.abnamro.com/api/public/content/230829-meespierson-dronten-gh-0503-landscape-16x9.jpg?t=h320"
                alt={t.ourApproachPage.alsoOfInterest.betterWorld.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#000000] mb-3">{t.ourApproachPage.alsoOfInterest.betterWorld.title}</h3>
                <p className="text-[#333333]">
                  {t.ourApproachPage.alsoOfInterest.betterWorld.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
