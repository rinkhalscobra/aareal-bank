/*
  # Create news articles table

  1. New Tables
    - `news_articles`
      - `id` (uuid, primary key) - Unique identifier for each article
      - `title` (text, not null) - Article title
      - `description` (text) - Article description/summary
      - `url` (text, unique, not null) - Article URL (unique to prevent duplicates)
      - `image_url` (text) - Article image URL
      - `published_at` (timestamptz) - When the article was published
      - `source_name` (text) - Source name (e.g., "Yahoo Finance")
      - `category` (text, not null) - Category: banking, economy, or crypto
      - `created_at` (timestamptz) - When the record was created in our database
      - `updated_at` (timestamptz) - When the record was last updated

  2. Security
    - Enable RLS on `news_articles` table
    - Add policy for public read access (news is public information)

  3. Indexes
    - Index on `category` for faster filtering
    - Index on `created_at` for sorting by freshness
    - Unique index on `url` to prevent duplicate articles

  4. Important Notes
    - Articles are cached in the database and refreshed every 20 minutes
    - Only articles with images are stored
    - Public read access since financial news is public information
*/

CREATE TABLE IF NOT EXISTS news_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text DEFAULT '',
  url text UNIQUE NOT NULL,
  image_url text DEFAULT '',
  published_at timestamptz DEFAULT now(),
  source_name text DEFAULT '',
  category text NOT NULL CHECK (category IN ('banking', 'economy', 'crypto')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_news_articles_category ON news_articles(category);
CREATE INDEX IF NOT EXISTS idx_news_articles_created_at ON news_articles(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_news_articles_published_at ON news_articles(published_at DESC);

-- Enable RLS
ALTER TABLE news_articles ENABLE ROW LEVEL SECURITY;

-- Allow public read access (news is public)
CREATE POLICY "Anyone can read news articles"
  ON news_articles
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Only the service role can insert/update/delete (via edge function)
CREATE POLICY "Service role can manage news articles"
  ON news_articles
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);