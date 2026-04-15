import { NextResponse } from "next/server"
import { getRawDistrictsData } from "@/lib/csv-service"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const state = searchParams.get("state")
    
    const limit = searchParams.get("limit")
    const offset = searchParams.get("offset")
    
    let data = getRawDistrictsData()
    if (state) {
        data = data.filter((d: any) => d.state === state)
    }

    if (limit && offset) {
       data = data.slice(Number(offset), Number(offset) + Number(limit))
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching districts:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
