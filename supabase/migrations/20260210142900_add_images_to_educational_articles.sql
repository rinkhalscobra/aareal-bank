/*
  # Add Images to Educational Articles

  ## Overview
  This migration updates existing educational articles with appropriate featured images.
  Each article gets a relevant, high-quality image that matches its content and topic.

  ## Changes
    - Updates image_url field for all existing educational articles
    - Uses professional financial and business imagery from Pexels

  ## Notes
    - Images are sourced from Pexels, a free stock photo service
    - Each image is selected to match the article's topic and content
    - All images are high-resolution and professional quality
*/

-- Update educational articles with appropriate images
UPDATE educational_articles SET image_url = 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1200' WHERE slug = 'building-your-first-budget';
UPDATE educational_articles SET image_url = 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1200' WHERE slug = 'emergency-fund-essentials';
UPDATE educational_articles SET image_url = 'https://images.pexels.com/photos/4968382/pexels-photo-4968382.jpeg?auto=compress&cs=tinysrgb&w=1200' WHERE slug = 'understanding-credit-scores';
UPDATE educational_articles SET image_url = 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200' WHERE slug = 'investing-101-getting-started';
UPDATE educational_articles SET image_url = 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1200' WHERE slug = 'power-of-compound-interest';
UPDATE educational_articles SET image_url = 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=1200' WHERE slug = 'debt-snowball-vs-debt-avalanche';
