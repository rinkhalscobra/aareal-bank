import { useLanguage } from '../context/LanguageContext';
import { Building2, Users, TrendingUp, CreditCard, Shield, DollarSign, Briefcase, Store, Factory, Laptop } from 'lucide-react';
import { useState } from 'react';

export default function BusinessBanking() {
  const { t } = useLanguage();
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanTerm, setLoanTerm] = useState(1);
  const [loanPurpose, setLoanPurpose] = useState('Car');
  const [amountError, setAmountError] = useState('');

  const minInterestRate = 7.5;
  const maxInterestRate = 9.4;

  const calculateMonthlyPayment = (principal: number, annualRate: number, years: number) => {
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = years * 12;
    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return monthlyPayment;
  };

  const calculateTotalCost = (monthlyPayment: number, years: number) => {
    return monthlyPayment * years * 12;
  };

  const minMonthlyPayment = calculateMonthlyPayment(loanAmount, minInterestRate, loanTerm);
  const maxMonthlyPayment = calculateMonthlyPayment(loanAmount, maxInterestRate, loanTerm);
  const minTotalCost = calculateTotalCost(minMonthlyPayment, loanTerm);
  const maxTotalCost = calculateTotalCost(maxMonthlyPayment, loanTerm);

  const services = [
    {
      icon: Building2,
      title: t.businessBanking.checking.title,
      description: t.businessBanking.checking.description,
      features: t.businessBanking.checking.features
    },
    {
      icon: CreditCard,
      title: t.businessBanking.creditCards.title,
      description: t.businessBanking.creditCards.description,
      features: t.businessBanking.creditCards.features
    },
    {
      icon: DollarSign,
      title: t.businessBanking.loans.title,
      description: t.businessBanking.loans.description,
      features: t.businessBanking.loans.features
    },
    {
      icon: TrendingUp,
      title: t.businessBanking.merchant.title,
      description: t.businessBanking.merchant.description,
      features: t.businessBanking.merchant.features
    },
    {
      icon: Users,
      title: t.businessBanking.payroll.title,
      description: t.businessBanking.payroll.description,
      features: t.businessBanking.payroll.features
    },
    {
      icon: Shield,
      title: t.businessBanking.treasury.title,
      description: t.businessBanking.treasury.description,
      features: t.businessBanking.treasury.features
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="relative w-full h-[500px] mb-16">
        <img
          src="https://assets.abnamro.com/api/public/content/atl-sous-chef-edit-homepage-landscape-4x1.jpg?t=h880"
          alt="Open a business account"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/80 via-[#000000]/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
                {t.businessBanking.hero.title}
              </h1>
              <p className="text-2xl text-white font-light">
                {t.businessBanking.hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1">
            <img
              src="https://assets.abnamro.com/api/public/content/international-trading-1154-landscape-3x2.jpg?t=w624"
              alt="Access Online"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold mb-6 text-[#000000]">
              {t.businessBanking.accessOnline.title}
            </h2>
            <p className="text-lg text-[#333333] leading-relaxed">
              {t.businessBanking.accessOnline.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[#000000]">
              {t.businessBanking.sepa.title}
            </h2>
            <p className="text-lg text-[#333333] leading-relaxed mb-8">
              {t.businessBanking.sepa.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.ecb.europa.eu/paym/retail/sepa/html/index.en.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#D00000] hover:bg-[#A00000] text-white font-bold py-3 px-8 transition-all"
              >
                {t.businessBanking.sepa.sepaButton}
              </a>
              <a
                href="https://www.iban.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#D00000] hover:bg-[#A00000] text-white font-bold py-3 px-8 transition-all"
              >
                {t.businessBanking.sepa.ibanButton}
              </a>
            </div>
          </div>
          <div>
            <img
              src="https://assets.abnamro.com/api/public/content/international-trading-1591-landscape-3x2.jpg?t=w624"
              alt="SEPA and IBAN"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <div className="bg-white p-10 shadow-lg">
            <h3 className="text-3xl font-bold mb-4 text-[#000000]">{t.businessBanking.loanCalculator.title}</h3>
            <p className="text-[#555555] mb-8">{t.businessBanking.loanCalculator.description}</p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#000000] mb-3">
                  {t.businessBanking.loanCalculator.why}
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'Car', label: t.businessBanking.loanCalculator.purposes.car },
                    { value: 'Renovation', label: t.businessBanking.loanCalculator.purposes.renovation },
                    { value: 'Other', label: t.businessBanking.loanCalculator.purposes.other }
                  ].map((purpose) => (
                    <button
                      key={purpose.value}
                      type="button"
                      onClick={() => setLoanPurpose(purpose.value)}
                      className={`w-full px-4 py-3 text-left border-2 transition-all ${
                        loanPurpose === purpose.value
                          ? 'border-[#D00000] bg-[#FFF1F1] text-[#000000] font-semibold'
                          : 'border-[#CCCCCC] bg-white text-[#000000] hover:border-[#CCCCCC]'
                      }`}
                    >
                      {purpose.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#000000] mb-3">
                  {t.businessBanking.loanCalculator.howMuch}
                </label>
                <div className="flex items-center gap-3 mb-2">
                  <input
                    type="number"
                    min="5000"
                    max="75000"
                    step="1000"
                    value={loanAmount}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      setLoanAmount(value);

                      if (value < 5000) {
                        setAmountError(t.businessBanking.loanCalculator.amountTooLow);
                      } else if (value > 75000) {
                        setAmountError(t.businessBanking.loanCalculator.amountTooHigh);
                      } else {
                        setAmountError('');
                      }
                    }}
                    className={`flex-1 px-4 py-3 border-2 focus:outline-none text-[#000000] text-xl font-semibold ${
                      amountError
                        ? 'border-[#D00000] focus:border-[#D00000]'
                        : 'border-[#CCCCCC] focus:border-[#D00000]'
                    }`}
                  />
                  <span className="text-2xl font-bold text-[#000000]">€</span>
                </div>
                {amountError && (
                  <div className="mb-2 text-sm text-[#D00000] font-semibold">
                    {amountError}
                  </div>
                )}
                <div className="flex justify-between text-sm text-[#555555]">
                  <span>{t.businessBanking.loanCalculator.minAmount}</span>
                  <span>{t.businessBanking.loanCalculator.maxAmount}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#000000] mb-3">
                  {t.businessBanking.loanCalculator.selectTerm}
                </label>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-[#000000]">
                    {loanTerm} {loanTerm === 1 ? t.businessBanking.loanCalculator.year : t.businessBanking.loanCalculator.years}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="1"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full h-2 bg-[#CCCCCC] rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-[#555555] mt-2">
                  <span>{t.businessBanking.loanCalculator.min} 1</span>
                  <span>{t.businessBanking.loanCalculator.max} 8</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 shadow-lg">
            <h3 className="text-2xl font-bold mb-8 text-[#000000]">{t.businessBanking.loanResults.title}</h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-[#000000] mb-4">{t.businessBanking.loanResults.minimum}</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-[#555555] mb-1">{t.businessBanking.loanResults.monthlyRepayments}</div>
                    <div className="text-3xl font-bold text-[#000000]">
                      €{Math.floor(minMonthlyPayment).toLocaleString()}
                      <span className="text-xl">.{(minMonthlyPayment % 1).toFixed(2).substring(2)}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-[#555555] mb-1">{t.businessBanking.loanResults.fixedInterestRate}</div>
                    <div className="text-xl font-semibold text-[#000000]">{minInterestRate}%</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#555555] mb-1">{t.businessBanking.loanResults.totalCosts}</div>
                    <div className="text-xl font-semibold text-[#000000]">€{minTotalCost.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#E5E5E5] pt-6">
                <h4 className="text-lg font-bold text-[#000000] mb-4">{t.businessBanking.loanResults.maximum}</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-[#555555] mb-1">{t.businessBanking.loanResults.monthlyRepayments}</div>
                    <div className="text-3xl font-bold text-[#000000]">
                      €{Math.floor(maxMonthlyPayment).toLocaleString()}
                      <span className="text-xl">.{(maxMonthlyPayment % 1).toFixed(2).substring(2)}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-[#555555] mb-1">{t.businessBanking.loanResults.fixedInterestRate}</div>
                    <div className="text-xl font-semibold text-[#000000]">{maxInterestRate}%</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#555555] mb-1">{t.businessBanking.loanResults.totalCosts}</div>
                    <div className="text-xl font-semibold text-[#000000]">€{maxTotalCost.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                  </div>
                </div>
              </div>

              <div className="text-sm text-[#555555] pt-4 border-t border-[#E5E5E5]">
                {t.businessBanking.loanResults.disclaimer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
