import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-semibold mb-8">Terms of Service</h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">User Responsibilities</h2>
              <p className="text-muted-foreground">
                Users are responsible for accurate location data and authentic photographic evidence of plantings.
                Fraudulent submissions, duplicate claims, or fabricated data will result in account suspension and
                credit forfeiture.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">Credits & Redemption</h2>
              <p className="text-muted-foreground">
                Impact credits are issued for verified plantings and cannot be exchanged for direct monetary value.
                Credits represent verified environmental impact and may be used for leaderboard rankings, impact badges,
                or future environmental programs.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">Content Ownership</h2>
              <p className="text-muted-foreground">
                You retain ownership of photos and data you upload. By submitting, you grant Vriddhi a perpetual license
                to use aggregated and anonymized data for environmental reporting and research.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Vriddhi provides verification and credit tracking services on an "as-is" basis. We are not liable for
                tree survival rates, environmental outcomes, or losses arising from user plantings.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">Changes & Termination</h2>
              <p className="text-muted-foreground">
                We reserve the right to update terms and credit policies. Users will be notified 30 days in advance.
                Accounts may be terminated for repeated violations or inactivity exceeding 2 years.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
