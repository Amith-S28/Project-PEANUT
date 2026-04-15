import { neon } from "@neondatabase/serverless"
import fs from "fs"
import path from "path"

const sql = neon(process.env.DATABASE_URL!)

interface CSVRow {
  sub_district: string
  district: string
  state: string
  area_sq_km: string
  population_2020: string
  greenery_coverage_current_pct: string
  greenery_target_pct: string
  greenery_deficit_pct: string
  annual_mean_rainfall_mm: string
  annual_mean_max_temp_c: string
  annual_mean_min_temp_c: string
  soil_carbon_stock_tc_per_ha: string
  water_availability_mcm: string
  water_scarcity_risk: string
  indigenous_community_pct: string
  priority_index: string
  forestry_trees: string
}

function parseCSV(content: string): CSVRow[] {
  const lines = content.split("\n")
  const headers = lines[0].split(",").map((h) => h.trim())

  return lines.slice(1).map((line) => {
    const values = line.split(",").map((v) => v.trim())
    const row: Record<string, string> = {}

    headers.forEach((header, index) => {
      row[header] = values[index] || ""
    })

    return row as CSVRow
  })
}

async function seedData() {
  try {
    // Read CSV file from public folder
    const csvPath = path.join(process.cwd(), "public", "FinalFinalAnalysis.csv")
    const fileContent = fs.readFileSync(csvPath, "utf-8")

    const rows = parseCSV(fileContent)

    console.log(`[v0] Parsed ${rows.length} rows from CSV`)

    // Insert data in batches
    const batchSize = 50
    for (let i = 0; i < rows.length; i += batchSize) {
      const batch = rows.slice(i, i + batchSize)

      const values = batch
        .map(
          (row) =>
            `(
            '${row.sub_district.replace(/'/g, "''")}',
            '${row.district.replace(/'/g, "''")}',
            '${row.state.replace(/'/g, "''")}',
            ${Number.parseFloat(row.area_sq_km) || 0},
            ${Number.parseInt(row.population_2020) || 0},
            ${Number.parseFloat(row.greenery_coverage_current_pct) || 0},
            ${Number.parseFloat(row.greenery_target_pct) || 0},
            ${Number.parseFloat(row.greenery_deficit_pct) || 0},
            ${Number.parseFloat(row.annual_mean_rainfall_mm) || 0},
            ${Number.parseFloat(row.annual_mean_max_temp_c) || 0},
            ${Number.parseFloat(row.annual_mean_min_temp_c) || 0},
            ${Number.parseFloat(row.soil_carbon_stock_tc_per_ha) || 0},
            ${Number.parseFloat(row.water_availability_mcm) || 0},
            '${row.water_scarcity_risk.replace(/'/g, "''")}',
            ${Number.parseFloat(row.indigenous_community_pct) || 0},
            ${Number.parseFloat(row.priority_index) || 0},
            '${row.forestry_trees.replace(/'/g, "''")}'
          )`,
        )
        .join(",")

      const insertQuery = `
        INSERT INTO districts (
          sub_district, district, state, area_sq_km, population_2020,
          greenery_coverage_current_pct, greenery_target_pct, greenery_deficit_pct,
          annual_mean_rainfall_mm, annual_mean_max_temp_c, annual_mean_min_temp_c,
          soil_carbon_stock_tc_per_ha, water_availability_mcm, water_scarcity_risk,
          indigenous_community_pct, priority_index, forestry_trees
        ) VALUES ${values}
      `

      await sql(insertQuery)
      console.log(`[v0] Inserted batch ${Math.floor(i / batchSize) + 1}`)
    }

    console.log("[v0] Data seeding completed successfully")
  } catch (error) {
    console.error("[v0] Error seeding data:", error)
    process.exit(1)
  }
}

seedData()
