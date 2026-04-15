"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Leaf, Droplets, Sprout } from 'lucide-react'

export default function HomePage() {
  const saplingRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [globalStats, setGlobalStats] = useState({
    total_districts: 0,
    total_population: 0,
    total_green_cover: 0,
    avg_priority: 0,
  })

  useEffect(() => {
    async function loadStats() {
      try {
        const response = await fetch("/api/districts/stats")
        const data = await response.json()
        setGlobalStats(data)
      } catch (error) {
        console.error("Failed to load stats:", error)
      }
    }
    loadStats()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight - windowHeight
      const scrolled = window.scrollY
      const progress = Math.min(scrolled / (docHeight * 0.5), 1)
      setScrollProgress(progress)

      if (saplingRef.current) {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        if (!prefersReducedMotion) {
          saplingRef.current.style.opacity = String(Math.min(scrollProgress + 0.3, 1))
          saplingRef.current.style.transform = `scaleY(${0.3 + scrollProgress * 0.7})`
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollProgress])

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/minimalist-abstract-tree-silhouettes-and-leaves-pa.jpg"
              alt=""
              className="w-full h-full object-cover opacity-10"
            />
            {/* Overlay gradient to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
          </div>

          <div className="absolute inset-0 pointer-events-none z-[1]">
            {/* Subtle gradient overlay with green tones */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5" />
            
            {/* Minimalist dot grid pattern */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle at center, hsl(var(--accent) / 0.2) 1px, transparent 1px)`,
                backgroundSize: '32px 32px'
              }}
            />
            
            {/* Soft radial gradient for depth with green accent */}
            <div 
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `radial-gradient(ellipse at 30% 20%, hsl(var(--accent) / 0.15) 0%, transparent 50%),
                                  radial-gradient(ellipse at 70% 80%, hsl(var(--accent) / 0.1) 0%, transparent 50%)`
              }}
            />
          </div>

          <div className="relative z-10 max-w-2xl text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-semibold text-balance leading-tight">
              Impact Through Intelligent Planting
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed">
              Track, measure, and maximize your environmental impact. Plant the right tree in the right place with
              precision guided by climate and biodiversity data.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/map"
                className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                Explore Map
              </Link>
              <Link
                href="/plant"
                className="px-8 py-3 border border-border bg-card text-foreground rounded-lg font-medium shadow-md hover:shadow-lg hover:bg-muted hover:-translate-y-0.5 transition-all duration-200"
              >
                Start Planting
              </Link>
            </div>
          </div>

          {/* Sapling animation */}
          <div
            ref={saplingRef}
            className="absolute bottom-20 right-10 md:right-20 opacity-30 origin-bottom transition-all duration-300 z-10"
            style={{
              transformOrigin: "bottom center",
            }}
          >
            <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
              <line x1="60" y1="200" x2="60" y2="100" stroke="currentColor" strokeWidth="2" className="text-accent" />
              <circle cx="60" cy="80" r="25" fill="currentColor" className="text-accent/40" />
              <circle cx="40" cy="70" r="15" fill="currentColor" className="text-accent/50" />
              <circle cx="80" cy="75" r="18" fill="currentColor" className="text-accent/45" />
            </svg>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-muted/40">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-semibold text-center mb-16 text-balance animate-slide-up">Why This Matters</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Leaf,
                  title: "Healthier Climate",
                  description:
                    "Every tree absorbs CO₂ and cools our environment. Strategic placement maximizes climate benefits.",
                },
                {
                  icon: Sprout,
                  title: "Biodiversity",
                  description:
                    "Native species restore habitats and support local ecosystems. We recommend species matched to your region.",
                },
                {
                  icon: Droplets,
                  title: "Water Resilience",
                  description:
                    "Trees improve water retention, reduce runoff, and strengthen resilience to droughts and floods.",
                },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div 
                    key={idx} 
                    className="bg-card p-8 rounded-lg border border-border/40 text-center space-y-4 shadow-md hover:shadow-xl hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="flex justify-center">
                      <div className="p-3 bg-accent/10 rounded-full">
                        <Icon className="w-10 h-10 text-accent" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-semibold text-center mb-16 text-balance">How It Works</h2>

            <div className="space-y-12">
              {[
                {
                  step: 1,
                  title: "Select Your Area",
                  description: "Choose a district or region where you want to make an impact.",
                },
                {
                  step: 2,
                  title: "Get Local Species",
                  description: "Receive AI-matched tree recommendations based on climate, soil, and water data.",
                },
                {
                  step: 3,
                  title: "Plant & Upload",
                  description: "Plant your trees and upload geo-tagged photos for verification.",
                },
                {
                  step: 4,
                  title: "Earn Credits",
                  description: "Earn impact credits based on verified plantings and long-term care.",
                },
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex gap-8 items-center p-6 rounded-lg bg-gradient-to-r from-muted/30 to-transparent hover:from-accent/5 hover:to-transparent transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground font-semibold text-xl shadow-lg shadow-accent/20">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block flex-shrink-0 text-muted-foreground opacity-30">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Strip */}
        <section className="py-16 px-4 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border-y border-accent/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Districts Covered", value: (globalStats.total_districts || 0).toLocaleString() },
                { label: "People Impacted", value: ((globalStats.total_population || 0) / 1000000).toFixed(1) + "M" },
                { label: "Green Cover", value: ((globalStats.total_green_cover || 0) / 1000).toFixed(0) + "K km²" },
                { label: "Avg Priority", value: (globalStats.avg_priority || 0).toFixed(1) },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-2 p-4 rounded-lg hover:bg-card/50 transition-colors duration-300">
                  <div className="text-3xl md:text-4xl font-semibold text-accent">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-semibold">Ready to Make an Impact?</h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of planters using data-driven decisions to build a greener future.
            </p>
            <Link
              href="/plant"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Start Your Journey
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
