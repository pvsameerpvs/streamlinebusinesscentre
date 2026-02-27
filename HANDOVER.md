# Streamline Business Centre – Project Handover

## Project Summary
Marketing/landing website built with Next.js (App Router) + Tailwind CSS + shadcn/ui-style components.

Key pieces:
- Homepage: `/` (composed from multiple sections)
- Many marketing pages under `app/<route>/page.tsx`
- Dynamic service template route: `/[slug]` driven by `lib/services.ts`
- Static assets in `public/`

## Tech Stack
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- `lucide-react` icons
- `react-hook-form` + `zod` for forms
- Optional: `@n8n/chat`

## Local Setup
```bash
npm install
npm run dev
```
Open: `http://localhost:3000`

## Production Build
```bash
npm run build
npm run start
```

## Repo Structure (Important Paths)
- `app/layout.tsx` - global layout (Navbar + ServiceNav + Footer)
- `app/page.tsx` - homepage composition
- `app/[slug]/page.tsx` - dynamic service page template
- `lib/services.ts` - service slugs + content
- `components/service-nav.tsx` - horizontal service navigation strip (keep in sync with `lib/services.ts`)
- `components/navbar.tsx` - top nav + mobile sheet
- `components/footer.tsx` - footer
- `public/` - images, logo, `hero-vid.mp4`
- `components/N8nChat.tsx` - optional chat widget
- `server.ts` - optional custom server (not used by default scripts)

## Content Editing
- Services list: edit `lib/services.ts`
- Homepage sections: edit files under `components/home/*` (wired in `app/page.tsx`)
- Phone/email/calendly links: search for `+971`, `streamline.ae`, `calendly.com/streamlinebusinesscenter-sales/30min`

## Forms / Backend Status
- Contact forms currently simulate submission (console log + timeout).
- No real API/email integration.
- `app/api/send-booking-email/` exists but has no implementation.

## Optional n8n Chat
- Disabled in `app/layout.tsx` (commented out).
- Webhook is hard-coded in `components/N8nChat.tsx`.
- Recommended: move webhook to env var before enabling.

## Handover Checklist
- [ ] `npm run build` passes on your machine
- [ ] Push latest code to remote
- [ ] Share deployment access (Vercel / VPS / DNS)
- [ ] Confirm production phone/email/calendly URLs
- [ ] Decide how form submissions should be handled (email/API/CRM)
