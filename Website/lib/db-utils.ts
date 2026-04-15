export interface District {
  id: number
  serial_number: number | null
  sub_district: string | null
  district: string
  state: string
  total_area_sq_km: number | null
  estimated_population: number | null
  current_green_cover_sq_km: number | null
  targeted_green_cover_sq_km: number | null
  greenery_deficit_sq_km: number | null
  annual_mean_temp_c: number | null
  annual_mean_rainfall_mm: number | null
  soil_org_carbon_pct: number | null
  surface_water_sq_km: number | null
  population_density: number | null
  greenery_deficit_pct: number | null
  deficit_score: number | null
  pop_density_score: number | null
  priority_index: number | null
  agro_eco_zone_description: string | null
  forestry_trees: string | null
  horticulture_plants: string | null
  sustainable_cover: string | null
  created_at?: string
}

export async function fetchDistricts(state?: string, district?: string, limit = 100, offset = 0): Promise<District[]> {
  const params = new URLSearchParams()
  if (state) params.append("state", state)
  if (district) params.append("district", district)
  params.append("limit", limit.toString())
  params.append("offset", offset.toString())

  const response = await fetch(`/api/districts?${params.toString()}`)
  if (!response.ok) throw new Error("Failed to fetch districts")
  return response.json()
}

export async function fetchStates(): Promise<string[]> {
  const response = await fetch("/api/states")
  if (!response.ok) throw new Error("Failed to fetch states")
  return response.json()
}

export async function fetchStats() {
  const response = await fetch("/api/districts/stats")
  if (!response.ok) throw new Error("Failed to fetch stats")
  return response.json()
}

export function getTreeRecommendations(district: District): string[] {
  const recommendations: string[] = []

  // Parse forestry trees from the district data
  if (district.forestry_trees && district.forestry_trees !== "N/A") {
    const trees = district.forestry_trees
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t)
    recommendations.push(...trees.slice(0, 3))
  }

  // Add horticulture plants if available
  if (district.horticulture_plants && district.horticulture_plants !== "N/A") {
    const plants = district.horticulture_plants
      .split(",")
      .map((p) => p.trim())
      .filter((p) => p)
    recommendations.push(...plants.slice(0, 2))
  }

  return recommendations.slice(0, 5)
}
