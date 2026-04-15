import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Users, Activity, Map, TreePine } from 'lucide-react'
import { getStats } from "@/lib/csv-service"
import { readRequests } from "@/lib/csv-db"
import { VerificationQueue } from "@/components/VerificationQueue"

import { redirect } from 'next/navigation'
import { getSessionUser } from "@/lib/csv-db"

export default async function AdminDashboard() {
  const user = (await getSessionUser()) as any;
  if (!user || user.isAdmin !== true) {
    redirect('/')
  }

  const stats = getStats()
  const allRequests = readRequests()
  const pendingRequests = allRequests.filter((r: any) => r.status === 'pending')

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Banner */}
        <div className="bg-accent/10 border-b border-accent/20">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex items-center gap-4 animate-fade-in">
              <div className="p-3 bg-accent rounded-lg">
                <Shield className="w-8 h-8 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-semibold">Global Command Center</h1>
                <p className="text-muted-foreground">System Administration & Analytics Overview</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Key Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Map,
                label: "Target Districts",
                value: (stats.total_districts || 0).toLocaleString(),
                desc: "Active mapping regions",
              },
              {
                icon: Users,
                label: "Population Tracked",
                value: ((stats.total_population || 0) / 1000000).toFixed(1) + "M",
                desc: "Impact demographic",
              },
              {
                icon: TreePine,
                label: "Known Green Cover",
                value: ((stats.total_green_cover || 0) / 1000).toFixed(0) + "K km²",
                desc: "Existing baselines",
              },
              {
                icon: Activity,
                label: "Average Priority",
                value: (stats.avg_priority || 0).toFixed(1),
                desc: "Global urgency index",
              },
            ].map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div 
                  key={idx} 
                  className="bg-card border border-border/40 rounded-lg p-6 hover:border-accent/40 hover:shadow-lg transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-muted rounded-lg">
                      <Icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold text-accent mb-1">{stat.value}</div>
                    <div className="text-sm font-medium">{stat.label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.desc}</div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* System Status */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card border border-border/40 rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-accent" />
                  System Health
                </h2>
                
                <div className="space-y-4">
                  {[
                    { label: "CSV Engine", status: "Online", color: "text-green-500" },
                    { label: "Mock DB State", status: "Active", color: "text-green-500" },
                    { label: "Authentication Bypass", status: "Engaged", color: "text-green-500" },
                    { label: "Supabase Relays", status: "Disconnected", color: "text-muted-foreground" },
                  ].map((sys, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border/20">
                      <span className="text-sm font-medium">{sys.label}</span>
                      <span className={`text-xs font-semibold ${sys.color} px-2 py-1 rounded-full bg-background`}>
                        {sys.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pending Approvals Feed */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border/40 rounded-lg p-6 shadow-sm min-h-[400px]">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Verification Queue</h2>
                  <span className="text-sm text-muted-foreground">{pendingRequests.length} Pending</span>
                </div>

                <VerificationQueue initialRequests={pendingRequests} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
