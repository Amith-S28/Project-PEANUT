"use client"

import Link from "next/link"
import type { District } from "@/lib/db-utils"
import { MapPin, Users, TreeDeciduous } from 'lucide-react'

interface DistrictInfoProps {
  district: District
}

export function DistrictInfo({ district }: DistrictInfoProps) {
  const getTreeRecommendations = (): string[] => {
    const recommendations: string[] = []
    
    if (district.forestry_trees && district.forestry_trees !== "N/A") {
      const trees = district.forestry_trees.split(",").map(t => t.trim()).filter(t => t)
      recommendations.push(...trees.slice(0, 3))
    }
    
    if (district.horticulture_plants && district.horticulture_plants !== "N/A") {
      const plants = district.horticulture_plants.split(",").map(p => p.trim()).filter(p => p)
      recommendations.push(...plants.slice(0, 2))
    }
    
    return recommendations.slice(0, 5)
  }

  const recommendations = getTreeRecommendations()

  return (
    <div className="bg-card border border-border/40 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-accent/5 px-6 py-4 border-b border-border/40">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg leading-tight">{district.district}</h3>
            <p className="text-sm text-muted-foreground">{district.state}</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {district.estimated_population && (
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-4 h-4" />
                <span className="text-xs">Population</span>
              </div>
              <p className="text-lg font-semibold">
                {(district.estimated_population / 1000000).toFixed(2)}M
              </p>
            </div>
          )}

          {district.total_area_sq_km && (
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-muted-foreground">
                <TreeDeciduous className="w-4 h-4" />
                <span className="text-xs">Area</span>
              </div>
              <p className="text-lg font-semibold">{Number(district.total_area_sq_km).toFixed(0)} km²</p>
            </div>
          )}

          {district.current_green_cover_sq_km && (
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground">Green Cover</div>
              <p className="text-lg font-semibold">{Number(district.current_green_cover_sq_km).toFixed(0)} km²</p>
            </div>
          )}

          {district.population_density && (
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground">Density</div>
              <p className="text-lg font-semibold">{Number(district.population_density).toFixed(0)}/km²</p>
            </div>
          )}
        </div>

        {/* Priority Index */}
        {district.priority_index !== null && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Priority Index</span>
              <span className="font-semibold">{Number(district.priority_index).toFixed(1)}</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-accent transition-all"
                style={{ width: `${Math.min(district.priority_index, 100)}%` }}
              />
            </div>
          </div>
        )}

        {/* Tree Recommendations */}
        {recommendations.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Recommended Species</h4>
            <div className="space-y-2">
              {recommendations.map((tree, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-muted-foreground">{tree}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Agro-Eco Zone */}
        {district.agro_eco_zone_description && district.agro_eco_zone_description !== "N/A" && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Agro-Ecological Zone</h4>
            <p className="text-sm text-muted-foreground">{district.agro_eco_zone_description}</p>
          </div>
        )}

        {/* Action Button */}
        <Link
          href={`/plant?district=${encodeURIComponent(district.district)}&state=${encodeURIComponent(district.state)}`}
          className="block w-full text-center px-4 py-2.5 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Plant Here
        </Link>
      </div>
    </div>
  )
}
