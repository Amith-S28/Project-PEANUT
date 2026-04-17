"use client"
import { useState, useRef } from 'react'
import { X, ZoomIn } from 'lucide-react'

export function ImageModal({ url, onClose }: { url: string; onClose: () => void }) {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 50, y: 50 })
  const imageRef = useRef<HTMLImageElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scale <= 1 || !imageRef.current) return
    const { left, top, width, height } = imageRef.current.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setPosition({ x, y })
  }

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setScale((prev) => {
      const newScale = prev + (e.deltaY > 0 ? -0.2 : 0.2)
      return Math.min(Math.max(1, newScale), 5) // Clamp between 1x and 5x
    })
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <button className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors z-[110]">
        <X className="w-6 h-6" />
      </button>
      
      <div 
        className="relative overflow-hidden rounded-lg bg-black/20 flex items-center justify-center cursor-crosshair"
        style={{ width: '80vw', height: '80vh' }}
        onClick={(e) => e.stopPropagation()}
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
        onMouseLeave={() => setScale(1)}
      >
        <img
          ref={imageRef}
          src={url}
          alt="Expanded view"
          className="transition-transform duration-100 ease-out object-contain w-full h-full"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: `${position.x}% ${position.y}%`
          }}
        />
        
        {scale === 1 && (
          <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded-full flex items-center gap-2 text-sm pointer-events-none">
            <ZoomIn className="w-4 h-4" /> Scroll to zoom
          </div>
        )}
      </div>
    </div>
  )
}
