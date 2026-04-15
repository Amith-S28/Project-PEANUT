"use client"

import { useState } from 'react'
import { Check, X } from 'lucide-react'

export function VerificationQueue({ initialRequests }: { initialRequests: any[] }) {
  const [requests, setRequests] = useState(initialRequests)
  const [processing, setProcessing] = useState<string | null>(null)

  const handleAction = async (id: string, action: 'approve' | 'reject', credits: number = 50) => {
    setProcessing(id)
    try {
      const res = await fetch(`/api/admin/${action}-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, credits })
      })
      if(res.ok) {
        setRequests(prev => prev.filter(r => r.id !== id))
      } else {
        const err = await res.json()
        alert(err.error || 'Failed to process request')
      }
    } catch (e) {
      alert('Network error')
    } finally {
      setProcessing(null)
    }
  }

  if (requests.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center space-y-4 h-[250px] border-2 border-dashed border-border rounded-lg bg-muted/10">
        <div>
          <h3 className="font-semibold text-lg text-muted-foreground">Queue Empty</h3>
          <p className="text-sm text-muted-foreground max-w-sm mt-2">
            No pending submissions found. Users' uploaded site photos will appear here for verification.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4 h-[400px] overflow-y-auto pr-2">
      {requests.map(req => (
        <div key={req.id} className="p-4 bg-muted/20 border border-border/40 rounded-lg flex items-center justify-between">
          <div>
            <h4 className="font-semibold flex items-center gap-2">
              {req.species} 
              <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full">{req.district}, {req.state}</span>
            </h4>
            <p className="text-sm text-muted-foreground mt-1">User ID: {req.user_id}</p>
            <p className="text-xs text-muted-foreground">Submitted: {new Date(req.created_at).toLocaleDateString()}</p>
          </div>
          
          {req.photo_urls && (
            <div className="flex items-center gap-2">
              {req.photo_urls.split('|').map((url: string, i: number) => (
                <img key={i} src={url} alt="Proof" className="w-20 h-20 object-cover rounded-md border border-border shadow-sm hover:scale-150 transition-transform origin-center z-10" />
              ))}
            </div>
          )}

          <div className="flex items-center gap-3">
            <button 
              disabled={processing === req.id}
              onClick={() => handleAction(req.id, 'reject')}
              className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
              title="Reject Submission"
            >
              <X className="w-5 h-5" />
            </button>
            <button 
              disabled={processing === req.id}
              onClick={() => handleAction(req.id, 'approve', 50)}
              className="px-4 py-2 bg-accent text-accent-foreground font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Check className="w-4 h-4" />
              Approve (+50 pts)
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
