import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Leaf, Target, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-semibold mb-8">About Vriddhi</h1>

          {/* Mission */}
          <div className="bg-card border border-border/40 rounded-lg p-8 mb-12 space-y-4">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vriddhi empowers individuals and communities to plant trees strategically using climate and biodiversity
              data, creating measurable environmental impact through verified, transparent carbon credit tracking.
            </p>
          </div>

          {/* Approach */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Target,
                title: "Data-Driven",
                description: "AI-powered species recommendations matched to local climate and soil conditions.",
              },
              {
                icon: Leaf,
                title: "Verified Impact",
                description: "Geo-tagged photo verification ensures authenticity of every planting.",
              },
              {
                icon: Globe,
                title: "Transparent",
                description: "Open-source methodologies and accessible data on credit calculations.",
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-card border border-border/40 rounded-lg p-6 space-y-3">
                  <Icon className="w-8 h-8 text-accent" />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              )
            })}
          </div>

          {/* Partners */}
          <div className="bg-muted/30 border border-border/40 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Our Partners</h2>
            <p className="text-muted-foreground mb-6">
              Vriddhi works with leading environmental, biodiversity, and climate research organizations:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <p>• Ministry of Environment, Forest & Climate Change</p>
              <p>• Indian Institute of Forest Management</p>
              <p>• The Nature Conservancy</p>
              <p>• Wildlife Institute of India</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
