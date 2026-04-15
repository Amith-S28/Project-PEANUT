import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { stringify } from 'csv-stringify/sync';
import { cookies } from 'next/headers';

const DATA_DIR = path.join(process.cwd(), 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.csv');
const REQUESTS_FILE = path.join(DATA_DIR, 'requests.csv');

export function initCSVDB() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  
  if (!fs.existsSync(USERS_FILE)) {
    const adminUser = {
      id: 'admin-1',
      name: 'System Admin',
      email: 'admin@greenai.com',
      phone: '0000000000',
      credits: 0,
      password: 'admin',
      isAdmin: 'true'
    };
    fs.writeFileSync(USERS_FILE, stringify([adminUser], { header: true }));
  }

  if (!fs.existsSync(REQUESTS_FILE)) {
    fs.writeFileSync(REQUESTS_FILE, stringify([], { 
      columns: ['id', 'user_id', 'species', 'state', 'district', 'planting_date', 'status', 'credits_earned', 'created_at'], 
      header: true 
    }));
  }
}

export function readUsers() {
  initCSVDB();
  const fileContent = fs.readFileSync(USERS_FILE, 'utf-8');
  return parse(fileContent, { columns: true, skip_empty_lines: true });
}

export function writeUsers(users: any[]) {
  const content = stringify(users, { header: true });
  fs.writeFileSync(USERS_FILE, content);
}

export function readRequests() {
  initCSVDB();
  const fileContent = fs.readFileSync(REQUESTS_FILE, 'utf-8');
  return parse(fileContent, { columns: true, skip_empty_lines: true });
}

export function writeRequests(requests: any[]) {
  const content = stringify(requests, { header: true });
  fs.writeFileSync(REQUESTS_FILE, content);
}

// Session Helpers
export async function getSessionUser() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('auth_session')?.value;
  
  if (!sessionId) return null;

  const users = readUsers();
  const user = users.find((u: any) => u.id === sessionId) as any;
  
  if (!user) return null;

  return {
    ...user,
    credits: Number(user.credits || 0),
    isAdmin: user.isAdmin?.toString().toLowerCase() === 'true'
  };
}

export function getUserPlantings(userId: string) {
  const requests = readRequests();
  return requests.filter((r: any) => r.user_id === userId);
}

export function addPlanting(userId: string, planting: any) {
  const requests = readRequests();
  const newPlanting = {
    id: Math.random().toString(36).substr(2, 9),
    user_id: userId,
    species: planting.species || 'Unknown',
    state: planting.state || 'Unknown',
    district: planting.district || 'Unknown',
    planting_date: planting.planting_date || new Date().toISOString(),
    photo_urls: planting.photo_urls || '',
    status: "pending",
    credits_earned: 0,
    created_at: new Date().toISOString()
  };
  requests.push(newPlanting);
  writeRequests(requests);
  return newPlanting;
}
