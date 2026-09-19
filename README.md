# CleanSera Marketing Website

Public marketing site for **CleanSera** — the multi-tenant SaaS for cleaning businesses.

This site sells the product: positioning, features, pricing, how it works, and conversion paths (demo requests, sign-in, sign-up). It is **not** the product app itself.

- Product / dashboard: [cleansera_sass_frontend](https://github.com/olumuyiwaa/cleansera_sass_frontend)
- API: [cleansera_sass](https://github.com/olumuyiwaa/cleansera_sass)

**Positioning (keep consistent everywhere):**  
CleanSera is a **subscription**, not a marketplace. Cleaning businesses own their customers, roster, and branding. Cleaners are onboarded and managed by the business. No commission on job payments.

---

## Table of contents

- [Tech stack](#tech-stack)
- [Pages & messaging](#pages--messaging)
- [Repository structure](#repository-structure)
- [Prerequisites](#prerequisites)
- [Local setup](#local-setup)
- [Environment variables](#environment-variables)
- [Content & SEO](#content--seo)
- [Related repositories](#related-repositories)

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| UI | React 18, Tailwind CSS 3 |
| Language | JavaScript |

Lightweight on purpose — marketing only, no heavy product dependencies.

---

## Pages & messaging

Typical routes (see `src/app/`):

| Path | Purpose |
|------|---------|
| `/` | Homepage — software for cleaning businesses |
| `/for-businesses` | Own your booking flow; no marketplace cut |
| `/for-cleaners` | How cleaners experience the product (managed by their employer) |
| `/how-it-works` | Job lifecycle from setup → paid |
| `/pricing` | Flat monthly plans by cleaner count; **no commission** |
| `/about` | Company / product story |
| Contact / demo forms | Lead capture → backend API |

Copy should reinforce:

1. Businesses keep customer relationships.
2. Cleaners are staff of the business, not platform freelancers.
3. Pricing is subscription-only; job money goes to the business via Stripe Connect.

If the product ever introduces a take-rate on bookings, update this site **before** changing `PLATFORM_APPLICATION_FEE_BPS` on the API.

---

## Repository structure

```
cleansera_sass_website/
├── src/
│   ├── app/                 # App Router pages & layouts
│   │   ├── page.js          # Home
│   │   ├── about/
│   │   ├── for-businesses/
│   │   ├── for-cleaners/
│   │   ├── how-it-works/
│   │   ├── pricing/
│   │   └── …
│   └── lib/                 # siteConfig, metadata helpers, etc.
├── .env.example
├── next.config.js
├── tailwind.config.js
└── package.json
```

Layouts use shared metadata helpers (e.g. `buildMetadata`) for titles, descriptions, and canonical paths.

---

## Prerequisites

- Node.js 18+
- Optional: running CleanSera API if you want demo / contact forms to post for real

---

## Local setup

```bash
# 1. Clone
git clone https://github.com/olumuyiwaa/cleansera_sass_website.git
cd cleansera_sass_website

# 2. Install
npm install

# 3. Environment
cp .env.example .env.local
# Set NEXT_PUBLIC_APP_URL, NEXT_PUBLIC_API_BASE_URL, NEXT_PUBLIC_SITE_URL

# 4. Start
npm run dev
```

Default: `http://localhost:3000` (use a different port if the dashboard is already on 3000, e.g. `npm run dev -- -p 3001`).

---

## Environment variables

From `.env.example`:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_APP_URL` | Product app URL (Sign in / Get started links). Local default: `http://localhost:3000` |
| `NEXT_PUBLIC_API_BASE_URL` | Backend for demo-request / contact forms. Local default: `http://localhost:8000/api/v1` |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL of **this** marketing site (no trailing slash). Used for OG tags, canonical links, and sitemap. Set to production domain before deploy. |

---

## Content & SEO

- Metadata is defined per section (title, description, path).
- Keep pricing claims aligned with actual Stripe plans and the API fee policy (currently 0% on job payments).
- After production domain is known, set `NEXT_PUBLIC_SITE_URL` so sitemap and OG URLs are correct.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint |

---

## Related repositories

| Repo | Role |
|------|------|
| [cleansera_sass](https://github.com/olumuyiwaa/cleansera_sass) | Backend API |
| [cleansera_sass_frontend](https://github.com/olumuyiwaa/cleansera_sass_frontend) | Business dashboard & public product surfaces |
| [cleansera_cleaner_app](https://github.com/olumuyiwaa/cleansera_cleaner_app) | Cleaner mobile app |

---

## License

Private — all rights reserved.
