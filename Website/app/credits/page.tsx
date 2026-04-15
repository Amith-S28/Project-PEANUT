"use client"

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrendingUp, Award, Leaf, Target } from 'lucide-react'
import { AuthOverlay } from "@/components/auth-overlay"

interface UserData {
  profile: {
    id: string
    email: string
    display_name: string | null
    bio: string | null
    avatar_url: string | null
  }
  credits: {
    total_credits: number
    credits_earned: number
    credits_used: number
  }
  stats: {
    trees_certified: number
    verified_submissions: number
    districts_focused: string[]
    total_plantings: number
  }
}

interface Planting {
  id: string
  species: string
  quantity: number
  state: string
  district: string
  verification_status: string
  credits_earned: number
  created_at: string
}

export default function CreditsPage() {
  const router = useRouter()
  const [creditPulse, setCreditPulse] = useState(false)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [plantings, setPlantings] = useState<Planting[]>([])
  const [loading, setLoading] = useState(true)
  const [showAuthOverlay, setShowAuthOverlay] = useState(false)

  useEffect(() => {
    async function loadUserData() {
      try {
        const [profileRes, plantingsRes] = await Promise.all([
          fetch("/api/user/profile"),
          fetch("/api/user/plantings")
        ])

        if (profileRes.status === 401) {
          setShowAuthOverlay(true)
          setLoading(false)
          return
        }

        if (!profileRes.ok) {
          throw new Error("Failed to fetch user profile")
        }

        const profileData = await profileRes.json()
        const plantingsData = plantingsRes.ok ? await plantingsRes.json() : []

        setUserData(profileData)
        setPlantings(plantingsData)

        // Trigger pulse animation
        setCreditPulse(true)
        setTimeout(() => setCreditPulse(false), 1500)
      } catch (error) {
        console.error("[v0] Failed to load user data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadUserData()
  }, [router])

  if (loading) {
    return (
      <>
        <Header />
        <main className="bg-background min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="text-lg text-muted-foreground">Loading your credits...</div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  if (!userData) {
    return (
      <>
        <Header />
        <main className="bg-background min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="text-lg text-muted-foreground">Failed to load user data</div>
            <button
              onClick={() => router.push("/auth/login")}
              className="px-6 py-2 bg-accent text-accent-foreground rounded-lg"
            >
              Sign In
            </button>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const verifiedPlantings = plantings.filter(p => p.verification_status === "verified")
  const pendingPlantings = plantings.filter(p => p.verification_status === "pending")

  return (
    <>
      <Header />
      {showAuthOverlay && <AuthOverlay />}
      <main className={`bg-background min-h-screen ${showAuthOverlay ? 'blur-md pointer-events-none opacity-40 select-none' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-semibold mb-2">Impact Credits & Dashboard</h1>
            <p className="text-lg text-muted-foreground">Track your verified plantings and environmental impact</p>
          </div>

          {/* Main Credit Display */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Primary Credit Card */}
            <div className="lg:col-span-2 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent border border-accent/30 rounded-lg p-12 space-y-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground font-medium">Total Impact Credits</p>
                <div
                  className={`text-6xl font-semibold text-accent transition-all duration-1000 ${creditPulse ? "scale-110" : "scale-100"}`}
                >
                  {userData.credits.total_credits.toLocaleString()}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Trees Certified</span>
                  <span className="font-semibold">{userData.stats.trees_certified}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Districts Focused</span>
                  <span className="font-semibold">
                    {userData.stats.districts_focused.length > 0 
                      ? userData.stats.districts_focused.slice(0, 3).join(", ")
                      : "None yet"}
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-border/40">
                <div className="inline-flex items-center gap-2 text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  Account Verified
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-4">
              {[
                { icon: Leaf, label: "Trees Planted", value: userData.stats.total_plantings },
                { icon: Target, label: "Districts Active", value: userData.stats.districts_focused.length },
                {
                  icon: TrendingUp,
                  label: "Credits Earned",
                  value: userData.credits.credits_earned,
                },
              ].map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <div key={idx} className="bg-card p-4 rounded-lg border border-border/40 space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{stat.label}</span>
                    </div>
                    <div className="text-2xl font-semibold">{(stat.value as number).toLocaleString()}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* How Credits Are Calculated */}
          <div className="bg-muted/30 border border-border/40 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-accent" />
              How Credits Are Calculated
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-sm font-semibold text-accent">1. Local Necessity</div>
                <p className="text-sm text-muted-foreground">
                  Base credits increase with green deficit. High-deficit districts yield more credits per tree.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-semibold text-accent">2. Tree Verification</div>
                <p className="text-sm text-muted-foreground">
                  Approved uploads receive 25-100 base credits depending on species and location match.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-semibold text-accent">3. Long-Term Care</div>
                <p className="text-sm text-muted-foreground">
                  Bonus multipliers unlock after survival checks. Upload follow-up photos for 1.25x-1.5x boost.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-background rounded-lg border border-border/40">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold">Formula:</span> Base Credits × (1 + Priority Index / 100) × Care
                Multiplier = Total Credits
              </p>
            </div>

            <a href="/data-methods" className="inline-block mt-4 text-sm text-accent hover:underline">
              View Full Policy & Methods →
            </a>
          </div>

          {/* Recent Credits Activity */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>

            {plantings.length === 0 ? (
              <div className="bg-card border border-border/40 rounded-lg p-12 text-center space-y-4">
                <p className="text-muted-foreground">No plantings yet</p>
                <a
                  href="/upload"
                  className="inline-block px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  Upload Your First Tree
                </a>
              </div>
            ) : (
              <div className="space-y-3">
                {plantings.slice(0, 10).map((planting) => (
                  <div
                    key={planting.id}
                    className="bg-card border border-border/40 rounded-lg p-6 flex items-center justify-between hover:border-accent/50 transition-colors"
                  >
                    <div className="flex-1 space-y-1">
                      <p className="font-medium">{planting.species || "Tree species"}</p>
                      <p className="text-sm text-muted-foreground">
                        {planting.district}, {planting.state} • {new Date(planting.created_at).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>

                    <div className="text-right space-y-1">
                      <div className="text-2xl font-semibold text-accent">
                        {planting.credits_earned > 0 ? `+${planting.credits_earned}` : "—"}
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span
                          className={`px-2 py-1 rounded-full ${
                            planting.verification_status === "verified"
                              ? "bg-accent/10 text-accent"
                              : planting.verification_status === "pending"
                              ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {planting.verification_status === "verified" 
                            ? "✓ Verified" 
                            : planting.verification_status === "pending"
                            ? "⏳ Pending"
                            : "Rejected"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Verification Status */}
          <div className="bg-card border border-border/40 rounded-lg p-8 space-y-6">
            <h2 className="text-2xl font-semibold">Verification Status</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-green-600 dark:text-green-400">
                  Verified ({verifiedPlantings.length})
                </h3>
                <p className="text-sm text-muted-foreground">
                  These trees have been approved and counted toward your impact score.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-yellow-600 dark:text-yellow-400">
                  Pending Review ({pendingPlantings.length})
                </h3>
                <p className="text-sm text-muted-foreground">
                  Review typically takes 48 hours. Check back soon for updates.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-600 dark:text-gray-400">Available to Upload (∞)</h3>
                <p className="text-sm text-muted-foreground">
                  Keep planting and uploading to earn more credits and expand your impact.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center space-y-4">
            <h2 className="text-2xl font-semibold">Keep Growing Your Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each verified planting brings you closer to meaningful environmental change.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="/upload"
                className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Upload Trees
              </a>
              <a
                href="/map"
                className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Explore Districts
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
