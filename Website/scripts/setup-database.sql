-- Create districts table with all columns from the CSV
CREATE TABLE IF NOT EXISTS districts (
  id BIGSERIAL PRIMARY KEY,
  sub_district TEXT,
  district TEXT,
  state TEXT,
  area_sq_km DECIMAL(10, 2),
  population_2020 BIGINT,
  greenery_coverage_current_pct DECIMAL(5, 2),
  greenery_target_pct DECIMAL(5, 2),
  greenery_deficit_pct DECIMAL(5, 2),
  annual_mean_rainfall_mm DECIMAL(7, 2),
  annual_mean_max_temp_c DECIMAL(5, 2),
  annual_mean_min_temp_c DECIMAL(5, 2),
  soil_carbon_stock_tc_per_ha DECIMAL(7, 2),
  water_availability_mcm DECIMAL(10, 2),
  water_scarcity_risk TEXT,
  indigenous_community_pct DECIMAL(5, 2),
  priority_index DECIMAL(5, 2),
  forestry_trees TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index on state and district for faster queries
CREATE INDEX IF NOT EXISTS idx_districts_state ON districts(state);
CREATE INDEX IF NOT EXISTS idx_districts_district ON districts(district);
CREATE INDEX IF NOT EXISTS idx_districts_priority ON districts(priority_index DESC);
