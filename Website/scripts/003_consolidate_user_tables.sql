-- Drop old tables and create consolidated users table
-- This script consolidates user_profiles, user_credits, and user_plantings into a more efficient structure

-- First, create the new consolidated users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  display_name TEXT,
  bio TEXT,
  avatar_url TEXT,
  
  -- Credits information
  total_credits INTEGER DEFAULT 0,
  credits_earned INTEGER DEFAULT 0,
  credits_used INTEGER DEFAULT 0,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create plantings table (keeping separate for one-to-many relationship)
CREATE TABLE IF NOT EXISTS plantings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  
  -- Planting details
  species TEXT,
  quantity INTEGER DEFAULT 1,
  planting_date DATE DEFAULT CURRENT_DATE,
  
  -- Location
  state TEXT,
  district TEXT,
  latitude NUMERIC,
  longitude NUMERIC,
  
  -- Verification
  verification_status TEXT DEFAULT 'pending',
  photo_urls TEXT[],
  credits_earned INTEGER DEFAULT 0,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Migrate data from old tables to new ones
INSERT INTO users (
  id, email, display_name, bio, avatar_url,
  total_credits, credits_earned, credits_used,
  created_at, updated_at
)
SELECT 
  COALESCE(p.id, c.user_id) as id,
  p.email,
  p.display_name,
  p.bio,
  p.avatar_url,
  COALESCE(c.total_credits, 0) as total_credits,
  COALESCE(c.credits_earned, 0) as credits_earned,
  COALESCE(c.credits_used, 0) as credits_used,
  LEAST(COALESCE(p.created_at, NOW()), COALESCE(c.created_at, NOW())) as created_at,
  GREATEST(COALESCE(p.updated_at, NOW()), COALESCE(c.updated_at, NOW())) as updated_at
FROM user_profiles p
FULL OUTER JOIN user_credits c ON p.id = c.user_id
ON CONFLICT (id) DO UPDATE SET
  email = EXCLUDED.email,
  display_name = EXCLUDED.display_name,
  bio = EXCLUDED.bio,
  avatar_url = EXCLUDED.avatar_url,
  total_credits = EXCLUDED.total_credits,
  credits_earned = EXCLUDED.credits_earned,
  credits_used = EXCLUDED.credits_used,
  updated_at = EXCLUDED.updated_at;

-- Migrate plantings data
INSERT INTO plantings (
  id, user_id, species, quantity, planting_date,
  state, district, latitude, longitude,
  verification_status, photo_urls, credits_earned,
  created_at, updated_at
)
SELECT 
  id, user_id, species, quantity, planting_date,
  state, district, latitude, longitude,
  verification_status, photo_urls, credits_earned,
  created_at, updated_at
FROM user_plantings
ON CONFLICT (id) DO NOTHING;

-- Enable RLS on new tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE plantings ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for users table
CREATE POLICY "users_select_own" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "users_insert_own" ON users
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "users_update_own" ON users
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "users_delete_own" ON users
  FOR DELETE USING (auth.uid() = id);

-- Create RLS policies for plantings table
CREATE POLICY "plantings_select_own" ON plantings
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "plantings_insert_own" ON plantings
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "plantings_update_own" ON plantings
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "plantings_delete_own" ON plantings
  FOR DELETE USING (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_plantings_user_id ON plantings(user_id);
CREATE INDEX IF NOT EXISTS idx_plantings_verification ON plantings(verification_status);
CREATE INDEX IF NOT EXISTS idx_plantings_created_at ON plantings(created_at DESC);

-- Create function to auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for auto-updating timestamps
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_plantings_updated_at
  BEFORE UPDATE ON plantings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Drop old tables (uncomment when ready)
-- DROP TABLE IF EXISTS user_plantings CASCADE;
-- DROP TABLE IF EXISTS user_credits CASCADE;
-- DROP TABLE IF EXISTS user_profiles CASCADE;
