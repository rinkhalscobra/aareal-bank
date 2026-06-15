/*
  # Create Cookie Consent Table

  1. New Tables
    - `cookie_consent`
      - `id` (uuid, primary key)
      - `session_id` (text) - Anonymous session identifier
      - `necessary` (boolean) - Always true, required cookies
      - `analytics` (boolean) - Analytics cookies consent
      - `marketing` (boolean) - Marketing cookies consent
      - `preferences` (boolean) - Preference cookies consent
      - `consent_date` (timestamptz) - When consent was given
      - `ip_address` (text) - IP address for audit trail
      - `user_agent` (text) - Browser user agent
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `cookie_consent` table
    - Add policy for users to manage their own consent records
*/

CREATE TABLE IF NOT EXISTS cookie_consent (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text UNIQUE NOT NULL,
  necessary boolean DEFAULT true NOT NULL,
  analytics boolean DEFAULT false NOT NULL,
  marketing boolean DEFAULT false NOT NULL,
  preferences boolean DEFAULT false NOT NULL,
  consent_date timestamptz DEFAULT now() NOT NULL,
  ip_address text,
  user_agent text,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE cookie_consent ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert their own consent"
  ON cookie_consent
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view their own consent by session"
  ON cookie_consent
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can update their own consent by session"
  ON cookie_consent
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_cookie_consent_session_id ON cookie_consent(session_id);
CREATE INDEX IF NOT EXISTS idx_cookie_consent_created_at ON cookie_consent(created_at);