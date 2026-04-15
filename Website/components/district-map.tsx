"use client"

import { useState, useEffect } from "react"
import type { District } from "@/lib/db-utils"

interface DistrictMapProps {
  districts: District[]
  selectedDistrict: District | null
  onSelectDistrict: (district: District | null) => void
}

export function DistrictMap({ districts, selectedDistrict, onSelectDistrict }: DistrictMapProps) {
  const [states, setStates] = useState<string[]>([])
  const [selectedState, setSelectedState] = useState<string | null>(null)
  const [stateDistricts, setStateDistricts] = useState<District[]>([])

  useEffect(() => {
    async function loadStates() {
      try {
        const response = await fetch("/api/states")
        const data = await response.json()
        setStates(data)
      } catch (error) {
        console.error("[v0] Failed to load states:", error)
      }
    }
    loadStates()
  }, [])

  useEffect(() => {
    if (selectedState) {
      const filtered = districts.filter((d) => d.state === selectedState)
      setStateDistricts(filtered)
    } else {
      setStateDistricts(districts)
    }
  }, [selectedState, districts])

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-background via-muted/20 to-background flex">
      {/* State Selector Sidebar */}
      <div className="w-64 border-r border-border/40 bg-card/50 backdrop-blur-sm overflow-y-auto">
        <div className="sticky top-0 bg-card/80 backdrop-blur-sm border-b border-border/40 p-4 z-10">
          <h3 className="font-semibold text-sm">Indian States</h3>
          <p className="text-xs text-muted-foreground mt-1">{states.length} states available</p>
        </div>
        
        <div className="p-2 space-y-1">
          {/* All States Option */}
          <button
            onClick={() => {
              setSelectedState(null)
              onSelectDistrict(null)
            }}
            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all ${
              selectedState === null
                ? "bg-accent text-accent-foreground font-medium"
                : "hover:bg-muted/50"
            }`}
          >
            All States
            <span className="text-xs ml-2 text-muted-foreground">({districts.length})</span>
          </button>

          {/* Individual States */}
          {states.map((state) => {
            const districtCount = districts.filter((d) => d.state === state).length
            return (
              <button
                key={state}
                onClick={() => {
                  setSelectedState(state)
                  onSelectDistrict(null)
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all ${
                  selectedState === state
                    ? "bg-accent text-accent-foreground font-medium"
                    : "hover:bg-muted/50"
                }`}
              >
                {state}
                <span className="text-xs ml-2 text-muted-foreground">({districtCount})</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Districts Display */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="bg-card/50 backdrop-blur-sm border-b border-border/40 p-4">
            <h3 className="font-semibold">
              {selectedState ? `${selectedState} Districts` : "All Districts"}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {stateDistricts.length} district{stateDistricts.length !== 1 ? "s" : ""} shown
            </p>
          </div>

          {/* Districts Grid */}
          <div className="flex-1 overflow-y-auto p-4">
            {stateDistricts.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center space-y-2">
                  <p className="text-muted-foreground">No districts found</p>
                  <p className="text-sm text-muted-foreground">Try selecting a different state</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {stateDistricts.map((district) => (
                  <button
                    key={district.district}
                    onClick={() => onSelectDistrict(district)}
                    className={`text-left p-4 rounded-lg border transition-all ${
                      selectedDistrict?.district === district.district
                        ? "bg-accent/10 border-accent shadow-sm"
                        : "bg-card/50 border-border/40 hover:bg-muted/50 hover:border-accent/50"
                    }`}
                  >
                    <div className="font-medium text-sm mb-2">{district.district}</div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Population</span>
                        <span className="font-medium">
                          {district.estimated_population 
                            ? `${(district.estimated_population / 100000).toFixed(1)}L`
                            : "N/A"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Area</span>
                        <span className="font-medium">
                          {district.total_area_sq_km 
                            ? `${Number(district.total_area_sq_km).toFixed(0)} km²`
                            : "N/A"}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
