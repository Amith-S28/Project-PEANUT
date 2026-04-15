-- Drop the problematic policies that cause infinite recursion
DROP POLICY IF EXISTS "admins_select_all_users" ON users;
DROP POLICY IF EXISTS "admins_update_user_credits" ON users;
DROP POLICY IF EXISTS "admins_select_all_plantings" ON plantings;
DROP POLICY IF EXISTS "admins_update_all_plantings" ON plantings;

-- Create a security definer function that bypasses RLS to check admin status
-- This prevents infinite recursion by not triggering RLS policies
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM users
    WHERE id = auth.uid() AND is_admin = TRUE
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Now recreate the policies using the security definer function
-- This avoids infinite recursion because the function bypasses RLS

-- Policy for admins to view all plantings
CREATE POLICY "admins_select_all_plantings" ON plantings
  FOR SELECT
  TO authenticated
  USING (is_admin());

-- Policy for admins to update any planting
CREATE POLICY "admins_update_all_plantings" ON plantings
  FOR UPDATE
  TO authenticated
  USING (is_admin());

-- Policy for users to view their own profile (no recursion since it checks auth.uid())
CREATE POLICY "users_select_own_profile" ON users
  FOR SELECT
  TO authenticated
  USING (id = auth.uid());

-- Policy for admins to view all users
CREATE POLICY "admins_select_all_users" ON users
  FOR SELECT
  TO authenticated
  USING (is_admin());

-- Policy for admins to update any user credits
CREATE POLICY "admins_update_user_credits" ON users
  FOR UPDATE
  TO authenticated
  USING (is_admin());

-- Grant execute permission on the function to authenticated users
GRANT EXECUTE ON FUNCTION is_admin() TO authenticated;

COMMENT ON FUNCTION is_admin() IS 'Security definer function to check if current user is admin without triggering RLS recursion';
