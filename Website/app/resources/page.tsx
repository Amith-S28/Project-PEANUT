import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookOpen, Leaf } from "lucide-react"

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-semibold mb-8">Resources & Guidance</h1>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {[
                {
                  q: "What species should I plant?",
                  a: "Use our recommendations tool to get species matched to your local climate, soil, and water availability. Always consult local guidelines before planting near natural habitats.",
                },
                {
                  q: "How are credits calculated?",
                  a: "Credits are based on local green deficit (urgency), tree species, verified photos, and long-term care. Higher-priority districts yield more credits per tree.",
                },
                {
                  q: "What counts as a verified planting?",
                  a: "Photos must include geo-tagged location data matching your selected district, clear timestamp, and visible tree/planting evidence. Review typically takes 48 hours.",
                },
                {
                  q: "Can I earn more credits over time?",
                  a: "Yes. Upload follow-up photos showing tree survival at 6, 12, and 24 months to unlock care multipliers (up to 1.5x base credits).",
                },
                {
                  q: "Is there a leaderboard?",
                  a: "An opt-in leaderboard shows top contributors. It's aggregated by district to encourage regional impact without compromising privacy.",
                },
              ].map((faq, idx) => (
                <details key={idx} className="bg-card border border-border/40 rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-semibold hover:bg-muted/30 transition-colors">
                    {faq.q}
                  </summary>
                  <div className="px-6 py-4 border-t border-border/40 text-muted-foreground">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>

          {/* Planting Tips */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Leaf className="w-6 h-6 text-accent" />
              Planting Best Practices
            </h2>

            <div className="bg-card border border-border/40 rounded-lg p-8 space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Timing & Season</h3>
                <p className="text-muted-foreground">
                  Plant during the monsoon season (June-October) for best survival rates. Ensure adequate watering in
                  the first 2 years.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Spacing & Soil</h3>
                <p className="text-muted-foreground">
                  Maintain 5-10m spacing depending on species. Prepare soil with compost and ensure drainage to prevent
                  waterlogging.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Maintenance</h3>
                <p className="text-muted-foreground">
                  Water saplings regularly (every 3-5 days). Protect from livestock and weeds. Mulch around the base to
                  retain moisture.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Indigenous Species</h3>
                <p className="text-muted-foreground">
                  Prioritize native species to support local biodiversity. Check with local forestry departments for
                  species-specific guidance.
                </p>
              </div>
            </div>
          </section>

          {/* External Resources */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-accent" />
              External Resources
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Indian Forest Act",
                  url: "#",
                  description: "Official guidelines on afforestation and forest management.",
                },
                {
                  title: "Wildlife Institute of India",
                  url: "#",
                  description: "Research and guidance on biodiversity-friendly planting.",
                },
                {
                  title: "State Forest Departments",
                  url: "#",
                  description: "District-specific forestry information and native species lists.",
                },
                {
                  title: "FAO Planting Guide",
                  url: "#",
                  description: "International best practices for successful tree establishment.",
                },
              ].map((resource, idx) => (
                <a
                  key={idx}
                  href={resource.url}
                  className="bg-card border border-border/40 rounded-lg p-6 hover:border-accent/50 transition-colors space-y-2"
                >
                  <h3 className="font-semibold text-accent">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
