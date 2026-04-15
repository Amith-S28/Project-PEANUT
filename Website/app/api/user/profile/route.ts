import { NextResponse } from 'next/server';
import { getSessionUser, getUserPlantings } from '@/lib/csv-db';

export async function GET() {
  const user = (await getSessionUser()) as any;
  if(!user) return NextResponse.json({ error: "Unauthorized" }, {status: 401})
  
  const plantings = getUserPlantings(user.id);

  return NextResponse.json({ 
    profile: {
      id: user.id,
      display_name: user.name, 
      email: user.email,
      bio: user.isAdmin ? "System Administrator" : "Active Contributor",
      avatar_url: null
    },
    credits: {
      total_credits: user.credits,
      credits_earned: user.credits,
      credits_used: 0
    },
    stats: {
      trees_certified: plantings.filter((p:any)=>p.status==='approved').length,
      verified_submissions: plantings.filter((p:any)=>p.status==='approved').length,
      districts_focused: Array.from(new Set(plantings.map((p:any)=>p.district))),
      total_plantings: plantings.length
    }
  });
}
