"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { Leaf, Sun, Moon, Shield } from 'lucide-react'

export function Header() {
  const pathname = usePathname()
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
    
    checkAdminStatus()
  }, [])

  const checkAdminStatus = async () => {
    try {
      const response = await fetch('/api/admin/check')
      const data = await response.json()
      setIsAdmin(data.isAdmin || false)
    } catch (error) {
      setIsAdmin(false)
    }
  }

  const toggleDarkMode = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)

    if (newIsDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const navItems = [
    { href: "/map", label: "Map" },
    { href: "/florawiki", label: "FloraWiki" },
    { href: "/upload", label: "Upload" },
    { href: "/credits", label: "Credits" },
    { href: "/profile", label: "Profile" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-b border-border/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg hover:text-accent transition-colors duration-200">
            <div className="p-1.5 bg-accent/10 rounded-lg">
              <Leaf className="w-6 h-6 text-accent" />
            </div>
            <span>Vriddhi</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all duration-200 relative ${
                  pathname === item.href 
                    ? "text-accent" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent"></span>
                )}
              </Link>
            ))}
            {isAdmin && (
              <Link
                href="/admin"
                className={`text-sm font-medium transition-all duration-200 relative flex items-center gap-1 ${
                  pathname === '/admin'
                    ? "text-accent" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Shield className="w-4 h-4" />
                Admin
                {pathname === '/admin' && (
                  <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent"></span>
                )}
              </Link>
            )}
          </nav>

          {/* Dark mode toggle and mobile menu */}
          <div className="flex items-center gap-2">
            {mounted && (
              <button
                onClick={toggleDarkMode}
                className="p-2 hover:bg-accent/10 rounded-lg transition-all duration-200 hover:scale-105"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={20} className="text-accent" /> : <Moon size={20} />}
              </button>
            )}
            <button className="md:hidden text-muted-foreground hover:text-foreground transition-colors duration-200">
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
