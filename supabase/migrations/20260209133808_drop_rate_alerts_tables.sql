/*
  # Drop Rate Alerts Tables

  1. Tables Removed
    - `alert_notifications` - Notification history table (dropped first due to foreign key)
    - `rate_alerts` - Rate alerts table
    
  2. Security
    - RLS policies are automatically dropped with tables
    
  3. Indexes
    - All indexes are automatically dropped with tables
    
  4. Notes
    - This migration completely removes all rate alert functionality
    - Data will be permanently deleted
*/

DROP TABLE IF EXISTS alert_notifications CASCADE;
DROP TABLE IF EXISTS rate_alerts CASCADE;