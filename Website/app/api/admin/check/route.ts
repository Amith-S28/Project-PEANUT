import { NextResponse } from "next/server"
import { getSessionUser } from "@/lib/csv-db"

export async function GET() {
  const user = (await getSessionUser()) as any;
  return NextResponse.json({ isAdmin: user?.isAdmin || false })
}
