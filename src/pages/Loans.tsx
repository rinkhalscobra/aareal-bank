import { useLanguage } from '../context/LanguageContext';
import { Home, Car, GraduationCap, Briefcase, Calculator, Clock } from 'lucide-react';

export default function Loans() {
  const { t } = useLanguage();

  const loanProducts = [
    {
      icon: Home,
      title: t.loans.home.title,
      description: t.loans.home.description,
      features: t.loans.home.features,
      rate: t.loans.home.rate,
      term: t.loans.home.term
    },
    {
      icon: Car,
      title: t.loans.auto.title,
      description: t.loans.auto.description,
      features: t.loans.auto.features,
      rate: t.loans.auto.rate,
      term: t.loans.auto.term
    },
    {
      icon: GraduationCap,
      title: t.loans.student.title,
      description: t.loans.student.description,
      features: t.loans.student.features,
      rate: t.loans.student.rate,
      term: t.loans.student.term
    },
    {
      icon: Briefcase,
      title: t.loans.personal.title,
      description: t.loans.personal.description,
      features: t.loans.personal.features,
      rate: t.loans.personal.rate,
      term: t.loans.personal.term
    },
    {
      icon: Home,
      title: t.loans.homeEquity.title,
      description: t.loans.homeEquity.description,
      features: t.loans.homeEquity.features,
      rate: t.loans.homeEquity.rate,
      term: t.loans.homeEquity.term
    },
    {
      icon: Briefcase,
      title: t.loans.business.title,
      description: t.loans.business.description,
      features: t.loans.business.features,
      rate: t.loans.business.rate,
      term: t.loans.business.term
    }
  ];

  return (
    <div className="min-h-screen bg-[#F6F8F7]">
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="https://assets.abnamro.com/api/public/content/lenen-generiek-0693-landscape-16x9.jpg?t=h640"
          alt="Loans"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#172033]/65 via-[#172033]/30 to-transparent"></div>
        <div className="absolute inset-0 bg-[#172033]/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white">
              Loans
            </h1>
            <p className="text-2xl md:text-3xl text-white">
              Borrowing money in the Netherlands from 7.5%
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-10 shadow-lg mb-16 border-l-4 border-[#0F766E]">
          <p className="text-xl text-[#3F4D5F] leading-relaxed">
            Looking to buy a new car? Or perhaps you want to renovate your home? A loan might just make things easier. You arrange it all online, from calculating your loan to getting the money, and all in English. And if you have any questions, the staff at our International Client Desk will be happy to help.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[#172033] mb-12 text-center">
            Choose the loan that is right for you
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://www.abnamro.nl/en/media/pr-car_tcm18-48188.svg"
                alt="Car finance"
                className="w-16 h-16 mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-[#172033]">Car finance loan</h3>
              <p className="text-[#5D6B7B]">
                On the road without worries with our car finance loan.
              </p>
            </div>

            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://www.abnamro.nl/en/media/pr-brush_tcm18-48169.svg"
                alt="Home improvement"
                className="w-16 h-16 mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-[#172033]">Home improvement loan</h3>
              <p className="text-[#5D6B7B]">
                If you are looking to improve your home, a loan might just make things easier.
              </p>
            </div>

            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://www.abnamro.nl/en/media/pr-money-money_tcm18-41793.svg"
                alt="Major purchase"
                className="w-16 h-16 mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-[#172033]">Major purchase loan</h3>
              <p className="text-[#5D6B7B]">
                If your savings won't cover that major purchase, you can choose a loan that's right for you.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-[#172033] mb-6">
              When can you get a loan?
            </h2>
            <p className="text-lg text-[#3F4D5F] mb-4">
              You can apply for a loan if you:
            </p>
            <ul className="space-y-3 text-[#3F4D5F] text-lg">
              <li className="flex items-start">
                <span className="text-[#0F766E] mr-3 mt-1">•</span>
                <span>are aged 21 to 69;</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0F766E] mr-3 mt-1">•</span>
                <span>have sufficient income each month;</span>
              </li>
            </ul>
            <p className="text-[#3F4D5F] text-lg mt-6 leading-relaxed">
              If you are in Malta on a temporary residence permit and qualify for taking out a loan, we will align the loan term with the term of your residence permit.
            </p>
          </div>
          <div>
            <img
              src="https://assets.abnamro.com/api/public/content/lenen-generiek-1407-landscape-3x2.jpg?t=w624"
              alt="Loan eligibility"
              className="w-full h-auto shadow-lg"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[#172033] mb-12">
            Our loans
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 shadow-lg border-l-4 border-[#0F766E]">
              <h3 className="text-2xl font-bold text-[#172033] mb-3">
                Personal Loan
              </h3>
              <p className="text-[#5D6B7B] mb-6 text-lg">
                Ideal for a large one-off expense
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#0F766E] mr-3 mt-1">•</span>
                  <span className="text-[#3F4D5F]">The money in your account in one go.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F766E] mr-3 mt-1">•</span>
                  <span className="text-[#3F4D5F]">You select the loan term. The term depends on what the loan is for.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F766E] mr-3 mt-1">•</span>
                  <span className="text-[#3F4D5F]">Fixed monthly payment. The payment is made up of interest and repayment towards the loan principal.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F766E] mr-3 mt-1">•</span>
                  <span className="text-[#3F4D5F]">A loan must always be paid back. With interest. Buying something with a loan will, therefore, cost you extra.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F766E] mr-3 mt-1">•</span>
                  <span className="text-[#3F4D5F]">A loan is a long-term commitment. Your financial situation may change over that period.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg border-l-4 border-[#0F766E]">
              <h3 className="text-2xl font-bold text-[#172033] mb-3">
                Overdraft
              </h3>
              <p className="text-[#5D6B7B] mb-6 text-lg">
                Convenient when money is tight
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#0F766E] mr-3 mt-1">•</span>
                  <span className="text-[#3F4D5F]">Flexibility in your account when you need it.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F766E] mr-3 mt-1">•</span>
                  <span className="text-[#3F4D5F]">Set your limit yourself online.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F766E] mr-3 mt-1">•</span>
                  <span className="text-[#3F4D5F]">Borrow responsibly, as we will always carefully assess your incomings and outgoings when you apply for an overdraft. In some cases we may reject an overdraft application.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F766E] mr-3 mt-1">•</span>
                  <span className="text-[#3F4D5F]">You pay interest on the amount you are overdrawn.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F766E] mr-3 mt-1">•</span>
                  <span className="text-[#3F4D5F]">Easy and tempting to do more often.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {loanProducts.map((loan, index) => (
            <div key={index} className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#0F766E]">
              <loan.icon className="w-12 h-12 text-[#0F766E] mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-[#172033]">{loan.title}</h3>
              <p className="text-[#5D6B7B] mb-6">{loan.description}</p>

              <div className="bg-[#F6F8F7] p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#3F4D5F] font-semibold">
                    {t.loans.startingRate}
                  </span>
                  <span className="text-2xl font-bold text-[#0F766E]">{loan.rate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#3F4D5F] font-semibold">
                    {t.loans.termLabel}
                  </span>
                  <span className="text-[#172033]">{loan.term}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {loan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#0F766E] mr-2">✓</span>
                    <span className="text-[#3F4D5F]">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#0F766E] hover:bg-[#0B5F59] text-white font-bold py-3 px-6 transition-all">
                {t.loans.applyNow}
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 shadow-lg">
            <Calculator className="w-12 h-12 text-[#0F766E] mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-[#172033]">
              {t.loans.calculator.title}
            </h3>
            <p className="text-[#5D6B7B] mb-6">
              {t.loans.calculator.description}
            </p>
            <button className="bg-[#0F766E] hover:bg-[#0B5F59] text-white font-bold py-3 px-6 transition-all">
              {t.loans.calculator.button}
            </button>
          </div>

          <div className="bg-white p-8 shadow-lg">
            <Clock className="w-12 h-12 text-[#0F766E] mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-[#172033]">
              {t.loans.preApproval.title}
            </h3>
            <p className="text-[#5D6B7B] mb-6">
              {t.loans.preApproval.description}
            </p>
            <button className="bg-[#0F766E] hover:bg-[#0B5F59] text-white font-bold py-3 px-6 transition-all">
              {t.loans.preApproval.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
