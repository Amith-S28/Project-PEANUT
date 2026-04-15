import { NextResponse } from 'next/server';
import { getSessionUser, readRequests, writeRequests, readUsers, writeUsers } from '@/lib/csv-db';

export async function POST(request: Request) {
  try {
    const admin = (await getSessionUser()) as any;
    if(!admin || !admin.isAdmin) return NextResponse.json({ error: "Unauthorized Admin" }, {status: 401});

    const { id, credits } = await request.json();
    const requests = readRequests();
    const reqIndex = requests.findIndex((r: any) => r.id === id);
    if(reqIndex === -1) return NextResponse.json({ error: "Request Not found" }, {status: 404});

    requests[reqIndex].status = "approved";
    requests[reqIndex].credits_earned = credits;

    // Add credits to user in CSV
    const users = readUsers();
    const userIndex = users.findIndex((u: any) => u.id === requests[reqIndex].user_id);
    if(userIndex !== -1) {
      users[userIndex].credits = Number(users[userIndex].credits || 0) + Number(credits);
      writeUsers(users);
    }

    writeRequests(requests);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, {status: 500});
  }
}
