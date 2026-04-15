import { NextResponse } from 'next/server';
import { readUsers, writeUsers } from '@/lib/csv-db';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { name, email, phone, password } = await request.json();
    const users = readUsers();
    
    // Check if email exists
    if (users.find((u: any) => u.email === email)) {
      return NextResponse.json({ error: 'Email already registered' }, { status: 400 });
    }

    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      phone,
      credits: 0,
      password, // Plain-text intended for MVP visibility
      isAdmin: 'false'
    };

    users.push(newUser);
    writeUsers(users);

    const cookieStore = await cookies();
    cookieStore.set('auth_session', newUser.id, {
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production'
    });

    return NextResponse.json({ success: true, user: { id: newUser.id, name: newUser.name, isAdmin: false } });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
