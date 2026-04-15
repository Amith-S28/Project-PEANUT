import { NextResponse } from 'next/server';
import { getSessionUser, getUserPlantings, addPlanting } from '@/lib/csv-db';
import fs from 'fs'
import path from 'path'

export async function GET() {
  const user = (await getSessionUser()) as any;
  if (!user) return NextResponse.json({ error: "Unauthorized" }, {status: 401})
  const plantings = getUserPlantings(user.id);
  return NextResponse.json(plantings);
}

export async function POST(request: Request) {
  try {
    const user = (await getSessionUser()) as any;
    if (!user) return NextResponse.json({ error: "Unauthorized" }, {status: 401})
    
    const formData = await request.formData()
    const photos = formData.getAll('photos') as File[]
    
    // Save physical files
    const uploadDir = path.join(process.cwd(), 'public', 'uploads')
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true })
    }

    const photo_urls: string[] = []
    
    for (const photo of photos) {
      if (!photo.name) continue
      const buffer = Buffer.from(await photo.arrayBuffer())
      const filename = `${Math.random().toString(36).substring(2, 15)}_${photo.name.replace(/[^a-zA-Z0-9.]/g, '')}`
      fs.writeFileSync(path.join(uploadDir, filename), buffer)
      photo_urls.push(`/uploads/${filename}`)
    }

    const plantingData = {
      state: formData.get('state'),
      district: formData.get('district'),
      latitude: formData.get('latitude'),
      longitude: formData.get('longitude'),
      species: formData.get('species'),
      planting_date: formData.get('plantingDate'),
      photo_urls: photo_urls.join('|')
    }

    const newPlanting = addPlanting(user.id, plantingData);
    return NextResponse.json({ message: "Success", planting: newPlanting });
  } catch(e) {
    console.error(e)
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
