import { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface AccountFee {
  id: string;
  account_type: string;
  account_name: string;
  monthly_fee: number;
  minimum_balance_to_waive: number | null;
  minimum_opening_deposit: number;
  overdraft_fee: number;
  nsf_fee: number;
  excess_withdrawal_fee: number;
  paper_statement_fee: number;
  interest_rate: number;
}

interface FeeComparisonProps {
  accounts: AccountFee[];
  accountType: string;
}

export default function FeeComparison({ accounts, accountType }: FeeComparisonProps) {
  const { t } = useLanguage();
  const [selectedAccounts, setSelectedAccounts] = useState<string[]>([]);

  const toggleAccount = (accountId: string) => {
    if (selectedAccounts.includes(accountId)) {
      setSelectedAccounts(selectedAccounts.filter(id => id !== accountId));
    } else if (selectedAccounts.length < 3) {
      setSelectedAccounts([...selectedAccounts, accountId]);
    }
  };

  const displayAccounts = selectedAccounts.length > 0
    ? accounts.filter(acc => selectedAccounts.includes(acc.id))
    : accounts;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const formatPercentage = (rate: number) => {
    return `${rate.toFixed(2)}%`;
  };

  return (
    <div className="bg-white  shadow-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-[#172033]">
          {accountType.charAt(0).toUpperCase() + accountType.slice(1)} {t.rates.feeComparison.accountComparison}
        </h3>
        {selectedAccounts.length > 0 && (
          <button
            onClick={() => setSelectedAccounts([])}
            className="text-sm text-[#0F766E] hover:text-[#0B5F59] font-medium"
          >
            {t.rates.feeComparison.clearSelection}
          </button>
        )}
      </div>

      {accounts.length > 3 && (
        <div className="mb-6 p-4 bg-[#ECFDF8] border border-[#BFE5DB] ">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-[#0F766E] mr-2 mt-0.5" />
            <p className="text-sm text-[#12355B]">
              {t.rates.feeComparison.selectUpTo} {selectedAccounts.length}/3 {t.rates.feeComparison.selected}.
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 mb-6">
        {accounts.map((account) => (
          <button
            key={account.id}
            onClick={() => toggleAccount(account.id)}
            className={`text-left p-3  border-2 transition-all ${
              selectedAccounts.includes(account.id)
                ? 'border-[#0F766E] bg-[#ECFDF8]'
                : 'border-[#DDE7E3] hover:border-[#C7D3D0]'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#172033]">{account.account_name}</span>
              {selectedAccounts.includes(account.id) && (
                <Check className="w-5 h-5 text-[#0F766E]" />
              )}
            </div>
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-[#C7D3D0]">
              <th className="text-left py-4 px-4 font-bold text-[#172033] sticky left-0 bg-white">
                {t.rates.feeComparison.feature}
              </th>
              {displayAccounts.map((account) => (
                <th key={account.id} className="text-center py-4 px-4 font-bold text-[#172033] min-w-[180px]">
                  {account.account_name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#DDE7E3] hover:bg-[#F6F8F7]">
              <td className="py-4 px-4 font-semibold text-[#172033] sticky left-0 bg-white">
                {t.rates.feeComparison.monthlyFee}
              </td>
              {displayAccounts.map((account) => (
                <td key={account.id} className="py-4 px-4 text-center">
                  <span className={account.monthly_fee === 0 ? 'text-green-600 font-bold' : 'text-[#172033]'}>
                    {account.monthly_fee === 0 ? t.rates.labels.free : formatCurrency(account.monthly_fee)}
                  </span>
                </td>
              ))}
            </tr>

            <tr className="border-b border-[#DDE7E3] hover:bg-[#F6F8F7]">
              <td className="py-4 px-4 font-semibold text-[#172033] sticky left-0 bg-white">
                {t.rates.feeComparison.feeWaiver}
              </td>
              {displayAccounts.map((account) => (
                <td key={account.id} className="py-4 px-4 text-center text-sm">
                  {account.minimum_balance_to_waive ? (
                    <span className="text-[#3F4D5F]">
                      {formatCurrency(account.minimum_balance_to_waive)} {t.rates.feeComparison.minBalance}
                    </span>
                  ) : (
                    <span className="text-[#788696]">{t.rates.feeComparison.na}</span>
                  )}
                </td>
              ))}
            </tr>

            <tr className="border-b border-[#DDE7E3] hover:bg-[#F6F8F7]">
              <td className="py-4 px-4 font-semibold text-[#172033] sticky left-0 bg-white">
                {t.rates.feeComparison.minOpeningDeposit}
              </td>
              {displayAccounts.map((account) => (
                <td key={account.id} className="py-4 px-4 text-center text-[#3F4D5F]">
                  {formatCurrency(account.minimum_opening_deposit)}
                </td>
              ))}
            </tr>

            <tr className="border-b border-[#DDE7E3] hover:bg-[#F6F8F7]">
              <td className="py-4 px-4 font-semibold text-[#172033] sticky left-0 bg-white">
                {t.rates.feeComparison.interestRate}
              </td>
              {displayAccounts.map((account) => (
                <td key={account.id} className="py-4 px-4 text-center">
                  <span className="text-green-600 font-bold">
                    {formatPercentage(account.interest_rate)}
                  </span>
                </td>
              ))}
            </tr>

            {accountType === 'checking' && (
              <>
                <tr className="border-b border-[#DDE7E3] hover:bg-[#F6F8F7]">
                  <td className="py-4 px-4 font-semibold text-[#172033] sticky left-0 bg-white">
                    {t.rates.feeComparison.overdraftFee}
                  </td>
                  {displayAccounts.map((account) => (
                    <td key={account.id} className="py-4 px-4 text-center">
                      {account.overdraft_fee === 0 ? (
                        <div className="flex justify-center">
                          <Check className="w-5 h-5 text-green-600" />
                        </div>
                      ) : (
                        <span className="text-[#0F766E]">{formatCurrency(account.overdraft_fee)}</span>
                      )}
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-[#DDE7E3] hover:bg-[#F6F8F7]">
                  <td className="py-4 px-4 font-semibold text-[#172033] sticky left-0 bg-white">
                    {t.rates.feeComparison.nsfFee}
                  </td>
                  {displayAccounts.map((account) => (
                    <td key={account.id} className="py-4 px-4 text-center">
                      {account.nsf_fee === 0 ? (
                        <div className="flex justify-center">
                          <Check className="w-5 h-5 text-green-600" />
                        </div>
                      ) : (
                        <span className="text-[#0F766E]">{formatCurrency(account.nsf_fee)}</span>
                      )}
                    </td>
                  ))}
                </tr>
              </>
            )}

            <tr className="border-b border-[#DDE7E3] hover:bg-[#F6F8F7]">
              <td className="py-4 px-4 font-semibold text-[#172033] sticky left-0 bg-white">
                {t.rates.feeComparison.paperStatementFee}
              </td>
              {displayAccounts.map((account) => (
                <td key={account.id} className="py-4 px-4 text-center">
                  {account.paper_statement_fee === 0 ? (
                    <div className="flex justify-center">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                  ) : (
                    <span className="text-[#3F4D5F]">{formatCurrency(account.paper_statement_fee)}{t.rates.feeComparison.perMonth}</span>
                  )}
                </td>
              ))}
            </tr>

            {accountType === 'savings' && (
              <tr className="border-b border-[#DDE7E3] hover:bg-[#F6F8F7]">
                <td className="py-4 px-4 font-semibold text-[#172033] sticky left-0 bg-white">
                  {t.rates.feeComparison.excessWithdrawalFee}
                </td>
                {displayAccounts.map((account) => (
                  <td key={account.id} className="py-4 px-4 text-center">
                    {account.excess_withdrawal_fee === 0 ? (
                      <div className="flex justify-center">
                        <Check className="w-5 h-5 text-green-600" />
                      </div>
                    ) : (
                      <span className="text-[#3F4D5F]">{formatCurrency(account.excess_withdrawal_fee)}</span>
                    )}
                  </td>
                ))}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
