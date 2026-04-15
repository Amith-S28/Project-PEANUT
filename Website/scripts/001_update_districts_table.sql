-- Drop existing districts table and recreate with correct schema matching the CSV
DROP TABLE IF EXISTS public.districts CASCADE;

CREATE TABLE public.districts (
  id BIGSERIAL PRIMARY KEY,
  serial_number INTEGER,
  sub_district TEXT,
  district TEXT NOT NULL,
  state TEXT NOT NULL,
  total_area_sq_km NUMERIC,
  estimated_population BIGINT,
  current_green_cover_sq_km NUMERIC,
  targeted_green_cover_sq_km NUMERIC,
  greenery_deficit_sq_km NUMERIC,
  annual_mean_temp_c NUMERIC,
  annual_mean_rainfall_mm NUMERIC,
  soil_org_carbon_pct NUMERIC,
  surface_water_sq_km NUMERIC,
  population_density NUMERIC,
  greenery_deficit_pct NUMERIC,
  deficit_score NUMERIC,
  pop_density_score NUMERIC,
  priority_index NUMERIC,
  agro_eco_zone_description TEXT,
  forestry_trees TEXT,
  horticulture_plants TEXT,
  sustainable_cover TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for common queries
CREATE INDEX idx_districts_state ON public.districts(state);
CREATE INDEX idx_districts_district ON public.districts(district);
CREATE INDEX idx_districts_priority ON public.districts(priority_index DESC);
CREATE INDEX idx_districts_deficit ON public.districts(greenery_deficit_pct DESC);

-- Add comments to columns for documentation
COMMENT ON TABLE public.districts IS 'District-level data for greenery analysis and tree planting prioritization';
COMMENT ON COLUMN public.districts.priority_index IS 'Overall priority score for tree planting initiatives';
COMMENT ON COLUMN public.districts.greenery_deficit_pct IS 'Percentage deficit in greenery coverage';
COMMENT ON COLUMN public.districts.forestry_trees IS 'Recommended forestry tree species for the district';
COMMENT ON COLUMN public.districts.horticulture_plants IS 'Recommended horticulture plants for the district';
