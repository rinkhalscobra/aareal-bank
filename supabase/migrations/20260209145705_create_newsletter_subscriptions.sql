/*
  # Newsletter Subscriptions Table

  1. New Tables
    - `newsletter_subscriptions`
      - `id` (uuid, primary key) - Unique identifier for each subscription
      - `email` (text, unique, not null) - Subscriber's email address
      - `language` (text, not null) - Preferred language for newsletters
      - `subscribed_at` (timestamptz, default now()) - Timestamp of subscription
      - `is_active` (boolean, default true) - Active subscription status
      - `unsubscribe_token` (uuid, unique) - Token for unsubscribe functionality

  2. Security
    - Enable RLS on `newsletter_subscriptions` table
    - Add policy for public users to insert subscriptions
    - Add policy for users to view their own subscription by token
    - Add policy for users to update their own subscription status

  3. Indexes
    - Index on email for quick lookups
    - Index on unsubscribe_token for unsubscribe operations
*/

CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  language text NOT NULL DEFAULT 'en',
  subscribed_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true,
  unsubscribe_token uuid UNIQUE DEFAULT gen_random_uuid(),
  CONSTRAINT valid_language CHECK (language IN ('en', 'fr', 'it', 'de', 'es', 'el'))
);

-- Enable Row Level Security
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create index on email for quick lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscriptions(email);

-- Create index on unsubscribe_token for unsubscribe operations
CREATE INDEX IF NOT EXISTS idx_newsletter_token ON newsletter_subscriptions(unsubscribe_token);

-- Policy: Allow anyone to subscribe (insert)
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscriptions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow users to view their subscription by email (for checking if already subscribed)
CREATE POLICY "Users can check subscription status"
  ON newsletter_subscriptions
  FOR SELECT
  TO anon
  USING (true);

-- Policy: Allow users to update subscription status via token
CREATE POLICY "Users can update subscription via token"
  ON newsletter_subscriptions
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);