import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DataMethodsPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-semibold mb-8">Data & Methodology</h1>

          {/* Overview */}
          <div className="bg-card border border-border/40 rounded-lg p-8 mb-12 space-y-4">
            <h2 className="text-2xl font-semibold">Transparent & Open Source</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vriddhi's credit system and environmental calculations are built on publicly available data and open
              methodologies. All assumptions and formulas are documented below for accountability and reproducibility.
            </p>
          </div>

          {/* Data Sources */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Data Sources</h2>

            <div className="space-y-6">
              {[
                {
                  title: "Green Cover & Deficit",
                  source: "Forest Survey of India (FSI) biennial reports",
                  description: "Current green cover and targeted green cover percentages at district level.",
                },
                {
                  title: "Climate Data",
                  source: "Indian Meteorological Department (IMD)",
                  description: "Mean annual rainfall, temperature, and seasonal patterns by district.",
                },
                {
                  title: "Soil Properties",
                  source: "National Bureau of Soil Survey & Land Use Planning",
                  description: "Soil organic carbon, texture, pH, and drainage characteristics.",
                },
                {
                  title: "Water Resources",
                  source: "Ministry of Water Resources",
                  description: "Surface water availability, groundwater tables, and monsoon rainfall.",
                },
                {
                  title: "Biodiversity",
                  source: "Wildlife Institute of India, IUCN Red List",
                  description: "Native species lists, threat status, and habitat preferences.",
                },
              ].map((item, idx) => (
                <div key={idx} className="border-l-4 border-accent pl-6 py-3">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-accent mb-2">{item.source}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Credit Formula */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Credit Calculation Formula</h2>

            <div className="bg-muted/30 border border-border/40 rounded-lg p-6 space-y-4">
              <div className="bg-background p-4 rounded font-mono text-sm overflow-x-auto">
                Total Credits = Base Credits × (1 + Priority Index / 100) × Care Multiplier
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-sm text-accent">Base Credits: 25-100</h3>
                  <p className="text-sm text-muted-foreground">
                    Depends on species category (forestry = 100, horticulture = 75, cover = 50).
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-sm text-accent">Priority Index: 0-100</h3>
                  <p className="text-sm text-muted-foreground">
                    Weighted score combining green deficit (40%), rainfall scarcity (30%), population density (20%), and
                    surface water availability (10%).
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-sm text-accent">Care Multiplier: 1.0-1.5x</h3>
                  <p className="text-sm text-muted-foreground">
                    1.0x initial (verified planting), 1.15x at 6-month survival, 1.3x at 12-month, 1.5x at 24-month
                    follow-up.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Verification Process */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Verification Process</h2>

            <div className="space-y-4">
              {[
                "Geo-tagged photo location validated against selected district boundaries.",
                "Timestamp checked for reasonable planting date (not future, not anomalous gaps).",
                "Photo quality assessed: clear vegetation, daylight, distinguishable tree/planting setup.",
                "Repeat submission fraud checks: flagging multiple identical/similar submissions in short timeframes.",
                "Manual review for edge cases: anomalies, boundary cases, or exceptional high-credit claims.",
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 bg-card border border-border/40 rounded-lg p-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-semibold text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-muted-foreground text-sm pt-1">{step}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
