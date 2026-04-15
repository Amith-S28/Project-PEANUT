"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { User, Mail, MapPin, Award, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { AuthOverlay } from "@/components/auth-overlay"

interface UserProfile {
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

export default function ProfilePage() {
  const [userData, setUserData] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [showAuthOverlay, setShowAuthOverlay] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const fetchUserData = async () => {
      try {

        const response = await fetch('/api/user/profile')
        
        if (response.status === 401) {
          setShowAuthOverlay(true)
          setLoading(false)
          return
        }
        
        if (!response.ok) {
          throw new Error('Failed to fetch profile')
        }

        const data = await response.json()
        setUserData(data)
      } catch (error) {
        console.error('[v0] Error fetching user data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [router])

  const handleSignOut = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    window.location.href = '/'
  }

  if (loading) {
    return (
      <>
        <Header />
        <main className="bg-background min-h-screen flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-accent" />
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
          <div className="text-center">
            <p className="text-muted-foreground">Failed to load profile data</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      {showAuthOverlay && <AuthOverlay />}
      <main className={`bg-background min-h-screen ${showAuthOverlay ? 'blur-md pointer-events-none opacity-40 select-none' : ''}`}>
        <div className="max-w-2xl mx-auto px-4 py-12 animate-fade-in">
          <h1 className="text-4xl font-semibold mb-12">User Profile</h1>

          {/* Profile Card */}
          <div className="bg-card border border-border/40 rounded-lg p-8 space-y-8 mb-12 shadow-sm hover-lift">
            {/* Header */}
            <div className="flex items-center gap-6 pb-6 border-b border-border/40">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">{userData.profile.display_name || 'User'}</h2>
                <p className="text-muted-foreground">Active Contributor</p>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{userData.profile.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Credits</p>
                  <p className="font-medium text-accent text-lg">{userData.credits.total_credits.toLocaleString()}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Active Districts</p>
                  <p className="font-medium">
                    {userData.stats.districts_focused.length > 0 
                      ? userData.stats.districts_focused.slice(0, 3).join(", ") 
                      : "No districts yet"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card border border-border/40 rounded-lg p-6 space-y-2 shadow-sm hover-lift">
              <p className="text-sm text-muted-foreground">Trees Certified</p>
              <p className="text-4xl font-semibold">{userData.stats.trees_certified}</p>
            </div>
            <div className="bg-card border border-border/40 rounded-lg p-6 space-y-2 shadow-sm hover-lift">
              <p className="text-sm text-muted-foreground">Verified Submissions</p>
              <p className="text-4xl font-semibold">{userData.stats.verified_submissions}</p>
            </div>
          </div>

          {/* Account Settings */}
          <div className="bg-card border border-border/40 rounded-lg p-8 space-y-6 shadow-sm">
            <h3 className="text-xl font-semibold">Account Settings</h3>

            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-accent rounded" />
                <span className="text-sm">Email notifications for verified plantings</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-accent rounded" />
                <span className="text-sm">Share my impact on leaderboard</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-accent rounded" />
                <span className="text-sm">Receive recommendations for new districts</span>
              </label>
            </div>

            <div className="pt-6 border-t border-border/40">
              <button 
                onClick={handleSignOut}
                className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
