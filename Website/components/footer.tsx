import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link href="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/resources" className="hover:text-foreground transition-colors">
              Resources
            </Link>
            <Link href="/data-methods" className="hover:text-foreground transition-colors">
              Data & Methods
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 Vriddhi. Impact through intelligent planting.</p>
        </div>
      </div>
    </footer>
  )
}
