import { useState } from 'react';
import { TrendingUp, DollarSign, Calendar } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function CompoundInterestCalculator() {
  const { t } = useLanguage();
  const [principal, setPrincipal] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(200);
  const [years, setYears] = useState(20);
  const [interestRate, setInterestRate] = useState(7);
  const [compoundFrequency, setCompoundFrequency] = useState<'monthly' | 'annually'>('monthly');

  const calculateCompoundInterest = () => {
    const r = interestRate / 100;
    const n = compoundFrequency === 'monthly' ? 12 : 1;
    const t = years;

    const futureValuePrincipal = principal * Math.pow(1 + r / n, n * t);

    let futureValueContributions = 0;
    if (monthlyContribution > 0) {
      const monthlyRate = r / 12;
      const totalMonths = years * 12;
      futureValueContributions = monthlyContribution * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
    }

    const totalFutureValue = futureValuePrincipal + futureValueContributions;
    const totalContributions = principal + monthlyContribution * years * 12;
    const totalInterest = totalFutureValue - totalContributions;

    return {
      futureValue: totalFutureValue,
      totalContributions,
      totalInterest,
      principal,
      contributionsOnly: monthlyContribution * years * 12
    };
  };

  const result = calculateCompoundInterest();

  const generateYearlyData = () => {
    const data = [];
    for (let year = 0; year <= years; year += Math.max(1, Math.floor(years / 10))) {
      const r = interestRate / 100;
      const n = compoundFrequency === 'monthly' ? 12 : 1;

      const fvPrincipal = principal * Math.pow(1 + r / n, n * year);

      let fvContributions = 0;
      if (monthlyContribution > 0 && year > 0) {
        const monthlyRate = r / 12;
        const totalMonths = year * 12;
        fvContributions = monthlyContribution * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
      }

      const totalValue = fvPrincipal + fvContributions;
      const totalInvested = principal + monthlyContribution * year * 12;
      const interest = totalValue - totalInvested;

      data.push({
        year,
        totalValue,
        totalInvested,
        interest
      });
    }
    return data;
  };

  const yearlyData = generateYearlyData();

  return (
    <div className="bg-white p-8 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="w-8 h-8 text-[#0F766E]" />
        <h3 className="text-2xl font-bold text-[#172033]">{t.financialEducation.calculators.compoundCalc.title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#3F4D5F] mb-2">
              {t.financialEducation.calculators.compoundCalc.initialInvestment}: ${principal.toLocaleString()}
            </label>
            <input
              type="range"
              min="0"
              max="100000"
              step="1000"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full h-2 bg-[#DDE7E3] rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#3F4D5F] mb-2">
              {t.financialEducation.calculators.compoundCalc.monthlyContribution}: ${monthlyContribution.toLocaleString()}
            </label>
            <input
              type="range"
              min="0"
              max="2000"
              step="50"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
              className="w-full h-2 bg-[#DDE7E3] rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#3F4D5F] mb-2">
              {t.financialEducation.calculators.compoundCalc.yearsToGrow}: {years}
            </label>
            <input
              type="range"
              min="1"
              max="40"
              step="1"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-2 bg-[#DDE7E3] rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#3F4D5F] mb-2">
              {t.financialEducation.calculators.compoundCalc.annualRate}: {interestRate.toFixed(1)}%
            </label>
            <input
              type="range"
              min="0"
              max="15"
              step="0.5"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-[#DDE7E3] rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#3F4D5F] mb-3">
              {t.financialEducation.calculators.compoundCalc.compoundFrequency}
            </label>
            <div className="flex gap-4">
              <button
                onClick={() => setCompoundFrequency('monthly')}
                className={`flex-1 py-3 px-4 font-semibold transition-all ${
                  compoundFrequency === 'monthly'
                    ? 'bg-[#0F766E] text-white'
                    : 'bg-[#DDE7E3] text-[#3F4D5F] hover:bg-[#C7D3D0]'
                }`}
              >
                {t.financialEducation.calculators.compoundCalc.monthly}
              </button>
              <button
                onClick={() => setCompoundFrequency('annually')}
                className={`flex-1 py-3 px-4 font-semibold transition-all ${
                  compoundFrequency === 'annually'
                    ? 'bg-[#0F766E] text-white'
                    : 'bg-[#DDE7E3] text-[#3F4D5F] hover:bg-[#C7D3D0]'
                }`}
              >
                {t.financialEducation.calculators.compoundCalc.annually}
              </button>
            </div>
          </div>

          <div className="bg-[#ECFDF8] p-4 rounded-lg border-l-4 border-[#0F766E] mt-6">
            <p className="text-sm font-bold text-[#172033] mb-2">{t.financialEducation.calculators.compoundCalc.rule72}</p>
            <p className="text-sm text-[#3F4D5F]">
              {t.financialEducation.calculators.compoundCalc.rule72Text.replace('{rate}', String(interestRate)).replace('{years}', (72 / interestRate).toFixed(1))}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-8 h-8" />
              <h4 className="text-lg font-bold">{t.financialEducation.calculators.compoundCalc.futureValue}</h4>
            </div>
            <p className="text-5xl font-bold mb-2">${result.futureValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            <p className="text-sm opacity-90">{t.financialEducation.calculators.compoundCalc.afterYears.replace('{years}', String(years))}</p>
          </div>

          <div className="bg-[#F6F8F7] p-6 rounded-lg border-2 border-[#DDE7E3]">
            <h4 className="text-lg font-bold mb-4 text-[#172033]">{t.financialEducation.calculators.compoundCalc.breakdown}</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-[#3F4D5F]">{t.financialEducation.calculators.compoundCalc.initialInvestment}</span>
                  <span className="text-sm font-bold text-[#172033]">${result.principal.toLocaleString()}</span>
                </div>
                <div className="w-full bg-[#DDE7E3] rounded-full h-3">
                  <div
                    className="bg-[#ECFDF8]0 h-3 rounded-full"
                    style={{ width: `${(result.principal / result.futureValue) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-[#3F4D5F]">{t.financialEducation.calculators.compoundCalc.totalContributions}</span>
                  <span className="text-sm font-bold text-[#172033]">${result.contributionsOnly.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="w-full bg-[#DDE7E3] rounded-full h-3">
                  <div
                    className="bg-indigo-500 h-3 rounded-full"
                    style={{ width: `${(result.contributionsOnly / result.futureValue) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-[#3F4D5F]">{t.financialEducation.calculators.compoundCalc.interestEarned}</span>
                  <span className="text-sm font-bold text-green-600">${result.totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="w-full bg-[#DDE7E3] rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: `${(result.totalInterest / result.futureValue) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-[#C7D3D0]">
              <div className="flex justify-between items-center">
                <span className="font-bold text-[#172033]">{t.financialEducation.calculators.compoundCalc.totalValue}</span>
                <span className="text-2xl font-bold text-[#172033]">${result.futureValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-[#DDE7E3] rounded-lg overflow-hidden">
            <div className="bg-[#12355B] text-white p-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <h4 className="font-bold">{t.financialEducation.calculators.compoundCalc.growthOverTime}</h4>
              </div>
            </div>
            <div className="p-4 max-h-64 overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#F6F8F7] sticky top-0">
                  <tr className="text-left">
                    <th className="py-2 px-3 font-semibold text-[#3F4D5F]">{t.financialEducation.calculators.compoundCalc.year}</th>
                    <th className="py-2 px-3 font-semibold text-[#3F4D5F]">{t.financialEducation.calculators.compoundCalc.balance}</th>
                    <th className="py-2 px-3 font-semibold text-[#3F4D5F]">{t.financialEducation.calculators.compoundCalc.interest}</th>
                  </tr>
                </thead>
                <tbody>
                  {yearlyData.map((data, index) => (
                    <tr key={index} className="border-t border-[#EEF3F1]">
                      <td className="py-2 px-3 text-[#172033] font-medium">{data.year}</td>
                      <td className="py-2 px-3 text-[#172033]">${data.totalValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                      <td className="py-2 px-3 text-green-600 font-semibold">${data.interest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
