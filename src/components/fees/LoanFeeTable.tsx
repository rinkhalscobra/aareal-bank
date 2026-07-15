import { Home, Car, Wallet } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface LoanFee {
  id: string;
  loan_type: string;
  loan_name: string;
  origination_fee: number;
  origination_fee_percentage: number;
  application_fee: number;
  appraisal_fee: number;
  credit_report_fee: number;
  closing_costs: number;
  prepayment_penalty: string | null;
  late_payment_fee: number;
  interest_rate: number;
}

interface LoanFeeTableProps {
  loans: LoanFee[];
  loanType: string;
}

export default function LoanFeeTable({ loans, loanType }: LoanFeeTableProps) {
  const { t } = useLanguage();

  const formatCurrency = (amount: number) => {
    if (amount === 0) return t.rates.labels.none;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const formatPercentage = (rate: number) => {
    if (rate === 0) return t.rates.labels.none;
    return `${rate.toFixed(2)}%`;
  };

  const getIcon = () => {
    if (loanType === 'mortgage' || loanType === 'home_equity') {
      return <Home className="w-7 h-7 text-[#D00000] mr-3" />;
    }
    if (loanType === 'auto') {
      return <Car className="w-7 h-7 text-[#D00000] mr-3" />;
    }
    return <Wallet className="w-7 h-7 text-[#D00000] mr-3" />;
  };

  const getTitle = () => {
    if (loanType === 'mortgage') return t.rates.loanFees.mortgageFees;
    if (loanType === 'home_equity') return t.rates.loanFees.homeEquityFees;
    if (loanType === 'auto') return t.rates.loanFees.autoFees;
    if (loanType === 'personal') return t.rates.loanFees.personalFees;
    return t.rates.loanFees.mortgageFees;
  };

  const filteredLoans = loans.filter(loan => loan.loan_type === loanType);

  if (filteredLoans.length === 0) return null;

  return (
    <div className="bg-white  shadow-lg p-8 mb-8">
      <div className="flex items-center mb-6">
        {getIcon()}
        <h3 className="text-2xl font-bold text-[#000000]">{getTitle()}</h3>
      </div>

      <div className="space-y-8">
        {filteredLoans.map((loan) => (
          <div key={loan.id} className="border-2 border-[#E5E5E5]  p-6 hover:border-[#D00000] transition-colors">
            <div className="flex justify-between items-start mb-6">
              <h4 className="text-xl font-bold text-[#000000]">{loan.loan_name}</h4>
              <div className="text-right">
                <p className="text-xs text-[#555555] mb-1">{t.rates.loanFees.interestRate}</p>
                <p className="text-2xl font-bold text-[#D00000]">{formatPercentage(loan.interest_rate)}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {loan.origination_fee > 0 && (
                <div className="flex justify-between items-center py-3 border-b border-[#E5E5E5]">
                  <span className="text-sm font-medium text-[#333333]">{t.rates.loanFees.originationFee}</span>
                  <span className="font-bold text-[#000000]">{formatCurrency(loan.origination_fee)}</span>
                </div>
              )}

              {loan.origination_fee_percentage > 0 && (
                <div className="flex justify-between items-center py-3 border-b border-[#E5E5E5]">
                  <span className="text-sm font-medium text-[#333333]">{t.rates.loanFees.originationFee}</span>
                  <span className="font-bold text-[#000000]">{formatPercentage(loan.origination_fee_percentage)} {t.rates.loanFees.ofLoan}</span>
                </div>
              )}

              {loan.application_fee > 0 && (
                <div className="flex justify-between items-center py-3 border-b border-[#E5E5E5]">
                  <span className="text-sm font-medium text-[#333333]">{t.rates.loanFees.applicationFee}</span>
                  <span className="font-bold text-[#000000]">{formatCurrency(loan.application_fee)}</span>
                </div>
              )}

              {loan.appraisal_fee > 0 && (
                <div className="flex justify-between items-center py-3 border-b border-[#E5E5E5]">
                  <span className="text-sm font-medium text-[#333333]">{t.rates.loanFees.appraisalFee}</span>
                  <span className="font-bold text-[#000000]">{formatCurrency(loan.appraisal_fee)}</span>
                </div>
              )}

              {loan.credit_report_fee > 0 && (
                <div className="flex justify-between items-center py-3 border-b border-[#E5E5E5]">
                  <span className="text-sm font-medium text-[#333333]">{t.rates.loanFees.creditReportFee}</span>
                  <span className="font-bold text-[#000000]">{formatCurrency(loan.credit_report_fee)}</span>
                </div>
              )}

              {loan.closing_costs > 0 && (
                <div className="flex justify-between items-center py-3 border-b border-[#E5E5E5]">
                  <span className="text-sm font-medium text-[#333333]">{t.rates.loanFees.estimatedClosingCosts}</span>
                  <span className="font-bold text-[#000000]">{formatCurrency(loan.closing_costs)}</span>
                </div>
              )}

              <div className="flex justify-between items-center py-3 border-b border-[#E5E5E5]">
                <span className="text-sm font-medium text-[#333333]">{t.rates.loanFees.latePaymentFee}</span>
                <span className="font-bold text-[#000000]">{formatCurrency(loan.late_payment_fee)}</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-[#E5E5E5]">
                <span className="text-sm font-medium text-[#333333]">{t.rates.loanFees.prepaymentPenalty}</span>
                <span className={`font-bold ${loan.prepayment_penalty === 'None' ? 'text-[#D00000]' : 'text-[#000000]'}`}>
                  {loan.prepayment_penalty || t.rates.labels.none}
                </span>
              </div>
            </div>

            {(loanType === 'mortgage' || loanType === 'home_equity') && (
              <div className="mt-4 p-4 bg-[#FFF1F1] border border-[#F5C2C7] ">
                <p className="text-sm text-[#000000]">
                  <strong>{t.rates.loanFees.note}:</strong> {t.rates.loanFees.closingCostsNote}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
