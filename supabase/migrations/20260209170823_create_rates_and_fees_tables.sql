/*
  # Rates & Fees Center Database Schema

  ## Overview
  Complete transparency database structure for all banking rates, fees, and pricing information.

  ## New Tables

  ### 1. `account_fees`
  Stores fees for different account types (checking, savings, money market, CDs)
  - `id` (uuid, primary key)
  - `account_type` (text): Type of account (checking, savings, money_market, cd)
  - `account_name` (text): Specific account name/tier
  - `monthly_fee` (decimal): Monthly maintenance fee
  - `minimum_balance_to_waive` (decimal): Balance required to waive monthly fee
  - `minimum_opening_deposit` (decimal): Minimum to open account
  - `overdraft_fee` (decimal): Per overdraft occurrence
  - `nsf_fee` (decimal): Non-sufficient funds fee
  - `excess_withdrawal_fee` (decimal): Fee for exceeding withdrawal limits
  - `paper_statement_fee` (decimal): Monthly fee for paper statements
  - `dormant_account_fee` (decimal): Fee for inactive accounts
  - `early_closure_fee` (decimal): Fee if closed within specified period
  - `interest_rate` (decimal): Current interest rate/APY
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 2. `service_fees`
  Stores fees for various banking services
  - `id` (uuid, primary key)
  - `service_name` (text): Name of service
  - `service_category` (text): Category (transfers, checks, cards, etc.)
  - `fee_amount` (decimal): Fee amount
  - `fee_description` (text): Detailed description
  - `waiver_conditions` (text): Conditions to waive fee
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 3. `loan_fees`
  Stores fees associated with loans
  - `id` (uuid, primary key)
  - `loan_type` (text): Type of loan (mortgage, auto, personal, etc.)
  - `loan_name` (text): Specific loan product name
  - `origination_fee` (decimal): Loan origination fee
  - `origination_fee_percentage` (decimal): Percentage-based origination fee
  - `application_fee` (decimal): Fee to apply
  - `appraisal_fee` (decimal): Property appraisal fee
  - `credit_report_fee` (decimal): Credit check fee
  - `closing_costs` (decimal): Estimated closing costs
  - `prepayment_penalty` (text): Prepayment penalty details
  - `late_payment_fee` (decimal): Late payment fee
  - `interest_rate` (decimal): Current interest rate/APR
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 4. `card_fees`
  Stores credit and debit card related fees
  - `id` (uuid, primary key)
  - `card_type` (text): Type (credit, debit, prepaid)
  - `card_name` (text): Card product name
  - `annual_fee` (decimal): Annual/yearly fee
  - `foreign_transaction_fee` (decimal): Foreign transaction fee percentage
  - `balance_transfer_fee` (decimal): Balance transfer fee percentage
  - `cash_advance_fee` (decimal): Cash advance fee percentage
  - `late_payment_fee` (decimal): Late payment fee
  - `over_limit_fee` (decimal): Over credit limit fee
  - `replacement_card_fee` (decimal): Fee for replacement card
  - `rush_card_fee` (decimal): Fee for expedited card delivery
  - `apr_purchases` (decimal): APR for purchases
  - `apr_balance_transfers` (decimal): APR for balance transfers
  - `apr_cash_advances` (decimal): APR for cash advances
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 5. `atm_fees`
  Stores ATM-related fees
  - `id` (uuid, primary key)
  - `fee_type` (text): Type of ATM transaction
  - `in_network_fee` (decimal): Fee for in-network ATMs
  - `out_of_network_fee` (decimal): Fee for out-of-network ATMs
  - `international_fee` (decimal): Fee for international ATMs
  - `description` (text): Fee description
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 6. `investment_fees`
  Stores investment and wealth management fees
  - `id` (uuid, primary key)
  - `service_name` (text): Investment service name
  - `service_type` (text): Type of service
  - `management_fee_percentage` (decimal): Annual management fee %
  - `minimum_investment` (decimal): Minimum investment required
  - `transaction_fee` (decimal): Per transaction fee
  - `advisory_fee` (decimal): Advisory fee
  - `description` (text): Service description
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 7. `fee_schedule_history`
  Tracks historical changes to fees for transparency
  - `id` (uuid, primary key)
  - `fee_table` (text): Which table (account_fees, service_fees, etc.)
  - `fee_id` (uuid): ID of the fee record
  - `field_changed` (text): Which field was changed
  - `old_value` (text): Previous value
  - `new_value` (text): New value
  - `change_date` (timestamptz): When the change occurred
  - `effective_date` (timestamptz): When the change takes effect
  - `reason` (text): Reason for change

  ## Security
  - Enable RLS on all tables
  - All fee information is publicly readable (transparency)
  - Only authenticated admins can modify (handled via service role)
*/

