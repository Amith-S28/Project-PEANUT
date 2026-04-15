-- Create user profiles table
CREATE TABLE IF NOT EXISTS public.user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  display_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::TEXT, NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::TEXT, NOW())
);

-- Create user credits table
CREATE TABLE IF NOT EXISTS public.user_credits (
  id UUID PRIMARY KEY DEFAULT GEN_RANDOM_UUID(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  total_credits INTEGER DEFAULT 0,
  credits_earned INTEGER DEFAULT 0,
  credits_used INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::TEXT, NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::TEXT, NOW()),
  UNIQUE(user_id)
);

-- Create user plantings table
CREATE TABLE IF NOT EXISTS public.user_plantings (
  id UUID PRIMARY KEY DEFAULT GEN_RANDOM_UUID(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  district TEXT NOT NULL,
  state TEXT NOT NULL,
  species TEXT NOT NULL,
  quantity INTEGER DEFAULT 1,
  planting_date DATE NOT NULL,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  photo_urls TEXT[],
  verification_status TEXT DEFAULT 'pending',
  credits_earned INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::TEXT, NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::TEXT, NOW())
);

-- Enable RLS
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_credits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_plantings ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "profiles_select_own"
  ON public.user_profiles FOR SELECT
  USING (AUTH.UID() = id);

CREATE POLICY "profiles_insert_own"
  ON public.user_profiles FOR INSERT
  WITH CHECK (AUTH.UID() = id);

CREATE POLICY "profiles_update_own"
  ON public.user_profiles FOR UPDATE
  USING (AUTH.UID() = id);

CREATE POLICY "profiles_delete_own"
  ON public.user_profiles FOR DELETE
  USING (AUTH.UID() = id);

-- Create RLS policies for credits
CREATE POLICY "credits_select_own"
  ON public.user_credits FOR SELECT
  USING (AUTH.UID() = user_id);

CREATE POLICY "credits_insert_own"
  ON public.user_credits FOR INSERT
  WITH CHECK (AUTH.UID() = user_id);

CREATE POLICY "credits_update_own"
  ON public.user_credits FOR UPDATE
  USING (AUTH.UID() = user_id);

-- Create RLS policies for plantings
CREATE POLICY "plantings_select_own"
  ON public.user_plantings FOR SELECT
  USING (AUTH.UID() = user_id);

CREATE POLICY "plantings_insert_own"
  ON public.user_plantings FOR INSERT
  WITH CHECK (AUTH.UID() = user_id);

CREATE POLICY "plantings_update_own"
  ON public.user_plantings FOR UPDATE
  USING (AUTH.UID() = user_id);

CREATE POLICY "plantings_delete_own"
  ON public.user_plantings FOR DELETE
  USING (AUTH.UID() = user_id);

-- Create trigger to auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (id, email)
  VALUES (NEW.id, NEW.email)
  ON CONFLICT (id) DO NOTHING;

  INSERT INTO public.user_credits (user_id, total_credits)
  VALUES (NEW.id, 0)
  ON CONFLICT (user_id) DO NOTHING;

  RETURN NEW;
END;
$$ LANGUAGE PLPGSQL SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();
