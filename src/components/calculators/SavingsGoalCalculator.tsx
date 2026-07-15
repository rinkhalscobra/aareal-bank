import { useState } from 'react';
import { Target, Calendar, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function SavingsGoalCalculator() {
  const { t } = useLanguage();
  const [goalAmount, setGoalAmount] = useState(10000);
  const [currentSavings, setCurrentSavings] = useState(2000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [interestRate, setInterestRate] = useState(4);

  const remaining = goalAmount - currentSavings;
  const monthlyRate = interestRate / 100 / 12;

  let monthsToGoal = 0;
  if (monthlyRate > 0) {
    monthsToGoal = Math.log((goalAmount * monthlyRate + monthlyContribution) / (currentSavings * monthlyRate + monthlyContribution)) / Math.log(1 + monthlyRate);
  } else {
    monthsToGoal = remaining / monthlyContribution;
  }

  const yearsToGoal = Math.floor(monthsToGoal / 12);
  const monthsRemainder = Math.ceil(monthsToGoal % 12);

  const totalContributions = monthlyContribution * monthsToGoal;
  const interestEarned = goalAmount - currentSavings - totalContributions;

  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + Math.ceil(monthsToGoal));

  return (
    <div className="bg-white p-8 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <Target className="w-8 h-8 text-[#D00000]" />
        <h3 className="text-2xl font-bold text-[#000000]">{t.financialEducation.calculators.savingsCalc.title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#333333] mb-2">
              {t.financialEducation.calculators.savingsCalc.savingsGoal}: ${goalAmount.toLocaleString()}
            </label>
            <input
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={goalAmount}
              onChange={(e) => setGoalAmount(Number(e.target.value))}
              className="w-full h-2 bg-[#E5E5E5] rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-xs text-[#777777] mt-1">{t.financialEducation.calculators.savingsCalc.whatSavingFor}</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#333333] mb-2">
              {t.financialEducation.calculators.savingsCalc.currentSavings}: ${currentSavings.toLocaleString()}
            </label>
            <input
              type="range"
              min="0"
              max={goalAmount}
              step="100"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(Number(e.target.value))}
              className="w-full h-2 bg-[#E5E5E5] rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-xs text-[#777777] mt-1">{t.financialEducation.calculators.savingsCalc.howMuchNow}</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#333333] mb-2">
              {t.financialEducation.calculators.savingsCalc.monthlyContribution}: ${monthlyContribution.toLocaleString()}
            </label>
            <input
              type="range"
              min="50"
              max="5000"
              step="50"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
              className="w-full h-2 bg-[#E5E5E5] rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-xs text-[#777777] mt-1">{t.financialEducation.calculators.savingsCalc.howMuchMonthly}</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#333333] mb-2">
              {t.financialEducation.calculators.savingsCalc.interestRate}: {interestRate.toFixed(1)}%
            </label>
            <input
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-[#E5E5E5] rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-xs text-[#777777] mt-1">{t.financialEducation.calculators.savingsCalc.expectedReturn}</p>
          </div>

          <div className="bg-[#FFF1F1] p-4 rounded-lg border-l-4 border-[#D00000] mt-6">
            <p className="text-sm text-[#333333]">
              <span className="font-bold">{t.financialEducation.calculators.savingsCalc.quickTips}:</span>
            </p>
            <ul className="text-sm text-[#555555] mt-2 space-y-1 list-disc list-inside">
              <li>{t.financialEducation.calculators.savingsCalc.tip1}</li>
              <li>{t.financialEducation.calculators.savingsCalc.tip2}</li>
              <li>{t.financialEducation.calculators.savingsCalc.tip3}</li>
              <li>{t.financialEducation.calculators.savingsCalc.tip4}</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#D00000] to-[#000000] text-white p-6 rounded-lg">
            <h4 className="text-lg font-bold mb-4">{t.financialEducation.calculators.savingsCalc.timeline}</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8" />
                <div>
                  <p className="text-3xl font-bold">
                    {yearsToGoal > 0 && `${yearsToGoal}y `}
                    {monthsRemainder}m
                  </p>
                  <p className="text-sm opacity-90">{t.financialEducation.calculators.savingsCalc.timeToReach}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/20">
                <p className="text-sm opacity-90">{t.financialEducation.calculators.savingsCalc.targetDate}</p>
                <p className="text-xl font-bold">
                  {targetDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F5F5F5] p-6 rounded-lg border-2 border-[#E5E5E5]">
            <h4 className="text-lg font-bold mb-4 text-[#000000]">{t.financialEducation.calculators.savingsCalc.breakdown}</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-[#E5E5E5]">
                <span className="text-[#333333]">{t.financialEducation.calculators.savingsCalc.goalAmount}</span>
                <span className="font-bold text-[#000000]">${goalAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#E5E5E5]">
                <span className="text-[#333333]">{t.financialEducation.calculators.savingsCalc.startingBalance}</span>
                <span className="font-bold text-[#000000]">${currentSavings.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#E5E5E5]">
                <span className="text-[#333333]">{t.financialEducation.calculators.savingsCalc.stillNeeded}</span>
                <span className="font-bold text-[#D00000]">${remaining.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#E5E5E5]">
                <span className="text-[#333333]">{t.financialEducation.calculators.savingsCalc.totalContributions}</span>
                <span className="font-bold text-[#000000]">${totalContributions.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#333333] flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#D00000]" />
                  {t.financialEducation.calculators.savingsCalc.interestEarned}
                </span>
                <span className="font-bold text-[#D00000]">${Math.max(0, interestEarned).toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F5F5F5] p-6 rounded-lg border-2 border-[#E5E5E5]">
            <h4 className="text-lg font-bold mb-3 text-[#000000]">{t.financialEducation.calculators.savingsCalc.progressBar}</h4>
            <div className="mb-2">
              <div className="w-full bg-[#E5E5E5] rounded-full h-6">
                <div
                  className="bg-gradient-to-r from-[#D00000] to-[#A00000] h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ width: `${Math.min((currentSavings / goalAmount) * 100, 100)}%` }}
                >
                  {((currentSavings / goalAmount) * 100).toFixed(0)}%
                </div>
              </div>
            </div>
            <p className="text-sm text-[#555555] text-center">
              ${currentSavings.toLocaleString()} of ${goalAmount.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
