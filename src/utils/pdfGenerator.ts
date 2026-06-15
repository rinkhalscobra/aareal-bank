import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

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

interface FeeScheduleData {
  accountFees: AccountFee[];
  serviceFees: ServiceFee[];
  cardFees: CardFee[];
  loanFees: LoanFee[];
  atmFees: ATMFee[];
  investmentFees: InvestmentFee[];
  translations: any;
}

const formatCurrency = (amount: number, free: string): string => {
  if (amount === 0) return free;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount);
};

export const generateFeeSchedulePDF = (data: FeeScheduleData) => {
  const t = data.translations;
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  let yPosition = 20;

  const translateDBField = (field: string, type: 'atmFeeTypes' | 'serviceCategories' | 'loanTypes'): string => {
    if (t.rates.dbTranslations && t.rates.dbTranslations[type] && t.rates.dbTranslations[type][field]) {
      return t.rates.dbTranslations[type][field];
    }
    return field;
  };

  doc.setFillColor(139, 0, 0);
  doc.rect(0, 0, pageWidth, 40, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text(t.footer.tagline, pageWidth / 2, 20, { align: 'center' });

  doc.setFontSize(16);
  doc.setFont('helvetica', 'normal');
  doc.text(t.rates.header.title, pageWidth / 2, 32, { align: 'center' });

  doc.setTextColor(0, 0, 0);
  yPosition = 50;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`${t.rates.header.effectiveDate}: ${new Date().toLocaleDateString()}`, 14, yPosition);
  yPosition += 10;

  doc.setFontSize(9);
  doc.text(t.rates.header.description, 14, yPosition);
  yPosition += 15;

  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(139, 0, 0);
  doc.text(t.rates.tabs.accountFees, 14, yPosition);
  yPosition += 5;

  const checkingAccounts = data.accountFees.filter(acc => acc.account_type === 'checking');
  if (checkingAccounts.length > 0) {
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(t.personalBanking.comparison.checking, 14, yPosition + 5);
    yPosition += 8;

    autoTable(doc, {
      startY: yPosition,
      head: [[t.rates.savings.product, t.rates.feeComparison.monthlyFee, t.rates.cd.minDeposit, t.rates.feeComparison.minOpeningDeposit, t.rates.feeComparison.overdraftFee]],
      body: checkingAccounts.map(acc => [
        acc.account_name,
        formatCurrency(acc.monthly_fee, t.rates.labels.free),
        acc.minimum_balance_to_waive ? formatCurrency(acc.minimum_balance_to_waive, t.rates.labels.free) : t.rates.feeComparison.na,
        formatCurrency(acc.minimum_opening_deposit, t.rates.labels.free),
        formatCurrency(acc.overdraft_fee, t.rates.labels.free)
      ]),
      theme: 'striped',
      headStyles: { fillColor: [139, 0, 0], textColor: [255, 255, 255] },
      styles: { fontSize: 9 },
      margin: { left: 14, right: 14 }
    });
    yPosition = (doc as any).lastAutoTable.finalY + 10;
  }

  const savingsAccounts = data.accountFees.filter(acc => acc.account_type === 'savings');
  if (savingsAccounts.length > 0) {
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(t.personalBanking.comparison.savings, 14, yPosition);
    yPosition += 3;

    autoTable(doc, {
      startY: yPosition,
      head: [[t.rates.savings.product, t.rates.feeComparison.monthlyFee, t.rates.cd.minDeposit, t.rates.feeComparison.interestRate, t.rates.feeComparison.excessWithdrawalFee]],
      body: savingsAccounts.map(acc => [
        acc.account_name,
        formatCurrency(acc.monthly_fee, t.rates.labels.free),
        acc.minimum_balance_to_waive ? formatCurrency(acc.minimum_balance_to_waive, t.rates.labels.free) : t.rates.feeComparison.na,
        `${acc.interest_rate.toFixed(2)}%`,
        formatCurrency(acc.excess_withdrawal_fee, t.rates.labels.free)
      ]),
      theme: 'striped',
      headStyles: { fillColor: [139, 0, 0], textColor: [255, 255, 255] },
      styles: { fontSize: 9 },
      margin: { left: 14, right: 14 }
    });
    yPosition = (doc as any).lastAutoTable.finalY + 10;
  }

  const cdAccounts = data.accountFees.filter(acc => acc.account_type === 'cd');
  if (cdAccounts.length > 0) {
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(t.rates.cd.title, 14, yPosition);
    yPosition += 3;

    autoTable(doc, {
      startY: yPosition,
      head: [[t.rates.cd.term, t.rates.savings.apy, t.rates.cd.minDeposit]],
      body: cdAccounts.map(acc => [
        acc.account_name,
        `${acc.interest_rate.toFixed(2)}%`,
        formatCurrency(acc.minimum_opening_deposit, t.rates.labels.free)
      ]),
      theme: 'striped',
      headStyles: { fillColor: [139, 0, 0], textColor: [255, 255, 255] },
      styles: { fontSize: 9 },
      margin: { left: 14, right: 14 }
    });
    yPosition = (doc as any).lastAutoTable.finalY + 10;
  }

  if (data.atmFees.length > 0) {
    if (yPosition > 230) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(139, 0, 0);
    doc.text(t.rates.atm.title, 14, yPosition);
    yPosition += 5;

    autoTable(doc, {
      startY: yPosition,
      head: [[t.rates.atm.transactionType, t.rates.atm.inNetwork, t.rates.atm.outOfNetwork, t.rates.atm.international]],
      body: data.atmFees.map(fee => [
        translateDBField(fee.fee_type, 'atmFeeTypes'),
        formatCurrency(fee.in_network_fee, t.rates.labels.free),
        formatCurrency(fee.out_of_network_fee, t.rates.labels.free),
        formatCurrency(fee.international_fee, t.rates.labels.free)
      ]),
      theme: 'striped',
      headStyles: { fillColor: [139, 0, 0], textColor: [255, 255, 255] },
      styles: { fontSize: 9 },
      margin: { left: 14, right: 14 }
    });
    yPosition = (doc as any).lastAutoTable.finalY + 10;
  }

  if (data.serviceFees.length > 0) {
    const categories = [...new Set(data.serviceFees.map(f => f.service_category))];

    categories.forEach(category => {
      if (yPosition > 230) {
        doc.addPage();
        yPosition = 20;
      }

      const categoryFees = data.serviceFees.filter(f => f.service_category === category);
      const categoryTitle = translateDBField(category, 'serviceCategories') + ' - ' + t.rates.tabs.serviceFees;

      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(139, 0, 0);
      doc.text(categoryTitle, 14, yPosition);
      yPosition += 5;

      autoTable(doc, {
        startY: yPosition,
        head: [[t.rates.serviceFees.service, t.rates.serviceFees.fee, t.rates.serviceFees.description]],
        body: categoryFees.map(fee => [
          fee.service_name,
          formatCurrency(fee.fee_amount, t.rates.labels.free),
          fee.fee_description
        ]),
        theme: 'striped',
        headStyles: { fillColor: [139, 0, 0], textColor: [255, 255, 255] },
        styles: { fontSize: 9 },
        columnStyles: { 2: { cellWidth: 60 } },
        margin: { left: 14, right: 14 }
      });
      yPosition = (doc as any).lastAutoTable.finalY + 10;
    });
  }

  if (data.cardFees.length > 0) {
    doc.addPage();
    yPosition = 20;

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(139, 0, 0);
    doc.text(t.rates.tabs.cardFees, 14, yPosition);
    yPosition += 5;

    const creditCards = data.cardFees.filter(c => c.card_type === 'credit');
    if (creditCards.length > 0) {
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      doc.text(t.rates.cardFees.creditCardFees, 14, yPosition + 5);
      yPosition += 8;

      autoTable(doc, {
        startY: yPosition,
        head: [[t.rates.savings.product, t.rates.cardFees.annualFee, t.rates.loan.apr, t.rates.cardFees.foreignTransactionFee, t.rates.cardFees.latePaymentFee]],
        body: creditCards.map(card => [
          card.card_name,
          formatCurrency(card.annual_fee, t.rates.labels.free),
          `${card.apr_purchases.toFixed(2)}%`,
          `${card.foreign_transaction_fee.toFixed(2)}%`,
          formatCurrency(card.late_payment_fee, t.rates.labels.free)
        ]),
        theme: 'striped',
        headStyles: { fillColor: [139, 0, 0], textColor: [255, 255, 255] },
        styles: { fontSize: 9 },
        margin: { left: 14, right: 14 }
      });
      yPosition = (doc as any).lastAutoTable.finalY + 10;
    }

    const debitCards = data.cardFees.filter(c => c.card_type === 'debit');
    if (debitCards.length > 0) {
      if (yPosition > 230) {
        doc.addPage();
        yPosition = 20;
      }

      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text(t.rates.cardFees.debitCardFees, 14, yPosition);
      yPosition += 3;

      autoTable(doc, {
        startY: yPosition,
        head: [[t.rates.savings.product, t.rates.cardFees.annualFee, t.rates.cardFees.foreignTransactionFee, t.rates.cardFees.replacementCard]],
        body: debitCards.map(card => [
          card.card_name,
          formatCurrency(card.annual_fee, t.rates.labels.free),
          `${card.foreign_transaction_fee.toFixed(2)}%`,
          formatCurrency(card.replacement_card_fee, t.rates.labels.free)
        ]),
        theme: 'striped',
        headStyles: { fillColor: [139, 0, 0], textColor: [255, 255, 255] },
        styles: { fontSize: 9 },
        margin: { left: 14, right: 14 }
      });
      yPosition = (doc as any).lastAutoTable.finalY + 10;
    }
  }

  if (data.loanFees.length > 0) {
    doc.addPage();
    yPosition = 20;

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(139, 0, 0);
    doc.text(t.rates.tabs.loanFees, 14, yPosition);
    yPosition += 5;

    const loanTypes = [...new Set(data.loanFees.map(l => l.loan_type))];

    loanTypes.forEach(type => {
      if (yPosition > 220) {
        doc.addPage();
        yPosition = 20;
      }

      const typeLoanFees = data.loanFees.filter(l => l.loan_type === type);
      const typeTitle = translateDBField(type, 'loanTypes') + ' - ' + t.rates.loan.product;

      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      doc.text(typeTitle, 14, yPosition + 5);
      yPosition += 8;

      autoTable(doc, {
        startY: yPosition,
        head: [[t.rates.savings.product, t.rates.loanFees.interestRate, t.rates.loanFees.originationFee, t.rates.loanFees.applicationFee, t.rates.loanFees.latePaymentFee]],
        body: typeLoanFees.map(loan => [
          loan.loan_name,
          `${loan.interest_rate.toFixed(2)}%`,
          loan.origination_fee_percentage > 0
            ? `${loan.origination_fee_percentage.toFixed(2)}%`
            : formatCurrency(loan.origination_fee, t.rates.labels.free),
          formatCurrency(loan.application_fee, t.rates.labels.free),
          formatCurrency(loan.late_payment_fee, t.rates.labels.free)
        ]),
        theme: 'striped',
        headStyles: { fillColor: [139, 0, 0], textColor: [255, 255, 255] },
        styles: { fontSize: 9 },
        margin: { left: 14, right: 14 }
      });
      yPosition = (doc as any).lastAutoTable.finalY + 10;
    });
  }

  if (data.investmentFees.length > 0) {
    if (yPosition > 200) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(139, 0, 0);
    doc.text(t.rates.investment.title, 14, yPosition);
    yPosition += 5;

    autoTable(doc, {
      startY: yPosition,
      head: [[t.rates.investment.service, t.rates.investment.managementFee, t.rates.investment.minInvestment]],
      body: data.investmentFees.map(fee => [
        fee.service_name,
        fee.management_fee_percentage > 0
          ? `${fee.management_fee_percentage.toFixed(2)}% ${t.rates.labels.annually}`
          : fee.transaction_fee > 0
          ? `${formatCurrency(fee.transaction_fee, t.rates.labels.free)} ${t.rates.labels.perTrade}`
          : fee.advisory_fee > 0
          ? `${formatCurrency(fee.advisory_fee, t.rates.labels.free)} ${t.rates.labels.perHour}`
          : t.rates.labels.varies,
        fee.minimum_investment > 0 ? formatCurrency(fee.minimum_investment, t.rates.labels.free) : t.rates.labels.none
      ]),
      theme: 'striped',
      headStyles: { fillColor: [139, 0, 0], textColor: [255, 255, 255] },
      styles: { fontSize: 9 },
      margin: { left: 14, right: 14 }
    });
    yPosition = (doc as any).lastAutoTable.finalY + 10;
  }

  doc.addPage();
  yPosition = 20;

  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(139, 0, 0);
  doc.text(t.rates.disclaimer.title, 14, yPosition);
  yPosition += 10;

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);

  const disclaimers = [
    t.rates.disclaimer.apy,
    t.rates.disclaimer.fees,
    t.rates.disclaimer.penalty,
    t.rates.disclaimer.credit,
    t.footer.fdic
  ];

  disclaimers.forEach((disclaimer, index) => {
    const lines = doc.splitTextToSize(`• ${disclaimer}`, pageWidth - 28);
    doc.text(lines, 14, yPosition);
    yPosition += lines.length * 5 + 3;
  });

  yPosition += 10;
  doc.setFillColor(240, 240, 240);
  doc.rect(14, yPosition, pageWidth - 28, 20, 'F');
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text(t.contact.subtitle, 16, yPosition + 8);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text(`${t.contact.phone}: 1-800-BANK-123 | ${t.contact.email}: support@aareal-bank-ag.com`, 16, yPosition + 14);

  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text(
      `${t.rates.labels.page} ${i} ${t.rates.labels.of} ${totalPages}`,
      pageWidth / 2,
      doc.internal.pageSize.height - 10,
      { align: 'center' }
    );
  }

  doc.save(`${t.footer.tagline.replace(/\s+/g, '_')}_${t.rates.header.title.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`);
};
