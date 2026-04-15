import Link from 'next/link'

export function AuthOverlay() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/60 backdrop-blur-md animate-fade-in">
      <div className="bg-card p-8 border border-border rounded-xl shadow-lg max-w-md w-full text-center space-y-4 animate-slide-up">
        <h2 className="text-2xl font-semibold">Sign In Required</h2>
        <p className="text-muted-foreground">You must be logged in to access this feature and track your environmental impact.</p>
        <div className="flex gap-4 pt-4">
          <Link href="/auth/login" className="flex-1 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 font-medium transition-colors">Log In</Link>
          <Link href="/auth/sign-up" className="flex-1 py-3 border border-border rounded-lg hover:bg-muted font-medium transition-colors">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}
