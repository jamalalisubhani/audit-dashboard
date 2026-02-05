# Audit & Compliance Dashboard

A React-based dashboard for audit and compliance tracking, built with Vite, TypeScript, and SCSS.

---

## Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** (comes with Node.js)

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

The app will be available at **http://localhost:5173** (or the next free port Vite shows in the terminal). The page reloads when you edit the code.

### 3. Other commands

| Command           | Description                          |
|------------------|--------------------------------------|
| `npm run build`  | Type-check and build for production  |
| `npm run preview`| Serve the production build locally  |
| `npm run lint`   | Run ESLint                           |

---

## Navigation & Routes

The app uses a **sidebar** for main navigation and **React Router** for these routes:

| Route | Page      | Description |
|-------|-----------|-------------|
| `/`   | Dashboard | Overview: project timeline, summary stats, progress, compliance score, top performers, recent activity, and charts. |
| `/details/:id` | Details | Initiative/criteria detail. Example: **Strategic Planning** at `/details/strategic-planning`. Shows overview, evidence, comments, and recent activity. |
| `/tracking` | Tracking | Initiative status table with due dates, progress, owners, and a summary panel (on track / at risk / delayed / completed). |

### Sidebar

- **Dashboard** → `/`
- **Details** → `/details/strategic-planning`
- **Tasks**, **Documents**, **Reports**, **Users & Roles** are in the sidebar; their routes are not implemented yet (they can be added later).

The sidebar can be **collapsed/expanded** with the chevron button at the bottom; the state is stored in `localStorage`.

### Top bar

- Search (UI only)
- Notifications
- User menu (e.g. “Mohamed”)

---

## Project structure (overview)

```
src/
├── App.tsx              # Router and route definitions
├── main.tsx              # App entry point
├── index.css             # Global styles and design tokens
├── components/           # Reusable UI (Layout, Sidebar, cards, tables, etc.)
├── pages/                # Route pages: Dashboard, Details, Tracking
├── data/                 # mockData.ts – mock data for the dashboard
└── styles/               # Shared SCSS (e.g. variables)
```

---

## Tech stack

- **React 19** + **TypeScript**
- **Vite** – dev server and build
- **React Router v6** – routing
- **SCSS** – component and layout styles
- **react-icons** – Fi icons
- **recharts** – charts on the dashboard

---

## Deployment

After `npm run build`, the output is in the **`dist/`** folder. You can deploy that to any static host (e.g. Vercel, Netlify). The repo includes a `vercel.json` for Vercel deployment.
