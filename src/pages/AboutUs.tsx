import { useLanguage } from '../context/LanguageContext';
import { Users, Heart, Award, Globe, Target } from 'lucide-react';

export default function AboutUs() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: t.aboutUs.values.integrity.title,
      description: t.aboutUs.values.integrity.description
    },
    {
      icon: Users,
      title: t.aboutUs.values.community.title,
      description: t.aboutUs.values.community.description
    },
    {
      icon: Award,
      title: t.aboutUs.values.excellence.title,
      description: t.aboutUs.values.excellence.description
    },
    {
      icon: Globe,
      title: t.aboutUs.values.innovation.title,
      description: t.aboutUs.values.innovation.description
    }
  ];

  const milestones = [
    {
      year: '1952',
      title: t.aboutUs.milestones.founded.title,
      description: t.aboutUs.milestones.founded.description
    },
    {
      year: '1975',
      title: t.aboutUs.milestones.expansion.title,
      description: t.aboutUs.milestones.expansion.description
    },
    {
      year: '1998',
      title: t.aboutUs.milestones.digital.title,
      description: t.aboutUs.milestones.digital.description
    },
    {
      year: '2026',
      title: t.aboutUs.milestones.branches.title,
      description: t.aboutUs.milestones.branches.description
    }
  ];

  return (
    <div className="min-h-screen bg-[#F6F8F7]">
      <div className="bg-gradient-to-br from-[#12355B] via-[#172033] to-[#12355B] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">{t.aboutUs.title}</h1>
          <p className="text-xl text-[#CBD5DE] max-w-3xl">{t.aboutUs.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="bg-white p-10 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-[#172033]">{t.aboutUs.mission.title}</h2>
            <p className="text-[#3F4D5F] text-lg leading-relaxed">{t.aboutUs.mission.description}</p>
          </div>

          <div className="border-4 border-[#0F766E]">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/e5/e9/e5/caption.jpg?w=1200&h=700&s=1"
              alt="Aareal Bank AG"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-white p-12 shadow-lg mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#172033]">{t.aboutUs.futureFinance.title}</h2>
          <p className="text-[#3F4D5F] text-lg leading-relaxed max-w-4xl mx-auto">{t.aboutUs.futureFinance.description}</p>
        </div>

        <div className="bg-gradient-to-br from-[#EEF3F1] via-[#DDE7E3] to-[#EEF3F1] p-12 shadow-lg text-[#172033] p-12 shadow-lg mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">{t.aboutUs.principles.title}</h2>
            <p className="text-[#172033] text-lg leading-relaxed max-w-4xl mx-auto">{t.aboutUs.principles.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#EEF3F1] via-[#DDE7E3] to-[#EEF3F1] p-8 border-2 border-[#0F766E] hover:shadow-xl transition-all">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                <path d="M18 8C19.0625 8 20 7.125 20 6C20 4.9375 19.0625 4 18 4C16.875 4 16 4.9375 16 6C16 7.125 16.875 8 18 8ZM21.625 7.625C21 9.0625 19.625 10 18 10C16.3125 10 14.9375 9.0625 14.3125 7.625C11.1875 8.75 8.6875 11.25 7.625 14.375C9 15 10 16.375 10 18C10 19.6875 9 21.0625 7.625 21.6875C8.6875 24.8125 11.1875 27.3125 14.3125 28.375C14.9375 27 16.3125 26 18 26C19.625 26 21 27 21.625 28.375C24.75 27.3125 27.25 24.8125 28.375 21.6875C26.9375 21.0625 26 19.6875 26 18C26 16.375 26.9375 15 28.375 14.375C27.25 11.25 24.75 8.75 21.625 7.625ZM30.375 14.0625C32.375 14.25 34 15.9375 34 18C34 20.125 32.375 21.8125 30.375 22C29.0625 26 25.9375 29.125 21.9375 30.375C21.75 32.4375 20.0625 34 18 34C15.875 34 14.1875 32.4375 14 30.4375C10 29.125 6.875 26 5.5625 22C3.5625 21.8125 2 20.125 2 18C2 15.9375 3.5625 14.25 5.5625 14.0625C6.875 10.0625 10 6.9375 14 5.625C14.1875 3.625 15.875 2 18 2C20.0625 2 21.75 3.625 21.9375 5.625C25.9375 6.9375 29.0625 10.0625 30.375 14.0625ZM18 32C19.0625 32 20 31.125 20 30C20 28.9375 19.0625 28 18 28C16.875 28 16 28.9375 16 30C16 31.125 16.875 32 18 32ZM8 18C8 16.9375 7.0625 16 6 16C4.875 16 4 16.9375 4 18C4 19.125 4.875 20 6 20C7.0625 20 8 19.125 8 18ZM30 20C31.0625 20 32 19.125 32 18C32 16.9375 31.0625 16 30 16C28.875 16 28 16.9375 28 18C28 19.125 28.875 20 30 20Z" fill="#0F766E"/>
              </svg>
              <h3 className="text-2xl font-bold mb-4 text-[#0F766E]">{t.aboutUs.principles.sophisticated.title}</h3>
              <p className="text-[#3F4D5F]">{t.aboutUs.principles.sophisticated.description}</p>
            </div>
            <div className="bg-gradient-to-br from-[#EEF3F1] via-[#DDE7E3] to-[#EEF3F1] p-8 border-2 border-[#0F766E] hover:shadow-xl transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" className="mb-4">
                <path d="M18 2C26.8125 2 34 9.1875 34 18C34 26.875 26.8125 34 18 34C9.125 34 2 26.875 2 18C2 9.1875 9.125 2 18 2ZM18 32C25.6875 32 32 25.75 32 18C32 10.3125 25.6875 4 18 4C10.25 4 4 10.3125 4 18C4 25.75 10.25 32 18 32ZM18 10C22.375 10 26 13.625 26 18C26 22.4375 22.375 26 18 26C13.5625 26 10 22.4375 10 18C10 13.625 13.5625 10 18 10ZM18 24C21.25 24 24 21.3125 24 18C24 14.75 21.25 12 18 12C14.6875 12 12 14.75 12 18C12 21.3125 14.6875 24 18 24Z" fill="#0F766E"/>
              </svg>
              <h3 className="text-2xl font-bold mb-4 text-[#0F766E]">{t.aboutUs.principles.seamless.title}</h3>
              <p className="text-[#3F4D5F]">{t.aboutUs.principles.seamless.description}</p>
            </div>
            <div className="bg-gradient-to-br from-[#EEF3F1] via-[#DDE7E3] to-[#EEF3F1] p-8 border-2 border-[#0F766E] hover:shadow-xl transition-all">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                <path d="M12 10V14H24V10C24 6.6875 21.3125 4 18 4C14.6875 4 12 6.6875 12 10ZM10 14V10C10 5.625 13.5625 2 18 2C22.375 2 26 5.625 26 10V14H27C29.75 14 32 16.25 32 19V29C32 31.8125 29.75 34 27 34H9C6.1875 34 4 31.8125 4 29V19C4 16.25 6.1875 14 9 14H10ZM6 19V29C6 30.6875 7.3125 32 9 32H27C28.625 32 30 30.6875 30 29V19C30 17.375 28.625 16 27 16H9C7.3125 16 6 17.375 6 19Z" fill="#0F766E"/>
              </svg>
              <h3 className="text-2xl font-bold mb-4 text-[#0F766E]">{t.aboutUs.principles.secure.title}</h3>
              <p className="text-[#3F4D5F]">{t.aboutUs.principles.secure.description}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-12 shadow-lg">
          <div className="text-center">
            <Users className="w-16 h-16 text-[#0F766E] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-[#172033]">{t.aboutUs.cta.title}</h2>
            <p className="text-[#5D6B7B] mb-8 max-w-2xl mx-auto">{t.aboutUs.cta.description}</p>
           <a
  href="https://account.aareal-bank-ag.com/"
  className="inline-block bg-[#0F766E] hover:bg-[#0B5F59] text-white font-bold py-4 px-8 transition-all text-center"
>
  {t.aboutUs.cta.button}
</a>
          </div>
        </div>
      </div>
    </div>
  );
}
