import { useLanguage } from '../context/LanguageContext';
import { TrendingUp, TrendingDown, Minus, FileText, Download, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import FeeComparison from '../components/fees/FeeComparison';
import FeeCalculator from '../components/fees/FeeCalculator';
import ServiceFeeTable from '../components/fees/ServiceFeeTable';
import CardFeeTable from '../components/fees/CardFeeTable';
import LoanFeeTable from '../components/fees/LoanFeeTable';
import { generateFeeSchedulePDF } from '../utils/pdfGenerator';
import { translations } from '../i18n/translations';

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

interface ServiceFee {
  id: string;
  service_name: string;
  service_category: string;
  fee_amount: number;
  fee_description: string;
  waiver_conditions: string | null;
}

interface CardFee {
  id: string;
  card_type: string;
  card_name: string;
  annual_fee: number;
  foreign_transaction_fee: number;
  balance_transfer_fee: number;
  cash_advance_fee: number;
  late_payment_fee: number;
  over_limit_fee: number;
  replacement_card_fee: number;
  apr_purchases: number;
  apr_balance_transfers: number;
  apr_cash_advances: number;
}

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

interface ATMFee {
  id: string;
  fee_type: string;
  in_network_fee: number;
  out_of_network_fee: number;
  international_fee: number;
  description: string;
}

interface InvestmentFee {
  id: string;
  service_name: string;
  service_type: string;
  management_fee_percentage: number;
  minimum_investment: number;
  transaction_fee: number;
  advisory_fee: number;
  description: string;
}

export default function Rates() {
  const { t } = useLanguage();

  const APPLY_URL = 'https://account.aareal-bank-ag.com/';

  const [activeTab, setActiveTab] = useState<
    'rates' | 'account-fees' | 'service-fees' | 'card-fees' | 'loan-fees' | 'calculator'
  >('rates');

  const [accountFees, setAccountFees] = useState<AccountFee[]>([]);
  const [serviceFees, setServiceFees] = useState<ServiceFee[]>([]);
  const [cardFees, setCardFees] = useState<CardFee[]>([]);
  const [loanFees, setLoanFees] = useState<LoanFee[]>([]);
  const [atmFees, setAtmFees] = useState<ATMFee[]>([]);
  const [investmentFees, setInvestmentFees] = useState<InvestmentFee[]>([]);

  useEffect(() => {
    fetchAllFees();
  }, []);

  const fetchAllFees = async () => {
    const { data: accounts } = await supabase.from('account_fees').select('*').order('account_type');
    const { data: services } = await supabase.from('service_fees').select('*').order('service_category');
    const { data: cards } = await supabase.from('card_fees').select('*').order('card_type');
    const { data: loans } = await supabase.from('loan_fees').select('*').order('loan_type');
    const { data: atm } = await supabase.from('atm_fees').select('*');
    const { data: investments } = await supabase.from('investment_fees').select('*');

    if (accounts) setAccountFees(accounts);
    if (services) setServiceFees(services);
    if (cards) setCardFees(cards);
    if (loans) setLoanFees(loans);
    if (atm) setAtmFees(atm);
    if (investments) setInvestmentFees(investments);
  };

  const savingsRates = [
    { product: t.rates.savings.savingsAccount, apy: '0.50%', minBalance: '$0', trend: 'up' },
    { product: t.rates.savings.moneyMarket, apy: '1.25%', minBalance: '$2,500', trend: 'up' },
    { product: t.rates.savings.cd6, apy: '2.50%', minBalance: '$1,000', trend: 'same' },
    { product: t.rates.savings.cd1, apy: '3.00%', minBalance: '$1,000', trend: 'up' },
    { product: t.rates.savings.cd5, apy: '4.25%', minBalance: '$1,000', trend: 'up' }
  ];

  const loanRates = [
    { product: t.rates.loan.mortgage30, apr: '5.99%', details: t.rates.loan.asLowAs, trend: 'down' },
    { product: t.rates.loan.mortgage15, apr: '5.25%', details: t.rates.loan.asLowAs, trend: 'down' },
    { product: t.rates.loan.homeEquity, apr: '7.25%', details: t.rates.loan.asLowAs, trend: 'same' },
    { product: t.rates.loan.autoNew, apr: '4.49%', details: t.rates.loan.asLowAs, trend: 'down' },
    { product: t.rates.loan.autoUsed, apr: '5.99%', details: t.rates.loan.asLowAs, trend: 'same' },
    { product: t.rates.loan.personal, apr: '8.99%', details: t.rates.loan.asLowAs, trend: 'up' }
  ];

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') return <TrendingUp className="w-5 h-5 text-[#D00000]" />;
    if (trend === 'down') return <TrendingDown className="w-5 h-5 text-[#D00000]" />;
    return <Minus className="w-5 h-5 text-[#CCCCCC]" />;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const handleDownloadPDF = () => {
    generateFeeSchedulePDF({
      accountFees,
      serviceFees,
      cardFees,
      loanFees,
      atmFees,
      investmentFees,
      translations: translations.en
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="bg-gradient-to-br from-[#000000] via-[#000000] to-[#000000] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <h1 className="text-5xl font-bold">{t.rates.header.title}</h1>
          </div>

          <p className="text-xl text-[#E5E5E5] max-w-3xl mb-4">{t.rates.header.description}</p>

          <div className="flex items-center space-x-6 mt-8">
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              <span className="text-sm">{t.rates.header.noHiddenFees}</span>
            </div>

            <div className="flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              <span className="text-sm">{t.rates.header.fullDisclosure}</span>
            </div>

            <div className="flex items-center">
              <Download className="w-5 h-5 mr-2" />
              <button
                onClick={handleDownloadPDF}
                className="text-sm hover:underline transition-all hover:text-[#F5C2C7]"
              >
                {t.rates.header.downloadPDF}
              </button>
            </div>
          </div>

          <p className="text-sm text-[#CCCCCC] mt-4">
            {t.rates.header.effectiveDate} {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-lg mb-8 sticky top-0 z-10">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab('rates')}
              className={`px-6 py-4 font-semibold transition-colors border-b-4 whitespace-nowrap ${
                activeTab === 'rates'
                  ? 'text-[#D00000] border-[#D00000] bg-[#FFF1F1]'
                  : 'text-[#555555] border-transparent hover:text-[#000000] hover:bg-[#F5F5F5]'
              }`}
            >
              {t.rates.tabs.interestRates}
            </button>

            <button
              onClick={() => setActiveTab('account-fees')}
              className={`px-6 py-4 font-semibold transition-colors border-b-4 whitespace-nowrap ${
                activeTab === 'account-fees'
                  ? 'text-[#D00000] border-[#D00000] bg-[#FFF1F1]'
                  : 'text-[#555555] border-transparent hover:text-[#000000] hover:bg-[#F5F5F5]'
              }`}
            >
              {t.rates.tabs.accountFees}
            </button>

            <button
              onClick={() => setActiveTab('service-fees')}
              className={`px-6 py-4 font-semibold transition-colors border-b-4 whitespace-nowrap ${
                activeTab === 'service-fees'
                  ? 'text-[#D00000] border-[#D00000] bg-[#FFF1F1]'
                  : 'text-[#555555] border-transparent hover:text-[#000000] hover:bg-[#F5F5F5]'
              }`}
            >
              {t.rates.tabs.serviceFees}
            </button>

            <button
              onClick={() => setActiveTab('card-fees')}
              className={`px-6 py-4 font-semibold transition-colors border-b-4 whitespace-nowrap ${
                activeTab === 'card-fees'
                  ? 'text-[#D00000] border-[#D00000] bg-[#FFF1F1]'
                  : 'text-[#555555] border-transparent hover:text-[#000000] hover:bg-[#F5F5F5]'
              }`}
            >
              {t.rates.tabs.cardFees}
            </button>

            <button
              onClick={() => setActiveTab('loan-fees')}
              className={`px-6 py-4 font-semibold transition-colors border-b-4 whitespace-nowrap ${
                activeTab === 'loan-fees'
                  ? 'text-[#D00000] border-[#D00000] bg-[#FFF1F1]'
                  : 'text-[#555555] border-transparent hover:text-[#000000] hover:bg-[#F5F5F5]'
              }`}
            >
              {t.rates.tabs.loanFees}
            </button>

            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-6 py-4 font-semibold transition-colors border-b-4 whitespace-nowrap ${
                activeTab === 'calculator'
                  ? 'text-[#D00000] border-[#D00000] bg-[#FFF1F1]'
                  : 'text-[#555555] border-transparent hover:text-[#000000] hover:bg-[#F5F5F5]'
              }`}
            >
              {t.rates.tabs.feeCalculator}
            </button>
          </div>
        </div>

        {activeTab === 'rates' && (
          <div className="space-y-8">
            <div className="bg-white p-12 shadow-lg">
              <h2 className="text-3xl font-bold mb-8 text-[#000000]">{t.rates.savings.title}</h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-[#CCCCCC]">
                      <th className="text-left py-4 px-6 font-bold text-[#000000]">{t.rates.savings.product}</th>
                      <th className="text-center py-4 px-6 font-bold text-[#000000]">{t.rates.savings.apy}</th>
                      <th className="text-center py-4 px-6 font-bold text-[#000000]">{t.rates.savings.minBalance}</th>
                      <th className="text-center py-4 px-6 font-bold text-[#000000]">{t.rates.savings.trend}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {savingsRates.map((rate, index) => (
                      <tr key={index} className="border-b border-[#E5E5E5] hover:bg-[#F5F5F5]">
                        <td className="py-4 px-6 font-semibold text-[#000000]">{rate.product}</td>
                        <td className="py-4 px-6 text-center text-[#D00000] font-bold text-lg">{rate.apy}</td>
                        <td className="py-4 px-6 text-center text-[#333333]">{rate.minBalance}</td>
                        <td className="py-4 px-6 text-center flex justify-center">{getTrendIcon(rate.trend)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ✅ changed to external link */}
              <div className="mt-8 flex justify-center">
                <a
                  href={APPLY_URL}
                  className="bg-[#D00000] hover:bg-[#A00000] text-white font-bold py-3 px-8 transition-all text-center"
                >
                  {t.rates.savings.openAccount}
                </a>
              </div>
            </div>

            <div className="bg-white p-12 shadow-lg">
              <h2 className="text-3xl font-bold mb-8 text-[#000000]">{t.rates.loan.title}</h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-[#CCCCCC]">
                      <th className="text-left py-4 px-6 font-bold text-[#000000]">{t.rates.loan.product}</th>
                      <th className="text-center py-4 px-6 font-bold text-[#000000]">{t.rates.loan.apr}</th>
                      <th className="text-center py-4 px-6 font-bold text-[#000000]">{t.rates.loan.details}</th>
                      <th className="text-center py-4 px-6 font-bold text-[#000000]">{t.rates.loan.trend}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loanRates.map((rate, index) => (
                      <tr key={index} className="border-b border-[#E5E5E5] hover:bg-[#F5F5F5]">
                        <td className="py-4 px-6 font-semibold text-[#000000]">{rate.product}</td>
                        <td className="py-4 px-6 text-center text-[#D00000] font-bold text-lg">{rate.apr}</td>
                        <td className="py-4 px-6 text-center text-[#333333]">{rate.details}</td>
                        <td className="py-4 px-6 text-center flex justify-center">{getTrendIcon(rate.trend)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ✅ changed to external link */}
              <div className="mt-8 flex justify-center">
                <a
                  href={APPLY_URL}
                  className="bg-[#D00000] hover:bg-[#A00000] text-white font-bold py-3 px-8 transition-all text-center"
                >
                  {t.rates.loan.apply}
                </a>
              </div>
            </div>

            <div className="bg-[#FFFFFF] p-8 border-l-4 border-[#D00000]">
              <h3 className="text-xl font-bold mb-4 text-[#000000]">{t.rates.disclaimer.title}</h3>
              <ul className="space-y-2 text-[#333333]">
                <li>• {t.rates.disclaimer.apy}</li>
                <li>• {t.rates.disclaimer.fees}</li>
                <li>• {t.rates.disclaimer.penalty}</li>
                <li>• {t.rates.disclaimer.credit}</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'account-fees' && (
          <div className="space-y-8">
            <FeeComparison accounts={accountFees.filter(acc => acc.account_type === 'checking')} accountType="checking" />
            <FeeComparison accounts={accountFees.filter(acc => acc.account_type === 'savings')} accountType="savings" />
            <FeeComparison accounts={accountFees.filter(acc => acc.account_type === 'money_market')} accountType="money market" />

            <div className="bg-white shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#000000] mb-6">{t.rates.cd.title}</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-[#CCCCCC]">
                      <th className="text-left py-4 px-4 font-bold text-[#000000]">{t.rates.cd.term}</th>
                      <th className="text-center py-4 px-4 font-bold text-[#000000]">{t.rates.savings.apy}</th>
                      <th className="text-center py-4 px-4 font-bold text-[#000000]">{t.rates.cd.minDeposit}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {accountFees.filter(acc => acc.account_type === 'cd').map((cd) => (
                      <tr key={cd.id} className="border-b border-[#E5E5E5] hover:bg-[#F5F5F5]">
                        <td className="py-4 px-4 font-semibold text-[#000000]">{cd.account_name}</td>
                        <td className="py-4 px-4 text-center text-[#D00000] font-bold text-lg">
                          {cd.interest_rate.toFixed(2)}%
                        </td>
                        <td className="py-4 px-4 text-center text-[#333333]">
                          {formatCurrency(cd.minimum_opening_deposit)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#000000] mb-6">{t.rates.atm.title}</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-[#CCCCCC]">
                      <th className="text-left py-4 px-4 font-bold text-[#000000]">{t.rates.atm.transactionType}</th>
                      <th className="text-center py-4 px-4 font-bold text-[#000000]">{t.rates.atm.inNetwork}</th>
                      <th className="text-center py-4 px-4 font-bold text-[#000000]">{t.rates.atm.outOfNetwork}</th>
                      <th className="text-center py-4 px-4 font-bold text-[#000000]">{t.rates.atm.international}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {atmFees.map((fee) => (
                      <tr key={fee.id} className="border-b border-[#E5E5E5] hover:bg-[#F5F5F5]">
                        <td className="py-4 px-4 font-semibold text-[#000000]">{fee.fee_type}</td>
                        <td className="py-4 px-4 text-center text-[#D00000] font-bold">
                          {fee.in_network_fee === 0 ? t.rates.labels.free : formatCurrency(fee.in_network_fee)}
                        </td>
                        <td className="py-4 px-4 text-center text-[#000000] font-bold">
                          {formatCurrency(fee.out_of_network_fee)}
                        </td>
                        <td className="py-4 px-4 text-center text-[#000000] font-bold">
                          {formatCurrency(fee.international_fee)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#000000] mb-6">{t.rates.investment.title}</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-[#CCCCCC]">
                      <th className="text-left py-4 px-4 font-bold text-[#000000]">{t.rates.investment.service}</th>
                      <th className="text-center py-4 px-4 font-bold text-[#000000]">{t.rates.investment.managementFee}</th>
                      <th className="text-center py-4 px-4 font-bold text-[#000000]">{t.rates.investment.minInvestment}</th>
                      <th className="text-left py-4 px-4 font-bold text-[#000000]">{t.rates.investment.description}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {investmentFees.map((fee) => (
                      <tr key={fee.id} className="border-b border-[#E5E5E5] hover:bg-[#F5F5F5]">
                        <td className="py-4 px-4 font-semibold text-[#000000]">{fee.service_name}</td>
                        <td className="py-4 px-4 text-center text-[#000000]">
                          {fee.management_fee_percentage > 0
                            ? `${fee.management_fee_percentage.toFixed(2)}% ${t.rates.labels.annually}`
                            : fee.transaction_fee > 0
                              ? `${formatCurrency(fee.transaction_fee)} ${t.rates.labels.perTrade}`
                              : fee.advisory_fee > 0
                                ? `${formatCurrency(fee.advisory_fee)} ${t.rates.labels.perHour}`
                                : t.rates.labels.varies
                          }
                        </td>
                        <td className="py-4 px-4 text-center text-[#333333]">
                          {fee.minimum_investment > 0 ? formatCurrency(fee.minimum_investment) : t.rates.labels.none}
                        </td>
                        <td className="py-4 px-4 text-sm text-[#333333]">{fee.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'service-fees' && (
          <div className="space-y-8">
            <ServiceFeeTable fees={serviceFees} category="transfers" title="Wire Transfer Fees" />
            <ServiceFeeTable fees={serviceFees} category="checks" title="Check & Money Order Fees" />
            <ServiceFeeTable fees={serviceFees} category="deposits" title="Deposit Fees" />
            <ServiceFeeTable fees={serviceFees} category="statements" title="Statement & Research Fees" />
            <ServiceFeeTable fees={serviceFees} category="legal" title="Legal & Processing Fees" />
            <ServiceFeeTable fees={serviceFees} category="closures" title="Account Closure Fees" />
            <ServiceFeeTable fees={serviceFees} category="collections" title="Collections Fees" />
            <ServiceFeeTable fees={serviceFees} category="cards" title="Card Replacement Fees" />
          </div>
        )}

        {activeTab === 'card-fees' && (
          <div className="space-y-8">
            <CardFeeTable cards={cardFees} cardType="credit" />
            <CardFeeTable cards={cardFees} cardType="debit" />
          </div>
        )}

        {activeTab === 'loan-fees' && (
          <div className="space-y-8">
            <LoanFeeTable loans={loanFees} loanType="mortgage" />
            <LoanFeeTable loans={loanFees} loanType="home_equity" />
            <LoanFeeTable loans={loanFees} loanType="auto" />
            <LoanFeeTable loans={loanFees} loanType="personal" />
          </div>
        )}

        {activeTab === 'calculator' && (
          <div className="space-y-8">
            <FeeCalculator />
          </div>
        )}

        <div className="bg-gradient-to-r from-[#D00000] to-[#000000] text-white shadow-xl p-8 mt-16">
          <div className="flex items-center mb-6">
            <h3 className="text-2xl font-bold">{t.rates.commitment.title}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-2">{t.rates.commitment.noHidden.title}</h4>
              <p className="text-[#FFE5E5] text-sm">{t.rates.commitment.noHidden.description}</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">{t.rates.commitment.waivers.title}</h4>
              <p className="text-[#FFE5E5] text-sm">{t.rates.commitment.waivers.description}</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">{t.rates.commitment.current.title}</h4>
              <p className="text-[#FFE5E5] text-sm">{t.rates.commitment.current.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}