-- Create account_fees table
CREATE TABLE IF NOT EXISTS account_fees (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_type text NOT NULL,
  account_name text NOT NULL,
  monthly_fee decimal(10,2) DEFAULT 0,
  minimum_balance_to_waive decimal(10,2),
  minimum_opening_deposit decimal(10,2) DEFAULT 0,
  overdraft_fee decimal(10,2) DEFAULT 0,
  nsf_fee decimal(10,2) DEFAULT 0,
  excess_withdrawal_fee decimal(10,2) DEFAULT 0,
  paper_statement_fee decimal(10,2) DEFAULT 0,
  dormant_account_fee decimal(10,2) DEFAULT 0,
  early_closure_fee decimal(10,2) DEFAULT 0,
  interest_rate decimal(5,2) DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create service_fees table
CREATE TABLE IF NOT EXISTS service_fees (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_name text NOT NULL,
  service_category text NOT NULL,
  fee_amount decimal(10,2) NOT NULL,
  fee_description text,
  waiver_conditions text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create loan_fees table
CREATE TABLE IF NOT EXISTS loan_fees (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  loan_type text NOT NULL,
  loan_name text NOT NULL,
  origination_fee decimal(10,2) DEFAULT 0,
  origination_fee_percentage decimal(5,2) DEFAULT 0,
  application_fee decimal(10,2) DEFAULT 0,
  appraisal_fee decimal(10,2) DEFAULT 0,
  credit_report_fee decimal(10,2) DEFAULT 0,
  closing_costs decimal(10,2) DEFAULT 0,
  prepayment_penalty text,
  late_payment_fee decimal(10,2) DEFAULT 0,
  interest_rate decimal(5,2) DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create card_fees table
CREATE TABLE IF NOT EXISTS card_fees (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  card_type text NOT NULL,
  card_name text NOT NULL,
  annual_fee decimal(10,2) DEFAULT 0,
  foreign_transaction_fee decimal(5,2) DEFAULT 0,
  balance_transfer_fee decimal(5,2) DEFAULT 0,
  cash_advance_fee decimal(5,2) DEFAULT 0,
  late_payment_fee decimal(10,2) DEFAULT 0,
  over_limit_fee decimal(10,2) DEFAULT 0,
  replacement_card_fee decimal(10,2) DEFAULT 0,
  rush_card_fee decimal(10,2) DEFAULT 0,
  apr_purchases decimal(5,2) DEFAULT 0,
  apr_balance_transfers decimal(5,2) DEFAULT 0,
  apr_cash_advances decimal(5,2) DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create atm_fees table
CREATE TABLE IF NOT EXISTS atm_fees (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  fee_type text NOT NULL,
  in_network_fee decimal(10,2) DEFAULT 0,
  out_of_network_fee decimal(10,2) DEFAULT 0,
  international_fee decimal(10,2) DEFAULT 0,
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create investment_fees table
CREATE TABLE IF NOT EXISTS investment_fees (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_name text NOT NULL,
  service_type text NOT NULL,
  management_fee_percentage decimal(5,2) DEFAULT 0,
  minimum_investment decimal(10,2) DEFAULT 0,
  transaction_fee decimal(10,2) DEFAULT 0,
  advisory_fee decimal(10,2) DEFAULT 0,
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create fee_schedule_history table
CREATE TABLE IF NOT EXISTS fee_schedule_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  fee_table text NOT NULL,
  fee_id uuid NOT NULL,
  field_changed text NOT NULL,
  old_value text,
  new_value text,
  change_date timestamptz DEFAULT now(),
  effective_date timestamptz,
  reason text
);

-- Enable RLS on all tables
ALTER TABLE account_fees ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_fees ENABLE ROW LEVEL SECURITY;
ALTER TABLE loan_fees ENABLE ROW LEVEL SECURITY;
ALTER TABLE card_fees ENABLE ROW LEVEL SECURITY;
ALTER TABLE atm_fees ENABLE ROW LEVEL SECURITY;
ALTER TABLE investment_fees ENABLE ROW LEVEL SECURITY;
ALTER TABLE fee_schedule_history ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (transparency)
CREATE POLICY "Anyone can view account fees"
  ON account_fees FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view service fees"
  ON service_fees FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view loan fees"
  ON loan_fees FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view card fees"
  ON card_fees FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view ATM fees"
  ON atm_fees FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view investment fees"
  ON investment_fees FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view fee history"
  ON fee_schedule_history FOR SELECT
  TO public
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_account_fees_type ON account_fees(account_type);
CREATE INDEX IF NOT EXISTS idx_service_fees_category ON service_fees(service_category);
CREATE INDEX IF NOT EXISTS idx_loan_fees_type ON loan_fees(loan_type);
CREATE INDEX IF NOT EXISTS idx_card_fees_type ON card_fees(card_type);
CREATE INDEX IF NOT EXISTS idx_fee_history_table ON fee_schedule_history(fee_table, fee_id);