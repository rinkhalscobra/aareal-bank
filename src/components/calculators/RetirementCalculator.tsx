import { useState } from 'react';
import { PiggyBank, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function RetirementCalculator() {
  const { t } = useLanguage();
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(65);
  const [currentSavings, setCurrentSavings] = useState(50000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [desiredMonthlyIncome, setDesiredMonthlyIncome] = useState(5000);

  const yearsUntilRetirement = retirementAge - currentAge;
  const monthsUntilRetirement = yearsUntilRetirement * 12;
  const monthlyRate = annualReturn / 100 / 12;

  const futureValue = currentSavings * Math.pow(1 + monthlyRate, monthsUntilRetirement) +
    monthlyContribution * ((Math.pow(1 + monthlyRate, monthsUntilRetirement) - 1) / monthlyRate);

  const neededForRetirement = (desiredMonthlyIncome * 12) / (annualReturn / 100);

  const totalContributions = currentSavings + (monthlyContribution * monthsUntilRetirement);
  const investmentGains = futureValue - totalContributions;

  const shortfall = neededForRetirement - futureValue;
  const onTrack = futureValue >= neededForRetirement;

  const requiredMonthlyContribution = shortfall > 0
    ? (shortfall / ((Math.pow(1 + monthlyRate, monthsUntilRetirement) - 1) / monthlyRate))
    : 0;

  const monthlyIncomeAtRetirement = (futureValue * (annualReturn / 100)) / 12;

  return (
    <div className="bg-white p-8 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <PiggyBank className="w-8 h-8 text-[#D00000]" />
        <h3 className="text-2xl font-bold text-[#000000]">{t.financialEducation.calculators.retirementCalc.title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#333333] mb-2">
              {t.financialEducation.calculators.retirementCalc.currentAge}: {currentAge}
            </label>
            <input
              type="range"
              min="18"
              max="70"
              step="1"
              value={currentAge}
              onChange={(e) => setCurrentAge(Number(e.target.value))}
              className="w-full h-2 bg-[#E5E5E5] rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#333333] mb-2">
              {t.financialEducation.calculators.retirementCalc.retirementAge}: {retirementAge}
            </label>
            <input
              type="range"
              min={currentAge + 1}
              max="80"
              step="1"
              value={retirementAge}
              onChange={(e) => setRetirementAge(Number(e.target.value))}
              className="w-full h-2 bg-[#E5E5E5] rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-xs text-[#777777] mt-1">{t.financialEducation.calculators.retirementCalc.yearsUntil.replace('{years}', String(yearsUntilRetirement))}</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#333333] mb-2">
              {t.financialEducation.calculators.retirementCalc.currentSavings}: ${currentSavings.toLocaleString()}
            </label>
            <input
              type="range"
              min="0"
              max="500000"
              step="5000"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(Number(e.target.value))}
              className="w-full h-2 bg-[#E5E5E5] rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#333333] mb-2">
              {t.financialEducation.calculators.retirementCalc.monthlyContribution}: ${monthlyContribution.toLocaleString()}
            </label>
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
              className="w-full h-2 bg-[#E5E5E5] rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#333333] mb-2">
              {t.financialEducation.calculators.retirementCalc.expectedReturn}: {annualReturn.toFixed(1)}%
            </label>
            <input
              type="range"
              min="3"
              max="12"
              step="0.5"
              value={annualReturn}
              onChange={(e) => setAnnualReturn(Number(e.target.value))}
              className="w-full h-2 bg-[#E5E5E5] rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-xs text-[#777777] mt-1">{t.financialEducation.calculators.retirementCalc.historicalAvg}</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#333333] mb-2">
              {t.financialEducation.calculators.retirementCalc.desiredIncome}: ${desiredMonthlyIncome.toLocaleString()}
            </label>
            <input
              type="range"
              min="2000"
              max="20000"
              step="500"
              value={desiredMonthlyIncome}
              onChange={(e) => setDesiredMonthlyIncome(Number(e.target.value))}
              className="w-full h-2 bg-[#E5E5E5] rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-xs text-[#777777] mt-1">${(desiredMonthlyIncome * 12).toLocaleString()} {t.financialEducation.calculators.retirementCalc.perYear}</p>
          </div>

          <div className="bg-[#FFF1F1] p-4 rounded-lg border-l-4 border-[#D00000]">
            <p className="text-sm font-bold text-[#000000] mb-2">{t.financialEducation.calculators.retirementCalc.tipsTitle}:</p>
            <ul className="text-sm text-[#333333] space-y-1 list-disc list-inside">
              <li>{t.financialEducation.calculators.retirementCalc.tip1}</li>
              <li>{t.financialEducation.calculators.retirementCalc.tip2}</li>
              <li>{t.financialEducation.calculators.retirementCalc.tip3}</li>
              <li>{t.financialEducation.calculators.retirementCalc.tip4}</li>
              <li>{t.financialEducation.calculators.retirementCalc.tip5}</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          {onTrack ? (
            <div className="bg-gradient-to-br from-[#D00000] to-[#000000] text-white p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8" />
                <h4 className="text-lg font-bold">{t.financialEducation.calculators.retirementCalc.onTrack}</h4>
              </div>
              <p className="text-sm opacity-90 mb-4">
                {t.financialEducation.calculators.retirementCalc.onTrackText}
              </p>
              <div className="bg-white/10 p-4 rounded backdrop-blur-sm">
                <p className="text-sm opacity-90 mb-1">{t.financialEducation.calculators.retirementCalc.projectedIncome}</p>
                <p className="text-3xl font-bold">${monthlyIncomeAtRetirement.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-[#D00000] to-[#000000] text-white p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8" />
                <h4 className="text-lg font-bold">{t.financialEducation.calculators.retirementCalc.actionNeeded}</h4>
              </div>
              <p className="text-sm opacity-90 mb-4">
                {t.financialEducation.calculators.retirementCalc.actionText}
              </p>
              <div className="bg-white/10 p-4 rounded backdrop-blur-sm">
                <p className="text-sm opacity-90 mb-1">{t.financialEducation.calculators.retirementCalc.additionalNeeded}</p>
                <p className="text-3xl font-bold">${requiredMonthlyContribution.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
            </div>
          )}

          <div className="bg-[#F5F5F5] p-6 rounded-lg border-2 border-[#E5E5E5]">
            <h4 className="text-lg font-bold mb-4 text-[#000000]">{t.financialEducation.calculators.retirementCalc.snapshot}</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-[#E5E5E5]">
                <span className="text-[#333333]">{t.financialEducation.calculators.retirementCalc.yearsToRetirement}</span>
                <span className="font-bold text-[#000000]">{yearsUntilRetirement} years</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#E5E5E5]">
                <span className="text-[#333333]">{t.financialEducation.calculators.retirementCalc.projectedNestEgg}</span>
                <span className="font-bold text-[#000000]">${futureValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#E5E5E5]">
                <span className="text-[#333333]">{t.financialEducation.calculators.retirementCalc.totalContributions}</span>
                <span className="font-bold text-[#000000]">${totalContributions.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#E5E5E5]">
                <span className="text-[#333333] flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#D00000]" />
                  {t.financialEducation.calculators.retirementCalc.investmentGains}
                </span>
                <span className="font-bold text-[#D00000]">${investmentGains.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-[#333333]">{t.financialEducation.calculators.retirementCalc.monthlyIncome}</span>
                <span className="font-bold text-[#000000]">${monthlyIncomeAtRetirement.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F5F5F5] p-6 rounded-lg border-2 border-[#E5E5E5]">
            <h4 className="text-lg font-bold mb-4 text-[#000000]">{t.financialEducation.calculators.retirementCalc.composition}</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-[#333333]">{t.financialEducation.calculators.retirementCalc.initialSavings}</span>
                  <span className="font-semibold text-[#000000]">${currentSavings.toLocaleString()}</span>
                </div>
                <div className="w-full bg-[#E5E5E5] rounded-full h-3">
                  <div
                    className="bg-[#D00000] h-3 rounded-full"
                    style={{ width: `${(currentSavings / futureValue) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-[#333333]">{t.financialEducation.calculators.retirementCalc.contributions}</span>
                  <span className="font-semibold text-[#000000]">${(monthlyContribution * monthsUntilRetirement).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="w-full bg-[#E5E5E5] rounded-full h-3">
                  <div
                    className="bg-[#000000] h-3 rounded-full"
                    style={{ width: `${((monthlyContribution * monthsUntilRetirement) / futureValue) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-[#333333]">{t.financialEducation.calculators.retirementCalc.investmentGrowth}</span>
                  <span className="font-semibold text-[#D00000]">${investmentGains.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="w-full bg-[#E5E5E5] rounded-full h-3">
                  <div
                    className="bg-[#D00000] h-3 rounded-full"
                    style={{ width: `${(investmentGains / futureValue) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#000000] text-white p-6 rounded-lg">
            <h4 className="text-lg font-bold mb-4">{t.financialEducation.calculators.retirementCalc.rule4Percent}</h4>
            <p className="text-sm opacity-90 mb-4">
              {t.financialEducation.calculators.retirementCalc.rule4PercentText}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-3 rounded">
                <p className="text-xs opacity-75">{t.financialEducation.calculators.retirementCalc.safeAnnual}</p>
                <p className="text-xl font-bold">${(futureValue * 0.04).toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
              <div className="bg-white/10 p-3 rounded">
                <p className="text-xs opacity-75">{t.financialEducation.calculators.retirementCalc.safeMonthly}</p>
                <p className="text-xl font-bold">${((futureValue * 0.04) / 12).toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
