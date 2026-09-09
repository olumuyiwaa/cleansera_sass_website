# CleanSera Website

Commercial marketing site for CleanSera, built with Next.js 14 (App Router)
and Tailwind CSS — inspired by the page structure of `health_website`
(TrabajoHub's marketing site), with a distinct visual identity for CleanSera.

## Design

- **Color** — sage green primary (`#3F6B52`), warm paper background
  (`#FBFBF8`), citrus-amber accent (`#D98E2B`) used sparingly for CTAs.
  Grounded in cleaning-industry vernacular (eco-clean green, lemon-fresh
  amber) rather than default SaaS blue/purple.
- **Type** — Space Grotesk for headlines, IBM Plex Sans for body.
- **Signature moment** — the homepage hero is an interactive before/after
  slider (`src/components/BeforeAfterSlider.js`), drawn in SVG (no stock
  photography needed), directly tied to what the product does.
- **Structural motif** — a dashed "route line" connects steps in the
  "How it works" sections, standing in for a cleaner's actual daily route
  rather than generic numbered cards.

## Pages

`/` `/for-businesses` `/for-cleaners` `/how-it-works` `/pricing` `/about`
`/support` `/privacy` `/terms`

`/for-businesses` is the primary conversion page (competes directly with
BookingKoala-style marketplace tools) with a comparison table and a demo
request form. `/pricing` mirrors the subscription-only billing model from
the CleanSera API (no job-level commission).

## Setup

```bash
npm install
npm run dev
```

## Next steps

- Wire the demo-request and contact forms to a real backend endpoint or
  form service (currently unwired `<form>` markup).
- Replace the illustrated SVG room in the hero with real before/after
  photography once available.
- Add an `og:image` and favicon set once brand assets exist.
