/*
  # Create Educational Articles Table

  ## Overview
  This migration creates a comprehensive table for storing financial education articles,
  videos, and resources to help users learn about personal finance topics.

  ## New Tables
    - `educational_articles`
      - `id` (uuid, primary key) - Unique identifier for each article
      - `title` (text) - Article title
      - `slug` (text, unique) - URL-friendly identifier
      - `category` (text) - Category: budgeting, saving, investing, credit, general
      - `content_type` (text) - Type: article, video, guide, tool
      - `description` (text) - Short description/excerpt
      - `content` (text) - Full article content in markdown
      - `image_url` (text) - Featured image URL
      - `video_url` (text, nullable) - YouTube or video URL if applicable
      - `reading_time` (integer) - Estimated reading time in minutes
      - `difficulty_level` (text) - beginner, intermediate, advanced
      - `tags` (text array) - Searchable tags
      - `author` (text) - Article author name
      - `view_count` (integer) - Number of views
      - `published` (boolean) - Whether article is published
      - `featured` (boolean) - Whether to feature on homepage
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  ## Security
    - Enable RLS on educational_articles table
    - Allow public read access to published articles
    - Restrict write access (content management would be done by admins)
*/

CREATE TABLE IF NOT EXISTS educational_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  category text NOT NULL CHECK (category IN ('budgeting', 'saving', 'investing', 'credit', 'general')),
  content_type text NOT NULL DEFAULT 'article' CHECK (content_type IN ('article', 'video', 'guide', 'tool')),
  description text NOT NULL,
  content text NOT NULL,
  image_url text DEFAULT '',
  video_url text,
  reading_time integer DEFAULT 5,
  difficulty_level text DEFAULT 'beginner' CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')),
  tags text[] DEFAULT '{}',
  author text DEFAULT 'Heritage Bank',
  view_count integer DEFAULT 0,
  published boolean DEFAULT true,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE educational_articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published educational articles"
  ON educational_articles
  FOR SELECT
  USING (published = true);

CREATE INDEX IF NOT EXISTS idx_educational_articles_category ON educational_articles(category);
CREATE INDEX IF NOT EXISTS idx_educational_articles_published ON educational_articles(published);
CREATE INDEX IF NOT EXISTS idx_educational_articles_featured ON educational_articles(featured);
CREATE INDEX IF NOT EXISTS idx_educational_articles_slug ON educational_articles(slug);

