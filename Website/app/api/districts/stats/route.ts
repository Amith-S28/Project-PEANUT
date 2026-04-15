import { NextResponse } from "next/server"
import { getStats } from "@/lib/csv-service"

export async function GET() {
  try {
    const stats = getStats()
    return NextResponse.json(stats)
  } catch (error) {
    console.error("[v0] Unexpected error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
