import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative text-white py-20 sm:py-28 md:py-40 border-b-4 border-[#D00000] min-h-[600px] sm:min-h-[700px] flex items-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/hero-bank-building-new.jpg"
          alt="Modern Bank Building"
          className="w-full h-full object-cover"
          style={{ maxWidth: 'none' }}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#000000]/60"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight px-2">
            {t.hero.title}
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#F5F5F5] mb-10 sm:mb-16 max-w-5xl mx-auto leading-relaxed px-4 font-light">
            {t.hero.description}
          </p>

         <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
  {/* Open Account Button */}
  <a
    href="https://account.malta-global-crypto-bank.com"
    className="inline-block bg-[#D00000] hover:bg-[#A00000] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 transition-all border-2 border-[#D00000] hover:border-[#D00000] text-sm sm:text-base text-center"
  >
    {t.hero.openAccount}
  </a>

  {/* Learn More Button */}
  <a
    href="https://account.malta-global-crypto-bank.com"
    className="inline-block bg-transparent hover:bg-white hover:text-[#000000] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 border-2 border-white transition-all text-sm sm:text-base text-center"
  >
    {t.hero.learnMore}
  </a>
</div>
        </div>
      </div>
    </section>
  );
}
