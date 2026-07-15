import { Info } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface ServiceFee {
  id: string;
  service_name: string;
  service_category: string;
  fee_amount: number;
  fee_description: string;
  waiver_conditions: string | null;
}

interface ServiceFeeTableProps {
  fees: ServiceFee[];
  category: string;
  title: string;
}

export default function ServiceFeeTable({ fees, category, title }: ServiceFeeTableProps) {
  const { t } = useLanguage();
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const categoryFees = fees.filter(fee => fee.service_category === category);

  if (categoryFees.length === 0) return null;

  return (
    <div className="bg-white  shadow-lg p-8 mb-8">
      <h3 className="text-2xl font-bold text-[#000000] mb-6">{title}</h3>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-[#CCCCCC]">
              <th className="text-left py-4 px-4 font-bold text-[#000000]">{t.rates.serviceFees.service}</th>
              <th className="text-center py-4 px-4 font-bold text-[#000000]">{t.rates.serviceFees.fee}</th>
              <th className="text-left py-4 px-4 font-bold text-[#000000]">{t.rates.serviceFees.description}</th>
              <th className="text-left py-4 px-4 font-bold text-[#000000]">{t.rates.serviceFees.feeWaiver}</th>
            </tr>
          </thead>
          <tbody>
            {categoryFees.map((fee) => (
              <tr key={fee.id} className="border-b border-[#E5E5E5] hover:bg-[#F5F5F5]">
                <td className="py-4 px-4 font-semibold text-[#000000]">
                  {fee.service_name}
                </td>
                <td className="py-4 px-4 text-center">
                  <span className="text-[#D00000] font-bold text-lg">
                    {formatCurrency(fee.fee_amount)}
                  </span>
                </td>
                <td className="py-4 px-4 text-[#333333] text-sm">
                  {fee.fee_description}
                </td>
                <td className="py-4 px-4 text-sm">
                  {fee.waiver_conditions ? (
                    <div className="flex items-start">
                      <Info className="w-4 h-4 text-[#D00000] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-[#000000]">{fee.waiver_conditions}</span>
                    </div>
                  ) : (
                    <span className="text-[#777777]">{t.rates.serviceFees.noWaiverAvailable}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
