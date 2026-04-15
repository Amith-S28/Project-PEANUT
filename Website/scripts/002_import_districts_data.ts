import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { parse } from 'csv-parse/sync'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function importDistricts() {
  try {
    console.log('[v0] Reading CSV file...')
    const csvContent = readFileSync('public/data/FinalFinalAnalysis.csv', 'utf-8')
    
    console.log('[v0] Parsing CSV data...')
    const records = parse(csvContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true
    })

    console.log(`[v0] Found ${records.length} districts to import`)

    // Transform CSV records to match database schema
    const districts = records.map((record: any) => ({
      serial_number: parseInt(record['Serial Number']) || null,
      sub_district: record.sub_district || null,
      district: record.district,
      state: record.state,
      total_area_sq_km: parseFloat(record.total_area_sq_km) || null,
      estimated_population: parseInt(record.estimated_population) || null,
      current_green_cover_sq_km: parseFloat(record.current_green_cover_sq_km) || null,
      targeted_green_cover_sq_km: parseFloat(record.targeted_green_cover_sq_km) || null,
      greenery_deficit_sq_km: parseFloat(record.greenery_deficit_sq_km) || null,
      annual_mean_temp_c: parseFloat(record.annual_mean_temp_c) || null,
      annual_mean_rainfall_mm: parseFloat(record.annual_mean_rainfall_mm) || null,
      soil_org_carbon_pct: parseFloat(record.soil_org_carbon_pct) || null,
      surface_water_sq_km: parseFloat(record.surface_water_sq_km) || null,
      population_density: parseFloat(record.population_density) || null,
      greenery_deficit_pct: parseFloat(record.greenery_deficit_pct) || null,
      deficit_score: parseFloat(record.deficit_score) || null,
      pop_density_score: parseFloat(record.pop_density_score) || null,
      priority_index: parseFloat(record.priority_index) || null,
      agro_eco_zone_description: record.agro_eco_zone_description || null,
      forestry_trees: record.forestry_trees || null,
      horticulture_plants: record.horticulture_plants || null,
      sustainable_cover: record.sustainable_cover || null
    }))

    console.log('[v0] Clearing existing data...')
    const { error: deleteError } = await supabase
      .from('districts')
      .delete()
      .neq('id', 0) // Delete all records

    if (deleteError && deleteError.code !== 'PGRST116') {
      console.error('[v0] Error clearing data:', deleteError)
    }

    // Insert in batches of 100 to avoid timeout
    const batchSize = 100
    let imported = 0

    for (let i = 0; i < districts.length; i += batchSize) {
      const batch = districts.slice(i, i + batchSize)
      console.log(`[v0] Importing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(districts.length / batchSize)}...`)
      
      const { error: insertError } = await supabase
        .from('districts')
        .insert(batch)

      if (insertError) {
        console.error('[v0] Error inserting batch:', insertError)
        throw insertError
      }

      imported += batch.length
      console.log(`[v0] Progress: ${imported}/${districts.length} districts imported`)
    }

    console.log('[v0] ✓ Successfully imported all districts!')
    
    // Verify import
    const { count } = await supabase
      .from('districts')
      .select('*', { count: 'exact', head: true })
    
    console.log(`[v0] Total districts in database: ${count}`)

  } catch (error) {
    console.error('[v0] Import failed:', error)
    throw error
  }
}

importDistricts()
