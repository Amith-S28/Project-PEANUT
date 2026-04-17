import { NextResponse } from 'next/server';
import { getSessionUser, readRequests, writeRequests } from '@/lib/csv-db';

export async function POST(request: Request) {
  try {
    const admin = (await getSessionUser()) as any;
    if(!admin || !admin.isAdmin) return NextResponse.json({ error: "Unauthorized Admin" }, {status: 401});

    const { id, reason } = await request.json();
    const requests = readRequests();
    const reqIndex = requests.findIndex((r: any) => r.id === id);
    if(reqIndex === -1) return NextResponse.json({ error: "Request Not found" }, {status: 404});

    requests[reqIndex].status = "rejected";
    requests[reqIndex].rejection_reason = reason || "";
    writeRequests(requests);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, {status: 500});
  }
}
