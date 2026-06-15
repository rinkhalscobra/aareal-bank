import { useLanguage } from '../context/LanguageContext';
import { CreditCard, Shield, Calculator, Check, X } from 'lucide-react';
import { useState } from 'react';

export default function CreditCards() {
  const { t, language } = useLanguage();
  const [monthlySpending, setMonthlySpending] = useState(2000);

  const APPLY_URL = 'https://account.aareal-bank-ag.com/';

  const cards = [
    {
      image: '/PREMIUM.png',
      title: t.creditCards.premium.title,
      description: t.creditCards.premium.description,
      features: t.creditCards.premium.features,
      apr: '15.99% - 21.99%',
      fee: language === 'en' ? '$495 annual fee' : '495 $ de frais annuels'
    },
    {
      image: '/PLATIUM.png',
      title: t.creditCards.travelElite.title,
      description: t.creditCards.travelElite.description,
      features: t.creditCards.travelElite.features,
      apr: '16.99% - 23.99%',
      fee: language === 'en' ? '$95 annual fee' : '95 $ de frais annuels'
    },
    {
      image: '/DEBIT_.png',
      title: t.creditCards.everydayCash.title,
      description: t.creditCards.everydayCash.description,
      features: t.creditCards.everydayCash.features,
      apr: '17.99% - 25.99%',
      fee: language === 'en' ? '$0 annual fee' : '0 $ de frais annuels'
    },
    {
      image: '/CREDIT.png',
      title: t.creditCards.rewardsPlus.title,
      description: t.creditCards.rewardsPlus.description,
      features: t.creditCards.rewardsPlus.features,
      apr: '18.99% - 26.99%',
      fee: language === 'en' ? '$0 annual fee' : '0 $ de frais annuels'
    },
    {
      image: '/PREPAID.png',
      title: t.creditCards.balanceTransfer.title,
      description: t.creditCards.balanceTransfer.description,
      features: t.creditCards.balanceTransfer.features,
      apr:
        language === 'en'
          ? '0% intro APR for 18 months, then 19.99% - 27.99%'
          : '0 % TAP intro pendant 18 mois, puis 19,99 % - 27,99 %',
      fee: language === 'en' ? '$0 annual fee' : '0 $ de frais annuels'
    },
    {
      image: '/PREPAID_6.png',
      title: t.creditCards.secured.title,
      description: t.creditCards.secured.description,
      features: t.creditCards.secured.features,
      apr: '21.99%',
      fee: language === 'en' ? '$0 annual fee' : '0 $ de frais annuels'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F6F8F7]">
      <div className="bg-gradient-to-br from-[#12355B] via-[#172033] to-[#12355B] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">{t.creditCards.title}</h1>
          <p className="text-xl text-[#CBD5DE] max-w-3xl">{t.creditCards.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="bg-gradient-to-br from-[#EEF3F1] to-[#DDE7E3] p-8 flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto max-w-sm object-contain"
                  loading="lazy"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-[#172033]">{card.title}</h3>
                <p className="text-sm text-[#5D6B7B] mb-6">{card.description}</p>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2 pb-2 border-b border-[#DDE7E3]">
                    <span className="text-[#3F4D5F] font-semibold">{t.creditCards.apr}</span>
                    <span className="text-[#172033] font-bold">{card.apr}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#3F4D5F] font-semibold">{t.creditCards.annualFee}</span>
                    <span className="text-[#172033] font-bold">{card.fee}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#0F766E] mr-2">✓</span>
                      <span className="text-[#3F4D5F] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* ✅ Apply Now -> external link, same tab */}
                <a
                  href={APPLY_URL}
                  className="block w-full bg-[#0F766E] hover:bg-[#0B5F59] text-white font-bold py-3 px-6 transition-all text-center"
                >
                  {t.creditCards.applyNow}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <div className="bg-gradient-to-br from-[#0F766E] to-[#12355B] text-white p-10 shadow-xl">
            <Calculator className="w-12 h-12 mb-6" />
            <h3 className="text-3xl font-bold mb-6">{t.creditCards.calculator.title}</h3>
            <p className="text-[#F3F7F6] mb-8">{t.creditCards.calculator.subtitle}</p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  {t.creditCards.calculator.monthlySpending}: ${monthlySpending.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="100"
                  value={monthlySpending}
                  onChange={(e) => setMonthlySpending(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="space-y-3">
                <div className="bg-white/10 p-4 backdrop-blur-sm border-2 border-white/20">
                  <div className="text-sm font-semibold mb-1">{t.creditCards.calculator.rewardsPlusLabel}</div>
                  <div className="text-2xl font-bold">
                    ${(monthlySpending * 12 * 0.015).toFixed(0)}
                    {t.creditCards.calculator.perYear}
                  </div>
                </div>

                <div className="bg-white/10 p-4 backdrop-blur-sm border-2 border-white/20">
                  <div className="text-sm font-semibold mb-1">{t.creditCards.calculator.everydayCashLabel}</div>
                  <div className="text-2xl font-bold">
                    ${(monthlySpending * 12 * 0.025).toFixed(0)}
                    {t.creditCards.calculator.perYear}
                  </div>
                </div>

                <div className="bg-white/10 p-4 backdrop-blur-sm border-2 border-white/20">
                  <div className="text-sm font-semibold mb-1">{t.creditCards.calculator.travelEliteLabel}</div>
                  <div className="text-2xl font-bold">
                    ${(monthlySpending * 12 * 0.03).toFixed(0)}
                    {t.creditCards.calculator.perYear}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 shadow-lg">
            <Shield className="w-12 h-12 text-[#0F766E] mb-6" />
            <h3 className="text-3xl font-bold mb-6 text-[#172033]">{t.creditCards.protection.title}</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3 pb-4 border-b border-[#DDE7E3]">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#172033] mb-1">{t.creditCards.protection.zeroFraud.title}</h4>
                  <p className="text-[#5D6B7B] text-sm">{t.creditCards.protection.zeroFraud.description}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 pb-4 border-b border-[#DDE7E3]">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#172033] mb-1">{t.creditCards.protection.purchaseProtection.title}</h4>
                  <p className="text-[#5D6B7B] text-sm">{t.creditCards.protection.purchaseProtection.description}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 pb-4 border-b border-[#DDE7E3]">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#172033] mb-1">{t.creditCards.protection.extendedWarranty.title}</h4>
                  <p className="text-[#5D6B7B] text-sm">{t.creditCards.protection.extendedWarranty.description}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 pb-4 border-b border-[#DDE7E3]">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#172033] mb-1">{t.creditCards.protection.travelInsurance.title}</h4>
                  <p className="text-[#5D6B7B] text-sm">{t.creditCards.protection.travelInsurance.description}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#172033] mb-1">{t.creditCards.protection.fraudMonitoring.title}</h4>
                  <p className="text-[#5D6B7B] text-sm">{t.creditCards.protection.fraudMonitoring.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#12355B] text-white p-12 mt-16 shadow-xl">
          <h3 className="text-3xl font-bold mb-8 text-center">{t.creditCards.comparison.title}</h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-white/20">
                  <th className="text-left py-4 px-6 font-bold">{t.creditCards.comparison.feature}</th>
                  <th className="text-center py-4 px-6 font-bold">{t.creditCards.comparison.rewardsPlusName}</th>
                  <th className="text-center py-4 px-6 font-bold">{t.creditCards.comparison.travelEliteName}</th>
                  <th className="text-center py-4 px-6 font-bold">{t.creditCards.comparison.everydayCashName}</th>
                </tr>
              </thead>
              <tbody className="text-[#CBD5DE]">
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">{t.creditCards.comparison.annualFee}</td>
                  <td className="py-4 px-6 text-center">$0</td>
                  <td className="py-4 px-6 text-center">$95</td>
                  <td className="py-4 px-6 text-center">$0</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">{t.creditCards.comparison.rewardsRate}</td>
                  <td className="py-4 px-6 text-center">1.5%</td>
                  <td className="py-4 px-6 text-center">3x points</td>
                  <td className="py-4 px-6 text-center">3% groceries</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">{t.creditCards.comparison.signUpBonus}</td>
                  <td className="py-4 px-6 text-center">$200</td>
                  <td className="py-4 px-6 text-center">60,000 pts</td>
                  <td className="py-4 px-6 text-center">$150</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">{t.creditCards.comparison.travelInsurance}</td>
                  <td className="py-4 px-6 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><X className="w-5 h-5 text-[#D8A84A] mx-auto" /></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">{t.creditCards.comparison.airportLounge}</td>
                  <td className="py-4 px-6 text-center"><X className="w-5 h-5 text-[#D8A84A] mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><X className="w-5 h-5 text-[#D8A84A] mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6">{t.creditCards.comparison.purchaseProtection}</td>
                  <td className="py-4 px-6 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-12 mt-16 shadow-lg">
          <div className="text-center">
            <CreditCard className="w-16 h-16 text-[#0F766E] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-[#172033]">{t.creditCards.cta.title}</h2>
            <p className="text-[#5D6B7B] mb-8 max-w-2xl mx-auto">{t.creditCards.cta.description}</p>

            {/* If you also want this CTA button to go to same link, swap it too: */}
            <a
              href={APPLY_URL}
              className="inline-block bg-[#0F766E] hover:bg-[#0B5F59] text-white font-bold py-4 px-8 transition-all text-center"
            >
              {t.creditCards.cta.button}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}