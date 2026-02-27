# Deployment Guide – Streamline Business Centre

This is a Next.js 14 (App Router) project.

## Option A (Recommended): Vercel
1. Push the repo to GitHub/GitLab.
2. Vercel Dashboard → New Project → import repository.
3. Framework: Next.js (auto-detected).
4. Build command: `npm run build`
5. Install command: Vercel default (or `npm install`).
6. Environment variables: none required by default.
7. Deploy.

If you enable `components/N8nChat.tsx` and move webhook to env, add that env var in Vercel.

## Option B: VPS/VM (Node + nginx)

### Build & run
```bash
npm ci
npm run build
PORT=3000 npm run start
```

### Reverse proxy
Run nginx in front of the Node process:
- `https://yourdomain` → `http://127.0.0.1:3000`
- Use Let’s Encrypt for TLS

### Process manager
Use one:
- systemd service
- pm2

## DNS
- Vercel: follow Vercel’s DNS instructions for your domain.
- VPS: point an `A` record to the server IP.

## Post-deploy Checklist
- `/` loads (hero video should play)
- `/about`, `/locations`, `/products`, `/contact` load
- `/[slug]` routes work for key slugs (e.g. `/office-space`)
- Navbar/ServiceNav links work
