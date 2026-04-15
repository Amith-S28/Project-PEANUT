import { NextResponse } from "next/server"
import { getRawDistrictsData } from "@/lib/csv-service"

export async function GET() {
  try {
    const data = getRawDistrictsData();
    const statesSet = new Set(data.map((d: any) => d.state).filter(Boolean));
    return NextResponse.json(Array.from(statesSet).sort())
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
