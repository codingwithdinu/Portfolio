# Dinesh Patel — Portfolio

A responsive, dark emerald personal portfolio built with Next.js App Router, TypeScript, Framer Motion, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before deploying

- Add your resume PDF as `public/resume.pdf`.
- Add your portrait at `public/images/dinesh-profile.png` and wire it into the hero section (the current hero uses a DP monogram placeholder).
- Add real project deployment URLs to each `liveUrl` in `src/data/portfolio.ts`. Empty values intentionally display no fake demo link.

## Deploy on Vercel

Import this repository into Vercel. Framework preset: **Next.js**. No environment variables are required.