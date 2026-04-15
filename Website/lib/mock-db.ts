import fs from 'fs';
import path from 'path';

const DB_FILE = path.join(process.cwd(), 'data', 'mock-db.json');

// Ensure DB exists
export function initDB() {
  const dir = path.dirname(DB_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({
      users: {
        "demo-user": {
           id: "demo-user",
           email: "demo@greenai.com",
           display_name: "Demo Environmentalist"
        }
      },
      user_credits: {
        "demo-user": {
          user_id: "demo-user",
          total_credits: 500,
          credits_earned: 500
        }
      },
      user_plantings: []
    }, null, 2));
  }
}

export function readDB() {
  initDB();
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
}

export function writeDB(data: any) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

export async function getMockSessionUser() {
  return { id: "demo-user", email: "demo@greenai.com", user_metadata: { display_name: "Demo Environmentalist" } };
}

// Helper methods mimicking Supabase functions
export function getUserCredits(userId: string) {
  const db = readDB();
  return db.user_credits[userId] || { total_credits: 0, credits_earned: 0 };
}

export function getUserPlantings(userId: string) {
  const db = readDB();
  return db.user_plantings.filter((p: any) => p.user_id === userId);
}

export function addPlanting(userId: string, planting: any) {
  const db = readDB();
  
  // Create planting
  const newPlanting = {
    ...planting,
    id: Math.random().toString(36).substr(2, 9),
    user_id: userId,
    created_at: new Date().toISOString(),
    verification_status: "verified"
  };
  db.user_plantings.push(newPlanting);
  
  // Add credits
  if (!db.user_credits[userId]) {
    db.user_credits[userId] = { user_id: userId, total_credits: 0, credits_earned: 0 };
  }
  const creditsToEarn = planting.credits_earned || 50;
  db.user_credits[userId].total_credits += creditsToEarn;
  db.user_credits[userId].credits_earned += creditsToEarn;
  
  writeDB(db);
  return newPlanting;
}
