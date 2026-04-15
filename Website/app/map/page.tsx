"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DistrictMap } from "@/components/district-map"
import { FilterPanel } from "@/components/filter-panel"
import { DistrictInfo } from "@/components/district-info"
import type { District } from "@/lib/db-utils"

export default function MapPage() {
  const [districts, setDistricts] = useState<District[]>([])
  const [filteredDistricts, setFilteredDistricts] = useState<District[]>([])
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null)
  const [showFilters, setShowFilters] = useState(false)
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    urgency: false,
    rainfall: false,
    population: false,
    water: false,
    indigenous: false,
  })

  useEffect(() => {
    async function loadDistricts() {
      try {
        setLoading(true)
        const allDistricts = []
        let page = 0
        const pageSize = 1000
        let hasMore = true

        while (hasMore) {
          const offset = page * pageSize
          const response = await fetch(`/api/districts?limit=${pageSize}&offset=${offset}`)
          const data = await response.json()
          
          if (data && data.length > 0) {
            allDistricts.push(...data)
            console.log(`[v0] Map: Fetched page ${page + 1}: ${data.length} districts, Total: ${allDistricts.length}`)
            page++
            hasMore = data.length === pageSize
          } else {
            hasMore = false
          }
        }

        const districtMap = new Map()
        for (const data of allDistricts) {
          if (!districtMap.has(data.district)) {
            districtMap.set(data.district, {
              ...data,
              estimated_population: Number(data.estimated_population || 0),
              total_area_sq_km: Number(data.total_area_sq_km || 0),
              current_green_cover_sq_km: Number(data.current_green_cover_sq_km || 0),
              priority_index: Number(data.priority_index || 0),
              count: 1
            })
          } else {
            const existing = districtMap.get(data.district)
            existing.estimated_population += Number(data.estimated_population || 0)
            existing.total_area_sq_km += Number(data.total_area_sq_km || 0)
            existing.current_green_cover_sq_km += Number(data.current_green_cover_sq_km || 0)
            existing.priority_index = (existing.priority_index * existing.count + Number(data.priority_index || 0)) / (existing.count + 1)
            existing.count += 1
          }
        }
        
        const uniqueDistricts = Array.from(districtMap.values())

        console.log("[v0] Map: Total unique districts loaded:", uniqueDistricts.length)
        setDistricts(uniqueDistricts)
        setFilteredDistricts(uniqueDistricts)
      } catch (error) {
        console.error("[v0] Failed to load districts:", error)
      } finally {
        setLoading(false)
      }
    }
    loadDistricts()
  }, [])

  useEffect(() => {
    let filtered = [...districts]

    if (filters.urgency) {
      filtered = filtered.filter((d) => (d.priority_index || 0) > 40)
    }
    if (filters.rainfall) {
      filtered = filtered.filter((d) => (d.annual_mean_rainfall_mm || 0) < 900)
    }
    if (filters.population) {
      filtered = filtered.filter((d) => (d.estimated_population || 0) > 500000)
    }
    if (filters.water) {
      filtered = filtered.filter((d) => (d.surface_water_sq_km || 0) > 100)
    }

    setFilteredDistricts(filtered)
  }, [filters, districts])

  const handleFilterChange = (key: "urgency" | "rainfall" | "population" | "water" | "indigenous") => {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const activeFilterCount = Object.values(filters).filter(Boolean).length

  if (loading) {
    return (
      <>
        <Header />
        <main className="bg-background min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="text-lg text-muted-foreground">Loading district data...</div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-semibold mb-2">India Impact Map</h1>
              <p className="text-muted-foreground">
                {filteredDistricts.length} of {districts.length} districts
                {activeFilterCount > 0 && ` (${activeFilterCount} filter${activeFilterCount > 1 ? "s" : ""} active)`}
              </p>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              Filters {activeFilterCount > 0 && <span className="ml-2 text-accent">•</span>}
            </button>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Main Map */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border/40 rounded-lg overflow-hidden h-[600px]">
                <DistrictMap
                  districts={filteredDistricts}
                  selectedDistrict={selectedDistrict}
                  onSelectDistrict={setSelectedDistrict}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Filter Panel */}
              {showFilters && (
                <FilterPanel
                  filters={filters}
                  onChange={handleFilterChange}
                  onReset={() =>
                    setFilters({
                      urgency: false,
                      rainfall: false,
                      population: false,
                      water: false,
                      indigenous: false,
                    })
                  }
                />
              )}

              {/* District Info */}
              {selectedDistrict && <DistrictInfo district={selectedDistrict} />}

              {!selectedDistrict && !showFilters && (
                <div className="bg-muted/30 p-6 rounded-lg border border-border/40 text-center space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Select a state from the left sidebar, then choose a district to see details
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
