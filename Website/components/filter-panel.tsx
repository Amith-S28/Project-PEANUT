"use client"

interface FilterPanelProps {
  filters: {
    urgency: boolean
    rainfall: boolean
    population: boolean
    water: boolean
    indigenous: boolean
  }
  onChange: (key: string) => void
  onReset: () => void
}

export function FilterPanel({ filters, onChange, onReset }: FilterPanelProps) {
  return (
    <div className="bg-card border border-border/40 rounded-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Filters</h3>
        <button onClick={onReset} className="text-xs text-muted-foreground hover:text-foreground">
          Reset
        </button>
      </div>

      <div className="space-y-4">
        {[
          { key: "urgency", label: "High Priority", description: "Priority index > 70" },
          { key: "rainfall", label: "Low Rainfall", description: "< 900mm annually" },
          { key: "population", label: "High Population", description: "> 2M people" },
          { key: "water", label: "Limited Water", description: "< 300km² surface water" },
          { key: "indigenous", label: "Indigenous Focus", description: "Native species only" },
        ].map((filter) => (
          <label key={filter.key} className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={filters[filter.key as keyof typeof filters]}
              onChange={() => onChange(filter.key)}
              className="mt-1 w-4 h-4 rounded border-border accent-accent"
            />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium">{filter.label}</div>
              <div className="text-xs text-muted-foreground">{filter.description}</div>
            </div>
          </label>
        ))}
      </div>
    </div>
  )
}
