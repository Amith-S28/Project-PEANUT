import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-semibold mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">Data Collection</h2>
              <p className="text-muted-foreground">
                We collect location data, photos, and profile information to verify plantings and track environmental
                impact. Location data is validated only against district boundaries and is not sold or shared with third
                parties without consent.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">Photo & EXIF Data</h2>
              <p className="text-muted-foreground">
                Uploaded photos are preserved with EXIF metadata (GPS coordinates, timestamp) for verification. Original
                photos are stored securely and shared only with verification teams or upon user request.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">Leaderboard & Aggregation</h2>
              <p className="text-muted-foreground">
                The opt-in leaderboard shows aggregated impact by district, not individual user details. Opt out from
                your profile settings at any time. Aggregated, anonymized data may be shared with research partners for
                climate studies.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">Your Rights</h2>
              <p className="text-muted-foreground">
                You have the right to access, update, or delete your account data. Contact our privacy team for data
                export or deletion requests. We comply with GDPR, CCPA, and India's Digital Personal Data Protection Act
                (DPDPA).
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
