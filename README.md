# Streamline Business Centre

Marketing website built with Next.js (App Router) + Tailwind CSS.

This repository is ready to hand over to another developer. It includes local setup, build steps, where to edit content, and deployment instructions.

## Tech Stack
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS (+ `tailwindcss-animate`)
- shadcn/ui-style components (`components/ui/*`)
- Icons: `lucide-react`
- Forms: `react-hook-form` + `zod`
- Optional chat widget: `@n8n/chat` (currently disabled)

## Requirements
- Node.js: recommended 18 or 20 LTS for deployment
- npm

## Local Setup
```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

## Scripts
- `npm run dev` - start dev server
- `npm run build` - production build (includes lint + typecheck)
- `npm run start` - start production server
- `npm run lint` - run Next.js lint

## Project Structure
- `app/layout.tsx` - global layout (Navbar, ServiceNav, Footer)
- `app/page.tsx` - homepage composition
- `app/[slug]/page.tsx` - dynamic service template (driven by `lib/services.ts`)
- `app/<route>/page.tsx` - individual marketing pages (about/contact/etc.)
- `components/` - reusable sections + UI components
- `components/ui/*` - UI primitives
- `lib/services.ts` - list of services (slugs, titles, highlights, images)
- `public/` - static assets (images, `hero-vid.mp4`, logo, etc.)
- `next.config.mjs` - Next config (includes `next-video` processing)
- `server.ts` - optional custom Node server (not used by default npm scripts)

## Routes
Main routes:
- `/` - homepage
- `/[slug]` - service pages generated from `lib/services.ts`

Static marketing pages (examples):
- `/about`, `/contact`, `/locations`, `/products`, `/privacy`, `/terms`, `/cookies`

## Where To Edit Content

### Homepage sections
Homepage is assembled in `app/page.tsx` using:
- `components/home/hero-section.tsx` (hero video uses `public/hero-vid.mp4`)
- `components/home/what-sets-us-apart-section.tsx`
- `components/home/community-highlight-section.tsx`
- `components/home/amenities-marquee.tsx`
- `components/home/flexible-workspace-section.tsx`
- `components/home/customer-hero-section.tsx`
- `components/stream-gallery.tsx`
- `components/home/contact-section.tsx`

### Service slugs + data
All service slugs and their content live in `lib/services.ts`.

Used by:
- `app/[slug]/page.tsx`
- service dropdown in `components/home/contact-section.tsx`

### Service navigation strip
The horizontal strip is defined separately in `components/service-nav.tsx`.
If you add/remove services, keep it in sync with `lib/services.ts`.

### Phone numbers, emails, Calendly
These are hard-coded in multiple pages/components.
To update globally, search for:
- `+971`
- `streamline.ae`
- `calendly.com/streamlinebusinesscenter-sales/30min`

## Forms / Backend Status (Important)
Current status:
- `components/home/contact-section.tsx` and `app/contact/page.tsx` simulate submission (console log + timeout).
- There is no real email/API integration yet.
- `app/api/send-booking-email/` exists but currently has no route handler.

If you need real submissions, implement a Next.js Route Handler under `app/api/<name>/route.ts` and wire the form to call it.

## Optional n8n Chat Widget
- Component: `components/N8nChat.tsx`
- The webhook URL is currently hard-coded.
- It is disabled in `app/layout.tsx` (commented out).

Recommended for production: move the webhook URL to an environment variable.

## Deployment
Two common deployment options:

### Option A (Recommended): Vercel
1. Push repo to GitHub/GitLab.
2. Import into Vercel.
3. Build command: `npm run build`
4. Start command: Vercel default (Next.js)

### Option B: VPS/VM (Node + nginx)
```bash
npm ci
npm run build
PORT=3000 npm run start
```
Then put nginx in front as a reverse proxy.

See `DEPLOYMENT.md` for a more detailed checklist.

## Handover
If you are handing this repo to another developer/team, see:
- `HANDOVER.md`

## Troubleshooting

### Build fails on lint
`next build` runs lint + typecheck. Fix ESLint errors (unused imports, unescaped entities in JSX, etc.) then re-run:
```bash
npm run build
```

### Tailwind warning: ambiguous duration class
If you see warnings like `duration-[1.5s] is ambiguous`, replace with explicit CSS arbitrary property:
- `[transition-duration:1.5s]`

## Notes
- Static assets are served from `public/`.
- `next-video` is configured via `next.config.mjs`.
