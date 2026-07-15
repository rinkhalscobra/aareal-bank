import { useState } from 'react';
import { CreditCard, AlertCircle, TrendingDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function DebtPayoffCalculator() {
  const { t } = useLanguage();
  const [balance, setBalance] = useState(5000);
  const [interestRate, setInterestRate] = useState(18);
  const [monthlyPayment, setMonthlyPayment] = useState(200);

  const calculatePayoff = () => {
    const monthlyRate = interestRate / 100 / 12;
    const minPayment = balance * 0.02;

    if (monthlyPayment <= minPayment) {
      return {
        months: 999,
        totalPaid: 0,
        totalInterest: 0,
        warning: true
      };
    }

    if (monthlyRate === 0) {
      const months = Math.ceil(balance / monthlyPayment);
      return {
        months,
        totalPaid: balance,
        totalInterest: 0,
        warning: false
      };
    }

    const months = Math.ceil(
      -Math.log(1 - (balance * monthlyRate) / monthlyPayment) / Math.log(1 + monthlyRate)
    );

    const totalPaid = monthlyPayment * months;
    const totalInterest = totalPaid - balance;

    return {
      months: isFinite(months) ? months : 999,
      totalPaid,
      totalInterest,
      warning: false
    };
  };

  const result = calculatePayoff();
  const years = Math.floor(result.months / 12);
  const months = Math.ceil(result.months % 12);

  const payoffDate = new Date();
  payoffDate.setMonth(payoffDate.getMonth() + result.months);

  const doubleMonthlyPayment = monthlyPayment * 2;
  const monthlyRate = interestRate / 100 / 12;
  const doubleMonths = monthlyRate > 0
    ? Math.ceil(-Math.log(1 - (balance * monthlyRate) / doubleMonthlyPayment) / Math.log(1 + monthlyRate))
    : Math.ceil(balance / doubleMonthlyPayment);
  const doubleTotalPaid = doubleMonthlyPayment * doubleMonths;
  const doubleTotalInterest = doubleTotalPaid - balance;
  const interestSaved = result.totalInterest - doubleTotalInterest;

  return (
    <div className="bg-white p-8 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <CreditCard className="w-8 h-8 text-[#D00000]" />
        <h3 className="text-2xl font-bold text-[#000000]">{t.financialEducation.calculators.debtCalc.title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#333333] mb-2">
              {t.financialEducation.calculators.debtCalc.totalDebt}: ${balance.toLocaleString()}
            </label>
            <input
              type="range"
              min="500"
              max="50000"
              step="500"
              value={balance}
              onChange={(e) => setBalance(Number(e.target.value))}
              className="w-full h-2 bg-[#E5E5E5] rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#333333] mb-2">
              {t.financialEducation.calculators.debtCalc.interestRate}: {interestRate.toFixed(1)}%
            </label>
            <input
              type="range"
              min="0"
              max="30"
              step="0.5"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-[#E5E5E5] rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#333333] mb-2">
              {t.financialEducation.calculators.debtCalc.monthlyPayment}: ${monthlyPayment.toLocaleString()}
            </label>
            <input
              type="range"
              min="50"
              max="2000"
              step="25"
              value={monthlyPayment}
              onChange={(e) => setMonthlyPayment(Number(e.target.value))}
              className="w-full h-2 bg-[#E5E5E5] rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-xs text-[#777777] mt-1">
              {t.financialEducation.calculators.debtCalc.minimumPayment}: ${(balance * 0.02).toFixed(0)}
            </p>
          </div>

          {result.warning && (
            <div className="bg-[#FFF1F1] p-4 rounded-lg border-l-4 border-[#D00000]">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#D00000] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-[#000000] mb-1">{t.financialEducation.calculators.debtCalc.paymentTooLow}</p>
                  <p className="text-sm text-[#A00000]">
                    {t.financialEducation.calculators.debtCalc.paymentWarning}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="bg-[#FFF1F1] p-4 rounded-lg border-l-4 border-[#D00000]">
            <p className="text-sm font-bold text-[#000000] mb-2">{t.financialEducation.calculators.debtCalc.strategies}:</p>
            <ul className="text-sm text-[#333333] space-y-1 list-disc list-inside">
              <li>{t.financialEducation.calculators.debtCalc.strategy1}</li>
              <li>{t.financialEducation.calculators.debtCalc.strategy2}</li>
              <li>{t.financialEducation.calculators.debtCalc.strategy3}</li>
              <li>{t.financialEducation.calculators.debtCalc.strategy4}</li>
              <li>{t.financialEducation.calculators.debtCalc.strategy5}</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          {!result.warning && (
            <>
              <div className="bg-gradient-to-br from-[#D00000] to-[#000000] text-white p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-4">{t.financialEducation.calculators.debtCalc.timeline}</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm opacity-90 mb-1">{t.financialEducation.calculators.debtCalc.timeToDebtFree}</p>
                    <p className="text-4xl font-bold">
                      {years > 0 && `${years}y `}
                      {months}m
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm opacity-90 mb-1">{t.financialEducation.calculators.debtCalc.debtFreeDate}</p>
                    <p className="text-xl font-bold">
                      {payoffDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F5F5] p-6 rounded-lg border-2 border-[#E5E5E5]">
                <h4 className="text-lg font-bold mb-4 text-[#000000]">{t.financialEducation.calculators.debtCalc.breakdown}</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-[#E5E5E5]">
                    <span className="text-[#333333]">{t.financialEducation.calculators.debtCalc.originalBalance}</span>
                    <span className="font-bold text-[#000000]">${balance.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-[#E5E5E5]">
                    <span className="text-[#333333]">{t.financialEducation.calculators.debtCalc.totalInterest}</span>
                    <span className="font-bold text-[#D00000]">${result.totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-[#000000] font-bold">{t.financialEducation.calculators.debtCalc.totalPaid}</span>
                    <span className="text-2xl font-bold text-[#000000]">${result.totalPaid.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#D00000] to-[#000000] text-white p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingDown className="w-6 h-6" />
                  <h4 className="text-lg font-bold">{t.financialEducation.calculators.debtCalc.doublePayment}</h4>
                </div>
                <p className="text-sm opacity-90 mb-4">
                  {t.financialEducation.calculators.debtCalc.doubleText.replace('{amount}', doubleMonthlyPayment.toLocaleString())}
                </p>
                <div className="space-y-3">
                  <div className="bg-white/10 p-3 rounded backdrop-blur-sm">
                    <p className="text-sm opacity-90">{t.financialEducation.calculators.debtCalc.timeSaved}</p>
                    <p className="text-xl font-bold">
                      {Math.floor((result.months - doubleMonths) / 12)}y {Math.ceil((result.months - doubleMonths) % 12)}m
                    </p>
                  </div>
                  <div className="bg-white/10 p-3 rounded backdrop-blur-sm">
                    <p className="text-sm opacity-90">{t.financialEducation.calculators.debtCalc.interestSaved}</p>
                    <p className="text-xl font-bold">${interestSaved.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded backdrop-blur-sm">
                    <p className="text-sm opacity-90">{t.financialEducation.calculators.debtCalc.newPayoffTime}</p>
                    <p className="text-xl font-bold">
                      {Math.floor(doubleMonths / 12)}y {Math.ceil(doubleMonths % 12)}m
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F5F5] p-6 rounded-lg border-2 border-[#E5E5E5]">
                <h4 className="text-lg font-bold mb-3 text-[#000000]">{t.financialEducation.calculators.debtCalc.progressViz}</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-[#333333]">{t.financialEducation.calculators.debtCalc.principal}</span>
                      <span className="font-semibold text-[#000000]">{((balance / result.totalPaid) * 100).toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-[#E5E5E5] rounded-full h-4">
                      <div
                        className="bg-[#D00000] h-4 rounded-full"
                        style={{ width: `${(balance / result.totalPaid) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-[#333333]">{t.financialEducation.calculators.debtCalc.interest}</span>
                      <span className="font-semibold text-[#D00000]">{((result.totalInterest / result.totalPaid) * 100).toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-[#E5E5E5] rounded-full h-4">
                      <div
                        className="bg-[#D00000] h-4 rounded-full"
                        style={{ width: `${(result.totalInterest / result.totalPaid) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
