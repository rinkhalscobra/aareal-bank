import { useState } from 'react';
import { Calculator, DollarSign, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function FeeCalculator() {
  const { t } = useLanguage();
  const [accountType, setAccountType] = useState('checking');
  const [monthlyBalance, setMonthlyBalance] = useState('1000');
  const [monthlyTransactions, setMonthlyTransactions] = useState('20');
  const [overdrafts, setOverdrafts] = useState('0');
  const [atmWithdrawals, setAtmWithdrawals] = useState('4');
  const [paperStatements, setPaperStatements] = useState(false);
  const [wireTransfers, setWireTransfers] = useState('0');

  const calculateMonthlyFees = () => {
    const balance = parseFloat(monthlyBalance) || 0;
    const overdraftCount = parseInt(overdrafts) || 0;
    const atmCount = parseInt(atmWithdrawals) || 0;
    const wireCount = parseInt(wireTransfers) || 0;

    let totalFees = 0;
    const breakdown: { item: string; amount: number }[] = [];

    if (accountType === 'checking') {
      if (balance < 2500) {
        totalFees += 15;
        breakdown.push({ item: t.rates.calculator.monthlyMaintenanceFee, amount: 15 });
      }
    }

    if (accountType === 'savings') {
      if (balance < 300) {
        totalFees += 5;
        breakdown.push({ item: t.rates.calculator.monthlyMaintenanceFee, amount: 5 });
      }
    }

    if (overdraftCount > 0) {
      const overdraftFee = overdraftCount * 35;
      totalFees += overdraftFee;
      breakdown.push({ item: `${t.rates.calculator.overdraftFees} (${overdraftCount}x)`, amount: overdraftFee });
    }

    if (atmCount > 4) {
      const excessAtm = atmCount - 4;
      const atmFee = excessAtm * 3.5;
      totalFees += atmFee;
      breakdown.push({ item: `${t.rates.calculator.outOfNetworkATMFees} (${excessAtm}x)`, amount: atmFee });
    }

    if (paperStatements) {
      totalFees += 5;
      breakdown.push({ item: t.rates.calculator.paperStatementFee, amount: 5 });
    }

    if (wireCount > 0) {
      const wireFee = wireCount * 25;
      totalFees += wireFee;
      breakdown.push({ item: `${t.rates.calculator.wireTransferFees} (${wireCount}x)`, amount: wireFee });
    }

    return { totalFees, breakdown };
  };

  const { totalFees, breakdown } = calculateMonthlyFees();
  const annualFees = totalFees * 12;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="bg-white  shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Calculator className="w-8 h-8 text-[#0F766E] mr-3" />
        <h3 className="text-2xl font-bold text-[#172033]">{t.rates.calculator.title}</h3>
      </div>

      <p className="text-[#5D6B7B] mb-8">
        {t.rates.calculator.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-[#172033] mb-2">
              {t.rates.calculator.accountType}
            </label>
            <select
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              className="w-full px-4 py-3 border border-[#C7D3D0]  focus:ring-2 focus:ring-[#0F766E] focus:border-transparent"
            >
              <option value="checking">{t.rates.calculator.checkingAccount}</option>
              <option value="savings">{t.rates.calculator.savingsAccount}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#172033] mb-2">
              {t.rates.calculator.avgMonthlyBalance}
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#A7B1BC]" />
              <input
                type="number"
                value={monthlyBalance}
                onChange={(e) => setMonthlyBalance(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-[#C7D3D0]  focus:ring-2 focus:ring-[#0F766E] focus:border-transparent"
                placeholder="1000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#172033] mb-2">
              {t.rates.calculator.monthlyTransactions}
            </label>
            <input
              type="number"
              value={monthlyTransactions}
              onChange={(e) => setMonthlyTransactions(e.target.value)}
              className="w-full px-4 py-3 border border-[#C7D3D0]  focus:ring-2 focus:ring-[#0F766E] focus:border-transparent"
              placeholder="20"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#172033] mb-2">
              {t.rates.calculator.overdraftsPerMonth}
            </label>
            <input
              type="number"
              value={overdrafts}
              onChange={(e) => setOverdrafts(e.target.value)}
              className="w-full px-4 py-3 border border-[#C7D3D0]  focus:ring-2 focus:ring-[#0F766E] focus:border-transparent"
              placeholder="0"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#172033] mb-2">
              {t.rates.calculator.outOfNetworkATM}
            </label>
            <input
              type="number"
              value={atmWithdrawals}
              onChange={(e) => setAtmWithdrawals(e.target.value)}
              className="w-full px-4 py-3 border border-[#C7D3D0]  focus:ring-2 focus:ring-[#0F766E] focus:border-transparent"
              placeholder="4"
            />
            <p className="text-xs text-[#788696] mt-1">{t.rates.calculator.firstFree}</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#172033] mb-2">
              {t.rates.calculator.wireTransfersPerMonth}
            </label>
            <input
              type="number"
              value={wireTransfers}
              onChange={(e) => setWireTransfers(e.target.value)}
              className="w-full px-4 py-3 border border-[#C7D3D0]  focus:ring-2 focus:ring-[#0F766E] focus:border-transparent"
              placeholder="0"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="paperStatements"
              checked={paperStatements}
              onChange={(e) => setPaperStatements(e.target.checked)}
              className="w-5 h-5 text-[#0F766E] border-[#C7D3D0] focus:ring-[#0F766E]"
            />
            <label htmlFor="paperStatements" className="ml-3 text-sm font-medium text-[#172033]">
              {t.rates.calculator.paperStatements}
            </label>
          </div>
        </div>

        <div>
          <div className="bg-gradient-to-br from-[#0F766E] to-[#12355B] text-white  p-8 mb-6">
            <div className="text-center mb-6">
              <p className="text-sm font-medium mb-2 opacity-90">{t.rates.calculator.estimatedMonthlyFees}</p>
              <p className="text-5xl font-bold">{formatCurrency(totalFees)}</p>
            </div>

            <div className="border-t border-[#C8942D] pt-6">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-5 h-5 mr-2" />
                <p className="text-sm font-medium">{t.rates.calculator.annualProjection}</p>
              </div>
              <p className="text-3xl font-bold text-center">{formatCurrency(annualFees)}</p>
            </div>
          </div>

          {breakdown.length > 0 ? (
            <div className="bg-[#F6F8F7]  p-6">
              <h4 className="font-bold text-[#172033] mb-4">{t.rates.calculator.feeBreakdown}</h4>
              <div className="space-y-3">
                {breakdown.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-[#3F4D5F]">{item.item}</span>
                    <span className="text-sm font-bold text-[#172033]">
                      {formatCurrency(item.amount)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-green-50 border border-green-200  p-6">
              <p className="text-green-800 font-semibold text-center">
                {t.rates.calculator.noFees}
              </p>
            </div>
          )}

          <div className="mt-6 p-4 bg-[#ECFDF8] border border-[#BFE5DB] ">
            <p className="text-sm text-[#12355B]">
              <strong>{t.rates.calculator.tip}:</strong> {t.rates.calculator.tipMessage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
