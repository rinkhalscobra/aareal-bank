import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { value: '130+', label: t.about.stats.years, image: '/1.png' },
    { value: '500K+', label: t.about.stats.customers, image: '/2.webp' },
    { value: '150+', label: t.about.stats.branches, image: '/3.svg' },
    { value: '$50B+', label: t.about.stats.assets, image: '/4.svg' }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-[#F6F8F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#DDE7E3] hover:border-[#0F766E] transition-all overflow-hidden group aspect-square p-4"
            >
              <img
                src={stat.image}
                alt={stat.label}
                className="w-full h-full object-contain scale-90 group-hover:scale-100 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
