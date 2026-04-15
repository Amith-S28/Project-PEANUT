# PEANUT (Predictive Environmental Analysis and Nature Utility Tracker)

A Next.js application for managing tree planting initiatives across Indian states and districts with data visualization, user profiles, and planting tracking.

## Features

- Interactive map visualization of districts across Indian states
- Plant recommendation system based on district and climate data
- User authentication and profile management
- Planting tracking and user credits system
- Comprehensive district data with 2,337+ districts

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Authentication**: Supabase Auth

## Getting Started

### Prerequisites

- Node.js 18+ or pnpm
- A Supabase account and project

### Installation

1. Clone the repository or extract the ZIP file

2. Install dependencies:
   \`\`\`bash
   pnpm install
   \`\`\`

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`:
     \`\`\`bash
     cp .env.example .env.local
     \`\`\`
   - Fill in your Supabase credentials from your [Supabase Dashboard](https://supabase.com/dashboard):
     - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon/public key
     - `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key (for API routes)

4. Run the database migrations:
   - The SQL scripts in `/scripts` folder need to be run in your Supabase SQL editor
   - Run them in order: `001_*.sql`, `002_*.sql`, etc.

5. Import district data:
   - The district data CSV is located in `/public/data/FinalFinalAnalysis.csv`
   - You can import this manually via Supabase dashboard or run the import script

6. Start the development server:
   \`\`\`bash
   pnpm dev
   \`\`\`

7. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Required environment variables (add these to `.env.local`):

\`\`\`bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000/auth/callback
\`\`\`

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── plant/             # Plant selection page
│   ├── map/               # Interactive map page
│   ├── dashboard/         # User dashboard
│   ├── profile/           # User profile page
│   └── upload/            # Upload new planting records
├── components/            # React components
├── lib/                   # Utility functions and configurations
│   └── supabase/         # Supabase client configurations
├── public/               # Static assets
└── scripts/              # Database migration scripts
\`\`\`

## Key Pages

- `/` - Homepage with statistics and features
- `/plant` - Select state, district, and get plant recommendations
- `/map` - Interactive map of all districts
- `/dashboard` - User dashboard with planting history
- `/profile` - User profile and settings
- `/upload` - Upload new planting records
- `/admin` - Admin panel for reviewing and approving submissions

## Database Schema

The application uses the following main tables:

- `Deliverable Data` - District information (2,337+ records)
- `users` - User profiles and credits
- `plantings` - User planting records

## Admin Setup

To create an admin account:

1. **Sign up** for a regular account first through the app at `/auth/sign-up`

2. **Run the admin SQL script**:
   - In v0: The script at `scripts/004_add_admin_functionality.sql` will run automatically
   - Locally: Go to your Supabase Dashboard → SQL Editor → Run the SQL from `scripts/004_add_admin_functionality.sql`

3. **Make your account an admin**:
   - Go to your Supabase dashboard → Table Editor → `users` table
   - Find your user record (search by your email)
   - Click on the `is_admin` field and set it to `TRUE`
   - Save the change

4. **Access the admin panel**:
   - Log out and log back in (or refresh your app)
   - You'll see an "Admin" link with a shield icon in the header
   - Navigate to `/admin` to review and approve submissions

### Admin Capabilities

- View all planting submissions filtered by status (pending/approved/rejected)
- Review detailed submission information including location, photos, and user details
- Approve plantings and award customizable credits (default: 50, range: 10-200)
- Reject invalid or fraudulent submissions
- Credits are automatically added to user accounts upon approval

### Admin Workflow

1. Users submit plantings via `/upload` page
2. Submissions appear in admin dashboard with "pending" status
3. Admin reviews submission details
4. Admin either approves (awards credits) or rejects
5. User sees updated status and credits in their profile

## Troubleshooting

### "Your project's URL and Key are required to create a Supabase client"

This error occurs when environment variables are missing. Make sure you've:
1. Created a `.env.local` file
2. Added all required Supabase credentials
3. Restarted the development server after adding variables

### States/Districts not loading

1. Verify your Supabase RLS policies allow public read access to the `Deliverable Data` table
2. Check that the service role key is correctly set in `.env.local`
3. Ensure the district data has been imported to your Supabase database

## License

MIT
