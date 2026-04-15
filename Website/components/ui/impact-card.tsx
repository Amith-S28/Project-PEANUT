import type React from "react"
interface ImpactCardProps {
  label: string
  value: string | number
  description?: string
  icon?: React.ReactNode
}

export function ImpactCard({ label, value, description, icon }: ImpactCardProps) {
  return (
    <div className="bg-card p-6 rounded-lg border border-border/40">
      <div className="space-y-3">
        {icon && <div className="text-accent">{icon}</div>}
        <div className="text-3xl font-semibold">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
        {description && <p className="text-xs text-muted-foreground pt-2">{description}</p>}
      </div>
    </div>
  )
}
