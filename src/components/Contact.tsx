import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.email,
      value: 'support@malta-global-crypto-bank.com'
    },
  ];

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 bg-[#000000] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg"
          alt="Contact background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t.contact.title}
          </h2>
          <div className="w-24 h-1 bg-[#D00000] mx-auto mb-4"></div>
          <p className="text-lg sm:text-xl text-[#CCCCCC] font-medium px-4">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 sm:gap-8 max-w-md mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-[#000000] border-2 border-[#333333] hover:border-[#D00000] p-6 sm:p-8 transition-all"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D00000] flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold mb-2">{info.label}</h3>
                    <p className="text-sm sm:text-base text-[#CCCCCC] break-words">{info.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