-- Insert sample educational articles
INSERT INTO educational_articles (title, slug, category, content_type, description, content, reading_time, difficulty_level, tags, featured) VALUES
(
  'Building Your First Budget',
  'building-your-first-budget',
  'budgeting',
  'article',
  'Learn the fundamentals of creating a personal budget that actually works for your lifestyle and financial goals.',
  '# Building Your First Budget

Creating a budget is the foundation of financial success. Here''s how to get started:

## 1. Track Your Income
Start by calculating your total monthly income after taxes. Include all sources: salary, freelance work, investments, and any other regular income.

## 2. List Your Expenses
Categorize your expenses into:
- **Fixed expenses**: Rent/mortgage, insurance, loan payments
- **Variable expenses**: Groceries, utilities, gas
- **Discretionary spending**: Entertainment, dining out, hobbies

## 3. Apply the 50/30/20 Rule
- 50% for needs (housing, food, utilities)
- 30% for wants (entertainment, hobbies)
- 20% for savings and debt repayment

## 4. Use the Right Tools
Consider using budgeting apps or spreadsheets to track your spending automatically.

## 5. Review and Adjust
Review your budget monthly and adjust as needed. Life changes, and your budget should too.',
  8,
  'beginner',
  ARRAY['budgeting', 'personal-finance', 'money-management', '50-30-20-rule'],
  true
),
(
  'Emergency Fund Essentials',
  'emergency-fund-essentials',
  'saving',
  'article',
  'Discover why an emergency fund is crucial and how to build one that protects you from financial disasters.',
  '# Emergency Fund Essentials

An emergency fund is your financial safety net. Here''s everything you need to know:

## Why You Need an Emergency Fund
Life is unpredictable. Medical emergencies, job loss, car repairs, or home maintenance can strike at any time. An emergency fund prevents you from going into debt when unexpected expenses arise.

## How Much Should You Save?
Financial experts recommend:
- **Minimum**: $1,000 for basic emergencies
- **Ideal**: 3-6 months of living expenses
- **High risk jobs**: 6-12 months of expenses

## Where to Keep Your Emergency Fund
- High-yield savings account
- Money market account
- Separate from your regular checking account

## Building Your Fund Step by Step
1. Start small - even $25/week adds up
2. Automate your savings
3. Save windfalls (tax refunds, bonuses)
4. Cut one unnecessary expense
5. Celebrate milestones

## When to Use It
Only use your emergency fund for true emergencies:
- Medical emergencies
- Essential car repairs
- Job loss
- Urgent home repairs

NOT for vacations, shopping, or planned expenses.',
  7,
  'beginner',
  ARRAY['saving', 'emergency-fund', 'financial-security', 'savings-goals'],
  true
),
(
  'Understanding Credit Scores',
  'understanding-credit-scores',
  'credit',
  'article',
  'Demystify credit scores and learn proven strategies to improve your credit rating for better financial opportunities.',
  '# Understanding Credit Scores

Your credit score affects loans, credit cards, and even job opportunities. Here''s what you need to know:

## What is a Credit Score?
A credit score is a three-digit number (300-850) that represents your creditworthiness. Lenders use it to decide whether to approve your applications and what interest rates to offer.

## Credit Score Ranges
- **800-850**: Exceptional
- **740-799**: Very Good
- **670-739**: Good
- **580-669**: Fair
- **300-579**: Poor

## What Affects Your Credit Score?
1. **Payment History (35%)**: Pay bills on time, every time
2. **Credit Utilization (30%)**: Keep balances below 30% of limits
3. **Credit History Length (15%)**: Longer is better
4. **New Credit (10%)**: Too many applications hurt your score
5. **Credit Mix (10%)**: Variety of credit types

## How to Improve Your Credit Score
- Pay all bills on time
- Pay down credit card balances
- Don''t close old accounts
- Limit new credit applications
- Check your credit report for errors
- Become an authorized user
- Consider a secured credit card

## Common Credit Myths
**Myth**: Checking your credit hurts your score
**Truth**: Soft inquiries don''t affect your score

**Myth**: You need to carry a balance
**Truth**: Paying in full is always better

**Myth**: Closing cards improves your score
**Truth**: It can actually hurt by reducing available credit',
  10,
  'intermediate',
  ARRAY['credit', 'credit-score', 'FICO', 'financial-health'],
  true
),
(
  'Investing 101: Getting Started',
  'investing-101-getting-started',
  'investing',
  'article',
  'Begin your investment journey with this comprehensive guide to stocks, bonds, and building long-term wealth.',
  '# Investing 101: Getting Started

Investing can seem intimidating, but it''s essential for building long-term wealth. Here''s your beginner''s guide:

## Why Invest?
- Beat inflation
- Build wealth over time
- Achieve financial goals (retirement, home, education)
- Generate passive income

## Investment Basics

### Stocks
Ownership shares in a company. Higher risk, higher potential return.

### Bonds
Loans to companies or governments. Lower risk, lower returns.

### Mutual Funds
Professionally managed portfolios of stocks and bonds.

### ETFs (Exchange-Traded Funds)
Similar to mutual funds but trade like stocks.

### Index Funds
Low-cost funds that track market indexes like S&P 500.

## Investment Strategies

### Dollar-Cost Averaging
Invest a fixed amount regularly, regardless of market conditions.

### Diversification
Don''t put all eggs in one basket. Spread across asset types.

### Long-Term Thinking
Time in the market beats timing the market.

## Getting Started Checklist
1. ✓ Build emergency fund first
2. ✓ Pay off high-interest debt
3. ✓ Understand your risk tolerance
4. ✓ Open investment account
5. ✓ Start with low-cost index funds
6. ✓ Contribute regularly
7. ✓ Don''t panic during downturns

## Common Mistakes to Avoid
- Trying to time the market
- Letting emotions drive decisions
- Not diversifying
- Paying high fees
- Ignoring retirement accounts
- Following hot tips

## Tax-Advantaged Accounts
- **401(k)**: Employer retirement plan
- **IRA**: Individual retirement account
- **Roth IRA**: Tax-free growth and withdrawals',
  12,
  'beginner',
  ARRAY['investing', 'stocks', 'bonds', 'wealth-building', 'retirement'],
  true
),
(
  'The Power of Compound Interest',
  'power-of-compound-interest',
  'investing',
  'article',
  'Understand how compound interest can exponentially grow your wealth over time with consistent investing.',
  '# The Power of Compound Interest

Albert Einstein allegedly called compound interest "the eighth wonder of the world." Here''s why:

## What is Compound Interest?
Compound interest is interest earned on both your initial principal AND the accumulated interest from previous periods. Your money makes money, and that money makes more money.

## Simple vs. Compound Interest

### Simple Interest Example
$10,000 at 5% simple interest for 30 years:
**Result**: $25,000

### Compound Interest Example
$10,000 at 5% compounded annually for 30 years:
**Result**: $43,219

**The difference**: $18,219 in extra money!

## The Rule of 72
Quick way to estimate doubling time:
**72 ÷ Interest Rate = Years to Double**

Examples:
- 6% return: 72 ÷ 6 = 12 years to double
- 8% return: 72 ÷ 8 = 9 years to double
- 10% return: 72 ÷ 10 = 7.2 years to double

## Starting Early Makes a Huge Difference

### Example: Two Investors

**Sarah** starts at age 25:
- Invests $300/month until 35 (10 years)
- Total invested: $36,000
- At 65 (8% return): $518,113

**Mike** starts at age 35:
- Invests $300/month until 65 (30 years)
- Total invested: $108,000
- At 65 (8% return): $447,107

Sarah invested $72,000 LESS but ended with $71,000 MORE!

## Maximizing Compound Interest
1. Start as early as possible
2. Contribute regularly
3. Reinvest dividends
4. Be patient - don''t withdraw
5. Maximize tax-advantaged accounts
6. Increase contributions over time

## Compound Interest in Debt
Warning: Compound interest works against you with debt! Credit card debt compounds rapidly, making it hard to pay off.',
  9,
  'intermediate',
  ARRAY['investing', 'compound-interest', 'wealth-building', 'retirement-planning'],
  false
),
(
  'Debt Snowball vs. Debt Avalanche',
  'debt-snowball-vs-debt-avalanche',
  'credit',
  'article',
  'Compare two proven methods for paying off debt and choose the strategy that works best for your situation.',
  '# Debt Snowball vs. Debt Avalanche

Two popular strategies for tackling debt. Which one is right for you?

## Debt Snowball Method

### How It Works
1. List debts from smallest to largest balance
2. Pay minimums on all debts
3. Put extra money toward smallest debt
4. When smallest is paid off, roll that payment to next smallest
5. Repeat until debt-free

### Pros
- Quick wins boost motivation
- Psychological momentum
- Simpler to follow

### Cons
- May pay more interest overall
- Takes longer mathematically

### Best For
People who need motivation and quick wins

## Debt Avalanche Method

### How It Works
1. List debts from highest to lowest interest rate
2. Pay minimums on all debts
3. Put extra money toward highest-interest debt
4. When highest-interest is paid off, roll to next highest
5. Repeat until debt-free

### Pros
- Saves most money on interest
- Faster payoff mathematically
- Most efficient method

### Cons
- Slower initial progress
- Can feel discouraging
- Requires discipline

### Best For
People motivated by saving money and efficiency

## Example Comparison

**Debts:**
- Credit Card 1: $500 at 24% APR
- Credit Card 2: $2,000 at 20% APR
- Personal Loan: $5,000 at 8% APR
- Car Loan: $10,000 at 5% APR

**Snowball Order**: $500 → $2,000 → $5,000 → $10,000
**Avalanche Order**: $500 → $2,000 → $5,000 → $10,000

## Which Should You Choose?

Choose **Snowball** if:
- You need motivation
- You have many small debts
- You value psychological wins

Choose **Avalanche** if:
- You want to save the most money
- You''re disciplined
- Interest rates vary significantly

## Hybrid Approach
Some people combine both methods:
1. Pay off one small debt for quick win
2. Switch to avalanche method
3. Get motivation + savings

## Other Important Steps
- Stop using credit cards
- Build small emergency fund
- Create a budget
- Increase income if possible
- Negotiate lower interest rates',
  8,
  'intermediate',
  ARRAY['debt', 'credit', 'debt-payoff', 'personal-finance'],
  false
);
