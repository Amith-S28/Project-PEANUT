# PEANUT (Predictive Environmental Analysis and Nature Utility Tracker) - Web Interface

A Next.js frontend application for managing tree planting initiatives across states and districts with data visualization and planning tools.

## Features

- Interactive map visualization of districts
- Plant recommendation system based on district and climate data
- District environmental analysis data visualization

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui

## Getting Started

### Prerequisites

- Node.js 18+ or pnpm

### Installation

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── auth/               # Authentication pages
│   ├── plant/              # Plant selection page
│   ├── map/                # Interactive map page
│   ├── dashboard/          # Dashboard
│   ├── profile/            # User profile
│   └── upload/             # Upload new planting records
├── components/             # React components
├── lib/                    # Utility functions
└── public/                 # Static assets
```

## License

MIT
