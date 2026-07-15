import { CreditCard, Info } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

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

interface CardFeeTableProps {
  cards: CardFee[];
  cardType: 'credit' | 'debit';
}

export default function CardFeeTable({ cards, cardType }: CardFeeTableProps) {
  const { t } = useLanguage();

  const formatCurrency = (amount: number) => {
    if (amount === 0) return t.rates.labels.free;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const formatPercentage = (rate: number) => {
    if (rate === 0) return t.rates.feeComparison.na;
    return `${rate.toFixed(2)}%`;
  };

  const filteredCards = cards.filter(card => card.card_type === cardType);

  if (filteredCards.length === 0) return null;

  return (
    <div className="bg-white  shadow-lg p-8 mb-8">
      <div className="flex items-center mb-6">
        <CreditCard className="w-7 h-7 text-[#D00000] mr-3" />
        <h3 className="text-2xl font-bold text-[#000000]">
          {cardType === 'credit' ? t.rates.cardFees.creditCardFees : t.rates.cardFees.debitCardFees}
        </h3>
      </div>

      <div className="space-y-8">
        {filteredCards.map((card) => (
          <div key={card.id} className="border-2 border-[#E5E5E5]  p-6 hover:border-[#D00000] transition-colors">
            <h4 className="text-xl font-bold text-[#000000] mb-6">{card.card_name}</h4>

            {cardType === 'credit' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-[#F5F5F5] ">
                <div>
                  <p className="text-xs text-[#555555] mb-1">{t.rates.cardFees.aprPurchases}</p>
                  <p className="text-lg font-bold text-[#D00000]">{formatPercentage(card.apr_purchases)}</p>
                </div>
                <div>
                  <p className="text-xs text-[#555555] mb-1">{t.rates.cardFees.aprBalanceTransfers}</p>
                  <p className="text-lg font-bold text-[#D00000]">{formatPercentage(card.apr_balance_transfers)}</p>
                </div>
                <div>
                  <p className="text-xs text-[#555555] mb-1">{t.rates.cardFees.aprCashAdvances}</p>
                  <p className="text-lg font-bold text-[#D00000]">{formatPercentage(card.apr_cash_advances)}</p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex justify-between items-center py-3 border-b border-[#E5E5E5]">
                <span className="text-sm font-medium text-[#333333]">{t.rates.cardFees.annualFee}</span>
                <span className={`font-bold ${card.annual_fee === 0 ? 'text-[#D00000]' : 'text-[#000000]'}`}>
                  {formatCurrency(card.annual_fee)}
                </span>
              </div>

              {cardType === 'credit' && (
                <>
                  <div className="flex justify-between items-center py-3 border-b border-[#E5E5E5]">
                    <span className="text-sm font-medium text-[#333333]">{t.rates.cardFees.foreignTransactionFee}</span>
                    <span className="font-bold text-[#000000]">{formatPercentage(card.foreign_transaction_fee)}</span>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-[#E5E5E5]">
                    <span className="text-sm font-medium text-[#333333]">{t.rates.cardFees.balanceTransferFee}</span>
                    <span className="font-bold text-[#000000]">{formatPercentage(card.balance_transfer_fee)}</span>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-[#E5E5E5]">
                    <span className="text-sm font-medium text-[#333333]">{t.rates.cardFees.cashAdvanceFee}</span>
                    <span className="font-bold text-[#000000]">{formatPercentage(card.cash_advance_fee)}</span>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-[#E5E5E5]">
                    <span className="text-sm font-medium text-[#333333]">{t.rates.cardFees.latePaymentFee}</span>
                    <span className="font-bold text-[#000000]">{formatCurrency(card.late_payment_fee)}</span>
                  </div>

                  {card.over_limit_fee > 0 && (
                    <div className="flex justify-between items-center py-3 border-b border-[#E5E5E5]">
                      <span className="text-sm font-medium text-[#333333]">{t.rates.cardFees.overLimitFee}</span>
                      <span className="font-bold text-[#000000]">{formatCurrency(card.over_limit_fee)}</span>
                    </div>
                  )}
                </>
              )}

              <div className="flex justify-between items-center py-3 border-b border-[#E5E5E5]">
                <span className="text-sm font-medium text-[#333333]">{t.rates.cardFees.replacementCard}</span>
                <span className={`font-bold ${card.replacement_card_fee === 0 ? 'text-[#D00000]' : 'text-[#000000]'}`}>
                  {formatCurrency(card.replacement_card_fee)}
                </span>
              </div>
            </div>

            {cardType === 'credit' && (
              <div className="mt-4 p-4 bg-[#FFF1F1] border border-[#F5C2C7] ">
                <div className="flex items-start">
                  <Info className="w-5 h-5 text-[#D00000] mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-[#000000]">
                    {t.rates.cardFees.variableAprDisclaimer}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
