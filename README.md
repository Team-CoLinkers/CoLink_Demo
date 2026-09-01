# CoLink — Web Prototype

Cooperative-powered home services for India. CoLink connects households with
verified local workers (electricians, plumbers, carpenters, cleaners, caregivers
and more) through a **worker-owned cooperative** model — fair earnings, insured
jobs, and neighbourhood trust.

This repository is the **frontend prototype**: a fully clickable, animated UI
built from the original design mockups. There is **no backend yet** — data is
mocked in-component and every action either navigates between screens or shows a
toast. The backend (auth, bookings, payments, live tracking) is planned as a
later phase.

## Tech stack

- **Vite 5** — dev server and build tooling
- **React 18** + **TypeScript** — UI and type safety
- **Tailwind CSS v4** — styling (via `@tailwindcss/vite`, using `@import "tailwindcss"`)
- **lucide-react** — icons
- **Hash-based router** — a tiny custom router in `src/App.tsx` (no dependency).
  Screens navigate by setting `window.location.hash`, so deep links work as a
  static site with zero server configuration.

## Getting started

Requires **Node.js 18+** (Node 20 or 22 recommended).

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production (outputs to dist/)
npm run build

# 4. Preview the production build locally (http://localhost:4173)
npm run preview
```

> The dependencies listed in `package.json` are installed by `npm install`. If
> you received this project without a `node_modules/` folder, that is expected —
> run `npm install` once before the other commands.

## Available scripts

| Script              | What it does                                             |
| ------------------- | -------------------------------------------------------- |
| `npm run dev`       | Start the Vite dev server with hot-module reload         |
| `npm run build`     | Type-agnostic production build to `dist/`                |
| `npm run preview`   | Serve the built `dist/` to sanity-check the build        |
| `npm run typecheck` | Run `tsc --noEmit` to catch type errors                  |
| `npm run format`    | Format `src/` with Prettier (config in `.prettierrc.json`) |

## Project structure

```

├─ index.html                     # App entry HTML (fonts, root div)
├─ vite.config.ts                 # Vite + React + Tailwind v4 plugins
├─ vercel.json                    # Vercel deploy config (SPA rewrites)
├─ src/
│  ├─ main.tsx                    # React root (createRoot + StrictMode)
│  ├─ App.tsx                     # Hash router + route table
│  ├─ index.css                   # Tailwind import + design tokens/theme
│  └─ screens/colink/
│     ├─ _group.css               # Shared animations & component classes
│     ├─ _shared/Saha.tsx         # Shared UI (Logo, Shell, ActionButton, Toast, …)
│     ├─ Home.tsx                 # Landing / service discovery
│     ├─ Auth.tsx                 # Sign in / sign up
│     ├─ WorkerRegister.tsx       # Worker onboarding
│     ├─ WorkerDashboard.tsx      # Worker's job & earnings view
│     ├─ Booking.tsx              # Book a service (multi-step)
│     ├─ Tracking.tsx             # Live service tracking
│     ├─ EmergencySOS.tsx         # In-service SOS screen
│     ├─ AdminDashboard.tsx       # Cooperative admin view
│     ├─ Invoice.tsx              # Service invoice
│     ├─ RatingReview.tsx         # Post-service rating & review
│     └─ NotFound.tsx             # 404 fallback
```

## Routing & screens

Navigation is driven by the URL hash. `src/App.tsx` maps each hash path to a
screen:

| Hash route         | Screen             |
| ------------------ | ------------------ |
| `#/`               | Home               |
| `#/auth`           | Auth               |
| `#/worker-register`| WorkerRegister     |
| `#/worker`         | WorkerDashboard    |
| `#/book`           | Booking            |
| `#/track` (`/track/:id`) | Tracking     |
| `#/sos`            | EmergencySOS       |
| `#/admin`          | AdminDashboard     |
| `#/invoice`        | Invoice            |
| `#/rating` (`/review`) | RatingReview   |
| anything else      | NotFound (404)     |

Every screen is reachable through in-app buttons. As a prototype flow: **Home →
Booking → Tracking**, and when a tracked service is marked *Completed* you can
open **Rate this service** and **View invoice**. The shared header (`Shell`)
links to Home, Join as worker, Cooperatives and Sign in.

## Deploying to Vercel

The project is Vercel-ready out of the box (`vercel.json` sets the framework,
build command, output directory, and SPA rewrites).

**Option A — Vercel dashboard**

1. Push this folder to a Git repository (GitHub/GitLab/Bitbucket).
2. In Vercel, **Add New → Project** and import that repository.
3. Vercel auto-detects Vite. Keep the defaults (Build `npm run build`, Output
   `dist`) and click **Deploy**.

**Option B — Vercel CLI**

```bash
npm i -g vercel
vercel        # preview deploy (follow the prompts)
vercel --prod # production deploy
```

## Notes

- **Prototype only.** No network calls, no persistence — state resets on reload.
  All buttons are wired: they either route to another screen or surface a toast.
- **Accessibility.** Animations respect `prefers-reduced-motion`.
- **Fonts** load from Google Fonts (see `index.html`); an internet connection is
  needed for the intended typography, but the app renders fine without it.
