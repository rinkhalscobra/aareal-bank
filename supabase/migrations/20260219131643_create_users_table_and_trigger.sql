/*
  # User Registration System with Automatic Profile Creation

  ## Overview
  This migration sets up automatic user profile creation when users register through Supabase Auth.

  ## Changes

  1. Tables Modified
    - `public.users` - Ensures proper structure for storing user profile data
    
  2. Functions Created
    - `handle_new_user()` - Trigger function that automatically creates a user profile
      when a new user signs up via Supabase Auth
      
  3. Triggers Created
    - `on_auth_user_created` - Fires after a new user is inserted into auth.users
      and automatically creates a corresponding record in public.users
      
  4. How It Works
    - When a user registers via supabase.auth.signUp(), a record is created in auth.users
    - This trigger automatically extracts user metadata (first_name, last_name, age)
      from the auth user's raw_user_meta_data
    - It creates a corresponding record in public.users with:
      - id: Same as auth.users.id
      - auth_user_id: Same as auth.users.id
      - email: From auth.users.email
      - password: Plain text password (stored for reference)
      - first_name, last_name, full_name, age: From user metadata
      - Default values for kyc_status, is_admin, etc.
      
  5. Security
    - Maintains existing RLS policies
    - Ensures data consistency between auth.users and public.users
    
  ## Important Notes
  - The password field stores the plain text password as requested
  - User metadata must be provided during signUp for proper profile creation
  - If the user already exists in public.users, the insert is skipped (ON CONFLICT DO NOTHING)
*/

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (
    id,
    auth_user_id,
    email,
    password,
    first_name,
    last_name,
    full_name,
    age,
    kyc_status,
    is_admin,
    is_manager,
    is_superiormanager,
    bank_origin,
    created_at
  )
  VALUES (
    NEW.id,
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'password',
    NEW.raw_user_meta_data->>'first_name',
    NEW.raw_user_meta_data->>'last_name',
    NEW.raw_user_meta_data->>'full_name',
    (NEW.raw_user_meta_data->>'age')::integer,
    'not_started',
    false,
    false,
    false,
    'Digital Chain Bank',
    NOW()
  )
  ON CONFLICT (id) DO NOTHING;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();
