export type Language = 'en' | 'fr' | 'it' | 'de' | 'es' | 'el';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      contact: 'Contact',
      accounts: 'Accounts',
      loans: 'Loans'
    },
    hero: {
      title: 'Financial solutions for the digital age',
      subtitle: 'Since 1892',
      description: 'Merging traditional financial expertise with cutting-edge technology to shape the future of finance.',
      openAccount: 'Open an Account',
      learnMore: 'Learn More'
    },
    services: {
      title: 'Our Services',
      subtitle: 'What We Offer',
      personal: {
        title: 'Personal Banking',
        description: 'Accounts that fit your life. Good rates, no surprise fees.'
      },
      business: {
        title: 'Business Banking',
        description: 'Banking tools for businesses, whether you\'re just starting or already established.'
      },
      loans: {
        title: 'Loans & Mortgages',
        description: 'Fair rates on home, auto, and personal loans. We\'ll explain everything upfront.'
      },
      investment: {
        title: 'Investment Services',
        description: 'Help with planning your financial future and growing your savings.'
      },
      digital: {
        title: 'Digital Banking',
        description: 'Check your accounts, move money, and pay bills online or on your phone, anytime.'
      }
    },
    trust: {
      title: 'Security & Trust',
      subtitle: 'Your Financial Safety is Our Priority',
      imageCaption1: 'Bank-Level Security',
      imageCaption2: 'Expert Advisors',
      security: {
        title: 'Advanced Security',
        description: 'Military-grade encryption and multi-factor authentication protect your accounts.'
      },
      privacy: {
        title: 'Privacy Protected',
        description: 'Your personal information is safeguarded with industry-leading privacy measures.'
      },
      excellence: {
        title: 'Award-Winning Service',
        description: 'Recognized for excellence in customer service and financial innovation.'
      },
      support: {
        title: '24/7 Support',
        description: 'Our dedicated team is available around the clock to assist you.'
      }
    },
    about: {
      title: 'About Aareal Bank AG',
      subtitle: 'Financial solutions for the digital age',
      description: 'Merging traditional financial expertise with cutting-edge technology to shape the future of finance.',
      stats: {
        years: 'Years of Service',
        customers: 'Satisfied Customers',
        branches: 'Branch Locations',
        assets: 'Assets Under Management'
      }
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We\'re Here to Help',
      phone: 'Phone',
      email: 'Email',
      hours: 'Business Hours',
      hoursValue: 'Monday - Friday: 9:00 AM - 5:00 PM',
      address: 'Main Branch Address',
      addressValue: '123 Financial District, Banking Plaza, Suite 100'
    },
    footer: {
      tagline: 'Aareal Bank AG',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      security: 'Security',
      accessibility: 'Accessibility',
      rights: 'All rights reserved.',
      fdic: 'Member FDIC. Equal Housing Lender.'
    },
    personalBanking: {
      title: 'Personal Banking',
      subtitle: 'Comprehensive banking solutions designed to help you manage, save, and grow your money.',
      hero: {
        title: 'Private Banking for High-Net-Worth Clients',
        subtitle: 'One-on-one financial guidance for individuals and families'
      },
      intro: 'Your financial situation is unique to you. We work with high-net-worth individuals, business owners, and families who need more than standard banking. Our advisors take time to understand your goals and build a plan that works for your situation. Whether you\'re preserving wealth, growing it, or planning for the next generation, we\'re here to help.',
      getToKnow: {
        title: 'Learn About Our Private Banking Services',
        forWho: {
          title: 'Who We Serve',
          description: 'See if our private banking services are right for you'
        },
        approach: {
          title: 'How We Work',
          description: 'Our approach to managing your wealth'
        },
        expertise: {
          title: 'Our Experience',
          description: 'What we bring to the table'
        },
        becomeClient: {
          title: 'Become a Client',
          description: 'Get started with private banking'
        }
      },
      wealthPlan: {
        title: 'Your Financial Goals and Priorities',
        description: 'What do you want to do with your money? Keep it safe, grow it, or pass it to your family? A Wealth Plan helps you see the full picture. We\'ll look at your current situation, your goals, and what matters most to you—your family, your assets, your business. Every new client gets a Wealth Plan at no charge. It\'s how we make sure we\'re giving you the right guidance.'
      },
      highlights: {
        expertise: {
          title: 'Many Years of Experience',
          description: 'We\'ve learned a lot in that time about how to help people manage their money through good times and bad. What worked for our clients decades ago might not work today, so we keep adapting.'
        },
        events: {
          title: 'Client Events',
          description: 'We host events on topics like business ownership, investing, and giving back. It\'s a chance to meet other clients, share ideas, and hear from experts in different fields.'
        },
        bestBank: {
          title: 'Award-Winning Private Bank',
          description: 'We work hard to give you good service and sound advice. Our clients appreciate the personal attention we provide. We\'ve been recognized as the Overall Best European Private Bank in 2025, which we\'re proud of.'
        }
      },
      benefits: {
        title: 'Why Bank With Us?',
        security: {
          title: 'Security First',
          description: 'Advanced fraud protection and FDIC insurance on all deposit accounts.'
        },
        digital: {
          title: 'Digital Banking',
          description: 'Access your accounts anytime, anywhere with our mobile app and online banking.'
        }
      },
      calculator: {
        title: 'Savings Calculator',
        subtitle: 'See how much you could earn with our competitive rates',
        accountType: 'Account Type',
        savingsOption: 'Savings Account - 0.50% APY',
        moneyMarketOption: 'Money Market - 1.25% APY',
        cdOption: '1-Year CD - 3.00% APY',
        initialDeposit: 'Initial Deposit',
        estimatedEarnings: 'Estimated Earnings (1 Year)'
      },
      testimonials: {
        title: 'Customer Testimonials',
        testimonial1: {
          quote: 'I\'ve banked with Aareal Bank AG for 15 years. They know my situation and give me straight answers. Their rates are competitive and I trust them with my money.',
          author: 'Sarah M.'
        },
        testimonial2: {
          quote: 'The online platform is easy to use and secure. I can check my accounts, pay bills, and move money without any hassle.',
          author: 'Michael T.'
        },
        testimonial3: {
          quote: 'When I opened my first savings account, the staff explained everything clearly. They answered all my questions and didn\'t rush me.',
          author: 'Jessica L.'
        }
      },
      comparison: {
        title: 'Account Comparison',
        feature: 'Feature',
        checking: 'Checking',
        savings: 'Savings',
        moneyMarket: 'Money Market',
        cd: 'CD',
        minimumBalance: 'Minimum Balance',
        interestRate: 'Interest Rate',
        monthlyFee: 'Monthly Fee',
        debitCard: 'Debit Card',
        checkWriting: 'Check Writing',
        onlineBanking: 'Online Banking'
      }
    },
    businessBanking: {
      title: 'Business Banking',
      subtitle: 'Financial solutions designed for businesses at every stage of growth.',
      hero: {
        title: 'Open a business account',
        subtitle: 'Special offer for start-up entrepreneurs: no monthly fee for 12 months'
      },
      accessOnline: {
        title: 'Access Online',
        description: 'The ideal system for your cash management needs: handle all your bank accounts, national and international and even those you hold with other banks. Plus: access and control all your payment flows, anywhere in the world.'
      },
      sepa: {
        title: 'All you need to know about SEPA and IBAN',
        description: 'Everything you need to know about SEPA and IBAN, including technical information, sample files, and forms related to the SEPA payment standards can be found here.',
        sepaButton: 'SEPA',
        ibanButton: 'IBAN'
      },
      loanCalculator: {
        title: 'Cost of a loan',
        description: 'Enter the amount you want to borrow and you\'ll get an answer right away.',
        why: 'Why do you need a loan?',
        purposes: {
          car: 'Car',
          renovation: 'Renovation',
          other: 'Other major purchase'
        },
        howMuch: 'How much do you want to borrow?',
        minAmount: 'The minimum amount is €5000',
        maxAmount: 'The maximum amount is €75000',
        amountTooLow: 'The amount must be at least €5000',
        amountTooHigh: 'The amount cannot exceed €75000',
        selectTerm: 'Select the required term',
        year: 'Year',
        years: 'Years',
        min: 'Min.',
        max: 'Max.'
      },
      loanResults: {
        title: 'These are the minimum and maximum costs',
        minimum: 'Minimum',
        maximum: 'Maximum',
        monthlyRepayments: 'Monthly repayments',
        fixedInterestRate: 'Fixed interest rate',
        totalCosts: 'Total costs',
        disclaimer: 'This calculation is an estimate. The exact monthly repayments depend on your personal situation.'
      },
      checking: {
        title: 'Business Checking',
        description: 'Full-service checking accounts with no monthly maintenance fees for the first year.',
        features: ['No transaction limits', 'Mobile check deposit', 'Online bill payment included', 'Dedicated account manager']
      },
      creditCards: {
        title: 'Business Credit Cards',
        description: 'Corporate cards with up to 1.5% cash back on all purchases and expense reporting.',
        features: ['1.5% cash back on purchases', 'Additional cards at no extra charge', 'Monthly spending reports', 'Extended warranty coverage']
      },
      loans: {
        title: 'Business Loans',
        description: 'Working capital and equipment financing from €5,000 to €500,000.',
        features: ['Fixed rates from 7.5%', 'Repayment terms 1-10 years', 'Decision within 48 hours', 'Relationship manager assigned']
      },
      merchant: {
        title: 'Merchant Services',
        description: 'Card payment acceptance with competitive interchange rates and next-day settlement.',
        features: ['POS terminals and software', 'E-commerce payment gateway', 'Contactless and mobile payments', 'Funds available next business day']
      },
      payroll: {
        title: 'Payroll Services',
        description: 'Complete payroll processing with automatic tax calculations and employee portal.',
        features: ['Monthly or weekly payroll runs', 'Tax withholding and filing', 'Direct deposit to accounts', 'Employee access to pay history']
      },
      treasury: {
        title: 'Treasury Management',
        description: 'Cash management tools for businesses with complex banking needs.',
        features: ['Real-time balance reporting', 'Positive pay fraud protection', 'Domestic and international wires', 'Automated account reconciliation']
      },
      cta: {
        title: 'Talk to a Business Banking Specialist',
        description: 'Contact our team to discuss which services are right for your business.',
        button: 'Request a Call'
      },
      learnMore: 'Learn More'
    },
    loans: {
      title: 'Loan Solutions',
      subtitle: 'Competitive rates and flexible terms to help you achieve your financial goals.',
      home: {
        title: 'Home Loans',
        description: 'Make your dream of homeownership a reality with competitive mortgage rates.',
        features: ['Fixed and adjustable rates', 'Low down payment options', 'First-time homebuyer programs', 'Refinancing options'],
        rate: '5.99%',
        term: '30 years'
      },
      auto: {
        title: 'Auto Loans',
        description: 'Drive away in your new or used vehicle with flexible auto financing.',
        features: ['New and used car financing', 'Competitive rates', 'Terms up to 72 months', 'Pre-approval available'],
        rate: '4.49%',
        term: '60 months'
      },
      student: {
        title: 'Student Loans',
        description: 'Invest in your future with affordable education financing solutions.',
        features: ['Undergraduate and graduate loans', 'No origination fees', 'Flexible repayment terms', 'Cosigner release options'],
        rate: '6.25%',
        term: '10 years'
      },
      personal: {
        title: 'Personal Loans',
        description: 'Access funds for any purpose with quick approval and flexible terms.',
        features: ['Loans up to $50,000', 'No collateral required', 'Same-day funding available', 'Fixed monthly payments'],
        rate: '8.99%',
        term: '5 years'
      },
      homeEquity: {
        title: 'Home Equity Loans',
        description: 'Tap into your home equity for renovations, debt consolidation, or major expenses.',
        features: ['Borrow up to 85% of home value', 'Fixed interest rates', 'Tax-deductible interest', 'No prepayment penalties'],
        rate: '7.25%',
        term: '15 years'
      },
      business: {
        title: 'Small Business Loans',
        description: 'Grow your business with tailored financing solutions for entrepreneurs.',
        features: ['SBA-backed loans', 'Lines of credit', 'Equipment financing', 'Working capital loans'],
        rate: '7.99%',
        term: '10 years'
      },
      calculator: {
        title: 'Loan Calculator',
        description: 'Calculate your monthly payments and see how much you can afford.',
        button: 'Use Calculator'
      },
      preApproval: {
        title: 'Quick Pre-Approval',
        description: 'Get pre-approved in minutes and shop with confidence.',
        button: 'Get Pre-Approved'
      },
      startingRate: 'Starting Rate:',
      termLabel: 'Term:',
      applyNow: 'Apply Now'
    },
    creditCards: {
      title: 'Credit Cards',
      subtitle: 'Find the perfect credit card to match your lifestyle and maximize your rewards.',
      rewardsPlus: {
        title: 'Credit Card',
        description: 'Earn unlimited cash back on every purchase with no caps or expiration.',
        features: ['3% cash back on dining', '2% cash back on gas', '1% cash back on all other purchases', '$200 sign-up bonus']
      },
      travelElite: {
        title: 'Platinum Card',
        description: 'Unlock premium travel benefits and earn miles on every dollar spent.',
        features: ['3X miles on travel and dining', '50,000 bonus miles', 'Airport lounge access', 'No foreign transaction fees']
      },
      everydayCash: {
        title: 'Debit Card',
        description: 'Simple cash back rewards for everyday spending with no complicated categories.',
        features: ['1.5% cash back on all purchases', 'No annual fee', '$150 sign-up bonus', 'Free credit score monitoring']
      },
      balanceTransfer: {
        title: 'Prepaid Card',
        description: 'Pay down debt faster with a promotional 0% APR on balance transfers.',
        features: ['0% APR for 18 months', 'No balance transfer fees', '1% cash back on purchases', 'Financial planning tools']
      },
      secured: {
        title: 'Prepaid Secured Card',
        description: 'Build or rebuild your credit with a secured card backed by your deposit.',
        features: ['Credit line from $200-$5,000', 'Graduate to unsecured card', 'Reports to all credit bureaus', 'No annual fee']
      },
      premium: {
        title: 'Gold Card',
        description: 'Elite benefits and luxury perks for our most valued customers.',
        features: ['5X points on select categories', '100,000 bonus points', 'Concierge service 24/7', 'Travel and purchase insurance']
      },
      apr: 'APR:',
      annualFee: 'Annual Fee:',
      applyNow: 'Apply Now',
      calculator: {
        title: 'Rewards Calculator',
        subtitle: 'Estimate your annual rewards based on spending',
        monthlySpending: 'Monthly Spending',
        perYear: '/year',
        rewardsPlusLabel: 'Credit Card (1.5% back)',
        everydayCashLabel: 'Debit Card (3% groceries, 2% gas)',
        travelEliteLabel: 'Platinum Card (3x points on travel)'
      },
      protection: {
        title: 'Card Protection Benefits',
        zeroFraud: {
          title: 'Zero Fraud Liability',
          description: 'Not responsible for unauthorized transactions'
        },
        purchaseProtection: {
          title: 'Purchase Protection',
          description: 'Coverage for damaged or stolen items within 90 days'
        },
        extendedWarranty: {
          title: 'Extended Warranty',
          description: 'Adds an additional year to manufacturer warranty'
        },
        travelInsurance: {
          title: 'Travel Insurance',
          description: 'Trip cancellation and baggage delay coverage'
        },
        fraudMonitoring: {
          title: '24/7 Fraud Monitoring',
          description: 'Real-time alerts for suspicious activity'
        }
      },
      comparison: {
        title: 'Card Comparison',
        feature: 'Feature',
        rewardsPlusName: 'Credit Card',
        travelEliteName: 'Platinum Card',
        everydayCashName: 'Debit Card',
        annualFee: 'Annual Fee',
        rewardsRate: 'Rewards Rate',
        signUpBonus: 'Sign-Up Bonus',
        travelInsurance: 'Travel Insurance',
        airportLounge: 'Airport Lounge Access',
        purchaseProtection: 'Purchase Protection'
      },
      cta: {
        title: 'Not Sure Which Card is Right for You?',
        description: 'Take our quick quiz to find the perfect credit card based on your spending habits and financial goals.',
        button: 'Find Your Card'
      }
    },
    investments: {
      title: 'Investment Services',
      subtitle: 'Build wealth for your future with comprehensive investment solutions tailored to your financial goals.',
      hero: {
        title: 'Investments at Aareal Bank AG',
        subtitle: 'Start building up your capital'
      },
      riskWarning: 'Investing involves risks. You could lose (some of) the money you invested.',
      bonus: {
        title: 'Bonus of up to €100 when you invest',
        description: 'Thinking about investing? Start with us and get a bonus. Open your first investment account before 31 March 2026 and make 4 automatic investments. If you satisfy the promotion terms and conditions, you\'ll earn a bonus of €50, €75 or €100. Please note: you could lose all or part of your initial investment.'
      },
      winterBonus: {
        title: 'Winter Bonus',
        description: 'Get started with Portfolio Management or make an extra deposit before 31 March 2026 and earn a bonus.',
        newClients: 'For new clients: get up to €1,250 bonus if you start Portfolio Management. Read the terms and conditions.',
        existingClients: 'For existing Portfolio Management clients: get €500 if you deposit an extra €50,000, or €750 if you deposit €250,000. Read the terms and conditions.',
        note: 'Please note: investing involves risk. You could lose all or part of your initial investment.'
      },
      riskInfo: {
        title: 'Investing involves risks',
        description: 'Investing involves risks. You could lose (some of) the money you invested. If you are going to invest, it is important that you are aware of this. Invest with money you can spare. Read more about the risks associated with investments.'
      },
      whyInvest: {
        title: 'Why invest with Aareal Bank AG?',
        tools: {
          title: 'Nifty tools, insight and guidance',
          description: 'We will guide you online, help you make choices yourself, or manage your investments on your behalf.'
        },
        beginnings: {
          title: 'We are there for every new beginning',
          description: 'Are you a seasoned investor, or is this your first time? We have products for both experienced and novice investors.'
        },
        investors: {
          title: 'Over 225,000 people are already investing with us',
          description: 'Every day, we welcome new investors who want to start building up their capital.'
        }
      },
      performance: {
        title: 'Portfolio Performance',
        disclaimer: 'Past performance does not guarantee future results. Returns shown are hypothetical.',
        portfolioType: 'Portfolio Type',
        oneYear: '1-Year Return',
        fiveYear: '5-Year Return',
        riskLevel: 'Risk Level',
        conservative: 'Conservative Portfolio',
        moderate: 'Moderate Portfolio',
        aggressive: 'Aggressive Portfolio',
        low: 'Low',
        medium: 'Medium',
        high: 'High'
      },
      cta: {
        title: 'Ready to Start Investing?',
        description: 'Schedule a consultation with one of our investment advisors to discuss your financial goals.',
        schedule: 'Schedule Consultation',
        resources: 'View Resources'
      }
    },
    onlineBanking: {
      title: 'Online Banking Login',
      subtitle: 'Access your accounts securely',
      email: 'Email Address',
      emailPlaceholder: 'your.email@example.com',
      password: 'Password',
      passwordPlaceholder: 'Enter your password',
      remember: 'Remember me',
      forgot: 'Forgot password?',
      signIn: 'Sign In',
      noAccount: 'Don\'t have an account?',
      enroll: 'Enroll Now',
      secure: 'Your connection is secure and encrypted',
      anytime: 'Bank Anytime, Anywhere',
      description: 'Manage your finances with our secure online banking platform.',
      transfers: {
        title: 'Instant Transfers',
        description: 'Transfer money between accounts or send to friends and family instantly.'
      },
      statements: {
        title: 'Digital Statements',
        description: 'Access and download your account statements anytime, paperless and secure.'
      },
      security: {
        title: 'Advanced Security',
        description: 'Multi-factor authentication and encryption keep your accounts safe.'
      }
    },
    rates: {
      title: 'Interest Rates',
      subtitle: 'Compare our competitive rates for savings accounts, certificates of deposit, and loans.',
      effective: 'Rates effective as of February 6, 2026. Subject to change without notice.',
      header: {
        title: 'Rates & Fees Center',
        description: 'Complete transparency on all our rates and fees. We believe you deserve to know exactly what you\'re paying for.',
        noHiddenFees: 'No Hidden Fees',
        fullDisclosure: 'Full Disclosure',
        downloadPDF: 'Download Fee Schedule (PDF)',
        effectiveDate: 'Effective as of'
      },
      tabs: {
        interestRates: 'Interest Rates',
        accountFees: 'Account Fees',
        serviceFees: 'Service Fees',
        cardFees: 'Card Fees',
        loanFees: 'Loan Fees',
        feeCalculator: 'Fee Calculator'
      },
      savings: {
        title: 'Savings & CD Rates',
        product: 'Product',
        apy: 'APY',
        minBalance: 'Minimum Balance',
        trend: 'Trend',
        savingsAccount: 'Savings Account',
        moneyMarket: 'Money Market Account',
        cd6: '6-Month CD',
        cd1: '1-Year CD',
        cd5: '5-Year CD',
        openAccount: 'Open a Savings Account'
      },
      loan: {
        title: 'Loan Rates',
        product: 'Product',
        apr: 'APR',
        details: 'Details',
        trend: 'Trend',
        asLowAs: 'As low as',
        mortgage30: 'Home Mortgage (30-year fixed)',
        mortgage15: 'Home Mortgage (15-year fixed)',
        homeEquity: 'Home Equity Loan',
        autoNew: 'Auto Loan (New)',
        autoUsed: 'Auto Loan (Used)',
        personal: 'Personal Loan',
        apply: 'Apply for a Loan'
      },
      cd: {
        title: 'Certificate of Deposit (CD) Rates',
        term: 'CD Term',
        minDeposit: 'Min Deposit'
      },
      atm: {
        title: 'ATM Fees',
        transactionType: 'Transaction Type',
        inNetwork: 'In-Network',
        outOfNetwork: 'Out-of-Network',
        international: 'International'
      },
      investment: {
        title: 'Investment & Wealth Management Fees',
        service: 'Service',
        managementFee: 'Management Fee',
        minInvestment: 'Min Investment',
        description: 'Description'
      },
      labels: {
        free: 'FREE',
        annually: 'annually',
        perTrade: 'per trade',
        perHour: 'per hour',
        varies: 'Varies',
        none: 'None',
        page: 'Page',
        of: 'of'
      },
      commitment: {
        title: 'Our Commitment to Transparency',
        noHidden: {
          title: 'No Hidden Fees',
          description: 'Every fee is clearly disclosed upfront. We never surprise you with unexpected charges.'
        },
        waivers: {
          title: 'Fee Waivers Available',
          description: 'Many fees can be waived by meeting simple requirements like maintaining minimum balances.'
        },
        current: {
          title: 'Always Current',
          description: 'This fee schedule is updated in real-time. You\'re always seeing our current rates and fees.'
        }
      },
      feeComparison: {
        accountComparison: 'Account Comparison',
        clearSelection: 'Clear Selection',
        selectUpTo: 'Select up to 3 accounts to compare.',
        selected: 'selected',
        feature: 'Feature',
        monthlyFee: 'Monthly Fee',
        feeWaiver: 'Fee Waiver',
        minBalance: 'min balance',
        minOpeningDeposit: 'Min Opening Deposit',
        interestRate: 'Interest Rate (APY)',
        overdraftFee: 'Overdraft Fee',
        nsfFee: 'NSF Fee',
        paperStatementFee: 'Paper Statement Fee',
        perMonth: '/mo',
        excessWithdrawalFee: 'Excess Withdrawal Fee',
        na: 'N/A'
      },
      serviceFees: {
        service: 'Service',
        fee: 'Fee',
        description: 'Description',
        feeWaiver: 'Fee Waiver',
        noWaiverAvailable: 'No waiver available'
      },
      cardFees: {
        creditCardFees: 'Credit Card Fees',
        debitCardFees: 'Debit Card Fees',
        aprPurchases: 'APR - Purchases',
        aprBalanceTransfers: 'APR - Balance Transfers',
        aprCashAdvances: 'APR - Cash Advances',
        annualFee: 'Annual Fee',
        foreignTransactionFee: 'Foreign Transaction Fee',
        balanceTransferFee: 'Balance Transfer Fee',
        cashAdvanceFee: 'Cash Advance Fee',
        latePaymentFee: 'Late Payment Fee',
        overLimitFee: 'Over Limit Fee',
        replacementCard: 'Replacement Card',
        variableAprDisclaimer: 'Variable APR based on creditworthiness. Rates shown are representative examples. Your actual rate may be higher or lower based on your credit profile.'
      },
      loanFees: {
        mortgageFees: 'Mortgage Loan Fees',
        homeEquityFees: 'Home Equity Loan Fees',
        autoFees: 'Auto Loan Fees',
        personalFees: 'Personal Loan Fees',
        interestRate: 'Interest Rate',
        originationFee: 'Origination Fee',
        ofLoan: 'of loan',
        applicationFee: 'Application Fee',
        appraisalFee: 'Appraisal Fee',
        creditReportFee: 'Credit Report Fee',
        estimatedClosingCosts: 'Estimated Closing Costs',
        latePaymentFee: 'Late Payment Fee',
        prepaymentPenalty: 'Prepayment Penalty',
        closingCostsNote: 'Actual closing costs may vary based on property location, loan amount, and other factors. This is an estimate for planning purposes.',
        note: 'Note'
      },
      calculator: {
        title: 'Fee Calculator',
        description: 'Estimate your monthly and annual banking fees based on your usage patterns.',
        accountType: 'Account Type',
        checkingAccount: 'Checking Account',
        savingsAccount: 'Savings Account',
        avgMonthlyBalance: 'Average Monthly Balance',
        monthlyTransactions: 'Monthly Transactions',
        overdraftsPerMonth: 'Overdrafts per Month',
        outOfNetworkATM: 'Out-of-Network ATM Withdrawals',
        firstFree: 'First 4 are free',
        wireTransfersPerMonth: 'Wire Transfers per Month',
        paperStatements: 'Receive paper statements ($5/month)',
        estimatedMonthlyFees: 'Estimated Monthly Fees',
        annualProjection: 'Annual Projection',
        feeBreakdown: 'Fee Breakdown',
        monthlyMaintenanceFee: 'Monthly maintenance fee',
        overdraftFees: 'Overdraft fees',
        outOfNetworkATMFees: 'Out-of-network ATM fees',
        paperStatementFee: 'Paper statement fee',
        wireTransferFees: 'Wire transfer fees',
        noFees: 'No fees based on your usage!',
        tip: 'Tip',
        tipMessage: 'Maintain a balance of $2,500 or more to waive monthly fees on Premium Checking accounts.'
      },
      disclaimer: {
        title: 'Important Information',
        apy: 'Annual Percentage Yield (APY) and Annual Percentage Rate (APR) are accurate as of the effective date and are subject to change without notice.',
        fees: 'Fees could reduce earnings on savings accounts.',
        penalty: 'A penalty may be imposed for early withdrawal on certificates of deposit.',
        credit: 'Loan rates shown are for borrowers with excellent credit. Your rate may vary based on credit history and other factors.'
      },
      dbTranslations: {
        atmFeeTypes: {
          'ATM Withdrawal': 'ATM Withdrawal',
          'ATM Deposit': 'ATM Deposit',
          'ATM Transfer': 'ATM Transfer',
          'ATM Balance Inquiry': 'ATM Balance Inquiry'
        },
        serviceCategories: {
          'statements': 'Statements',
          'deposits': 'Deposits',
          'transfers': 'Transfers',
          'cards': 'Cards',
          'checks': 'Checks',
          'closures': 'Account Closures',
          'collections': 'Collections',
          'legal': 'Legal Services'
        },
        loanTypes: {
          'mortgage': 'Mortgage',
          'auto': 'Auto',
          'home_equity': 'Home Equity',
          'personal': 'Personal'
        }
      }
    },
    security: {
      title: 'Security Center',
      subtitle: 'Your security is our top priority. Learn how we protect your accounts and what you can do to stay safe.',
      howWeProtect: 'How We Protect You',
      encryption: {
        title: 'Encryption',
        description: 'Military-grade 256-bit SSL encryption protects all your online banking sessions and data transfers.'
      },
      fraudMonitoring: {
        title: 'Fraud Monitoring',
        description: '24/7 transaction monitoring with AI-powered fraud detection alerts you to suspicious activity.'
      },
      alerts: {
        title: 'Account Alerts',
        description: 'Customize alerts for large transactions, low balances, and unusual account activity.'
      },
      mfa: {
        title: 'Multi-Factor Authentication',
        description: 'Add an extra layer of security with biometric login and one-time passcodes.'
      },
      bestPractices: {
        title: 'Security Best Practices',
        password: {
          title: 'Use Strong Passwords',
          description: 'Create unique passwords with at least 12 characters, mixing uppercase, lowercase, numbers, and symbols.'
        },
        twoFactor: {
          title: 'Enable Two-Factor Authentication',
          description: 'Always use 2FA when available to add an extra layer of protection to your accounts.'
        },
        verify: {
          title: 'Verify Before You Click',
          description: 'Never click links in suspicious emails. Instead, type our website address directly into your browser.'
        },
        monitor: {
          title: 'Monitor Your Accounts',
          description: 'Regularly review your account activity and report any unauthorized transactions immediately.'
        },
        update: {
          title: 'Keep Software Updated',
          description: 'Always use the latest version of your browser and mobile apps for the best security.'
        },
        secure: {
          title: 'Use Secure Connections',
          description: 'Avoid public Wi-Fi when accessing your accounts. Use a VPN if you must connect remotely.'
        }
      },
      fraud: {
        title: 'Report Fraud Immediately',
        description: 'If you suspect unauthorized activity on your account or if you have been a victim of fraud, contact us immediately.',
        report: 'Report Fraud: 1-800-FRAUD',
        tips: 'Fraud Prevention Tips'
      },
      fdic: {
        title: 'FDIC Insured',
        description: 'Your deposits are insured by the Federal Deposit Insurance Corporation (FDIC) up to $250,000 per depositor, per insured bank.',
        disclaimer: 'Member FDIC. Equal Housing Lender.'
      }
    },
    atmLocator: {
      title: 'Branch & ATM Locator',
      subtitle: 'Find the nearest Aareal Bank AG branch or ATM to meet your banking needs.',
      search: 'Enter address, city, or ZIP code',
      find: 'Find Locations',
      servicesAvailable: 'Services Available:',
      getDirections: 'Get Directions',
      details: 'Details',
      mainBranch: 'Main Branch',
      northBranch: 'North Branch',
      westBranch: 'West Branch',
      eastATM: 'East ATM',
      southBranch: 'South Branch',
      airportATM: 'Airport ATM',
      downtown: 'Downtown',
      northDistrict: 'North District',
      westEnd: 'West End',
      eastDistrict: 'East District',
      southDistrict: 'South District',
      airport: 'Airport',
      terminal: 'Terminal 1, International Airport',
      hours: {
        weekdays: 'Mon-Fri: 9AM-5PM, Sat: 9AM-2PM',
        weekdaysOnly: 'Mon-Fri: 9AM-5PM',
        extended: 'Mon-Fri: 9AM-6PM, Sat: 9AM-1PM',
        south: 'Mon-Fri: 10AM-6PM, Sat: 10AM-2PM',
        alwaysOpen: '24/7'
      },
      services: {
        full: 'Full Banking Services',
        atm: 'ATM Available',
        safeDeposit: 'Safe Deposit Boxes',
        driveThrough: 'Drive-Through',
        business: 'Business Banking',
        atmOnly: 'ATM Only',
        access24: '24-Hour Access',
        notary: 'Notary Services',
        currency: 'Currency Exchange Nearby'
      },
      cta: {
        title: 'Can\'t Find a Location?',
        description: 'Our customer service team is here to help you find the nearest branch or ATM.',
        button: 'Contact Us'
      }
    },
    careers: {
      title: 'Careers at Aareal Bank AG',
      subtitle: 'Join our team of dedicated professionals and build a rewarding career in banking.',
      whyWork: 'Why Work With Us?',
      health: {
        title: 'Health & Wellness',
        description: 'Comprehensive medical, dental, and vision coverage for you and your family.'
      },
      retirement: {
        title: 'Retirement Planning',
        description: '401(k) with generous company match and financial planning resources.'
      },
      development: {
        title: 'Professional Development',
        description: 'Tuition reimbursement, training programs, and career advancement opportunities.'
      },
      balance: {
        title: 'Work-Life Balance',
        description: 'Flexible schedules, remote work options, and generous paid time off.'
      },
      openings: {
        title: 'Current Openings',
        positions: 'Positions',
        personalBanker: 'Personal Banker',
        businessSpecialist: 'Business Banking Specialist',
        advisor: 'Financial Advisor',
        loanOfficer: 'Loan Officer',
        customerService: 'Customer Service Representative',
        itAnalyst: 'IT Systems Analyst',
        marketingCoord: 'Marketing Coordinator',
        branchManager: 'Branch Manager',
        retailBanking: 'Retail Banking',
        businessBanking: 'Business Banking',
        investmentServices: 'Investment Services',
        lending: 'Lending',
        customerSupport: 'Customer Support',
        technology: 'Technology',
        marketingDept: 'Marketing',
        management: 'Management',
        multiple: 'Multiple Locations',
        mainBranch: 'Main Branch',
        downtown: 'Downtown',
        northBranch: 'North Branch',
        callCenter: 'Call Center',
        headquarters: 'Headquarters',
        westBranch: 'West Branch',
        fullTime: 'Full-Time',
        apply: 'Apply Now'
      },
      cta: {
        title: 'Don\'t See the Right Position?',
        description: 'Submit your resume and we\'ll keep you in mind for future opportunities that match your skills and interests.',
        button: 'Submit General Application'
      },
      values: {
        title: 'Our Core Values',
        missionDriven: {
          title: 'Mission-Driven',
          description: 'We\'re committed to empowering financial success for individuals and businesses worldwide.'
        },
        innovation: {
          title: 'Innovation First',
          description: 'We embrace new technologies and approaches to deliver cutting-edge banking solutions.'
        },
        growth: {
          title: 'Growth Mindset',
          description: 'We invest in our team\'s professional development with continuous learning opportunities.'
        },
        diversity: {
          title: 'Diverse & Inclusive',
          description: 'We celebrate diversity and create an environment where everyone can thrive.'
        }
      },
      growth: {
        title: 'Career Growth at Aareal Bank AG',
        stats: {
          promotions: 'Internal Promotions',
          budget: 'Annual Learning Budget',
          programs: 'Training Programs'
        },
        pathways: {
          title: 'Career Development Pathways',
          entry: 'Entry-level positions with comprehensive training and mentorship programs',
          mid: 'Mid-level roles with leadership development and specialization opportunities',
          senior: 'Senior positions with executive coaching and strategic decision-making experience',
          executive: 'C-suite opportunities for proven leaders driving organizational excellence'
        }
      },
      companyStats: {
        employees: 'Employees Worldwide',
        satisfaction: 'Employee Satisfaction',
        retention: 'Retention Rate'
      }
    },
    whoWeServe: {
      title: 'Who We Serve',
      subtitle: 'Empowering financial institutions with innovative banking and crypto solutions',
      hero: {
        title: 'Who We Work With',
        subtitle: 'Private banking built around your needs'
      },
      intro: {
        title: 'Tailored Solutions for Every Institution',
        description: 'We provide comprehensive financial services to a diverse range of institutions, from traditional banks to cutting-edge crypto platforms, all backed by our institutional-grade infrastructure and regulatory compliance.',
        mainDescription: 'We work with high-net-worth individuals who have specific financial needs. Our private banking services are available to individuals, families, and business owners with investable assets of €1 million or more. For clients with assets of €25 million or more, we offer specialized wealth management that addresses the particular challenges that come with substantial wealth.'
      },
      sections: {
        lifeStage: {
          title: 'Managing Wealth Through Life\'s Changes',
          description: 'Your financial priorities change as your life evolves. Maybe you\'re planning an early retirement, considering a second home, or balancing career growth with raising a family. We help you navigate these transitions and make decisions that support your goals at every stage.'
        },
        business: {
          title: 'For Business Owners and Entrepreneurs',
          description: 'Running a business takes focus. It\'s easy to lose track of your personal finances when you\'re building a company. We keep an eye on both your business and personal financial picture, helping you spot opportunities and plan ahead. We also work with former business owners who\'ve sold their companies.'
        },
        exceptionalWealth: {
          title: 'Managing Significant Wealth',
          description: 'When your assets reach €25 million or more, the complexity increases significantly. Our Private Wealth Management service handles these challenges with a focus on privacy for you and your family, and a long-term view toward preserving wealth across generations.'
        }
      },
      segments: {
        banks: {
          title: 'Banks',
          description: 'Expand your banking services with secure and regulated crypto offering, including Trading, Staking and Custody'
        },
        assetManagers: {
          title: 'Asset Managers',
          description: 'Enrich your offering with crypto investments through a regulated crypto bank.'
        },
        fintechs: {
          title: 'Fintechs',
          description: 'Unlock traditional banking and crypto services for your clients backed by institutional-grade infrastructure.'
        },
        exchanges: {
          title: 'Crypto Exchanges',
          description: 'Offer highly secure custody for your clients\' crypto through our hot and cold storage solutions.'
        },
        casps: {
          title: 'CASPs',
          description: 'Access institutional grade banking, custody, and trading infrastructure to deliver compliant crypto services to your clients.'
        }
      },
      specialServices: {
        title: 'Specialized Services',
        description: 'We have experience working with clients in specific situations who have particular needs and questions.',
        partners: {
          title: 'Partners and Senior Executives',
          description: 'As a partner at a professional firm or an executive at a public company, you have specific financial considerations. You want excellence in your personal finances just as you do professionally. We understand your situation and can help you build and manage your wealth.'
        },
        expats: {
          title: 'International Clients',
          description: 'Living and working abroad brings financial complexity. Our International Private Banking team knows the challenges you face—taxes, multiple jurisdictions, currency issues. We provide clear guidance and solutions that work across borders.'
        },
        associations: {
          title: 'Nonprofits and Foundations',
          description: 'We work with associations, foundations, and religious organizations that manage significant assets. Our relationship managers understand your mission and bring financial expertise and connections to help you achieve your goals.'
        },
        familyOffices: {
          title: 'Family Office Support',
          description: 'If you represent a family office, you know your role is to ensure your clients receive excellent, discreet private banking service. Our Family Office Desk shares that commitment and can partner with you to serve your clients.'
        }
      },
      cta: {
        title: 'Interested in Working Together?',
        description: 'Let\'s talk about whether our private banking services are right for your situation.',
        consultation: 'Schedule a Call',
        learnMore: 'Learn More'
      },
      stats: {
        partners: 'Partner Institutions',
        assets: 'Assets Under Custody',
        support: 'Support & Monitoring'
      }
    },
    ourApproachPage: {
      title: 'How We Work',
      subtitle: 'We help you manage your wealth and plan for the future',
      intro: {
        paragraph1: 'Managing wealth brings opportunities, but it also comes with personal and business challenges. These require attention and customized solutions.',
        paragraph2: 'We work with you to understand your financial situation and help you make informed decisions about your wealth.'
      },
      rightPartner: {
        title: 'Your Personal Banker',
        description: 'Your financial situation requires personal attention. Your private banker serves as your main point of contact for questions about your finances and wealth. We match you with the banker who has experience with situations like yours. With years of experience working with high-net-worth families and business owners, your private banker can help you navigate wealth management and financial planning questions.'
      },
      testimonial: {
        quote: 'I felt heard and understood, and that was very important to take a step forward',
        author: 'Hans Gitsels',
        role: 'Customer | Aareal Bank AG'
      },
      atYourService: {
        title: 'How We Help You',
        privateBanker: {
          title: 'A Dedicated Point of Contact',
          description: 'Your private banker is more than a financial advisor. They\'re someone who understands your situation and can help you with all your financial questions.'
        },
        expertise: {
          title: 'Access to Specialists',
          description: 'We combine experience with current market knowledge to give you relevant insights. Whether you\'re dealing with a business transition or complex financial planning, our specialists can help.'
        },
        tailored: {
          title: 'Solutions for Your Situation',
          description: 'We know that your financial needs are specific to you. That\'s why we customize our approach to your situation. We typically start with wealth planning so we can address your priorities right away.'
        }
      },
      familyBanking: {
        title: 'Private Banking for Your Family',
        description: 'Your family can also work with us. We help with issues that high-net-worth families often face. We can facilitate conversations with your adult children about family wealth and your plans for the future. We also help prepare young adults to handle significant wealth.'
      },
      alsoOfInterest: {
        title: 'You May Also Be Interested In',
        events: {
          title: 'Events',
          description: 'Our events give you a chance to meet others and share experiences and knowledge.'
        },
        secureBanking: {
          title: 'Security',
          description: 'We work to keep your online banking secure through multiple safeguards and fraud prevention measures.'
        },
        betterWorld: {
          title: 'Contributing to a Better World',
          description: 'Together we can make a positive difference, now and for future generations.'
        }
      }
    },
    financialEducation: {
      title: 'Financial Education Center',
      subtitle: 'Empower yourself with knowledge. Learn about budgeting, saving, investing, and credit management through our comprehensive library of articles, videos, and interactive tools.',
      search: 'Search articles, topics, or keywords...',
      tabs: {
        articles: 'Educational Articles',
        news: 'Financial News'
      },
      categories: {
        all: 'All Topics',
        budgeting: 'Budgeting',
        saving: 'Saving',
        investing: 'Investing',
        credit: 'Credit'
      },
      newsCategories: {
        all: 'All News',
        banking: 'Banking',
        economy: 'Economy',
        crypto: 'Crypto'
      },
      articles: {
        title: 'All Articles',
        allArticles: 'All Articles',
        categoryArticles: {
          budgeting: 'Budgeting Articles',
          saving: 'Saving Articles',
          investing: 'Investing Articles',
          credit: 'Credit Articles'
        },
        featured: 'FEATURED',
        readArticle: 'Read Article',
        closeArticle: 'Close Article',
        minRead: 'min read',
        noArticles: 'No articles found matching your criteria.',
        difficulty: {
          beginner: 'BEGINNER',
          intermediate: 'INTERMEDIATE',
          advanced: 'ADVANCED'
        }
      },
      news: {
        title: 'Latest Financial News',
        latestNews: 'Latest Financial News',
        categoryNews: {
          banking: 'Banking News',
          economy: 'Economy News',
          crypto: 'Crypto News'
        },
        readFull: 'Read Full Article',
        noNews: 'No news articles found.',
        justNow: 'Just now',
        hoursAgo: 'h ago'
      },
      calculators: {
        backToEducation: 'Back to Education Center',
        budgetCalc: {
          title: 'Monthly Budget Calculator',
          monthlyIncome: 'Monthly Income',
          housing: 'Housing',
          transportation: 'Transportation',
          food: 'Food & Groceries',
          utilities: 'Utilities',
          insurance: 'Insurance',
          entertainment: 'Entertainment',
          savings: 'Savings',
          other: 'Other',
          summary: 'Budget Summary',
          totalIncome: 'Total Income',
          totalExpenses: 'Total Expenses',
          remaining: 'Remaining',
          ruleTitle: '50/30/20 Rule Analysis',
          needs: 'Needs',
          wants: 'Wants',
          target: 'Target',
          savingsRate: 'Savings Rate',
          greatJob: 'Great job! 🎉',
          goodStart: 'Good start!',
          tryIncrease: 'Try to increase your savings'
        },
        savingsCalc: {
          title: 'Savings Goal Calculator',
          savingsGoal: 'Savings Goal',
          currentSavings: 'Current Savings',
          monthlyContribution: 'Monthly Contribution',
          interestRate: 'Interest Rate',
          whatSavingFor: 'What are you saving for?',
          howMuchNow: 'How much do you have now?',
          howMuchMonthly: 'How much can you save each month?',
          expectedReturn: 'Expected annual return on savings',
          timeline: 'Timeline to Goal',
          timeToReach: 'Time to reach goal',
          targetDate: 'Target Date',
          breakdown: 'Progress Breakdown',
          goalAmount: 'Goal Amount',
          startingBalance: 'Starting Balance',
          stillNeeded: 'Still Needed',
          totalContributions: 'Total Contributions',
          interestEarned: 'Interest Earned',
          progressBar: 'Progress Bar',
          quickTips: 'Quick Tips',
          tip1: 'Automate your savings transfers',
          tip2: 'Start small and increase over time',
          tip3: 'Use high-yield savings accounts',
          tip4: 'Review and adjust monthly'
        },
        compoundCalc: {
          title: 'Compound Interest Calculator',
          initialInvestment: 'Initial Investment',
          monthlyContribution: 'Monthly Contribution',
          yearsToGrow: 'Years to Grow',
          annualRate: 'Annual Interest Rate',
          compoundFrequency: 'Compound Frequency',
          monthly: 'Monthly',
          annually: 'Annually',
          futureValue: 'Future Value',
          breakdown: 'Breakdown',
          totalContributions: 'Total Contributions',
          interestEarned: 'Interest Earned',
          totalValue: 'Total Value',
          growthOverTime: 'Growth Over Time',
          year: 'Year',
          balance: 'Balance',
          interest: 'Interest',
          afterYears: 'After {years} years',
          rule72: 'Rule of 72',
          rule72Text: 'At {rate}% annual return, your money will double in approximately {years} years.'
        },
        debtCalc: {
          title: 'Debt Payoff Calculator',
          totalDebt: 'Total Debt Balance',
          interestRate: 'Interest Rate (APR)',
          monthlyPayment: 'Monthly Payment',
          minimumPayment: 'Minimum payment',
          paymentTooLow: 'Payment Too Low!',
          paymentWarning: 'Your monthly payment must be higher than the minimum to pay off this debt. At this rate, you\'ll never pay it off!',
          timeline: 'Payoff Timeline',
          timeToDebtFree: 'Time to Debt Free',
          debtFreeDate: 'Debt Free Date',
          breakdown: 'Cost Breakdown',
          originalBalance: 'Original Balance',
          totalInterest: 'Total Interest Paid',
          totalPaid: 'Total Amount Paid',
          doublePayment: 'Double Your Payment?',
          doubleText: 'See what happens if you pay ${amount} per month',
          timeSaved: 'Time Saved',
          interestSaved: 'Interest Saved',
          newPayoffTime: 'New Payoff Time',
          strategies: 'Payoff Strategies',
          strategy1: 'Pay more than the minimum',
          strategy2: 'Make bi-weekly payments',
          strategy3: 'Use windfalls (bonuses, tax refunds)',
          strategy4: 'Cut expenses temporarily',
          strategy5: 'Consider balance transfer (0% APR)',
          progressViz: 'Progress Visualization',
          principal: 'Principal',
          interest: 'Interest'
        },
        retirementCalc: {
          title: 'Retirement Calculator',
          currentAge: 'Current Age',
          retirementAge: 'Retirement Age',
          currentSavings: 'Current Retirement Savings',
          monthlyContribution: 'Monthly Contribution',
          expectedReturn: 'Expected Annual Return',
          desiredIncome: 'Desired Monthly Retirement Income',
          yearsUntil: '{years} years until retirement',
          historicalAvg: 'Historical average: 7-8% for diversified portfolios',
          perYear: 'per year',
          onTrack: 'You\'re On Track!',
          onTrackText: 'Based on your current plan, you\'re projected to have enough for retirement.',
          projectedIncome: 'Projected Monthly Income',
          actionNeeded: 'Action Needed',
          actionText: 'You may need to adjust your retirement plan to reach your income goal.',
          additionalNeeded: 'Additional Monthly Contribution Needed',
          snapshot: 'Retirement Snapshot',
          yearsToRetirement: 'Years to Retirement',
          projectedNestEgg: 'Projected Nest Egg',
          totalContributions: 'Total Contributions',
          investmentGains: 'Investment Gains',
          monthlyIncome: 'Monthly Income',
          composition: 'Savings Composition',
          initialSavings: 'Initial Savings',
          contributions: 'Contributions',
          investmentGrowth: 'Investment Growth',
          rule4Percent: 'The 4% Rule',
          rule4PercentText: 'A common retirement guideline suggests withdrawing 4% of your portfolio annually. Based on your projected savings:',
          safeAnnual: 'Safe Annual Withdrawal',
          safeMonthly: 'Safe Monthly Income',
          tipsTitle: 'Tips for Retirement Planning',
          tip1: 'Maximize employer 401(k) match',
          tip2: 'Consider Roth IRA for tax-free growth',
          tip3: 'Increase contributions with raises',
          tip4: 'Diversify your investments',
          tip5: 'Start as early as possible'
        }
      },
      videoTutorials: {
        title: 'Video Tutorials',
        description: 'Coming soon: Watch our expert-led video series on personal finance topics.',
        notify: 'Notify Me'
      },
      consultation: {
        title: 'Need Personal Guidance?',
        description: 'Schedule a free consultation with one of our financial advisors.',
        button: 'Schedule Consultation'
      },
      finalCta: {
        title: 'Start Your Financial Journey Today',
        description: 'Knowledge is the first step toward financial freedom. Explore our resources, use our tools, and take control of your financial future.',
        openAccount: 'Open an Account',
        contactUs: 'Contact Us'
      }
    },
    support: {
      title: 'Customer Support',
      subtitle: 'We\'re here to help you with all your banking needs. Choose the best way to reach us.',
      phone: {
        title: '24/7 Phone Support',
        description: 'Speak with a representative anytime, day or night.',
        action: 'Call Now'
      },
      chat: {
        title: 'Live Chat',
        description: 'Get instant help through our secure chat system.',
        detail: 'Available 24/7',
        action: 'Start Chat'
      },
      email: {
        title: 'Email Support',
        description: 'Send us a detailed message and we\'ll respond within 24 hours.',
        action: 'Send Email'
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            q: 'How do I reset my online banking password?',
            a: 'Click \'Forgot Password\' on the login page. Enter your username and email address, and we\'ll send you a secure link to reset your password. The link expires after 24 hours for security.'
          },
          {
            q: 'What are your current interest rates?',
            a: 'Interest rates vary by account type and balance. Visit our Rates page for current APY information on savings accounts, CDs, and loan products. Rates are updated daily.'
          },
          {
            q: 'How long does a wire transfer take?',
            a: 'Domestic wire transfers typically complete within 24 hours. International wires may take 3-5 business days depending on the destination country and intermediary banks.'
          },
          {
            q: 'Is online banking secure?',
            a: 'Yes, our online banking platform uses bank-level 256-bit encryption, multi-factor authentication, and real-time fraud monitoring to protect your account information.'
          },
          {
            q: 'How do I report a lost or stolen card?',
            a: 'Call our 24/7 card services at 1-800-ANCHOR immediately. You can also temporarily freeze your card by logging into online banking.'
          },
          {
            q: 'What are your ATM fees?',
            a: 'Aareal Bank AG ATMs are free for account holders. We also reimburse up to $20/month in out-of-network ATM fees for premium account holders.'
          },
          {
            q: 'How do I open a business account?',
            a: 'Visit any branch with your business registration documents, EIN, and government-issued ID. You can also start the application online and complete it in person.'
          },
          {
            q: 'How do I deposit checks?',
            a: 'You can deposit checks at any Aareal Bank AG branch or ATM. Simply endorse the check and follow the on-screen instructions. Funds are typically available within 1-2 business days.'
          }
        ],
        viewAll: 'View All FAQs'
      },
      hours: {
        title: 'Branch Hours',
        weekdays: 'Monday - Friday:',
        weekdaysTime: '9:00 AM - 5:00 PM',
        saturday: 'Saturday:',
        saturdayTime: '9:00 AM - 2:00 PM',
        sunday: 'Sunday:',
        sundayTime: 'Closed',
        support247: 'Phone and online support available 24/7'
      }
    },
    mortgage: {
      title: 'Mortgage Services',
      subtitle: 'Find the perfect mortgage solution for your home with competitive rates and flexible terms.',
      typesTitle: 'Mortgage Options',
      types: {
        fixed: {
          title: 'Fixed-Rate Mortgage',
          description: 'Stable monthly payments with a fixed interest rate for the life of the loan.',
          features: [
            'Predictable monthly payments',
            'Protection against rate increases',
            'Terms from 15 to 30 years',
            'Ideal for long-term homeownership'
          ]
        },
        adjustable: {
          title: 'Adjustable-Rate Mortgage',
          description: 'Lower initial rates that adjust periodically based on market conditions.',
          features: [
            'Lower initial interest rates',
            'Rate adjustments after initial period',
            'Ideal for short-term ownership',
            'Potential for lower total interest'
          ]
        },
        fha: {
          title: 'FHA Loans',
          description: 'Government-backed loans with lower down payment requirements.',
          features: [
            'Down payment as low as 3.5%',
            'More flexible credit requirements',
            'Government insurance protection',
            'Great for first-time buyers'
          ]
        },
        va: {
          title: 'VA Loans',
          description: 'Special mortgage programs for eligible veterans and service members.',
          features: [
            'No down payment required',
            'No private mortgage insurance',
            'Competitive interest rates',
            'Limited closing costs'
          ]
        }
      },
      calculator: {
        title: 'Mortgage Calculator',
        description: 'Estimate your monthly mortgage payment with our easy-to-use calculator.',
        loanAmount: 'Loan Amount',
        interestRate: 'Interest Rate',
        loanTerm: 'Loan Term',
        downPayment: 'Down Payment',
        years: 'years',
        calculate: 'Calculate Payment'
      },
      processTitle: 'The Mortgage Process',
      process: {
        preapproval: {
          title: 'Pre-Approval',
          description: 'Get pre-approved to know your budget and strengthen your offer.'
        },
        shopping: {
          title: 'Home Shopping',
          description: 'Find your perfect home with confidence in your financing.'
        },
        application: {
          title: 'Application',
          description: 'Complete your mortgage application with our easy process.'
        },
        closing: {
          title: 'Closing',
          description: 'Finalize your mortgage and get the keys to your new home.'
        }
      },
      cta: {
        title: 'Ready to Buy Your Home?',
        description: 'Start your mortgage application today or speak with one of our mortgage specialists.',
        button: 'Apply Now'
      }
    },
    aboutUs: {
      title: 'About Aareal Bank AG',
      subtitle: 'Building prosperity through traditional banking values and personalized service since 1952.',
      mission: {
        title: 'Our Mission',
        description: 'Digital assets have come of age and banking services need to rise to the challenge. Trading, investing and storing crypto currencies and other digital assets should not be a \'bolt-on\' to traditional banking, but an integrated service that links to every other aspect of a client\'s banking services. Aareal Bank AG was established to provide precisely this solution to professional investors, companies, family offices and institutions.'
      },
      vision: {
        title: 'Our Vision',
        description: 'To be the most trusted and respected financial institution in our region, known for innovation, integrity, and unwavering commitment to customer success.'
      },
      futureFinance: {
        title: 'Creating the future of finance',
        description: 'We have lead with a new vision for banking that breaks down the barriers between traditional financial services and support for digital assets. Our award-winning solutions products deliver a seamless service across all major asset classes, including traditional assets, crypto currencies and blockchain networks.'
      },
      principles: {
        title: 'Our principles',
        description: 'We deliver all the capabilities of modern banking including crypto, accessed through a single gateway and backed by the highest standards of security. Our mission is built around three watchwords:',
        sophisticated: {
          title: 'Sophisticated',
          description: 'Revolutionising your financial experience with cutting-edge technology and innovative solutions'
        },
        seamless: {
          title: 'Seamless',
          description: 'Bridging the world of traditional and digital finance with effortless, integrated transactions'
        },
        secure: {
          title: 'Secure',
          description: 'Keeping your finances safe with strong, industry-leading protection'
        }
      },
      valuesTitle: 'Our Core Values',
      values: {
        integrity: {
          title: 'Integrity',
          description: 'We conduct business with honesty, transparency, and ethical principles.'
        },
        community: {
          title: 'Community',
          description: 'We invest in and support the communities we serve.'
        },
        excellence: {
          title: 'Excellence',
          description: 'We strive for excellence in everything we do.'
        },
        innovation: {
          title: 'Innovation',
          description: 'We embrace innovation to better serve our customers.'
        }
      },
      historyTitle: 'Our Journey',
      milestones: {
        founded: {
          title: 'Aareal Bank AG Founded',
          description: 'Started as a small community bank with a commitment to personalized service.'
        },
        expansion: {
          title: 'Regional Expansion',
          description: 'Grew to serve multiple communities across the region with 10 new branches.'
        },
        digital: {
          title: 'Digital Banking Launch',
          description: 'Launched comprehensive online banking services to serve customers 24/7.'
        },
        branches: {
          title: 'Present Day',
          description: 'Now serving over 50,000 customers across 25 branches with $2B+ in assets.'
        }
      },
      stats: {
        customers: '50,000+',
        customersLabel: 'Satisfied Customers',
        branches: '25',
        branchesLabel: 'Branch Locations',
        employees: '500+',
        employeesLabel: 'Dedicated Employees'
      },
      cta: {
        title: 'Join Our Banking Family',
        description: 'Experience the Aareal Bank AG difference with personalized service and modern banking solutions.',
        button: 'Open an Account'
      }
    },
    currencyExchange: {
      title: 'Currency Exchange',
      subtitle: 'Exchange fiat and cryptocurrencies with competitive rates and instant transfers',
      converter: {
        title: 'Currency Converter',
        from: 'From',
        to: 'To',
        exchangeRate: 'Exchange Rate',
        executeExchange: 'Execute Exchange',
        fiat: 'Fiat',
        crypto: 'Crypto',
        rateAlert: {
          title: 'Rate Alert',
          description: 'Get notified when your desired exchange rate is available',
          placeholder: 'Target rate',
          setAlert: 'Set Alert',
          notification: 'Instant email and SMS notifications'
        }
      },
      cryptoRates: {
        title: 'Cryptocurrency Rates'
      },
      fiatCurrencies: {
        title: 'Major Fiat Currencies',
        perUsd: 'per USD'
      },
      wireTransfer: {
        title: 'International Wire Transfer',
        features: {
          lowFees: {
            title: 'Low Fees',
            description: 'Starting at just $15 for international transfers'
          },
          fast: {
            title: 'Fast Transfers',
            description: 'Most transfers complete within 24-48 hours'
          },
          global: {
            title: '200+ Countries',
            description: 'Send money to over 200 countries worldwide'
          }
        },
        calculator: {
          title: 'Transfer Fee Calculator',
          amount: 'Transfer Amount',
          destination: 'Destination Country',
          transferFee: 'Transfer Fee',
          exchangeMarkup: 'Exchange Rate Markup',
          totalCost: 'Total Cost'
        }
      },
      cta: {
        title: 'Start Exchanging Today',
        description: 'Open a Aareal Bank AG account to access competitive exchange rates and low-fee international transfers',
        button: 'Open Account'
      }
    },
    trustSection: {
      title: 'Supported Currencies',
      subtitle: 'We work with both traditional and digital currencies',
      crypto: {
        title: 'Available Crypto Assets',
        description: 'Buy, sell, and hold major cryptocurrencies with secure storage',
        more: 'and many more...'
      },
      fiat: {
        title: 'Available Fiat Currencies',
        description: 'Work with major currencies from around the world',
        more: 'and many more...'
      }
    },
    newsletter: {
      title: 'Subscribe to Our Newsletter',
      subtitle: 'Get the latest news, financial tips, and exclusive offers',
      emailPlaceholder: 'Enter your email',
      subscribe: 'Subscribe',
      success: 'Thank you for subscribing!',
      error: 'An error occurred. Please try again.',
      alreadySubscribed: 'This email is already subscribed'
    },
    news: {
      title: 'Latest News',
      subtitle: 'Stay informed with the latest developments in the financial world',
      categories: {
        all: 'All',
        banking: 'Banking',
        economy: 'Economy',
        crypto: 'Crypto'
      },
      readMore: 'Read More',
      loading: 'Loading news...',
      error: 'Failed to load news',
      noArticles: 'No articles found',
      publishedBy: 'Published by'
    },
    difference: {
      title: 'Why Choose Aareal Bank AG',
      safety: 'Safety',
      safetyDesc: 'Your money is protected with proven security measures. We take no shortcuts when it comes to keeping your accounts safe.',
      transparency: 'Transparency',
      transparencyDesc: 'Access all your accounts in one place. See exactly where your money is and what it\'s doing.',
      performance: 'Performance',
      performanceDesc: 'We stay current with financial technology so you can take advantage of new opportunities when they make sense for you.'
    },
    investmentHighlight: {
      title: 'Investments',
      subtitle: 'Crypto, cash, stocks, or traditional investments',
      description: 'From stocks to crypto, we have options that match your goals.'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      about: 'À Propos',
      contact: 'Contact',
      accounts: 'Comptes',
      loans: 'Prêts'
    },
    hero: {
      title: 'Solutions financières pour l\'ère numérique',
      subtitle: 'Depuis 1892',
      description: 'Fusionnant l\'expertise financière traditionnelle avec une technologie de pointe pour façonner l\'avenir de la finance.',
      openAccount: 'Ouvrir un Compte',
      learnMore: 'En Savoir Plus'
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Ce Que Nous Proposons',
      personal: {
        title: 'Banque Personnelle',
        description: 'Des comptes qui s\'adaptent à votre vie. De bons taux, pas de frais surprises.'
      },
      business: {
        title: 'Banque d\'Affaires',
        description: 'Des outils bancaires pour les entreprises, que vous débutiez ou soyez déjà établi.'
      },
      loans: {
        title: 'Prêts et Hypothèques',
        description: 'Des taux justes pour les prêts immobiliers, auto ou personnels. Nous expliquons tout dès le départ.'
      },
      investment: {
        title: 'Services d\'Investissement',
        description: 'De l\'aide pour planifier votre avenir financier et faire fructifier votre épargne.'
      },
      digital: {
        title: 'Banque Numérique',
        description: 'Consultez vos comptes, transférez de l\'argent et payez vos factures en ligne ou sur votre téléphone, à tout moment.'
      }
    },
    trust: {
      title: 'Sécurité et Confiance',
      subtitle: 'Votre Sécurité Financière est Notre Priorité',
      imageCaption1: 'Sécurité Bancaire',
      imageCaption2: 'Conseillers Experts',
      security: {
        title: 'Sécurité Avancée',
        description: 'Cryptage de niveau militaire et authentification multifacteur pour protéger vos comptes.'
      },
      privacy: {
        title: 'Confidentialité Protégée',
        description: 'Vos informations personnelles sont protégées par des mesures de confidentialité de pointe.'
      },
      excellence: {
        title: 'Service Primé',
        description: 'Reconnu pour l\'excellence du service client et l\'innovation financière.'
      },
      support: {
        title: 'Support 24/7',
        description: 'Notre équipe dévouée est disponible 24h/24 pour vous assister.'
      }
    },
    about: {
      title: 'À Propos de Aareal Bank AG',
      subtitle: 'Solutions financières pour l\'ère numérique',
      description: 'Fusionner l\'expertise financière traditionnelle avec une technologie de pointe pour façonner l\'avenir de la finance.',
      stats: {
        years: 'Années de Service',
        customers: 'Clients Satisfaits',
        branches: 'Succursales',
        assets: 'Actifs Sous Gestion'
      }
    },
    contact: {
      title: 'Contactez-Nous',
      subtitle: 'Nous Sommes Là Pour Vous Aider',
      phone: 'Téléphone',
      email: 'Courriel',
      hours: 'Heures d\'Ouverture',
      hoursValue: 'Lundi - Vendredi: 9h00 - 17h00',
      address: 'Adresse de la Succursale Principale',
      addressValue: '123 Quartier Financier, Plaza Bancaire, Suite 100'
    },
    footer: {
      tagline: 'Aareal Bank AG',
      quickLinks: 'Liens Rapides',
      legal: 'Juridique',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions d\'Utilisation',
      security: 'Sécurité',
      accessibility: 'Accessibilité',
      rights: 'Tous droits réservés.',
      fdic: 'Membre FDIC. Prêteur pour l\'égalité des chances en matière de logement.'
    },
    personalBanking: {
      title: 'Banque Personnelle',
      subtitle: 'Solutions bancaires complètes conçues pour vous aider à gérer, économiser et faire fructifier votre argent.',
      hero: {
        title: 'Banque Privée pour Clients Fortunés',
        subtitle: 'Conseil financier personnalisé pour particuliers et familles'
      },
      intro: 'Votre situation financière vous est propre. Nous accompagnons des particuliers fortunés, des chefs d\'entreprise et des familles qui ont besoin de plus que la banque traditionnelle. Nos conseillers prennent le temps de comprendre vos objectifs et construisent un plan adapté à votre situation. Que vous souhaitiez préserver votre patrimoine, le faire fructifier ou le transmettre, nous sommes là pour vous aider.',
      getToKnow: {
        title: 'Découvrez Nos Services de Banque Privée',
        forWho: {
          title: 'Qui Nous Servons',
          description: 'Vérifiez si nos services correspondent à vos besoins'
        },
        approach: {
          title: 'Comment Nous Travaillons',
          description: 'Notre approche pour gérer votre patrimoine'
        },
        expertise: {
          title: 'Notre Expérience',
          description: 'Ce que nous apportons'
        },
        becomeClient: {
          title: 'Devenir Client',
          description: 'Commencer avec la banque privée'
        }
      },
      wealthPlan: {
        title: 'Vos Objectifs et Priorités Financiers',
        description: 'Que voulez-vous faire de votre argent? Le sécuriser, le faire croître ou le transmettre à votre famille? Un Plan Patrimonial vous aide à voir l\'ensemble. Nous examinons votre situation actuelle, vos objectifs et ce qui compte le plus pour vous—votre famille, vos actifs, votre entreprise. Chaque nouveau client reçoit un Plan Patrimonial sans frais. C\'est notre façon de nous assurer que nous vous donnons les bons conseils.'
      },
      highlights: {
        expertise: {
          title: 'Nombreuses Années d\'Expérience',
          description: 'Nous avons beaucoup appris sur la façon d\'aider les gens à gérer leur argent dans les bons et les mauvais moments. Ce qui fonctionnait pour nos clients il y a des décennies ne fonctionne peut-être plus aujourd\'hui, alors nous continuons à nous adapter.'
        },
        events: {
          title: 'Événements Clients',
          description: 'Nous organisons des événements sur des sujets comme l\'entrepreneuriat, l\'investissement et la philanthropie. C\'est l\'occasion de rencontrer d\'autres clients, d\'échanger des idées et d\'entendre des experts de différents domaines.'
        },
        bestBank: {
          title: 'Banque Privée Primée',
          description: 'Nous travaillons dur pour vous offrir un bon service et des conseils avisés. Nos clients apprécient l\'attention personnelle que nous leur portons. Nous avons été reconnus comme Meilleure Banque Privée Européenne en 2025, ce dont nous sommes fiers.'
        }
      },
      benefits: {
        title: 'Pourquoi Choisir Notre Banque?',
        security: {
          title: 'Sécurité d\'Abord',
          description: 'Protection avancée contre la fraude et assurance FDIC sur tous les comptes de dépôt.'
        },
        digital: {
          title: 'Banque Numérique',
          description: 'Accédez à vos comptes à tout moment, n\'importe où avec notre application mobile et banque en ligne.'
        }
      },
      calculator: {
        title: 'Calculateur d\'Épargne',
        subtitle: 'Voyez combien vous pourriez gagner avec nos taux compétitifs',
        accountType: 'Type de Compte',
        savingsOption: 'Compte d\'Épargne - 0.50% APY',
        moneyMarketOption: 'Marché Monétaire - 1.25% APY',
        cdOption: 'CD 1 An - 3.00% APY',
        initialDeposit: 'Dépôt Initial',
        estimatedEarnings: 'Gains Estimés (1 An)'
      },
      testimonials: {
        title: 'Témoignages de Clients',
        testimonial1: {
          quote: 'Je suis client de Aareal Bank AG depuis 15 ans. Ils connaissent ma situation et me donnent des réponses franches. Leurs taux sont compétitifs et je leur fais confiance avec mon argent.',
          author: 'Sarah M.'
        },
        testimonial2: {
          quote: 'La plateforme en ligne est facile à utiliser et sécurisée. Je peux consulter mes comptes, payer mes factures et transférer de l\'argent sans problème.',
          author: 'Michael T.'
        },
        testimonial3: {
          quote: 'Quand j\'ai ouvert mon premier compte d\'épargne, le personnel m\'a tout expliqué clairement. Ils ont répondu à toutes mes questions et ne m\'ont pas pressé.',
          author: 'Jessica L.'
        }
      },
      comparison: {
        title: 'Comparaison des Comptes',
        feature: 'Caractéristique',
        checking: 'Chèques',
        savings: 'Épargne',
        moneyMarket: 'Marché Monétaire',
        cd: 'CD',
        minimumBalance: 'Solde Minimum',
        interestRate: 'Taux d\'Intérêt',
        monthlyFee: 'Frais Mensuels',
        debitCard: 'Carte de Débit',
        checkWriting: 'Écriture de Chèques',
        onlineBanking: 'Banque en Ligne'
      }
    },
    businessBanking: {
      title: 'Banque d\'Affaires',
      subtitle: 'Solutions financières pour les entreprises à chaque étape de développement.',
      hero: {
        title: 'Ouvrez un compte professionnel',
        subtitle: 'Offre spéciale pour entrepreneurs en démarrage: pas de frais mensuels pendant 12 mois'
      },
      accessOnline: {
        title: 'Access Online',
        description: 'Le système idéal pour vos besoins de gestion de trésorerie: gérez tous vos comptes bancaires, nationaux et internationaux, même ceux détenus auprès d\'autres banques. De plus: accédez et contrôlez tous vos flux de paiement, partout dans le monde.'
      },
      sepa: {
        title: 'Tout ce que vous devez savoir sur SEPA et IBAN',
        description: 'Tout ce que vous devez savoir sur SEPA et IBAN, y compris les informations techniques, les fichiers exemples et les formulaires liés aux normes de paiement SEPA se trouve ici.',
        sepaButton: 'SEPA',
        ibanButton: 'IBAN'
      },
      loanCalculator: {
        title: 'Coût d\'un prêt',
        description: 'Entrez le montant que vous souhaitez emprunter et obtenez une réponse immédiatement.',
        why: 'Pourquoi avez-vous besoin d\'un prêt?',
        purposes: {
          car: 'Voiture',
          renovation: 'Rénovation',
          other: 'Autre achat important'
        },
        howMuch: 'Combien souhaitez-vous emprunter?',
        minAmount: 'Le montant minimum est de 5000 €',
        maxAmount: 'Le montant maximum est de 75000 €',
        amountTooLow: 'Le montant doit être d\'au moins 5000 €',
        amountTooHigh: 'Le montant ne peut pas dépasser 75000 €',
        selectTerm: 'Sélectionnez la durée souhaitée',
        year: 'An',
        years: 'Ans',
        min: 'Min.',
        max: 'Max.'
      },
      loanResults: {
        title: 'Voici les coûts minimums et maximums',
        minimum: 'Minimum',
        maximum: 'Maximum',
        monthlyRepayments: 'Remboursements mensuels',
        fixedInterestRate: 'Taux d\'intérêt fixe',
        totalCosts: 'Coûts totaux',
        disclaimer: 'Ce calcul est une estimation. Les remboursements mensuels exacts dépendent de votre situation personnelle.'
      },
      checking: {
        title: 'Compte Chèques Entreprise',
        description: 'Compte professionnel sans frais de tenue mensuels la première année.',
        features: ['Aucune limite de transactions', 'Dépôt de chèques par mobile', 'Paiement de factures en ligne inclus', 'Gestionnaire de compte dédié']
      },
      creditCards: {
        title: 'Cartes de Crédit Entreprise',
        description: 'Cartes professionnelles avec jusqu\'à 1,5% de remise en argent et suivi des dépenses.',
        features: ['1,5% de remise sur les achats', 'Cartes supplémentaires sans frais', 'Rapports mensuels de dépenses', 'Extension de garantie']
      },
      loans: {
        title: 'Prêts aux Entreprises',
        description: 'Financement pour fonds de roulement et équipements de 5 000 € à 500 000 €.',
        features: ['Taux fixes à partir de 7,5%', 'Durées de remboursement 1-10 ans', 'Décision sous 48 heures', 'Chargé de clientèle attitré']
      },
      merchant: {
        title: 'Services Marchands',
        description: 'Acceptation de paiements par carte avec règlement sous 24 heures ouvrées.',
        features: ['Terminaux et logiciels TPE', 'Passerelle de paiement en ligne', 'Paiements sans contact et mobile', 'Fonds disponibles le jour ouvré suivant']
      },
      payroll: {
        title: 'Services de Paie',
        description: 'Traitement complet de la paie avec calculs fiscaux automatiques et portail employé.',
        features: ['Paie mensuelle ou hebdomadaire', 'Retenue et déclaration fiscales', 'Virement direct sur comptes', 'Accès employé à l\'historique']
      },
      treasury: {
        title: 'Gestion de Trésorerie',
        description: 'Outils de gestion de trésorerie pour entreprises aux besoins bancaires complexes.',
        features: ['Relevés de solde en temps réel', 'Protection anti-fraude par positive pay', 'Virements nationaux et internationaux', 'Rapprochement automatisé des comptes']
      },
      cta: {
        title: 'Contactez un Spécialiste Entreprises',
        description: 'Contactez notre équipe pour discuter des services adaptés à votre entreprise.',
        button: 'Demander un Appel'
      },
      learnMore: 'En Savoir Plus'
    },
    loans: {
      title: 'Solutions de Prêts',
      subtitle: 'Taux compétitifs et conditions flexibles pour vous aider à atteindre vos objectifs financiers.',
      home: {
        title: 'Prêts Hypothécaires',
        description: 'Réalisez votre rêve de propriété avec des taux hypothécaires compétitifs.',
        features: ['Taux fixes et ajustables', 'Options de mise de fonds faible', 'Programmes pour acheteurs de première maison', 'Options de refinancement'],
        rate: '5.99%',
        term: '30 ans'
      },
      auto: {
        title: 'Prêts Auto',
        description: 'Partez dans votre véhicule neuf ou d\'occasion avec un financement automobile flexible.',
        features: ['Financement de voitures neuves et d\'occasion', 'Taux compétitifs', 'Durées jusqu\'à 72 mois', 'Préapprobation disponible'],
        rate: '4.49%',
        term: '60 mois'
      },
      student: {
        title: 'Prêts Étudiants',
        description: 'Investissez dans votre avenir avec des solutions de financement de l\'éducation abordables.',
        features: ['Prêts de premier cycle et d\'études supérieures', 'Aucuns frais de montage', 'Modalités de remboursement flexibles', 'Options de libération du cosignataire'],
        rate: '6.25%',
        term: '10 ans'
      },
      personal: {
        title: 'Prêts Personnels',
        description: 'Accédez à des fonds pour tout usage avec une approbation rapide et des conditions flexibles.',
        features: ['Prêts jusqu\'à 50 000 $', 'Aucune garantie requise', 'Financement le jour même disponible', 'Paiements mensuels fixes'],
        rate: '8.99%',
        term: '5 ans'
      },
      homeEquity: {
        title: 'Prêts sur Valeur Domiciliaire',
        description: 'Exploitez la valeur nette de votre maison pour les rénovations, la consolidation de dettes ou les dépenses importantes.',
        features: ['Empruntez jusqu\'à 85 % de la valeur de la maison', 'Taux d\'intérêt fixes', 'Intérêts déductibles d\'impôt', 'Aucune pénalité de remboursement anticipé'],
        rate: '7.25%',
        term: '15 ans'
      },
      business: {
        title: 'Prêts aux Petites Entreprises',
        description: 'Développez votre entreprise avec des solutions de financement sur mesure pour les entrepreneurs.',
        features: ['Prêts garantis par la SBA', 'Marges de crédit', 'Financement d\'équipement', 'Prêts de fonds de roulement'],
        rate: '7.99%',
        term: '10 ans'
      },
      calculator: {
        title: 'Calculateur de Prêt',
        description: 'Calculez vos paiements mensuels et voyez combien vous pouvez vous permettre.',
        button: 'Utiliser le Calculateur'
      },
      preApproval: {
        title: 'Préapprobation Rapide',
        description: 'Obtenez une préapprobation en quelques minutes et magasinez en toute confiance.',
        button: 'Obtenir une Préapprobation'
      },
      startingRate: 'Taux Initial:',
      termLabel: 'Durée:',
      applyNow: 'Postuler Maintenant'
    },
    creditCards: {
      title: 'Cartes de Crédit',
      subtitle: 'Trouvez la carte de crédit parfaite pour correspondre à votre style de vie et maximiser vos récompenses.',
      rewardsPlus: {
        title: 'Carte de Crédit',
        description: 'Gagnez un remboursement illimité sur chaque achat sans plafond ni expiration.',
        features: ['3 % de remise sur les restaurants', '2 % de remise sur l\'essence', '1 % de remise sur tous les autres achats', '200 $ de prime d\'inscription']
      },
      travelElite: {
        title: 'Carte Platinum',
        description: 'Débloquez des avantages de voyage premium et gagnez des miles sur chaque dollar dépensé.',
        features: ['3X miles sur les voyages et restaurants', '50 000 miles de bonus', 'Accès aux salons d\'aéroport', 'Aucuns frais de transaction à l\'étranger']
      },
      everydayCash: {
        title: 'Carte de Débit',
        description: 'Récompenses en argent simples pour les dépenses quotidiennes sans catégories compliquées.',
        features: ['1,5 % de remise sur tous les achats', 'Aucuns frais annuels', '150 $ de prime d\'inscription', 'Surveillance gratuite du pointage de crédit']
      },
      balanceTransfer: {
        title: 'Carte Prépayée',
        description: 'Remboursez vos dettes plus rapidement avec un TAP promotionnel de 0 % sur les transferts de solde.',
        features: ['0 % TAP pendant 18 mois', 'Aucuns frais de transfert de solde', '1 % de remise sur les achats', 'Outils de planification financière']
      },
      secured: {
        title: 'Carte Prépayée Sécurisée',
        description: 'Construisez ou reconstruisez votre crédit avec une carte sécurisée garantie par votre dépôt.',
        features: ['Ligne de crédit de 200 $ à 5 000 $', 'Passez à une carte non sécurisée', 'Rapports à toutes les agences de crédit', 'Aucuns frais annuels']
      },
      premium: {
        title: 'Carte Gold',
        description: 'Avantages d\'élite et privilèges de luxe pour nos clients les plus précieux.',
        features: ['5X points sur les catégories sélectionnées', '100 000 points de bonus', 'Service de conciergerie 24/7', 'Assurance voyage et achats']
      },
      apr: 'TAP:',
      annualFee: 'Frais Annuels:',
      applyNow: 'Postuler Maintenant',
      calculator: {
        title: 'Calculateur de Récompenses',
        subtitle: 'Estimez vos récompenses annuelles en fonction de vos dépenses',
        monthlySpending: 'Dépenses Mensuelles',
        perYear: '/an',
        rewardsPlusLabel: 'Carte de Crédit (1,5 % de remise)',
        everydayCashLabel: 'Carte de Débit (3 % épicerie, 2 % essence)',
        travelEliteLabel: 'Carte Platinum (3x points sur les voyages)'
      },
      protection: {
        title: 'Avantages de Protection de Carte',
        zeroFraud: {
          title: 'Responsabilité Zéro en Cas de Fraude',
          description: 'Non responsable des transactions non autorisées'
        },
        purchaseProtection: {
          title: 'Protection des Achats',
          description: 'Couverture pour les articles endommagés ou volés dans les 90 jours'
        },
        extendedWarranty: {
          title: 'Garantie Prolongée',
          description: 'Ajoute une année supplémentaire à la garantie du fabricant'
        },
        travelInsurance: {
          title: 'Assurance Voyage',
          description: 'Couverture annulation de voyage et retard de bagages'
        },
        fraudMonitoring: {
          title: 'Surveillance Fraude 24/7',
          description: 'Alertes en temps réel pour activité suspecte'
        }
      },
      comparison: {
        title: 'Comparaison des Cartes',
        feature: 'Caractéristique',
        rewardsPlusName: 'Carte de Crédit',
        travelEliteName: 'Carte Platinum',
        everydayCashName: 'Carte de Débit',
        annualFee: 'Frais Annuels',
        rewardsRate: 'Taux de Récompenses',
        signUpBonus: 'Bonus d\'Inscription',
        travelInsurance: 'Assurance Voyage',
        airportLounge: 'Accès Salon Aéroport',
        purchaseProtection: 'Protection des Achats'
      },
      cta: {
        title: 'Pas Sûr de Quelle Carte Vous Convient?',
        description: 'Répondez à notre quiz rapide pour trouver la carte de crédit parfaite en fonction de vos habitudes de dépenses et de vos objectifs financiers.',
        button: 'Trouver Votre Carte'
      }
    },
    investments: {
      title: 'Services d\'Investissement',
      subtitle: 'Bâtissez votre patrimoine pour l\'avenir avec des solutions d\'investissement complètes adaptées à vos objectifs financiers.',
      hero: {
        title: 'Investissements chez Aareal Bank AG',
        subtitle: 'Commencez à constituer votre capital'
      },
      riskWarning: 'Investir comporte des risques. Vous pourriez perdre (une partie de) l\'argent que vous avez investi.',
      bonus: {
        title: 'Bonus jusqu\'à 100€ lorsque vous investissez',
        description: 'Vous pensez à investir? Commencez avec nous et obtenez un bonus. Ouvrez votre premier compte d\'investissement avant le 31 mars 2026 et effectuez 4 investissements automatiques. Si vous remplissez les conditions de la promotion, vous gagnerez un bonus de 50€, 75€ ou 100€. Veuillez noter: vous pourriez perdre tout ou partie de votre investissement initial.'
      },
      winterBonus: {
        title: 'Bonus d\'Hiver',
        description: 'Commencez avec la Gestion de Portefeuille ou effectuez un dépôt supplémentaire avant le 31 mars 2026 et gagnez un bonus.',
        newClients: 'Pour les nouveaux clients: obtenez jusqu\'à 1 250€ de bonus si vous commencez la Gestion de Portefeuille. Lisez les termes et conditions.',
        existingClients: 'Pour les clients existants de la Gestion de Portefeuille: obtenez 500€ si vous déposez 50 000€ supplémentaires, ou 750€ si vous déposez 250 000€. Lisez les termes et conditions.',
        note: 'Veuillez noter: investir comporte des risques. Vous pourriez perdre tout ou partie de votre investissement initial.'
      },
      riskInfo: {
        title: 'Investir comporte des risques',
        description: 'Investir comporte des risques. Vous pourriez perdre (une partie de) l\'argent que vous avez investi. Si vous allez investir, il est important que vous en soyez conscient. Investissez avec de l\'argent dont vous pouvez vous passer. En savoir plus sur les risques associés aux investissements.'
      },
      whyInvest: {
        title: 'Pourquoi investir avec Aareal Bank AG?',
        tools: {
          title: 'Outils astucieux, perspectives et conseils',
          description: 'Nous vous guiderons en ligne, vous aiderons à faire vos propres choix ou gérerons vos investissements en votre nom.'
        },
        beginnings: {
          title: 'Nous sommes là pour chaque nouveau départ',
          description: 'Êtes-vous un investisseur chevronné ou est-ce votre première fois? Nous avons des produits pour les investisseurs expérimentés et novices.'
        },
        investors: {
          title: 'Plus de 225 000 personnes investissent déjà avec nous',
          description: 'Chaque jour, nous accueillons de nouveaux investisseurs qui souhaitent commencer à constituer leur capital.'
        }
      },
      performance: {
        title: 'Performance des Portefeuilles',
        disclaimer: 'Les performances passées ne garantissent pas les résultats futurs. Les rendements indiqués sont hypothétiques.',
        portfolioType: 'Type de Portefeuille',
        oneYear: 'Rendement 1 An',
        fiveYear: 'Rendement 5 Ans',
        riskLevel: 'Niveau de Risque',
        conservative: 'Portefeuille Conservateur',
        moderate: 'Portefeuille Modéré',
        aggressive: 'Portefeuille Agressif',
        low: 'Faible',
        medium: 'Moyen',
        high: 'Élevé'
      },
      cta: {
        title: 'Prêt à Commencer à Investir?',
        description: 'Planifiez une consultation avec l\'un de nos conseillers en investissement pour discuter de vos objectifs financiers.',
        schedule: 'Planifier une Consultation',
        resources: 'Voir les Ressources'
      }
    },
    onlineBanking: {
      title: 'Connexion Banque en Ligne',
      subtitle: 'Accédez à vos comptes en toute sécurité',
      email: 'Adresse Courriel',
      emailPlaceholder: 'votre.courriel@exemple.com',
      password: 'Mot de Passe',
      passwordPlaceholder: 'Entrez votre mot de passe',
      remember: 'Se souvenir de moi',
      forgot: 'Mot de passe oublié?',
      signIn: 'Se Connecter',
      noAccount: 'Vous n\'avez pas de compte?',
      enroll: 'Inscrivez-vous Maintenant',
      secure: 'Votre connexion est sécurisée et cryptée',
      anytime: 'Banque à Tout Moment, N\'importe Où',
      description: 'Gérez vos finances avec notre plateforme bancaire en ligne sécurisée.',
      transfers: {
        title: 'Transferts Instantanés',
        description: 'Transférez de l\'argent entre comptes ou envoyez à vos amis et famille instantanément.'
      },
      statements: {
        title: 'Relevés Numériques',
        description: 'Accédez et téléchargez vos relevés de compte à tout moment, sans papier et en toute sécurité.'
      },
      security: {
        title: 'Sécurité Avancée',
        description: 'L\'authentification multifacteur et le cryptage protègent vos comptes.'
      }
    },
    rates: {
      title: 'Taux d\'Intérêt',
      subtitle: 'Comparez nos taux compétitifs pour les comptes d\'épargne, certificats de dépôt et prêts.',
      effective: 'Taux en vigueur au 6 février 2026. Sujets à changement sans préavis.',
      header: {
        title: 'Centre des Taux et Frais',
        description: 'Transparence totale sur tous nos taux et frais. Nous croyons que vous méritez de savoir exactement ce que vous payez.',
        noHiddenFees: 'Aucuns Frais Cachés',
        fullDisclosure: 'Divulgation Complète',
        downloadPDF: 'Télécharger le Barème des Frais (PDF)',
        effectiveDate: 'En vigueur au'
      },
      tabs: {
        interestRates: 'Taux d\'Intérêt',
        accountFees: 'Frais de Compte',
        serviceFees: 'Frais de Service',
        cardFees: 'Frais de Carte',
        loanFees: 'Frais de Prêt',
        feeCalculator: 'Calculateur de Frais'
      },
      savings: {
        title: 'Taux d\'Épargne et Certificats',
        product: 'Produit',
        apy: 'TAP',
        minBalance: 'Solde Minimum',
        trend: 'Tendance',
        savingsAccount: 'Compte d\'Épargne',
        moneyMarket: 'Compte du Marché Monétaire',
        cd6: 'Certificat 6 Mois',
        cd1: 'Certificat 1 An',
        cd5: 'Certificat 5 Ans',
        openAccount: 'Ouvrir un Compte d\'Épargne'
      },
      loan: {
        title: 'Taux de Prêt',
        product: 'Produit',
        apr: 'TAP',
        details: 'Détails',
        trend: 'Tendance',
        asLowAs: 'Aussi bas que',
        mortgage30: 'Prêt Hypothécaire (30 ans fixe)',
        mortgage15: 'Prêt Hypothécaire (15 ans fixe)',
        homeEquity: 'Prêt sur Valeur Domiciliaire',
        autoNew: 'Prêt Auto (Neuf)',
        autoUsed: 'Prêt Auto (Usagé)',
        personal: 'Prêt Personnel',
        apply: 'Demander un Prêt'
      },
      cd: {
        title: 'Taux des Certificats de Dépôt',
        term: 'Terme du Certificat',
        minDeposit: 'Dépôt Minimum'
      },
      atm: {
        title: 'Frais de Guichet Automatique',
        transactionType: 'Type de Transaction',
        inNetwork: 'Dans le Réseau',
        outOfNetwork: 'Hors Réseau',
        international: 'International'
      },
      investment: {
        title: 'Frais de Gestion de Patrimoine et d\'Investissement',
        service: 'Service',
        managementFee: 'Frais de Gestion',
        minInvestment: 'Investissement Minimum',
        description: 'Description'
      },
      labels: {
        free: 'GRATUIT',
        annually: 'annuellement',
        perTrade: 'par transaction',
        perHour: 'par heure',
        varies: 'Varie',
        none: 'Aucun',
        page: 'Page',
        of: 'de'
      },
      commitment: {
        title: 'Notre Engagement envers la Transparence',
        noHidden: {
          title: 'Aucuns Frais Cachés',
          description: 'Chaque frais est clairement divulgué dès le départ. Nous ne vous surprenons jamais avec des frais inattendus.'
        },
        waivers: {
          title: 'Dispenses de Frais Disponibles',
          description: 'De nombreux frais peuvent être annulés en respectant des exigences simples comme le maintien de soldes minimums.'
        },
        current: {
          title: 'Toujours à Jour',
          description: 'Ce barème de frais est mis à jour en temps réel. Vous voyez toujours nos taux et frais actuels.'
        }
      },
      feeComparison: {
        accountComparison: 'Comparaison de Comptes',
        clearSelection: 'Effacer la Sélection',
        selectUpTo: 'Sélectionnez jusqu\'à 3 comptes à comparer.',
        selected: 'sélectionné',
        feature: 'Caractéristique',
        monthlyFee: 'Frais Mensuels',
        feeWaiver: 'Dispense de Frais',
        minBalance: 'solde minimum',
        minOpeningDeposit: 'Dépôt d\'Ouverture Minimum',
        interestRate: 'Taux d\'Intérêt (TAP)',
        overdraftFee: 'Frais de Découvert',
        nsfFee: 'Frais de Provision Insuffisante',
        paperStatementFee: 'Frais de Relevé Papier',
        perMonth: '/mois',
        excessWithdrawalFee: 'Frais de Retrait Excédentaire',
        na: 'N/D'
      },
      serviceFees: {
        service: 'Service',
        fee: 'Frais',
        description: 'Description',
        feeWaiver: 'Dispense de Frais',
        noWaiverAvailable: 'Aucune dispense disponible'
      },
      cardFees: {
        creditCardFees: 'Frais de Carte de Crédit',
        debitCardFees: 'Frais de Carte de Débit',
        aprPurchases: 'TAP - Achats',
        aprBalanceTransfers: 'TAP - Transferts de Solde',
        aprCashAdvances: 'TAP - Avances de Fonds',
        annualFee: 'Frais Annuels',
        foreignTransactionFee: 'Frais de Transaction Étrangère',
        balanceTransferFee: 'Frais de Transfert de Solde',
        cashAdvanceFee: 'Frais d\'Avance de Fonds',
        latePaymentFee: 'Frais de Retard de Paiement',
        overLimitFee: 'Frais de Dépassement de Limite',
        replacementCard: 'Carte de Remplacement',
        variableAprDisclaimer: 'TAP variable basé sur la solvabilité. Les taux indiqués sont des exemples représentatifs. Votre taux réel peut être plus élevé ou plus bas selon votre profil de crédit.'
      },
      loanFees: {
        mortgageFees: 'Frais de Prêt Hypothécaire',
        homeEquityFees: 'Frais de Prêt sur Valeur Domiciliaire',
        autoFees: 'Frais de Prêt Auto',
        personalFees: 'Frais de Prêt Personnel',
        interestRate: 'Taux d\'Intérêt',
        originationFee: 'Frais d\'Origination',
        ofLoan: 'du prêt',
        applicationFee: 'Frais de Demande',
        appraisalFee: 'Frais d\'Évaluation',
        creditReportFee: 'Frais de Rapport de Crédit',
        estimatedClosingCosts: 'Frais de Clôture Estimés',
        latePaymentFee: 'Frais de Retard de Paiement',
        prepaymentPenalty: 'Pénalité de Remboursement Anticipé',
        closingCostsNote: 'Les frais de clôture réels peuvent varier en fonction de l\'emplacement de la propriété, du montant du prêt et d\'autres facteurs. Il s\'agit d\'une estimation à des fins de planification.',
        note: 'Remarque'
      },
      calculator: {
        title: 'Calculateur de Frais',
        description: 'Estimez vos frais bancaires mensuels et annuels en fonction de vos habitudes d\'utilisation.',
        accountType: 'Type de Compte',
        checkingAccount: 'Compte Chèque',
        savingsAccount: 'Compte d\'Épargne',
        avgMonthlyBalance: 'Solde Mensuel Moyen',
        monthlyTransactions: 'Transactions Mensuelles',
        overdraftsPerMonth: 'Découverts par Mois',
        outOfNetworkATM: 'Retraits DAB Hors Réseau',
        firstFree: 'Les 4 premiers sont gratuits',
        wireTransfersPerMonth: 'Virements Bancaires par Mois',
        paperStatements: 'Recevoir des relevés papier (5$/mois)',
        estimatedMonthlyFees: 'Frais Mensuels Estimés',
        annualProjection: 'Projection Annuelle',
        feeBreakdown: 'Détail des Frais',
        monthlyMaintenanceFee: 'Frais de gestion mensuels',
        overdraftFees: 'Frais de découvert',
        outOfNetworkATMFees: 'Frais de DAB hors réseau',
        paperStatementFee: 'Frais de relevé papier',
        wireTransferFees: 'Frais de virement bancaire',
        noFees: 'Aucuns frais selon votre utilisation!',
        tip: 'Astuce',
        tipMessage: 'Maintenez un solde de 2 500 $ ou plus pour annuler les frais mensuels sur les comptes chèques Premium.'
      },
      disclaimer: {
        title: 'Information Importante',
        apy: 'Le taux annuel en pourcentage (TAP) et le taux annuel effectif sont exacts à la date d\'entrée en vigueur et sont sujets à changement sans préavis.',
        fees: 'Les frais peuvent réduire les gains sur les comptes d\'épargne.',
        penalty: 'Une pénalité peut être imposée pour un retrait anticipé sur les certificats de dépôt.',
        credit: 'Les taux de prêt indiqués sont pour les emprunteurs ayant un excellent crédit. Votre taux peut varier en fonction de l\'historique de crédit et d\'autres facteurs.'
      },
      dbTranslations: {
        atmFeeTypes: {
          'ATM Withdrawal': 'Retrait au Guichet Automatique',
          'ATM Deposit': 'Dépôt au Guichet Automatique',
          'ATM Transfer': 'Transfert au Guichet Automatique',
          'ATM Balance Inquiry': 'Consultation de Solde au GAB'
        },
        serviceCategories: {
          'statements': 'Relevés',
          'deposits': 'Dépôts',
          'transfers': 'Transferts',
          'cards': 'Cartes',
          'checks': 'Chèques',
          'closures': 'Fermetures de Compte',
          'collections': 'Collections',
          'legal': 'Services Juridiques'
        },
        loanTypes: {
          'mortgage': 'Hypothèque',
          'auto': 'Automobile',
          'home_equity': 'Valeur Domiciliaire',
          'personal': 'Personnel'
        }
      }
    },
    security: {
      title: 'Centre de Sécurité',
      subtitle: 'Votre sécurité est notre priorité absolue. Découvrez comment nous protégeons vos comptes et ce que vous pouvez faire pour rester en sécurité.',
      howWeProtect: 'Comment Nous Vous Protégeons',
      encryption: {
        title: 'Chiffrement',
        description: 'Le chiffrement SSL 256 bits de qualité militaire protège toutes vos sessions bancaires en ligne et transferts de données.'
      },
      fraudMonitoring: {
        title: 'Surveillance de Fraude',
        description: 'Surveillance des transactions 24h/24, 7j/7 avec détection de fraude par IA vous alerte des activités suspectes.'
      },
      alerts: {
        title: 'Alertes de Compte',
        description: 'Personnalisez les alertes pour les transactions importantes, les soldes faibles et les activités inhabituelles.'
      },
      mfa: {
        title: 'Authentification Multifacteur',
        description: 'Ajoutez une couche de sécurité supplémentaire avec la connexion biométrique et les codes à usage unique.'
      },
      bestPractices: {
        title: 'Meilleures Pratiques de Sécurité',
        password: {
          title: 'Utilisez des Mots de Passe Forts',
          description: 'Créez des mots de passe uniques d\'au moins 12 caractères, mélangeant majuscules, minuscules, chiffres et symboles.'
        },
        twoFactor: {
          title: 'Activez l\'Authentification à Deux Facteurs',
          description: 'Utilisez toujours l\'authentification à deux facteurs lorsqu\'elle est disponible pour ajouter une protection supplémentaire.'
        },
        verify: {
          title: 'Vérifiez Avant de Cliquer',
          description: 'Ne cliquez jamais sur des liens dans des courriels suspects. Saisissez plutôt l\'adresse de notre site directement dans votre navigateur.'
        },
        monitor: {
          title: 'Surveillez Vos Comptes',
          description: 'Examinez régulièrement l\'activité de votre compte et signalez immédiatement toute transaction non autorisée.'
        },
        update: {
          title: 'Maintenez les Logiciels à Jour',
          description: 'Utilisez toujours la dernière version de votre navigateur et de vos applications mobiles pour une sécurité optimale.'
        },
        secure: {
          title: 'Utilisez des Connexions Sécurisées',
          description: 'Évitez le Wi-Fi public lors de l\'accès à vos comptes. Utilisez un VPN si vous devez vous connecter à distance.'
        }
      },
      fraud: {
        title: 'Signalez la Fraude Immédiatement',
        description: 'Si vous soupçonnez une activité non autorisée sur votre compte ou si vous avez été victime de fraude, contactez-nous immédiatement.',
        report: 'Signaler Fraude: 1-800-FRAUDE',
        tips: 'Conseils de Prévention'
      },
      fdic: {
        title: 'Assuré FDIC',
        description: 'Vos dépôts sont assurés par la Federal Deposit Insurance Corporation (FDIC) jusqu\'à 250 000 $ par déposant, par banque assurée.',
        disclaimer: 'Membre FDIC. Prêteur pour l\'égalité des chances en matière de logement.'
      }
    },
    atmLocator: {
      title: 'Localisateur de Succursales et GAB',
      subtitle: 'Trouvez la succursale ou le GAB Aareal Bank AG le plus proche pour répondre à vos besoins bancaires.',
      search: 'Entrez l\'adresse, la ville ou le code postal',
      find: 'Trouver des Emplacements',
      servicesAvailable: 'Services Disponibles:',
      getDirections: 'Obtenir l\'Itinéraire',
      details: 'Détails',
      mainBranch: 'Succursale Principale',
      northBranch: 'Succursale Nord',
      westBranch: 'Succursale Ouest',
      eastATM: 'GAB Est',
      southBranch: 'Succursale Sud',
      airportATM: 'GAB Aéroport',
      downtown: 'Centre-ville',
      northDistrict: 'Quartier Nord',
      westEnd: 'Quartier Ouest',
      eastDistrict: 'Quartier Est',
      southDistrict: 'Quartier Sud',
      airport: 'Aéroport',
      terminal: 'Terminal 1, Aéroport International',
      hours: {
        weekdays: 'Lun-Ven: 9h-17h, Sam: 9h-14h',
        weekdaysOnly: 'Lun-Ven: 9h-17h',
        extended: 'Lun-Ven: 9h-18h, Sam: 9h-13h',
        south: 'Lun-Ven: 10h-18h, Sam: 10h-14h',
        alwaysOpen: '24h/24, 7j/7'
      },
      services: {
        full: 'Services bancaires complets',
        atm: 'GAB disponible',
        safeDeposit: 'Coffres-forts',
        driveThrough: 'Service au volant',
        business: 'Banque d\'affaires',
        atmOnly: 'GAB seulement',
        access24: 'Accès 24 heures',
        notary: 'Services notariés',
        currency: 'Bureau de change à proximité'
      },
      cta: {
        title: 'Vous ne Trouvez pas d\'Emplacement?',
        description: 'Notre équipe de service client est là pour vous aider à trouver la succursale ou le GAB le plus proche.',
        button: 'Contactez-Nous'
      }
    },
    careers: {
      title: 'Carrières à Aareal Bank AG',
      subtitle: 'Rejoignez notre équipe de professionnels dévoués et bâtissez une carrière enrichissante dans le secteur bancaire.',
      whyWork: 'Pourquoi Travailler Avec Nous?',
      health: {
        title: 'Santé et Bien-être',
        description: 'Couverture médicale, dentaire et visuelle complète pour vous et votre famille.'
      },
      retirement: {
        title: 'Planification de Retraite',
        description: '401(k) avec contribution généreuse de l\'entreprise et ressources de planification financière.'
      },
      development: {
        title: 'Développement Professionnel',
        description: 'Remboursement des frais de scolarité, programmes de formation et opportunités d\'avancement.'
      },
      balance: {
        title: 'Équilibre Travail-Vie',
        description: 'Horaires flexibles, options de travail à distance et congés payés généreux.'
      },
      openings: {
        title: 'Postes Disponibles',
        positions: 'Postes',
        personalBanker: 'Conseiller Bancaire Personnel',
        businessSpecialist: 'Spécialiste en Banque d\'Affaires',
        advisor: 'Conseiller Financier',
        loanOfficer: 'Agent de Prêt',
        customerService: 'Représentant du Service Client',
        itAnalyst: 'Analyste de Systèmes Informatiques',
        marketingCoord: 'Coordonnateur Marketing',
        branchManager: 'Directeur de Succursale',
        retailBanking: 'Banque de Détail',
        businessBanking: 'Banque d\'Affaires',
        investmentServices: 'Services d\'Investissement',
        lending: 'Prêts',
        customerSupport: 'Service Client',
        technology: 'Technologie',
        marketingDept: 'Marketing',
        management: 'Gestion',
        multiple: 'Plusieurs Emplacements',
        mainBranch: 'Succursale Principale',
        downtown: 'Centre-ville',
        northBranch: 'Succursale Nord',
        callCenter: 'Centre d\'Appels',
        headquarters: 'Siège Social',
        westBranch: 'Succursale Ouest',
        fullTime: 'Temps Plein',
        apply: 'Postuler Maintenant'
      },
      cta: {
        title: 'Vous ne Voyez pas le Bon Poste?',
        description: 'Soumettez votre CV et nous vous garderons à l\'esprit pour de futures opportunités correspondant à vos compétences et intérêts.',
        button: 'Soumettre une Candidature Générale'
      },
      values: {
        title: 'Nos Valeurs Fondamentales',
        missionDriven: {
          title: 'Guidés par la Mission',
          description: 'Nous sommes engagés à favoriser la réussite financière des particuliers et des entreprises dans le monde entier.'
        },
        innovation: {
          title: 'L\'Innovation d\'abord',
          description: 'Nous adoptons les nouvelles technologies et approches pour offrir des solutions bancaires de pointe.'
        },
        growth: {
          title: 'Mentalité de Croissance',
          description: 'Nous investissons dans le développement professionnel de notre équipe avec des opportunités d\'apprentissage continu.'
        },
        diversity: {
          title: 'Diversité et Inclusion',
          description: 'Nous célébrons la diversité et créons un environnement où chacun peut s\'épanouir.'
        }
      },
      growth: {
        title: 'Évolution de Carrière chez Aareal Bank AG',
        stats: {
          promotions: 'Promotions Internes',
          budget: 'Budget de Formation Annuel',
          programs: 'Programmes de Formation'
        },
        pathways: {
          title: 'Parcours de Développement de Carrière',
          entry: 'Postes de débutant avec formation complète et programmes de mentorat',
          mid: 'Rôles de niveau intermédiaire avec développement du leadership et opportunités de spécialisation',
          senior: 'Postes seniors avec coaching exécutif et expérience de prise de décision stratégique',
          executive: 'Opportunités de direction pour les leaders éprouvés favorisant l\'excellence organisationnelle'
        }
      },
      companyStats: {
        employees: 'Employés Dans le Monde',
        satisfaction: 'Satisfaction des Employés',
        retention: 'Taux de Rétention'
      }
    },
    whoWeServe: {
      title: 'Qui Nous Servons',
      subtitle: 'Permettre aux institutions financières de disposer de solutions bancaires et crypto innovantes',
      hero: {
        title: 'Avec Qui Nous Travaillons',
        subtitle: 'Une banque privée construite autour de vos besoins'
      },
      intro: {
        title: 'Solutions Sur Mesure pour Chaque Institution',
        description: 'Nous fournissons des services financiers complets à une gamme diversifiée d\'institutions, des banques traditionnelles aux plateformes crypto de pointe, le tout soutenu par notre infrastructure de qualité institutionnelle et notre conformité réglementaire.',
        mainDescription: 'Nous travaillons avec des particuliers fortunés qui ont des besoins financiers spécifiques. Nos services de banque privée sont disponibles pour les particuliers, les familles et les chefs d\'entreprise disposant d\'actifs investissables d\'un million d\'euros ou plus. Pour les clients disposant d\'actifs de 25 millions d\'euros ou plus, nous proposons une gestion de patrimoine qui répond aux défis particuliers liés à un patrimoine important.'
      },
      sections: {
        lifeStage: {
          title: 'Gérer Son Patrimoine à Travers les Changements de la Vie',
          description: 'Vos priorités financières évoluent au fil de votre vie. Vous planifiez peut-être une retraite anticipée, envisagez une résidence secondaire, ou cherchez à concilier carrière et vie de famille. Nous vous aidons à traverser ces transitions et à prendre des décisions qui soutiennent vos objectifs à chaque étape.'
        },
        business: {
          title: 'Pour les Chefs d\'Entreprise et Entrepreneurs',
          description: 'Diriger une entreprise demande de la concentration. Il est facile de perdre de vue vos finances personnelles quand vous construisez une entreprise. Nous surveillons à la fois votre situation financière professionnelle et personnelle, en vous aidant à repérer les opportunités et à planifier l\'avenir. Nous travaillons également avec d\'anciens chefs d\'entreprise qui ont vendu leur société.'
        },
        exceptionalWealth: {
          title: 'Gérer un Patrimoine Important',
          description: 'Lorsque vos actifs atteignent 25 millions d\'euros ou plus, la complexité augmente considérablement. Notre service de gestion de patrimoine privé gère ces défis en mettant l\'accent sur la confidentialité pour vous et votre famille, et une vision à long terme de la préservation du patrimoine à travers les générations.'
        }
      },
      segments: {
        banks: {
          title: 'Banques',
          description: 'Élargissez vos services bancaires avec une offre crypto sécurisée et réglementée, incluant Trading, Staking et Custody'
        },
        assetManagers: {
          title: 'Gestionnaires d\'Actifs',
          description: 'Enrichissez votre offre avec des investissements crypto via une banque crypto réglementée.'
        },
        fintechs: {
          title: 'Fintechs',
          description: 'Débloquez les services bancaires traditionnels et crypto pour vos clients soutenus par une infrastructure de qualité institutionnelle.'
        },
        exchanges: {
          title: 'Échanges Crypto',
          description: 'Offrez une garde hautement sécurisée pour les cryptos de vos clients grâce à nos solutions de stockage à chaud et à froid.'
        },
        casps: {
          title: 'CASPs',
          description: 'Accédez à une infrastructure bancaire, de garde et de trading de qualité institutionnelle pour offrir des services crypto conformes à vos clients.'
        }
      },
      specialServices: {
        title: 'Services Spécialisés',
        description: 'Nous avons l\'expérience de travailler avec des clients dans des situations spécifiques qui ont des besoins et des questions particuliers.',
        partners: {
          title: 'Associés et Cadres Supérieurs',
          description: 'En tant qu\'associé dans un cabinet professionnel ou cadre dans une société cotée, vous avez des considérations financières spécifiques. Vous recherchez l\'excellence dans vos finances personnelles comme vous le faites professionnellement. Nous comprenons votre situation et pouvons vous aider à construire et gérer votre patrimoine.'
        },
        expats: {
          title: 'Clients Internationaux',
          description: 'Vivre et travailler à l\'étranger apporte une complexité financière. Notre équipe de banque privée internationale connaît les défis auxquels vous êtes confronté : impôts, juridictions multiples, questions de change. Nous fournissons des conseils clairs et des solutions qui fonctionnent au-delà des frontières.'
        },
        associations: {
          title: 'Organisations à But Non Lucratif et Fondations',
          description: 'Nous travaillons avec des associations, des fondations et des organisations religieuses qui gèrent des actifs importants. Nos chargés de relations comprennent votre mission et apportent leur expertise financière et leurs connexions pour vous aider à atteindre vos objectifs.'
        },
        familyOffices: {
          title: 'Support pour Family Office',
          description: 'Si vous représentez un family office, vous savez que votre rôle est de garantir que vos clients reçoivent un service bancaire privé d\'excellence et discret. Notre desk Family Office partage cet engagement et peut s\'associer avec vous pour servir vos clients.'
        }
      },
      cta: {
        title: 'Intéressé par une Collaboration?',
        description: 'Discutons pour voir si nos services de banque privée correspondent à votre situation.',
        consultation: 'Planifier un Appel',
        learnMore: 'En Savoir Plus'
      },
      stats: {
        partners: 'Institutions Partenaires',
        assets: 'Actifs sous Garde',
        support: 'Support et Surveillance'
      }
    },
    ourApproachPage: {
      title: 'Notre façon de travailler',
      subtitle: 'Nous vous aidons à gérer votre patrimoine et planifier l\'avenir',
      intro: {
        paragraph1: 'Gérer un patrimoine apporte des opportunités, mais aussi des défis personnels et professionnels. Ceux-ci nécessitent une attention et des solutions personnalisées.',
        paragraph2: 'Nous travaillons avec vous pour comprendre votre situation financière et vous aider à prendre des décisions éclairées concernant votre patrimoine.'
      },
      rightPartner: {
        title: 'Votre banquier personnel',
        description: 'Votre situation financière nécessite une attention personnelle. Votre banquier privé est votre principal point de contact pour les questions concernant vos finances et votre patrimoine. Nous vous mettons en relation avec le banquier qui a de l\'expérience avec des situations comme la vôtre. Avec des années d\'expérience auprès de familles fortunées et d\'entrepreneurs, votre banquier privé peut vous aider à gérer les questions de gestion de patrimoine et de planification financière.'
      },
      testimonial: {
        quote: 'Je me suis senti écouté et compris, et c\'était très important pour avancer',
        author: 'Hans Gitsels',
        role: 'Client | Aareal Bank AG'
      },
      atYourService: {
        title: 'Comment nous vous aidons',
        privateBanker: {
          title: 'Un point de contact dédié',
          description: 'Votre banquier privé est plus qu\'un conseiller financier. C\'est quelqu\'un qui comprend votre situation et peut vous aider avec toutes vos questions financières.'
        },
        expertise: {
          title: 'Accès à des spécialistes',
          description: 'Nous combinons l\'expérience avec la connaissance actuelle du marché pour vous fournir des informations pertinentes. Que vous traitiez d\'une transition d\'entreprise ou d\'une planification financière complexe, nos spécialistes peuvent vous aider.'
        },
        tailored: {
          title: 'Solutions adaptées à votre situation',
          description: 'Nous savons que vos besoins financiers vous sont propres. C\'est pourquoi nous adaptons notre approche à votre situation. Nous commençons généralement par la planification patrimoniale afin de pouvoir traiter vos priorités immédiatement.'
        }
      },
      familyBanking: {
        title: 'Banque privée pour votre famille',
        description: 'Votre famille peut également travailler avec nous. Nous aidons avec les problèmes auxquels les familles fortunées sont souvent confrontées. Nous pouvons faciliter les conversations avec vos enfants adultes sur le patrimoine familial et vos plans pour l\'avenir. Nous aidons également à préparer les jeunes adultes à gérer un patrimoine important.'
      },
      alsoOfInterest: {
        title: 'Cela pourrait également vous intéresser',
        events: {
          title: 'Événements',
          description: 'Nos événements vous donnent l\'occasion de rencontrer d\'autres personnes et de partager expériences et connaissances.'
        },
        secureBanking: {
          title: 'Sécurité',
          description: 'Nous travaillons pour sécuriser vos services bancaires en ligne grâce à plusieurs mesures de protection et de prévention de la fraude.'
        },
        betterWorld: {
          title: 'Contribuer à un monde meilleur',
          description: 'Ensemble, nous pouvons faire une différence positive, maintenant et pour les générations futures.'
        }
      }
    },
    financialEducation: {
      title: 'Centre d\'Éducation Financière',
      subtitle: 'Donnez-vous les moyens avec la connaissance. Apprenez la budgétisation, l\'épargne, l\'investissement et la gestion du crédit grâce à notre bibliothèque complète d\'articles, de vidéos et d\'outils interactifs.',
      search: 'Rechercher des articles, sujets ou mots-clés...',
      tabs: {
        articles: 'Articles Éducatifs',
        news: 'Actualités Financières'
      },
      categories: {
        all: 'Tous les Sujets',
        budgeting: 'Budgétisation',
        saving: 'Épargne',
        investing: 'Investissement',
        credit: 'Crédit'
      },
      newsCategories: {
        all: 'Toutes les Actualités',
        banking: 'Bancaire',
        economy: 'Économie',
        crypto: 'Crypto'
      },
      articles: {
        title: 'Tous les Articles',
        allArticles: 'Tous les Articles',
        categoryArticles: {
          budgeting: 'Articles sur le Budget',
          saving: 'Articles sur l\'Épargne',
          investing: 'Articles sur l\'Investissement',
          credit: 'Articles sur le Crédit'
        },
        featured: 'EN VEDETTE',
        readArticle: 'Lire l\'Article',
        closeArticle: 'Fermer l\'Article',
        minRead: 'min de lecture',
        noArticles: 'Aucun article trouvé correspondant à vos critères.',
        difficulty: {
          beginner: 'DÉBUTANT',
          intermediate: 'INTERMÉDIAIRE',
          advanced: 'AVANCÉ'
        }
      },
      news: {
        title: 'Dernières Actualités Financières',
        latestNews: 'Dernières Actualités Financières',
        categoryNews: {
          banking: 'Actualités Bancaires',
          economy: 'Actualités Économiques',
          crypto: 'Actualités Crypto'
        },
        readFull: 'Lire l\'Article Complet',
        noNews: 'Aucune actualité trouvée.',
        justNow: 'À l\'instant',
        hoursAgo: 'h il y a'
      },
      calculators: {
        backToEducation: 'Retour au Centre d\'Éducation',
        budgetCalc: {
          title: 'Calculatrice de Budget Mensuel',
          monthlyIncome: 'Revenu Mensuel',
          housing: 'Logement',
          transportation: 'Transport',
          food: 'Nourriture et Épicerie',
          utilities: 'Services Publics',
          insurance: 'Assurance',
          entertainment: 'Divertissement',
          savings: 'Épargne',
          other: 'Autre',
          summary: 'Résumé du Budget',
          totalIncome: 'Revenu Total',
          totalExpenses: 'Dépenses Totales',
          remaining: 'Restant',
          ruleTitle: 'Analyse de la Règle 50/30/20',
          needs: 'Besoins',
          wants: 'Envies',
          target: 'Cible',
          savingsRate: 'Taux d\'Épargne',
          greatJob: 'Excellent travail!',
          goodStart: 'Bon début!',
          tryIncrease: 'Essayez d\'augmenter votre épargne'
        },
        savingsCalc: {
          title: 'Calculatrice d\'Objectif d\'Épargne',
          savingsGoal: 'Objectif d\'Épargne',
          currentSavings: 'Épargne Actuelle',
          monthlyContribution: 'Contribution Mensuelle',
          interestRate: 'Taux d\'Intérêt',
          whatSavingFor: 'Pour quoi épargnez-vous?',
          howMuchNow: 'Combien avez-vous maintenant?',
          howMuchMonthly: 'Combien pouvez-vous épargner chaque mois?',
          expectedReturn: 'Rendement annuel attendu sur l\'épargne',
          timeline: 'Calendrier vers l\'Objectif',
          timeToReach: 'Temps pour atteindre l\'objectif',
          targetDate: 'Date Cible',
          breakdown: 'Répartition des Progrès',
          goalAmount: 'Montant de l\'Objectif',
          startingBalance: 'Solde de Départ',
          stillNeeded: 'Encore Nécessaire',
          totalContributions: 'Contributions Totales',
          interestEarned: 'Intérêts Gagnés',
          progressBar: 'Barre de Progression',
          quickTips: 'Conseils Rapides',
          tip1: 'Automatisez vos transferts d\'épargne',
          tip2: 'Commencez petit et augmentez progressivement',
          tip3: 'Utilisez des comptes d\'épargne à haut rendement',
          tip4: 'Révisez et ajustez mensuellement'
        },
        compoundCalc: {
          title: 'Calculatrice d\'Intérêts Composés',
          initialInvestment: 'Investissement Initial',
          monthlyContribution: 'Contribution Mensuelle',
          yearsToGrow: 'Années de Croissance',
          annualRate: 'Taux d\'Intérêt Annuel',
          compoundFrequency: 'Fréquence de Composition',
          monthly: 'Mensuelle',
          annually: 'Annuelle',
          futureValue: 'Valeur Future',
          breakdown: 'Répartition',
          totalContributions: 'Contributions Totales',
          interestEarned: 'Intérêts Gagnés',
          totalValue: 'Valeur Totale',
          growthOverTime: 'Croissance au Fil du Temps',
          year: 'Année',
          balance: 'Solde',
          interest: 'Intérêt',
          afterYears: 'Après {years} années',
          rule72: 'Règle de 72',
          rule72Text: 'À {rate}% de rendement annuel, votre argent doublera en environ {years} années.'
        },
        debtCalc: {
          title: 'Calculatrice de Remboursement de Dettes',
          totalDebt: 'Solde Total de la Dette',
          interestRate: 'Taux d\'Intérêt (APR)',
          monthlyPayment: 'Paiement Mensuel',
          minimumPayment: 'Paiement minimum',
          paymentTooLow: 'Paiement Trop Bas!',
          paymentWarning: 'Votre paiement mensuel doit être supérieur au minimum pour rembourser cette dette. À ce rythme, vous ne la rembourserez jamais!',
          timeline: 'Calendrier de Remboursement',
          timeToDebtFree: 'Temps pour être Libre de Dettes',
          debtFreeDate: 'Date de Liberté de Dette',
          breakdown: 'Répartition des Coûts',
          originalBalance: 'Solde Original',
          totalInterest: 'Intérêts Totaux Payés',
          totalPaid: 'Montant Total Payé',
          doublePayment: 'Doubler Votre Paiement?',
          doubleText: 'Voyez ce qui se passe si vous payez {amount} $ par mois',
          timeSaved: 'Temps Économisé',
          interestSaved: 'Intérêts Économisés',
          newPayoffTime: 'Nouveau Délai de Remboursement',
          strategies: 'Stratégies de Remboursement',
          strategy1: 'Payez plus que le minimum',
          strategy2: 'Effectuez des paiements bihebdomadaires',
          strategy3: 'Utilisez les gains exceptionnels (primes, remboursements d\'impôts)',
          strategy4: 'Réduisez temporairement les dépenses',
          strategy5: 'Envisagez un transfert de solde (0% APR)',
          progressViz: 'Visualisation des Progrès',
          principal: 'Principal',
          interest: 'Intérêt'
        },
        retirementCalc: {
          title: 'Calculatrice de Retraite',
          currentAge: 'Âge Actuel',
          retirementAge: 'Âge de Retraite',
          currentSavings: 'Épargne-Retraite Actuelle',
          monthlyContribution: 'Contribution Mensuelle',
          expectedReturn: 'Rendement Annuel Attendu',
          desiredIncome: 'Revenu de Retraite Mensuel Désiré',
          yearsUntil: '{years} années jusqu\'à la retraite',
          historicalAvg: 'Moyenne historique: 7-8% pour les portefeuilles diversifiés',
          perYear: 'par an',
          onTrack: 'Vous êtes sur la Bonne Voie!',
          onTrackText: 'Selon votre plan actuel, vous devriez avoir suffisamment pour la retraite.',
          projectedIncome: 'Revenu Mensuel Projeté',
          actionNeeded: 'Action Requise',
          actionText: 'Vous devrez peut-être ajuster votre plan de retraite pour atteindre votre objectif de revenu.',
          additionalNeeded: 'Contribution Mensuelle Supplémentaire Nécessaire',
          snapshot: 'Aperçu de la Retraite',
          yearsToRetirement: 'Années jusqu\'à la Retraite',
          projectedNestEgg: 'Pécule Projeté',
          totalContributions: 'Contributions Totales',
          investmentGains: 'Gains d\'Investissement',
          monthlyIncome: 'Revenu Mensuel',
          composition: 'Composition de l\'Épargne',
          initialSavings: 'Épargne Initiale',
          contributions: 'Contributions',
          investmentGrowth: 'Croissance des Investissements',
          rule4Percent: 'La Règle des 4%',
          rule4PercentText: 'Une directive courante pour la retraite suggère de retirer 4% de votre portefeuille annuellement. En fonction de vos économies projetées:',
          safeAnnual: 'Retrait Annuel Sûr',
          safeMonthly: 'Revenu Mensuel Sûr',
          tipsTitle: 'Conseils pour la Planification de la Retraite',
          tip1: 'Maximisez la contrepartie 401(k) de l\'employeur',
          tip2: 'Envisagez un Roth IRA pour une croissance libre d\'impôt',
          tip3: 'Augmentez les contributions avec les augmentations',
          tip4: 'Diversifiez vos investissements',
          tip5: 'Commencez le plus tôt possible'
        }
      },
      videoTutorials: {
        title: 'Tutoriels Vidéo',
        description: 'Bientôt disponible: Regardez notre série de vidéos dirigée par des experts sur les finances personnelles.',
        notify: 'Me Notifier'
      },
      consultation: {
        title: 'Besoin de Conseils Personnalisés?',
        description: 'Planifiez une consultation gratuite avec l\'un de nos conseillers financiers.',
        button: 'Planifier une Consultation'
      },
      finalCta: {
        title: 'Commencez Votre Parcours Financier Aujourd\'hui',
        description: 'La connaissance est la première étape vers la liberté financière. Explorez nos ressources, utilisez nos outils et prenez le contrôle de votre avenir financier.',
        openAccount: 'Ouvrir un Compte',
        contactUs: 'Nous Contacter'
      }
    },
    support: {
      title: 'Service Client',
      subtitle: 'Nous sommes là pour vous aider avec tous vos besoins bancaires. Choisissez la meilleure façon de nous joindre.',
      phone: {
        title: 'Support Téléphonique 24/7',
        description: 'Parlez avec un représentant à tout moment, de jour comme de nuit.',
        action: 'Appeler Maintenant'
      },
      chat: {
        title: 'Clavardage en Direct',
        description: 'Obtenez de l\'aide instantanée grâce à notre système de clavardage sécurisé.',
        detail: 'Disponible 24h/24, 7j/7',
        action: 'Démarrer le Clavardage'
      },
      email: {
        title: 'Support par Courriel',
        description: 'Envoyez-nous un message détaillé et nous répondrons dans les 24 heures.',
        action: 'Envoyer un Courriel'
      },
      faq: {
        title: 'Foire aux Questions',
        items: [
          {
            q: 'Comment réinitialiser mon mot de passe de banque en ligne?',
            a: 'Cliquez sur \'Mot de passe oublié\' sur la page de connexion. Entrez votre nom d\'utilisateur et votre adresse e-mail, et nous vous enverrons un lien sécurisé pour réinitialiser votre mot de passe. Le lien expire après 24 heures pour des raisons de sécurité.'
          },
          {
            q: 'Quels sont vos taux d\'intérêt actuels?',
            a: 'Les taux d\'intérêt varient selon le type de compte et le solde. Visitez notre page Taux pour obtenir des informations actuelles sur les APY des comptes d\'épargne, CD et produits de prêt. Les taux sont mis à jour quotidiennement.'
          },
          {
            q: 'Combien de temps prend un virement bancaire?',
            a: 'Les virements domestiques se complètent généralement en 24 heures. Les virements internationaux peuvent prendre 3 à 5 jours ouvrables selon le pays de destination et les banques intermédiaires.'
          },
          {
            q: 'La banque en ligne est-elle sécurisée?',
            a: 'Oui, notre plateforme de banque en ligne utilise un cryptage bancaire de 256 bits, une authentification multifacteur et une surveillance en temps réel de la fraude pour protéger les informations de votre compte.'
          },
          {
            q: 'Comment signaler une carte perdue ou volée?',
            a: 'Appelez immédiatement nos services de cartes 24/7 au 1-800-ANCHOR. Vous pouvez également geler temporairement votre carte en vous connectant à la banque en ligne.'
          },
          {
            q: 'Quels sont vos frais de guichet automatique?',
            a: 'Les guichets automatiques Aareal Bank AG sont gratuits pour les titulaires de compte. Nous remboursons également jusqu\'à 20 $/mois en frais de guichet automatique hors réseau pour les titulaires de compte premium.'
          },
          {
            q: 'Comment ouvrir un compte d\'entreprise?',
            a: 'Visitez n\'importe quelle succursale avec vos documents d\'enregistrement d\'entreprise, EIN et pièce d\'identité gouvernementale. Vous pouvez également commencer la demande en ligne et la compléter en personne.'
          },
          {
            q: 'Comment déposer des chèques?',
            a: 'Vous pouvez déposer des chèques dans n\'importe quelle succursale ou guichet automatique Aareal Bank AG. Endossez simplement le chèque et suivez les instructions à l\'écran. Les fonds sont généralement disponibles dans un délai de 1 à 2 jours ouvrables.'
          }
        ],
        viewAll: 'Voir Toutes les Questions'
      },
      hours: {
        title: 'Heures des Succursales',
        weekdays: 'Lundi - Vendredi:',
        weekdaysTime: '9h00 - 17h00',
        saturday: 'Samedi:',
        saturdayTime: '9h00 - 14h00',
        sunday: 'Dimanche:',
        sundayTime: 'Fermé',
        support247: 'Support téléphonique et en ligne disponible 24h/24, 7j/7'
      }
    },
    mortgage: {
      title: 'Services Hypothécaires',
      subtitle: 'Trouvez la solution hypothécaire parfaite pour votre maison avec des taux compétitifs et des conditions flexibles.',
      typesTitle: 'Options Hypothécaires',
      types: {
        fixed: {
          title: 'Hypothèque à Taux Fixe',
          description: 'Paiements mensuels stables avec un taux d\'intérêt fixe pour la durée du prêt.',
          features: [
            'Paiements mensuels prévisibles',
            'Protection contre les hausses de taux',
            'Durées de 15 à 30 ans',
            'Idéal pour la propriété à long terme'
          ]
        },
        adjustable: {
          title: 'Hypothèque à Taux Variable',
          description: 'Taux initiaux plus bas qui s\'ajustent périodiquement selon les conditions du marché.',
          features: [
            'Taux d\'intérêt initiaux plus bas',
            'Ajustements de taux après la période initiale',
            'Idéal pour la propriété à court terme',
            'Potentiel d\'intérêts totaux plus bas'
          ]
        },
        fha: {
          title: 'Prêts FHA',
          description: 'Prêts garantis par le gouvernement avec des exigences de mise de fonds plus faibles.',
          features: [
            'Mise de fonds aussi basse que 3,5%',
            'Exigences de crédit plus flexibles',
            'Protection d\'assurance gouvernementale',
            'Excellent pour les premiers acheteurs'
          ]
        },
        va: {
          title: 'Prêts VA',
          description: 'Programmes hypothécaires spéciaux pour les vétérans et militaires éligibles.',
          features: [
            'Aucune mise de fonds requise',
            'Pas d\'assurance hypothécaire privée',
            'Taux d\'intérêt compétitifs',
            'Frais de clôture limités'
          ]
        }
      },
      calculator: {
        title: 'Calculatrice Hypothécaire',
        description: 'Estimez votre paiement hypothécaire mensuel avec notre calculatrice facile à utiliser.',
        loanAmount: 'Montant du Prêt',
        interestRate: 'Taux d\'Intérêt',
        loanTerm: 'Durée du Prêt',
        downPayment: 'Mise de Fonds',
        years: 'ans',
        calculate: 'Calculer le Paiement'
      },
      processTitle: 'Le Processus Hypothécaire',
      process: {
        preapproval: {
          title: 'Pré-Approbation',
          description: 'Obtenez une pré-approbation pour connaître votre budget et renforcer votre offre.'
        },
        shopping: {
          title: 'Recherche de Maison',
          description: 'Trouvez votre maison parfaite en toute confiance dans votre financement.'
        },
        application: {
          title: 'Demande',
          description: 'Complétez votre demande d\'hypothèque avec notre processus facile.'
        },
        closing: {
          title: 'Clôture',
          description: 'Finalisez votre hypothèque et obtenez les clés de votre nouvelle maison.'
        }
      },
      cta: {
        title: 'Prêt à Acheter Votre Maison?',
        description: 'Commencez votre demande d\'hypothèque aujourd\'hui ou parlez avec l\'un de nos spécialistes hypothécaires.',
        button: 'Postuler Maintenant'
      }
    },
    aboutUs: {
      title: 'À Propos de Aareal Bank AG',
      subtitle: 'Bâtir la prospérité grâce aux valeurs bancaires traditionnelles et au service personnalisé depuis 1952.',
      mission: {
        title: 'Notre Mission',
        description: 'Les actifs numériques sont devenus matures et les services bancaires doivent relever le défi. Le trading, l\'investissement et le stockage de cryptomonnaies et d\'autres actifs numériques ne doivent pas être un \'complément\' à la banque traditionnelle, mais un service intégré qui s\'articule avec tous les autres aspects des services bancaires d\'un client. Aareal Bank AG a été créée pour fournir précisément cette solution aux investisseurs professionnels, entreprises, family offices et institutions.'
      },
      vision: {
        title: 'Notre Vision',
        description: 'Être l\'institution financière la plus fiable et respectée de notre région, reconnue pour l\'innovation, l\'intégrité et l\'engagement indéfectible envers le succès des clients.'
      },
      futureFinance: {
        title: 'Créer l\'avenir de la finance',
        description: 'Nous avons ouvert la voie avec une nouvelle vision bancaire qui élimine les barrières entre les services financiers traditionnels et le support des actifs numériques. Nos solutions primées offrent un service transparent pour toutes les grandes classes d\'actifs, y compris les actifs traditionnels, les cryptomonnaies et les réseaux blockchain.'
      },
      principles: {
        title: 'Nos principes',
        description: 'Nous offrons toutes les capacités de la banque moderne, y compris la crypto, accessibles via une passerelle unique et soutenues par les plus hauts standards de sécurité. Notre mission repose sur trois mots clés:',
        sophisticated: {
          title: 'Sophistiqué',
          description: 'Révolutionner votre expérience financière avec une technologie de pointe et des solutions innovantes'
        },
        seamless: {
          title: 'Fluide',
          description: 'Relier le monde de la finance traditionnelle et numérique avec des transactions intégrées et sans effort'
        },
        secure: {
          title: 'Sécurisé',
          description: 'Protéger vos finances avec une protection solide et leader de l\'industrie'
        }
      },
      valuesTitle: 'Nos Valeurs Fondamentales',
      values: {
        integrity: {
          title: 'Intégrité',
          description: 'Nous menons nos affaires avec honnêteté, transparence et principes éthiques.'
        },
        community: {
          title: 'Communauté',
          description: 'Nous investissons dans les communautés que nous servons et les soutenons.'
        },
        excellence: {
          title: 'Excellence',
          description: 'Nous visons l\'excellence dans tout ce que nous faisons.'
        },
        innovation: {
          title: 'Innovation',
          description: 'Nous embrassons l\'innovation pour mieux servir nos clients.'
        }
      },
      historyTitle: 'Notre Parcours',
      milestones: {
        founded: {
          title: 'Fondation de Aareal Bank AG',
          description: 'Démarré comme une petite banque communautaire avec un engagement envers le service personnalisé.'
        },
        expansion: {
          title: 'Expansion Régionale',
          description: 'Expansion pour servir plusieurs communautés de la région avec 10 nouvelles succursales.'
        },
        digital: {
          title: 'Lancement de la Banque Numérique',
          description: 'Lancement de services bancaires en ligne complets pour servir les clients 24h/24, 7j/7.'
        },
        branches: {
          title: 'Aujourd\'hui',
          description: 'Sert maintenant plus de 50 000 clients dans 25 succursales avec plus de 2 milliards $ d\'actifs.'
        }
      },
      stats: {
        customers: '50 000+',
        customersLabel: 'Clients Satisfaits',
        branches: '25',
        branchesLabel: 'Succursales',
        employees: '500+',
        employeesLabel: 'Employés Dévoués'
      },
      cta: {
        title: 'Rejoignez Notre Famille Bancaire',
        description: 'Découvrez la différence Aareal Bank AG avec un service personnalisé et des solutions bancaires modernes.',
        button: 'Ouvrir un Compte'
      }
    },
    currencyExchange: {
      title: 'Change de Devises',
      subtitle: 'Échangez des devises fiduciaires et des cryptomonnaies avec des taux compétitifs et des transferts instantanés',
      converter: {
        title: 'Convertisseur de Devises',
        from: 'De',
        to: 'À',
        exchangeRate: 'Taux de Change',
        executeExchange: 'Exécuter l\'Échange',
        fiat: 'Fiat',
        crypto: 'Crypto',
        rateAlert: {
          title: 'Alerte de Taux',
          description: 'Recevez une notification lorsque le taux de change souhaité est disponible',
          placeholder: 'Taux cible',
          setAlert: 'Définir l\'Alerte',
          notification: 'Notifications instantanées par email et SMS'
        }
      },
      cryptoRates: {
        title: 'Taux de Cryptomonnaies'
      },
      fiatCurrencies: {
        title: 'Principales Devises Fiduciaires',
        perUsd: 'par USD'
      },
      wireTransfer: {
        title: 'Virement International',
        features: {
          lowFees: {
            title: 'Frais Réduits',
            description: 'À partir de seulement 15 $ pour les virements internationaux'
          },
          fast: {
            title: 'Virements Rapides',
            description: 'La plupart des virements sont effectués en 24-48 heures'
          },
          global: {
            title: '200+ Pays',
            description: 'Envoyez de l\'argent dans plus de 200 pays dans le monde'
          }
        },
        calculator: {
          title: 'Calculateur de Frais de Virement',
          amount: 'Montant du Virement',
          destination: 'Pays de Destination',
          transferFee: 'Frais de Virement',
          exchangeMarkup: 'Majoration du Taux de Change',
          totalCost: 'Coût Total'
        }
      },
      cta: {
        title: 'Commencez à Échanger Aujourd\'hui',
        description: 'Ouvrez un compte Aareal Bank AG pour accéder à des taux de change compétitifs et à des virements internationaux à frais réduits',
        button: 'Ouvrir un Compte'
      }
    },
    trustSection: {
      title: 'Devises Prises en Charge',
      subtitle: 'Nous travaillons avec les devises traditionnelles et numériques',
      crypto: {
        title: 'Crypto-actifs Disponibles',
        description: 'Achetez, vendez et conservez les principales cryptomonnaies avec un stockage sécurisé',
        more: 'et bien plus encore...'
      },
      fiat: {
        title: 'Devises Fiduciaires Disponibles',
        description: 'Travaillez avec les principales devises du monde entier',
        more: 'et bien plus encore...'
      }
    },
    newsletter: {
      title: 'Abonnez-vous à Notre Newsletter',
      subtitle: 'Recevez les dernières actualités, conseils financiers et offres exclusives',
      emailPlaceholder: 'Entrez votre email',
      subscribe: 'S\'abonner',
      success: 'Merci de votre abonnement!',
      error: 'Une erreur s\'est produite. Veuillez réessayer.',
      alreadySubscribed: 'Cet email est déjà abonné'
    },
    news: {
      title: 'Dernières Nouvelles',
      subtitle: 'Restez informé des dernières évolutions du monde financier',
      categories: {
        all: 'Tout',
        banking: 'Banque',
        economy: 'Économie',
        crypto: 'Crypto'
      },
      readMore: 'Lire Plus',
      loading: 'Chargement des nouvelles...',
      error: 'Échec du chargement des nouvelles',
      noArticles: 'Aucun article trouvé',
      publishedBy: 'Publié par'
    },
    difference: {
      title: 'Pourquoi Choisir Aareal Bank AG',
      safety: 'Sécurité',
      safetyDesc: 'Votre argent est protégé par des mesures de sécurité éprouvées. Nous ne prenons aucun raccourci quand il s\'agit de protéger vos comptes.',
      transparency: 'Transparence',
      transparencyDesc: 'Accédez à tous vos comptes en un seul endroit. Voyez exactement où se trouve votre argent et ce qu\'il fait.',
      performance: 'Performance',
      performanceDesc: 'Nous restons à jour avec la technologie financière pour que vous puissiez profiter de nouvelles opportunités quand elles ont du sens pour vous.'
    },
    investmentHighlight: {
      title: 'Investissements',
      subtitle: 'Crypto, cash, actions ou investissements traditionnels',
      description: 'Des actions aux cryptos, nous avons des options qui correspondent à vos objectifs.'
    }
  },
  it: {
    nav: {
      home: 'Home',
      services: 'Servizi',
      about: 'Chi Siamo',
      contact: 'Contatti',
      accounts: 'Conti',
      loans: 'Prestiti'
    },
    hero: {
      title: 'Soluzioni finanziarie per l\'era digitale',
      subtitle: 'Dal 1892',
      description: 'Unendo l\'esperienza finanziaria tradizionale con tecnologia all\'avanguardia per plasmare il futuro della finanza.',
      openAccount: 'Apri un Conto',
      learnMore: 'Scopri di Più'
    },
    services: {
      title: 'I Nostri Servizi',
      subtitle: 'Cosa Offriamo',
      personal: {
        title: 'Banca Personale',
        description: 'Conti che si adattano alla tua vita. Buoni tassi, nessuna commissione a sorpresa.'
      },
      business: {
        title: 'Banca Aziendale',
        description: 'Strumenti bancari per aziende, che tu stia appena iniziando o sia già consolidato.'
      },
      loans: {
        title: 'Prestiti e Mutui',
        description: 'Tassi giusti su prestiti per casa, auto o personali. Spieghiamo tutto sin dall\'inizio.'
      },
      investment: {
        title: 'Servizi di Investimento',
        description: 'Aiuto nella pianificazione del tuo futuro finanziario e nella crescita dei tuoi risparmi.'
      },
      digital: {
        title: 'Banca Digitale',
        description: 'Controlla i tuoi conti, trasferisci denaro e paga le bollette online o dal telefono, in qualsiasi momento.'
      }
    },
    trust: {
      title: 'Sicurezza e Fiducia',
      subtitle: 'La Tua Sicurezza Finanziaria è la Nostra Priorità',
      imageCaption1: 'Sicurezza Bancaria',
      imageCaption2: 'Consulenti Esperti',
      security: {
        title: 'Sicurezza Avanzata',
        description: 'Crittografia di livello militare e autenticazione a più fattori proteggono i tuoi conti.'
      },
      privacy: {
        title: 'Privacy Protetta',
        description: 'Le tue informazioni personali sono protette con misure di privacy leader del settore.'
      },
      excellence: {
        title: 'Servizio Pluripremiato',
        description: 'Riconosciuto per l\'eccellenza nel servizio clienti e nell\'innovazione finanziaria.'
      },
      support: {
        title: 'Supporto 24/7',
        description: 'Il nostro team dedicato è disponibile 24 ore su 24 per assisterti.'
      }
    },
    about: {
      title: 'Chi è Aareal Bank AG',
      subtitle: 'Soluzioni finanziarie per l\'era digitale',
      description: 'Unire l\'expertise finanziaria tradizionale con la tecnologia all\'avanguardia per plasmare il futuro della finanza.',
      stats: {
        years: 'Anni di Servizio',
        customers: 'Clienti Soddisfatti',
        branches: 'Filiali',
        assets: 'Patrimonio in Gestione'
      }
    },
    contact: {
      title: 'Contattaci',
      subtitle: 'Siamo Qui per Aiutarti',
      phone: 'Telefono',
      email: 'Email',
      hours: 'Orari di Apertura',
      hoursValue: 'Lunedì - Venerdì: 9:00 - 17:00',
      address: 'Indirizzo Filiale Principale',
      addressValue: '123 Quartiere Finanziario, Plaza Bancaria, Suite 100'
    },
    footer: {
      tagline: 'Aareal Bank AG',
      quickLinks: 'Collegamenti Rapidi',
      legal: 'Legale',
      privacy: 'Informativa sulla Privacy',
      terms: 'Termini di Servizio',
      security: 'Sicurezza',
      accessibility: 'Accessibilità',
      rights: 'Tutti i diritti riservati.',
      fdic: 'Membro FDIC. Prestatore per Pari Opportunità Abitative.'
    },
    personalBanking: {
      title: 'Banca Personale',
      subtitle: 'Soluzioni bancarie complete progettate per aiutarti a gestire, risparmiare e far crescere il tuo denaro.',
      hero: {
        title: 'Private Banking per Clienti Facoltosi',
        subtitle: 'Consulenza finanziaria personalizzata per privati e famiglie'
      },
      intro: 'La tua situazione finanziaria è unica. Lavoriamo con clienti facoltosi, imprenditori e famiglie che hanno bisogno di più dei servizi bancari standard. I nostri consulenti dedicano tempo a comprendere i tuoi obiettivi e costruiscono un piano adatto alla tua situazione. Che tu voglia preservare il patrimonio, farlo crescere o pianificare il passaggio generazionale, siamo qui per aiutarti.',
      getToKnow: {
        title: 'Scopri i Nostri Servizi di Private Banking',
        forWho: {
          title: 'Chi Serviamo',
          description: 'Verifica se i nostri servizi sono adatti a te'
        },
        approach: {
          title: 'Come Lavoriamo',
          description: 'Il nostro approccio alla gestione del tuo patrimonio'
        },
        expertise: {
          title: 'La Nostra Esperienza',
          description: 'Cosa portiamo sul tavolo'
        },
        becomeClient: {
          title: 'Diventa Cliente',
          description: 'Inizia con il private banking'
        }
      },
      wealthPlan: {
        title: 'I Tuoi Obiettivi e Priorità Finanziarie',
        description: 'Cosa vuoi fare con i tuoi soldi? Mantenerli al sicuro, farli crescere o trasmetterli alla tua famiglia? Un Piano Patrimoniale ti aiuta a vedere il quadro completo. Esamineremo la tua situazione attuale, i tuoi obiettivi e ciò che conta di più per te—la tua famiglia, i tuoi beni, la tua azienda. Ogni nuovo cliente riceve un Piano Patrimoniale senza costi. È il nostro modo di assicurarci di darti la consulenza giusta.'
      },
      highlights: {
        expertise: {
          title: 'Molti Anni di Esperienza',
          description: 'Abbiamo imparato molto in questo tempo su come aiutare le persone a gestire i loro soldi nei momenti buoni e cattivi. Quello che funzionava per i nostri clienti decenni fa potrebbe non funzionare oggi, quindi continuiamo ad adattarci.'
        },
        events: {
          title: 'Eventi per Clienti',
          description: 'Organizziamo eventi su temi come imprenditorialità, investimenti e filantropia. È un\'opportunità per incontrare altri clienti, scambiare idee e ascoltare esperti di diversi settori.'
        },
        bestBank: {
          title: 'Banca Privata Premiata',
          description: 'Lavoriamo duramente per offrirti un buon servizio e consigli solidi. I nostri clienti apprezzano l\'attenzione personale che forniamo. Siamo stati riconosciuti come Miglior Banca Privata Europea nel 2025, di cui siamo orgogliosi.'
        }
      },
      benefits: {
        title: 'Perché Scegliere la Nostra Banca?',
        security: {
          title: 'Sicurezza Prima',
          description: 'Protezione avanzata dalle frodi e assicurazione FDIC su tutti i conti deposito.'
        },
        digital: {
          title: 'Banca Digitale',
          description: 'Accedi ai tuoi conti sempre e ovunque con la nostra app mobile e banca online.'
        }
      },
      calculator: {
        title: 'Calcolatore di Risparmio',
        subtitle: 'Scopri quanto potresti guadagnare con i nostri tassi competitivi',
        accountType: 'Tipo di Conto',
        savingsOption: 'Conto di Risparmio - 0,50% APY',
        moneyMarketOption: 'Mercato Monetario - 1,25% APY',
        cdOption: 'CD 1 Anno - 3,00% APY',
        initialDeposit: 'Deposito Iniziale',
        estimatedEarnings: 'Guadagni Stimati (1 Anno)'
      },
      testimonials: {
        title: 'Testimonianze dei Clienti',
        testimonial1: {
          quote: 'Sono cliente di Aareal Bank AG da 15 anni. Conoscono la mia situazione e mi danno risposte dirette. I loro tassi sono competitivi e mi fido di loro con i miei soldi.',
          author: 'Sarah M.'
        },
        testimonial2: {
          quote: 'La piattaforma online è facile da usare e sicura. Posso controllare i miei conti, pagare le bollette e spostare denaro senza problemi.',
          author: 'Michael T.'
        },
        testimonial3: {
          quote: 'Quando ho aperto il mio primo conto di risparmio, il personale mi ha spiegato tutto chiaramente. Hanno risposto a tutte le mie domande e non mi hanno messo fretta.',
          author: 'Jessica L.'
        }
      },
      comparison: {
        title: 'Confronto Conti',
        feature: 'Caratteristica',
        checking: 'Corrente',
        savings: 'Risparmio',
        moneyMarket: 'Mercato Monetario',
        cd: 'CD',
        minimumBalance: 'Saldo Minimo',
        interestRate: 'Tasso di Interesse',
        monthlyFee: 'Canone Mensile',
        debitCard: 'Carta di Debito',
        checkWriting: 'Emissione Assegni',
        onlineBanking: 'Banca Online'
      }
    },
    businessBanking: {
      title: 'Banca Aziendale',
      subtitle: 'Soluzioni finanziarie per aziende in ogni fase di crescita.',
      hero: {
        title: 'Apri un conto aziendale',
        subtitle: 'Offerta speciale per imprenditori startup: nessun canone mensile per 12 mesi'
      },
      accessOnline: {
        title: 'Access Online',
        description: 'Il sistema ideale per le tue esigenze di gestione della liquidità: gestisci tutti i tuoi conti bancari, nazionali e internazionali, anche quelli detenuti presso altre banche. Inoltre: accedi e controlla tutti i tuoi flussi di pagamento, ovunque nel mondo.'
      },
      sepa: {
        title: 'Tutto quello che devi sapere su SEPA e IBAN',
        description: 'Tutto quello che devi sapere su SEPA e IBAN, incluse informazioni tecniche, file di esempio e moduli relativi agli standard di pagamento SEPA, si trova qui.',
        sepaButton: 'SEPA',
        ibanButton: 'IBAN'
      },
      loanCalculator: {
        title: 'Costo di un prestito',
        description: 'Inserisci l\'importo che desideri prendere in prestito e riceverai subito una risposta.',
        why: 'Perché hai bisogno di un prestito?',
        purposes: {
          car: 'Auto',
          renovation: 'Ristrutturazione',
          other: 'Altro acquisto importante'
        },
        howMuch: 'Quanto vuoi prendere in prestito?',
        minAmount: 'L\'importo minimo è di 5000 €',
        maxAmount: 'L\'importo massimo è di 75000 €',
        amountTooLow: 'L\'importo deve essere di almeno 5000 €',
        amountTooHigh: 'L\'importo non può superare i 75000 €',
        selectTerm: 'Seleziona la durata richiesta',
        year: 'Anno',
        years: 'Anni',
        min: 'Min.',
        max: 'Max.'
      },
      loanResults: {
        title: 'Questi sono i costi minimi e massimi',
        minimum: 'Minimo',
        maximum: 'Massimo',
        monthlyRepayments: 'Rate mensili',
        fixedInterestRate: 'Tasso di interesse fisso',
        totalCosts: 'Costi totali',
        disclaimer: 'Questo calcolo è una stima. Le rate mensili esatte dipendono dalla tua situazione personale.'
      },
      checking: {
        title: 'Conto Corrente Aziendale',
        description: 'Conto professionale senza canone mensile per il primo anno.',
        features: ['Nessun limite di operazioni', 'Deposito assegni da mobile', 'Pagamento bollette online incluso', 'Gestore conto dedicato']
      },
      creditCards: {
        title: 'Carte di Credito Aziendali',
        description: 'Carte aziendali con fino all\'1,5% di cashback su tutti gli acquisti e rendicontazione spese.',
        features: ['1,5% di cashback sugli acquisti', 'Carte aggiuntive senza costi', 'Report mensili delle spese', 'Estensione di garanzia']
      },
      loans: {
        title: 'Prestiti Aziendali',
        description: 'Finanziamenti per capitale circolante e attrezzature da 5.000 € a 500.000 €.',
        features: ['Tassi fissi dal 7,5%', 'Durata di rimborso 1-10 anni', 'Decisione entro 48 ore', 'Relationship manager assegnato']
      },
      merchant: {
        title: 'Servizi Commerciali',
        description: 'Accettazione pagamenti con carte con regolamento entro il giorno lavorativo successivo.',
        features: ['Terminali POS e software', 'Gateway di pagamento e-commerce', 'Pagamenti contactless e mobile', 'Fondi disponibili giorno lavorativo successivo']
      },
      payroll: {
        title: 'Servizi Paghe',
        description: 'Elaborazione completa delle paghe con calcoli fiscali automatici e portale dipendenti.',
        features: ['Elaborazione paghe mensile o settimanale', 'Ritenute e dichiarazioni fiscali', 'Bonifico diretto su conti', 'Accesso dipendenti allo storico']
      },
      treasury: {
        title: 'Gestione Tesoreria',
        description: 'Strumenti di gestione della liquidità per aziende con esigenze bancarie complesse.',
        features: ['Reportistica saldi in tempo reale', 'Protezione antifrode positive pay', 'Bonifici nazionali e internazionali', 'Riconciliazione automatizzata dei conti']
      },
      cta: {
        title: 'Parla con uno Specialista Business',
        description: 'Contatta il nostro team per discutere i servizi più adatti alla tua azienda.',
        button: 'Richiedi una Chiamata'
      },
      learnMore: 'Scopri di Più'
    },
    loans: {
      title: 'Soluzioni di Prestito',
      subtitle: 'Tassi competitivi e termini flessibili per aiutarti a raggiungere i tuoi obiettivi finanziari.',
      home: {
        title: 'Mutui Casa',
        description: 'Realizza il tuo sogno di proprietà con tassi ipotecari competitivi.',
        features: ['Tassi fissi e variabili', 'Opzioni di acconto basso', 'Programmi per primi acquirenti', 'Opzioni di rifinanziamento'],
        rate: '5.99%',
        term: '30 anni'
      },
      auto: {
        title: 'Prestiti Auto',
        description: 'Parti con la tua auto nuova o usata con finanziamento auto flessibile.',
        features: ['Finanziamento auto nuove e usate', 'Tassi competitivi', 'Termini fino a 72 mesi', 'Pre-approvazione disponibile'],
        rate: '4.49%',
        term: '60 mesi'
      },
      student: {
        title: 'Prestiti Studenti',
        description: 'Investisci nel tuo futuro con soluzioni di finanziamento educativo accessibili.',
        features: ['Prestiti universitari e post-laurea', 'Nessuna commissione di apertura', 'Termini di rimborso flessibili', 'Opzioni di rilascio cofirmatario'],
        rate: '6.25%',
        term: '10 anni'
      },
      personal: {
        title: 'Prestiti Personali',
        description: 'Accedi a fondi per qualsiasi scopo con approvazione rapida e termini flessibili.',
        features: ['Prestiti fino a $50.000', 'Nessuna garanzia richiesta', 'Finanziamento in giornata disponibile', 'Pagamenti mensili fissi'],
        rate: '8.99%',
        term: '5 anni'
      },
      homeEquity: {
        title: 'Prestiti su Valore Casa',
        description: 'Sfrutta il valore della tua casa per ristrutturazioni, consolidamento debiti o spese importanti.',
        features: ['Prendi in prestito fino all\'85% del valore casa', 'Tassi di interesse fissi', 'Interessi deducibili fiscalmente', 'Nessuna penale per rimborso anticipato'],
        rate: '7.25%',
        term: '15 anni'
      },
      business: {
        title: 'Prestiti per Piccole Imprese',
        description: 'Fai crescere la tua attività con soluzioni di finanziamento su misura per imprenditori.',
        features: ['Prestiti garantiti SBA', 'Linee di credito', 'Finanziamento attrezzature', 'Prestiti capitale circolante'],
        rate: '7.99%',
        term: '10 anni'
      },
      calculator: {
        title: 'Calcolatore Prestiti',
        description: 'Calcola i tuoi pagamenti mensili e vedi quanto puoi permetterti.',
        button: 'Usa Calcolatore'
      },
      preApproval: {
        title: 'Pre-Approvazione Rapida',
        description: 'Ottieni la pre-approvazione in minuti e acquista con fiducia.',
        button: 'Ottieni Pre-Approvazione'
      },
      startingRate: 'Tasso Iniziale:',
      termLabel: 'Termine:',
      applyNow: 'Richiedi Ora'
    },
    creditCards: {
      title: 'Carte di Credito',
      subtitle: 'Trova la carta di credito perfetta per il tuo stile di vita e massimizza i tuoi premi.',
      rewardsPlus: {
        title: 'Carta di Credito',
        description: 'Guadagna cashback illimitato su ogni acquisto senza limiti o scadenze.',
        features: ['3% cashback su ristoranti', '2% cashback su carburante', '1% cashback su tutti gli altri acquisti', 'Bonus iscrizione $200']
      },
      travelElite: {
        title: 'Carta Platinum',
        description: 'Sblocca vantaggi viaggio premium e guadagna miglia su ogni dollaro speso.',
        features: ['3X miglia su viaggi e ristoranti', '50.000 miglia bonus', 'Accesso lounge aeroportuali', 'Nessuna commissione transazioni estere']
      },
      everydayCash: {
        title: 'Carta di Debito',
        description: 'Premi cashback semplici per spese quotidiane senza categorie complicate.',
        features: ['1,5% cashback su tutti gli acquisti', 'Nessun canone annuo', 'Bonus iscrizione $150', 'Monitoraggio gratuito punteggio credito']
      },
      balanceTransfer: {
        title: 'Carta Prepagata',
        description: 'Paga i debiti più velocemente con un TAE promozionale dello 0% sui trasferimenti saldo.',
        features: ['0% TAE per 18 mesi', 'Nessuna commissione trasferimento saldo', '1% cashback sugli acquisti', 'Strumenti pianificazione finanziaria']
      },
      secured: {
        title: 'Carta Prepagata Garantita',
        description: 'Costruisci o ricostruisci il tuo credito con una carta garantita dal tuo deposito.',
        features: ['Linea di credito da $200-$5.000', 'Passa a carta non garantita', 'Segnala a tutte le agenzie credito', 'Nessun canone annuo']
      },
      premium: {
        title: 'Carta Gold',
        description: 'Vantaggi elite e privilegi di lusso per i nostri clienti più stimati.',
        features: ['5X punti su categorie selezionate', '100.000 punti bonus', 'Servizio concierge 24/7', 'Assicurazione viaggi e acquisti']
      },
      apr: 'TAE:',
      annualFee: 'Canone Annuo:',
      applyNow: 'Richiedi Ora',
      calculator: {
        title: 'Calcolatore Premi',
        subtitle: 'Stima i tuoi premi annuali in base alla spesa',
        monthlySpending: 'Spesa Mensile',
        perYear: '/anno',
        rewardsPlusLabel: 'Carta di Credito (1,5% cashback)',
        everydayCashLabel: 'Carta di Debito (3% alimentari, 2% carburante)',
        travelEliteLabel: 'Carta Platinum (3x punti sui viaggi)'
      },
      protection: {
        title: 'Vantaggi Protezione Carta',
        zeroFraud: {
          title: 'Responsabilità Zero per Frodi',
          description: 'Non responsabile per transazioni non autorizzate'
        },
        purchaseProtection: {
          title: 'Protezione Acquisti',
          description: 'Copertura per articoli danneggiati o rubati entro 90 giorni'
        },
        extendedWarranty: {
          title: 'Garanzia Estesa',
          description: 'Aggiunge un anno aggiuntivo alla garanzia del produttore'
        },
        travelInsurance: {
          title: 'Assicurazione Viaggio',
          description: 'Copertura cancellazione viaggio e ritardo bagagli'
        },
        fraudMonitoring: {
          title: 'Monitoraggio Frodi 24/7',
          description: 'Avvisi in tempo reale per attività sospette'
        }
      },
      comparison: {
        title: 'Confronto Carte',
        feature: 'Caratteristica',
        rewardsPlusName: 'Carta di Credito',
        travelEliteName: 'Carta Platinum',
        everydayCashName: 'Carta di Debito',
        annualFee: 'Canone Annuo',
        rewardsRate: 'Tasso Premi',
        signUpBonus: 'Bonus Iscrizione',
        travelInsurance: 'Assicurazione Viaggio',
        airportLounge: 'Accesso Lounge Aeroporto',
        purchaseProtection: 'Protezione Acquisti'
      },
      cta: {
        title: 'Non Sai Quale Carta è Giusta per Te?',
        description: 'Fai il nostro quiz rapido per trovare la carta di credito perfetta in base alle tue abitudini di spesa e obiettivi finanziari.',
        button: 'Trova la Tua Carta'
      }
    },
    investments: {
      title: 'Servizi di Investimento',
      subtitle: 'Costruisci ricchezza per il tuo futuro con soluzioni di investimento complete su misura per i tuoi obiettivi finanziari.',
      hero: {
        title: 'Investimenti presso Aareal Bank AG',
        subtitle: 'Inizia a costruire il tuo capitale'
      },
      riskWarning: 'Investire comporta rischi. Potresti perdere (parte del) denaro che hai investito.',
      bonus: {
        title: 'Bonus fino a €100 quando investi',
        description: 'Stai pensando di investire? Inizia con noi e ricevi un bonus. Apri il tuo primo conto di investimento prima del 31 marzo 2026 ed effettua 4 investimenti automatici. Se soddisfi i termini e le condizioni della promozione, guadagnerai un bonus di €50, €75 o €100. Nota bene: potresti perdere tutto o parte del tuo investimento iniziale.'
      },
      winterBonus: {
        title: 'Bonus Invernale',
        description: 'Inizia con la Gestione del Portafoglio o effettua un deposito aggiuntivo prima del 31 marzo 2026 e guadagna un bonus.',
        newClients: 'Per i nuovi clienti: ricevi fino a €1.250 di bonus se inizi la Gestione del Portafoglio. Leggi i termini e le condizioni.',
        existingClients: 'Per i clienti esistenti della Gestione del Portafoglio: ricevi €500 se depositi €50.000 aggiuntivi, o €750 se depositi €250.000. Leggi i termini e le condizioni.',
        note: 'Nota bene: investire comporta rischi. Potresti perdere tutto o parte del tuo investimento iniziale.'
      },
      riskInfo: {
        title: 'Investire comporta rischi',
        description: 'Investire comporta rischi. Potresti perdere (parte del) denaro che hai investito. Se hai intenzione di investire, è importante che tu ne sia consapevole. Investi con denaro che puoi permetterti di perdere. Leggi di più sui rischi associati agli investimenti.'
      },
      whyInvest: {
        title: 'Perché investire con Aareal Bank AG?',
        tools: {
          title: 'Strumenti intelligenti, intuizioni e orientamento',
          description: 'Ti guideremo online, ti aiuteremo a fare scelte da solo o gestiremo i tuoi investimenti per tuo conto.'
        },
        beginnings: {
          title: 'Siamo qui per ogni nuovo inizio',
          description: 'Sei un investitore esperto o è la tua prima volta? Abbiamo prodotti sia per investitori esperti che principianti.'
        },
        investors: {
          title: 'Oltre 225.000 persone stanno già investendo con noi',
          description: 'Ogni giorno accogliamo nuovi investitori che vogliono iniziare a costruire il proprio capitale.'
        }
      },
      performance: {
        title: 'Performance Portafoglio',
        disclaimer: 'Le performance passate non garantiscono risultati futuri. I rendimenti mostrati sono ipotetici.',
        portfolioType: 'Tipo Portafoglio',
        oneYear: 'Rendimento 1 Anno',
        fiveYear: 'Rendimento 5 Anni',
        riskLevel: 'Livello di Rischio',
        conservative: 'Portafoglio Conservativo',
        moderate: 'Portafoglio Moderato',
        aggressive: 'Portafoglio Aggressivo',
        low: 'Basso',
        medium: 'Medio',
        high: 'Alto'
      },
      cta: {
        title: 'Pronto a Iniziare a Investire?',
        description: 'Prenota una consulenza con uno dei nostri consulenti di investimento per discutere i tuoi obiettivi finanziari.',
        schedule: 'Prenota Consulenza',
        resources: 'Vedi Risorse'
      }
    },
    onlineBanking: {
      title: 'Accesso Banca Online',
      subtitle: 'Accedi ai tuoi conti in sicurezza',
      email: 'Indirizzo Email',
      emailPlaceholder: 'tua.email@esempio.com',
      password: 'Password',
      passwordPlaceholder: 'Inserisci la tua password',
      remember: 'Ricordami',
      forgot: 'Password dimenticata?',
      signIn: 'Accedi',
      noAccount: 'Non hai un account?',
      enroll: 'Registrati Ora',
      secure: 'La tua connessione è sicura e crittografata',
      anytime: 'Banca Sempre, Ovunque',
      description: 'Gestisci le tue finanze con la nostra piattaforma bancaria online sicura.',
      transfers: {
        title: 'Trasferimenti Istantanei',
        description: 'Trasferisci denaro tra conti o invia ad amici e familiari istantaneamente.'
      },
      statements: {
        title: 'Estratti Conto Digitali',
        description: 'Accedi e scarica i tuoi estratti conto in qualsiasi momento, senza carta e in sicurezza.'
      },
      security: {
        title: 'Sicurezza Avanzata',
        description: 'L\'autenticazione a più fattori e la crittografia mantengono i tuoi conti al sicuro.'
      }
    },
    rates: {
      title: 'Tassi di Interesse',
      subtitle: 'Confronta i nostri tassi competitivi per conti di risparmio, certificati di deposito e prestiti.',
      effective: 'Tassi in vigore al 6 febbraio 2026. Soggetti a modifiche senza preavviso.',
      header: {
        title: 'Centro Tassi e Commissioni',
        description: 'Trasparenza completa su tutti i nostri tassi e commissioni. Crediamo che tu meriti di sapere esattamente cosa stai pagando.',
        noHiddenFees: 'Nessuna Commissione Nascosta',
        fullDisclosure: 'Divulgazione Completa',
        downloadPDF: 'Scarica Tabella Commissioni (PDF)',
        effectiveDate: 'In vigore al'
      },
      tabs: {
        interestRates: 'Tassi di Interesse',
        accountFees: 'Commissioni Conto',
        serviceFees: 'Commissioni Servizio',
        cardFees: 'Commissioni Carta',
        loanFees: 'Commissioni Prestito',
        feeCalculator: 'Calcolatore Commissioni'
      },
      savings: {
        title: 'Tassi Risparmio e CD',
        product: 'Prodotto',
        apy: 'TAE',
        minBalance: 'Saldo Minimo',
        trend: 'Tendenza',
        savingsAccount: 'Conto di Risparmio',
        moneyMarket: 'Conto Mercato Monetario',
        cd6: 'CD 6 Mesi',
        cd1: 'CD 1 Anno',
        cd5: 'CD 5 Anni',
        openAccount: 'Apri un Conto di Risparmio'
      },
      loan: {
        title: 'Tassi Prestiti',
        product: 'Prodotto',
        apr: 'TAE',
        details: 'Dettagli',
        trend: 'Tendenza',
        asLowAs: 'A partire da',
        mortgage30: 'Mutuo Casa (30 anni fisso)',
        mortgage15: 'Mutuo Casa (15 anni fisso)',
        homeEquity: 'Prestito su Valore Casa',
        autoNew: 'Prestito Auto (Nuova)',
        autoUsed: 'Prestito Auto (Usata)',
        personal: 'Prestito Personale',
        apply: 'Richiedi un Prestito'
      },
      cd: {
        title: 'Tassi Certificati di Deposito (CD)',
        term: 'Termine CD',
        minDeposit: 'Deposito Minimo'
      },
      atm: {
        title: 'Commissioni Bancomat',
        transactionType: 'Tipo di Transazione',
        inNetwork: 'Nella Rete',
        outOfNetwork: 'Fuori Rete',
        international: 'Internazionale'
      },
      investment: {
        title: 'Commissioni Gestione Patrimoni e Investimenti',
        service: 'Servizio',
        managementFee: 'Commissione di Gestione',
        minInvestment: 'Investimento Minimo',
        description: 'Descrizione'
      },
      labels: {
        free: 'GRATUITO',
        annually: 'annualmente',
        perTrade: 'per operazione',
        perHour: 'all\'ora',
        varies: 'Varia',
        none: 'Nessuno',
        page: 'Pagina',
        of: 'di'
      },
      commitment: {
        title: 'Il Nostro Impegno per la Trasparenza',
        noHidden: {
          title: 'Nessuna Commissione Nascosta',
          description: 'Ogni commissione è chiaramente divulgata in anticipo. Non ti sorprendiamo mai con addebiti inaspettati.'
        },
        waivers: {
          title: 'Esenzioni Disponibili',
          description: 'Molte commissioni possono essere eliminate soddisfacendo semplici requisiti come il mantenimento di saldi minimi.'
        },
        current: {
          title: 'Sempre Aggiornato',
          description: 'Questa tabella delle commissioni è aggiornata in tempo reale. Vedi sempre i nostri tassi e commissioni attuali.'
        }
      },
      feeComparison: {
        accountComparison: 'Confronto Conti',
        clearSelection: 'Cancella Selezione',
        selectUpTo: 'Seleziona fino a 3 conti da confrontare.',
        selected: 'selezionato',
        feature: 'Caratteristica',
        monthlyFee: 'Commissione Mensile',
        feeWaiver: 'Esenzione Commissione',
        minBalance: 'saldo minimo',
        minOpeningDeposit: 'Deposito Apertura Minimo',
        interestRate: 'Tasso di Interesse (TAE)',
        overdraftFee: 'Commissione Scoperto',
        nsfFee: 'Commissione Fondi Insufficienti',
        paperStatementFee: 'Commissione Estratto Conto Cartaceo',
        perMonth: '/mese',
        excessWithdrawalFee: 'Commissione Prelievo Eccessivo',
        na: 'N/D'
      },
      serviceFees: {
        service: 'Servizio',
        fee: 'Commissione',
        description: 'Descrizione',
        feeWaiver: 'Esenzione Commissione',
        noWaiverAvailable: 'Nessuna esenzione disponibile'
      },
      cardFees: {
        creditCardFees: 'Commissioni Carta di Credito',
        debitCardFees: 'Commissioni Carta di Debito',
        aprPurchases: 'TAE - Acquisti',
        aprBalanceTransfers: 'TAE - Trasferimenti Saldo',
        aprCashAdvances: 'TAE - Anticipi Contanti',
        annualFee: 'Commissione Annuale',
        foreignTransactionFee: 'Commissione Transazione Estera',
        balanceTransferFee: 'Commissione Trasferimento Saldo',
        cashAdvanceFee: 'Commissione Anticipo Contanti',
        latePaymentFee: 'Commissione Ritardo Pagamento',
        overLimitFee: 'Commissione Superamento Limite',
        replacementCard: 'Carta Sostitutiva',
        variableAprDisclaimer: 'TAE variabile in base all\'affidabilità creditizia. I tassi mostrati sono esempi rappresentativi. Il tuo tasso effettivo potrebbe essere più alto o più basso in base al tuo profilo creditizio.'
      },
      loanFees: {
        mortgageFees: 'Commissioni Mutuo',
        homeEquityFees: 'Commissioni Prestito su Valore Casa',
        autoFees: 'Commissioni Prestito Auto',
        personalFees: 'Commissioni Prestito Personale',
        interestRate: 'Tasso di Interesse',
        originationFee: 'Commissione di Origine',
        ofLoan: 'del prestito',
        applicationFee: 'Commissione di Richiesta',
        appraisalFee: 'Commissione di Valutazione',
        creditReportFee: 'Commissione Rapporto Credito',
        estimatedClosingCosts: 'Costi di Chiusura Stimati',
        latePaymentFee: 'Commissione Ritardo Pagamento',
        prepaymentPenalty: 'Penale Rimborso Anticipato',
        closingCostsNote: 'I costi di chiusura effettivi possono variare in base alla posizione della proprietà, all\'importo del prestito e ad altri fattori. Questa è una stima a fini di pianificazione.',
        note: 'Nota'
      },
      calculator: {
        title: 'Calcolatore Commissioni',
        description: 'Stima le tue commissioni bancarie mensili e annuali in base ai tuoi modelli di utilizzo.',
        accountType: 'Tipo di Conto',
        checkingAccount: 'Conto Corrente',
        savingsAccount: 'Conto di Risparmio',
        avgMonthlyBalance: 'Saldo Mensile Medio',
        monthlyTransactions: 'Transazioni Mensili',
        overdraftsPerMonth: 'Scoperti al Mese',
        outOfNetworkATM: 'Prelievi Bancomat Fuori Rete',
        firstFree: 'I primi 4 sono gratuiti',
        wireTransfersPerMonth: 'Bonifici Bancari al Mese',
        paperStatements: 'Ricevi estratti conto cartacei (5$/mese)',
        estimatedMonthlyFees: 'Commissioni Mensili Stimate',
        annualProjection: 'Proiezione Annuale',
        feeBreakdown: 'Dettaglio Commissioni',
        monthlyMaintenanceFee: 'Commissione di gestione mensile',
        overdraftFees: 'Commissioni scoperto',
        outOfNetworkATMFees: 'Commissioni bancomat fuori rete',
        paperStatementFee: 'Commissione estratto conto cartaceo',
        wireTransferFees: 'Commissioni bonifico bancario',
        noFees: 'Nessuna commissione in base al tuo utilizzo!',
        tip: 'Consiglio',
        tipMessage: 'Mantieni un saldo di $2.500 o più per eliminare le commissioni mensili sui conti correnti Premium.'
      },
      disclaimer: {
        title: 'Informazioni Importanti',
        apy: 'Il Tasso Annuo Equivalente (TAE) è accurato alla data in vigore ed è soggetto a modifiche senza preavviso.',
        fees: 'Le commissioni potrebbero ridurre i guadagni sui conti di risparmio.',
        penalty: 'Potrebbe essere imposta una penale per il prelievo anticipato sui certificati di deposito.',
        credit: 'I tassi di prestito mostrati sono per mutuatari con ottimo credito. Il tuo tasso può variare in base alla storia creditizia e ad altri fattori.'
      },
      dbTranslations: {
        atmFeeTypes: {
          'ATM Withdrawal': 'Prelievo Bancomat',
          'ATM Deposit': 'Deposito Bancomat',
          'ATM Transfer': 'Trasferimento Bancomat',
          'ATM Balance Inquiry': 'Consultazione Saldo Bancomat'
        },
        serviceCategories: {
          'statements': 'Estratti Conto',
          'deposits': 'Depositi',
          'transfers': 'Trasferimenti',
          'cards': 'Carte',
          'checks': 'Assegni',
          'closures': 'Chiusure di Conto',
          'collections': 'Riscossioni',
          'legal': 'Servizi Legali'
        },
        loanTypes: {
          'mortgage': 'Ipoteca',
          'auto': 'Auto',
          'home_equity': 'Valore Casa',
          'personal': 'Personale'
        }
      }
    },
    security: {
      title: 'Centro Sicurezza',
      subtitle: 'La tua sicurezza è la nostra massima priorità. Scopri come proteggiamo i tuoi conti e cosa puoi fare per rimanere al sicuro.',
      howWeProtect: 'Come Ti Proteggiamo',
      encryption: {
        title: 'Crittografia',
        description: 'La crittografia SSL a 256 bit di livello militare protegge tutte le tue sessioni bancarie online e i trasferimenti dati.'
      },
      fraudMonitoring: {
        title: 'Monitoraggio Frodi',
        description: 'Monitoraggio transazioni 24/7 con rilevamento frodi basato su AI ti avvisa di attività sospette.'
      },
      alerts: {
        title: 'Avvisi Conto',
        description: 'Personalizza gli avvisi per transazioni grandi, saldi bassi e attività account insolite.'
      },
      mfa: {
        title: 'Autenticazione Multi-Fattore',
        description: 'Aggiungi un ulteriore livello di sicurezza con login biometrico e codici usa e getta.'
      },
      bestPractices: {
        title: 'Migliori Pratiche di Sicurezza',
        password: {
          title: 'Usa Password Forti',
          description: 'Crea password uniche con almeno 12 caratteri, mescolando maiuscole, minuscole, numeri e simboli.'
        },
        twoFactor: {
          title: 'Abilita Autenticazione a Due Fattori',
          description: 'Usa sempre l\'autenticazione a due fattori quando disponibile per aggiungere un ulteriore livello di protezione.'
        },
        verify: {
          title: 'Verifica Prima di Cliccare',
          description: 'Non cliccare mai link in email sospette. Invece, digita l\'indirizzo del nostro sito direttamente nel browser.'
        },
        monitor: {
          title: 'Monitora i Tuoi Conti',
          description: 'Rivedi regolarmente l\'attività del tuo conto e segnala immediatamente qualsiasi transazione non autorizzata.'
        },
        update: {
          title: 'Mantieni il Software Aggiornato',
          description: 'Usa sempre l\'ultima versione del browser e delle app mobili per la migliore sicurezza.'
        },
        secure: {
          title: 'Usa Connessioni Sicure',
          description: 'Evita il Wi-Fi pubblico quando accedi ai tuoi conti. Usa una VPN se devi connetterti da remoto.'
        }
      },
      fraud: {
        title: 'Segnala Immediatamente le Frodi',
        description: 'Se sospetti attività non autorizzata sul tuo conto o se sei stato vittima di frode, contattaci immediatamente.',
        report: 'Segnala Frode: 1-800-FRODE',
        tips: 'Consigli Prevenzione Frodi'
      },
      fdic: {
        title: 'Assicurato FDIC',
        description: 'I tuoi depositi sono assicurati dalla Federal Deposit Insurance Corporation (FDIC) fino a $250.000 per depositante, per banca assicurata.',
        disclaimer: 'Membro FDIC. Prestatore per Pari Opportunità Abitative.'
      }
    },
    atmLocator: {
      title: 'Localizzatore Filiali e Bancomat',
      subtitle: 'Trova la filiale Aareal Bank AG o il bancomat più vicino per soddisfare le tue esigenze bancarie.',
      search: 'Inserisci indirizzo, città o CAP',
      find: 'Trova Posizioni',
      servicesAvailable: 'Servizi Disponibili:',
      getDirections: 'Ottieni Indicazioni',
      details: 'Dettagli',
      mainBranch: 'Filiale Principale',
      northBranch: 'Filiale Nord',
      westBranch: 'Filiale Ovest',
      eastATM: 'Bancomat Est',
      southBranch: 'Filiale Sud',
      airportATM: 'Bancomat Aeroporto',
      downtown: 'Centro Città',
      northDistrict: 'Quartiere Nord',
      westEnd: 'Zona Ovest',
      eastDistrict: 'Quartiere Est',
      southDistrict: 'Quartiere Sud',
      airport: 'Aeroporto',
      terminal: 'Terminal 1, Aeroporto Internazionale',
      hours: {
        weekdays: 'Lun-Ven: 9:00-17:00, Sab: 9:00-14:00',
        weekdaysOnly: 'Lun-Ven: 9:00-17:00',
        extended: 'Lun-Ven: 9:00-18:00, Sab: 9:00-13:00',
        south: 'Lun-Ven: 10:00-18:00, Sab: 10:00-14:00',
        alwaysOpen: '24/7'
      },
      services: {
        full: 'Servizi Bancari Completi',
        atm: 'Bancomat Disponibile',
        safeDeposit: 'Cassette di Sicurezza',
        driveThrough: 'Servizio Drive-Through',
        business: 'Banca Aziendale',
        atmOnly: 'Solo Bancomat',
        access24: 'Accesso 24 Ore',
        notary: 'Servizi Notarili',
        currency: 'Cambio Valuta Vicino'
      },
      cta: {
        title: 'Non Trovi una Posizione?',
        description: 'Il nostro team di assistenza clienti è qui per aiutarti a trovare la filiale o il bancomat più vicino.',
        button: 'Contattaci'
      }
    },
    careers: {
      title: 'Carriere in Aareal Bank AG',
      subtitle: 'Unisciti al nostro team di professionisti dedicati e costruisci una carriera gratificante nel settore bancario.',
      whyWork: 'Perché Lavorare con Noi?',
      health: {
        title: 'Salute e Benessere',
        description: 'Copertura completa medica, dentale e visiva per te e la tua famiglia.'
      },
      retirement: {
        title: 'Pianificazione Pensionistica',
        description: '401(k) con generoso contributo aziendale e risorse di pianificazione finanziaria.'
      },
      development: {
        title: 'Sviluppo Professionale',
        description: 'Rimborso tasse universitarie, programmi di formazione e opportunità di avanzamento di carriera.'
      },
      balance: {
        title: 'Equilibrio Vita-Lavoro',
        description: 'Orari flessibili, opzioni di lavoro da remoto e generoso congedo retribuito.'
      },
      openings: {
        title: 'Posizioni Aperte',
        positions: 'Posizioni',
        personalBanker: 'Consulente Bancario Personale',
        businessSpecialist: 'Specialista Banca Aziendale',
        advisor: 'Consulente Finanziario',
        loanOfficer: 'Funzionario Prestiti',
        customerService: 'Rappresentante Servizio Clienti',
        itAnalyst: 'Analista Sistemi IT',
        marketingCoord: 'Coordinatore Marketing',
        branchManager: 'Direttore Filiale',
        retailBanking: 'Banca al Dettaglio',
        businessBanking: 'Banca Aziendale',
        investmentServices: 'Servizi di Investimento',
        lending: 'Prestiti',
        customerSupport: 'Supporto Clienti',
        technology: 'Tecnologia',
        marketingDept: 'Marketing',
        management: 'Gestione',
        multiple: 'Più Sedi',
        mainBranch: 'Filiale Principale',
        downtown: 'Centro Città',
        northBranch: 'Filiale Nord',
        callCenter: 'Call Center',
        headquarters: 'Sede Centrale',
        westBranch: 'Filiale Ovest',
        fullTime: 'Tempo Pieno',
        apply: 'Candidati Ora'
      },
      cta: {
        title: 'Non Vedi la Posizione Giusta?',
        description: 'Invia il tuo curriculum e ti terremo presente per future opportunità che corrispondono alle tue competenze e interessi.',
        button: 'Invia Candidatura Generale'
      },
      values: {
        title: 'I Nostri Valori Fondamentali',
        missionDriven: {
          title: 'Guidati dalla Missione',
          description: 'Siamo impegnati a favorire il successo finanziario di individui e aziende in tutto il mondo.'
        },
        innovation: {
          title: 'Innovazione Prima di Tutto',
          description: 'Abbracciamo nuove tecnologie e approcci per fornire soluzioni bancarie all\'avanguardia.'
        },
        growth: {
          title: 'Mentalità di Crescita',
          description: 'Investiamo nello sviluppo professionale del nostro team con opportunità di apprendimento continuo.'
        },
        diversity: {
          title: 'Diversità e Inclusione',
          description: 'Celebriamo la diversità e creiamo un ambiente in cui tutti possono prosperare.'
        }
      },
      growth: {
        title: 'Crescita Professionale in Aareal Bank AG',
        stats: {
          promotions: 'Promozioni Interne',
          budget: 'Budget di Formazione Annuale',
          programs: 'Programmi di Formazione'
        },
        pathways: {
          title: 'Percorsi di Sviluppo Professionale',
          entry: 'Posizioni entry-level con formazione completa e programmi di mentoring',
          mid: 'Ruoli di livello intermedio con sviluppo della leadership e opportunità di specializzazione',
          senior: 'Posizioni senior con coaching esecutivo ed esperienza decisionale strategica',
          executive: 'Opportunità C-suite per leader affermati che guidano l\'eccellenza organizzativa'
        }
      },
      companyStats: {
        employees: 'Dipendenti in Tutto il Mondo',
        satisfaction: 'Soddisfazione dei Dipendenti',
        retention: 'Tasso di Retention'
      }
    },
    whoWeServe: {
      title: 'Chi Serviamo',
      subtitle: 'Potenziare le istituzioni finanziarie con soluzioni bancarie e crypto innovative',
      hero: {
        title: 'Con Chi Lavoriamo',
        subtitle: 'Private banking costruito intorno alle tue esigenze'
      },
      intro: {
        title: 'Soluzioni Su Misura per Ogni Istituzione',
        description: 'Forniamo servizi finanziari completi a una gamma diversificata di istituzioni, dalle banche tradizionali alle piattaforme crypto all\'avanguardia, il tutto supportato dalla nostra infrastruttura di livello istituzionale e dalla conformità normativa.',
        mainDescription: 'Lavoriamo con individui ad alto patrimonio netto che hanno esigenze finanziarie specifiche. I nostri servizi di private banking sono disponibili per individui, famiglie e imprenditori con patrimoni investibili di 1 milione di euro o più. Per clienti con patrimoni di 25 milioni di euro o più, offriamo una gestione patrimoniale specializzata che affronta le particolari sfide che derivano da un patrimonio sostanziale.'
      },
      sections: {
        lifeStage: {
          title: 'Gestire il Patrimonio Attraverso i Cambiamenti della Vita',
          description: 'Le tue priorità finanziarie cambiano man mano che la tua vita evolve. Forse stai pianificando un pensionamento anticipato, considerando una seconda casa, o bilanciando la crescita professionale con la crescita di una famiglia. Ti aiutiamo a navigare queste transizioni e a prendere decisioni che supportano i tuoi obiettivi in ogni fase.'
        },
        business: {
          title: 'Per Imprenditori e Titolari d\'Azienda',
          description: 'Gestire un\'azienda richiede concentrazione. È facile perdere di vista le tue finanze personali quando stai costruendo un\'impresa. Teniamo d\'occhio sia il tuo quadro finanziario aziendale che personale, aiutandoti a individuare opportunità e pianificare il futuro. Lavoriamo anche con ex imprenditori che hanno venduto le loro aziende.'
        },
        exceptionalWealth: {
          title: 'Gestire un Patrimonio Significativo',
          description: 'Quando i tuoi patrimoni raggiungono i 25 milioni di euro o più, la complessità aumenta in modo significativo. Il nostro servizio di gestione patrimoniale privata gestisce queste sfide con un\'attenzione alla privacy per te e la tua famiglia, e una visione a lungo termine verso la conservazione del patrimonio attraverso le generazioni.'
        }
      },
      segments: {
        banks: {
          title: 'Banche',
          description: 'Espandi i tuoi servizi bancari con un\'offerta crypto sicura e regolamentata, inclusi Trading, Staking e Custody'
        },
        assetManagers: {
          title: 'Gestori Patrimoniali',
          description: 'Arricchisci la tua offerta con investimenti crypto attraverso una banca crypto regolamentata.'
        },
        fintechs: {
          title: 'Fintech',
          description: 'Sblocca servizi bancari tradizionali e crypto per i tuoi clienti supportati da un\'infrastruttura di livello istituzionale.'
        },
        exchanges: {
          title: 'Exchange Crypto',
          description: 'Offri una custodia altamente sicura per le crypto dei tuoi clienti attraverso le nostre soluzioni di storage hot e cold.'
        },
        casps: {
          title: 'CASP',
          description: 'Accedi a infrastrutture bancarie, di custodia e trading di livello istituzionale per fornire servizi crypto conformi ai tuoi clienti.'
        }
      },
      specialServices: {
        title: 'Servizi Specializzati',
        description: 'Abbiamo esperienza nel lavorare con clienti in situazioni specifiche che hanno esigenze e domande particolari.',
        partners: {
          title: 'Partner e Dirigenti Senior',
          description: 'Come partner in uno studio professionale o dirigente in una società quotata, hai considerazioni finanziarie specifiche. Vuoi l\'eccellenza nelle tue finanze personali proprio come fai professionalmente. Comprendiamo la tua situazione e possiamo aiutarti a costruire e gestire il tuo patrimonio.'
        },
        expats: {
          title: 'Clienti Internazionali',
          description: 'Vivere e lavorare all\'estero porta complessità finanziaria. Il nostro team di Private Banking Internazionale conosce le sfide che affronti: tasse, giurisdizioni multiple, questioni valutarie. Forniamo guida chiara e soluzioni che funzionano oltre i confini.'
        },
        associations: {
          title: 'Organizzazioni Non Profit e Fondazioni',
          description: 'Lavoriamo con associazioni, fondazioni e organizzazioni religiose che gestiscono patrimoni significativi. I nostri relationship manager comprendono la tua missione e portano competenza finanziaria e connessioni per aiutarti a raggiungere i tuoi obiettivi.'
        },
        familyOffices: {
          title: 'Supporto per Family Office',
          description: 'Se rappresenti un family office, sai che il tuo ruolo è garantire che i tuoi clienti ricevano un servizio di private banking eccellente e discreto. Il nostro desk Family Office condivide questo impegno e può collaborare con te per servire i tuoi clienti.'
        }
      },
      cta: {
        title: 'Interessato a Lavorare Insieme?',
        description: 'Parliamo per vedere se i nostri servizi di private banking sono adatti alla tua situazione.',
        consultation: 'Pianifica una Chiamata',
        learnMore: 'Scopri di Più'
      },
      stats: {
        partners: 'Istituzioni Partner',
        assets: 'Patrimonio in Custodia',
        support: 'Supporto e Monitoraggio'
      }
    },
    ourApproachPage: {
      title: 'Come lavoriamo',
      subtitle: 'Ti aiutiamo a gestire il tuo patrimonio e pianificare il futuro',
      intro: {
        paragraph1: 'Gestire un patrimonio porta opportunità, ma comporta anche sfide personali e aziendali. Queste richiedono attenzione e soluzioni personalizzate.',
        paragraph2: 'Lavoriamo con te per comprendere la tua situazione finanziaria e aiutarti a prendere decisioni informate sul tuo patrimonio.'
      },
      rightPartner: {
        title: 'Il tuo banker personale',
        description: 'La tua situazione finanziaria richiede attenzione personale. Il tuo private banker è il tuo principale punto di contatto per le domande sulle tue finanze e sul tuo patrimonio. Ti mettiamo in contatto con il banker che ha esperienza con situazioni come la tua. Con anni di esperienza nel lavoro con famiglie di alto valore e imprenditori, il tuo private banker può aiutarti a gestire le questioni di gestione patrimoniale e pianificazione finanziaria.'
      },
      testimonial: {
        quote: 'Mi sono sentito ascoltato e compreso, ed è stato molto importante per fare un passo avanti',
        author: 'Hans Gitsels',
        role: 'Cliente | Aareal Bank AG'
      },
      atYourService: {
        title: 'Come ti aiutiamo',
        privateBanker: {
          title: 'Un punto di contatto dedicato',
          description: 'Il tuo private banker è più di un consulente finanziario. È qualcuno che comprende la tua situazione e può aiutarti con tutte le tue domande finanziarie.'
        },
        expertise: {
          title: 'Accesso agli specialisti',
          description: 'Combiniamo l\'esperienza con la conoscenza attuale del mercato per darti informazioni pertinenti. Che tu stia affrontando una transizione aziendale o una pianificazione finanziaria complessa, i nostri specialisti possono aiutarti.'
        },
        tailored: {
          title: 'Soluzioni per la tua situazione',
          description: 'Sappiamo che le tue esigenze finanziarie sono specifiche per te. Per questo personalizziamo il nostro approccio alla tua situazione. Di solito iniziamo con la pianificazione patrimoniale in modo da poter affrontare le tue priorità subito.'
        }
      },
      familyBanking: {
        title: 'Private banking per la tua famiglia',
        description: 'Anche la tua famiglia può lavorare con noi. Aiutiamo con le questioni che le famiglie di alto valore affrontano spesso. Possiamo facilitare le conversazioni con i tuoi figli adulti sul patrimonio familiare e sui tuoi piani per il futuro. Aiutiamo anche a preparare i giovani adulti a gestire un patrimonio significativo.'
      },
      alsoOfInterest: {
        title: 'Potrebbe interessarti anche',
        events: {
          title: 'Eventi',
          description: 'I nostri eventi ti danno l\'opportunità di incontrare altre persone e condividere esperienze e conoscenze.'
        },
        secureBanking: {
          title: 'Sicurezza',
          description: 'Lavoriamo per mantenere sicuro il tuo banking online attraverso molteplici misure di protezione e prevenzione delle frodi.'
        },
        betterWorld: {
          title: 'Contribuire a un mondo migliore',
          description: 'Insieme possiamo fare una differenza positiva, ora e per le generazioni future.'
        }
      }
    },
    financialEducation: {
      title: 'Centro di Educazione Finanziaria',
      subtitle: 'Potenziati con la conoscenza. Impara sulla budgetizzazione, risparmio, investimenti e gestione del credito attraverso la nostra biblioteca completa di articoli, video e strumenti interattivi.',
      search: 'Cerca articoli, argomenti o parole chiave...',
      tabs: {
        articles: 'Articoli Educativi',
        news: 'Notizie Finanziarie'
      },
      categories: {
        all: 'Tutti gli Argomenti',
        budgeting: 'Budgetizzazione',
        saving: 'Risparmio',
        investing: 'Investimenti',
        credit: 'Credito'
      },
      newsCategories: {
        all: 'Tutte le Notizie',
        banking: 'Bancario',
        economy: 'Economia',
        crypto: 'Crypto'
      },
      articles: {
        title: 'Tutti gli Articoli',
        allArticles: 'Tutti gli Articoli',
        categoryArticles: {
          budgeting: 'Articoli sul Budget',
          saving: 'Articoli sul Risparmio',
          investing: 'Articoli sugli Investimenti',
          credit: 'Articoli sul Credito'
        },
        featured: 'IN EVIDENZA',
        readArticle: 'Leggi l\'Articolo',
        closeArticle: 'Chiudi Articolo',
        minRead: 'min di lettura',
        noArticles: 'Nessun articolo trovato corrispondente ai tuoi criteri.',
        difficulty: {
          beginner: 'PRINCIPIANTE',
          intermediate: 'INTERMEDIO',
          advanced: 'AVANZATO'
        }
      },
      news: {
        title: 'Ultime Notizie Finanziarie',
        latestNews: 'Ultime Notizie Finanziarie',
        categoryNews: {
          banking: 'Notizie Bancarie',
          economy: 'Notizie Economiche',
          crypto: 'Notizie Crypto'
        },
        readFull: 'Leggi l\'Articolo Completo',
        noNews: 'Nessuna notizia trovata.',
        justNow: 'Proprio ora',
        hoursAgo: 'h fa'
      },
      calculators: {
        backToEducation: 'Torna al Centro Educativo',
        budgetCalc: {
          title: 'Calcolatore di Budget Mensile',
          monthlyIncome: 'Reddito Mensile',
          housing: 'Abitazione',
          transportation: 'Trasporti',
          food: 'Cibo e Spesa',
          utilities: 'Utenze',
          insurance: 'Assicurazione',
          entertainment: 'Intrattenimento',
          savings: 'Risparmio',
          other: 'Altro',
          summary: 'Riepilogo Budget',
          totalIncome: 'Reddito Totale',
          totalExpenses: 'Spese Totali',
          remaining: 'Rimanente',
          ruleTitle: 'Analisi Regola 50/30/20',
          needs: 'Necessità',
          wants: 'Desideri',
          target: 'Obiettivo',
          savingsRate: 'Tasso di Risparmio',
          greatJob: 'Ottimo lavoro!',
          goodStart: 'Buon inizio!',
          tryIncrease: 'Prova ad aumentare il tuo risparmio'
        },
        savingsCalc: {
          title: 'Calcolatore Obiettivo di Risparmio',
          savingsGoal: 'Obiettivo di Risparmio',
          currentSavings: 'Risparmio Attuale',
          monthlyContribution: 'Contributo Mensile',
          interestRate: 'Tasso di Interesse',
          whatSavingFor: 'Per cosa stai risparmiando?',
          howMuchNow: 'Quanto hai ora?',
          howMuchMonthly: 'Quanto puoi risparmiare ogni mese?',
          expectedReturn: 'Rendimento annuo atteso sul risparmio',
          timeline: 'Cronologia verso l\'Obiettivo',
          timeToReach: 'Tempo per raggiungere l\'obiettivo',
          targetDate: 'Data Obiettivo',
          breakdown: 'Dettaglio Progressi',
          goalAmount: 'Importo Obiettivo',
          startingBalance: 'Saldo Iniziale',
          stillNeeded: 'Ancora Necessario',
          totalContributions: 'Contributi Totali',
          interestEarned: 'Interessi Guadagnati',
          progressBar: 'Barra di Progresso',
          quickTips: 'Suggerimenti Rapidi',
          tip1: 'Automatizza i tuoi trasferimenti di risparmio',
          tip2: 'Inizia in piccolo e aumenta nel tempo',
          tip3: 'Usa conti di risparmio ad alto rendimento',
          tip4: 'Rivedi e adatta mensilmente'
        },
        compoundCalc: {
          title: 'Calcolatore Interesse Composto',
          initialInvestment: 'Investimento Iniziale',
          monthlyContribution: 'Contributo Mensile',
          yearsToGrow: 'Anni di Crescita',
          annualRate: 'Tasso di Interesse Annuale',
          compoundFrequency: 'Frequenza di Capitalizzazione',
          monthly: 'Mensile',
          annually: 'Annuale',
          futureValue: 'Valore Futuro',
          breakdown: 'Dettaglio',
          totalContributions: 'Contributi Totali',
          interestEarned: 'Interessi Guadagnati',
          totalValue: 'Valore Totale',
          growthOverTime: 'Crescita nel Tempo',
          year: 'Anno',
          balance: 'Saldo',
          interest: 'Interesse',
          afterYears: 'Dopo {years} anni',
          rule72: 'Regola del 72',
          rule72Text: 'Con un rendimento annuale del {rate}%, il tuo denaro raddoppierà in circa {years} anni.'
        },
        debtCalc: {
          title: 'Calcolatore Rimborso Debito',
          totalDebt: 'Saldo Totale Debito',
          interestRate: 'Tasso di Interesse (APR)',
          monthlyPayment: 'Pagamento Mensile',
          minimumPayment: 'Pagamento minimo',
          paymentTooLow: 'Pagamento Troppo Basso!',
          paymentWarning: 'Il tuo pagamento mensile deve essere superiore al minimo per ripagare questo debito. A questo ritmo, non lo ripagherai mai!',
          timeline: 'Cronologia di Rimborso',
          timeToDebtFree: 'Tempo per Liberarti dal Debito',
          debtFreeDate: 'Data di Libertà dal Debito',
          breakdown: 'Dettaglio Costi',
          originalBalance: 'Saldo Originale',
          totalInterest: 'Interessi Totali Pagati',
          totalPaid: 'Importo Totale Pagato',
          doublePayment: 'Raddoppia il Tuo Pagamento?',
          doubleText: 'Vedi cosa succede se paghi {amount} $ al mese',
          timeSaved: 'Tempo Risparmiato',
          interestSaved: 'Interessi Risparmiati',
          newPayoffTime: 'Nuovo Tempo di Rimborso',
          strategies: 'Strategie di Rimborso',
          strategy1: 'Paga più del minimo',
          strategy2: 'Effettua pagamenti bisettimanali',
          strategy3: 'Usa entrate extra (bonus, rimborsi fiscali)',
          strategy4: 'Riduci temporaneamente le spese',
          strategy5: 'Considera il trasferimento del saldo (0% APR)',
          progressViz: 'Visualizzazione Progressi',
          principal: 'Capitale',
          interest: 'Interesse'
        },
        retirementCalc: {
          title: 'Calcolatore Pensione',
          currentAge: 'Età Attuale',
          retirementAge: 'Età Pensionamento',
          currentSavings: 'Risparmio Pensionistico Attuale',
          monthlyContribution: 'Contributo Mensile',
          expectedReturn: 'Rendimento Annuale Atteso',
          desiredIncome: 'Reddito Mensile Pensionistico Desiderato',
          yearsUntil: '{years} anni fino alla pensione',
          historicalAvg: 'Media storica: 7-8% per portafogli diversificati',
          perYear: 'all\'anno',
          onTrack: 'Sei sulla Buona Strada!',
          onTrackText: 'In base al tuo piano attuale, dovresti avere abbastanza per la pensione.',
          projectedIncome: 'Reddito Mensile Proiettato',
          actionNeeded: 'Azione Necessaria',
          actionText: 'Potrebbe essere necessario adattare il tuo piano pensionistico per raggiungere il tuo obiettivo di reddito.',
          additionalNeeded: 'Contributo Mensile Aggiuntivo Necessario',
          snapshot: 'Istantanea Pensione',
          yearsToRetirement: 'Anni alla Pensione',
          projectedNestEgg: 'Gruzzolo Proiettato',
          totalContributions: 'Contributi Totali',
          investmentGains: 'Guadagni da Investimenti',
          monthlyIncome: 'Reddito Mensile',
          composition: 'Composizione Risparmio',
          initialSavings: 'Risparmio Iniziale',
          contributions: 'Contributi',
          investmentGrowth: 'Crescita Investimenti',
          rule4Percent: 'La Regola del 4%',
          rule4PercentText: 'Una linea guida comune per la pensione suggerisce di prelevare il 4% del tuo portafoglio annualmente. In base ai tuoi risparmi proiettati:',
          safeAnnual: 'Prelievo Annuale Sicuro',
          safeMonthly: 'Reddito Mensile Sicuro',
          tipsTitle: 'Consigli per la Pianificazione Pensionistica',
          tip1: 'Massimizza il contributo 401(k) del datore di lavoro',
          tip2: 'Considera un Roth IRA per crescita esentasse',
          tip3: 'Aumenta i contributi con gli aumenti',
          tip4: 'Diversifica i tuoi investimenti',
          tip5: 'Inizia il prima possibile'
        }
      },
      videoTutorials: {
        title: 'Tutorial Video',
        description: 'Prossimamente: Guarda la nostra serie di video condotta da esperti su argomenti di finanza personale.',
        notify: 'Notificami'
      },
      consultation: {
        title: 'Hai Bisogno di una Guida Personale?',
        description: 'Prenota una consulenza gratuita con uno dei nostri consulenti finanziari.',
        button: 'Prenota Consulenza'
      },
      finalCta: {
        title: 'Inizia il Tuo Percorso Finanziario Oggi',
        description: 'La conoscenza è il primo passo verso la libertà finanziaria. Esplora le nostre risorse, usa i nostri strumenti e prendi il controllo del tuo futuro finanziario.',
        openAccount: 'Apri un Conto',
        contactUs: 'Contattaci'
      }
    },
    support: {
      title: 'Assistenza Clienti',
      subtitle: 'Siamo qui per aiutarti con tutte le tue esigenze bancarie. Scegli il modo migliore per contattarci.',
      phone: {
        title: 'Supporto Telefonico 24/7',
        description: 'Parla con un rappresentante in qualsiasi momento, giorno e notte.',
        action: 'Chiama Ora'
      },
      chat: {
        title: 'Chat dal Vivo',
        description: 'Ottieni aiuto istantaneo attraverso il nostro sistema di chat sicuro.',
        detail: 'Disponibile 24/7',
        action: 'Avvia Chat'
      },
      email: {
        title: 'Supporto Email',
        description: 'Inviaci un messaggio dettagliato e ti risponderemo entro 24 ore.',
        action: 'Invia Email'
      },
      faq: {
        title: 'Domande Frequenti',
        items: [
          {
            q: 'Come reimposto la mia password di online banking?',
            a: 'Clicca su \'Password Dimenticata\' nella pagina di accesso. Inserisci il tuo nome utente e indirizzo email, e ti invieremo un link sicuro per reimpostare la password. Il link scade dopo 24 ore per sicurezza.'
          },
          {
            q: 'Quali sono i vostri tassi di interesse attuali?',
            a: 'I tassi di interesse variano in base al tipo di conto e al saldo. Visita la nostra pagina Tassi per informazioni aggiornate sui rendimenti dei conti di risparmio, CD e prodotti di prestito. I tassi vengono aggiornati quotidianamente.'
          },
          {
            q: 'Quanto tempo impiega un bonifico bancario?',
            a: 'I bonifici domestici si completano tipicamente entro 24 ore. I bonifici internazionali possono richiedere 3-5 giorni lavorativi a seconda del paese di destinazione e delle banche intermediarie.'
          },
          {
            q: 'L\'online banking è sicuro?',
            a: 'Sì, la nostra piattaforma di online banking utilizza crittografia bancaria a 256 bit, autenticazione multi-fattore e monitoraggio delle frodi in tempo reale per proteggere le informazioni del tuo conto.'
          },
          {
            q: 'Come segnalo una carta smarrita o rubata?',
            a: 'Chiama immediatamente i nostri servizi carta 24/7 al 1-800-ANCHOR. Puoi anche bloccare temporaneamente la tua carta accedendo all\'online banking.'
          },
          {
            q: 'Quali sono le vostre commissioni bancomat?',
            a: 'I bancomat Aareal Bank AG sono gratuiti per i titolari di conto. Rimborsiamo anche fino a $20/mese in commissioni bancomat fuori rete per i titolari di conti premium.'
          },
          {
            q: 'Come apro un conto aziendale?',
            a: 'Visita qualsiasi filiale con i documenti di registrazione aziendale, EIN e documento d\'identità governativo. Puoi anche iniziare la richiesta online e completarla di persona.'
          },
          {
            q: 'Come deposito gli assegni?',
            a: 'Puoi depositare assegni presso qualsiasi filiale o bancomat Aareal Bank AG. Semplicemente gira l\'assegno e segui le istruzioni sullo schermo. I fondi sono tipicamente disponibili entro 1-2 giorni lavorativi.'
          }
        ],
        viewAll: 'Vedi Tutte le FAQ'
      },
      hours: {
        title: 'Orari Filiali',
        weekdays: 'Lunedì - Venerdì:',
        weekdaysTime: '9:00 - 17:00',
        saturday: 'Sabato:',
        saturdayTime: '9:00 - 14:00',
        sunday: 'Domenica:',
        sundayTime: 'Chiuso',
        support247: 'Supporto telefonico e online disponibile 24/7'
      }
    },
    mortgage: {
      title: 'Servizi Ipotecari',
      subtitle: 'Trova la soluzione ipotecaria perfetta per la tua casa con tassi competitivi e termini flessibili.',
      typesTitle: 'Opzioni Ipotecarie',
      types: {
        fixed: {
          title: 'Mutuo a Tasso Fisso',
          description: 'Pagamenti mensili stabili con un tasso di interesse fisso per la durata del prestito.',
          features: [
            'Pagamenti mensili prevedibili',
            'Protezione contro aumenti di tasso',
            'Termini da 15 a 30 anni',
            'Ideale per proprietà a lungo termine'
          ]
        },
        adjustable: {
          title: 'Mutuo a Tasso Variabile',
          description: 'Tassi iniziali più bassi che si adeguano periodicamente in base alle condizioni di mercato.',
          features: [
            'Tassi di interesse iniziali più bassi',
            'Adeguamenti di tasso dopo periodo iniziale',
            'Ideale per proprietà a breve termine',
            'Potenziale per interessi totali più bassi'
          ]
        },
        fha: {
          title: 'Prestiti FHA',
          description: 'Prestiti garantiti dal governo con requisiti di acconto più bassi.',
          features: [
            'Acconto a partire dal 3,5%',
            'Requisiti di credito più flessibili',
            'Protezione assicurativa governativa',
            'Ottimo per primi acquirenti'
          ]
        },
        va: {
          title: 'Prestiti VA',
          description: 'Programmi ipotecari speciali per veterani e militari idonei.',
          features: [
            'Nessun acconto richiesto',
            'Nessuna assicurazione ipotecaria privata',
            'Tassi di interesse competitivi',
            'Costi di chiusura limitati'
          ]
        }
      },
      calculator: {
        title: 'Calcolatore Mutui',
        description: 'Stima il tuo pagamento ipotecario mensile con il nostro calcolatore facile da usare.',
        loanAmount: 'Importo Prestito',
        interestRate: 'Tasso di Interesse',
        loanTerm: 'Durata Prestito',
        downPayment: 'Acconto',
        years: 'anni',
        calculate: 'Calcola Pagamento'
      },
      processTitle: 'Il Processo Ipotecario',
      process: {
        preapproval: {
          title: 'Pre-Approvazione',
          description: 'Ottieni la pre-approvazione per conoscere il tuo budget e rafforzare la tua offerta.'
        },
        shopping: {
          title: 'Ricerca Casa',
          description: 'Trova la tua casa perfetta con fiducia nel tuo finanziamento.'
        },
        application: {
          title: 'Domanda',
          description: 'Completa la tua domanda di mutuo con il nostro processo facile.'
        },
        closing: {
          title: 'Chiusura',
          description: 'Finalizza il tuo mutuo e ottieni le chiavi della tua nuova casa.'
        }
      },
      cta: {
        title: 'Pronto ad Acquistare la Tua Casa?',
        description: 'Inizia la tua domanda di mutuo oggi o parla con uno dei nostri specialisti ipotecari.',
        button: 'Richiedi Ora'
      }
    },
    aboutUs: {
      title: 'Chi è Aareal Bank AG',
      subtitle: 'Costruire prosperità attraverso valori bancari tradizionali e servizio personalizzato dal 1952.',
      mission: {
        title: 'La Nostra Missione',
        description: 'Gli asset digitali sono diventati maggiorenni e i servizi bancari devono essere all\'altezza della sfida. Il trading, l\'investimento e la conservazione di criptovalute e altri asset digitali non dovrebbero essere un \'aggiunta\' al banking tradizionale, ma un servizio integrato che si collega a ogni altro aspetto dei servizi bancari di un cliente. Aareal Bank AG è stata fondata per fornire esattamente questa soluzione a investitori professionali, aziende, family office e istituzioni.'
      },
      vision: {
        title: 'La Nostra Visione',
        description: 'Essere l\'istituzione finanziaria più affidabile e rispettata nella nostra regione, nota per innovazione, integrità e impegno incrollabile verso il successo dei clienti.'
      },
      futureFinance: {
        title: 'Creare il futuro della finanza',
        description: 'Abbiamo guidato con una nuova visione bancaria che abbatte le barriere tra i servizi finanziari tradizionali e il supporto per gli asset digitali. I nostri prodotti e soluzioni pluripremiati offrono un servizio senza soluzione di continuità per tutte le principali classi di asset, inclusi asset tradizionali, criptovalute e reti blockchain.'
      },
      principles: {
        title: 'I nostri principi',
        description: 'Offriamo tutte le funzionalità del banking moderno inclusa la crypto, accessibile attraverso un unico gateway e supportata dai più elevati standard di sicurezza. La nostra missione si basa su tre parole chiave:',
        sophisticated: {
          title: 'Sofisticato',
          description: 'Rivoluzionare la tua esperienza finanziaria con tecnologia all\'avanguardia e soluzioni innovative'
        },
        seamless: {
          title: 'Fluido',
          description: 'Collegare il mondo della finanza tradizionale e digitale con transazioni integrate e senza sforzo'
        },
        secure: {
          title: 'Sicuro',
          description: 'Mantenere le tue finanze al sicuro con una protezione forte e leader del settore'
        }
      },
      valuesTitle: 'I Nostri Valori Fondamentali',
      values: {
        integrity: {
          title: 'Integrità',
          description: 'Conduciamo gli affari con onestà, trasparenza e principi etici.'
        },
        community: {
          title: 'Comunità',
          description: 'Investiamo e supportiamo le comunità che serviamo.'
        },
        excellence: {
          title: 'Eccellenza',
          description: 'Ci sforziamo per l\'eccellenza in tutto ciò che facciamo.'
        },
        innovation: {
          title: 'Innovazione',
          description: 'Abbracciamo l\'innovazione per servire meglio i nostri clienti.'
        }
      },
      historyTitle: 'Il Nostro Percorso',
      milestones: {
        founded: {
          title: 'Fondazione Aareal Bank AG',
          description: 'Iniziato come piccola banca comunitaria con impegno per il servizio personalizzato.'
        },
        expansion: {
          title: 'Espansione Regionale',
          description: 'Cresciuta per servire più comunità nella regione con 10 nuove filiali.'
        },
        digital: {
          title: 'Lancio Banca Digitale',
          description: 'Lanciati servizi bancari online completi per servire i clienti 24/7.'
        },
        branches: {
          title: 'Oggi',
          description: 'Ora serve oltre 50.000 clienti in 25 filiali con oltre $2 miliardi di asset.'
        }
      },
      stats: {
        customers: '50.000+',
        customersLabel: 'Clienti Soddisfatti',
        branches: '25',
        branchesLabel: 'Filiali',
        employees: '500+',
        employeesLabel: 'Dipendenti Dedicati'
      },
      cta: {
        title: 'Unisciti alla Nostra Famiglia Bancaria',
        description: 'Scopri la differenza Aareal Bank AG con servizio personalizzato e soluzioni bancarie moderne.',
        button: 'Apri un Conto'
      }
    },
    currencyExchange: {
      title: 'Cambio Valuta',
      subtitle: 'Scambia valute fiat e criptovalute con tassi competitivi e trasferimenti istantanei',
      converter: {
        title: 'Convertitore di Valuta',
        from: 'Da',
        to: 'A',
        exchangeRate: 'Tasso di Cambio',
        executeExchange: 'Esegui Scambio',
        fiat: 'Fiat',
        crypto: 'Crypto',
        rateAlert: {
          title: 'Avviso di Tasso',
          description: 'Ricevi una notifica quando il tasso di cambio desiderato è disponibile',
          placeholder: 'Tasso obiettivo',
          setAlert: 'Imposta Avviso',
          notification: 'Notifiche istantanee via email e SMS'
        }
      },
      cryptoRates: {
        title: 'Tassi Criptovalute'
      },
      fiatCurrencies: {
        title: 'Principali Valute Fiat',
        perUsd: 'per USD'
      },
      wireTransfer: {
        title: 'Bonifico Internazionale',
        features: {
          lowFees: {
            title: 'Commissioni Basse',
            description: 'A partire da soli $15 per bonifici internazionali'
          },
          fast: {
            title: 'Trasferimenti Veloci',
            description: 'La maggior parte dei trasferimenti si completa entro 24-48 ore'
          },
          global: {
            title: '200+ Paesi',
            description: 'Invia denaro in oltre 200 paesi in tutto il mondo'
          }
        },
        calculator: {
          title: 'Calcolatore Commissioni Bonifico',
          amount: 'Importo Bonifico',
          destination: 'Paese di Destinazione',
          transferFee: 'Commissione Bonifico',
          exchangeMarkup: 'Margine Tasso di Cambio',
          totalCost: 'Costo Totale'
        }
      },
      cta: {
        title: 'Inizia a Scambiare Oggi',
        description: 'Apri un conto Aareal Bank AG per accedere a tassi di cambio competitivi e bonifici internazionali a basso costo',
        button: 'Apri un Conto'
      }
    },
    trustSection: {
      title: 'Valute Supportate',
      subtitle: 'Lavoriamo con valute tradizionali e digitali',
      crypto: {
        title: 'Crypto Asset Disponibili',
        description: 'Acquista, vendi e conserva le principali criptovalute con archiviazione sicura',
        more: 'e molti altri...'
      },
      fiat: {
        title: 'Valute Fiat Disponibili',
        description: 'Lavora con le principali valute di tutto il mondo',
        more: 'e molti altri...'
      }
    },
    newsletter: {
      title: 'Iscriviti alla Nostra Newsletter',
      subtitle: 'Ricevi le ultime notizie, consigli finanziari e offerte esclusive',
      emailPlaceholder: 'Inserisci la tua email',
      subscribe: 'Iscriviti',
      success: 'Grazie per esserti iscritto!',
      error: 'Si è verificato un errore. Riprova.',
      alreadySubscribed: 'Questa email è già iscritta'
    },
    news: {
      title: 'Ultime Notizie',
      subtitle: 'Rimani informato sugli ultimi sviluppi del mondo finanziario',
      categories: {
        all: 'Tutti',
        banking: 'Banca',
        economy: 'Economia',
        crypto: 'Crypto'
      },
      readMore: 'Leggi di Più',
      loading: 'Caricamento notizie...',
      error: 'Impossibile caricare le notizie',
      noArticles: 'Nessun articolo trovato',
      publishedBy: 'Pubblicato da'
    },
    difference: {
      title: 'Perché Scegliere Aareal Bank AG',
      safety: 'Sicurezza',
      safetyDesc: 'Il tuo denaro è protetto con misure di sicurezza comprovate. Non prendiamo scorciatoie quando si tratta di proteggere i tuoi conti.',
      transparency: 'Trasparenza',
      transparencyDesc: 'Accedi a tutti i tuoi conti in un unico posto. Vedi esattamente dove sono i tuoi soldi e cosa stanno facendo.',
      performance: 'Prestazione',
      performanceDesc: 'Rimaniamo aggiornati con la tecnologia finanziaria così puoi approfittare di nuove opportunità quando hanno senso per te.'
    },
    investmentHighlight: {
      title: 'Investimenti',
      subtitle: 'Crypto, contanti, azioni o investimenti tradizionali',
      description: 'Dalle azioni alle crypto, abbiamo opzioni che corrispondono ai tuoi obiettivi.'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      services: 'Dienstleistungen',
      about: 'Über Uns',
      contact: 'Kontakt',
      accounts: 'Konten',
      loans: 'Kredite'
    },
    hero: {
      title: 'Finanzlösungen für das digitale Zeitalter',
      subtitle: 'Seit 1892',
      description: 'Vereint traditionelle Finanzexpertise mit modernster Technologie, um die Zukunft des Finanzwesens zu gestalten.',
      openAccount: 'Konto Eröffnen',
      learnMore: 'Mehr Erfahren'
    },
    services: {
      title: 'Unsere Dienstleistungen',
      subtitle: 'Was Wir Anbieten',
      personal: {
        title: 'Privatbanking',
        description: 'Konten, die zu Ihrem Leben passen. Gute Zinsen, keine Überraschungsgebühren.'
      },
      business: {
        title: 'Firmenkundengeschäft',
        description: 'Banking-Tools für Unternehmen, egal ob Sie gerade starten oder bereits etabliert sind.'
      },
      loans: {
        title: 'Kredite & Hypotheken',
        description: 'Faire Zinsen für Haus-, Auto- und Privatkredite. Wir erklären alles von Anfang an.'
      },
      investment: {
        title: 'Anlageberatung',
        description: 'Hilfe bei der Planung Ihrer finanziellen Zukunft und dem Wachstum Ihrer Ersparnisse.'
      },
      digital: {
        title: 'Digitales Banking',
        description: 'Prüfen Sie Ihre Konten, überweisen Sie Geld und bezahlen Sie Rechnungen online oder auf dem Handy, jederzeit.'
      }
    },
    trust: {
      title: 'Sicherheit & Vertrauen',
      subtitle: 'Ihre Finanzielle Sicherheit ist Unsere Priorität',
      imageCaption1: 'Banksicherheit',
      imageCaption2: 'Expertenberater',
      security: {
        title: 'Erweiterte Sicherheit',
        description: 'Militärische Verschlüsselung und Multi-Faktor-Authentifizierung schützen Ihre Konten.'
      },
      privacy: {
        title: 'Geschützte Privatsphäre',
        description: 'Ihre persönlichen Daten werden mit branchenführenden Datenschutzmaßnahmen geschützt.'
      },
      excellence: {
        title: 'Preisgekrönter Service',
        description: 'Anerkannt für Exzellenz im Kundenservice und finanzielle Innovation.'
      },
      support: {
        title: '24/7 Support',
        description: 'Unser engagiertes Team steht Ihnen rund um die Uhr zur Verfügung.'
      }
    },
    about: {
      title: 'Über Aareal Bank AG',
      subtitle: 'Finanzlösungen für das digitale Zeitalter',
      description: 'Traditionelle Finanzexpertise mit modernster Technologie verbinden, um die Zukunft des Finanzwesens zu gestalten.',
      stats: {
        years: 'Jahre Service',
        customers: 'Zufriedene Kunden',
        branches: 'Filialen',
        assets: 'Verwaltetes Vermögen'
      }
    },
    contact: {
      title: 'Kontaktieren Sie Uns',
      subtitle: 'Wir Sind Für Sie Da',
      phone: 'Telefon',
      email: 'E-Mail',
      hours: 'Öffnungszeiten',
      hoursValue: 'Montag - Freitag: 9:00 - 17:00 Uhr',
      address: 'Hauptfiliale Adresse',
      addressValue: '123 Finanzviertel, Banking Plaza, Suite 100'
    },
    footer: {
      tagline: 'Aareal Bank AG',
      quickLinks: 'Schnelllinks',
      legal: 'Rechtliches',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      security: 'Sicherheit',
      accessibility: 'Barrierefreiheit',
      rights: 'Alle Rechte vorbehalten.',
      fdic: 'FDIC-Mitglied. Gleichberechtigter Wohnungsbaukreditgeber.'
    },
    personalBanking: {
      title: 'Privatbanking',
      subtitle: 'Umfassende Banklösungen, um Ihnen beim Verwalten, Sparen und Vermehren Ihres Geldes zu helfen.',
      hero: {
        title: 'Private Banking für vermögende Kunden',
        subtitle: 'Persönliche Finanzberatung für Privatpersonen und Familien'
      },
      intro: 'Ihre finanzielle Situation ist einzigartig. Wir arbeiten mit vermögenden Privatpersonen, Unternehmern und Familien, die mehr als Standard-Banking benötigen. Unsere Berater nehmen sich Zeit, Ihre Ziele zu verstehen und einen Plan zu entwickeln, der zu Ihrer Situation passt. Ob Sie Vermögen bewahren, vermehren oder an die nächste Generation weitergeben möchten—wir sind für Sie da.',
      getToKnow: {
        title: 'Erfahren Sie mehr über unsere Private-Banking-Dienste',
        forWho: {
          title: 'Wen wir beraten',
          description: 'Prüfen Sie, ob unsere Dienste zu Ihnen passen'
        },
        approach: {
          title: 'Wie wir arbeiten',
          description: 'Unser Ansatz für Ihre Vermögensverwaltung'
        },
        expertise: {
          title: 'Unsere Erfahrung',
          description: 'Was wir mitbringen'
        },
        becomeClient: {
          title: 'Kunde werden',
          description: 'Einstieg ins Private Banking'
        }
      },
      wealthPlan: {
        title: 'Ihre finanziellen Ziele und Prioritäten',
        description: 'Was möchten Sie mit Ihrem Geld tun? Es sicher aufbewahren, vermehren oder an Ihre Familie weitergeben? Ein Vermögensplan hilft Ihnen, das große Ganze zu sehen. Wir betrachten Ihre aktuelle Situation, Ihre Ziele und was Ihnen am wichtigsten ist—Ihre Familie, Ihr Vermögen, Ihr Unternehmen. Jeder neue Kunde erhält einen kostenlosen Vermögensplan. So stellen wir sicher, dass wir Ihnen die richtige Beratung geben.'
      },
      highlights: {
        expertise: {
          title: 'Viele Jahre Erfahrung',
          description: 'In dieser Zeit haben wir viel darüber gelernt, wie man Menschen hilft, ihr Geld in guten und schlechten Zeiten zu verwalten. Was vor Jahrzehnten für unsere Kunden funktionierte, funktioniert heute vielleicht nicht mehr, deshalb passen wir uns ständig an.'
        },
        events: {
          title: 'Kunden-Veranstaltungen',
          description: 'Wir veranstalten Events zu Themen wie Unternehmertum, Investitionen und soziales Engagement. Eine Gelegenheit, andere Kunden zu treffen, Ideen auszutauschen und Experten aus verschiedenen Bereichen zu hören.'
        },
        bestBank: {
          title: 'Preisgekrönte Privatbank',
          description: 'Wir arbeiten hart daran, Ihnen guten Service und fundierte Beratung zu bieten. Unsere Kunden schätzen die persönliche Betreuung, die wir leisten. Wir wurden 2025 als beste europäische Privatbank ausgezeichnet, worauf wir stolz sind.'
        }
      },
      benefits: {
        title: 'Warum Bei Uns Banking?',
        security: {
          title: 'Sicherheit Zuerst',
          description: 'Erweiterter Betrugsschutz und FDIC-Versicherung auf alle Einlagenkonten.'
        },
        digital: {
          title: 'Digitales Banking',
          description: 'Greifen Sie jederzeit und überall mit unserer Mobile-App und Online-Banking auf Ihre Konten zu.'
        }
      },
      calculator: {
        title: 'Sparrechner',
        subtitle: 'Sehen Sie, wie viel Sie mit unseren wettbewerbsfähigen Zinsen verdienen könnten',
        accountType: 'Kontotyp',
        savingsOption: 'Sparkonto - 0,50% APY',
        moneyMarketOption: 'Geldmarkt - 1,25% APY',
        cdOption: '1-Jahres-CD - 3,00% APY',
        initialDeposit: 'Ersteinzahlung',
        estimatedEarnings: 'Geschätzte Erträge (1 Jahr)'
      },
      testimonials: {
        title: 'Kundenstimmen',
        testimonial1: {
          quote: 'Ich bin seit 15 Jahren Kunde bei Aareal Bank AG. Sie kennen meine Situation und geben mir klare Antworten. Ihre Zinsen sind wettbewerbsfähig und ich vertraue ihnen mit meinem Geld.',
          author: 'Sarah M.'
        },
        testimonial2: {
          quote: 'Die Online-Plattform ist einfach zu bedienen und sicher. Ich kann meine Konten prüfen, Rechnungen bezahlen und Geld verschieben ohne Probleme.',
          author: 'Michael T.'
        },
        testimonial3: {
          quote: 'Als ich mein erstes Sparkonto eröffnete, erklärte mir das Personal alles verständlich. Sie beantworteten alle meine Fragen und drängten mich nicht.',
          author: 'Jessica L.'
        }
      },
      comparison: {
        title: 'Kontovergleich',
        feature: 'Merkmal',
        checking: 'Girokonto',
        savings: 'Sparkonto',
        moneyMarket: 'Geldmarkt',
        cd: 'CD',
        minimumBalance: 'Mindestguthaben',
        interestRate: 'Zinssatz',
        monthlyFee: 'Monatliche Gebühr',
        debitCard: 'Debitkarte',
        checkWriting: 'Scheckausstellung',
        onlineBanking: 'Online-Banking'
      }
    },
    businessBanking: {
      title: 'Firmenkundengeschäft',
      subtitle: 'Finanzlösungen für Unternehmen in jeder Wachstumsphase.',
      hero: {
        title: 'Geschäftskonto eröffnen',
        subtitle: 'Sonderangebot für Start-up-Unternehmer: 12 Monate ohne monatliche Gebühr'
      },
      accessOnline: {
        title: 'Access Online',
        description: 'Das ideale System für Ihre Cash-Management-Anforderungen: Verwalten Sie alle Ihre Bankkonten, national und international und sogar solche, die Sie bei anderen Banken führen. Zusätzlich: Zugriff und Kontrolle aller Ihrer Zahlungsströme, überall auf der Welt.'
      },
      sepa: {
        title: 'Alles, was Sie über SEPA und IBAN wissen müssen',
        description: 'Alles, was Sie über SEPA und IBAN wissen müssen, einschließlich technischer Informationen, Beispieldateien und Formulare zu den SEPA-Zahlungsstandards, finden Sie hier.',
        sepaButton: 'SEPA',
        ibanButton: 'IBAN'
      },
      loanCalculator: {
        title: 'Kreditkosten',
        description: 'Geben Sie den gewünschten Kreditbetrag ein und Sie erhalten sofort eine Antwort.',
        why: 'Warum benötigen Sie einen Kredit?',
        purposes: {
          car: 'Auto',
          renovation: 'Renovierung',
          other: 'Andere größere Anschaffung'
        },
        howMuch: 'Wie viel möchten Sie leihen?',
        minAmount: 'Der Mindestbetrag beträgt 5000 €',
        maxAmount: 'Der Höchstbetrag beträgt 75000 €',
        amountTooLow: 'Der Betrag muss mindestens 5000 € betragen',
        amountTooHigh: 'Der Betrag darf 75000 € nicht überschreiten',
        selectTerm: 'Gewünschte Laufzeit auswählen',
        year: 'Jahr',
        years: 'Jahre',
        min: 'Min.',
        max: 'Max.'
      },
      loanResults: {
        title: 'Dies sind die minimalen und maximalen Kosten',
        minimum: 'Minimum',
        maximum: 'Maximum',
        monthlyRepayments: 'Monatliche Raten',
        fixedInterestRate: 'Fester Zinssatz',
        totalCosts: 'Gesamtkosten',
        disclaimer: 'Diese Berechnung ist eine Schätzung. Die genauen monatlichen Raten hängen von Ihrer persönlichen Situation ab.'
      },
      checking: {
        title: 'Geschäftsgirokonto',
        description: 'Geschäftskonto ohne monatliche Kontoführungsgebühr im ersten Jahr.',
        features: ['Keine Transaktionslimits', 'Scheckeinreichung per App', 'Online-Rechnungszahlung inklusive', 'Persönlicher Kundenbetreuer']
      },
      creditCards: {
        title: 'Geschäftskreditkarten',
        description: 'Firmenkarten mit bis zu 1,5% Cashback auf alle Einkäufe und Ausgabenreporting.',
        features: ['1,5% Cashback auf Einkäufe', 'Zusatzkarten ohne Mehrkosten', 'Monatliche Ausgabenberichte', 'Erweiterte Garantie']
      },
      loans: {
        title: 'Geschäftskredite',
        description: 'Betriebsmittel- und Ausrüstungsfinanzierung von 5.000 € bis 500.000 €.',
        features: ['Festzinsen ab 7,5%', 'Laufzeiten von 1-10 Jahren', 'Entscheidung innerhalb 48 Stunden', 'Zugewiesener Firmenkundenbetreuer']
      },
      merchant: {
        title: 'Händlerservices',
        description: 'Kartenakzeptanz mit Abwicklung am nächsten Werktag.',
        features: ['POS-Terminals und Software', 'E-Commerce-Zahlungsgateway', 'Kontaktlos- und Mobilzahlungen', 'Guthaben am nächsten Werktag verfügbar']
      },
      payroll: {
        title: 'Gehaltsabrechnungsservices',
        description: 'Vollständige Lohnabrechnung mit automatischen Steuerberechnungen und Mitarbeiterportal.',
        features: ['Monatliche oder wöchentliche Abrechnung', 'Steuerabzug und -meldung', 'Direkte Kontoüberweisung', 'Mitarbeiterzugriff auf Gehaltshistorie']
      },
      treasury: {
        title: 'Treasury Management',
        description: 'Cash-Management-Tools für Unternehmen mit komplexen Bankanforderungen.',
        features: ['Echtzeit-Saldenreporting', 'Positive-Pay-Betrugsprävention', 'In- und Auslandsüberweisungen', 'Automatisierte Kontenabstimmung']
      },
      cta: {
        title: 'Sprechen Sie mit einem Firmenkundenspezialisten',
        description: 'Kontaktieren Sie unser Team, um die passenden Services für Ihr Unternehmen zu besprechen.',
        button: 'Rückruf Anfordern'
      },
      learnMore: 'Mehr Erfahren'
    },
    loans: {
      title: 'Kreditlösungen',
      subtitle: 'Wettbewerbsfähige Zinsen und flexible Konditionen, um Ihnen beim Erreichen Ihrer finanziellen Ziele zu helfen.',
      home: {
        title: 'Immobilienkredite',
        description: 'Verwirklichen Sie Ihren Traum vom Eigenheim mit wettbewerbsfähigen Hypothekenzinsen.',
        features: ['Feste und variable Zinsen', 'Niedrige Anzahlungsoptionen', 'Erstkäuferprogramme', 'Refinanzierungsoptionen'],
        rate: '5.99%',
        term: '30 Jahre'
      },
      auto: {
        title: 'Autokredite',
        description: 'Fahren Sie mit Ihrem neuen oder gebrauchten Fahrzeug mit flexibler Autofinanzierung davon.',
        features: ['Finanzierung für Neu- und Gebrauchtwagen', 'Wettbewerbsfähige Zinsen', 'Laufzeiten bis zu 72 Monate', 'Vorabgenehmigung verfügbar'],
        rate: '4.49%',
        term: '60 Monate'
      },
      student: {
        title: 'Studentenkredite',
        description: 'Investieren Sie in Ihre Zukunft mit erschwinglichen Bildungsfinanzierungslösungen.',
        features: ['Bachelor- und Graduiertenkredite', 'Keine Bearbeitungsgebühren', 'Flexible Rückzahlungsbedingungen', 'Mitunterzeichner-Freigabeoptionen'],
        rate: '6.25%',
        term: '10 Jahre'
      },
      personal: {
        title: 'Privatkredite',
        description: 'Zugang zu Mitteln für jeden Zweck mit schneller Genehmigung und flexiblen Konditionen.',
        features: ['Kredite bis zu $50.000', 'Keine Sicherheiten erforderlich', 'Taggleiche Finanzierung verfügbar', 'Feste monatliche Zahlungen'],
        rate: '8.99%',
        term: '5 Jahre'
      },
      homeEquity: {
        title: 'Eigenheimkredite',
        description: 'Nutzen Sie Ihr Eigenkapital für Renovierungen, Schuldenkonsolidierung oder größere Ausgaben.',
        features: ['Leihen Sie bis zu 85% des Eigenheimwerts', 'Feste Zinssätze', 'Steuerlich absetzbare Zinsen', 'Keine Vorfälligkeitsentschädigungen'],
        rate: '7.25%',
        term: '15 Jahre'
      },
      business: {
        title: 'Kleinunternehmenskredite',
        description: 'Lassen Sie Ihr Unternehmen mit maßgeschneiderten Finanzierungslösungen für Unternehmer wachsen.',
        features: ['SBA-gesicherte Kredite', 'Kreditlinien', 'Ausrüstungsfinanzierung', 'Betriebsmittelkredite'],
        rate: '7.99%',
        term: '10 Jahre'
      },
      calculator: {
        title: 'Kreditrechner',
        description: 'Berechnen Sie Ihre monatlichen Zahlungen und sehen Sie, wie viel Sie sich leisten können.',
        button: 'Rechner Verwenden'
      },
      preApproval: {
        title: 'Schnelle Vorabgenehmigung',
        description: 'Erhalten Sie in Minuten eine Vorabgenehmigung und kaufen Sie mit Vertrauen.',
        button: 'Vorabgenehmigung Erhalten'
      },
      startingRate: 'Startzins:',
      termLabel: 'Laufzeit:',
      applyNow: 'Jetzt Beantragen'
    },
    creditCards: {
      title: 'Kreditkarten',
      subtitle: 'Finden Sie die perfekte Kreditkarte für Ihren Lebensstil und maximieren Sie Ihre Prämien.',
      rewardsPlus: {
        title: 'Kreditkarte',
        description: 'Verdienen Sie unbegrenztes Cashback bei jedem Einkauf ohne Limits oder Ablaufdatum.',
        features: ['3% Cashback auf Restaurant', '2% Cashback auf Benzin', '1% Cashback auf alle anderen Einkäufe', '$200 Anmeldebonus']
      },
      travelElite: {
        title: 'Platinum Karte',
        description: 'Schalten Sie Premium-Reisevorteile frei und verdienen Sie Meilen für jeden ausgegebenen Dollar.',
        features: ['3X Meilen auf Reisen und Restaurant', '50.000 Bonusmeilen', 'Flughafen-Lounge-Zugang', 'Keine Auslandstransaktionsgebühren']
      },
      everydayCash: {
        title: 'Debitkarte',
        description: 'Einfache Cashback-Prämien für alltägliche Ausgaben ohne komplizierte Kategorien.',
        features: ['1,5% Cashback auf alle Einkäufe', 'Keine Jahresgebühr', '$150 Anmeldebonus', 'Kostenlose Kreditwürdigkeitsüberwachung']
      },
      balanceTransfer: {
        title: 'Prepaid-Karte',
        description: 'Zahlen Sie Schulden schneller ab mit einem Aktions-APR von 0% auf Saldoübertragungen.',
        features: ['0% APR für 18 Monate', 'Keine Saldoübertragungsgebühren', '1% Cashback auf Einkäufe', 'Finanzplanungstools']
      },
      secured: {
        title: 'Gesicherte Prepaid-Karte',
        description: 'Bauen Sie Ihre Kreditwürdigkeit mit einer durch Ihre Einlage gesicherten Karte auf oder wieder auf.',
        features: ['Kreditlinie von $200-$5.000', 'Upgrade auf ungesicherte Karte', 'Meldung an alle Kreditauskunfteien', 'Keine Jahresgebühr']
      },
      premium: {
        title: 'Gold Karte',
        description: 'Elite-Vorteile und Luxusprivilegien für unsere wertvollsten Kunden.',
        features: ['5X Punkte auf ausgewählte Kategorien', '100.000 Bonuspunkte', 'Concierge-Service 24/7', 'Reise- und Kaufversicherung']
      },
      apr: 'APR:',
      annualFee: 'Jahresgebühr:',
      applyNow: 'Jetzt Beantragen',
      calculator: {
        title: 'Prämienrechner',
        subtitle: 'Schätzen Sie Ihre jährlichen Prämien basierend auf Ausgaben',
        monthlySpending: 'Monatliche Ausgaben',
        perYear: '/Jahr',
        rewardsPlusLabel: 'Kreditkarte (1,5% Cashback)',
        everydayCashLabel: 'Debitkarte (3% Lebensmittel, 2% Benzin)',
        travelEliteLabel: 'Platinum Karte (3x Punkte auf Reisen)'
      },
      protection: {
        title: 'Kartenschutz-Vorteile',
        zeroFraud: {
          title: 'Null-Betrugs-Haftung',
          description: 'Nicht verantwortlich für unbefugte Transaktionen'
        },
        purchaseProtection: {
          title: 'Kaufschutz',
          description: 'Schutz für beschädigte oder gestohlene Artikel innerhalb von 90 Tagen'
        },
        extendedWarranty: {
          title: 'Erweiterte Garantie',
          description: 'Fügt der Herstellergarantie ein zusätzliches Jahr hinzu'
        },
        travelInsurance: {
          title: 'Reiseversicherung',
          description: 'Reiserücktritts- und Gepäckverspätungsschutz'
        },
        fraudMonitoring: {
          title: '24/7 Betrugsüberwachung',
          description: 'Echtzeit-Warnungen für verdächtige Aktivitäten'
        }
      },
      comparison: {
        title: 'Kartenvergleich',
        feature: 'Merkmal',
        rewardsPlusName: 'Kreditkarte',
        travelEliteName: 'Platinum Karte',
        everydayCashName: 'Debitkarte',
        annualFee: 'Jahresgebühr',
        rewardsRate: 'Prämiensatz',
        signUpBonus: 'Anmeldebonus',
        travelInsurance: 'Reiseversicherung',
        airportLounge: 'Flughafen-Lounge-Zugang',
        purchaseProtection: 'Kaufschutz'
      },
      cta: {
        title: 'Nicht Sicher, Welche Karte Die Richtige Ist?',
        description: 'Machen Sie unser schnelles Quiz, um die perfekte Kreditkarte basierend auf Ihren Ausgabegewohnheiten und finanziellen Zielen zu finden.',
        button: 'Finden Sie Ihre Karte'
      }
    },
    investments: {
      title: 'Anlageberatung',
      subtitle: 'Bauen Sie Vermögen für Ihre Zukunft mit umfassenden Anlagelösungen auf, die auf Ihre finanziellen Ziele zugeschnitten sind.',
      hero: {
        title: 'Investitionen bei Aareal Bank AG',
        subtitle: 'Beginnen Sie, Ihr Kapital aufzubauen'
      },
      riskWarning: 'Investieren birgt Risiken. Sie könnten (einen Teil) des investierten Geldes verlieren.',
      bonus: {
        title: 'Bonus von bis zu €100 beim Investieren',
        description: 'Denken Sie über Investitionen nach? Starten Sie mit uns und erhalten Sie einen Bonus. Eröffnen Sie Ihr erstes Anlagekonto vor dem 31. März 2026 und tätigen Sie 4 automatische Investitionen. Wenn Sie die Aktionsbedingungen erfüllen, erhalten Sie einen Bonus von €50, €75 oder €100. Bitte beachten Sie: Sie könnten Ihre gesamte oder einen Teil Ihrer anfänglichen Investition verlieren.'
      },
      winterBonus: {
        title: 'Winter-Bonus',
        description: 'Starten Sie mit der Vermögensverwaltung oder leisten Sie vor dem 31. März 2026 eine zusätzliche Einzahlung und verdienen Sie einen Bonus.',
        newClients: 'Für neue Kunden: Erhalten Sie bis zu €1.250 Bonus, wenn Sie mit der Vermögensverwaltung beginnen. Lesen Sie die Geschäftsbedingungen.',
        existingClients: 'Für bestehende Kunden der Vermögensverwaltung: Erhalten Sie €500, wenn Sie zusätzlich €50.000 einzahlen, oder €750, wenn Sie €250.000 einzahlen. Lesen Sie die Geschäftsbedingungen.',
        note: 'Bitte beachten Sie: Investieren birgt Risiken. Sie könnten Ihre gesamte oder einen Teil Ihrer anfänglichen Investition verlieren.'
      },
      riskInfo: {
        title: 'Investieren birgt Risiken',
        description: 'Investieren birgt Risiken. Sie könnten (einen Teil) des investierten Geldes verlieren. Wenn Sie investieren möchten, ist es wichtig, dass Sie sich dessen bewusst sind. Investieren Sie mit Geld, das Sie entbehren können. Erfahren Sie mehr über die mit Investitionen verbundenen Risiken.'
      },
      whyInvest: {
        title: 'Warum bei Aareal Bank AG investieren?',
        tools: {
          title: 'Praktische Tools, Einblicke und Beratung',
          description: 'Wir leiten Sie online an, helfen Ihnen, selbst Entscheidungen zu treffen, oder verwalten Ihre Investitionen in Ihrem Namen.'
        },
        beginnings: {
          title: 'Wir sind bei jedem Neuanfang dabei',
          description: 'Sind Sie ein erfahrener Investor oder ist dies Ihr erstes Mal? Wir haben Produkte für sowohl erfahrene als auch unerfahrene Investoren.'
        },
        investors: {
          title: 'Über 225.000 Menschen investieren bereits bei uns',
          description: 'Jeden Tag begrüßen wir neue Investoren, die ihr Kapital aufbauen möchten.'
        }
      },
      performance: {
        title: 'Portfolio-Performance',
        disclaimer: 'Die Wertentwicklung der Vergangenheit garantiert keine zukünftigen Ergebnisse. Die angezeigten Renditen sind hypothetisch.',
        portfolioType: 'Portfolio-Typ',
        oneYear: '1-Jahres-Rendite',
        fiveYear: '5-Jahres-Rendite',
        riskLevel: 'Risikoniveau',
        conservative: 'Konservatives Portfolio',
        moderate: 'Moderates Portfolio',
        aggressive: 'Aggressives Portfolio',
        low: 'Niedrig',
        medium: 'Mittel',
        high: 'Hoch'
      },
      cta: {
        title: 'Bereit, Mit Dem Investieren Zu Beginnen?',
        description: 'Vereinbaren Sie einen Beratungstermin mit einem unserer Anlageberater, um Ihre finanziellen Ziele zu besprechen.',
        schedule: 'Beratung Vereinbaren',
        resources: 'Ressourcen Ansehen'
      }
    },
    onlineBanking: {
      title: 'Online-Banking Anmeldung',
      subtitle: 'Sicherer Zugriff auf Ihre Konten',
      email: 'E-Mail-Adresse',
      emailPlaceholder: 'ihre.email@beispiel.de',
      password: 'Passwort',
      passwordPlaceholder: 'Geben Sie Ihr Passwort ein',
      remember: 'Angemeldet bleiben',
      forgot: 'Passwort vergessen?',
      signIn: 'Anmelden',
      noAccount: 'Noch kein Konto?',
      enroll: 'Jetzt Registrieren',
      secure: 'Ihre Verbindung ist sicher und verschlüsselt',
      anytime: 'Banking Jederzeit, Überall',
      description: 'Verwalten Sie Ihre Finanzen mit unserer sicheren Online-Banking-Plattform.',
      transfers: {
        title: 'Sofortüberweisungen',
        description: 'Überweisen Sie Geld zwischen Konten oder senden Sie es sofort an Freunde und Familie.'
      },
      statements: {
        title: 'Digitale Kontoauszüge',
        description: 'Greifen Sie jederzeit auf Ihre Kontoauszüge zu und laden Sie sie herunter, papierlos und sicher.'
      },
      security: {
        title: 'Erweiterte Sicherheit',
        description: 'Multi-Faktor-Authentifizierung und Verschlüsselung halten Ihre Konten sicher.'
      }
    },
    rates: {
      title: 'Zinssätze',
      subtitle: 'Vergleichen Sie unsere wettbewerbsfähigen Zinsen für Sparkonten, Festgelder und Kredite.',
      effective: 'Zinsen gültig ab 6. Februar 2026. Änderungen vorbehalten.',
      header: {
        title: 'Zinssätze und Gebühren',
        description: 'Vollständige Transparenz über alle unsere Zinssätze und Gebühren. Wir glauben, Sie verdienen es, genau zu wissen, wofür Sie bezahlen.',
        noHiddenFees: 'Keine Versteckten Gebühren',
        fullDisclosure: 'Vollständige Offenlegung',
        downloadPDF: 'Gebührenverzeichnis Herunterladen (PDF)',
        effectiveDate: 'Gültig ab'
      },
      tabs: {
        interestRates: 'Zinssätze',
        accountFees: 'Kontogebühren',
        serviceFees: 'Servicegebühren',
        cardFees: 'Kartengebühren',
        loanFees: 'Kreditgebühren',
        feeCalculator: 'Gebührenrechner'
      },
      savings: {
        title: 'Spar- & CD-Zinsen',
        product: 'Produkt',
        apy: 'APY',
        minBalance: 'Mindestguthaben',
        trend: 'Trend',
        savingsAccount: 'Sparkonto',
        moneyMarket: 'Geldmarktkonto',
        cd6: '6-Monats-CD',
        cd1: '1-Jahres-CD',
        cd5: '5-Jahres-CD',
        openAccount: 'Sparkonto Eröffnen'
      },
      loan: {
        title: 'Kreditzinsen',
        product: 'Produkt',
        apr: 'APR',
        details: 'Details',
        trend: 'Trend',
        asLowAs: 'Ab',
        mortgage30: 'Immobilienkredit (30 Jahre fest)',
        mortgage15: 'Immobilienkredit (15 Jahre fest)',
        homeEquity: 'Eigenheimkredit',
        autoNew: 'Autokredit (Neu)',
        autoUsed: 'Autokredit (Gebraucht)',
        personal: 'Privatkredit',
        apply: 'Kredit Beantragen'
      },
      cd: {
        title: 'Festgeld (CD) Zinssätze',
        term: 'CD Laufzeit',
        minDeposit: 'Mindesteinlage'
      },
      atm: {
        title: 'Geldautomaten Gebühren',
        transactionType: 'Transaktionstyp',
        inNetwork: 'Im Netzwerk',
        outOfNetwork: 'Außerhalb des Netzwerks',
        international: 'International'
      },
      investment: {
        title: 'Vermögensverwaltungs- und Anlagegebühren',
        service: 'Dienstleistung',
        managementFee: 'Verwaltungsgebühr',
        minInvestment: 'Mindestanlage',
        description: 'Beschreibung'
      },
      labels: {
        free: 'KOSTENLOS',
        annually: 'jährlich',
        perTrade: 'pro Handel',
        perHour: 'pro Stunde',
        varies: 'Variiert',
        none: 'Keine',
        page: 'Seite',
        of: 'von'
      },
      commitment: {
        title: 'Unser Engagement für Transparenz',
        noHidden: {
          title: 'Keine Versteckten Gebühren',
          description: 'Jede Gebühr wird vorab klar offengelegt. Wir überraschen Sie nie mit unerwarteten Kosten.'
        },
        waivers: {
          title: 'Gebührenbefreiungen Verfügbar',
          description: 'Viele Gebühren können durch einfache Anforderungen wie die Aufrechterhaltung von Mindestguthaben erlassen werden.'
        },
        current: {
          title: 'Immer Aktuell',
          description: 'Dieses Gebührenverzeichnis wird in Echtzeit aktualisiert. Sie sehen immer unsere aktuellen Zinssätze und Gebühren.'
        }
      },
      feeComparison: {
        accountComparison: 'Kontovergleich',
        clearSelection: 'Auswahl Löschen',
        selectUpTo: 'Wählen Sie bis zu 3 Konten zum Vergleich aus.',
        selected: 'ausgewählt',
        feature: 'Merkmal',
        monthlyFee: 'Monatliche Gebühr',
        feeWaiver: 'Gebührenbefreiung',
        minBalance: 'Mindestguthaben',
        minOpeningDeposit: 'Mindesteröffnungseinlage',
        interestRate: 'Zinssatz (APY)',
        overdraftFee: 'Überziehungsgebühr',
        nsfFee: 'NSF-Gebühr',
        paperStatementFee: 'Gebühr für Papierkontoauszug',
        perMonth: '/Monat',
        excessWithdrawalFee: 'Gebühr für Überentnahme',
        na: 'N/V'
      },
      serviceFees: {
        service: 'Dienstleistung',
        fee: 'Gebühr',
        description: 'Beschreibung',
        feeWaiver: 'Gebührenbefreiung',
        noWaiverAvailable: 'Keine Befreiung verfügbar'
      },
      cardFees: {
        creditCardFees: 'Kreditkartengebühren',
        debitCardFees: 'Debitkartengebühren',
        aprPurchases: 'APR - Einkäufe',
        aprBalanceTransfers: 'APR - Guthabenübertragungen',
        aprCashAdvances: 'APR - Bargeldvorschüsse',
        annualFee: 'Jahresgebühr',
        foreignTransactionFee: 'Auslandstransaktionsgebühr',
        balanceTransferFee: 'Guthabenübertragungsgebühr',
        cashAdvanceFee: 'Bargeldvorschussgebühr',
        latePaymentFee: 'Verspätungsgebühr',
        overLimitFee: 'Überschreitungsgebühr',
        replacementCard: 'Ersatzkarte',
        variableAprDisclaimer: 'Variabler APR basierend auf Kreditwürdigkeit. Die angezeigten Zinssätze sind repräsentative Beispiele. Ihr tatsächlicher Zinssatz kann je nach Ihrem Kreditprofil höher oder niedriger sein.'
      },
      loanFees: {
        mortgageFees: 'Hypothekengebühren',
        homeEquityFees: 'Eigenheimkreditgebühren',
        autoFees: 'Autokreditgebühren',
        personalFees: 'Privatkreditgebühren',
        interestRate: 'Zinssatz',
        originationFee: 'Bearbeitungsgebühr',
        ofLoan: 'des Kredits',
        applicationFee: 'Antragsgebühr',
        appraisalFee: 'Schätzgebühr',
        creditReportFee: 'Kreditauskunftsgebühr',
        estimatedClosingCosts: 'Geschätzte Abschlusskosten',
        latePaymentFee: 'Verspätungsgebühr',
        prepaymentPenalty: 'Vorfälligkeitsentschädigung',
        closingCostsNote: 'Die tatsächlichen Abschlusskosten können je nach Standort der Immobilie, Kredithöhe und anderen Faktoren variieren. Dies ist eine Schätzung zu Planungszwecken.',
        note: 'Hinweis'
      },
      calculator: {
        title: 'Gebührenrechner',
        description: 'Schätzen Sie Ihre monatlichen und jährlichen Bankgebühren basierend auf Ihren Nutzungsmustern.',
        accountType: 'Kontotyp',
        checkingAccount: 'Girokonto',
        savingsAccount: 'Sparkonto',
        avgMonthlyBalance: 'Durchschnittliches Monatsguthaben',
        monthlyTransactions: 'Monatliche Transaktionen',
        overdraftsPerMonth: 'Überziehungen pro Monat',
        outOfNetworkATM: 'Geldautomaten außerhalb des Netzwerks',
        firstFree: 'Die ersten 4 sind kostenlos',
        wireTransfersPerMonth: 'Überweisungen pro Monat',
        paperStatements: 'Papierkontoauszüge erhalten (5$/Monat)',
        estimatedMonthlyFees: 'Geschätzte Monatliche Gebühren',
        annualProjection: 'Jahresprognose',
        feeBreakdown: 'Gebührenaufschlüsselung',
        monthlyMaintenanceFee: 'Monatliche Kontoführungsgebühr',
        overdraftFees: 'Überziehungsgebühren',
        outOfNetworkATMFees: 'Gebühren für Geldautomaten außerhalb des Netzwerks',
        paperStatementFee: 'Gebühr für Papierkontoauszug',
        wireTransferFees: 'Überweisungsgebühren',
        noFees: 'Keine Gebühren basierend auf Ihrer Nutzung!',
        tip: 'Tipp',
        tipMessage: 'Halten Sie ein Guthaben von 2.500 $ oder mehr, um die monatlichen Gebühren für Premium-Girokonten zu erlassen.'
      },
      disclaimer: {
        title: 'Wichtige Informationen',
        apy: 'Die jährliche prozentuale Rendite (APY) und der effektive Jahreszins (APR) sind zum Stichtag korrekt und können ohne Vorankündigung geändert werden.',
        fees: 'Gebühren können die Erträge auf Sparkonten reduzieren.',
        penalty: 'Bei vorzeitiger Auszahlung von Festgeldern kann eine Strafe erhoben werden.',
        credit: 'Die angezeigten Kreditzinsen gelten für Kreditnehmer mit ausgezeichneter Bonität. Ihr Zinssatz kann je nach Kredithistorie und anderen Faktoren variieren.'
      },
      dbTranslations: {
        atmFeeTypes: {
          'ATM Withdrawal': 'Geldautomaten-Auszahlung',
          'ATM Deposit': 'Geldautomaten-Einzahlung',
          'ATM Transfer': 'Geldautomaten-Überweisung',
          'ATM Balance Inquiry': 'Geldautomaten-Kontostandsabfrage'
        },
        serviceCategories: {
          'statements': 'Kontoauszüge',
          'deposits': 'Einzahlungen',
          'transfers': 'Überweisungen',
          'cards': 'Karten',
          'checks': 'Schecks',
          'closures': 'Kontoschließungen',
          'collections': 'Inkasso',
          'legal': 'Rechtsdienstleistungen'
        },
        loanTypes: {
          'mortgage': 'Hypothek',
          'auto': 'Auto',
          'home_equity': 'Eigenheimkredit',
          'personal': 'Privat'
        }
      }
    },
    security: {
      title: 'Sicherheitscenter',
      subtitle: 'Ihre Sicherheit ist unsere oberste Priorität. Erfahren Sie, wie wir Ihre Konten schützen und was Sie tun können, um sicher zu bleiben.',
      howWeProtect: 'Wie Wir Sie Schützen',
      encryption: {
        title: 'Verschlüsselung',
        description: 'Militärische 256-Bit-SSL-Verschlüsselung schützt alle Ihre Online-Banking-Sitzungen und Datenübertragungen.'
      },
      fraudMonitoring: {
        title: 'Betrugsüberwachung',
        description: '24/7-Transaktionsüberwachung mit KI-gestützter Betrugserkennung warnt Sie vor verdächtigen Aktivitäten.'
      },
      alerts: {
        title: 'Kontobenachrichtigungen',
        description: 'Passen Sie Benachrichtigungen für große Transaktionen, niedrige Guthaben und ungewöhnliche Kontoaktivitäten an.'
      },
      mfa: {
        title: 'Multi-Faktor-Authentifizierung',
        description: 'Fügen Sie eine zusätzliche Sicherheitsebene mit biometrischer Anmeldung und Einmalpasswörtern hinzu.'
      },
      bestPractices: {
        title: 'Bewährte Sicherheitspraktiken',
        password: {
          title: 'Verwenden Sie Starke Passwörter',
          description: 'Erstellen Sie eindeutige Passwörter mit mindestens 12 Zeichen, die Groß- und Kleinbuchstaben, Zahlen und Symbole kombinieren.'
        },
        twoFactor: {
          title: 'Aktivieren Sie Zwei-Faktor-Authentifizierung',
          description: 'Verwenden Sie immer 2FA, wenn verfügbar, um Ihren Konten eine zusätzliche Schutzschicht hinzuzufügen.'
        },
        verify: {
          title: 'Überprüfen Sie Vor Dem Klicken',
          description: 'Klicken Sie niemals auf Links in verdächtigen E-Mails. Geben Sie stattdessen unsere Website-Adresse direkt in Ihren Browser ein.'
        },
        monitor: {
          title: 'Überwachen Sie Ihre Konten',
          description: 'Überprüfen Sie regelmäßig Ihre Kontoaktivitäten und melden Sie sofort nicht autorisierte Transaktionen.'
        },
        update: {
          title: 'Halten Sie Software Aktuell',
          description: 'Verwenden Sie immer die neueste Version Ihres Browsers und Ihrer mobilen Apps für beste Sicherheit.'
        },
        secure: {
          title: 'Verwenden Sie Sichere Verbindungen',
          description: 'Vermeiden Sie öffentliches WLAN beim Zugriff auf Ihre Konten. Verwenden Sie ein VPN, wenn Sie sich aus der Ferne verbinden müssen.'
        }
      },
      fraud: {
        title: 'Betrug Sofort Melden',
        description: 'Wenn Sie verdächtige Aktivitäten auf Ihrem Konto vermuten oder Betrugsopfer geworden sind, kontaktieren Sie uns sofort.',
        report: 'Betrug Melden: 1-800-BETRUG',
        tips: 'Tipps zur Betrugsprävention'
      },
      fdic: {
        title: 'FDIC-Versichert',
        description: 'Ihre Einlagen sind durch die Federal Deposit Insurance Corporation (FDIC) bis zu $250.000 pro Einleger und versicherter Bank versichert.',
        disclaimer: 'FDIC-Mitglied. Gleichberechtigter Wohnungsbaukreditgeber.'
      }
    },
    atmLocator: {
      title: 'Filialen- & Geldautomatensuche',
      subtitle: 'Finden Sie die nächste Aareal Bank AG Filiale oder den nächsten Geldautomaten für Ihre Bankbedürfnisse.',
      search: 'Adresse, Stadt oder PLZ eingeben',
      find: 'Standorte Finden',
      servicesAvailable: 'Verfügbare Services:',
      getDirections: 'Wegbeschreibung',
      details: 'Details',
      mainBranch: 'Hauptfiliale',
      northBranch: 'Nordfiliale',
      westBranch: 'Westfiliale',
      eastATM: 'Ost-Geldautomat',
      southBranch: 'Südfiliale',
      airportATM: 'Flughafen-Geldautomat',
      downtown: 'Innenstadt',
      northDistrict: 'Nordbezirk',
      westEnd: 'Westend',
      eastDistrict: 'Ostbezirk',
      southDistrict: 'Südbezirk',
      airport: 'Flughafen',
      terminal: 'Terminal 1, Internationaler Flughafen',
      hours: {
        weekdays: 'Mo-Fr: 9:00-17:00, Sa: 9:00-14:00',
        weekdaysOnly: 'Mo-Fr: 9:00-17:00',
        extended: 'Mo-Fr: 9:00-18:00, Sa: 9:00-13:00',
        south: 'Mo-Fr: 10:00-18:00, Sa: 10:00-14:00',
        alwaysOpen: '24/7'
      },
      services: {
        full: 'Vollständige Bankdienstleistungen',
        atm: 'Geldautomat Verfügbar',
        safeDeposit: 'Schließfächer',
        driveThrough: 'Drive-Through',
        business: 'Firmenkundengeschäft',
        atmOnly: 'Nur Geldautomat',
        access24: '24-Stunden-Zugang',
        notary: 'Notardienste',
        currency: 'Geldwechsel In Der Nähe'
      },
      cta: {
        title: 'Keinen Standort Gefunden?',
        description: 'Unser Kundenservice-Team hilft Ihnen gerne, die nächste Filiale oder den nächsten Geldautomaten zu finden.',
        button: 'Kontaktieren Sie Uns'
      }
    },
    careers: {
      title: 'Karriere bei Aareal Bank AG',
      subtitle: 'Werden Sie Teil unseres Teams engagierter Fachleute und bauen Sie eine lohnende Karriere im Bankwesen auf.',
      whyWork: 'Warum Bei Uns Arbeiten?',
      health: {
        title: 'Gesundheit & Wohlbefinden',
        description: 'Umfassende Kranken-, Zahn- und Sehversicherung für Sie und Ihre Familie.'
      },
      retirement: {
        title: 'Altersvorsorgeplanung',
        description: '401(k) mit großzügigem Arbeitgeberzuschuss und Finanzplanungsressourcen.'
      },
      development: {
        title: 'Berufliche Weiterentwicklung',
        description: 'Studiengebührenerstattung, Schulungsprogramme und Karriereförderungsmöglichkeiten.'
      },
      balance: {
        title: 'Work-Life-Balance',
        description: 'Flexible Arbeitszeiten, Remote-Arbeitsoptionen und großzügiger bezahlter Urlaub.'
      },
      openings: {
        title: 'Offene Stellen',
        positions: 'Positionen',
        personalBanker: 'Privatkundenberater',
        businessSpecialist: 'Firmenkundenspezialist',
        advisor: 'Finanzberater',
        loanOfficer: 'Kreditsachbearbeiter',
        customerService: 'Kundendienstmitarbeiter',
        itAnalyst: 'IT-Systemanalyst',
        marketingCoord: 'Marketing-Koordinator',
        branchManager: 'Filialleiter',
        retailBanking: 'Privatkundengeschäft',
        businessBanking: 'Firmenkundengeschäft',
        investmentServices: 'Anlageberatung',
        lending: 'Kreditvergabe',
        customerSupport: 'Kundensupport',
        technology: 'Technologie',
        marketingDept: 'Marketing',
        management: 'Management',
        multiple: 'Mehrere Standorte',
        mainBranch: 'Hauptfiliale',
        downtown: 'Innenstadt',
        northBranch: 'Nordfiliale',
        callCenter: 'Callcenter',
        headquarters: 'Hauptsitz',
        westBranch: 'Westfiliale',
        fullTime: 'Vollzeit',
        apply: 'Jetzt Bewerben'
      },
      cta: {
        title: 'Die Richtige Position Nicht Gefunden?',
        description: 'Reichen Sie Ihren Lebenslauf ein und wir werden Sie für zukünftige Möglichkeiten in Betracht ziehen, die Ihren Fähigkeiten und Interessen entsprechen.',
        button: 'Allgemeine Bewerbung Einreichen'
      },
      values: {
        title: 'Unsere Grundwerte',
        missionDriven: {
          title: 'Missionsgetrieben',
          description: 'Wir setzen uns dafür ein, finanziellen Erfolg für Einzelpersonen und Unternehmen weltweit zu ermöglichen.'
        },
        innovation: {
          title: 'Innovation Zuerst',
          description: 'Wir nutzen neue Technologien und Ansätze, um modernste Banklösungen zu liefern.'
        },
        growth: {
          title: 'Wachstumsmentalität',
          description: 'Wir investieren in die berufliche Entwicklung unseres Teams mit kontinuierlichen Lernmöglichkeiten.'
        },
        diversity: {
          title: 'Vielfalt & Inklusion',
          description: 'Wir feiern Vielfalt und schaffen ein Umfeld, in dem jeder gedeihen kann.'
        }
      },
      growth: {
        title: 'Karrierewachstum bei Aareal Bank AG',
        stats: {
          promotions: 'Interne Beförderungen',
          budget: 'Jährliches Lernbudget',
          programs: 'Schulungsprogramme'
        },
        pathways: {
          title: 'Karriereentwicklungspfade',
          entry: 'Einstiegspositionen mit umfassender Schulung und Mentoring-Programmen',
          mid: 'Positionen auf mittlerer Ebene mit Führungskräfteentwicklung und Spezialisierungsmöglichkeiten',
          senior: 'Senior-Positionen mit Executive Coaching und strategischer Entscheidungserfahrung',
          executive: 'C-Level-Möglichkeiten für bewährte Führungskräfte, die organisatorische Exzellenz vorantreiben'
        }
      },
      companyStats: {
        employees: 'Mitarbeiter Weltweit',
        satisfaction: 'Mitarbeiterzufriedenheit',
        retention: 'Bindungsquote'
      }
    },
    whoWeServe: {
      title: 'Wen Wir Bedienen',
      subtitle: 'Finanzinstitute mit innovativen Bank- und Kryptolösungen stärken',
      hero: {
        title: 'Mit Wem Wir Arbeiten',
        subtitle: 'Private Banking nach Ihren Bedürfnissen'
      },
      intro: {
        title: 'Maßgeschneiderte Lösungen für Jede Institution',
        description: 'Wir bieten umfassende Finanzdienstleistungen für eine vielfältige Palette von Institutionen, von traditionellen Banken bis zu modernsten Krypto-Plattformen, alles unterstützt durch unsere institutionelle Infrastruktur und Regulierungskonformität.',
        mainDescription: 'Wir arbeiten mit vermögenden Privatpersonen, die spezifische finanzielle Bedürfnisse haben. Unsere Private-Banking-Dienstleistungen stehen Einzelpersonen, Familien und Unternehmern mit investierbarem Vermögen von 1 Million Euro oder mehr zur Verfügung. Für Kunden mit Vermögen von 25 Millionen Euro oder mehr bieten wir eine spezialisierte Vermögensverwaltung, die auf die besonderen Herausforderungen eingeht, die mit bedeutendem Vermögen einhergehen.'
      },
      sections: {
        lifeStage: {
          title: 'Vermögen Durch Lebensveränderungen Verwalten',
          description: 'Ihre finanziellen Prioritäten ändern sich, wenn sich Ihr Leben entwickelt. Vielleicht planen Sie einen frühen Ruhestand, erwägen ein Zweithaus oder balancieren Karrierewachstum mit Familiengründung. Wir helfen Ihnen, diese Übergänge zu meistern und Entscheidungen zu treffen, die Ihre Ziele in jeder Phase unterstützen.'
        },
        business: {
          title: 'Für Unternehmer und Geschäftsinhaber',
          description: 'Ein Unternehmen zu führen erfordert Konzentration. Es ist leicht, den Überblick über Ihre persönlichen Finanzen zu verlieren, wenn Sie ein Unternehmen aufbauen. Wir behalten sowohl Ihr geschäftliches als auch persönliches Finanzprofil im Blick und helfen Ihnen, Chancen zu erkennen und vorauszuplanen. Wir arbeiten auch mit ehemaligen Unternehmern, die ihre Firmen verkauft haben.'
        },
        exceptionalWealth: {
          title: 'Bedeutendes Vermögen Verwalten',
          description: 'Wenn Ihr Vermögen 25 Millionen Euro oder mehr erreicht, steigt die Komplexität erheblich. Unser Private Wealth Management Service bewältigt diese Herausforderungen mit einem Fokus auf Privatsphäre für Sie und Ihre Familie sowie einer langfristigen Perspektive zum Erhalt des Vermögens über Generationen hinweg.'
        }
      },
      segments: {
        banks: {
          title: 'Banken',
          description: 'Erweitern Sie Ihre Bankdienstleistungen mit sicheren und regulierten Krypto-Angeboten, einschließlich Handel, Staking und Verwahrung'
        },
        assetManagers: {
          title: 'Vermögensverwalter',
          description: 'Bereichern Sie Ihr Angebot mit Krypto-Investitionen über eine regulierte Krypto-Bank.'
        },
        fintechs: {
          title: 'Fintechs',
          description: 'Erschließen Sie traditionelle Bank- und Krypto-Dienste für Ihre Kunden, unterstützt durch institutionelle Infrastruktur.'
        },
        exchanges: {
          title: 'Krypto-Börsen',
          description: 'Bieten Sie hochsichere Verwahrung für die Kryptos Ihrer Kunden durch unsere Hot- und Cold-Storage-Lösungen.'
        },
        casps: {
          title: 'CASPs',
          description: 'Zugang zu institutioneller Bank-, Verwahrungs- und Handelsinfrastruktur für konforme Krypto-Dienste für Ihre Kunden.'
        }
      },
      specialServices: {
        title: 'Spezialisierte Dienstleistungen',
        description: 'Wir haben Erfahrung in der Zusammenarbeit mit Kunden in spezifischen Situationen, die besondere Bedürfnisse und Fragen haben.',
        partners: {
          title: 'Partner und Leitende Führungskräfte',
          description: 'Als Partner in einer professionellen Firma oder Führungskraft in einem börsennotierten Unternehmen haben Sie spezifische finanzielle Überlegungen. Sie wollen Exzellenz in Ihren persönlichen Finanzen genauso wie beruflich. Wir verstehen Ihre Situation und können Ihnen helfen, Ihr Vermögen aufzubauen und zu verwalten.'
        },
        expats: {
          title: 'Internationale Kunden',
          description: 'Im Ausland leben und arbeiten bringt finanzielle Komplexität mit sich. Unser International Private Banking Team kennt die Herausforderungen, mit denen Sie konfrontiert sind – Steuern, mehrere Rechtsordnungen, Währungsfragen. Wir bieten klare Beratung und Lösungen, die über Grenzen hinweg funktionieren.'
        },
        associations: {
          title: 'Gemeinnützige Organisationen und Stiftungen',
          description: 'Wir arbeiten mit Vereinen, Stiftungen und religiösen Organisationen, die bedeutende Vermögenswerte verwalten. Unsere Beziehungsmanager verstehen Ihre Mission und bringen finanzielle Expertise und Verbindungen mit, um Sie bei der Erreichung Ihrer Ziele zu unterstützen.'
        },
        familyOffices: {
          title: 'Family Office Unterstützung',
          description: 'Wenn Sie ein Family Office vertreten, wissen Sie, dass Ihre Rolle darin besteht, sicherzustellen, dass Ihre Kunden exzellenten, diskreten Private-Banking-Service erhalten. Unser Family Office Desk teilt diese Verpflichtung und kann mit Ihnen zusammenarbeiten, um Ihre Kunden zu bedienen.'
        }
      },
      cta: {
        title: 'Interessiert an einer Zusammenarbeit?',
        description: 'Lassen Sie uns darüber sprechen, ob unsere Private-Banking-Dienstleistungen zu Ihrer Situation passen.',
        consultation: 'Gespräch Vereinbaren',
        learnMore: 'Mehr Erfahren'
      },
      stats: {
        partners: 'Partner-Institutionen',
        assets: 'Vermögen in Verwahrung',
        support: 'Support & Überwachung'
      }
    },
    ourApproachPage: {
      title: 'Wie wir arbeiten',
      subtitle: 'Wir helfen Ihnen, Ihr Vermögen zu verwalten und die Zukunft zu planen',
      intro: {
        paragraph1: 'Vermögensverwaltung bringt Chancen mit sich, aber auch persönliche und geschäftliche Herausforderungen. Diese erfordern Aufmerksamkeit und individuelle Lösungen.',
        paragraph2: 'Wir arbeiten mit Ihnen zusammen, um Ihre finanzielle Situation zu verstehen und Ihnen zu helfen, fundierte Entscheidungen über Ihr Vermögen zu treffen.'
      },
      rightPartner: {
        title: 'Ihr persönlicher Banker',
        description: 'Ihre finanzielle Situation erfordert persönliche Aufmerksamkeit. Ihr Private Banker ist Ihr Hauptansprechpartner für Fragen zu Ihren Finanzen und Ihrem Vermögen. Wir bringen Sie mit dem Banker zusammen, der Erfahrung mit Situationen wie Ihrer hat. Mit jahrelanger Erfahrung in der Arbeit mit vermögenden Familien und Unternehmern kann Ihr Private Banker Ihnen bei Fragen zur Vermögensverwaltung und Finanzplanung helfen.'
      },
      testimonial: {
        quote: 'Ich fühlte mich gehört und verstanden, und das war sehr wichtig, um einen Schritt nach vorne zu machen',
        author: 'Hans Gitsels',
        role: 'Kunde | Aareal Bank AG'
      },
      atYourService: {
        title: 'Wie wir Ihnen helfen',
        privateBanker: {
          title: 'Ein fester Ansprechpartner',
          description: 'Ihr Private Banker ist mehr als ein Finanzberater. Er ist jemand, der Ihre Situation versteht und Ihnen bei allen Ihren Finanzfragen helfen kann.'
        },
        expertise: {
          title: 'Zugang zu Spezialisten',
          description: 'Wir kombinieren Erfahrung mit aktuellem Marktwissen, um Ihnen relevante Einblicke zu geben. Ob Sie sich mit einer Geschäftsübergabe oder komplexer Finanzplanung befassen, unsere Spezialisten können helfen.'
        },
        tailored: {
          title: 'Lösungen für Ihre Situation',
          description: 'Wir wissen, dass Ihre finanziellen Bedürfnisse spezifisch für Sie sind. Deshalb passen wir unseren Ansatz an Ihre Situation an. Wir beginnen in der Regel mit Vermögensplanung, damit wir Ihre Prioritäten sofort angehen können.'
        }
      },
      familyBanking: {
        title: 'Private Banking für Ihre Familie',
        description: 'Auch Ihre Familie kann mit uns zusammenarbeiten. Wir helfen bei Themen, mit denen vermögende Familien häufig konfrontiert sind. Wir können Gespräche mit Ihren erwachsenen Kindern über das Familienvermögen und Ihre Zukunftspläne erleichtern. Wir helfen auch dabei, junge Erwachsene auf den Umgang mit bedeutendem Vermögen vorzubereiten.'
      },
      alsoOfInterest: {
        title: 'Das könnte Sie auch interessieren',
        events: {
          title: 'Veranstaltungen',
          description: 'Unsere Veranstaltungen geben Ihnen die Möglichkeit, andere zu treffen und Erfahrungen und Wissen zu teilen.'
        },
        secureBanking: {
          title: 'Sicherheit',
          description: 'Wir arbeiten daran, Ihr Online-Banking durch mehrere Schutzmaßnahmen und Betrugspräventionsmaßnahmen zu sichern.'
        },
        betterWorld: {
          title: 'Zu einer besseren Welt beitragen',
          description: 'Gemeinsam können wir einen positiven Unterschied machen, jetzt und für zukünftige Generationen.'
        }
      }
    },
    financialEducation: {
      title: 'Finanzbildungszentrum',
      subtitle: 'Stärken Sie sich mit Wissen. Lernen Sie über Budgetierung, Sparen, Investieren und Kreditverwaltung durch unsere umfassende Bibliothek von Artikeln, Videos und interaktiven Tools.',
      search: 'Artikel, Themen oder Schlüsselwörter suchen...',
      tabs: {
        articles: 'Bildungsartikel',
        news: 'Finanznachrichten'
      },
      categories: {
        all: 'Alle Themen',
        budgeting: 'Budgetierung',
        saving: 'Sparen',
        investing: 'Investieren',
        credit: 'Kredit'
      },
      newsCategories: {
        all: 'Alle Nachrichten',
        banking: 'Banking',
        economy: 'Wirtschaft',
        crypto: 'Krypto'
      },
      articles: {
        title: 'Alle Artikel',
        allArticles: 'Alle Artikel',
        categoryArticles: {
          budgeting: 'Budget-Artikel',
          saving: 'Spar-Artikel',
          investing: 'Investitions-Artikel',
          credit: 'Kredit-Artikel'
        },
        featured: 'HERVORGEHOBEN',
        readArticle: 'Artikel Lesen',
        closeArticle: 'Artikel Schließen',
        minRead: 'Min. Lesezeit',
        noArticles: 'Keine Artikel gefunden, die Ihren Kriterien entsprechen.',
        difficulty: {
          beginner: 'ANFÄNGER',
          intermediate: 'FORTGESCHRITTEN',
          advanced: 'EXPERTE'
        }
      },
      news: {
        title: 'Neueste Finanznachrichten',
        latestNews: 'Neueste Finanznachrichten',
        categoryNews: {
          banking: 'Bank-Nachrichten',
          economy: 'Wirtschafts-Nachrichten',
          crypto: 'Krypto-Nachrichten'
        },
        readFull: 'Vollständigen Artikel Lesen',
        noNews: 'Keine Nachrichten gefunden.',
        justNow: 'Gerade eben',
        hoursAgo: 'Std. her'
      },
      calculators: {
        backToEducation: 'Zurück zum Bildungszentrum',
        budgetCalc: {
          title: 'Monatlicher Budgetrechner',
          monthlyIncome: 'Monatliches Einkommen',
          housing: 'Wohnen',
          transportation: 'Transport',
          food: 'Essen & Lebensmittel',
          utilities: 'Nebenkosten',
          insurance: 'Versicherung',
          entertainment: 'Unterhaltung',
          savings: 'Ersparnisse',
          other: 'Sonstiges',
          summary: 'Budget-Zusammenfassung',
          totalIncome: 'Gesamteinkommen',
          totalExpenses: 'Gesamtausgaben',
          remaining: 'Verbleibend',
          ruleTitle: '50/30/20-Regel Analyse',
          needs: 'Bedürfnisse',
          wants: 'Wünsche',
          target: 'Ziel',
          savingsRate: 'Sparquote',
          greatJob: 'Großartige Arbeit!',
          goodStart: 'Guter Start!',
          tryIncrease: 'Versuchen Sie, Ihre Ersparnisse zu erhöhen'
        },
        savingsCalc: {
          title: 'Sparzielrechner',
          savingsGoal: 'Sparziel',
          currentSavings: 'Aktuelle Ersparnisse',
          monthlyContribution: 'Monatlicher Beitrag',
          interestRate: 'Zinssatz',
          whatSavingFor: 'Wofür sparen Sie?',
          howMuchNow: 'Wie viel haben Sie jetzt?',
          howMuchMonthly: 'Wie viel können Sie monatlich sparen?',
          expectedReturn: 'Erwartete jährliche Rendite auf Ersparnisse',
          timeline: 'Zeitplan zum Ziel',
          timeToReach: 'Zeit bis zum Erreichen des Ziels',
          targetDate: 'Zieldatum',
          breakdown: 'Fortschrittsaufschlüsselung',
          goalAmount: 'Zielbetrag',
          startingBalance: 'Anfangssaldo',
          stillNeeded: 'Noch Benötigt',
          totalContributions: 'Gesamtbeiträge',
          interestEarned: 'Verdiente Zinsen',
          progressBar: 'Fortschrittsbalken',
          quickTips: 'Schnelle Tipps',
          tip1: 'Automatisieren Sie Ihre Spartransfers',
          tip2: 'Klein anfangen und im Laufe der Zeit erhöhen',
          tip3: 'Verwenden Sie hochverzinsliche Sparkonten',
          tip4: 'Monatlich überprüfen und anpassen'
        },
        compoundCalc: {
          title: 'Zinseszinsrechner',
          initialInvestment: 'Anfangsinvestition',
          monthlyContribution: 'Monatlicher Beitrag',
          yearsToGrow: 'Jahre bis zum Wachstum',
          annualRate: 'Jährlicher Zinssatz',
          compoundFrequency: 'Zinseszinshäufigkeit',
          monthly: 'Monatlich',
          annually: 'Jährlich',
          futureValue: 'Zukünftiger Wert',
          breakdown: 'Aufschlüsselung',
          totalContributions: 'Gesamtbeiträge',
          interestEarned: 'Verdiente Zinsen',
          totalValue: 'Gesamtwert',
          growthOverTime: 'Wachstum im Laufe der Zeit',
          year: 'Jahr',
          balance: 'Saldo',
          interest: 'Zinsen',
          afterYears: 'Nach {years} Jahren',
          rule72: 'Regel von 72',
          rule72Text: 'Bei {rate}% jährlicher Rendite wird sich Ihr Geld in etwa {years} Jahren verdoppeln.'
        },
        debtCalc: {
          title: 'Schuldenabbau-Rechner',
          totalDebt: 'Gesamtschuldensaldo',
          interestRate: 'Zinssatz (APR)',
          monthlyPayment: 'Monatliche Zahlung',
          minimumPayment: 'Mindestzahlung',
          paymentTooLow: 'Zahlung Zu Niedrig!',
          paymentWarning: 'Ihre monatliche Zahlung muss höher als das Minimum sein, um diese Schulden abzubezahlen. Mit dieser Rate werden Sie sie niemals abbezahlen!',
          timeline: 'Abbezahlungs-Zeitplan',
          timeToDebtFree: 'Zeit bis zur Schuldenfreiheit',
          debtFreeDate: 'Datum der Schuldenfreiheit',
          breakdown: 'Kostenaufschlüsselung',
          originalBalance: 'Ursprünglicher Saldo',
          totalInterest: 'Gesamte Gezahlte Zinsen',
          totalPaid: 'Gesamtbetrag Gezahlt',
          doublePayment: 'Verdoppeln Sie Ihre Zahlung?',
          doubleText: 'Sehen Sie, was passiert, wenn Sie {amount} $ pro Monat zahlen',
          timeSaved: 'Eingesparte Zeit',
          interestSaved: 'Eingesparte Zinsen',
          newPayoffTime: 'Neue Abbezahlungszeit',
          strategies: 'Abbezahlungsstrategien',
          strategy1: 'Zahlen Sie mehr als das Minimum',
          strategy2: 'Tätigen Sie zweiwöchentliche Zahlungen',
          strategy3: 'Nutzen Sie Sonderzahlungen (Boni, Steuerrückerstattungen)',
          strategy4: 'Reduzieren Sie vorübergehend die Ausgaben',
          strategy5: 'Erwägen Sie Saldoübertragung (0% APR)',
          progressViz: 'Fortschrittsvisualisierung',
          principal: 'Kapital',
          interest: 'Zinsen'
        },
        retirementCalc: {
          title: 'Ruhestandsrechner',
          currentAge: 'Aktuelles Alter',
          retirementAge: 'Rentenalter',
          currentSavings: 'Aktuelle Altersvorsorge',
          monthlyContribution: 'Monatlicher Beitrag',
          expectedReturn: 'Erwartete Jährliche Rendite',
          desiredIncome: 'Gewünschtes Monatliches Renteneinkommen',
          yearsUntil: '{years} Jahre bis zur Rente',
          historicalAvg: 'Historischer Durchschnitt: 7-8% für diversifizierte Portfolios',
          perYear: 'pro Jahr',
          onTrack: 'Sie Sind auf dem Richtigen Weg!',
          onTrackText: 'Basierend auf Ihrem aktuellen Plan sollten Sie genug für den Ruhestand haben.',
          projectedIncome: 'Projiziertes Monatliches Einkommen',
          actionNeeded: 'Handlungsbedarf',
          actionText: 'Sie müssen möglicherweise Ihren Ruhestandsplan anpassen, um Ihr Einkommensziel zu erreichen.',
          additionalNeeded: 'Zusätzlicher Monatlicher Beitrag Erforderlich',
          snapshot: 'Ruhestandsübersicht',
          yearsToRetirement: 'Jahre bis zur Rente',
          projectedNestEgg: 'Projiziertes Notgroschen',
          totalContributions: 'Gesamtbeiträge',
          investmentGains: 'Investitionsgewinne',
          monthlyIncome: 'Monatliches Einkommen',
          composition: 'Spar-Zusammensetzung',
          initialSavings: 'Anfangsersparnisse',
          contributions: 'Beiträge',
          investmentGrowth: 'Investitionswachstum',
          rule4Percent: 'Die 4%-Regel',
          rule4PercentText: 'Eine gängige Ruhestandsrichtlinie schlägt vor, jährlich 4% Ihres Portfolios abzuheben. Basierend auf Ihren projizierten Ersparnissen:',
          safeAnnual: 'Sichere Jährliche Abhebung',
          safeMonthly: 'Sicheres Monatliches Einkommen',
          tipsTitle: 'Tipps für die Ruhestandsplanung',
          tip1: 'Maximieren Sie den 401(k)-Arbeitgeberzuschuss',
          tip2: 'Erwägen Sie eine Roth IRA für steuerfreies Wachstum',
          tip3: 'Erhöhen Sie Beiträge mit Gehaltserhöhungen',
          tip4: 'Diversifizieren Sie Ihre Investitionen',
          tip5: 'Beginnen Sie so früh wie möglich'
        }
      },
      videoTutorials: {
        title: 'Video-Tutorials',
        description: 'Demnächst: Sehen Sie sich unsere von Experten geleitete Videoserie zu Themen der persönlichen Finanzen an.',
        notify: 'Benachrichtigen'
      },
      consultation: {
        title: 'Benötigen Sie Persönliche Beratung?',
        description: 'Vereinbaren Sie eine kostenlose Beratung mit einem unserer Finanzberater.',
        button: 'Beratung Vereinbaren'
      },
      finalCta: {
        title: 'Starten Sie Heute Ihre Finanzielle Reise',
        description: 'Wissen ist der erste Schritt zur finanziellen Freiheit. Erkunden Sie unsere Ressourcen, nutzen Sie unsere Tools und übernehmen Sie die Kontrolle über Ihre finanzielle Zukunft.',
        openAccount: 'Konto Eröffnen',
        contactUs: 'Kontaktieren Sie Uns'
      }
    },
    support: {
      title: 'Kundensupport',
      subtitle: 'Wir sind hier, um Ihnen bei allen Ihren Bankbedürfnissen zu helfen. Wählen Sie die beste Kontaktmöglichkeit.',
      phone: {
        title: '24/7 Telefon-Support',
        description: 'Sprechen Sie jederzeit mit einem Mitarbeiter, Tag und Nacht.',
        action: 'Jetzt Anrufen'
      },
      chat: {
        title: 'Live-Chat',
        description: 'Erhalten Sie sofortige Hilfe über unser sicheres Chat-System.',
        detail: 'Verfügbar 24/7',
        action: 'Chat Starten'
      },
      email: {
        title: 'E-Mail-Support',
        description: 'Senden Sie uns eine detaillierte Nachricht und wir antworten innerhalb von 24 Stunden.',
        action: 'E-Mail Senden'
      },
      faq: {
        title: 'Häufig Gestellte Fragen',
        items: [
          {
            q: 'Wie setze ich mein Online-Banking-Passwort zurück?',
            a: 'Klicken Sie auf der Anmeldeseite auf \'Passwort vergessen\'. Geben Sie Ihren Benutzernamen und Ihre E-Mail-Adresse ein, und wir senden Ihnen einen sicheren Link zum Zurücksetzen Ihres Passworts. Der Link läuft aus Sicherheitsgründen nach 24 Stunden ab.'
          },
          {
            q: 'Wie hoch sind Ihre aktuellen Zinssätze?',
            a: 'Die Zinssätze variieren je nach Kontotyp und Guthaben. Besuchen Sie unsere Seite Zinssätze für aktuelle APY-Informationen zu Sparkonten, CDs und Kreditprodukten. Die Zinssätze werden täglich aktualisiert.'
          },
          {
            q: 'Wie lange dauert eine Überweisung?',
            a: 'Inlandsüberweisungen werden in der Regel innerhalb von 24 Stunden abgeschlossen. Internationale Überweisungen können je nach Zielland und zwischengeschalteten Banken 3-5 Werktage dauern.'
          },
          {
            q: 'Ist Online-Banking sicher?',
            a: 'Ja, unsere Online-Banking-Plattform verwendet 256-Bit-Verschlüsselung auf Bankniveau, Multi-Faktor-Authentifizierung und Echtzeit-Betrugsüberwachung, um Ihre Kontoinformationen zu schützen.'
          },
          {
            q: 'Wie melde ich eine verlorene oder gestohlene Karte?',
            a: 'Rufen Sie sofort unseren 24/7-Kartenservice unter 1-800-ANCHOR an. Sie können Ihre Karte auch vorübergehend sperren, indem Sie sich beim Online-Banking anmelden.'
          },
          {
            q: 'Wie hoch sind Ihre Geldautomatengebühren?',
            a: 'Aareal Bank AG Geldautomaten sind für Kontoinhaber kostenlos. Wir erstatten auch bis zu $20/Monat an Geldautomatengebühren außerhalb des Netzwerks für Premium-Kontoinhaber.'
          },
          {
            q: 'Wie eröffne ich ein Geschäftskonto?',
            a: 'Besuchen Sie jede Filiale mit Ihren Geschäftsregistrierungsdokumenten, EIN und amtlichem Ausweis. Sie können den Antrag auch online starten und persönlich abschließen.'
          },
          {
            q: 'Wie zahle ich Schecks ein?',
            a: 'Sie können Schecks bei jeder Aareal Bank AG-Filiale oder Geldautomaten einzahlen. Indossieren Sie einfach den Scheck und folgen Sie den Anweisungen auf dem Bildschirm. Die Mittel sind in der Regel innerhalb von 1-2 Werktagen verfügbar.'
          }
        ],
        viewAll: 'Alle FAQs Ansehen'
      },
      hours: {
        title: 'Filialöffnungszeiten',
        weekdays: 'Montag - Freitag:',
        weekdaysTime: '9:00 - 17:00 Uhr',
        saturday: 'Samstag:',
        saturdayTime: '9:00 - 14:00 Uhr',
        sunday: 'Sonntag:',
        sundayTime: 'Geschlossen',
        support247: 'Telefon- und Online-Support rund um die Uhr verfügbar'
      }
    },
    mortgage: {
      title: 'Hypothekendienstleistungen',
      subtitle: 'Finden Sie die perfekte Hypothekenlösung für Ihr Zuhause mit wettbewerbsfähigen Zinsen und flexiblen Konditionen.',
      typesTitle: 'Hypothekenoptionen',
      types: {
        fixed: {
          title: 'Festhypothek',
          description: 'Stabile monatliche Zahlungen mit einem festen Zinssatz für die Laufzeit des Kredits.',
          features: [
            'Vorhersehbare monatliche Zahlungen',
            'Schutz vor Zinserhöhungen',
            'Laufzeiten von 15 bis 30 Jahren',
            'Ideal für langfristiges Eigentum'
          ]
        },
        adjustable: {
          title: 'Variable Hypothek',
          description: 'Niedrigere Anfangszinsen, die sich periodisch basierend auf den Marktbedingungen anpassen.',
          features: [
            'Niedrigere anfängliche Zinssätze',
            'Zinsanpassungen nach Anfangsperiode',
            'Ideal für kurzfristiges Eigentum',
            'Potenzial für niedrigere Gesamtzinsen'
          ]
        },
        fha: {
          title: 'FHA-Kredite',
          description: 'Staatlich gesicherte Kredite mit niedrigeren Anzahlungsanforderungen.',
          features: [
            'Anzahlung ab 3,5%',
            'Flexiblere Kreditanforderungen',
            'Staatlicher Versicherungsschutz',
            'Ideal für Erstkäufer'
          ]
        },
        va: {
          title: 'VA-Kredite',
          description: 'Spezielle Hypothekenprogramme für berechtigte Veteranen und Militärangehörige.',
          features: [
            'Keine Anzahlung erforderlich',
            'Keine private Hypothekenversicherung',
            'Wettbewerbsfähige Zinssätze',
            'Begrenzte Abschlusskosten'
          ]
        }
      },
      calculator: {
        title: 'Hypothekenrechner',
        description: 'Schätzen Sie Ihre monatliche Hypothekenzahlung mit unserem benutzerfreundlichen Rechner.',
        loanAmount: 'Kreditbetrag',
        interestRate: 'Zinssatz',
        loanTerm: 'Kreditlaufzeit',
        downPayment: 'Anzahlung',
        years: 'Jahre',
        calculate: 'Zahlung Berechnen'
      },
      processTitle: 'Der Hypothekenprozess',
      process: {
        preapproval: {
          title: 'Vorabgenehmigung',
          description: 'Erhalten Sie eine Vorabgenehmigung, um Ihr Budget zu kennen und Ihr Angebot zu stärken.'
        },
        shopping: {
          title: 'Haussuche',
          description: 'Finden Sie Ihr perfektes Zuhause mit Vertrauen in Ihre Finanzierung.'
        },
        application: {
          title: 'Antrag',
          description: 'Schließen Sie Ihren Hypothekenantrag mit unserem einfachen Prozess ab.'
        },
        closing: {
          title: 'Abschluss',
          description: 'Finalisieren Sie Ihre Hypothek und erhalten Sie die Schlüssel zu Ihrem neuen Zuhause.'
        }
      },
      cta: {
        title: 'Bereit, Ihr Eigenheim zu Kaufen?',
        description: 'Starten Sie heute Ihren Hypothekenantrag oder sprechen Sie mit einem unserer Hypothekenspezialisten.',
        button: 'Jetzt Beantragen'
      }
    },
    aboutUs: {
      title: 'Über Aareal Bank AG',
      subtitle: 'Aufbau von Wohlstand durch traditionelle Bankwerte und persönlichen Service seit 1952.',
      mission: {
        title: 'Unsere Mission',
        description: 'Digitale Vermögenswerte sind erwachsen geworden und Bankdienstleistungen müssen dieser Herausforderung gewachsen sein. Der Handel, die Investition und die Aufbewahrung von Kryptowährungen und anderen digitalen Vermögenswerten sollten keine \'Ergänzung\' zum traditionellen Banking sein, sondern ein integrierter Service, der mit allen anderen Aspekten der Bankdienstleistungen eines Kunden verknüpft ist. Aareal Bank AG wurde gegründet, um genau diese Lösung für professionelle Investoren, Unternehmen, Family Offices und Institutionen bereitzustellen.'
      },
      vision: {
        title: 'Unsere Vision',
        description: 'Das vertrauenswürdigste und respektierteste Finanzinstitut in unserer Region zu sein, bekannt für Innovation, Integrität und unerschütterliches Engagement für den Kundenerfolg.'
      },
      futureFinance: {
        title: 'Die Zukunft der Finanzwelt schaffen',
        description: 'Wir haben mit einer neuen Vision für das Bankwesen den Weg geebnet, die die Barrieren zwischen traditionellen Finanzdienstleistungen und der Unterstützung digitaler Vermögenswerte abbaut. Unsere preisgekrönten Lösungen und Produkte bieten einen nahtlosen Service über alle wichtigen Anlageklassen hinweg, einschließlich traditioneller Vermögenswerte, Kryptowährungen und Blockchain-Netzwerke.'
      },
      principles: {
        title: 'Unsere Prinzipien',
        description: 'Wir bieten alle Funktionen des modernen Bankwesens einschließlich Krypto, zugänglich über ein einziges Gateway und unterstützt durch die höchsten Sicherheitsstandards. Unsere Mission basiert auf drei Schlagworten:',
        sophisticated: {
          title: 'Anspruchsvoll',
          description: 'Revolutionierung Ihres Finanzerlebnisses mit modernster Technologie und innovativen Lösungen'
        },
        seamless: {
          title: 'Nahtlos',
          description: 'Verbindung der Welt der traditionellen und digitalen Finanzen mit mühelosen, integrierten Transaktionen'
        },
        secure: {
          title: 'Sicher',
          description: 'Sicherung Ihrer Finanzen mit starkem, branchenführendem Schutz'
        }
      },
      valuesTitle: 'Unsere Grundwerte',
      values: {
        integrity: {
          title: 'Integrität',
          description: 'Wir führen unser Geschäft mit Ehrlichkeit, Transparenz und ethischen Prinzipien.'
        },
        community: {
          title: 'Gemeinschaft',
          description: 'Wir investieren in die Gemeinschaften, die wir bedienen, und unterstützen sie.'
        },
        excellence: {
          title: 'Exzellenz',
          description: 'Wir streben nach Exzellenz in allem, was wir tun.'
        },
        innovation: {
          title: 'Innovation',
          description: 'Wir nutzen Innovation, um unsere Kunden besser zu bedienen.'
        }
      },
      historyTitle: 'Unsere Reise',
      milestones: {
        founded: {
          title: 'Aareal Bank AG Gegründet',
          description: 'Als kleine Gemeinschaftsbank mit Engagement für persönlichen Service gestartet.'
        },
        expansion: {
          title: 'Regionale Expansion',
          description: 'Ausweitung auf mehrere Gemeinschaften in der Region mit 10 neuen Filialen.'
        },
        digital: {
          title: 'Start des Digitalen Bankings',
          description: 'Umfassende Online-Banking-Dienste eingeführt, um Kunden 24/7 zu bedienen.'
        },
        branches: {
          title: 'Heute',
          description: 'Bedient jetzt über 50.000 Kunden in 25 Filialen mit über $2 Milliarden Vermögen.'
        }
      },
      stats: {
        customers: '50.000+',
        customersLabel: 'Zufriedene Kunden',
        branches: '25',
        branchesLabel: 'Filialen',
        employees: '500+',
        employeesLabel: 'Engagierte Mitarbeiter'
      },
      cta: {
        title: 'Werden Sie Teil Unserer Bankfamilie',
        description: 'Erleben Sie den Aareal Bank AG Unterschied mit persönlichem Service und modernen Banklösungen.',
        button: 'Konto Eröffnen'
      }
    },
    currencyExchange: {
      title: 'Währungsumtausch',
      subtitle: 'Tauschen Sie Fiat- und Kryptowährungen mit wettbewerbsfähigen Kursen und sofortigen Überweisungen',
      converter: {
        title: 'Währungsrechner',
        from: 'Von',
        to: 'Nach',
        exchangeRate: 'Wechselkurs',
        executeExchange: 'Tausch Durchführen',
        fiat: 'Fiat',
        crypto: 'Crypto',
        rateAlert: {
          title: 'Kurs-Alarm',
          description: 'Benachrichtigung erhalten, wenn Ihr gewünschter Wechselkurs verfügbar ist',
          placeholder: 'Zielkurs',
          setAlert: 'Alarm Setzen',
          notification: 'Sofortige E-Mail- und SMS-Benachrichtigungen'
        }
      },
      cryptoRates: {
        title: 'Kryptowährungskurse'
      },
      fiatCurrencies: {
        title: 'Wichtige Fiatwährungen',
        perUsd: 'pro USD'
      },
      wireTransfer: {
        title: 'Internationale Überweisung',
        features: {
          lowFees: {
            title: 'Niedrige Gebühren',
            description: 'Ab nur $15 für internationale Überweisungen'
          },
          fast: {
            title: 'Schnelle Überweisungen',
            description: 'Die meisten Überweisungen werden innerhalb von 24-48 Stunden abgeschlossen'
          },
          global: {
            title: '200+ Länder',
            description: 'Geld in über 200 Länder weltweit senden'
          }
        },
        calculator: {
          title: 'Überweisungsgebühren-Rechner',
          amount: 'Überweisungsbetrag',
          destination: 'Zielland',
          transferFee: 'Überweisungsgebühr',
          exchangeMarkup: 'Wechselkursaufschlag',
          totalCost: 'Gesamtkosten'
        }
      },
      cta: {
        title: 'Beginnen Sie Heute mit dem Tausch',
        description: 'Eröffnen Sie ein Aareal Bank AG Konto für Zugang zu wettbewerbsfähigen Wechselkursen und günstigen internationalen Überweisungen',
        button: 'Konto Eröffnen'
      }
    },
    trustSection: {
      title: 'Unterstützte Währungen',
      subtitle: 'Wir arbeiten mit traditionellen und digitalen Währungen',
      crypto: {
        title: 'Verfügbare Krypto-Assets',
        description: 'Kaufen, verkaufen und halten Sie führende Kryptowährungen mit sicherer Aufbewahrung',
        more: 'und viele mehr...'
      },
      fiat: {
        title: 'Verfügbare Fiatwährungen',
        description: 'Arbeiten Sie mit wichtigen Währungen aus der ganzen Welt',
        more: 'und viele mehr...'
      }
    },
    newsletter: {
      title: 'Abonnieren Sie Unseren Newsletter',
      subtitle: 'Erhalten Sie die neuesten Nachrichten, Finanztipps und exklusive Angebote',
      emailPlaceholder: 'Geben Sie Ihre E-Mail ein',
      subscribe: 'Abonnieren',
      success: 'Vielen Dank für Ihr Abonnement!',
      error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
      alreadySubscribed: 'Diese E-Mail ist bereits abonniert'
    },
    news: {
      title: 'Neueste Nachrichten',
      subtitle: 'Bleiben Sie über die neuesten Entwicklungen in der Finanzwelt informiert',
      categories: {
        all: 'Alle',
        banking: 'Banking',
        economy: 'Wirtschaft',
        crypto: 'Krypto'
      },
      readMore: 'Mehr Lesen',
      loading: 'Nachrichten werden geladen...',
      error: 'Fehler beim Laden der Nachrichten',
      noArticles: 'Keine Artikel gefunden',
      publishedBy: 'Veröffentlicht von'
    },
    difference: {
      title: 'Warum Aareal Bank AG Wählen',
      safety: 'Sicherheit',
      safetyDesc: 'Ihr Geld ist durch bewährte Sicherheitsmaßnahmen geschützt. Wir machen keine Abstriche, wenn es um den Schutz Ihrer Konten geht.',
      transparency: 'Transparenz',
      transparencyDesc: 'Greifen Sie auf alle Ihre Konten an einem Ort zu. Sehen Sie genau, wo Ihr Geld ist und was es tut.',
      performance: 'Leistung',
      performanceDesc: 'Wir bleiben mit der Finanztechnologie auf dem Laufenden, damit Sie neue Chancen nutzen können, wenn sie für Sie sinnvoll sind.'
    },
    investmentHighlight: {
      title: 'Investitionen',
      subtitle: 'Krypto, Bargeld, Aktien oder traditionelle Anlagen',
      description: 'Von Aktien bis Krypto, wir haben Optionen, die zu Ihren Zielen passen.'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Acerca de',
      contact: 'Contacto',
      accounts: 'Cuentas',
      loans: 'Préstamos'
    },
    hero: {
      title: 'Soluciones financieras para la era digital',
      subtitle: 'Desde 1892',
      description: 'Fusionando la experiencia financiera tradicional con tecnología de vanguardia para dar forma al futuro de las finanzas.',
      openAccount: 'Abrir Cuenta',
      learnMore: 'Más Información'
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Lo Que Ofrecemos',
      personal: {
        title: 'Banca Personal',
        description: 'Cuentas que se adaptan a su vida. Buenas tasas, sin cargos sorpresa.'
      },
      business: {
        title: 'Banca Empresarial',
        description: 'Herramientas bancarias para empresas, ya sea que esté comenzando o ya esté establecido.'
      },
      loans: {
        title: 'Préstamos e Hipotecas',
        description: 'Tasas justas en préstamos para casa, auto o personales. Explicamos todo desde el principio.'
      },
      investment: {
        title: 'Asesoría de Inversión',
        description: 'Ayuda para planificar su futuro financiero y hacer crecer sus ahorros.'
      },
      digital: {
        title: 'Banca Digital',
        description: 'Revise sus cuentas, transfiera dinero y pague facturas en línea o desde su teléfono, en cualquier momento.'
      }
    },
    trust: {
      title: 'Seguridad y Confianza',
      subtitle: 'Su Seguridad Financiera es Nuestra Prioridad',
      imageCaption1: 'Seguridad Bancaria',
      imageCaption2: 'Asesores Expertos',
      security: {
        title: 'Seguridad Avanzada',
        description: 'Cifrado de grado militar y autenticación multifactor protegen sus cuentas.'
      },
      privacy: {
        title: 'Privacidad Protegida',
        description: 'Su información personal está salvaguardada con medidas de privacidad líderes en la industria.'
      },
      excellence: {
        title: 'Servicio Premiado',
        description: 'Reconocido por excelencia en servicio al cliente e innovación financiera.'
      },
      support: {
        title: 'Soporte 24/7',
        description: 'Nuestro equipo dedicado está disponible para ayudarle las 24 horas del día.'
      }
    },
    about: {
      title: 'Acerca de Aareal Bank AG',
      subtitle: 'Soluciones financieras para la era digital',
      description: 'Fusionando experiencia financiera tradicional con tecnología de vanguardia para dar forma al futuro de las finanzas.',
      stats: {
        years: 'Años de Servicio',
        customers: 'Clientes Satisfechos',
        branches: 'Sucursales',
        assets: 'Activos Bajo Gestión'
      }
    },
    contact: {
      title: 'Contáctenos',
      subtitle: 'Estamos Aquí Para Usted',
      phone: 'Teléfono',
      email: 'Correo Electrónico',
      hours: 'Horario',
      hoursValue: 'Lunes - Viernes: 9:00 AM - 5:00 PM',
      address: 'Dirección de Sucursal Principal',
      addressValue: '123 Distrito Financiero, Plaza Bancaria, Suite 100'
    },
    footer: {
      tagline: 'Aareal Bank AG',
      quickLinks: 'Enlaces Rápidos',
      legal: 'Legal',
      privacy: 'Privacidad',
      terms: 'Términos de Servicio',
      security: 'Seguridad',
      accessibility: 'Accesibilidad',
      rights: 'Todos los derechos reservados.',
      fdic: 'Miembro de FDIC. Prestamista de Vivienda con Igualdad de Oportunidades.'
    },
    personalBanking: {
      title: 'Banca Personal',
      subtitle: 'Soluciones bancarias completas para ayudarle a administrar, ahorrar y hacer crecer su dinero.',
      hero: {
        title: 'Banca Privada para Clientes de Alto Patrimonio',
        subtitle: 'Asesoría financiera personalizada para personas y familias'
      },
      intro: 'Su situación financiera es única. Trabajamos con personas de alto patrimonio, empresarios y familias que necesitan más que la banca estándar. Nuestros asesores se toman el tiempo para entender sus objetivos y construir un plan que funcione para su situación. Ya sea que esté preservando patrimonio, haciéndolo crecer o planificando para la próxima generación, estamos aquí para ayudarle.',
      getToKnow: {
        title: 'Conozca Nuestros Servicios de Banca Privada',
        forWho: {
          title: 'A Quiénes Servimos',
          description: 'Vea si nuestros servicios son adecuados para usted'
        },
        approach: {
          title: 'Cómo Trabajamos',
          description: 'Nuestro enfoque para gestionar su patrimonio'
        },
        expertise: {
          title: 'Nuestra Experiencia',
          description: 'Lo que aportamos'
        },
        becomeClient: {
          title: 'Hágase Cliente',
          description: 'Comience con la banca privada'
        }
      },
      wealthPlan: {
        title: 'Sus Objetivos y Prioridades Financieras',
        description: '¿Qué quiere hacer con su dinero? ¿Mantenerlo seguro, hacerlo crecer o dejarlo a su familia? Un Plan Patrimonial le ayuda a ver el panorama completo. Analizaremos su situación actual, sus objetivos y lo que más le importa: su familia, sus activos, su negocio. Cada nuevo cliente recibe un Plan Patrimonial sin costo. Es nuestra forma de asegurarnos de darle la orientación correcta.'
      },
      highlights: {
        expertise: {
          title: 'Muchos Años de Experiencia',
          description: 'Hemos aprendido mucho en ese tiempo sobre cómo ayudar a las personas a gestionar su dinero en buenos y malos momentos. Lo que funcionaba para nuestros clientes hace décadas puede que no funcione hoy, así que seguimos adaptándonos.'
        },
        events: {
          title: 'Eventos para Clientes',
          description: 'Organizamos eventos sobre temas como propiedad empresarial, inversiones y filantropía. Es una oportunidad para conocer a otros clientes, compartir ideas y escuchar a expertos en diferentes campos.'
        },
        bestBank: {
          title: 'Banco Privado Galardonado',
          description: 'Trabajamos arduamente para brindarle un buen servicio y asesoría sólida. Nuestros clientes aprecian la atención personal que brindamos. Hemos sido reconocidos como el Mejor Banco Privado Europeo en 2025, lo cual nos enorgullece.'
        }
      },
      benefits: {
        title: '¿Por Qué Banco Con Nosotros?',
        security: {
          title: 'Seguridad Primero',
          description: 'Protección avanzada contra fraudes y seguro FDIC en todas las cuentas de depósito.'
        },
        digital: {
          title: 'Banca Digital',
          description: 'Acceda a sus cuentas en cualquier momento y lugar con nuestra aplicación móvil y banca en línea.'
        }
      },
      calculator: {
        title: 'Calculadora de Ahorros',
        subtitle: 'Vea cuánto podría ganar con nuestras tasas competitivas',
        accountType: 'Tipo de Cuenta',
        savingsOption: 'Cuenta de Ahorros - 0.50% APY',
        moneyMarketOption: 'Mercado Monetario - 1.25% APY',
        cdOption: 'CD de 1 Año - 3.00% APY',
        initialDeposit: 'Depósito Inicial',
        estimatedEarnings: 'Ganancias Estimadas (1 Año)'
      },
      testimonials: {
        title: 'Testimonios de Clientes',
        testimonial1: {
          quote: 'Soy cliente de Aareal Bank AG desde hace 15 años. Conocen mi situación y me dan respuestas directas. Sus tasas son competitivas y confío en ellos con mi dinero.',
          author: 'Sarah M.'
        },
        testimonial2: {
          quote: 'La plataforma en línea es fácil de usar y segura. Puedo revisar mis cuentas, pagar facturas y mover dinero sin complicaciones.',
          author: 'Michael T.'
        },
        testimonial3: {
          quote: 'Cuando abrí mi primera cuenta de ahorros, el personal me explicó todo claramente. Respondieron todas mis preguntas y no me apresuraron.',
          author: 'Jessica L.'
        }
      },
      comparison: {
        title: 'Comparación de Cuentas',
        feature: 'Característica',
        checking: 'Corriente',
        savings: 'Ahorros',
        moneyMarket: 'Mercado Monetario',
        cd: 'CD',
        minimumBalance: 'Saldo Mínimo',
        interestRate: 'Tasa de Interés',
        monthlyFee: 'Cargo Mensual',
        debitCard: 'Tarjeta de Débito',
        checkWriting: 'Emisión de Cheques',
        onlineBanking: 'Banca en Línea'
      }
    },
    businessBanking: {
      title: 'Banca Empresarial',
      subtitle: 'Soluciones financieras para empresas en cada etapa de crecimiento.',
      hero: {
        title: 'Abra una cuenta empresarial',
        subtitle: 'Oferta especial para emprendedores en inicio: sin comisión mensual durante 12 meses'
      },
      accessOnline: {
        title: 'Access Online',
        description: 'El sistema ideal para sus necesidades de gestión de tesorería: gestione todas sus cuentas bancarias, nacionales e internacionales, incluso las que tiene en otros bancos. Además: acceda y controle todos sus flujos de pago, en cualquier lugar del mundo.'
      },
      sepa: {
        title: 'Todo lo que necesita saber sobre SEPA e IBAN',
        description: 'Todo lo que necesita saber sobre SEPA e IBAN, incluyendo información técnica, archivos de muestra y formularios relacionados con los estándares de pago SEPA se encuentra aquí.',
        sepaButton: 'SEPA',
        ibanButton: 'IBAN'
      },
      loanCalculator: {
        title: 'Coste de un préstamo',
        description: 'Introduzca la cantidad que desea pedir prestada y obtendrá una respuesta de inmediato.',
        why: '¿Por qué necesita un préstamo?',
        purposes: {
          car: 'Coche',
          renovation: 'Renovación',
          other: 'Otra compra importante'
        },
        howMuch: '¿Cuánto desea pedir prestado?',
        minAmount: 'El importe mínimo es de 5000 €',
        maxAmount: 'El importe máximo es de 75000 €',
        amountTooLow: 'El importe debe ser al menos de 5000 €',
        amountTooHigh: 'El importe no puede superar los 75000 €',
        selectTerm: 'Seleccione el plazo requerido',
        year: 'Año',
        years: 'Años',
        min: 'Mín.',
        max: 'Máx.'
      },
      loanResults: {
        title: 'Estos son los costes mínimos y máximos',
        minimum: 'Mínimo',
        maximum: 'Máximo',
        monthlyRepayments: 'Cuotas mensuales',
        fixedInterestRate: 'Tipo de interés fijo',
        totalCosts: 'Costes totales',
        disclaimer: 'Este cálculo es una estimación. Las cuotas mensuales exactas dependen de su situación personal.'
      },
      checking: {
        title: 'Cuenta Corriente Empresarial',
        description: 'Cuenta profesional sin comisión de mantenimiento mensual el primer año.',
        features: ['Sin límite de operaciones', 'Depósito de cheques desde móvil', 'Pago de facturas online incluido', 'Gestor de cuenta dedicado']
      },
      creditCards: {
        title: 'Tarjetas de Crédito Empresariales',
        description: 'Tarjetas corporativas con hasta 1,5% de devolución en efectivo y seguimiento de gastos.',
        features: ['1,5% devolución en compras', 'Tarjetas adicionales sin cargo', 'Informes mensuales de gastos', 'Extensión de garantía']
      },
      loans: {
        title: 'Préstamos Empresariales',
        description: 'Financiación de capital de trabajo y equipos de 5.000 € a 500.000 €.',
        features: ['Tipos fijos desde 7,5%', 'Plazos de amortización 1-10 años', 'Decisión en 48 horas', 'Gestor de relación asignado']
      },
      merchant: {
        title: 'Servicios Comerciales',
        description: 'Aceptación de pagos con tarjeta con liquidación al día hábil siguiente.',
        features: ['Terminales TPV y software', 'Pasarela de pago online', 'Pagos sin contacto y móvil', 'Fondos disponibles día hábil siguiente']
      },
      payroll: {
        title: 'Servicios de Nómina',
        description: 'Procesamiento completo de nóminas con cálculos fiscales automáticos y portal de empleados.',
        features: ['Nóminas mensuales o semanales', 'Retenciones y declaraciones fiscales', 'Transferencia directa a cuentas', 'Acceso empleados a histórico']
      },
      treasury: {
        title: 'Gestión de Tesorería',
        description: 'Herramientas de gestión de tesorería para empresas con necesidades bancarias complejas.',
        features: ['Reporting de saldos en tiempo real', 'Protección antifraude positive pay', 'Transferencias nacionales e internacionales', 'Conciliación automatizada de cuentas']
      },
      cta: {
        title: 'Hable con un Especialista Empresarial',
        description: 'Contacte con nuestro equipo para hablar sobre los servicios adecuados para su empresa.',
        button: 'Solicitar Llamada'
      },
      learnMore: 'Más Información'
    },
    loans: {
      title: 'Soluciones de Préstamos',
      subtitle: 'Tasas competitivas y términos flexibles para ayudarle a alcanzar sus metas financieras.',
      home: {
        title: 'Préstamos Hipotecarios',
        description: 'Haga realidad su sueño de ser propietario con tasas hipotecarias competitivas.',
        features: ['Tasas fijas y ajustables', 'Opciones de pago inicial bajo', 'Programas para compradores primerizos', 'Opciones de refinanciamiento'],
        rate: '5.99%',
        term: '30 Años'
      },
      auto: {
        title: 'Préstamos para Automóviles',
        description: 'Conduzca su vehículo nuevo o usado con financiamiento flexible para automóviles.',
        features: ['Financiamiento para autos nuevos y usados', 'Tasas competitivas', 'Plazos de hasta 72 meses', 'Pre-aprobación disponible'],
        rate: '4.49%',
        term: '60 Meses'
      },
      student: {
        title: 'Préstamos Estudiantiles',
        description: 'Invierta en su futuro con soluciones de financiamiento educativo asequibles.',
        features: ['Préstamos de pregrado y posgrado', 'Sin cargos de originación', 'Términos de pago flexibles', 'Opciones de liberación de cofirmante'],
        rate: '6.25%',
        term: '10 Años'
      },
      personal: {
        title: 'Préstamos Personales',
        description: 'Acceda a fondos para cualquier propósito con aprobación rápida y términos flexibles.',
        features: ['Préstamos de hasta $50,000', 'Sin garantía requerida', 'Financiamiento el mismo día disponible', 'Pagos mensuales fijos'],
        rate: '8.99%',
        term: '5 Años'
      },
      homeEquity: {
        title: 'Préstamos sobre el Valor de la Vivienda',
        description: 'Aproveche el valor de su vivienda para renovaciones, consolidación de deudas o gastos mayores.',
        features: ['Preste hasta el 85% del valor de la vivienda', 'Tasas fijas', 'Intereses potencialmente deducibles de impuestos', 'Sin penalizaciones por pago anticipado'],
        rate: '7.25%',
        term: '15 Años'
      },
      business: {
        title: 'Préstamos para Pequeñas Empresas',
        description: 'Haga crecer su negocio con soluciones de financiamiento adaptadas para emprendedores.',
        features: ['Préstamos garantizados por SBA', 'Líneas de crédito', 'Financiamiento de equipo', 'Préstamos de capital de trabajo'],
        rate: '7.99%',
        term: '10 Años'
      },
      calculator: {
        title: 'Calculadora de Préstamos',
        description: 'Calcule sus pagos mensuales y vea cuánto puede pagar.',
        button: 'Usar Calculadora'
      },
      preApproval: {
        title: 'Pre-Aprobación Rápida',
        description: 'Obtenga pre-aprobación en minutos y compre con confianza.',
        button: 'Obtener Pre-Aprobación'
      },
      startingRate: 'Tasa Inicial:',
      termLabel: 'Plazo:',
      applyNow: 'Solicitar Ahora'
    },
    creditCards: {
      title: 'Tarjetas de Crédito',
      subtitle: 'Encuentre la tarjeta de crédito perfecta para su estilo de vida y maximice sus recompensas.',
      rewardsPlus: {
        title: 'Tarjeta de Crédito',
        description: 'Gane reembolso en efectivo ilimitado en cada compra sin límites ni fechas de vencimiento.',
        features: ['3% reembolso en restaurantes', '2% reembolso en gasolina', '1% reembolso en todas las demás compras', 'Bono de registro de $200']
      },
      travelElite: {
        title: 'Tarjeta Platinum',
        description: 'Desbloquee beneficios de viaje premium y gane millas por cada dólar gastado.',
        features: ['3X millas en viajes y restaurantes', '50,000 millas de bono', 'Acceso a salas VIP de aeropuertos', 'Sin cargos por transacciones extranjeras']
      },
      everydayCash: {
        title: 'Tarjeta de Débito',
        description: 'Recompensas simples en efectivo por gastos diarios sin categorías complicadas.',
        features: ['1.5% reembolso en todas las compras', 'Sin cargo anual', 'Bono de registro de $150', 'Monitoreo gratuito de puntaje crediticio']
      },
      balanceTransfer: {
        title: 'Tarjeta Prepagada',
        description: 'Pague deudas más rápido con 0% APR promocional en transferencias de saldo.',
        features: ['0% APR por 18 meses', 'Sin cargo por transferencia de saldo', '1% reembolso en compras', 'Herramientas de planificación financiera']
      },
      secured: {
        title: 'Tarjeta Prepagada Asegurada',
        description: 'Construya o reconstruya su crédito con una tarjeta asegurada por su depósito.',
        features: ['Línea de crédito de $200-$5,000', 'Actualización a tarjeta no asegurada', 'Reporta a todas las agencias de crédito', 'Sin cargo anual']
      },
      premium: {
        title: 'Tarjeta Gold',
        description: 'Beneficios de élite y privilegios de lujo para nuestros clientes más valiosos.',
        features: ['5X puntos en categorías seleccionadas', '100,000 puntos de bono', 'Servicio de conserjería 24/7', 'Seguro de viaje y compra']
      },
      apr: 'APR:',
      annualFee: 'Cargo Anual:',
      applyNow: 'Solicitar Ahora',
      calculator: {
        title: 'Calculadora de Recompensas',
        subtitle: 'Estime sus recompensas anuales según el gasto',
        monthlySpending: 'Gasto Mensual',
        perYear: '/año',
        rewardsPlusLabel: 'Tarjeta de Crédito (1.5% reembolso)',
        everydayCashLabel: 'Tarjeta de Débito (3% comestibles, 2% gasolina)',
        travelEliteLabel: 'Tarjeta Platinum (3x puntos en viajes)'
      },
      protection: {
        title: 'Beneficios de Protección de Tarjeta',
        zeroFraud: {
          title: 'Responsabilidad Cero por Fraude',
          description: 'No responsable de transacciones no autorizadas'
        },
        purchaseProtection: {
          title: 'Protección de Compras',
          description: 'Cobertura para artículos dañados o robados dentro de 90 días'
        },
        extendedWarranty: {
          title: 'Garantía Extendida',
          description: 'Añade un año adicional a la garantía del fabricante'
        },
        travelInsurance: {
          title: 'Seguro de Viaje',
          description: 'Cobertura por cancelación de viaje y retraso de equipaje'
        },
        fraudMonitoring: {
          title: 'Monitoreo de Fraude 24/7',
          description: 'Alertas en tiempo real para actividad sospechosa'
        }
      },
      comparison: {
        title: 'Comparación de Tarjetas',
        feature: 'Característica',
        rewardsPlusName: 'Tarjeta de Crédito',
        travelEliteName: 'Tarjeta Platinum',
        everydayCashName: 'Tarjeta de Débito',
        annualFee: 'Cargo Anual',
        rewardsRate: 'Tasa de Recompensas',
        signUpBonus: 'Bono de Registro',
        travelInsurance: 'Seguro de Viaje',
        airportLounge: 'Acceso a Sala VIP',
        purchaseProtection: 'Protección de Compras'
      },
      cta: {
        title: '¿No Está Seguro de Qué Tarjeta es la Correcta?',
        description: 'Tome nuestro cuestionario rápido para encontrar la tarjeta de crédito perfecta según sus hábitos de gasto y metas financieras.',
        button: 'Encuentre Su Tarjeta'
      }
    },
    investments: {
      title: 'Asesoría de Inversión',
      subtitle: 'Construya riqueza para su futuro con soluciones de inversión completas adaptadas a sus metas financieras.',
      hero: {
        title: 'Inversiones en Aareal Bank AG',
        subtitle: 'Comience a construir su capital'
      },
      riskWarning: 'Invertir implica riesgos. Podría perder (parte de) el dinero que invirtió.',
      bonus: {
        title: 'Bonificación de hasta €100 cuando invierte',
        description: '¿Pensando en invertir? Comience con nosotros y obtenga una bonificación. Abra su primera cuenta de inversión antes del 31 de marzo de 2026 y realice 4 inversiones automáticas. Si cumple con los términos y condiciones de la promoción, ganará una bonificación de €50, €75 o €100. Tenga en cuenta: podría perder toda o parte de su inversión inicial.'
      },
      winterBonus: {
        title: 'Bonificación de Invierno',
        description: 'Comience con la Gestión de Cartera o realice un depósito adicional antes del 31 de marzo de 2026 y gane una bonificación.',
        newClients: 'Para nuevos clientes: obtenga hasta €1,250 de bonificación si comienza la Gestión de Cartera. Lea los términos y condiciones.',
        existingClients: 'Para clientes existentes de Gestión de Cartera: obtenga €500 si deposita €50,000 adicionales, o €750 si deposita €250,000. Lea los términos y condiciones.',
        note: 'Tenga en cuenta: invertir implica riesgos. Podría perder toda o parte de su inversión inicial.'
      },
      riskInfo: {
        title: 'Invertir implica riesgos',
        description: 'Invertir implica riesgos. Podría perder (parte de) el dinero que invirtió. Si va a invertir, es importante que sea consciente de esto. Invierta con dinero que pueda permitirse perder. Lea más sobre los riesgos asociados con las inversiones.'
      },
      whyInvest: {
        title: '¿Por qué invertir con Aareal Bank AG?',
        tools: {
          title: 'Herramientas ingeniosas, información y orientación',
          description: 'Le guiaremos en línea, le ayudaremos a tomar decisiones usted mismo o gestionaremos sus inversiones en su nombre.'
        },
        beginnings: {
          title: 'Estamos ahí para cada nuevo comienzo',
          description: '¿Es usted un inversor experimentado o es su primera vez? Tenemos productos tanto para inversores experimentados como principiantes.'
        },
        investors: {
          title: 'Más de 225,000 personas ya están invirtiendo con nosotros',
          description: 'Cada día damos la bienvenida a nuevos inversores que quieren comenzar a construir su capital.'
        }
      },
      performance: {
        title: 'Rendimiento de Cartera',
        disclaimer: 'El rendimiento pasado no garantiza resultados futuros. Los rendimientos mostrados son hipotéticos.',
        portfolioType: 'Tipo de Cartera',
        oneYear: 'Rendimiento a 1 Año',
        fiveYear: 'Rendimiento a 5 Años',
        riskLevel: 'Nivel de Riesgo',
        conservative: 'Cartera Conservadora',
        moderate: 'Cartera Moderada',
        aggressive: 'Cartera Agresiva',
        low: 'Bajo',
        medium: 'Medio',
        high: 'Alto'
      },
      cta: {
        title: '¿Listo Para Comenzar a Invertir?',
        description: 'Programe una consulta con uno de nuestros asesores de inversión para discutir sus metas financieras.',
        schedule: 'Programar Consulta',
        resources: 'Ver Recursos'
      }
    },
    onlineBanking: {
      title: 'Inicio de Sesión de Banca en Línea',
      subtitle: 'Acceso Seguro a Sus Cuentas',
      email: 'Dirección de Correo Electrónico',
      emailPlaceholder: 'su.correo@ejemplo.com',
      password: 'Contraseña',
      passwordPlaceholder: 'Ingrese su contraseña',
      remember: 'Mantener sesión iniciada',
      forgot: '¿Olvidó su contraseña?',
      signIn: 'Iniciar Sesión',
      noAccount: '¿No tiene cuenta?',
      enroll: 'Registrarse Ahora',
      secure: 'Su conexión es segura y encriptada',
      anytime: 'Banca en Cualquier Momento, en Cualquier Lugar',
      description: 'Administre sus finanzas con nuestra plataforma segura de banca en línea.',
      transfers: {
        title: 'Transferencias Instantáneas',
        description: 'Transfiera dinero entre cuentas o envíelo a amigos y familiares al instante.'
      },
      statements: {
        title: 'Estados de Cuenta Digitales',
        description: 'Acceda y descargue sus estados de cuenta en cualquier momento, sin papel y de forma segura.'
      },
      security: {
        title: 'Seguridad Avanzada',
        description: 'Autenticación multifactor y encriptación mantienen sus cuentas seguras.'
      }
    },
    rates: {
      title: 'Tasas de Interés',
      subtitle: 'Compare nuestras tasas competitivas para cuentas de ahorro, certificados de depósito y préstamos.',
      effective: 'Tasas vigentes al 6 de febrero de 2026. Sujeto a cambios.',
      header: {
        title: 'Centro de Tasas y Tarifas',
        description: 'Transparencia completa sobre todas nuestras tasas y tarifas. Creemos que merece saber exactamente lo que está pagando.',
        noHiddenFees: 'Sin Tarifas Ocultas',
        fullDisclosure: 'Divulgación Completa',
        downloadPDF: 'Descargar Lista de Tarifas (PDF)',
        effectiveDate: 'Vigente desde'
      },
      tabs: {
        interestRates: 'Tasas de Interés',
        accountFees: 'Tarifas de Cuenta',
        serviceFees: 'Tarifas de Servicio',
        cardFees: 'Tarifas de Tarjeta',
        loanFees: 'Tarifas de Préstamo',
        feeCalculator: 'Calculadora de Tarifas'
      },
      savings: {
        title: 'Tasas de Ahorro y CD',
        product: 'Producto',
        apy: 'APY',
        minBalance: 'Saldo Mínimo',
        trend: 'Tendencia',
        savingsAccount: 'Cuenta de Ahorros',
        moneyMarket: 'Cuenta de Mercado Monetario',
        cd6: 'CD a 6 Meses',
        cd1: 'CD a 1 Año',
        cd5: 'CD a 5 Años',
        openAccount: 'Abrir Cuenta de Ahorros'
      },
      loan: {
        title: 'Tasas de Préstamos',
        product: 'Producto',
        apr: 'APR',
        details: 'Detalles',
        trend: 'Tendencia',
        asLowAs: 'Desde',
        mortgage30: 'Hipoteca (30 años fija)',
        mortgage15: 'Hipoteca (15 años fija)',
        homeEquity: 'Préstamo sobre Valor de Vivienda',
        autoNew: 'Préstamo Auto (Nuevo)',
        autoUsed: 'Préstamo Auto (Usado)',
        personal: 'Préstamo Personal',
        apply: 'Solicitar Préstamo'
      },
      cd: {
        title: 'Tasas de Certificados de Depósito (CD)',
        term: 'Plazo del CD',
        minDeposit: 'Depósito Mínimo'
      },
      atm: {
        title: 'Tarifas de Cajero Automático',
        transactionType: 'Tipo de Transacción',
        inNetwork: 'Dentro de la Red',
        outOfNetwork: 'Fuera de la Red',
        international: 'Internacional'
      },
      investment: {
        title: 'Tarifas de Gestión de Patrimonio e Inversión',
        service: 'Servicio',
        managementFee: 'Tarifa de Gestión',
        minInvestment: 'Inversión Mínima',
        description: 'Descripción'
      },
      labels: {
        free: 'GRATIS',
        annually: 'anualmente',
        perTrade: 'por operación',
        perHour: 'por hora',
        varies: 'Varía',
        none: 'Ninguno',
        page: 'Página',
        of: 'de'
      },
      commitment: {
        title: 'Nuestro Compromiso con la Transparencia',
        noHidden: {
          title: 'Sin Tarifas Ocultas',
          description: 'Cada tarifa se divulga claramente por adelantado. Nunca lo sorprendemos con cargos inesperados.'
        },
        waivers: {
          title: 'Exenciones de Tarifas Disponibles',
          description: 'Muchas tarifas pueden exentarse cumpliendo requisitos simples como mantener saldos mínimos.'
        },
        current: {
          title: 'Siempre Actualizado',
          description: 'Esta lista de tarifas se actualiza en tiempo real. Siempre está viendo nuestras tasas y tarifas actuales.'
        }
      },
      feeComparison: {
        accountComparison: 'Comparación de Cuentas',
        clearSelection: 'Borrar Selección',
        selectUpTo: 'Seleccione hasta 3 cuentas para comparar.',
        selected: 'seleccionado',
        feature: 'Característica',
        monthlyFee: 'Tarifa Mensual',
        feeWaiver: 'Exención de Tarifa',
        minBalance: 'saldo mínimo',
        minOpeningDeposit: 'Depósito Mínimo de Apertura',
        interestRate: 'Tasa de Interés (APY)',
        overdraftFee: 'Tarifa por Sobregiro',
        nsfFee: 'Tarifa por Fondos Insuficientes',
        paperStatementFee: 'Tarifa por Estado de Cuenta en Papel',
        perMonth: '/mes',
        excessWithdrawalFee: 'Tarifa por Retiro Excesivo',
        na: 'N/A'
      },
      serviceFees: {
        service: 'Servicio',
        fee: 'Tarifa',
        description: 'Descripción',
        feeWaiver: 'Exención de Tarifa',
        noWaiverAvailable: 'Sin exención disponible'
      },
      cardFees: {
        creditCardFees: 'Tarifas de Tarjeta de Crédito',
        debitCardFees: 'Tarifas de Tarjeta de Débito',
        aprPurchases: 'APR - Compras',
        aprBalanceTransfers: 'APR - Transferencias de Saldo',
        aprCashAdvances: 'APR - Adelantos en Efectivo',
        annualFee: 'Tarifa Anual',
        foreignTransactionFee: 'Tarifa por Transacción Extranjera',
        balanceTransferFee: 'Tarifa por Transferencia de Saldo',
        cashAdvanceFee: 'Tarifa por Adelanto en Efectivo',
        latePaymentFee: 'Tarifa por Pago Atrasado',
        overLimitFee: 'Tarifa por Exceso de Límite',
        replacementCard: 'Tarjeta de Reemplazo',
        variableAprDisclaimer: 'APR variable basado en solvencia crediticia. Las tasas mostradas son ejemplos representativos. Su tasa real puede ser mayor o menor según su perfil crediticio.'
      },
      loanFees: {
        mortgageFees: 'Tarifas de Hipoteca',
        homeEquityFees: 'Tarifas de Préstamo sobre Valor de Vivienda',
        autoFees: 'Tarifas de Préstamo de Auto',
        personalFees: 'Tarifas de Préstamo Personal',
        interestRate: 'Tasa de Interés',
        originationFee: 'Tarifa de Originación',
        ofLoan: 'del préstamo',
        applicationFee: 'Tarifa de Solicitud',
        appraisalFee: 'Tarifa de Tasación',
        creditReportFee: 'Tarifa de Informe Crediticio',
        estimatedClosingCosts: 'Costos de Cierre Estimados',
        latePaymentFee: 'Tarifa por Pago Atrasado',
        prepaymentPenalty: 'Penalización por Pago Anticipado',
        closingCostsNote: 'Los costos de cierre reales pueden variar según la ubicación de la propiedad, el monto del préstamo y otros factores. Esta es una estimación para fines de planificación.',
        note: 'Nota'
      },
      calculator: {
        title: 'Calculadora de Tarifas',
        description: 'Estime sus tarifas bancarias mensuales y anuales según sus patrones de uso.',
        accountType: 'Tipo de Cuenta',
        checkingAccount: 'Cuenta Corriente',
        savingsAccount: 'Cuenta de Ahorros',
        avgMonthlyBalance: 'Saldo Mensual Promedio',
        monthlyTransactions: 'Transacciones Mensuales',
        overdraftsPerMonth: 'Sobregiros por Mes',
        outOfNetworkATM: 'Retiros de Cajero Fuera de la Red',
        firstFree: 'Los primeros 4 son gratis',
        wireTransfersPerMonth: 'Transferencias Bancarias por Mes',
        paperStatements: 'Recibir estados de cuenta en papel (5$/mes)',
        estimatedMonthlyFees: 'Tarifas Mensuales Estimadas',
        annualProjection: 'Proyección Anual',
        feeBreakdown: 'Desglose de Tarifas',
        monthlyMaintenanceFee: 'Tarifa de mantenimiento mensual',
        overdraftFees: 'Tarifas por sobregiro',
        outOfNetworkATMFees: 'Tarifas de cajero fuera de la red',
        paperStatementFee: 'Tarifa de estado de cuenta en papel',
        wireTransferFees: 'Tarifas de transferencia bancaria',
        noFees: '¡Sin tarifas según su uso!',
        tip: 'Consejo',
        tipMessage: 'Mantenga un saldo de $2,500 o más para exentar las tarifas mensuales en cuentas corrientes Premium.'
      },
      disclaimer: {
        title: 'Información Importante',
        apy: 'El rendimiento porcentual anual (APY) y la tasa de porcentaje anual (APR) son precisos a la fecha indicada y pueden cambiar sin previo aviso.',
        fees: 'Las tarifas pueden reducir las ganancias en cuentas de ahorro.',
        penalty: 'Puede aplicarse una penalización por retiro anticipado de certificados de depósito.',
        credit: 'Las tasas de préstamo mostradas son para prestatarios con excelente crédito. Su tasa puede variar según el historial crediticio y otros factores.'
      },
      dbTranslations: {
        atmFeeTypes: {
          'ATM Withdrawal': 'Retiro en Cajero Automático',
          'ATM Deposit': 'Depósito en Cajero Automático',
          'ATM Transfer': 'Transferencia en Cajero Automático',
          'ATM Balance Inquiry': 'Consulta de Saldo en Cajero'
        },
        serviceCategories: {
          'statements': 'Estados de Cuenta',
          'deposits': 'Depósitos',
          'transfers': 'Transferencias',
          'cards': 'Tarjetas',
          'checks': 'Cheques',
          'closures': 'Cierres de Cuenta',
          'collections': 'Cobranzas',
          'legal': 'Servicios Legales'
        },
        loanTypes: {
          'mortgage': 'Hipoteca',
          'auto': 'Auto',
          'home_equity': 'Valor de Vivienda',
          'personal': 'Personal'
        }
      }
    },
    security: {
      title: 'Centro de Seguridad',
      subtitle: 'Su seguridad es nuestra máxima prioridad. Conozca cómo protegemos sus cuentas y qué puede hacer para mantenerse seguro.',
      howWeProtect: 'Cómo Le Protegemos',
      encryption: {
        title: 'Encriptación',
        description: 'Encriptación SSL de 256 bits de grado militar protege todas sus sesiones de banca en línea y transmisiones de datos.'
      },
      fraudMonitoring: {
        title: 'Monitoreo de Fraude',
        description: 'Monitoreo de transacciones 24/7 con detección de fraude impulsada por IA le alerta sobre actividades sospechosas.'
      },
      alerts: {
        title: 'Alertas de Cuenta',
        description: 'Personalice alertas para transacciones grandes, saldos bajos y actividad inusual de cuenta.'
      },
      mfa: {
        title: 'Autenticación Multifactor',
        description: 'Agregue una capa adicional de seguridad con inicio de sesión biométrico y contraseñas de un solo uso.'
      },
      bestPractices: {
        title: 'Mejores Prácticas de Seguridad',
        password: {
          title: 'Use Contraseñas Fuertes',
          description: 'Cree contraseñas únicas con al menos 12 caracteres que combinen letras mayúsculas y minúsculas, números y símbolos.'
        },
        twoFactor: {
          title: 'Habilite la Autenticación de Dos Factores',
          description: 'Siempre use 2FA cuando esté disponible para agregar una capa adicional de protección a sus cuentas.'
        },
        verify: {
          title: 'Verifique Antes de Hacer Clic',
          description: 'Nunca haga clic en enlaces en correos electrónicos sospechosos. En su lugar, escriba la dirección de nuestro sitio web directamente en su navegador.'
        },
        monitor: {
          title: 'Monitoree Sus Cuentas',
          description: 'Revise regularmente la actividad de su cuenta e informe cualquier transacción no autorizada inmediatamente.'
        },
        update: {
          title: 'Mantenga el Software Actualizado',
          description: 'Siempre use la última versión de su navegador y aplicaciones móviles para mejor seguridad.'
        },
        secure: {
          title: 'Use Conexiones Seguras',
          description: 'Evite Wi-Fi público al acceder a sus cuentas. Use una VPN si necesita conectarse de forma remota.'
        }
      },
      fraud: {
        title: 'Reporte Fraude Inmediatamente',
        description: 'Si sospecha actividad fraudulenta en su cuenta o ha sido víctima de fraude, contáctenos de inmediato.',
        report: 'Reportar Fraude: 1-800-FRAUDE',
        tips: 'Consejos de Prevención de Fraude'
      },
      fdic: {
        title: 'Asegurado por FDIC',
        description: 'Sus depósitos están asegurados por la Corporación Federal de Seguro de Depósitos (FDIC) hasta $250,000 por depositante, por banco asegurado.',
        disclaimer: 'Miembro de FDIC. Prestamista de Vivienda con Igualdad de Oportunidades.'
      }
    },
    atmLocator: {
      title: 'Localizador de Sucursales y Cajeros Automáticos',
      subtitle: 'Encuentre la sucursal o cajero automático de Aareal Bank AG más cercano para sus necesidades bancarias.',
      search: 'Ingrese dirección, ciudad o código postal',
      find: 'Encontrar Ubicaciones',
      servicesAvailable: 'Servicios Disponibles:',
      getDirections: 'Obtener Direcciones',
      details: 'Detalles',
      mainBranch: 'Sucursal Principal',
      northBranch: 'Sucursal Norte',
      westBranch: 'Sucursal Oeste',
      eastATM: 'Cajero Automático Este',
      southBranch: 'Sucursal Sur',
      airportATM: 'Cajero Automático del Aeropuerto',
      downtown: 'Centro',
      northDistrict: 'Distrito Norte',
      westEnd: 'Zona Oeste',
      eastDistrict: 'Distrito Este',
      southDistrict: 'Distrito Sur',
      airport: 'Aeropuerto',
      terminal: 'Terminal 1, Aeropuerto Internacional',
      hours: {
        weekdays: 'Lun-Vie: 9:00-17:00, Sáb: 9:00-14:00',
        weekdaysOnly: 'Lun-Vie: 9:00-17:00',
        extended: 'Lun-Vie: 9:00-18:00, Sáb: 9:00-13:00',
        south: 'Lun-Vie: 10:00-18:00, Sáb: 10:00-14:00',
        alwaysOpen: '24/7'
      },
      services: {
        full: 'Servicios Bancarios Completos',
        atm: 'Cajero Automático Disponible',
        safeDeposit: 'Cajas de Seguridad',
        driveThrough: 'Servicio en Auto',
        business: 'Banca Empresarial',
        atmOnly: 'Solo Cajero Automático',
        access24: 'Acceso 24 Horas',
        notary: 'Servicios Notariales',
        currency: 'Cambio de Moneda Cerca'
      },
      cta: {
        title: '¿No Encontró una Ubicación?',
        description: 'Nuestro equipo de servicio al cliente estará encantado de ayudarle a encontrar la sucursal o cajero automático más cercano.',
        button: 'Contáctenos'
      }
    },
    careers: {
      title: 'Carreras en Aareal Bank AG',
      subtitle: 'Únase a nuestro equipo de profesionales dedicados y construya una carrera gratificante en banca.',
      whyWork: '¿Por Qué Trabajar Con Nosotros?',
      health: {
        title: 'Salud y Bienestar',
        description: 'Seguro médico, dental y de visión completo para usted y su familia.'
      },
      retirement: {
        title: 'Planificación de Jubilación',
        description: '401(k) con generosa contrapartida del empleador y recursos de planificación financiera.'
      },
      development: {
        title: 'Desarrollo Profesional',
        description: 'Reembolso de matrícula, programas de capacitación y oportunidades de avance profesional.'
      },
      balance: {
        title: 'Equilibrio Trabajo-Vida',
        description: 'Horarios flexibles, opciones de trabajo remoto y generoso tiempo libre pagado.'
      },
      openings: {
        title: 'Vacantes Abiertas',
        positions: 'Posiciones',
        personalBanker: 'Banquero Personal',
        businessSpecialist: 'Especialista Empresarial',
        advisor: 'Asesor Financiero',
        loanOfficer: 'Oficial de Préstamos',
        customerService: 'Representante de Servicio al Cliente',
        itAnalyst: 'Analista de Sistemas de TI',
        marketingCoord: 'Coordinador de Marketing',
        branchManager: 'Gerente de Sucursal',
        retailBanking: 'Banca Minorista',
        businessBanking: 'Banca Empresarial',
        investmentServices: 'Servicios de Inversión',
        lending: 'Préstamos',
        customerSupport: 'Soporte al Cliente',
        technology: 'Tecnología',
        marketingDept: 'Marketing',
        management: 'Gerencia',
        multiple: 'Múltiples Ubicaciones',
        mainBranch: 'Sucursal Principal',
        downtown: 'Centro',
        northBranch: 'Sucursal Norte',
        callCenter: 'Centro de Llamadas',
        headquarters: 'Sede Central',
        westBranch: 'Sucursal Oeste',
        fullTime: 'Tiempo Completo',
        apply: 'Solicitar Ahora'
      },
      cta: {
        title: '¿No Encontró la Posición Correcta?',
        description: 'Envíe su currículum y lo consideraremos para futuras oportunidades que coincidan con sus habilidades e intereses.',
        button: 'Enviar Aplicación General'
      },
      values: {
        title: 'Nuestros Valores Fundamentales',
        missionDriven: {
          title: 'Guiados por la Misión',
          description: 'Estamos comprometidos a impulsar el éxito financiero de individuos y empresas en todo el mundo.'
        },
        innovation: {
          title: 'Innovación Primero',
          description: 'Adoptamos nuevas tecnologías y enfoques para ofrecer soluciones bancarias de vanguardia.'
        },
        growth: {
          title: 'Mentalidad de Crecimiento',
          description: 'Invertimos en el desarrollo profesional de nuestro equipo con oportunidades de aprendizaje continuo.'
        },
        diversity: {
          title: 'Diversidad e Inclusión',
          description: 'Celebramos la diversidad y creamos un entorno donde todos pueden prosperar.'
        }
      },
      growth: {
        title: 'Crecimiento Profesional en Aareal Bank AG',
        stats: {
          promotions: 'Promociones Internas',
          budget: 'Presupuesto de Formación Anual',
          programs: 'Programas de Capacitación'
        },
        pathways: {
          title: 'Rutas de Desarrollo Profesional',
          entry: 'Posiciones de nivel inicial con capacitación integral y programas de mentoría',
          mid: 'Roles de nivel medio con desarrollo de liderazgo y oportunidades de especialización',
          senior: 'Posiciones senior con coaching ejecutivo y experiencia en toma de decisiones estratégicas',
          executive: 'Oportunidades de alta dirección para líderes probados que impulsan la excelencia organizacional'
        }
      },
      companyStats: {
        employees: 'Empleados en Todo el Mundo',
        satisfaction: 'Satisfacción del Empleado',
        retention: 'Tasa de Retención'
      }
    },
    whoWeServe: {
      title: 'A Quién Servimos',
      subtitle: 'Empoderando instituciones financieras con soluciones bancarias y crypto innovadoras',
      hero: {
        title: 'Con Quién Trabajamos',
        subtitle: 'Banca privada construida en torno a sus necesidades'
      },
      intro: {
        title: 'Soluciones a Medida para Cada Institución',
        description: 'Proporcionamos servicios financieros integrales a una gama diversa de instituciones, desde bancos tradicionales hasta plataformas crypto de vanguardia, todo respaldado por nuestra infraestructura de grado institucional y cumplimiento regulatorio.',
        mainDescription: 'Trabajamos con personas de alto patrimonio neto que tienen necesidades financieras específicas. Nuestros servicios de banca privada están disponibles para individuos, familias y empresarios con activos invertibles de 1 millón de euros o más. Para clientes con activos de 25 millones de euros o más, ofrecemos gestión patrimonial especializada que aborda los desafíos particulares que vienen con un patrimonio sustancial.'
      },
      sections: {
        lifeStage: {
          title: 'Gestionar el Patrimonio a Través de los Cambios de la Vida',
          description: 'Sus prioridades financieras cambian a medida que evoluciona su vida. Tal vez esté planeando un retiro anticipado, considerando una segunda residencia, o equilibrando el crecimiento profesional con la crianza de una familia. Le ayudamos a navegar estas transiciones y tomar decisiones que respalden sus objetivos en cada etapa.'
        },
        business: {
          title: 'Para Empresarios y Dueños de Negocios',
          description: 'Dirigir un negocio requiere concentración. Es fácil perder de vista sus finanzas personales cuando está construyendo una empresa. Vigilamos tanto su panorama financiero empresarial como personal, ayudándole a detectar oportunidades y planificar con anticipación. También trabajamos con antiguos empresarios que han vendido sus compañías.'
        },
        exceptionalWealth: {
          title: 'Gestionar un Patrimonio Significativo',
          description: 'Cuando sus activos alcanzan los 25 millones de euros o más, la complejidad aumenta significativamente. Nuestro servicio de gestión patrimonial privada maneja estos desafíos con un enfoque en la privacidad para usted y su familia, y una visión a largo plazo hacia la preservación del patrimonio a través de las generaciones.'
        }
      },
      segments: {
        banks: {
          title: 'Bancos',
          description: 'Amplíe sus servicios bancarios con una oferta crypto segura y regulada, incluyendo Trading, Staking y Custodia'
        },
        assetManagers: {
          title: 'Gestores de Activos',
          description: 'Enriquezca su oferta con inversiones crypto a través de un banco crypto regulado.'
        },
        fintechs: {
          title: 'Fintechs',
          description: 'Desbloquee servicios bancarios tradicionales y crypto para sus clientes respaldados por infraestructura de grado institucional.'
        },
        exchanges: {
          title: 'Exchanges Crypto',
          description: 'Ofrezca custodia altamente segura para las cryptos de sus clientes a través de nuestras soluciones de almacenamiento en caliente y frío.'
        },
        casps: {
          title: 'CASPs',
          description: 'Acceda a infraestructura bancaria, de custodia y trading de grado institucional para ofrecer servicios crypto conformes a sus clientes.'
        }
      },
      specialServices: {
        title: 'Servicios Especializados',
        description: 'Tenemos experiencia trabajando con clientes en situaciones específicas que tienen necesidades y preguntas particulares.',
        partners: {
          title: 'Socios y Ejecutivos Senior',
          description: 'Como socio en una firma profesional o ejecutivo en una empresa cotizada, tiene consideraciones financieras específicas. Busca la excelencia en sus finanzas personales al igual que lo hace profesionalmente. Entendemos su situación y podemos ayudarle a construir y gestionar su patrimonio.'
        },
        expats: {
          title: 'Clientes Internacionales',
          description: 'Vivir y trabajar en el extranjero trae complejidad financiera. Nuestro equipo de Banca Privada Internacional conoce los desafíos que enfrenta: impuestos, múltiples jurisdicciones, cuestiones de divisas. Proporcionamos orientación clara y soluciones que funcionan a través de las fronteras.'
        },
        associations: {
          title: 'Organizaciones sin Fines de Lucro y Fundaciones',
          description: 'Trabajamos con asociaciones, fundaciones y organizaciones religiosas que gestionan activos significativos. Nuestros gestores de relaciones entienden su misión y aportan experiencia financiera y conexiones para ayudarle a alcanzar sus objetivos.'
        },
        familyOffices: {
          title: 'Soporte para Family Office',
          description: 'Si representa un family office, sabe que su papel es asegurar que sus clientes reciban un servicio de banca privada excelente y discreto. Nuestro desk de Family Office comparte ese compromiso y puede asociarse con usted para servir a sus clientes.'
        }
      },
      cta: {
        title: '¿Interesado en Trabajar Juntos?',
        description: 'Hablemos sobre si nuestros servicios de banca privada son adecuados para su situación.',
        consultation: 'Programar una Llamada',
        learnMore: 'Más Información'
      },
      stats: {
        partners: 'Instituciones Asociadas',
        assets: 'Activos bajo Custodia',
        support: 'Soporte y Monitoreo'
      }
    },
    ourApproachPage: {
      title: 'Cómo trabajamos',
      subtitle: 'Le ayudamos a gestionar su patrimonio y planificar el futuro',
      intro: {
        paragraph1: 'Gestionar un patrimonio trae oportunidades, pero también conlleva desafíos personales y empresariales. Estos requieren atención y soluciones personalizadas.',
        paragraph2: 'Trabajamos con usted para entender su situación financiera y ayudarle a tomar decisiones informadas sobre su patrimonio.'
      },
      rightPartner: {
        title: 'Su banquero personal',
        description: 'Su situación financiera requiere atención personal. Su banquero privado es su principal punto de contacto para preguntas sobre sus finanzas y patrimonio. Le conectamos con el banquero que tiene experiencia con situaciones como la suya. Con años de experiencia trabajando con familias de alto patrimonio y empresarios, su banquero privado puede ayudarle a gestionar cuestiones de administración patrimonial y planificación financiera.'
      },
      testimonial: {
        quote: 'Me sentí escuchado y comprendido, y eso fue muy importante para dar un paso adelante',
        author: 'Hans Gitsels',
        role: 'Cliente | Aareal Bank AG'
      },
      atYourService: {
        title: 'Cómo le ayudamos',
        privateBanker: {
          title: 'Un punto de contacto dedicado',
          description: 'Su banquero privado es más que un asesor financiero. Es alguien que entiende su situación y puede ayudarle con todas sus preguntas financieras.'
        },
        expertise: {
          title: 'Acceso a especialistas',
          description: 'Combinamos experiencia con conocimiento actual del mercado para darle información relevante. Ya sea que esté enfrentando una transición empresarial o planificación financiera compleja, nuestros especialistas pueden ayudar.'
        },
        tailored: {
          title: 'Soluciones para su situación',
          description: 'Sabemos que sus necesidades financieras son específicas para usted. Por eso personalizamos nuestro enfoque a su situación. Normalmente comenzamos con planificación patrimonial para poder abordar sus prioridades de inmediato.'
        }
      },
      familyBanking: {
        title: 'Banca privada para su familia',
        description: 'Su familia también puede trabajar con nosotros. Ayudamos con problemas que las familias de alto patrimonio enfrentan a menudo. Podemos facilitar conversaciones con sus hijos adultos sobre el patrimonio familiar y sus planes para el futuro. También ayudamos a preparar a los jóvenes adultos para manejar patrimonio significativo.'
      },
      alsoOfInterest: {
        title: 'También puede interesarle',
        events: {
          title: 'Eventos',
          description: 'Nuestros eventos le dan la oportunidad de conocer a otros y compartir experiencias y conocimientos.'
        },
        secureBanking: {
          title: 'Seguridad',
          description: 'Trabajamos para mantener segura su banca en línea mediante múltiples medidas de protección y prevención de fraude.'
        },
        betterWorld: {
          title: 'Contribuir a un mundo mejor',
          description: 'Juntos podemos hacer una diferencia positiva, ahora y para las generaciones futuras.'
        }
      }
    },
    financialEducation: {
      title: 'Centro de Educación Financiera',
      subtitle: 'Empodérese con conocimiento. Aprenda sobre presupuestos, ahorro, inversión y gestión de crédito a través de nuestra biblioteca completa de artículos, videos y herramientas interactivas.',
      search: 'Buscar artículos, temas o palabras clave...',
      tabs: {
        articles: 'Artículos Educativos',
        news: 'Noticias Financieras'
      },
      categories: {
        all: 'Todos los Temas',
        budgeting: 'Presupuesto',
        saving: 'Ahorro',
        investing: 'Inversión',
        credit: 'Crédito'
      },
      newsCategories: {
        all: 'Todas las Noticias',
        banking: 'Bancario',
        economy: 'Economía',
        crypto: 'Crypto'
      },
      articles: {
        title: 'Todos los Artículos',
        allArticles: 'Todos los Artículos',
        categoryArticles: {
          budgeting: 'Artículos de Presupuesto',
          saving: 'Artículos de Ahorro',
          investing: 'Artículos de Inversión',
          credit: 'Artículos de Crédito'
        },
        featured: 'DESTACADO',
        readArticle: 'Leer Artículo',
        closeArticle: 'Cerrar Artículo',
        minRead: 'min de lectura',
        noArticles: 'No se encontraron artículos que coincidan con sus criterios.',
        difficulty: {
          beginner: 'PRINCIPIANTE',
          intermediate: 'INTERMEDIO',
          advanced: 'AVANZADO'
        }
      },
      news: {
        title: 'Últimas Noticias Financieras',
        latestNews: 'Últimas Noticias Financieras',
        categoryNews: {
          banking: 'Noticias Bancarias',
          economy: 'Noticias Económicas',
          crypto: 'Noticias Crypto'
        },
        readFull: 'Leer Artículo Completo',
        noNews: 'No se encontraron noticias.',
        justNow: 'Justo ahora',
        hoursAgo: 'h atrás'
      },
      calculators: {
        backToEducation: 'Volver al Centro Educativo',
        budgetCalc: {
          title: 'Calculadora de Presupuesto Mensual',
          monthlyIncome: 'Ingreso Mensual',
          housing: 'Vivienda',
          transportation: 'Transporte',
          food: 'Comida y Supermercado',
          utilities: 'Servicios Públicos',
          insurance: 'Seguro',
          entertainment: 'Entretenimiento',
          savings: 'Ahorros',
          other: 'Otro',
          summary: 'Resumen del Presupuesto',
          totalIncome: 'Ingreso Total',
          totalExpenses: 'Gastos Totales',
          remaining: 'Restante',
          ruleTitle: 'Análisis de la Regla 50/30/20',
          needs: 'Necesidades',
          wants: 'Deseos',
          target: 'Objetivo',
          savingsRate: 'Tasa de Ahorro',
          greatJob: 'Excelente trabajo!',
          goodStart: 'Buen comienzo!',
          tryIncrease: 'Intente aumentar sus ahorros'
        },
        savingsCalc: {
          title: 'Calculadora de Meta de Ahorro',
          savingsGoal: 'Meta de Ahorro',
          currentSavings: 'Ahorros Actuales',
          monthlyContribution: 'Contribución Mensual',
          interestRate: 'Tasa de Interés',
          whatSavingFor: '¿Para qué está ahorrando?',
          howMuchNow: '¿Cuánto tiene ahora?',
          howMuchMonthly: '¿Cuánto puede ahorrar cada mes?',
          expectedReturn: 'Rendimiento anual esperado sobre los ahorros',
          timeline: 'Cronograma hacia la Meta',
          timeToReach: 'Tiempo para alcanzar la meta',
          targetDate: 'Fecha Objetivo',
          breakdown: 'Desglose del Progreso',
          goalAmount: 'Monto de la Meta',
          startingBalance: 'Saldo Inicial',
          stillNeeded: 'Aún Necesario',
          totalContributions: 'Contribuciones Totales',
          interestEarned: 'Interés Ganado',
          progressBar: 'Barra de Progreso',
          quickTips: 'Consejos Rápidos',
          tip1: 'Automatice sus transferencias de ahorro',
          tip2: 'Comience pequeño y aumente con el tiempo',
          tip3: 'Use cuentas de ahorro de alto rendimiento',
          tip4: 'Revise y ajuste mensualmente'
        },
        compoundCalc: {
          title: 'Calculadora de Interés Compuesto',
          initialInvestment: 'Inversión Inicial',
          monthlyContribution: 'Contribución Mensual',
          yearsToGrow: 'Años de Crecimiento',
          annualRate: 'Tasa de Interés Anual',
          compoundFrequency: 'Frecuencia de Capitalización',
          monthly: 'Mensual',
          annually: 'Anual',
          futureValue: 'Valor Futuro',
          breakdown: 'Desglose',
          totalContributions: 'Contribuciones Totales',
          interestEarned: 'Interés Ganado',
          totalValue: 'Valor Total',
          growthOverTime: 'Crecimiento con el Tiempo',
          year: 'Año',
          balance: 'Saldo',
          interest: 'Interés',
          afterYears: 'Después de {years} años',
          rule72: 'Regla del 72',
          rule72Text: 'Con un rendimiento anual del {rate}%, su dinero se duplicará en aproximadamente {years} años.'
        },
        debtCalc: {
          title: 'Calculadora de Pago de Deudas',
          totalDebt: 'Saldo Total de Deuda',
          interestRate: 'Tasa de Interés (APR)',
          monthlyPayment: 'Pago Mensual',
          minimumPayment: 'Pago mínimo',
          paymentTooLow: 'Pago Demasiado Bajo!',
          paymentWarning: 'Su pago mensual debe ser mayor que el mínimo para pagar esta deuda. A este ritmo, nunca la pagará!',
          timeline: 'Cronograma de Pago',
          timeToDebtFree: 'Tiempo para Quedar Libre de Deudas',
          debtFreeDate: 'Fecha Libre de Deudas',
          breakdown: 'Desglose de Costos',
          originalBalance: 'Saldo Original',
          totalInterest: 'Interés Total Pagado',
          totalPaid: 'Monto Total Pagado',
          doublePayment: '¿Duplicar Su Pago?',
          doubleText: 'Vea qué sucede si paga {amount} $ por mes',
          timeSaved: 'Tiempo Ahorrado',
          interestSaved: 'Interés Ahorrado',
          newPayoffTime: 'Nuevo Tiempo de Pago',
          strategies: 'Estrategias de Pago',
          strategy1: 'Pague más que el mínimo',
          strategy2: 'Haga pagos quincenales',
          strategy3: 'Use ingresos inesperados (bonos, devoluciones de impuestos)',
          strategy4: 'Reduzca gastos temporalmente',
          strategy5: 'Considere transferencia de saldo (0% APR)',
          progressViz: 'Visualización del Progreso',
          principal: 'Principal',
          interest: 'Interés'
        },
        retirementCalc: {
          title: 'Calculadora de Jubilación',
          currentAge: 'Edad Actual',
          retirementAge: 'Edad de Jubilación',
          currentSavings: 'Ahorros para la Jubilación Actuales',
          monthlyContribution: 'Contribución Mensual',
          expectedReturn: 'Rendimiento Anual Esperado',
          desiredIncome: 'Ingreso Mensual de Jubilación Deseado',
          yearsUntil: '{years} años hasta la jubilación',
          historicalAvg: 'Promedio histórico: 7-8% para carteras diversificadas',
          perYear: 'por año',
          onTrack: 'Está en el Camino Correcto!',
          onTrackText: 'Según su plan actual, debería tener suficiente para la jubilación.',
          projectedIncome: 'Ingreso Mensual Proyectado',
          actionNeeded: 'Acción Necesaria',
          actionText: 'Es posible que necesite ajustar su plan de jubilación para alcanzar su objetivo de ingresos.',
          additionalNeeded: 'Contribución Mensual Adicional Necesaria',
          snapshot: 'Instantánea de Jubilación',
          yearsToRetirement: 'Años hasta la Jubilación',
          projectedNestEgg: 'Fondo Proyectado',
          totalContributions: 'Contribuciones Totales',
          investmentGains: 'Ganancias de Inversión',
          monthlyIncome: 'Ingreso Mensual',
          composition: 'Composición de Ahorros',
          initialSavings: 'Ahorros Iniciales',
          contributions: 'Contribuciones',
          investmentGrowth: 'Crecimiento de Inversiones',
          rule4Percent: 'La Regla del 4%',
          rule4PercentText: 'Una guía común de jubilación sugiere retirar el 4% de su cartera anualmente. Según sus ahorros proyectados:',
          safeAnnual: 'Retiro Anual Seguro',
          safeMonthly: 'Ingreso Mensual Seguro',
          tipsTitle: 'Consejos para la Planificación de Jubilación',
          tip1: 'Maximice la contribución 401(k) del empleador',
          tip2: 'Considere una Roth IRA para crecimiento libre de impuestos',
          tip3: 'Aumente las contribuciones con los aumentos salariales',
          tip4: 'Diversifique sus inversiones',
          tip5: 'Comience lo antes posible'
        }
      },
      videoTutorials: {
        title: 'Tutoriales en Video',
        description: 'Próximamente: Vea nuestra serie de videos dirigida por expertos sobre temas de finanzas personales.',
        notify: 'Notificarme'
      },
      consultation: {
        title: '¿Necesita Orientación Personal?',
        description: 'Programe una consulta gratuita con uno de nuestros asesores financieros.',
        button: 'Programar Consulta'
      },
      finalCta: {
        title: 'Comience Su Viaje Financiero Hoy',
        description: 'El conocimiento es el primer paso hacia la libertad financiera. Explore nuestros recursos, use nuestras herramientas y tome el control de su futuro financiero.',
        openAccount: 'Abrir una Cuenta',
        contactUs: 'Contáctenos'
      }
    },
    support: {
      title: 'Soporte al Cliente',
      subtitle: 'Estamos aquí para ayudarle con todas sus necesidades bancarias. Elija la mejor manera de contactarnos.',
      phone: {
        title: 'Soporte Telefónico 24/7',
        description: 'Hable con un representante en cualquier momento, día o noche.',
        action: 'Llamar Ahora'
      },
      chat: {
        title: 'Chat en Vivo',
        description: 'Obtenga ayuda instantánea a través de nuestro sistema de chat seguro.',
        detail: 'Disponible 24/7',
        action: 'Iniciar Chat'
      },
      email: {
        title: 'Soporte por Correo Electrónico',
        description: 'Envíenos un mensaje detallado y responderemos dentro de 24 horas.',
        action: 'Enviar Correo'
      },
      faq: {
        title: 'Preguntas Frecuentes',
        items: [
          {
            q: '¿Cómo restablezco mi contraseña de banca en línea?',
            a: 'Haga clic en \'Olvidé mi contraseña\' en la página de inicio de sesión. Ingrese su nombre de usuario y dirección de correo electrónico, y le enviaremos un enlace seguro para restablecer su contraseña. El enlace expira después de 24 horas por seguridad.'
          },
          {
            q: '¿Cuáles son sus tasas de interés actuales?',
            a: 'Las tasas de interés varían según el tipo de cuenta y el saldo. Visite nuestra página de Tasas para obtener información actualizada sobre APY en cuentas de ahorro, CDs y productos de préstamo. Las tasas se actualizan diariamente.'
          },
          {
            q: '¿Cuánto tiempo tarda una transferencia bancaria?',
            a: 'Las transferencias bancarias domésticas generalmente se completan en 24 horas. Las transferencias internacionales pueden tomar de 3 a 5 días hábiles según el país de destino y los bancos intermediarios.'
          },
          {
            q: '¿Es segura la banca en línea?',
            a: 'Sí, nuestra plataforma de banca en línea utiliza cifrado bancario de 256 bits, autenticación multifactor y monitoreo de fraude en tiempo real para proteger la información de su cuenta.'
          },
          {
            q: '¿Cómo reporto una tarjeta perdida o robada?',
            a: 'Llame inmediatamente a nuestros servicios de tarjetas 24/7 al 1-800-ANCHOR. También puede congelar temporalmente su tarjeta iniciando sesión en la banca en línea.'
          },
          {
            q: '¿Cuáles son sus tarifas de cajero automático?',
            a: 'Los cajeros automáticos de Aareal Bank AG son gratuitos para los titulares de cuentas. También reembolsamos hasta $20/mes en tarifas de cajeros automáticos fuera de la red para titulares de cuentas premium.'
          },
          {
            q: '¿Cómo abro una cuenta comercial?',
            a: 'Visite cualquier sucursal con sus documentos de registro comercial, EIN e identificación gubernamental. También puede iniciar la solicitud en línea y completarla en persona.'
          },
          {
            q: '¿Cómo deposito cheques?',
            a: 'Puede depositar cheques en cualquier sucursal o cajero automático de Aareal Bank AG. Simplemente endose el cheque y siga las instrucciones en pantalla. Los fondos suelen estar disponibles en 1-2 días hábiles.'
          }
        ],
        viewAll: 'Ver Todas las Preguntas Frecuentes'
      },
      hours: {
        title: 'Horario de Sucursales',
        weekdays: 'Lunes - Viernes:',
        weekdaysTime: '9:00 AM - 5:00 PM',
        saturday: 'Sábado:',
        saturdayTime: '9:00 AM - 2:00 PM',
        sunday: 'Domingo:',
        sundayTime: 'Cerrado',
        support247: 'Soporte telefónico y en línea disponible 24/7'
      }
    },
    mortgage: {
      title: 'Servicios Hipotecarios',
      subtitle: 'Encuentre la solución hipotecaria perfecta para su hogar con tasas competitivas y términos flexibles.',
      typesTitle: 'Opciones de Hipoteca',
      types: {
        fixed: {
          title: 'Hipoteca de Tasa Fija',
          description: 'Pagos mensuales estables con una tasa de interés fija durante el plazo del préstamo.',
          features: [
            'Pagos mensuales predecibles',
            'Protección contra aumentos de tasas',
            'Plazos de 15 a 30 años',
            'Ideal para propiedad a largo plazo'
          ]
        },
        adjustable: {
          title: 'Hipoteca de Tasa Ajustable',
          description: 'Tasas iniciales más bajas que se ajustan periódicamente según las condiciones del mercado.',
          features: [
            'Tasas iniciales más bajas',
            'Ajustes de tasa después del período inicial',
            'Ideal para propiedad a corto plazo',
            'Potencial para interés total más bajo'
          ]
        },
        fha: {
          title: 'Préstamos FHA',
          description: 'Préstamos respaldados por el gobierno con requisitos de pago inicial más bajos.',
          features: [
            'Pago inicial desde 3.5%',
            'Requisitos de crédito más flexibles',
            'Respaldo de seguro gubernamental',
            'Ideal para compradores primerizos'
          ]
        },
        va: {
          title: 'Préstamos VA',
          description: 'Programas hipotecarios especiales para veteranos y miembros del servicio militar elegibles.',
          features: [
            'Sin pago inicial requerido',
            'Sin seguro hipotecario privado',
            'Tasas competitivas',
            'Costos de cierre limitados'
          ]
        }
      },
      calculator: {
        title: 'Calculadora de Hipoteca',
        description: 'Estime su pago hipotecario mensual con nuestra calculadora fácil de usar.',
        loanAmount: 'Monto del Préstamo',
        interestRate: 'Tasa de Interés',
        loanTerm: 'Plazo del Préstamo',
        downPayment: 'Pago Inicial',
        years: 'Años',
        calculate: 'Calcular Pago'
      },
      processTitle: 'El Proceso Hipotecario',
      process: {
        preapproval: {
          title: 'Pre-Aprobación',
          description: 'Obtenga pre-aprobación para conocer su presupuesto y fortalecer su oferta.'
        },
        shopping: {
          title: 'Búsqueda de Casa',
          description: 'Encuentre su hogar perfecto con confianza en su financiamiento.'
        },
        application: {
          title: 'Aplicación',
          description: 'Complete su solicitud de hipoteca con nuestro proceso simple.'
        },
        closing: {
          title: 'Cierre',
          description: 'Finalice su hipoteca y obtenga las llaves de su nuevo hogar.'
        }
      },
      cta: {
        title: '¿Listo Para Comprar Su Casa?',
        description: 'Comience su solicitud de hipoteca hoy o hable con uno de nuestros especialistas hipotecarios.',
        button: 'Solicitar Ahora'
      }
    },
    aboutUs: {
      title: 'Acerca de Aareal Bank AG',
      subtitle: 'Construyendo riqueza a través de valores bancarios tradicionales y servicio personalizado desde 1952.',
      mission: {
        title: 'Nuestra Misión',
        description: 'Los activos digitales han alcanzado la madurez y los servicios bancarios deben estar a la altura del desafío. El comercio, la inversión y el almacenamiento de criptomonedas y otros activos digitales no deben ser un \'complemento\' a la banca tradicional, sino un servicio integrado que se vincule con todos los demás aspectos de los servicios bancarios de un cliente. Aareal Bank AG se estableció para proporcionar precisamente esta solución a inversores profesionales, empresas, family offices e instituciones.'
      },
      vision: {
        title: 'Nuestra Visión',
        description: 'Ser la institución financiera más confiable y respetada en nuestra región, conocida por innovación, integridad y compromiso inquebrantable con el éxito del cliente.'
      },
      futureFinance: {
        title: 'Creando el futuro de las finanzas',
        description: 'Hemos liderado con una nueva visión bancaria que derriba las barreras entre los servicios financieros tradicionales y el soporte para activos digitales. Nuestros productos y soluciones galardonados ofrecen un servicio fluido en todas las principales clases de activos, incluyendo activos tradicionales, criptomonedas y redes blockchain.'
      },
      principles: {
        title: 'Nuestros principios',
        description: 'Ofrecemos todas las capacidades de la banca moderna incluyendo cripto, accesibles a través de una única pasarela y respaldadas por los más altos estándares de seguridad. Nuestra misión se basa en tres palabras clave:',
        sophisticated: {
          title: 'Sofisticado',
          description: 'Revolucionando tu experiencia financiera con tecnología de vanguardia y soluciones innovadoras'
        },
        seamless: {
          title: 'Fluido',
          description: 'Uniendo el mundo de las finanzas tradicionales y digitales con transacciones integradas y sin esfuerzo'
        },
        secure: {
          title: 'Seguro',
          description: 'Manteniendo tus finanzas seguras con protección sólida y líder en la industria'
        }
      },
      valuesTitle: 'Nuestros Valores Fundamentales',
      values: {
        integrity: {
          title: 'Integridad',
          description: 'Conducimos nuestro negocio con honestidad, transparencia y principios éticos.'
        },
        community: {
          title: 'Comunidad',
          description: 'Invertimos y apoyamos las comunidades a las que servimos.'
        },
        excellence: {
          title: 'Excelencia',
          description: 'Nos esforzamos por la excelencia en todo lo que hacemos.'
        },
        innovation: {
          title: 'Innovación',
          description: 'Aprovechamos la innovación para servir mejor a nuestros clientes.'
        }
      },
      historyTitle: 'Nuestro Viaje',
      milestones: {
        founded: {
          title: 'Fundación de Aareal Bank AG',
          description: 'Comenzó como un pequeño banco comunitario con compromiso al servicio personalizado.'
        },
        expansion: {
          title: 'Expansión Regional',
          description: 'Expandido a múltiples comunidades en la región con 10 nuevas sucursales.'
        },
        digital: {
          title: 'Lanzamiento de Banca Digital',
          description: 'Lanzó servicios completos de banca en línea para servir a clientes 24/7.'
        },
        branches: {
          title: 'Hoy',
          description: 'Ahora sirviendo a más de 50,000 clientes en 25 sucursales con más de $2 mil millones en activos.'
        }
      },
      stats: {
        customers: '50,000+',
        customersLabel: 'Clientes Satisfechos',
        branches: '25',
        branchesLabel: 'Sucursales',
        employees: '500+',
        employeesLabel: 'Empleados Dedicados'
      },
      cta: {
        title: 'Únase a Nuestra Familia Bancaria',
        description: 'Experimente la diferencia de Aareal Bank AG con servicio personalizado y soluciones bancarias modernas.',
        button: 'Abrir Cuenta'
      }
    },
    currencyExchange: {
      title: 'Cambio de Divisas',
      subtitle: 'Cambie divisas fiduciarias y criptomonedas con tasas competitivas y transferencias instantáneas',
      converter: {
        title: 'Conversor de Divisas',
        from: 'De',
        to: 'A',
        exchangeRate: 'Tipo de Cambio',
        executeExchange: 'Ejecutar Cambio',
        fiat: 'Fiat',
        crypto: 'Crypto',
        rateAlert: {
          title: 'Alerta de Tasa',
          description: 'Reciba notificación cuando su tipo de cambio deseado esté disponible',
          placeholder: 'Tasa objetivo',
          setAlert: 'Establecer Alerta',
          notification: 'Notificaciones instantáneas por email y SMS'
        }
      },
      cryptoRates: {
        title: 'Tasas de Criptomonedas'
      },
      fiatCurrencies: {
        title: 'Principales Divisas Fiduciarias',
        perUsd: 'por USD'
      },
      wireTransfer: {
        title: 'Transferencia Bancaria Internacional',
        features: {
          lowFees: {
            title: 'Tarifas Bajas',
            description: 'Desde solo $15 para transferencias internacionales'
          },
          fast: {
            title: 'Transferencias Rápidas',
            description: 'La mayoría de las transferencias se completan en 24-48 horas'
          },
          global: {
            title: '200+ Países',
            description: 'Envíe dinero a más de 200 países en todo el mundo'
          }
        },
        calculator: {
          title: 'Calculadora de Tarifas de Transferencia',
          amount: 'Monto de Transferencia',
          destination: 'País de Destino',
          transferFee: 'Tarifa de Transferencia',
          exchangeMarkup: 'Margen del Tipo de Cambio',
          totalCost: 'Costo Total'
        }
      },
      cta: {
        title: 'Comience a Cambiar Hoy',
        description: 'Abra una cuenta Aareal Bank AG para acceder a tipos de cambio competitivos y transferencias internacionales de bajo costo',
        button: 'Abrir Cuenta'
      }
    },
    trustSection: {
      title: 'Divisas Soportadas',
      subtitle: 'Trabajamos con divisas tradicionales y digitales',
      crypto: {
        title: 'Criptoactivos Disponibles',
        description: 'Compre, venda y conserve las principales criptomonedas con almacenamiento seguro',
        more: 'y muchos más...'
      },
      fiat: {
        title: 'Divisas Fiduciarias Disponibles',
        description: 'Trabaje con las principales divisas de todo el mundo',
        more: 'y muchos más...'
      }
    },
    newsletter: {
      title: 'Suscríbase a Nuestro Newsletter',
      subtitle: 'Reciba las últimas noticias, consejos financieros y ofertas exclusivas',
      emailPlaceholder: 'Ingrese su correo electrónico',
      subscribe: 'Suscribirse',
      success: '¡Gracias por suscribirse!',
      error: 'Ocurrió un error. Por favor, inténtelo de nuevo.',
      alreadySubscribed: 'Este correo electrónico ya está suscrito'
    },
    news: {
      title: 'Últimas Noticias',
      subtitle: 'Manténgase informado con los últimos desarrollos del mundo financiero',
      categories: {
        all: 'Todas',
        banking: 'Banca',
        economy: 'Economía',
        crypto: 'Cripto'
      },
      readMore: 'Leer Más',
      loading: 'Cargando noticias...',
      error: 'Error al cargar las noticias',
      noArticles: 'No se encontraron artículos',
      publishedBy: 'Publicado por'
    },
    difference: {
      title: 'Por Qué Elegir Aareal Bank AG',
      safety: 'Seguridad',
      safetyDesc: 'Su dinero está protegido con medidas de seguridad comprobadas. No tomamos atajos cuando se trata de proteger sus cuentas.',
      transparency: 'Transparencia',
      transparencyDesc: 'Acceda a todas sus cuentas en un solo lugar. Vea exactamente dónde está su dinero y qué está haciendo.',
      performance: 'Rendimiento',
      performanceDesc: 'Nos mantenemos actualizados con la tecnología financiera para que pueda aprovechar nuevas oportunidades cuando tengan sentido para usted.'
    },
    investmentHighlight: {
      title: 'Inversiones',
      subtitle: 'Crypto, efectivo, acciones o inversiones tradicionales',
      description: 'Desde acciones hasta crypto, tenemos opciones que coinciden con sus objetivos.'
    }
  },
  el: {
    nav: {
      home: 'Αρχική',
      services: 'Υπηρεσίες',
      about: 'Σχετικά',
      contact: 'Επικοινωνία',
      accounts: 'Λογαριασμοί',
      loans: 'Δάνεια'
    },
    hero: {
      title: 'Χρηματοοικονομικές λύσεις για την ψηφιακή εποχή',
      subtitle: 'Από το 1892',
      description: 'Συνδυάζοντας την παραδοσιακή χρηματοοικονομική τεχνογνωσία με την τεχνολογία αιχμής για να διαμορφώσουμε το μέλλον των οικονομικών.',
      openAccount: 'Άνοιγμα Λογαριασμού',
      learnMore: 'Μάθετε Περισσότερα'
    },
    services: {
      title: 'Οι Υπηρεσίες μας',
      subtitle: 'Τι Προσφέρουμε',
      personal: {
        title: 'Προσωπική Τραπεζική',
        description: 'Λογαριασμοί που ταιριάζουν στη ζωή σας. Καλά επιτόκια, χωρίς χρεώσεις έκπληξη.'
      },
      business: {
        title: 'Επιχειρηματική Τραπεζική',
        description: 'Τραπεζικά εργαλεία για επιχειρήσεις, είτε μόλις ξεκινάτε είτε είστε ήδη καθιερωμένοι.'
      },
      loans: {
        title: 'Δάνεια & Στεγαστικά',
        description: 'Δίκαια επιτόκια σε δάνεια για σπίτι, αυτοκίνητο ή προσωπικές ανάγκες. Εξηγούμε τα πάντα από την αρχή.'
      },
      investment: {
        title: 'Επενδυτικές Συμβουλές',
        description: 'Βοήθεια στον σχεδιασμό του οικονομικού σας μέλλοντος και την ανάπτυξη των αποταμιεύσεών σας.'
      },
      digital: {
        title: 'Ψηφιακή Τραπεζική',
        description: 'Ελέγξτε τους λογαριασμούς σας, μεταφέρετε χρήματα και πληρώστε λογαριασμούς online ή από το τηλέφωνό σας, ανά πάσα στιγμή.'
      }
    },
    trust: {
      title: 'Ασφάλεια και Εμπιστοσύνη',
      subtitle: 'Η Οικονομική σας Ασφάλεια είναι η Προτεραιότητά μας',
      imageCaption1: 'Τραπεζική Ασφάλεια',
      imageCaption2: 'Έμπειροι Σύμβουλοι',
      security: {
        title: 'Προηγμένη Ασφάλεια',
        description: 'Η κρυπτογράφηση στρατιωτικού επιπέδου και ο έλεγχος ταυτότητας πολλαπλών παραγόντων προστατεύουν τους λογαριασμούς σας.'
      },
      privacy: {
        title: 'Προστατευμένο Απόρρητο',
        description: 'Τα προσωπικά σας στοιχεία προστατεύονται με κορυφαία στον κλάδο μέτρα απορρήτου.'
      },
      excellence: {
        title: 'Βραβευμένη Εξυπηρέτηση',
        description: 'Αναγνωρισμένοι για την αριστεία στην εξυπηρέτηση πελατών και την οικονομική καινοτομία.'
      },
      support: {
        title: 'Υποστήριξη 24/7',
        description: 'Η αφοσιωμένη μας ομάδα είναι διαθέσιμη να σας βοηθήσει όλο το εικοσιτετράωρο.'
      }
    },
    about: {
      title: 'Σχετικά με την Aareal Bank AG',
      subtitle: 'Χρηματοοικονομικές λύσεις για την ψηφιακή εποχή',
      description: 'Συγχώνευση παραδοσιακής χρηματοοικονομικής εμπειρίας με τεχνολογία αιχμής για να διαμορφώσουμε το μέλλον των οικονομικών.',
      stats: {
        years: 'Χρόνια Υπηρεσίας',
        customers: 'Ικανοποιημένοι Πελάτες',
        branches: 'Υποκαταστήματα',
        assets: 'Περιουσιακά Στοιχεία υπό Διαχείριση'
      }
    },
    contact: {
      title: 'Επικοινωνήστε μαζί μας',
      subtitle: 'Είμαστε Εδώ για Εσάς',
      phone: 'Τηλέφωνο',
      email: 'Email',
      hours: 'Ώρες Λειτουργίας',
      hoursValue: 'Δευτέρα - Παρασκευή: 9:00 π.μ. - 5:00 μ.μ.',
      address: 'Διεύθυνση Κεντρικού Υποκαταστήματος',
      addressValue: 'Χρηματοοικονομική Περιοχή 123, Banking Plaza, Suite 100'
    },
    footer: {
      tagline: 'Aareal Bank AG',
      quickLinks: 'Γρήγοροι Σύνδεσμοι',
      legal: 'Νομικά',
      privacy: 'Απόρρητο',
      terms: 'Όροι Χρήσης',
      security: 'Ασφάλεια',
      accessibility: 'Προσβασιμότητα',
      rights: 'Όλα τα δικαιώματα διατηρούνται.',
      fdic: 'Μέλος FDIC. Δανειστής Ίσων Ευκαιριών Στέγασης.'
    },
    personalBanking: {
      title: 'Προσωπική Τραπεζική',
      subtitle: 'Ολοκληρωμένες τραπεζικές λύσεις για να σας βοηθήσουν να διαχειριστείτε, να εξοικονομήσετε και να αναπτύξετε τα χρήματά σας.',
      hero: {
        title: 'Ιδιωτική Τραπεζική για Εύπορους Πελάτες',
        subtitle: 'Εξατομικευμένη χρηματοοικονομική καθοδήγηση για ιδιώτες και οικογένειες'
      },
      intro: 'Η οικονομική σας κατάσταση είναι μοναδική. Συνεργαζόμαστε με εύπορα άτομα, επιχειρηματίες και οικογένειες που χρειάζονται περισσότερα από την τυπική τραπεζική. Οι σύμβουλοί μας αφιερώνουν χρόνο για να κατανοήσουν τους στόχους σας και να δημιουργήσουν ένα σχέδιο που ταιριάζει στην κατάστασή σας. Είτε διατηρείτε τον πλούτο, είτε τον αυξάνετε, είτε σχεδιάζετε για την επόμενη γενιά, είμαστε εδώ για να βοηθήσουμε.',
      getToKnow: {
        title: 'Μάθετε για τις Υπηρεσίες Ιδιωτικής Τραπεζικής μας',
        forWho: {
          title: 'Ποιους Εξυπηρετούμε',
          description: 'Δείτε αν οι υπηρεσίες μας σας ταιριάζουν'
        },
        approach: {
          title: 'Πώς Δουλεύουμε',
          description: 'Η προσέγγισή μας στη διαχείριση του πλούτου σας'
        },
        expertise: {
          title: 'Η Εμπειρία μας',
          description: 'Τι προσφέρουμε'
        },
        becomeClient: {
          title: 'Γίνετε Πελάτης',
          description: 'Ξεκινήστε με την ιδιωτική τραπεζική'
        }
      },
      wealthPlan: {
        title: 'Οι Οικονομικοί σας Στόχοι και Προτεραιότητες',
        description: 'Τι θέλετε να κάνετε με τα χρήματά σας; Να τα κρατήσετε ασφαλή, να τα αυξήσετε ή να τα μεταβιβάσετε στην οικογένειά σας; Ένα Σχέδιο Περιουσίας σας βοηθά να δείτε την πλήρη εικόνα. Θα εξετάσουμε την τρέχουσα κατάστασή σας, τους στόχους σας και τι έχει μεγαλύτερη σημασία για εσάς—την οικογένειά σας, τα περιουσιακά σας στοιχεία, την επιχείρησή σας. Κάθε νέος πελάτης λαμβάνει ένα Σχέδιο Περιουσίας χωρίς χρέωση. Είναι ο τρόπος μας να διασφαλίσουμε ότι σας δίνουμε τη σωστή καθοδήγηση.',
      },
      highlights: {
        expertise: {
          title: 'Πολλά Χρόνια Εμπειρίας',
          description: 'Έχουμε μάθει πολλά σε αυτό το διάστημα για το πώς να βοηθάμε τους ανθρώπους να διαχειρίζονται τα χρήματά τους σε καλούς και κακούς καιρούς. Αυτό που λειτουργούσε για τους πελάτες μας πριν από δεκαετίες μπορεί να μην λειτουργεί σήμερα, γι\' αυτό συνεχίζουμε να προσαρμοζόμαστε.',
        },
        events: {
          title: 'Εκδηλώσεις Πελατών',
          description: 'Διοργανώνουμε εκδηλώσεις για θέματα όπως η επιχειρηματικότητα, οι επενδύσεις και η φιλανθρωπία. Είναι μια ευκαιρία να γνωρίσετε άλλους πελάτες, να ανταλλάξετε ιδέες και να ακούσετε ειδικούς από διάφορους τομείς.',
        },
        bestBank: {
          title: 'Βραβευμένη Ιδιωτική Τράπεζα',
          description: 'Εργαζόμαστε σκληρά για να σας προσφέρουμε καλή εξυπηρέτηση και σωστές συμβουλές. Οι πελάτες μας εκτιμούν την προσωπική προσοχή που παρέχουμε. Έχουμε αναγνωριστεί ως η Καλύτερη Ευρωπαϊκή Ιδιωτική Τράπεζα το 2025, κάτι για το οποίο είμαστε περήφανοι.',
        }
      },
      benefits: {
        title: 'Γιατί να Επιλέξετε Εμάς;',
        security: {
          title: 'Ασφάλεια Πρώτα',
          description: 'Προηγμένη προστασία από απάτη και ασφάλιση FDIC σε όλους τους λογαριασμούς καταθέσεων.'
        },
        digital: {
          title: 'Ψηφιακή Τραπεζική',
          description: 'Αποκτήστε πρόσβαση στους λογαριασμούς σας οποτεδήποτε και οπουδήποτε με την mobile εφαρμογή μας και τη διαδικτυακή τραπεζική.'
        }
      },
      calculator: {
        title: 'Υπολογιστής Αποταμίευσης',
        subtitle: 'Δείτε πόσα θα μπορούσατε να κερδίσετε με τα ανταγωνιστικά μας επιτόκια',
        accountType: 'Τύπος Λογαριασμού',
        savingsOption: 'Λογαριασμός Ταμιευτηρίου - 0.50% APY',
        moneyMarketOption: 'Χρηματαγορά - 1.25% APY',
        cdOption: 'CD 1 Έτους - 3.00% APY',
        initialDeposit: 'Αρχική Κατάθεση',
        estimatedEarnings: 'Εκτιμώμενα Κέρδη (1 Έτος)'
      },
      testimonials: {
        title: 'Μαρτυρίες Πελατών',
        testimonial1: {
          quote: 'Είμαι πελάτης της Aareal Bank AG εδώ και 15 χρόνια. Γνωρίζουν την κατάστασή μου και μου δίνουν ειλικρινείς απαντήσεις. Τα επιτόκιά τους είναι ανταγωνιστικά και τους εμπιστεύομαι με τα χρήματά μου.',
          author: 'Sarah M.'
        },
        testimonial2: {
          quote: 'Η διαδικτυακή πλατφόρμα είναι εύκολη στη χρήση και ασφαλής. Μπορώ να ελέγχω τους λογαριασμούς μου, να πληρώνω λογαριασμούς και να μεταφέρω χρήματα χωρίς κανένα πρόβλημα.',
          author: 'Michael T.'
        },
        testimonial3: {
          quote: 'Όταν άνοιξα τον πρώτο μου λογαριασμό ταμιευτηρίου, το προσωπικό μου εξήγησε τα πάντα με σαφήνεια. Απάντησαν σε όλες τις ερωτήσεις μου και δεν με βίασαν.',
          author: 'Jessica L.'
        }
      },
      comparison: {
        title: 'Σύγκριση Λογαριασμών',
        feature: 'Χαρακτηριστικό',
        checking: 'Τρεχούμενος',
        savings: 'Ταμιευτήριο',
        moneyMarket: 'Χρηματαγορά',
        cd: 'CD',
        minimumBalance: 'Ελάχιστο Υπόλοιπο',
        interestRate: 'Επιτόκιο',
        monthlyFee: 'Μηνιαία Χρέωση',
        debitCard: 'Χρεωστική Κάρτα',
        checkWriting: 'Έκδοση Επιταγών',
        onlineBanking: 'Διαδικτυακή Τραπεζική'
      }
    },
    businessBanking: {
      title: 'Επιχειρηματική Τραπεζική',
      subtitle: 'Χρηματοοικονομικές λύσεις για επιχειρήσεις σε κάθε στάδιο ανάπτυξης.',
      hero: {
        title: 'Ανοίξτε επιχειρηματικό λογαριασμό',
        subtitle: 'Ειδική προσφορά για επιχειρηματίες νεοφυών επιχειρήσεων: χωρίς μηνιαία χρέωση για 12 μήνες'
      },
      accessOnline: {
        title: 'Access Online',
        description: 'Το ιδανικό σύστημα για τις ανάγκες διαχείρισης ρευστότητάς σας: διαχειριστείτε όλους τους τραπεζικούς λογαριασμούς σας, εθνικούς και διεθνείς, ακόμα και εκείνους που έχετε σε άλλες τράπεζες. Επιπλέον: πρόσβαση και έλεγχος όλων των ροών πληρωμών σας, οπουδήποτε στον κόσμο.'
      },
      sepa: {
        title: 'Όλα όσα πρέπει να γνωρίζετε για το SEPA και το IBAN',
        description: 'Όλα όσα πρέπει να γνωρίζετε για το SEPA και το IBAN, συμπεριλαμβανομένων τεχνικών πληροφοριών, δειγμάτων αρχείων και εντύπων σχετικά με τα πρότυπα πληρωμών SEPA βρίσκονται εδώ.',
        sepaButton: 'SEPA',
        ibanButton: 'IBAN'
      },
      loanCalculator: {
        title: 'Κόστος δανείου',
        description: 'Εισαγάγετε το ποσό που θέλετε να δανειστείτε και θα λάβετε απάντηση αμέσως.',
        why: 'Γιατί χρειάζεστε δάνειο;',
        purposes: {
          car: 'Αυτοκίνητο',
          renovation: 'Ανακαίνιση',
          other: 'Άλλη σημαντική αγορά'
        },
        howMuch: 'Πόσα θέλετε να δανειστείτε;',
        minAmount: 'Το ελάχιστο ποσό είναι 5000 €',
        maxAmount: 'Το μέγιστο ποσό είναι 75000 €',
        amountTooLow: 'Το ποσό πρέπει να είναι τουλάχιστον 5000 €',
        amountTooHigh: 'Το ποσό δεν μπορεί να υπερβαίνει τα 75000 €',
        selectTerm: 'Επιλέξτε την απαιτούμενη διάρκεια',
        year: 'Έτος',
        years: 'Έτη',
        min: 'Ελάχ.',
        max: 'Μέγ.'
      },
      loanResults: {
        title: 'Αυτά είναι τα ελάχιστα και μέγιστα κόστη',
        minimum: 'Ελάχιστο',
        maximum: 'Μέγιστο',
        monthlyRepayments: 'Μηνιαίες δόσεις',
        fixedInterestRate: 'Σταθερό επιτόκιο',
        totalCosts: 'Συνολικό κόστος',
        disclaimer: 'Αυτός ο υπολογισμός είναι εκτίμηση. Οι ακριβείς μηνιαίες δόσεις εξαρτώνται από την προσωπική σας κατάσταση.'
      },
      checking: {
        title: 'Επιχειρηματικός Τρεχούμενος Λογαριασμός',
        description: 'Επαγγελματικός λογαριασμός χωρίς μηνιαία χρέωση τήρησης τον πρώτο χρόνο.',
        features: ['Χωρίς όριο συναλλαγών', 'Κατάθεση επιταγών από κινητό', 'Online πληρωμή λογαριασμών συμπεριλαμβάνεται', 'Αποκλειστικός διαχειριστής λογαριασμού']
      },
      creditCards: {
        title: 'Επιχειρηματικές Πιστωτικές Κάρτες',
        description: 'Εταιρικές κάρτες με έως 1,5% επιστροφή μετρητών και καταγραφή εξόδων.',
        features: ['1,5% επιστροφή σε αγορές', 'Επιπλέον κάρτες χωρίς χρέωση', 'Μηνιαίες αναφορές εξόδων', 'Επέκταση εγγύησης']
      },
      loans: {
        title: 'Επιχειρηματικά Δάνεια',
        description: 'Χρηματοδότηση κεφαλαίου κίνησης και εξοπλισμού από 5.000 € έως 500.000 €.',
        features: ['Σταθερά επιτόκια από 7,5%', 'Διάρκεια αποπληρωμής 1-10 έτη', 'Απόφαση εντός 48 ωρών', 'Αποκλειστικός υπεύθυνος σχέσεων']
      },
      merchant: {
        title: 'Εμπορικές Υπηρεσίες',
        description: 'Αποδοχή καρτών με διακανονισμό την επόμενη εργάσιμη ημέρα.',
        features: ['Τερματικά POS και λογισμικό', 'Πύλη πληρωμών e-commerce', 'Ανέπαφες και mobile πληρωμές', 'Διαθέσιμα κεφάλαια επόμενη εργάσιμη']
      },
      payroll: {
        title: 'Υπηρεσίες Μισθοδοσίας',
        description: 'Πλήρης επεξεργασία μισθοδοσίας με αυτόματους φορολογικούς υπολογισμούς και πύλη εργαζομένων.',
        features: ['Μηνιαία ή εβδομαδιαία μισθοδοσία', 'Παρακράτηση και δηλώσεις φόρων', 'Απευθείας μεταφορά σε λογαριασμούς', 'Πρόσβαση εργαζομένων σε ιστορικό']
      },
      treasury: {
        title: 'Διαχείριση Ταμείου',
        description: 'Εργαλεία διαχείρισης ρευστότητας για επιχειρήσεις με σύνθετες τραπεζικές ανάγκες.',
        features: ['Αναφορά υπολοίπων σε πραγματικό χρόνο', 'Προστασία από απάτη positive pay', 'Εμβάσματα εσωτερικού και εξωτερικού', 'Αυτοματοποιημένη συμφωνία λογαριασμών']
      },
      cta: {
        title: 'Μιλήστε με Ειδικό Επιχειρήσεων',
        description: 'Επικοινωνήστε με την ομάδα μας για να συζητήσετε τις κατάλληλες υπηρεσίες για την επιχείρησή σας.',
        button: 'Αίτηση Επικοινωνίας'
      },
      learnMore: 'Μάθετε Περισσότερα'
    },
    loans: {
      title: 'Λύσεις Δανείων',
      subtitle: 'Ανταγωνιστικά επιτόκια και ευέλικτοι όροι για να σας βοηθήσουν να επιτύχετε τους χρηματοοικονομικούς σας στόχους.',
      home: {
        title: 'Στεγαστικά Δάνεια',
        description: 'Πραγματοποιήστε το όνειρό σας για ιδιοκατοίκηση με ανταγωνιστικά επιτόκια στεγαστικού δανείου.',
        features: ['Σταθερά και μεταβλητά επιτόκια', 'Επιλογές χαμηλής προκαταβολής', 'Προγράμματα για πρώτους αγοραστές', 'Επιλογές αναχρηματοδότησης'],
        rate: '5.99%',
        term: '30 Χρόνια'
      },
      auto: {
        title: 'Αυτοκινητιστικά Δάνεια',
        description: 'Οδηγήστε το νέο ή μεταχειρισμένο όχημά σας με ευέλικτη χρηματοδότηση αυτοκινήτου.',
        features: ['Χρηματοδότηση νέων και μεταχειρισμένων αυτοκινήτων', 'Ανταγωνιστικά επιτόκια', 'Διάρκειες έως 72 μήνες', 'Διαθέσιμη προέγκριση'],
        rate: '4.49%',
        term: '60 Μήνες'
      },
      student: {
        title: 'Φοιτητικά Δάνεια',
        description: 'Επενδύστε στο μέλλον σας με οικονομικά προσιτές λύσεις εκπαιδευτικής χρηματοδότησης.',
        features: ['Δάνεια προπτυχιακών και μεταπτυχιακών', 'Χωρίς τέλη έκδοσης', 'Ευέλικτοι όροι αποπληρωμής', 'Επιλογές απελευθέρωσης συν-υπογράφοντος'],
        rate: '6.25%',
        term: '10 Χρόνια'
      },
      personal: {
        title: 'Προσωπικά Δάνεια',
        description: 'Αποκτήστε πρόσβαση σε κεφάλαια για οποιονδήποτε σκοπό με γρήγορη έγκριση και ευέλικτους όρους.',
        features: ['Δάνεια έως $50,000', 'Χωρίς απαιτούμενη εγγύηση', 'Διαθέσιμη χρηματοδότηση την ίδια ημέρα', 'Σταθερές μηνιαίες πληρωμές'],
        rate: '8.99%',
        term: '5 Χρόνια'
      },
      homeEquity: {
        title: 'Δάνεια Επί της Αξίας της Κατοικίας',
        description: 'Αξιοποιήστε την αξία της κατοικίας σας για ανακαινίσεις, ενοποίηση χρεών ή μεγάλα έξοδα.',
        features: ['Δανειστείτε έως το 85% της αξίας της κατοικίας', 'Σταθερά επιτόκια', 'Δυνητικά φορολογικά εκπιπτόμενοι τόκοι', 'Χωρίς ποινές πρόωρης αποπληρωμής'],
        rate: '7.25%',
        term: '15 Χρόνια'
      },
      business: {
        title: 'Δάνεια Μικρών Επιχειρήσεων',
        description: 'Αναπτύξτε την επιχείρησή σας με λύσεις χρηματοδότησης προσαρμοσμένες για επιχειρηματίες.',
        features: ['Δάνεια με εγγύηση SBA', 'Γραμμές πίστωσης', 'Χρηματοδότηση εξοπλισμού', 'Δάνεια κεφαλαίου κίνησης'],
        rate: '7.99%',
        term: '10 Χρόνια'
      },
      calculator: {
        title: 'Υπολογιστής Δανείου',
        description: 'Υπολογίστε τις μηνιαίες σας πληρωμές και δείτε πόσα μπορείτε να αντέξετε οικονομικά.',
        button: 'Χρήση Υπολογιστή'
      },
      preApproval: {
        title: 'Γρήγορη Προέγκριση',
        description: 'Λάβετε προέγκριση σε λεπτά και ψωνίστε με αυτοπεποίθηση.',
        button: 'Λήψη Προέγκρισης'
      },
      startingRate: 'Αρχικό Επιτόκιο:',
      termLabel: 'Διάρκεια:',
      applyNow: 'Αίτηση Τώρα'
    },
    creditCards: {
      title: 'Πιστωτικές Κάρτες',
      subtitle: 'Βρείτε την τέλεια πιστωτική κάρτα για τον τρόπο ζωής σας και μεγιστοποιήστε τις ανταμοιβές σας.',
      rewardsPlus: {
        title: 'Κάρτα Rewards Plus',
        description: 'Κερδίστε απεριόριστες επιστροφές μετρητών σε κάθε αγορά χωρίς όρια ή ημερομηνίες λήξης.',
        features: ['3% επιστροφή σε εστιατόρια', '2% επιστροφή σε βενζίνη', '1% επιστροφή σε όλες τις άλλες αγορές', 'Μπόνους εγγραφής $200']
      },
      travelElite: {
        title: 'Κάρτα Travel Elite',
        description: 'Ξεκλειδώστε premium ταξιδιωτικές παροχές και κερδίστε μίλια για κάθε δολάριο που ξοδεύετε.',
        features: ['3X μίλια σε ταξίδια και εστιατόρια', '50,000 μίλια μπόνους', 'Πρόσβαση σε αίθουσες αεροδρομίου', 'Χωρίς χρεώσεις συναλλαγών εξωτερικού']
      },
      everydayCash: {
        title: 'Κάρτα Everyday Cash',
        description: 'Απλές επιστροφές μετρητών σε καθημερινές δαπάνες χωρίς περίπλοκες κατηγορίες.',
        features: ['1.5% επιστροφή σε όλες τις αγορές', 'Χωρίς ετήσια χρέωση', 'Μπόνους εγγραφής $150', 'Δωρεάν παρακολούθηση πιστωτικής βαθμολογίας']
      },
      balanceTransfer: {
        title: 'Κάρτα Μεταφοράς Υπολοίπου',
        description: 'Αποπληρώστε χρέη πιο γρήγορα με προωθητικό 0% APR σε μεταφορές υπολοίπου.',
        features: ['0% APR για 18 μήνες', 'Χωρίς χρέωση μεταφοράς υπολοίπου', '1% επιστροφή σε αγορές', 'Εργαλεία χρηματοοικονομικού σχεδιασμού']
      },
      secured: {
        title: 'Κάρτα Οικοδόμησης Πίστωσης',
        description: 'Οικοδομήστε ή ανασυγκροτήστε την πίστωσή σας με κάρτα εξασφαλισμένη από την κατάθεσή σας.',
        features: ['Πιστωτική γραμμή $200-$5,000', 'Αναβάθμιση σε μη εξασφαλισμένη κάρτα', 'Αναφέρεται σε όλα τα πιστωτικά γραφεία', 'Χωρίς ετήσια χρέωση']
      },
      premium: {
        title: 'Κάρτα Premium Rewards',
        description: 'Παροχές ελίτ και πολυτελή προνόμια για τους πιο πολύτιμους πελάτες μας.',
        features: ['5X πόντοι σε επιλεγμένες κατηγορίες', '100,000 πόντοι μπόνους', 'Υπηρεσία θυρωρού 24/7', 'Ασφάλιση ταξιδιού και αγοράς']
      },
      apr: 'APR:',
      annualFee: 'Ετήσια Χρέωση:',
      applyNow: 'Αίτηση Τώρα',
      cta: {
        title: 'Δεν Είστε Σίγουροι Ποια Κάρτα Είναι η Κατάλληλη;',
        description: 'Κάντε το γρήγορο μας κουίζ για να βρείτε την τέλεια πιστωτική κάρτα με βάση τις συνήθειες δαπανών και τους οικονομικούς σας στόχους.',
        button: 'Βρείτε την Κάρτα σας'
      }
    },
    investments: {
      title: 'Επενδυτικές Συμβουλές',
      subtitle: 'Οικοδομήστε πλούτο για το μέλλον σας με ολοκληρωμένες επενδυτικές λύσεις προσαρμοσμένες στους χρηματοοικονομικούς σας στόχους.',
      hero: {
        title: 'Επενδύσεις στην Aareal Bank AG',
        subtitle: 'Ξεκινήστε να χτίζετε το κεφάλαιό σας'
      },
      riskWarning: 'Η επένδυση περιλαμβάνει κινδύνους. Θα μπορούσατε να χάσετε (μέρος από) τα χρήματα που επενδύσατε.',
      bonus: {
        title: 'Μπόνους έως €100 όταν επενδύετε',
        description: 'Σκέφτεστε να επενδύσετε; Ξεκινήστε μαζί μας και λάβετε μπόνους. Ανοίξτε τον πρώτο σας επενδυτικό λογαριασμό πριν τις 31 Μαρτίου 2026 και κάντε 4 αυτόματες επενδύσεις. Εάν πληροίτε τους όρους και τις προϋποθέσεις της προσφοράς, θα κερδίσετε μπόνους €50, €75 ή €100. Σημειώστε: θα μπορούσατε να χάσετε όλη ή μέρος της αρχικής σας επένδυσης.'
      },
      winterBonus: {
        title: 'Χειμερινό Μπόνους',
        description: 'Ξεκινήστε με τη Διαχείριση Χαρτοφυλακίου ή κάντε επιπλέον κατάθεση πριν τις 31 Μαρτίου 2026 και κερδίστε μπόνους.',
        newClients: 'Για νέους πελάτες: λάβετε έως €1.250 μπόνους εάν ξεκινήσετε τη Διαχείριση Χαρτοφυλακίου. Διαβάστε τους όρους και τις προϋποθέσεις.',
        existingClients: 'Για υπάρχοντες πελάτες Διαχείρισης Χαρτοφυλακίου: λάβετε €500 εάν καταθέσετε επιπλέον €50.000, ή €750 εάν καταθέσετε €250.000. Διαβάστε τους όρους και τις προϋποθέσεις.',
        note: 'Σημειώστε: η επένδυση περιλαμβάνει κινδύνους. Θα μπορούσατε να χάσετε όλη ή μέρος της αρχικής σας επένδυσης.'
      },
      riskInfo: {
        title: 'Η επένδυση περιλαμβάνει κινδύνους',
        description: 'Η επένδυση περιλαμβάνει κινδύνους. Θα μπορούσατε να χάσετε (μέρος από) τα χρήματα που επενδύσατε. Εάν πρόκειται να επενδύσετε, είναι σημαντικό να το γνωρίζετε αυτό. Επενδύστε με χρήματα που μπορείτε να χάσετε. Διαβάστε περισσότερα για τους κινδύνους που σχετίζονται με τις επενδύσεις.'
      },
      whyInvest: {
        title: 'Γιατί να επενδύσετε με την Aareal Bank AG;',
        tools: {
          title: 'Έξυπνα εργαλεία, πληροφορίες και καθοδήγηση',
          description: 'Θα σας καθοδηγήσουμε διαδικτυακά, θα σας βοηθήσουμε να κάνετε επιλογές μόνοι σας ή θα διαχειριστούμε τις επενδύσεις σας εκ μέρους σας.'
        },
        beginnings: {
          title: 'Είμαστε εδώ για κάθε νέα αρχή',
          description: 'Είστε έμπειρος επενδυτής ή είναι η πρώτη σας φορά; Έχουμε προϊόντα τόσο για έμπειρους όσο και για αρχάριους επενδυτές.'
        },
        investors: {
          title: 'Πάνω από 225.000 άνθρωποι επενδύουν ήδη μαζί μας',
          description: 'Κάθε μέρα καλωσορίζουμε νέους επενδυτές που θέλουν να ξεκινήσουν να χτίζουν το κεφάλαιό τους.'
        }
      },
      performance: {
        title: 'Απόδοση Χαρτοφυλακίου',
        disclaimer: 'Η προηγούμενη απόδοση δεν εγγυάται μελλοντικά αποτελέσματα. Οι αποδόσεις που εμφανίζονται είναι υποθετικές.',
        portfolioType: 'Τύπος Χαρτοφυλακίου',
        oneYear: 'Απόδοση 1 Έτους',
        fiveYear: 'Απόδοση 5 Ετών',
        riskLevel: 'Επίπεδο Κινδύνου',
        conservative: 'Συντηρητικό Χαρτοφυλάκιο',
        moderate: 'Μέτριο Χαρτοφυλάκιο',
        aggressive: 'Επιθετικό Χαρτοφυλάκιο',
        low: 'Χαμηλός',
        medium: 'Μέτριος',
        high: 'Υψηλός'
      },
      cta: {
        title: 'Έτοιμοι να Ξεκινήσετε να Επενδύετε;',
        description: 'Προγραμματίστε διαβούλευση με έναν από τους επενδυτικούς μας συμβούλους για να συζητήσετε τους οικονομικούς σας στόχους.',
        schedule: 'Προγραμματισμός Διαβούλευσης',
        resources: 'Προβολή Πόρων'
      }
    },
    onlineBanking: {
      title: 'Σύνδεση Διαδικτυακής Τραπεζικής',
      subtitle: 'Ασφαλής Πρόσβαση στους Λογαριασμούς σας',
      email: 'Διεύθυνση Email',
      emailPlaceholder: 'to.email@paradeigma.com',
      password: 'Κωδικός Πρόσβασης',
      passwordPlaceholder: 'Εισάγετε τον κωδικό σας',
      remember: 'Διατήρηση σύνδεσης',
      forgot: 'Ξεχάσατε τον κωδικό σας;',
      signIn: 'Σύνδεση',
      noAccount: 'Δεν έχετε λογαριασμό;',
      enroll: 'Εγγραφή Τώρα',
      secure: 'Η σύνδεσή σας είναι ασφαλής και κρυπτογραφημένη',
      anytime: 'Τραπεζική Οποτεδήποτε, Οπουδήποτε',
      description: 'Διαχειριστείτε τα οικονομικά σας με την ασφαλή διαδικτυακή τραπεζική μας πλατφόρμα.',
      transfers: {
        title: 'Άμεσες Μεταφορές',
        description: 'Μεταφέρετε χρήματα μεταξύ λογαριασμών ή στείλτε τα σε φίλους και οικογένεια άμεσα.'
      },
      statements: {
        title: 'Ψηφιακά Αντίγραφα Κίνησης',
        description: 'Αποκτήστε πρόσβαση και κατεβάστε τα αντίγραφα κίνησης λογαριασμού σας οποτεδήποτε, χωρίς χαρτί και με ασφάλεια.'
      },
      security: {
        title: 'Προηγμένη Ασφάλεια',
        description: 'Ο έλεγχος ταυτότητας πολλαπλών παραγόντων και η κρυπτογράφηση διατηρούν τους λογαριασμούς σας ασφαλείς.'
      }
    },
    rates: {
      title: 'Επιτόκια',
      subtitle: 'Συγκρίνετε τα ανταγωνιστικά μας επιτόκια για λογαριασμούς ταμιευτηρίου, πιστοποιητικά καταθέσεων και δάνεια.',
      effective: 'Ισχύουσα ημερομηνία: 6 Φεβρουαρίου 2026. Υπόκεινται σε αλλαγή.',
      header: {
        title: 'Κέντρο Επιτοκίων και Χρεώσεων',
        description: 'Πλήρης διαφάνεια σε όλα τα επιτόκια και τις χρεώσεις μας. Πιστεύουμε ότι αξίζετε να γνωρίζετε ακριβώς τι πληρώνετε.',
        noHiddenFees: 'Χωρίς Κρυφές Χρεώσεις',
        fullDisclosure: 'Πλήρης Αποκάλυψη',
        downloadPDF: 'Λήψη Τιμοκαταλόγου Χρεώσεων (PDF)',
        effectiveDate: 'Ισχύει από'
      },
      tabs: {
        interestRates: 'Επιτόκια',
        accountFees: 'Χρεώσεις Λογαριασμού',
        serviceFees: 'Χρεώσεις Υπηρεσίας',
        cardFees: 'Χρεώσεις Κάρτας',
        loanFees: 'Χρεώσεις Δανείου',
        feeCalculator: 'Υπολογιστής Χρεώσεων'
      },
      savings: {
        title: 'Επιτόκια Ταμιευτηρίου και CD',
        product: 'Προϊόν',
        apy: 'APY',
        minBalance: 'Ελάχιστο Υπόλοιπο',
        trend: 'Τάση',
        savingsAccount: 'Λογαριασμός Ταμιευτηρίου',
        moneyMarket: 'Λογαριασμός Χρηματαγοράς',
        cd6: 'CD 6 Μηνών',
        cd1: 'CD 1 Έτους',
        cd5: 'CD 5 Ετών',
        openAccount: 'Άνοιγμα Λογαριασμού Ταμιευτηρίου'
      },
      loan: {
        title: 'Επιτόκια Δανείων',
        product: 'Προϊόν',
        apr: 'APR',
        details: 'Λεπτομέρειες',
        trend: 'Τάση',
        asLowAs: 'Από',
        mortgage30: 'Στεγαστικό Δάνειο (30ετές σταθερό)',
        mortgage15: 'Στεγαστικό Δάνειο (15ετές σταθερό)',
        homeEquity: 'Δάνειο Επί της Αξίας της Κατοικίας',
        autoNew: 'Δάνειο Αυτοκινήτου (Νέο)',
        autoUsed: 'Δάνειο Αυτοκινήτου (Μεταχειρισμένο)',
        personal: 'Προσωπικό Δάνειο',
        apply: 'Αίτηση Δανείου'
      },
      cd: {
        title: 'Επιτόκια Πιστοποιητικών Καταθέσεων (CD)',
        term: 'Διάρκεια CD',
        minDeposit: 'Ελάχιστη Κατάθεση'
      },
      atm: {
        title: 'Χρεώσεις ΑΤΜ',
        transactionType: 'Τύπος Συναλλαγής',
        inNetwork: 'Εντός Δικτύου',
        outOfNetwork: 'Εκτός Δικτύου',
        international: 'Διεθνές'
      },
      investment: {
        title: 'Χρεώσεις Διαχείρισης Περιουσίας και Επενδύσεων',
        service: 'Υπηρεσία',
        managementFee: 'Χρέωση Διαχείρισης',
        minInvestment: 'Ελάχιστη Επένδυση',
        description: 'Περιγραφή'
      },
      labels: {
        free: 'ΔΩΡΕΑΝ',
        annually: 'ετησίως',
        perTrade: 'ανά συναλλαγή',
        perHour: 'ανά ώρα',
        varies: 'Ποικίλλει',
        none: 'Καμία',
        page: 'Σελίδα',
        of: 'από'
      },
      commitment: {
        title: 'Η Δέσμευσή μας για Διαφάνεια',
        noHidden: {
          title: 'Χωρίς Κρυφές Χρεώσεις',
          description: 'Κάθε χρέωση αποκαλύπτεται σαφώς εκ των προτέρων. Δεν σας εκπλήσσουμε ποτέ με απροσδόκητες χρεώσεις.'
        },
        waivers: {
          title: 'Διαθέσιμες Απαλλαγές Χρεώσεων',
          description: 'Πολλές χρεώσεις μπορούν να αφαιρεθούν πληρώντας απλές απαιτήσεις όπως η διατήρηση ελάχιστων υπολοίπων.'
        },
        current: {
          title: 'Πάντα Ενημερωμένο',
          description: 'Αυτός ο κατάλογος χρεώσεων ενημερώνεται σε πραγματικό χρόνο. Βλέπετε πάντα τα τρέχοντα επιτόκια και τις χρεώσεις μας.'
        }
      },
      feeComparison: {
        accountComparison: 'Σύγκριση Λογαριασμών',
        clearSelection: 'Εκκαθάριση Επιλογής',
        selectUpTo: 'Επιλέξτε έως 3 λογαριασμούς για σύγκριση.',
        selected: 'επιλεγμένο',
        feature: 'Χαρακτηριστικό',
        monthlyFee: 'Μηνιαία Χρέωση',
        feeWaiver: 'Απαλλαγή Χρέωσης',
        minBalance: 'ελάχιστο υπόλοιπο',
        minOpeningDeposit: 'Ελάχιστη Κατάθεση Ανοίγματος',
        interestRate: 'Επιτόκιο (APY)',
        overdraftFee: 'Χρέωση Υπερανάληψης',
        nsfFee: 'Χρέωση Ανεπαρκών Κεφαλαίων',
        paperStatementFee: 'Χρέωση Έντυπου Αντιγράφου',
        perMonth: '/μήνα',
        excessWithdrawalFee: 'Χρέωση Υπερβολικής Ανάληψης',
        na: 'Μ/Δ'
      },
      serviceFees: {
        service: 'Υπηρεσία',
        fee: 'Χρέωση',
        description: 'Περιγραφή',
        feeWaiver: 'Απαλλαγή Χρέωσης',
        noWaiverAvailable: 'Δεν υπάρχει διαθέσιμη απαλλαγή'
      },
      cardFees: {
        creditCardFees: 'Χρεώσεις Πιστωτικής Κάρτας',
        debitCardFees: 'Χρεώσεις Χρεωστικής Κάρτας',
        aprPurchases: 'APR - Αγορές',
        aprBalanceTransfers: 'APR - Μεταφορές Υπολοίπου',
        aprCashAdvances: 'APR - Προκαταβολές Μετρητών',
        annualFee: 'Ετήσια Χρέωση',
        foreignTransactionFee: 'Χρέωση Συναλλαγής Εξωτερικού',
        balanceTransferFee: 'Χρέωση Μεταφοράς Υπολοίπου',
        cashAdvanceFee: 'Χρέωση Προκαταβολής Μετρητών',
        latePaymentFee: 'Χρέωση Καθυστερημένης Πληρωμής',
        overLimitFee: 'Χρέωση Υπέρβασης Ορίου',
        replacementCard: 'Κάρτα Αντικατάστασης',
        variableAprDisclaimer: 'Μεταβλητό APR βάσει πιστοληπτικής ικανότητας. Τα επιτόκια που εμφανίζονται είναι αντιπροσωπευτικά παραδείγματα. Το πραγματικό σας επιτόκιο μπορεί να είναι υψηλότερο ή χαμηλότερο βάσει του πιστωτικού σας προφίλ.'
      },
      loanFees: {
        mortgageFees: 'Χρεώσεις Στεγαστικού Δανείου',
        homeEquityFees: 'Χρεώσεις Δανείου Επί της Αξίας Κατοικίας',
        autoFees: 'Χρεώσεις Δανείου Αυτοκινήτου',
        personalFees: 'Χρεώσεις Προσωπικού Δανείου',
        interestRate: 'Επιτόκιο',
        originationFee: 'Χρέωση Έκδοσης',
        ofLoan: 'του δανείου',
        applicationFee: 'Χρέωση Αίτησης',
        appraisalFee: 'Χρέωση Εκτίμησης',
        creditReportFee: 'Χρέωση Πιστωτικής Έκθεσης',
        estimatedClosingCosts: 'Εκτιμώμενα Κόστη Ολοκλήρωσης',
        latePaymentFee: 'Χρέωση Καθυστερημένης Πληρωμής',
        prepaymentPenalty: 'Ποινή Πρόωρης Εξόφλησης',
        closingCostsNote: 'Τα πραγματικά κόστη ολοκλήρωσης μπορεί να διαφέρουν ανάλογα με την τοποθεσία του ακινήτου, το ποσό του δανείου και άλλους παράγοντες. Αυτή είναι μια εκτίμηση για σκοπούς σχεδιασμού.',
        note: 'Σημείωση'
      },
      calculator: {
        title: 'Υπολογιστής Χρεώσεων',
        description: 'Εκτιμήστε τις μηνιαίες και ετήσιες τραπεζικές χρεώσεις σας βάσει των προτύπων χρήσης σας.',
        accountType: 'Τύπος Λογαριασμού',
        checkingAccount: 'Λογαριασμός Όψεως',
        savingsAccount: 'Λογαριασμός Ταμιευτηρίου',
        avgMonthlyBalance: 'Μέσο Μηνιαίο Υπόλοιπο',
        monthlyTransactions: 'Μηνιαίες Συναλλαγές',
        overdraftsPerMonth: 'Υπεραναλήψεις ανά Μήνα',
        outOfNetworkATM: 'Αναλήψεις ΑΤΜ Εκτός Δικτύου',
        firstFree: 'Οι πρώτες 4 είναι δωρεάν',
        wireTransfersPerMonth: 'Τραπεζικές Μεταφορές ανά Μήνα',
        paperStatements: 'Λήψη έντυπων αντιγράφων (5$/μήνα)',
        estimatedMonthlyFees: 'Εκτιμώμενες Μηνιαίες Χρεώσεις',
        annualProjection: 'Ετήσια Πρόβλεψη',
        feeBreakdown: 'Ανάλυση Χρεώσεων',
        monthlyMaintenanceFee: 'Μηνιαία χρέωση συντήρησης',
        overdraftFees: 'Χρεώσεις υπερανάληψης',
        outOfNetworkATMFees: 'Χρεώσεις ΑΤΜ εκτός δικτύου',
        paperStatementFee: 'Χρέωση έντυπου αντιγράφου',
        wireTransferFees: 'Χρεώσεις τραπεζικής μεταφοράς',
        noFees: 'Χωρίς χρεώσεις βάσει της χρήσης σας!',
        tip: 'Συμβουλή',
        tipMessage: 'Διατηρήστε υπόλοιπο $2.500 ή περισσότερο για να απαλλαγείτε από τις μηνιαίες χρεώσεις στους λογαριασμούς όψεως Premium.'
      },
      disclaimer: {
        title: 'Σημαντικές Πληροφορίες',
        apy: 'Η Ετήσια Ποσοστιαία Απόδοση (APY) και το Ετήσιο Ποσοστό (APR) είναι ακριβή κατά την αναφερόμενη ημερομηνία και μπορεί να αλλάξουν χωρίς προειδοποίηση.',
        fees: 'Οι χρεώσεις μπορεί να μειώσουν τα κέρδη σε λογαριασμούς ταμιευτηρίου.',
        penalty: 'Μπορεί να ισχύσει ποινή πρόωρης ανάληψης για πιστοποιητικά καταθέσεων.',
        credit: 'Τα επιτόκια δανείων που εμφανίζονται είναι για δανειολήπτες με άριστη πίστωση. Το επιτόκιό σας μπορεί να διαφέρει ανάλογα με το πιστωτικό ιστορικό και άλλους παράγοντες.'
      },
      dbTranslations: {
        atmFeeTypes: {
          'ATM Withdrawal': 'Ανάληψη από ΑΤΜ',
          'ATM Deposit': 'Κατάθεση σε ΑΤΜ',
          'ATM Transfer': 'Μεταφορά μέσω ΑΤΜ',
          'ATM Balance Inquiry': 'Ερώτημα Υπολοίπου ΑΤΜ'
        },
        serviceCategories: {
          'statements': 'Αντίγραφα Κίνησης',
          'deposits': 'Καταθέσεις',
          'transfers': 'Μεταφορές',
          'cards': 'Κάρτες',
          'checks': 'Επιταγές',
          'closures': 'Κλεισίματα Λογαριασμών',
          'collections': 'Εισπράξεις',
          'legal': 'Νομικές Υπηρεσίες'
        },
        loanTypes: {
          'mortgage': 'Στεγαστικό',
          'auto': 'Αυτοκινήτου',
          'home_equity': 'Αξία Κατοικίας',
          'personal': 'Προσωπικό'
        }
      }
    },
    security: {
      title: 'Κέντρο Ασφάλειας',
      subtitle: 'Η ασφάλειά σας είναι η κορυφαία μας προτεραιότητα. Μάθετε πώς προστατεύουμε τους λογαριασμούς σας και τι μπορείτε να κάνετε για να παραμείνετε ασφαλείς.',
      howWeProtect: 'Πώς σας Προστατεύουμε',
      encryption: {
        title: 'Κρυπτογράφηση',
        description: 'Η κρυπτογράφηση SSL 256-bit στρατιωτικού επιπέδου προστατεύει όλες τις διαδικτυακές τραπεζικές σας συνεδρίες και μεταδόσεις δεδομένων.'
      },
      fraudMonitoring: {
        title: 'Παρακολούθηση Απάτης',
        description: 'Παρακολούθηση συναλλαγών 24/7 με ανίχνευση απάτης με τεχνητή νοημοσύνη σας ειδοποιεί για ύποπτες δραστηριότητες.'
      },
      alerts: {
        title: 'Ειδοποιήσεις Λογαριασμού',
        description: 'Προσαρμόστε ειδοποιήσεις για μεγάλες συναλλαγές, χαμηλά υπόλοιπα και ασυνήθιστη δραστηριότητα λογαριασμού.'
      },
      mfa: {
        title: 'Έλεγχος Ταυτότητας Πολλαπλών Παραγόντων',
        description: 'Προσθέστε ένα επιπλέον επίπεδο ασφαλείας με βιομετρική σύνδεση και κωδικούς πρόσβασης μίας χρήσης.'
      },
      bestPractices: {
        title: 'Βέλτιστες Πρακτικές Ασφαλείας',
        password: {
          title: 'Χρησιμοποιήστε Ισχυρούς Κωδικούς',
          description: 'Δημιουργήστε μοναδικούς κωδικούς με τουλάχιστον 12 χαρακτήρες που συνδυάζουν κεφαλαία και πεζά γράμματα, αριθμούς και σύμβολα.'
        },
        twoFactor: {
          title: 'Ενεργοποιήστε τον Έλεγχο Ταυτότητας Δύο Παραγόντων',
          description: 'Χρησιμοποιείτε πάντα 2FA όταν είναι διαθέσιμο για να προσθέσετε ένα επιπλέον επίπεδο προστασίας στους λογαριασμούς σας.'
        },
        verify: {
          title: 'Επαληθεύστε Πριν Κάνετε Κλικ',
          description: 'Μην κάνετε ποτέ κλικ σε συνδέσμους σε ύποπτα email. Αντίθετα, πληκτρολογήστε τη διεύθυνση του ιστότοπού μας απευθείας στο πρόγραμμα περιήγησής σας.'
        },
        monitor: {
          title: 'Παρακολουθήστε τους Λογαριασμούς σας',
          description: 'Ελέγχετε τακτικά τη δραστηριότητα του λογαριασμού σας και αναφέρετε άμεσα τυχόν μη εξουσιοδοτημένες συναλλαγές.'
        },
        update: {
          title: 'Διατηρήστε το Λογισμικό Ενημερωμένο',
          description: 'Χρησιμοποιείτε πάντα την τελευταία έκδοση του προγράμματος περιήγησης και των mobile εφαρμογών σας για καλύτερη ασφάλεια.'
        },
        secure: {
          title: 'Χρησιμοποιήστε Ασφαλείς Συνδέσεις',
          description: 'Αποφύγετε το δημόσιο Wi-Fi όταν έχετε πρόσβαση στους λογαριασμούς σας. Χρησιμοποιήστε VPN εάν χρειάζεται να συνδεθείτε εξ αποστάσεως.'
        }
      },
      fraud: {
        title: 'Αναφέρετε Απάτη Άμεσα',
        description: 'Εάν υποψιάζεστε δόλια δραστηριότητα στον λογαριασμό σας ή έχετε πέσει θύμα απάτης, επικοινωνήστε μαζί μας αμέσως.',
        report: 'Αναφορά Απάτης: 1-800-ΑΠΑΤΗ',
        tips: 'Συμβουλές Πρόληψης Απάτης'
      },
      fdic: {
        title: 'Ασφαλισμένο από FDIC',
        description: 'Οι καταθέσεις σας είναι ασφαλισμένες από τον Ομοσπονδιακό Οργανισμό Ασφάλισης Καταθέσεων (FDIC) έως $250,000 ανά καταθέτη, ανά ασφαλισμένη τράπεζα.',
        disclaimer: 'Μέλος FDIC. Δανειστής Ίσων Ευκαιριών Στέγασης.'
      }
    },
    atmLocator: {
      title: 'Εντοπισμός Υποκαταστημάτων και ΑΤΜ',
      subtitle: 'Βρείτε το πλησιέστερο υποκατάστημα ή ΑΤΜ της Aareal Bank AG για τις τραπεζικές σας ανάγκες.',
      search: 'Εισάγετε διεύθυνση, πόλη ή ταχυδρομικό κώδικα',
      find: 'Εύρεση Τοποθεσιών',
      servicesAvailable: 'Διαθέσιμες Υπηρεσίες:',
      getDirections: 'Λήψη Οδηγιών',
      details: 'Λεπτομέρειες',
      mainBranch: 'Κεντρικό Υποκατάστημα',
      northBranch: 'Βόρειο Υποκατάστημα',
      westBranch: 'Δυτικό Υποκατάστημα',
      eastATM: 'Ανατολικό ΑΤΜ',
      southBranch: 'Νότιο Υποκατάστημα',
      airportATM: 'ΑΤΜ Αεροδρομίου',
      downtown: 'Κέντρο',
      northDistrict: 'Βόρεια Περιοχή',
      westEnd: 'Δυτική Περιοχή',
      eastDistrict: 'Ανατολική Περιοχή',
      southDistrict: 'Νότια Περιοχή',
      airport: 'Αεροδρόμιο',
      terminal: 'Τερματικό 1, Διεθνές Αεροδρόμιο',
      hours: {
        weekdays: 'Δευτ-Παρ: 9:00-17:00, Σάβ: 9:00-14:00',
        weekdaysOnly: 'Δευτ-Παρ: 9:00-17:00',
        extended: 'Δευτ-Παρ: 9:00-18:00, Σάβ: 9:00-13:00',
        south: 'Δευτ-Παρ: 10:00-18:00, Σάβ: 10:00-14:00',
        alwaysOpen: '24/7'
      },
      services: {
        full: 'Πλήρεις Τραπεζικές Υπηρεσίες',
        atm: 'Διαθέσιμο ΑΤΜ',
        safeDeposit: 'Θυρίδες Ασφαλείας',
        driveThrough: 'Drive-Through',
        business: 'Επιχειρηματική Τραπεζική',
        atmOnly: 'Μόνο ΑΤΜ',
        access24: 'Πρόσβαση 24 Ωρών',
        notary: 'Συμβολαιογραφικές Υπηρεσίες',
        currency: 'Ανταλλαγή Συναλλάγματος Κοντά'
      },
      cta: {
        title: 'Δεν Βρήκατε Τοποθεσία;',
        description: 'Η ομάδα εξυπηρέτησης πελατών μας θα χαρεί να σας βοηθήσει να βρείτε το πλησιέστερο υποκατάστημα ή ΑΤΜ.',
        button: 'Επικοινωνήστε μαζί μας'
      }
    },
    careers: {
      title: 'Καριέρες στην Aareal Bank AG',
      subtitle: 'Ενταχθείτε στην ομάδα αφοσιωμένων επαγγελματιών μας και οικοδομήστε μια ανταμοιβτική καριέρα στην τραπεζική.',
      whyWork: 'Γιατί να Εργαστείτε Μαζί μας;',
      health: {
        title: 'Υγεία και Ευεξία',
        description: 'Πλήρης ασφάλιση υγείας, οδοντιατρική και όρασης για εσάς και την οικογένειά σας.'
      },
      retirement: {
        title: 'Σχεδιασμός Συνταξιοδότησης',
        description: '401(k) με γενναιόδωρη συμμετοχή εργοδότη και πόρους χρηματοοικονομικού σχεδιασμού.'
      },
      development: {
        title: 'Επαγγελματική Ανάπτυξη',
        description: 'Επιστροφή διδάκτρων, προγράμματα κατάρτισης και ευκαιρίες επαγγελματικής εξέλιξης.'
      },
      balance: {
        title: 'Ισορροπία Εργασίας-Ζωής',
        description: 'Ευέλικτα προγράμματα, επιλογές απομακρυσμένης εργασίας και γενναιόδωρη άδεια με αποδοχές.'
      },
      openings: {
        title: 'Διαθέσιμες Θέσεις',
        positions: 'Θέσεις',
        personalBanker: 'Προσωπικός Τραπεζίτης',
        businessSpecialist: 'Επιχειρηματικός Ειδικός',
        advisor: 'Χρηματοοικονομικός Σύμβουλος',
        loanOfficer: 'Υπεύθυνος Δανείων',
        customerService: 'Εκπρόσωπος Εξυπηρέτησης Πελατών',
        itAnalyst: 'Αναλυτής Συστημάτων IT',
        marketingCoord: 'Συντονιστής Marketing',
        branchManager: 'Διευθυντής Υποκαταστήματος',
        retailBanking: 'Λιανική Τραπεζική',
        businessBanking: 'Επιχειρηματική Τραπεζική',
        investmentServices: 'Επενδυτικές Υπηρεσίες',
        lending: 'Δανεισμός',
        customerSupport: 'Υποστήριξη Πελατών',
        technology: 'Τεχνολογία',
        marketingDept: 'Marketing',
        management: 'Διοίκηση',
        multiple: 'Πολλαπλές Τοποθεσίες',
        mainBranch: 'Κεντρικό Υποκατάστημα',
        downtown: 'Κέντρο',
        northBranch: 'Βόρειο Υποκατάστημα',
        callCenter: 'Κέντρο Τηλεφωνικής Εξυπηρέτησης',
        headquarters: 'Έδρα',
        westBranch: 'Δυτικό Υποκατάστημα',
        fullTime: 'Πλήρης Απασχόληση',
        apply: 'Αίτηση Τώρα'
      },
      cta: {
        title: 'Δεν Βρήκατε την Κατάλληλη Θέση;',
        description: 'Υποβάλετε το βιογραφικό σας και θα σας εξετάσουμε για μελλοντικές ευκαιρίες που ταιριάζουν με τις δεξιότητες και τα ενδιαφέροντά σας.',
        button: 'Υποβολή Γενικής Αίτησης'
      },
      values: {
        title: 'Οι Βασικές μας Αξίες',
        missionDriven: {
          title: 'Καθοδηγούμενοι από την Αποστολή',
          description: 'Δεσμευόμαστε να ενισχύσουμε την οικονομική επιτυχία ατόμων και επιχειρήσεων σε όλο τον κόσμο.'
        },
        innovation: {
          title: 'Καινοτομία Πρώτα',
          description: 'Υιοθετούμε νέες τεχνολογίες και προσεγγίσεις για να παρέχουμε τραπεζικές λύσεις αιχμής.'
        },
        growth: {
          title: 'Νοοτροπία Ανάπτυξης',
          description: 'Επενδύουμε στην επαγγελματική ανάπτυξη της ομάδας μας με συνεχείς ευκαιρίες μάθησης.'
        },
        diversity: {
          title: 'Διαφορετικότητα και Συμπερίληψη',
          description: 'Γιορτάζουμε τη διαφορετικότητα και δημιουργούμε ένα περιβάλλον όπου όλοι μπορούν να ευδοκιμήσουν.'
        }
      },
      growth: {
        title: 'Επαγγελματική Ανάπτυξη στην Aareal Bank AG',
        stats: {
          promotions: 'Εσωτερικές Προαγωγές',
          budget: 'Ετήσιος Προϋπολογισμός Κατάρτισης',
          programs: 'Προγράμματα Κατάρτισης'
        },
        pathways: {
          title: 'Διαδρομές Επαγγελματικής Ανάπτυξης',
          entry: 'Θέσεις εισαγωγικού επιπέδου με ολοκληρωμένη εκπαίδευση και προγράμματα καθοδήγησης',
          mid: 'Ρόλοι μεσαίου επιπέδου με ανάπτυξη ηγεσίας και ευκαιρίες εξειδίκευσης',
          senior: 'Ανώτερες θέσεις με executive coaching και εμπειρία στρατηγικής λήψης αποφάσεων',
          executive: 'Ευκαιρίες C-suite για αποδεδειγμένους ηγέτες που προωθούν την οργανωσιακή αριστεία'
        }
      },
      companyStats: {
        employees: 'Υπάλληλοι Παγκοσμίως',
        satisfaction: 'Ικανοποίηση Υπαλλήλων',
        retention: 'Ποσοστό Διατήρησης'
      }
    },
    whoWeServe: {
      title: 'Ποιους Εξυπηρετούμε',
      subtitle: 'Ενδυναμώνοντας χρηματοπιστωτικά ιδρύματα με καινοτόμες τραπεζικές και crypto λύσεις',
      hero: {
        title: 'Με Ποιους Συνεργαζόμαστε',
        subtitle: 'Private banking χτισμένο γύρω από τις ανάγκες σας'
      },
      intro: {
        title: 'Προσαρμοσμένες Λύσεις για Κάθε Ίδρυμα',
        description: 'Παρέχουμε ολοκληρωμένες χρηματοοικονομικές υπηρεσίες σε ένα ποικίλο φάσμα ιδρυμάτων, από παραδοσιακές τράπεζες έως πλατφόρμες crypto αιχμής, όλα υποστηριζόμενα από την υποδομή θεσμικού επιπέδου και τη κανονιστική συμμόρφωσή μας.',
        mainDescription: 'Συνεργαζόμαστε με άτομα υψηλής καθαρής περιουσίας που έχουν συγκεκριμένες χρηματοοικονομικές ανάγκες. Οι υπηρεσίες ιδιωτικής τραπεζικής μας είναι διαθέσιμες σε άτομα, οικογένειες και επιχειρηματίες με επενδύσιμα περιουσιακά στοιχεία 1 εκατομμυρίου ευρώ ή περισσότερο. Για πελάτες με περιουσιακά στοιχεία 25 εκατομμυρίων ευρώ ή περισσότερο, προσφέρουμε εξειδικευμένη διαχείριση περιουσίας που αντιμετωπίζει τις ιδιαίτερες προκλήσεις που συνοδεύουν τη σημαντική περιουσία.'
      },
      sections: {
        lifeStage: {
          title: 'Διαχείριση Περιουσίας Μέσα από τις Αλλαγές της Ζωής',
          description: 'Οι οικονομικές σας προτεραιότητες αλλάζουν καθώς εξελίσσεται η ζωή σας. Ίσως σχεδιάζετε πρόωρη συνταξιοδότηση, εξετάζετε μια δεύτερη κατοικία, ή εξισορροπείτε την επαγγελματική ανάπτυξη με την ανατροφή μιας οικογένειας. Σας βοηθάμε να περιηγηθείτε σε αυτές τις μεταβάσεις και να πάρετε αποφάσεις που υποστηρίζουν τους στόχους σας σε κάθε στάδιο.'
        },
        business: {
          title: 'Για Επιχειρηματίες και Ιδιοκτήτες Επιχειρήσεων',
          description: 'Η διοίκηση μιας επιχείρησης απαιτεί εστίαση. Είναι εύκολο να χάσετε τον έλεγχο των προσωπικών σας οικονομικών όταν χτίζετε μια εταιρεία. Παρακολουθούμε τόσο την επιχειρηματική όσο και την προσωπική σας οικονομική εικόνα, βοηθώντας σας να εντοπίσετε ευκαιρίες και να σχεδιάσετε εκ των προτέρων. Συνεργαζόμαστε επίσης με πρώην επιχειρηματίες που έχουν πουλήσει τις εταιρείες τους.'
        },
        exceptionalWealth: {
          title: 'Διαχείριση Σημαντικής Περιουσίας',
          description: 'Όταν τα περιουσιακά σας στοιχεία φτάσουν τα 25 εκατομμύρια ευρώ ή περισσότερο, η πολυπλοκότητα αυξάνεται σημαντικά. Η υπηρεσία Private Wealth Management μας χειρίζεται αυτές τις προκλήσεις με εστίαση στην ιδιωτικότητα για εσάς και την οικογένειά σας, και μια μακροπρόθεσμη προοπτική για τη διατήρηση του πλούτου μέσα από τις γενιές.'
        }
      },
      segments: {
        banks: {
          title: 'Τράπεζες',
          description: 'Επεκτείνετε τις τραπεζικές σας υπηρεσίες με ασφαλή και ρυθμιζόμενη προσφορά crypto, συμπεριλαμβανομένων Trading, Staking και Custody'
        },
        assetManagers: {
          title: 'Διαχειριστές Περιουσιακών Στοιχείων',
          description: 'Εμπλουτίστε την προσφορά σας με επενδύσεις crypto μέσω μιας ρυθμιζόμενης τράπεζας crypto.'
        },
        fintechs: {
          title: 'Fintechs',
          description: 'Ξεκλειδώστε παραδοσιακές τραπεζικές και crypto υπηρεσίες για τους πελάτες σας υποστηριζόμενες από υποδομή θεσμικού επιπέδου.'
        },
        exchanges: {
          title: 'Crypto Ανταλλακτήρια',
          description: 'Προσφέρετε εξαιρετικά ασφαλή φύλαξη για τα crypto των πελατών σας μέσω των λύσεων hot και cold storage μας.'
        },
        casps: {
          title: 'CASPs',
          description: 'Πρόσβαση σε τραπεζική, φύλαξη και trading υποδομή θεσμικού επιπέδου για παροχή συμβατών crypto υπηρεσιών στους πελάτες σας.'
        }
      },
      specialServices: {
        title: 'Εξειδικευμένες Υπηρεσίες',
        description: 'Έχουμε εμπειρία στη συνεργασία με πελάτες σε συγκεκριμένες καταστάσεις που έχουν ιδιαίτερες ανάγκες και ερωτήσεις.',
        partners: {
          title: 'Εταίροι και Ανώτερα Στελέχη',
          description: 'Ως εταίρος σε μια επαγγελματική εταιρεία ή στέλεχος σε μια εισηγμένη εταιρεία, έχετε συγκεκριμένες οικονομικές σκέψεις. Θέλετε την αριστεία στα προσωπικά σας οικονομικά όπως ακριβώς κάνετε επαγγελματικά. Κατανοούμε την κατάστασή σας και μπορούμε να σας βοηθήσουμε να χτίσετε και να διαχειριστείτε τον πλούτο σας.'
        },
        expats: {
          title: 'Διεθνείς Πελάτες',
          description: 'Το να ζείτε και να εργάζεστε στο εξωτερικό φέρνει οικονομική πολυπλοκότητα. Η ομάδα Διεθνούς Ιδιωτικής Τραπεζικής μας γνωρίζει τις προκλήσεις που αντιμετωπίζετε—φόρους, πολλαπλές δικαιοδοσίες, ζητήματα συναλλάγματος. Παρέχουμε σαφή καθοδήγηση και λύσεις που λειτουργούν πέρα από τα σύνορα.'
        },
        associations: {
          title: 'Μη Κερδοσκοπικοί Οργανισμοί και Ιδρύματα',
          description: 'Συνεργαζόμαστε με ενώσεις, ιδρύματα και θρησκευτικές οργανώσεις που διαχειρίζονται σημαντικά περιουσιακά στοιχεία. Οι διαχειριστές σχέσεών μας κατανοούν την αποστολή σας και φέρνουν χρηματοοικονομική εμπειρία και συνδέσεις για να σας βοηθήσουν να επιτύχετε τους στόχους σας.'
        },
        familyOffices: {
          title: 'Υποστήριξη Family Office',
          description: 'Εάν αντιπροσωπεύετε ένα family office, γνωρίζετε ότι ο ρόλος σας είναι να διασφαλίσετε ότι οι πελάτες σας λαμβάνουν άριστη, διακριτική υπηρεσία ιδιωτικής τραπεζικής. Το desk Family Office μας μοιράζεται αυτή τη δέσμευση και μπορεί να συνεργαστεί μαζί σας για να εξυπηρετήσει τους πελάτες σας.'
        }
      },
      cta: {
        title: 'Ενδιαφέρεστε για Συνεργασία;',
        description: 'Ας συζητήσουμε αν οι υπηρεσίες ιδιωτικής τραπεζικής μας ταιριάζουν στην κατάστασή σας.',
        consultation: 'Προγραμματισμός Κλήσης',
        learnMore: 'Μάθετε Περισσότερα'
      },
      stats: {
        partners: 'Εταιρικά Ιδρύματα',
        assets: 'Περιουσιακά Στοιχεία υπό Φύλαξη',
        support: 'Υποστήριξη και Παρακολούθηση'
      }
    },
    ourApproachPage: {
      title: 'Πώς εργαζόμαστε',
      subtitle: 'Σας βοηθάμε να διαχειριστείτε τον πλούτο σας και να προγραμματίσετε το μέλλον',
      intro: {
        paragraph1: 'Η διαχείριση πλούτου φέρνει ευκαιρίες, αλλά συνοδεύεται και από προσωπικές και επιχειρηματικές προκλήσεις. Αυτές χρειάζονται προσοχή και προσαρμοσμένες λύσεις.',
        paragraph2: 'Συνεργαζόμαστε μαζί σας για να κατανοήσουμε την οικονομική σας κατάσταση και να σας βοηθήσουμε να πάρετε τεκμηριωμένες αποφάσεις για τον πλούτο σας.'
      },
      rightPartner: {
        title: 'Ο προσωπικός σας τραπεζίτης',
        description: 'Η οικονομική σας κατάσταση απαιτεί προσωπική προσοχή. Ο ιδιωτικός σας τραπεζίτης είναι το κύριο σημείο επαφής σας για ερωτήσεις σχετικά με τα οικονομικά και τον πλούτο σας. Σας συνδέουμε με τον τραπεζίτη που έχει εμπειρία με καταστάσεις όπως η δική σας. Με χρόνια εμπειρίας στη συνεργασία με οικογένειες υψηλής καθαρής αξίας και επιχειρηματίες, ο ιδιωτικός σας τραπεζίτης μπορεί να σας βοηθήσει με θέματα διαχείρισης πλούτου και οικονομικού σχεδιασμού.'
      },
      testimonial: {
        quote: 'Ένιωσα ότι με άκουσαν και με κατάλαβαν, και αυτό ήταν πολύ σημαντικό για να κάνω ένα βήμα μπροστά',
        author: 'Hans Gitsels',
        role: 'Πελάτης | Aareal Bank AG'
      },
      atYourService: {
        title: 'Πώς σας βοηθάμε',
        privateBanker: {
          title: 'Ένα αποκλειστικό σημείο επαφής',
          description: 'Ο ιδιωτικός σας τραπεζίτης είναι περισσότερο από έναν οικονομικό σύμβουλο. Είναι κάποιος που καταλαβαίνει την κατάστασή σας και μπορεί να σας βοηθήσει με όλες τις οικονομικές σας ερωτήσεις.'
        },
        expertise: {
          title: 'Πρόσβαση σε ειδικούς',
          description: 'Συνδυάζουμε την εμπειρία με την τρέχουσα γνώση της αγοράς για να σας δώσουμε σχετικές πληροφορίες. Είτε αντιμετωπίζετε επιχειρηματική μετάβαση είτε σύνθετο οικονομικό σχεδιασμό, οι ειδικοί μας μπορούν να βοηθήσουν.'
        },
        tailored: {
          title: 'Λύσεις για την κατάστασή σας',
          description: 'Γνωρίζουμε ότι οι οικονομικές σας ανάγκες είναι συγκεκριμένες για εσάς. Γι\' αυτό προσαρμόζουμε την προσέγγισή μας στην κατάστασή σας. Συνήθως ξεκινάμε με σχεδιασμό πλούτου ώστε να μπορούμε να αντιμετωπίσουμε τις προτεραιότητές σας αμέσως.'
        }
      },
      familyBanking: {
        title: 'Ιδιωτική τραπεζική για την οικογένειά σας',
        description: 'Η οικογένειά σας μπορεί επίσης να συνεργαστεί μαζί μας. Βοηθάμε με θέματα που αντιμετωπίζουν συχνά οι οικογένειες υψηλής καθαρής αξίας. Μπορούμε να διευκολύνουμε συζητήσεις με τα ενήλικα παιδιά σας σχετικά με τον οικογενειακό πλούτο και τα σχέδιά σας για το μέλλον. Βοηθάμε επίσης νέους ενήλικες να προετοιμαστούν για τη διαχείριση σημαντικού πλούτου.'
      },
      alsoOfInterest: {
        title: 'Μπορεί επίσης να σας ενδιαφέρει',
        events: {
          title: 'Εκδηλώσεις',
          description: 'Οι εκδηλώσεις μας σας δίνουν την ευκαιρία να συναντήσετε άλλους και να μοιραστείτε εμπειρίες και γνώσεις.'
        },
        secureBanking: {
          title: 'Ασφάλεια',
          description: 'Εργαζόμαστε για να διατηρήσουμε ασφαλή την ηλεκτρονική σας τραπεζική μέσω πολλαπλών μέτρων προστασίας και πρόληψης απάτης.'
        },
        betterWorld: {
          title: 'Συμβολή σε έναν καλύτερο κόσμο',
          description: 'Μαζί μπορούμε να κάνουμε θετική διαφορά, τώρα και για τις μελλοντικές γενιές.'
        }
      }
    },
    financialEducation: {
      title: 'Κέντρο Οικονομικής Εκπαίδευσης',
      subtitle: 'Ενδυναμωθείτε με γνώση. Μάθετε για προϋπολογισμό, αποταμίευση, επενδύσεις και διαχείριση πιστώσεων μέσω της ολοκληρωμένης βιβλιοθήκης μας με άρθρα, βίντεο και διαδραστικά εργαλεία.',
      search: 'Αναζήτηση άρθρων, θεμάτων ή λέξεων-κλειδιών...',
      tabs: {
        articles: 'Εκπαιδευτικά Άρθρα',
        news: 'Οικονομικά Νέα'
      },
      categories: {
        all: 'Όλα τα Θέματα',
        budgeting: 'Προϋπολογισμός',
        saving: 'Αποταμίευση',
        investing: 'Επενδύσεις',
        credit: 'Πίστωση'
      },
      newsCategories: {
        all: 'Όλα τα Νέα',
        banking: 'Τραπεζικά',
        economy: 'Οικονομία',
        crypto: 'Crypto'
      },
      articles: {
        title: 'Όλα τα Άρθρα',
        allArticles: 'Όλα τα Άρθρα',
        categoryArticles: {
          budgeting: 'Άρθρα Προϋπολογισμού',
          saving: 'Άρθρα Αποταμίευσης',
          investing: 'Άρθρα Επενδύσεων',
          credit: 'Άρθρα Πίστωσης'
        },
        featured: 'ΠΡΟΤΕΙΝΟΜΕΝΟ',
        readArticle: 'Διαβάστε το Άρθρο',
        closeArticle: 'Κλείσιμο Άρθρου',
        minRead: 'λεπτά ανάγνωσης',
        noArticles: 'Δεν βρέθηκαν άρθρα που να ταιριάζουν με τα κριτήριά σας.',
        difficulty: {
          beginner: 'ΑΡΧΑΡΙΟΣ',
          intermediate: 'ΜΕΣΑΙΟΣ',
          advanced: 'ΠΡΟΧΩΡΗΜΕΝΟΣ'
        }
      },
      news: {
        title: 'Τελευταία Οικονομικά Νέα',
        latestNews: 'Τελευταία Οικονομικά Νέα',
        categoryNews: {
          banking: 'Τραπεζικά Νέα',
          economy: 'Οικονομικά Νέα',
          crypto: 'Crypto Νέα'
        },
        readFull: 'Διαβάστε Ολόκληρο το Άρθρο',
        noNews: 'Δεν βρέθηκαν ειδήσεις.',
        justNow: 'Μόλις τώρα',
        hoursAgo: 'ώ πριν'
      },
      calculators: {
        backToEducation: 'Επιστροφή στο Εκπαιδευτικό Κέντρο',
        budgetCalc: {
          title: 'Αριθμομηχανή Μηνιαίου Προϋπολογισμού',
          monthlyIncome: 'Μηνιαίο Εισόδημα',
          housing: 'Στέγαση',
          transportation: 'Μεταφορές',
          food: 'Τρόφιμα και Παντοπωλείο',
          utilities: 'Κοινόχρηστα',
          insurance: 'Ασφάλιση',
          entertainment: 'Ψυχαγωγία',
          savings: 'Αποταμίευση',
          other: 'Άλλο',
          summary: 'Περίληψη Προϋπολογισμού',
          totalIncome: 'Συνολικό Εισόδημα',
          totalExpenses: 'Συνολικά Έξοδα',
          remaining: 'Υπόλοιπο',
          ruleTitle: 'Ανάλυση Κανόνα 50/30/20',
          needs: 'Ανάγκες',
          wants: 'Επιθυμίες',
          target: 'Στόχος',
          savingsRate: 'Ποσοστό Αποταμίευσης',
          greatJob: 'Εξαιρετική δουλειά!',
          goodStart: 'Καλή αρχή!',
          tryIncrease: 'Προσπαθήστε να αυξήσετε την αποταμίευσή σας'
        },
        savingsCalc: {
          title: 'Αριθμομηχανή Στόχου Αποταμίευσης',
          savingsGoal: 'Στόχος Αποταμίευσης',
          currentSavings: 'Τρέχουσα Αποταμίευση',
          monthlyContribution: 'Μηνιαία Συνεισφορά',
          interestRate: 'Επιτόκιο',
          whatSavingFor: 'Για τι αποταμιεύετε;',
          howMuchNow: 'Πόσα έχετε τώρα;',
          howMuchMonthly: 'Πόσα μπορείτε να αποταμιεύσετε κάθε μήνα;',
          expectedReturn: 'Αναμενόμενη ετήσια απόδοση στην αποταμίευση',
          timeline: 'Χρονοδιάγραμμα προς το Στόχο',
          timeToReach: 'Χρόνος για να φτάσετε το στόχο',
          targetDate: 'Ημερομηνία Στόχου',
          breakdown: 'Ανάλυση Προόδου',
          goalAmount: 'Ποσό Στόχου',
          startingBalance: 'Αρχικό Υπόλοιπο',
          stillNeeded: 'Ακόμα Απαιτείται',
          totalContributions: 'Συνολικές Συνεισφορές',
          interestEarned: 'Κερδισμένος Τόκος',
          progressBar: 'Γραμμή Προόδου',
          quickTips: 'Γρήγορες Συμβουλές',
          tip1: 'Αυτοματοποιήστε τις μεταφορές αποταμίευσής σας',
          tip2: 'Ξεκινήστε μικρά και αυξήστε με τον καιρό',
          tip3: 'Χρησιμοποιήστε λογαριασμούς αποταμίευσης υψηλής απόδοσης',
          tip4: 'Ελέγχετε και προσαρμόζετε μηνιαία'
        },
        compoundCalc: {
          title: 'Αριθμομηχανή Σύνθετου Τόκου',
          initialInvestment: 'Αρχική Επένδυση',
          monthlyContribution: 'Μηνιαία Συνεισφορά',
          yearsToGrow: 'Χρόνια Ανάπτυξης',
          annualRate: 'Ετήσιο Επιτόκιο',
          compoundFrequency: 'Συχνότητα Ανατοκισμού',
          monthly: 'Μηνιαία',
          annually: 'Ετησίως',
          futureValue: 'Μελλοντική Αξία',
          breakdown: 'Ανάλυση',
          totalContributions: 'Συνολικές Συνεισφορές',
          interestEarned: 'Κερδισμένος Τόκος',
          totalValue: 'Συνολική Αξία',
          growthOverTime: 'Ανάπτυξη με τον Χρόνο',
          year: 'Έτος',
          balance: 'Υπόλοιπο',
          interest: 'Τόκος',
          afterYears: 'Μετά από {years} χρόνια',
          rule72: 'Κανόνας του 72',
          rule72Text: 'Με ετήσια απόδοση {rate}%, τα χρήματά σας θα διπλασιαστούν σε περίπου {years} χρόνια.'
        },
        debtCalc: {
          title: 'Αριθμομηχανή Αποπληρωμής Χρέους',
          totalDebt: 'Συνολικό Υπόλοιπο Χρέους',
          interestRate: 'Επιτόκιο (APR)',
          monthlyPayment: 'Μηνιαία Πληρωμή',
          minimumPayment: 'Ελάχιστη πληρωμή',
          paymentTooLow: 'Πληρωμή Πολύ Χαμηλή!',
          paymentWarning: 'Η μηνιαία πληρωμή σας πρέπει να είναι υψηλότερη από το ελάχιστο για να αποπληρώσετε αυτό το χρέος. Με αυτόν τον ρυθμό, δεν θα το αποπληρώσετε ποτέ!',
          timeline: 'Χρονοδιάγραμμα Αποπληρωμής',
          timeToDebtFree: 'Χρόνος για Απαλλαγή από Χρέη',
          debtFreeDate: 'Ημερομηνία Απαλλαγής από Χρέη',
          breakdown: 'Ανάλυση Κόστους',
          originalBalance: 'Αρχικό Υπόλοιπο',
          totalInterest: 'Συνολικός Πληρωμένος Τόκος',
          totalPaid: 'Συνολικό Πληρωμένο Ποσό',
          doublePayment: 'Διπλασιάστε την Πληρωμή σας;',
          doubleText: 'Δείτε τι συμβαίνει αν πληρώνετε {amount} $ το μήνα',
          timeSaved: 'Εξοικονομημένος Χρόνος',
          interestSaved: 'Εξοικονομημένος Τόκος',
          newPayoffTime: 'Νέος Χρόνος Αποπληρωμής',
          strategies: 'Στρατηγικές Αποπληρωμής',
          strategy1: 'Πληρώνετε περισσότερο από το ελάχιστο',
          strategy2: 'Κάντε διεβδομαδιαίες πληρωμές',
          strategy3: 'Χρησιμοποιήστε απροσδόκητα έσοδα (μπόνους, φορολογικές επιστροφές)',
          strategy4: 'Μειώστε προσωρινά τις δαπάνες',
          strategy5: 'Εξετάστε τη μεταφορά υπολοίπου (0% APR)',
          progressViz: 'Απεικόνιση Προόδου',
          principal: 'Κεφάλαιο',
          interest: 'Τόκος'
        },
        retirementCalc: {
          title: 'Αριθμομηχανή Συνταξιοδότησης',
          currentAge: 'Τρέχουσα Ηλικία',
          retirementAge: 'Ηλικία Συνταξιοδότησης',
          currentSavings: 'Τρέχουσα Αποταμίευση Συνταξιοδότησης',
          monthlyContribution: 'Μηνιαία Συνεισφορά',
          expectedReturn: 'Αναμενόμενη Ετήσια Απόδοση',
          desiredIncome: 'Επιθυμητό Μηνιαίο Εισόδημα Συνταξιοδότησης',
          yearsUntil: '{years} χρόνια μέχρι τη συνταξιοδότηση',
          historicalAvg: 'Ιστορικός μέσος όρος: 7-8% για διαφοροποιημένα χαρτοφυλάκια',
          perYear: 'ετησίως',
          onTrack: 'Είστε στο Σωστό Δρόμο!',
          onTrackText: 'Με βάση το τρέχον σχέδιό σας, θα έχετε αρκετά για τη συνταξιοδότηση.',
          projectedIncome: 'Προβλεπόμενο Μηνιαίο Εισόδημα',
          actionNeeded: 'Απαιτείται Ενέργεια',
          actionText: 'Μπορεί να χρειαστεί να προσαρμόσετε το σχέδιο συνταξιοδότησής σας για να επιτύχετε το στόχο εισοδήματος.',
          additionalNeeded: 'Απαιτούμενη Πρόσθετη Μηνιαία Συνεισφορά',
          snapshot: 'Στιγμιότυπο Συνταξιοδότησης',
          yearsToRetirement: 'Χρόνια μέχρι τη Συνταξιοδότηση',
          projectedNestEgg: 'Προβλεπόμενο Κεφάλαιο',
          totalContributions: 'Συνολικές Συνεισφορές',
          investmentGains: 'Κέρδη Επενδύσεων',
          monthlyIncome: 'Μηνιαίο Εισόδημα',
          composition: 'Σύνθεση Αποταμίευσης',
          initialSavings: 'Αρχική Αποταμίευση',
          contributions: 'Συνεισφορές',
          investmentGrowth: 'Ανάπτυξη Επενδύσεων',
          rule4Percent: 'Ο Κανόνας του 4%',
          rule4PercentText: 'Μια κοινή κατευθυντήρια γραμμή συνταξιοδότησης προτείνει την ανάληψη 4% του χαρτοφυλακίου σας ετησίως. Με βάση τις προβλεπόμενες αποταμιεύσεις σας:',
          safeAnnual: 'Ασφαλής Ετήσια Ανάληψη',
          safeMonthly: 'Ασφαλές Μηνιαίο Εισόδημα',
          tipsTitle: 'Συμβουλές για τον Σχεδιασμό Συνταξιοδότησης',
          tip1: 'Μεγιστοποιήστε τη συνεισφορά 401(k) του εργοδότη',
          tip2: 'Εξετάστε Roth IRA για ανάπτυξη χωρίς φόρους',
          tip3: 'Αυξήστε τις συνεισφορές με τις αυξήσεις μισθού',
          tip4: 'Διαφοροποιήστε τις επενδύσεις σας',
          tip5: 'Ξεκινήστε όσο το δυνατόν νωρίτερα'
        }
      },
      videoTutorials: {
        title: 'Εκπαιδευτικά Βίντεο',
        description: 'Σύντομα: Παρακολουθήστε τη σειρά βίντεο μας από ειδικούς σε θέματα προσωπικών οικονομικών.',
        notify: 'Ειδοποιήστε με'
      },
      consultation: {
        title: 'Χρειάζεστε Προσωπική Καθοδήγηση;',
        description: 'Προγραμματίστε μια δωρεάν συμβουλευτική με έναν από τους οικονομικούς συμβούλους μας.',
        button: 'Προγραμματισμός Συμβουλευτικής'
      },
      finalCta: {
        title: 'Ξεκινήστε το Οικονομικό σας Ταξίδι Σήμερα',
        description: 'Η γνώση είναι το πρώτο βήμα προς την οικονομική ελευθερία. Εξερευνήστε τους πόρους μας, χρησιμοποιήστε τα εργαλεία μας και πάρτε τον έλεγχο του οικονομικού σας μέλλοντος.',
        openAccount: 'Άνοιγμα Λογαριασμού',
        contactUs: 'Επικοινωνήστε Μαζί μας'
      }
    },
    support: {
      title: 'Υποστήριξη Πελατών',
      subtitle: 'Είμαστε εδώ για να σας βοηθήσουμε με όλες τις τραπεζικές σας ανάγκες. Επιλέξτε τον καλύτερο τρόπο να επικοινωνήσετε μαζί μας.',
      phone: {
        title: 'Τηλεφωνική Υποστήριξη 24/7',
        description: 'Μιλήστε με έναν εκπρόσωπο οποτεδήποτε, μέρα ή νύχτα.',
        action: 'Καλέστε Τώρα'
      },
      chat: {
        title: 'Live Chat',
        description: 'Λάβετε άμεση βοήθεια μέσω του ασφαλούς συστήματος συνομιλίας μας.',
        detail: 'Διαθέσιμο 24/7',
        action: 'Έναρξη Chat'
      },
      email: {
        title: 'Υποστήριξη Email',
        description: 'Στείλτε μας ένα λεπτομερές μήνυμα και θα απαντήσουμε εντός 24 ωρών.',
        action: 'Αποστολή Email'
      },
      faq: {
        title: 'Συχνές Ερωτήσεις',
        account: {
          title: 'Διαχείριση Λογαριασμού',
          q1: 'Πώς επαναφέρω τον κωδικό μου;',
          q2: 'Πώς ενημερώνω τα στοιχεία επικοινωνίας μου;',
          q3: 'Πώς ρυθμίζω ειδοποιήσεις;'
        },
        transfers: {
          title: 'Μεταφορές και Πληρωμές',
          q1: 'Πώς μεταφέρω χρήματα;',
          q2: 'Ποια είναι τα όρια μεταφοράς;',
          q3: 'Πώς ρυθμίζω πληρωμή λογαριασμών;'
        },
        security: {
          title: 'Ασφάλεια',
          q1: 'Πώς αναφέρω απάτη;',
          q2: 'Είναι ασφαλής η διαδικτυακή τραπεζική;',
          q3: 'Πώς ενεργοποιώ τον έλεγχο ταυτότητας δύο παραγόντων;'
        },
        viewAll: 'Προβολή Όλων των Συχνών Ερωτήσεων'
      },
      hours: {
        title: 'Ώρες Υποκαταστήματος',
        weekdays: 'Δευτέρα - Παρασκευή:',
        weekdaysTime: '9:00 π.μ. - 5:00 μ.μ.',
        saturday: 'Σάββατο:',
        saturdayTime: '9:00 π.μ. - 2:00 μ.μ.',
        sunday: 'Κυριακή:',
        sundayTime: 'Κλειστά',
        support247: 'Τηλεφωνική και διαδικτυακή υποστήριξη διαθέσιμη 24/7'
      }
    },
    mortgage: {
      title: 'Υπηρεσίες Στεγαστικών Δανείων',
      subtitle: 'Βρείτε την τέλεια λύση στεγαστικού δανείου για το σπίτι σας με ανταγωνιστικά επιτόκια και ευέλικτους όρους.',
      typesTitle: 'Επιλογές Στεγαστικών Δανείων',
      types: {
        fixed: {
          title: 'Στεγαστικό Δάνειο Σταθερού Επιτοκίου',
          description: 'Σταθερές μηνιαίες πληρωμές με σταθερό επιτόκιο για τη διάρκεια του δανείου.',
          features: [
            'Προβλέψιμες μηνιαίες πληρωμές',
            'Προστασία από αυξήσεις επιτοκίων',
            'Διάρκειες 15 έως 30 ετών',
            'Ιδανικό για μακροχρόνια ιδιοκτησία'
          ]
        },
        adjustable: {
          title: 'Στεγαστικό Δάνειο Μεταβλητού Επιτοκίου',
          description: 'Χαμηλότερα αρχικά επιτόκια που προσαρμόζονται περιοδικά με βάση τις συνθήκες της αγοράς.',
          features: [
            'Χαμηλότερα αρχικά επιτόκια',
            'Προσαρμογές επιτοκίου μετά την αρχική περίοδο',
            'Ιδανικό για βραχυχρόνια ιδιοκτησία',
            'Δυνατότητα για χαμηλότερο συνολικό τόκο'
          ]
        },
        fha: {
          title: 'Δάνεια FHA',
          description: 'Κρατικά εγγυημένα δάνεια με χαμηλότερες απαιτήσεις προκαταβολής.',
          features: [
            'Προκαταβολή από 3.5%',
            'Πιο ευέλικτες πιστωτικές απαιτήσεις',
            'Κρατική ασφαλιστική υποστήριξη',
            'Ιδανικό για πρωτοαγοραστές'
          ]
        },
        va: {
          title: 'Δάνεια VA',
          description: 'Ειδικά προγράμματα στεγαστικών δανείων για επιλέξιμους βετεράνους και μέλη του στρατού.',
          features: [
            'Χωρίς απαιτούμενη προκαταβολή',
            'Χωρίς ιδιωτική ασφάλιση στεγαστικού δανείου',
            'Ανταγωνιστικά επιτόκια',
            'Περιορισμένα κόστη κλεισίματος'
          ]
        }
      },
      calculator: {
        title: 'Υπολογιστής Στεγαστικού Δανείου',
        description: 'Εκτιμήστε τη μηνιαία πληρωμή του στεγαστικού σας δανείου με τον εύχρηστο υπολογιστή μας.',
        loanAmount: 'Ποσό Δανείου',
        interestRate: 'Επιτόκιο',
        loanTerm: 'Διάρκεια Δανείου',
        downPayment: 'Προκαταβολή',
        years: 'Χρόνια',
        calculate: 'Υπολογισμός Πληρωμής'
      },
      processTitle: 'Η Διαδικασία Στεγαστικού Δανείου',
      process: {
        preapproval: {
          title: 'Προέγκριση',
          description: 'Λάβετε προέγκριση για να γνωρίζετε τον προϋπολογισμό σας και να ενισχύσετε την προσφορά σας.'
        },
        shopping: {
          title: 'Αναζήτηση Σπιτιού',
          description: 'Βρείτε το τέλειο σπίτι σας με εμπιστοσύνη στη χρηματοδότησή σας.'
        },
        application: {
          title: 'Αίτηση',
          description: 'Ολοκληρώστε την αίτηση στεγαστικού δανείου σας με την απλή μας διαδικασία.'
        },
        closing: {
          title: 'Κλείσιμο',
          description: 'Ολοκληρώστε το στεγαστικό σας δάνειο και πάρτε τα κλειδιά του νέου σας σπιτιού.'
        }
      },
      cta: {
        title: 'Έτοιμοι να Αγοράσετε το Σπίτι σας;',
        description: 'Ξεκινήστε την αίτηση στεγαστικού δανείου σας σήμερα ή μιλήστε με έναν από τους ειδικούς μας σε στεγαστικά δάνεια.',
        button: 'Αίτηση Τώρα'
      }
    },
    aboutUs: {
      title: 'Σχετικά με την Aareal Bank AG',
      subtitle: 'Οικοδομώντας πλούτο μέσω παραδοσιακών τραπεζικών αξιών και εξατομικευμένης εξυπηρέτησης από το 1952.',
      mission: {
        title: 'Η Αποστολή μας',
        description: 'Τα ψηφιακά περιουσιακά στοιχεία έχουν ωριμάσει και οι τραπεζικές υπηρεσίες πρέπει να ανταποκριθούν στην πρόκληση. Η διαπραγμάτευση, η επένδυση και η αποθήκευση κρυπτονομισμάτων και άλλων ψηφιακών περιουσιακών στοιχείων δεν πρέπει να είναι ένα \'πρόσθετο\' στην παραδοσιακή τραπεζική, αλλά μια ολοκληρωμένη υπηρεσία που συνδέεται με κάθε άλλη πτυχή των τραπεζικών υπηρεσιών ενός πελάτη. Η Aareal Bank AG ιδρύθηκε για να παρέχει ακριβώς αυτή τη λύση σε επαγγελματίες επενδυτές, εταιρείες, family offices και θεσμικούς φορείς.'
      },
      vision: {
        title: 'Το Όραμά μας',
        description: 'Να είμαστε το πιο αξιόπιστο και σεβαστό χρηματοπιστωτικό ίδρυμα στην περιοχή μας, γνωστό για καινοτομία, ακεραιότητα και ακλόνητη δέσμευση στην επιτυχία των πελατών.'
      },
      futureFinance: {
        title: 'Δημιουργώντας το μέλλον των χρηματοοικονομικών',
        description: 'Έχουμε ηγηθεί με ένα νέο όραμα για τις τραπεζικές υπηρεσίες που γκρεμίζει τα εμπόδια μεταξύ των παραδοσιακών χρηματοοικονομικών υπηρεσιών και της υποστήριξης ψηφιακών περιουσιακών στοιχείων. Τα βραβευμένα προϊόντα και λύσεις μας παρέχουν μια απρόσκοπτη υπηρεσία σε όλες τις κύριες κατηγορίες περιουσιακών στοιχείων, συμπεριλαμβανομένων παραδοσιακών περιουσιακών στοιχείων, κρυπτονομισμάτων και δικτύων blockchain.'
      },
      principles: {
        title: 'Οι αρχές μας',
        description: 'Παρέχουμε όλες τις δυνατότητες του σύγχρονου τραπεζικού συστήματος συμπεριλαμβανομένων των κρυπτονομισμάτων, προσβάσιμες μέσω μιας ενιαίας πύλης και υποστηριζόμενες από τα υψηλότερα πρότυπα ασφαλείας. Η αποστολή μας βασίζεται σε τρεις λέξεις-κλειδιά:',
        sophisticated: {
          title: 'Εξελιγμένο',
          description: 'Επαναστατική χρηματοοικονομική εμπειρία με τεχνολογία αιχμής και καινοτόμες λύσεις'
        },
        seamless: {
          title: 'Απρόσκοπτο',
          description: 'Γεφύρωση του κόσμου των παραδοσιακών και ψηφιακών χρηματοοικονομικών με ομαλές, ολοκληρωμένες συναλλαγές'
        },
        secure: {
          title: 'Ασφαλές',
          description: 'Διατήρηση των οικονομικών σας ασφαλών με ισχυρή προστασία που ηγείται της βιομηχανίας'
        }
      },
      valuesTitle: 'Οι Βασικές μας Αξίες',
      values: {
        integrity: {
          title: 'Ακεραιότητα',
          description: 'Διεξάγουμε τις επιχειρήσεις μας με ειλικρίνεια, διαφάνεια και ηθικές αρχές.'
        },
        community: {
          title: 'Κοινότητα',
          description: 'Επενδύουμε και υποστηρίζουμε τις κοινότητες που εξυπηρετούμε.'
        },
        excellence: {
          title: 'Αριστεία',
          description: 'Αγωνιζόμαστε για αριστεία σε όλα όσα κάνουμε.'
        },
        innovation: {
          title: 'Καινοτομία',
          description: 'Αξιοποιούμε την καινοτομία για να εξυπηρετούμε καλύτερα τους πελάτες μας.'
        }
      },
      historyTitle: 'Το Ταξίδι μας',
      milestones: {
        founded: {
          title: 'Ίδρυση Aareal Bank AG',
          description: 'Ξεκίνησε ως μια μικρή κοινοτική τράπεζα με δέσμευση στην εξατομικευμένη εξυπηρέτηση.'
        },
        expansion: {
          title: 'Περιφερειακή Επέκταση',
          description: 'Επεκτάθηκε σε πολλές κοινότητες στην περιοχή με 10 νέα υποκαταστήματα.'
        },
        digital: {
          title: 'Λανσάρισμα Ψηφιακής Τραπεζικής',
          description: 'Λανσάρισε ολοκληρωμένες διαδικτυακές τραπεζικές υπηρεσίες για εξυπηρέτηση πελατών 24/7.'
        },
        branches: {
          title: 'Σήμερα',
          description: 'Τώρα εξυπηρετούμε πάνω από 50,000 πελάτες σε 25 υποκαταστήματα με πάνω από $2 δισεκατομμύρια σε περιουσιακά στοιχεία.'
        }
      },
      stats: {
        customers: '50,000+',
        customersLabel: 'Ικανοποιημένοι Πελάτες',
        branches: '25',
        branchesLabel: 'Υποκαταστήματα',
        employees: '500+',
        employeesLabel: 'Αφοσιωμένοι Υπάλληλοι'
      },
      cta: {
        title: 'Ενταχθείτε στην Τραπεζική μας Οικογένεια',
        description: 'Ζήστε τη διαφορά της Aareal Bank AG με εξατομικευμένη εξυπηρέτηση και σύγχρονες τραπεζικές λύσεις.',
        button: 'Άνοιγμα Λογαριασμού'
      }
    },
    currencyExchange: {
      title: 'Ανταλλαγή Νομισμάτων',
      subtitle: 'Ανταλλάξτε νομίσματα fiat και κρυπτονομίσματα με ανταγωνιστικές τιμές και άμεσες μεταφορές',
      converter: {
        title: 'Μετατροπέας Νομισμάτων',
        from: 'Από',
        to: 'Σε',
        exchangeRate: 'Τιμή Συναλλάγματος',
        executeExchange: 'Εκτέλεση Ανταλλαγής',
        fiat: 'Fiat',
        crypto: 'Crypto',
        rateAlert: {
          title: 'Ειδοποίηση Τιμής',
          description: 'Λάβετε ειδοποίηση όταν η επιθυμητή τιμή συναλλάγματος είναι διαθέσιμη',
          placeholder: 'Στόχος τιμής',
          setAlert: 'Ορισμός Ειδοποίησης',
          notification: 'Άμεσες ειδοποιήσεις μέσω email και SMS'
        }
      },
      cryptoRates: {
        title: 'Τιμές Κρυπτονομισμάτων'
      },
      fiatCurrencies: {
        title: 'Κύρια Νομίσματα Fiat',
        perUsd: 'ανά USD'
      },
      wireTransfer: {
        title: 'Διεθνές Τραπεζικό Έμβασμα',
        features: {
          lowFees: {
            title: 'Χαμηλές Χρεώσεις',
            description: 'Ξεκινώντας από μόνο $15 για διεθνή εμβάσματα'
          },
          fast: {
            title: 'Γρήγορες Μεταφορές',
            description: 'Οι περισσότερες μεταφορές ολοκληρώνονται εντός 24-48 ωρών'
          },
          global: {
            title: '200+ Χώρες',
            description: 'Στείλτε χρήματα σε πάνω από 200 χώρες παγκοσμίως'
          }
        },
        calculator: {
          title: 'Υπολογιστής Χρεώσεων Εμβάσματος',
          amount: 'Ποσό Εμβάσματος',
          destination: 'Χώρα Προορισμού',
          transferFee: 'Χρέωση Εμβάσματος',
          exchangeMarkup: 'Προσαύξηση Τιμής Συναλλάγματος',
          totalCost: 'Συνολικό Κόστος'
        }
      },
      cta: {
        title: 'Ξεκινήστε την Ανταλλαγή Σήμερα',
        description: 'Ανοίξτε λογαριασμό Aareal Bank AG για πρόσβαση σε ανταγωνιστικές τιμές συναλλάγματος και χαμηλού κόστους διεθνή εμβάσματα',
        button: 'Άνοιγμα Λογαριασμού'
      }
    },
    trustSection: {
      title: 'Υποστηριζόμενα Νομίσματα',
      subtitle: 'Συνεργαζόμαστε με παραδοσιακά και ψηφιακά νομίσματα',
      crypto: {
        title: 'Διαθέσιμα Κρυπτοπεριουσιακά Στοιχεία',
        description: 'Αγοράστε, πουλήστε και κρατήστε κορυφαία κρυπτονομίσματα με ασφαλή αποθήκευση',
        more: 'και πολλά άλλα...'
      },
      fiat: {
        title: 'Διαθέσιμα Νομίσματα Fiat',
        description: 'Συνεργαστείτε με κύρια νομίσματα από όλο τον κόσμο',
        more: 'και πολλά άλλα...'
      }
    },
    newsletter: {
      title: 'Εγγραφείτε στο Newsletter μας',
      subtitle: 'Λάβετε τα τελευταία νέα, οικονομικές συμβουλές και αποκλειστικές προσφορές',
      emailPlaceholder: 'Εισάγετε το email σας',
      subscribe: 'Εγγραφή',
      success: 'Ευχαριστούμε για την εγγραφή σας!',
      error: 'Προέκυψε σφάλμα. Παρακαλώ δοκιμάστε ξανά.',
      alreadySubscribed: 'Αυτό το email είναι ήδη εγγεγραμμένο'
    },
    news: {
      title: 'Τελευταία Νέα',
      subtitle: 'Μείνετε ενημερωμένοι με τις τελευταίες εξελίξεις στον χρηματοοικονομικό κόσμο',
      categories: {
        all: 'Όλα',
        banking: 'Τραπεζικά',
        economy: 'Οικονομία',
        crypto: 'Κρυπτονομίσματα'
      },
      readMore: 'Διαβάστε Περισσότερα',
      loading: 'Φόρτωση νέων...',
      error: 'Αποτυχία φόρτωσης νέων',
      noArticles: 'Δεν βρέθηκαν άρθρα',
      publishedBy: 'Δημοσιεύτηκε από'
    },
    difference: {
      title: 'Γιατί Να Επιλέξετε Την Aareal Bank AG',
      safety: 'Ασφάλεια',
      safetyDesc: 'Τα χρήματά σας προστατεύονται με αποδεδειγμένα μέτρα ασφαλείας. Δεν κάνουμε συμβιβασμούς όταν πρόκειται για την προστασία των λογαριασμών σας.',
      transparency: 'Διαφάνεια',
      transparencyDesc: 'Αποκτήστε πρόσβαση σε όλους τους λογαριασμούς σας σε ένα μέρος. Δείτε ακριβώς πού είναι τα χρήματά σας και τι κάνουν.',
      performance: 'Απόδοση',
      performanceDesc: 'Παραμένουμε ενημερωμένοι με τη χρηματοοικονομική τεχνολογία ώστε να μπορείτε να εκμεταλλευτείτε νέες ευκαιρίες όταν έχουν νόημα για εσάς.'
    },
    investmentHighlight: {
      title: 'Επενδύσεις',
      subtitle: 'Crypto, μετρητά, μετοχές ή παραδοσιακές επενδύσεις',
      description: 'Από μετοχές έως crypto, έχουμε επιλογές που ταιριάζουν στους στόχους σας.'
    }
  }
};
