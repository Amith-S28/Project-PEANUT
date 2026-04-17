import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LogOut, Leaf, Trophy, TrendingUp } from 'lucide-react'
import Link from "next/link"
import { getSessionUser, getUserPlantings } from "@/lib/csv-db"

export default async function DashboardPage() {
  const user = (await getSessionUser()) as any;
  
  if (!user) {
    redirect('/auth/login')
  }

  const profile = { display_name: user?.name || user?.email };
  const credits = { total_credits: user.credits, credits_earned: user.credits };
  const plantings = getUserPlantings(user.id) as any[];

  const handleLogout = async () => {
    "use server"
    const cookieStore = await cookies();
    cookieStore.delete('auth_session');
    redirect("/")
  }

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-background to-muted/20 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-12 animate-fade-in-up">
            <div>
              <h1 className="text-4xl font-semibold mb-2">Welcome, {profile?.display_name || user?.email || 'User'}</h1>
              <p className="text-muted-foreground">Track your environmental impact and manage your plantings</p>
            </div>
            <form action={handleLogout}>
              <button
                type="submit"
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted hover:shadow-md transition-all duration-200"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </form>
          </div>

          {/* Credits Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-border/40 rounded-lg p-6 space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-muted-foreground">Total Credits</h3>
                <Trophy className="w-5 h-5 text-accent" />
              </div>
              <div className="text-4xl font-semibold text-accent">{credits?.total_credits || 0}</div>
              <p className="text-xs text-muted-foreground">Earned through verified plantings</p>
            </div>

            <div className="bg-card border border-border/40 rounded-lg p-6 space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-muted-foreground">Credits Earned</h3>
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <div className="text-4xl font-semibold text-accent">{credits?.credits_earned || 0}</div>
              <p className="text-xs text-muted-foreground">From verification</p>
            </div>

            <div className="bg-card border border-border/40 rounded-lg p-6 space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-muted-foreground">Trees Planted</h3>
                <Leaf className="w-5 h-5 text-accent" />
              </div>
              <div className="text-4xl font-semibold text-accent">{plantings.length}</div>
              <p className="text-xs text-muted-foreground">Total plantings recorded</p>
            </div>
          </div>

          {/* Recent Plantings */}
          <div className="bg-card border border-border/40 rounded-lg p-8 mb-12 hover:shadow-lg transition-shadow duration-200 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Your Plantings</h2>
              <Link
                href="/upload"
                className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 hover:shadow-md transition-all duration-200"
              >
                Add Planting
              </Link>
            </div>

            {plantings.length > 0 ? (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {plantings.map((planting, idx) => (
                  <div 
                    key={planting.id} 
                    className="flex items-center justify-between p-4 border border-border/40 rounded-lg hover:bg-muted/50 hover:shadow-md transition-all duration-200 animate-slide-in-right"
                    style={{ animationDelay: `${0.1 * idx > 0.5 ? 0.5 : 0.1 * idx}s` }}
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold">{planting.species}</h3>
                      <p className="text-sm text-muted-foreground">
                        {planting.district}, {planting.state} • {new Date(planting.planting_date).toLocaleDateString()}
                      </p>
                      {planting.status === "rejected" && planting.rejection_reason && (
                        <div className="mt-2 text-sm text-red-500 bg-red-500/10 p-2 rounded border border-red-500/20 max-w-sm">
                          <span className="font-semibold flex items-center gap-1.5 mb-0.5">
                             Reason for Rejection:
                          </span> 
                          {planting.rejection_reason}
                        </div>
                      )}
                    </div>
                    <div className="text-right space-y-1">
                      <div className={`text-sm font-medium px-3 py-1 rounded-full transition-colors ${
                        planting.status === "verified" || planting.status === "approved"
                          ? "bg-accent/10 text-accent"
                          : planting.status === "rejected"
                          ? "bg-red-500/10 text-red-500"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {planting.status === "rejected" ? "Request Rejected" : planting.status}
                      </div>
                      {planting.credits_earned > 0 && (
                        <div className="text-sm text-accent font-semibold">+{planting.credits_earned} credits</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p className="mb-4">No plantings yet. Start by uploading your first planting!</p>
                <Link
                  href="/upload"
                  className="inline-block px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 hover:shadow-md transition-all duration-200"
                >
                  Upload Your First Planting
                </Link>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/florawiki"
              className="bg-accent/10 border border-accent/20 rounded-lg p-6 hover:bg-accent/15 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 space-y-2 animate-fade-in-up"
              style={{ animationDelay: '0.5s' }}
            >
              <h3 className="font-semibold text-lg">FloraWiki Species Guide</h3>
              <p className="text-sm text-muted-foreground">
                Get recommendations tailored to your region's climate
              </p>
            </Link>

            <Link
              href="/map"
              className="bg-accent/10 border border-accent/20 rounded-lg p-6 hover:bg-accent/15 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 space-y-2 animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <h3 className="font-semibold text-lg">Explore Needs Map</h3>
              <p className="text-sm text-muted-foreground">
                See which areas need the most trees
              </p>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
