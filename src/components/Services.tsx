import { Building2, Briefcase, Home, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t.services.personal.title,
      description: t.services.personal.description,
      image: 'https://mybank.com/wp-content/uploads/iStock-1461655919.jpg',
      link: `/${language}/personal-banking`
    },
    {
      icon: Briefcase,
      title: t.services.business.title,
      description: t.services.business.description,
      image: 'https://connect-assets.prosple.com/cdn/ff/xzEY2CYzzUUYgrUskc6EV3HZpSd2iapaTi7qd2f3i8A/1567679355/public/styles/scale_890_no_upsize/public/2019-09/feature-article-what-is-corporate-and-institutional-banking-838x484-2019.png?itok=7fWBWidG',
      link: `/${language}/business-banking`
    },
    {
      icon: Home,
      title: t.services.loans.title,
      description: t.services.loans.description,
      image: 'https://wpblogassets.paytm.com/paytmblog/uploads/2023/10/Blog_Paytm_Mortgage-Loan-How-to-Apply-Interest-Rate-1-1024x640.jpg',
      link: `/${language}/loans`
    },
    {
      icon: TrendingUp,
      title: t.services.investment.title,
      description: t.services.investment.description,
      image: 'https://cdn-res.keymedia.com/cdn-cgi/image/w=1000,h=600,f=auto/https://cdn-res.keymedia.com/cms/images/wp/kall_638653814762636971.png',
      link: `/${language}/investments`
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#000000] mb-4">
            {t.services.title}
          </h2>
          <div className="w-24 h-1 bg-[#D00000] mx-auto mb-4"></div>
          <p className="text-lg sm:text-xl text-[#555555] font-medium px-4">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={service.link}
                className="bg-white border-2 border-[#E5E5E5] overflow-hidden block"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 w-10 h-10 bg-[#D00000] flex items-center justify-center">
                    <Icon className="text-white" size={20} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#000000] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#555555] leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
