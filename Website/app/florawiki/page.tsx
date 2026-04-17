"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from 'next/navigation'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AlertCircle } from 'lucide-react'
import { Leaf } from 'lucide-react'
import type { District } from "@/lib/db-utils"
import { getRecommendedSpecies } from "@/lib/tree-species"

export default function PlantPage() {
  const searchParams = useSearchParams()
  const districtParam = searchParams.get("district")

  const [states, setStates] = useState<string[]>([])
  const [selectedState, setSelectedState] = useState("")
  const [districtsByState, setDistrictsByState] = useState<District[]>([])
  const [selectedDistrict, setSelectedDistrict] = useState<string>("")
  const [selectedSubDistrict, setSelectedSubDistrict] = useState<District | null>(null)
  const [subDistrictsInDistrict, setSubDistrictsInDistrict] = useState<District[]>([])
  const [treeRecommendations, setTreeRecommendations] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadStates() {
      try {
        console.log("[v0] Fetching states from /api/states")
        const response = await fetch("/api/states")
        console.log("[v0] Response status:", response.status)
        
        if (!response.ok) {
          const errorText = await response.text()
          console.error("[v0] Failed to load states:", errorText)
          setError(`Failed to load states: ${response.status}`)
          setLoading(false)
          return
        }
        
        const data = await response.json()
        console.log("[v0] States data:", data)
        
        if (!Array.isArray(data) || data.length === 0) {
          console.error("[v0] No states found in response")
          setError("No states available")
          setLoading(false)
          return
        }
        
        setStates(data)
        setSelectedState(data[0])
        setError(null)
      } catch (error) {
        console.error("[v0] Exception loading states:", error)
        setError(`Error: ${error}`)
      } finally {
        setLoading(false)
      }
    }
    loadStates()
  }, [])

  useEffect(() => {
    async function loadDistricts() {
      if (!selectedState) return
      try {
        console.log("[v0] Fetching districts for state:", selectedState)
        const response = await fetch(`/api/districts?state=${encodeURIComponent(selectedState)}&limit=1000`)
        const data = await response.json()
        console.log("[v0] Districts data count:", data.length)
        setDistrictsByState(data)

        if (data.length > 0) {
          const uniqueDistricts = [...new Set(data.map((d: District) => d.district))]
          setSelectedDistrict(uniqueDistricts[0])
        }
      } catch (error) {
        console.error("[v0] Failed to load districts:", error)
      }
    }
    loadDistricts()
  }, [selectedState])

  useEffect(() => {
    if (selectedDistrict && districtsByState.length > 0) {
      const subDistricts = districtsByState.filter(d => d.district === selectedDistrict)
      setSubDistrictsInDistrict(subDistricts)
      if (subDistricts.length > 0) {
        setSelectedSubDistrict(subDistricts[0])
      }
    }
  }, [selectedDistrict, districtsByState])

  useEffect(() => {
    if (selectedSubDistrict) {
      const datasetTrees = selectedSubDistrict.forestry_trees
        ? selectedSubDistrict.forestry_trees
            .split(",")
            .map((t) => t.trim())
            .filter((t) => t && t !== "N/A")
        : []

      const climateTrees = getRecommendedSpecies(
        selectedSubDistrict.annual_mean_rainfall_mm,
        selectedSubDistrict.annual_mean_temp_c
      )

      const allRecommendations = [...datasetTrees, ...climateTrees]
      const uniqueRecommendations = [...new Set(allRecommendations)]
      
      setTreeRecommendations(uniqueRecommendations.slice(0, 12))
    }
  }, [selectedSubDistrict])

  if (loading) {
    return (
      <>
        <Header />
        <main className="bg-background min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="text-lg text-muted-foreground">Loading...</div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  if (error) {
    return (
      <>
        <Header />
        <main className="bg-background min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <AlertCircle className="w-12 h-12 text-destructive mx-auto" />
            <div className="text-lg text-muted-foreground">{error}</div>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-accent text-accent-foreground rounded-lg"
            >
              Retry
            </button>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-background via-muted/10 to-background min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="mb-12 animate-fade-in">
            <h1 className="text-4xl font-semibold mb-2">Find Your Perfect Trees</h1>
            <p className="text-lg text-muted-foreground">
              Get species recommendations tailored to your local climate and soil conditions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-slide-up">
            <div className="space-y-3">
              <label className="text-sm font-semibold text-accent">State</label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                size={8}
                className="w-full px-4 py-2 border-2 border-border hover:border-accent/30 rounded-lg bg-card text-foreground overflow-y-auto focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                {states.length === 0 ? (
                  <option value="">No states available</option>
                ) : (
                  states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))
                )}
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-accent">District</label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                size={8}
                className="w-full px-4 py-2 border-2 border-border hover:border-accent/30 rounded-lg bg-card text-foreground overflow-y-auto focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                {[...new Set(districtsByState.map(d => d.district))].map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-accent">Sub-district ({subDistrictsInDistrict.length})</label>
              <select
                value={selectedSubDistrict ? `${selectedSubDistrict.district}-${selectedSubDistrict.sub_district}` : ""}
                onChange={(e) => {
                  const [districtName, subDistrictName] = e.target.value.split('-')
                  const subDistrict = subDistrictsInDistrict.find((d) => d.district === districtName && d.sub_district === subDistrictName)
                  if (subDistrict) {
                    setSelectedSubDistrict(subDistrict)
                  }
                }}
                size={8}
                className="w-full px-4 py-2 border-2 border-border hover:border-accent/30 rounded-lg bg-card text-foreground overflow-y-auto focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                {subDistrictsInDistrict.map((subDistrict, idx) => (
                  <option key={idx} value={`${subDistrict.district}-${subDistrict.sub_district}`}>
                    {subDistrict.sub_district}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {selectedSubDistrict && (
            <div className="grid md:grid-cols-4 gap-4 mb-12 bg-gradient-to-br from-accent/5 via-muted/30 to-accent/5 p-6 rounded-lg border border-accent/20 shadow-lg animate-scale-in">
              <div className="bg-card/80 p-4 rounded-lg hover:bg-card transition-colors duration-200">
                <div className="text-sm text-muted-foreground mb-1">Mean Rainfall</div>
                <div className="text-2xl font-semibold text-accent">{Number(selectedSubDistrict.annual_mean_rainfall_mm).toFixed(0)} mm</div>
              </div>
              <div className="bg-card/80 p-4 rounded-lg hover:bg-card transition-colors duration-200">
                <div className="text-sm text-muted-foreground mb-1">Temperature</div>
                <div className="text-2xl font-semibold text-accent">{Number(selectedSubDistrict.annual_mean_temp_c).toFixed(1)}°C</div>
              </div>
              <div className="bg-card/80 p-4 rounded-lg hover:bg-card transition-colors duration-200">
                <div className="text-sm text-muted-foreground mb-1">Soil Carbon</div>
                <div className="text-2xl font-semibold text-accent">{Number(selectedSubDistrict.soil_org_carbon_pct).toFixed(1)}%</div>
              </div>
              <div className="bg-card/80 p-4 rounded-lg hover:bg-card transition-colors duration-200">
                <div className="text-sm text-muted-foreground mb-1">Green Deficit</div>
                <div className="text-2xl font-semibold text-accent">
                  {(selectedSubDistrict.greenery_deficit_pct * 100).toFixed(0)}%
                </div>
              </div>
            </div>
          )}

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-8">Recommended Species</h2>

            {treeRecommendations.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {treeRecommendations.map((species, idx) => (
                  <div
                    key={idx}
                    className="bg-card border-2 border-border/40 rounded-lg p-6 space-y-4 hover:border-accent/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold flex-1">{species.split("(")[0].trim()}</h3>
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Leaf className="w-5 h-5 text-accent" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground italic">{species}</p>
                    <div className="pt-2 border-t border-border/40">
                      <p className="text-xs text-muted-foreground">
                        Well-suited for {selectedSubDistrict?.agro_eco_zone_description || "this region"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-muted/30 p-6 rounded-lg border border-border/40 text-center">
                <p className="text-muted-foreground">Select a district to see recommendations</p>
              </div>
            )}

            <div className="bg-gradient-to-r from-accent/5 to-transparent p-6 rounded-lg border-l-4 border-accent space-y-4 shadow-md">
              <h3 className="font-semibold flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-accent" />
                Why These Species?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {selectedSubDistrict
                  ? `These recommendations are matched to ${selectedSubDistrict.district}'s rainfall patterns, soil composition, and temperature profile. Each species supports local biodiversity while thriving in your region's climate.`
                  : "Select a district to see personalized recommendations based on climate and soil data."}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-accent/10 to-accent/5 border-2 border-accent/20 rounded-lg p-8 text-center space-y-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold">Ready to Plant?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Upload photos of your planted trees with location data, and we'll verify and track your impact.
            </p>
            <a
              href="/upload"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Start Upload
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
