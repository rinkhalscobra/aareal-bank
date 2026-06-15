import { useState } from 'react';
import { DollarSign, TrendingDown, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function BudgetCalculator() {
  const { t } = useLanguage();
  const [income, setIncome] = useState(5000);
  const [housing, setHousing] = useState(1500);
  const [transportation, setTransportation] = useState(500);
  const [food, setFood] = useState(600);
  const [utilities, setUtilities] = useState(200);
  const [insurance, setInsurance] = useState(300);
  const [entertainment, setEntertainment] = useState(400);
  const [savings, setSavings] = useState(500);
  const [other, setOther] = useState(300);

  const totalExpenses = housing + transportation + food + utilities + insurance + entertainment + savings + other;
  const remaining = income - totalExpenses;
  const savingsRate = income > 0 ? ((savings / income) * 100).toFixed(1) : 0;

  const needs = housing + transportation + food + utilities + insurance;
  const wants = entertainment + other;

  const needsPercent = income > 0 ? ((needs / income) * 100).toFixed(1) : 0;
  const wantsPercent = income > 0 ? ((wants / income) * 100).toFixed(1) : 0;
  const savingsPercent = income > 0 ? ((savings / income) * 100).toFixed(1) : 0;

  return (
    <div className="bg-white p-8 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <DollarSign className="w-8 h-8 text-[#0F766E]" />
        <h3 className="text-2xl font-bold text-[#172033]">{t.financialEducation.calculators.budgetCalc.title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#3F4D5F] mb-2">
              {t.financialEducation.calculators.budgetCalc.monthlyIncome}: ${income.toLocaleString()}
            </label>
            <input
              type="range"
              min="0"
              max="20000"
              step="100"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="w-full h-2 bg-[#DDE7E3] rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#3F4D5F] mb-2">
              {t.financialEducation.calculators.budgetCalc.housing}: ${housing.toLocaleString()}
            </label>
            <input
              type="range"
              min="0"
              max="5000"
              step="50"
              value={housing}
              onChange={(e) => setHousing(Number(e.target.value))}
              className="w-full h-2 bg-[#DDE7E3] rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#3F4D5F] mb-2">
              {t.financialEducation.calculators.budgetCalc.transportation}: ${transportation.toLocaleString()}
            </label>
            <input
              type="range"
              min="0"
              max="2000"
              step="50"
              value={transportation}
              onChange={(e) => setTransportation(Number(e.target.value))}
              className="w-full h-2 bg-[#DDE7E3] rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#3F4D5F] mb-2">
              {t.financialEducation.calculators.budgetCalc.food}: ${food.toLocaleString()}
            </label>
            <input
              type="range"
              min="0"
              max="2000"
              step="50"
              value={food}
              onChange={(e) => setFood(Number(e.target.value))}
              className="w-full h-2 bg-[#DDE7E3] rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#3F4D5F] mb-2">
              {t.financialEducation.calculators.budgetCalc.utilities}: ${utilities.toLocaleString()}
            </label>
            <input
              type="range"
              min="0"
              max="1000"
              step="25"
              value={utilities}
              onChange={(e) => setUtilities(Number(e.target.value))}
              className="w-full h-2 bg-[#DDE7E3] rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#3F4D5F] mb-2">
              {t.financialEducation.calculators.budgetCalc.insurance}: ${insurance.toLocaleString()}
            </label>
            <input
              type="range"
              min="0"
              max="1000"
              step="25"
              value={insurance}
              onChange={(e) => setInsurance(Number(e.target.value))}
              className="w-full h-2 bg-[#DDE7E3] rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#3F4D5F] mb-2">
              {t.financialEducation.calculators.budgetCalc.entertainment}: ${entertainment.toLocaleString()}
            </label>
            <input
              type="range"
              min="0"
              max="2000"
              step="50"
              value={entertainment}
              onChange={(e) => setEntertainment(Number(e.target.value))}
              className="w-full h-2 bg-[#DDE7E3] rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#3F4D5F] mb-2">
              {t.financialEducation.calculators.budgetCalc.savings}: ${savings.toLocaleString()}
            </label>
            <input
              type="range"
              min="0"
              max="5000"
              step="50"
              value={savings}
              onChange={(e) => setSavings(Number(e.target.value))}
              className="w-full h-2 bg-[#DDE7E3] rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#3F4D5F] mb-2">
              {t.financialEducation.calculators.budgetCalc.other}: ${other.toLocaleString()}
            </label>
            <input
              type="range"
              min="0"
              max="2000"
              step="50"
              value={other}
              onChange={(e) => setOther(Number(e.target.value))}
              className="w-full h-2 bg-[#DDE7E3] rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#0F766E] to-[#12355B] text-white p-6 rounded-lg">
            <h4 className="text-lg font-bold mb-4">{t.financialEducation.calculators.budgetCalc.summary}</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-white/20">
                <span>{t.financialEducation.calculators.budgetCalc.totalIncome}</span>
                <span className="font-bold">${income.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/20">
                <span>{t.financialEducation.calculators.budgetCalc.totalExpenses}</span>
                <span className="font-bold">${totalExpenses.toLocaleString()}</span>
              </div>
              <div className={`flex justify-between items-center pt-2 ${remaining >= 0 ? 'text-green-300' : 'text-[#F2C66D]'}`}>
                <span className="flex items-center gap-2">
                  {remaining >= 0 ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                  {t.financialEducation.calculators.budgetCalc.remaining}
                </span>
                <span className="font-bold text-xl">${remaining.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F6F8F7] p-6 rounded-lg border-2 border-[#DDE7E3]">
            <h4 className="text-lg font-bold mb-4 text-[#172033]">{t.financialEducation.calculators.budgetCalc.ruleTitle}</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-[#3F4D5F]">{t.financialEducation.calculators.budgetCalc.needs} ({needsPercent}%)</span>
                  <span className="text-sm text-[#5D6B7B]">{t.financialEducation.calculators.budgetCalc.target}: 50%</span>
                </div>
                <div className="w-full bg-[#DDE7E3] rounded-full h-4">
                  <div
                    className={`h-4 rounded-full ${Number(needsPercent) <= 50 ? 'bg-green-500' : 'bg-yellow-500'}`}
                    style={{ width: `${Math.min(Number(needsPercent), 100)}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-[#3F4D5F]">{t.financialEducation.calculators.budgetCalc.wants} ({wantsPercent}%)</span>
                  <span className="text-sm text-[#5D6B7B]">{t.financialEducation.calculators.budgetCalc.target}: 30%</span>
                </div>
                <div className="w-full bg-[#DDE7E3] rounded-full h-4">
                  <div
                    className={`h-4 rounded-full ${Number(wantsPercent) <= 30 ? 'bg-green-500' : 'bg-yellow-500'}`}
                    style={{ width: `${Math.min(Number(wantsPercent), 100)}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-[#3F4D5F]">{t.financialEducation.calculators.budgetCalc.savings} ({savingsPercent}%)</span>
                  <span className="text-sm text-[#5D6B7B]">{t.financialEducation.calculators.budgetCalc.target}: 20%</span>
                </div>
                <div className="w-full bg-[#DDE7E3] rounded-full h-4">
                  <div
                    className={`h-4 rounded-full ${Number(savingsPercent) >= 20 ? 'bg-green-500' : 'bg-[#ECFDF8]0'}`}
                    style={{ width: `${Math.min(Number(savingsPercent), 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#ECFDF8] p-4 rounded-lg border-l-4 border-[#0F766E]">
            <p className="text-sm text-[#3F4D5F]">
              <span className="font-bold">{t.financialEducation.calculators.budgetCalc.savingsRate}:</span> {savingsRate}%
              {Number(savingsRate) >= 20 && ` - ${t.financialEducation.calculators.budgetCalc.greatJob}`}
              {Number(savingsRate) >= 10 && Number(savingsRate) < 20 && ` - ${t.financialEducation.calculators.budgetCalc.goodStart}`}
              {Number(savingsRate) < 10 && ` - ${t.financialEducation.calculators.budgetCalc.tryIncrease}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
