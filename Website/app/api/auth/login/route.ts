import { NextResponse } from 'next/server';
import { readUsers } from '@/lib/csv-db';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const users = readUsers();
    
    // Find matching user
    const user = users.find((u: any) => u.email === email && u.password === password);
    
    if (!user) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // Set simple cookie
    const cookieStore = await cookies();
    cookieStore.set('auth_session', user.id, {
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production'
    });

    return NextResponse.json({ success: true, user: { id: user.id, name: user.name, isAdmin: user.isAdmin === 'true' } });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
