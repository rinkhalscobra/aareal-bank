import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MessageCircle, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function Support() {
  const { t } = useLanguage();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const contactMethods = [
    {
      icon: Phone,
      title: t.support.phone.title,
      description: t.support.phone.description,
      action: t.support.phone.action
    },
    {
      icon: MessageCircle,
      title: t.support.chat.title,
      description: t.support.chat.description,
      action: t.support.chat.action
    },
    {
      icon: Mail,
      title: t.support.email.title,
      detail: 'support@aareal-bank-ag.com',
      action: t.support.email.action
    }
  ];


  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="bg-gradient-to-br from-[#000000] via-[#000000] to-[#000000] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">{t.support.title}</h1>
          <p className="text-xl text-[#E5E5E5] max-w-3xl">{t.support.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#D00000] text-center">
              <method.icon className="w-16 h-16 text-[#D00000] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-[#000000]">{method.title}</h3>
              <p className="text-[#555555] mb-4">{method.description}</p>
              <p className="text-[#000000] font-semibold mb-6">{method.detail}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#000000] text-center">
            {t.support.faq.title}
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {t.support.faq.items.map((faq, index) => (
              <div key={index} className="border-2 border-[#E5E5E5] hover:border-[#D00000] transition-colors">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-bold text-[#000000] flex items-center">
                    <HelpCircle className="w-5 h-5 text-[#D00000] mr-3" />
                    {faq.q}
                  </span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#D00000] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#CCCCCC] flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4 text-[#333333] border-t border-[#E5E5E5] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
