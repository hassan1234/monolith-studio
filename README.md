# Monolith

Studio website for **Monolith** — one studio across three disciplines:

- **Design** — spatial concept, material studies and detailing
- **Build** — kitchens, bathrooms, living spaces and full renovations
- **Surfaces** — seamless microcement and hand-worked finishes ([monolithmicrocement.com](https://monolithmicrocement.com))

Plus a **Contact** page.

## Stack

Next.js 14 (App Router) · TypeScript · Jost + Space Mono. Design tokens mirror the
warm concrete palette of the Monolith Microcement brand.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Environment variables

| Variable | Required | What it does |
|---|---|---|
| `GHL_WEBHOOK_URL` | yes | GoHighLevel inbound-webhook URL that `/api/enquiry` forwards website enquiries to. Set in Vercel → Project → Settings → Environment Variables for Production, Preview and Development. Without it the contact forms return an error and the enquiry is logged but not delivered. |

The value is read server-side only, so it never reaches the browser bundle.
