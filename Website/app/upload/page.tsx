"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Upload, MapPin, Leaf, CheckCircle2, AlertCircle } from 'lucide-react'
import { TREE_SPECIES } from "@/lib/placeholder-data"
import { useRouter } from 'next/navigation'
import exifr from 'exifr'
import { AuthOverlay } from "@/components/auth-overlay"

type UploadStep = "location" | "photos" | "details" | "success"

export default function UploadPage() {
  const [currentStep, setCurrentStep] = useState<UploadStep>("location")
  const [formData, setFormData] = useState({
    state: "",
    district: "",
    latitude: "",
    longitude: "",
    photos: [] as File[],
    species: "",
    plantingDate: "",
    timeSinceCreation: "",
  })
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [previewUrls, setPreviewUrls] = useState<string[]>([])
  const [userProfile, setUserProfile] = useState<{display_name: string | null, email: string} | null>(null)
  const [loading, setLoading] = useState(true)
  const [statesList, setStatesList] = useState<string[]>([])
  const [districtsList, setDistrictsList] = useState<any[]>([])
  const [showAuthOverlay, setShowAuthOverlay] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, statesRes] = await Promise.all([
          fetch('/api/user/profile'),
          fetch('/api/states')
        ])
        
        if (profileRes.ok) {
          const data = await profileRes.json()
          setUserProfile(data.profile)
        } else if (profileRes.status === 401) {
          setShowAuthOverlay(true)
          setLoading(false)
          return
        }
        
        if (statesRes.ok) {
          const states = await statesRes.json()
          setStatesList(states)
        }
      } catch (error) {
        console.error('[v0] Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [router])

  useEffect(() => {
    if (formData.state) {
      fetch(`/api/districts?state=${encodeURIComponent(formData.state)}&limit=1000`)
        .then(res => res.json())
        .then(data => {
          const uniqueDistricts = Array.from(new Set(data.map((d: any) => d.district))).map(district => {
            return data.find((d: any) => d.district === district)
          })
          setDistrictsList(uniqueDistricts.filter(Boolean))
        })
    } else {
      setDistrictsList([])
    }
  }, [formData.state])

  const handlePhotoUpload = async (files: FileList) => {
    const newFiles = Array.from(files)
    setFormData((prev) => ({
      ...prev,
      photos: [...prev.photos, ...newFiles],
    }))

    newFiles.forEach((file) => {
      const url = URL.createObjectURL(file)
      setPreviewUrls((prev) => [...prev, url])
    })

    try {
      if (newFiles.length > 0) {
        const file = newFiles[0]
        const gps = await exifr.gps(file)
        if (gps && gps.latitude && gps.longitude) {
          setFormData((prev) => ({
            ...prev,
            latitude: gps.latitude.toFixed(6),
            longitude: gps.longitude.toFixed(6)
          }))
          alert("Coordinates successfully auto-filled from photo metadata!")
        }
      }
    } catch (e) {
      console.warn("No EXIF data found or error parsing", e)
    }
  }

  const removePhoto = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index),
    }))
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('state', formData.state)
      formDataToSend.append('district', formData.district)
      formDataToSend.append('latitude', formData.latitude)
      formDataToSend.append('longitude', formData.longitude)
      formDataToSend.append('species', formData.species)
      formDataToSend.append('plantingDate', formData.plantingDate)
      
      formData.photos.forEach((photo) => {
        formDataToSend.append('photos', photo)
      })

      const response = await fetch('/api/user/plantings', {
        method: 'POST',
        body: formDataToSend
      })

      if (!response.ok) {
        throw new Error('Failed')
      }

      setCurrentStep("success")
    } catch (error) {
      console.error('[v0] Upload error:', error)
      alert('Failed to submit planting. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  const isLocationValid = formData.state && formData.district && formData.latitude && formData.longitude
  const isPhotosValid = formData.photos.length > 0
  const isDetailsValid = formData.species && formData.plantingDate && formData.timeSinceCreation

  if (loading) {
    return (
      <>
        <Header />
        <main className="bg-background min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground">Loading...</p>
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
        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-semibold mb-2">Upload Your Planting</h1>
            <p className="text-lg text-muted-foreground">
              Share verified proof of your tree plantings and earn impact credits
            </p>
          </div>

          <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
            {(["location", "photos", "details", "success"] as const).map((step, idx) => {
              const stepLabels = {
                location: "Location",
                photos: "Photos",
                details: "Details",
                success: "Complete",
              }
              const isActive = currentStep === step
              const isComplete =
                ["location", "photos", "details"].indexOf(step) < ["location", "photos", "details"].indexOf(currentStep)

              return (
                <div key={step} className="flex items-center gap-2 flex-shrink-0">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                      isComplete
                        ? "bg-accent text-accent-foreground"
                        : isActive
                          ? "bg-accent text-accent-foreground ring-2 ring-accent/50"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {isComplete ? "✓" : idx + 1}
                  </div>
                  <span className={`text-sm font-medium ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                    {stepLabels[step]}
                  </span>
                  {idx < 3 && <div className="w-6 h-0.5 bg-border ml-2" />}
                </div>
              )
            })}
          </div>

          {currentStep !== "success" && (
            <form onSubmit={handleSubmit} className="space-y-8">
              {currentStep === "location" && (
                <div className="space-y-8 bg-card p-8 rounded-lg border border-border/40">
                  <h2 className="text-2xl font-semibold flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-accent" />
                    Where Did You Plant?
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold">State</label>
                      <select
                        required
                        value={formData.state}
                        onChange={(e) => {
                          setFormData((prev) => ({
                            ...prev,
                            state: e.target.value,
                            district: "",
                          }))
                        }}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                      >
                        <option value="">Select State</option>
                        {statesList.map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold">District</label>
                      <select
                        required
                        value={formData.district}
                        onChange={(e) => setFormData((prev) => ({ ...prev, district: e.target.value }))}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                        disabled={!formData.state}
                      >
                        <option value="">Select District</option>
                        {districtsList.map((district) => (
                          <option key={district.district} value={district.district}>
                            {district.district}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="bg-muted/30 p-4 rounded-lg border border-border/40">
                    <p className="text-sm text-muted-foreground mb-4">
                      Auto-fill from photo EXIF data or enter manually:
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold">Latitude</label>
                        <input
                          required
                          type="number"
                          step="0.0001"
                          placeholder="e.g., 21.1458"
                          value={formData.latitude}
                          onChange={(e) => setFormData((prev) => ({ ...prev, latitude: e.target.value }))}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold">Longitude</label>
                        <input
                          required
                          type="number"
                          step="0.0001"
                          placeholder="e.g., 79.0882"
                          value={formData.longitude}
                          onChange={(e) => setFormData((prev) => ({ ...prev, longitude: e.target.value }))}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setCurrentStep("photos")}
                    disabled={!isLocationValid}
                    className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                  >
                    Continue to Photos
                  </button>
                </div>
              )}

              {currentStep === "photos" && (
                <div className="space-y-8 bg-card p-8 rounded-lg border border-border/40">
                  <h2 className="text-2xl font-semibold flex items-center gap-2">
                    <Upload className="w-6 h-6 text-accent" />
                    Upload Photos
                  </h2>

                  <div
                    className="border-2 border-dashed border-border rounded-lg p-12 text-center cursor-pointer hover:border-accent hover:bg-accent/5 transition-colors"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e) => e.target.files && handlePhotoUpload(e.target.files)}
                      className="hidden"
                    />
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-lg font-semibold mb-2">Drag photos here or click to upload</p>
                    <p className="text-sm text-muted-foreground">
                      Photos must be geo-tagged. Location data is validated against your selected district.
                    </p>
                  </div>

                  {previewUrls.length > 0 && (
                    <div className="space-y-4">
                      <h3 className="font-semibold">Uploaded Photos ({formData.photos.length})</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {previewUrls.map((url, idx) => (
                          <div key={idx} className="relative group">
                            <img
                              src={url || "/placeholder.svg"}
                              alt={`Preview ${idx}`}
                              className="w-full h-48 object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => removePhoto(idx)}
                              className="absolute top-2 right-2 bg-destructive text-destructive-foreground p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setCurrentStep("location")}
                      className="flex-1 px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep("details")}
                      disabled={!isPhotosValid}
                      className="flex-1 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                    >
                      Continue to Details
                    </button>
                  </div>
                </div>
              )}

              {currentStep === "details" && (
                <div className="space-y-8 bg-card p-8 rounded-lg border border-border/40">
                  <h2 className="text-2xl font-semibold flex items-center gap-2">
                    <Leaf className="w-6 h-6 text-accent" />
                    Planting Details
                  </h2>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold">Tree Species</label>
                      <select
                        required
                        value={formData.species}
                        onChange={(e) => setFormData((prev) => ({ ...prev, species: e.target.value }))}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                      >
                        <option value="">Select Species</option>
                        {TREE_SPECIES.map((species) => (
                          <option key={species.id} value={species.id}>
                            {species.commonName} ({species.scientificName})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold">Planting Date</label>
                        <input
                          required
                          type="date"
                          value={formData.plantingDate}
                          onChange={(e) => setFormData((prev) => ({ ...prev, plantingDate: e.target.value }))}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold">Time Since Creation</label>
                        <select
                          required
                          value={formData.timeSinceCreation}
                          onChange={(e) => setFormData((prev) => ({ ...prev, timeSinceCreation: e.target.value }))}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                        >
                          <option value="">Select</option>
                          <option value="0-6 months">0-6 months</option>
                          <option value="6-12 months">6-12 months</option>
                          <option value="1-2 years">1-2 years</option>
                          <option value="2+ years">2+ years</option>
                        </select>
                      </div>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-lg border border-border/40 flex gap-3">
                      <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-muted-foreground">
                        <p className="font-semibold mb-1">Verification Process</p>
                        <p>
                          Your submission will be reviewed within 48 hours. We verify location, timestamp, and photo
                          quality.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setCurrentStep("photos")}
                      className="flex-1 px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!isDetailsValid || uploading}
                      className="flex-1 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                    >
                      {uploading ? "Uploading..." : "Submit for Verification"}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}

          {currentStep === "success" && (
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-12 text-center space-y-6">
              <CheckCircle2 className="w-16 h-16 text-accent mx-auto" />
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold">Upload Successful!</h2>
                <p className="text-lg text-muted-foreground">
                  Your planting has been submitted for verification. You'll earn 25-100 credits once approved.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg space-y-4 text-left max-w-sm mx-auto">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Files Uploaded:</span>
                  <span className="font-semibold">
                    {formData.photos.length} photo{formData.photos.length !== 1 ? "s" : ""}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">District:</span>
                  <span className="font-semibold">{formData.district}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="font-semibold text-accent">Pending Review</span>
                </div>
              </div>

              <div className="flex gap-4 justify-center pt-4">
                <a
                  href="/credits"
                  className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  View Credits
                </a>
                <a
                  href="/"
                  className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
                >
                  Back Home
                </a>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
