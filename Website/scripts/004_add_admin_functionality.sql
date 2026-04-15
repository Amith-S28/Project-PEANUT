-- Add is_admin column to users table
ALTER TABLE users ADD COLUMN IF NOT EXISTS is_admin BOOLEAN DEFAULT FALSE;

-- Create an admin user (you'll need to sign up first, then update this with your user_id)
-- UPDATE users SET is_admin = TRUE WHERE email = 'your-admin-email@example.com';

-- Add RLS policy for admins to view all plantings
CREATE POLICY "admins_select_all_plantings" ON plantings
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid() AND users.is_admin = TRUE
    )
  );

-- Add RLS policy for admins to update any planting
CREATE POLICY "admins_update_all_plantings" ON plantings
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid() AND users.is_admin = TRUE
    )
  );

-- Add RLS policy for admins to view all users
CREATE POLICY "admins_select_all_users" ON users
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users AS u
      WHERE u.id = auth.uid() AND u.is_admin = TRUE
    )
  );

-- Add RLS policy for admins to update any user credits
CREATE POLICY "admins_update_user_credits" ON users
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users AS u
      WHERE u.id = auth.uid() AND u.is_admin = TRUE
    )
  );

-- Create index for faster admin queries
CREATE INDEX IF NOT EXISTS idx_users_is_admin ON users(is_admin) WHERE is_admin = TRUE;
CREATE INDEX IF NOT EXISTS idx_plantings_verification_status ON plantings(verification_status);
CREATE INDEX IF NOT EXISTS idx_plantings_created_at ON plantings(created_at DESC);
