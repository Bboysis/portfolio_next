# Sisay Abebayew — Portfolio

A 3D personal portfolio built with Next.js, React Three Fiber, and Tailwind CSS.

## 1. Setup

```bash
# Use Node 22 (LTS)
nvm install 22
nvm use 22

# Install pnpm if you don't have it
npm install -g pnpm

# Install dependencies
pnpm install

# Run the dev server
pnpm dev
```

Open http://localhost:3000 — you should see the full site with the working 3D hero.

## 2. What's already built

- Full multi-page structure: Home, About, Projects (grid + dynamic case-study pages), Services, Contact
- All 12 of your projects wired in as real data (`data/projects.js`) — 6 marked featured for the homepage
- Working 3D hero scene (React Three Fiber) — procedural geometry, no external model files, capped pixel ratio, mouse + idle animation, lazy-loaded so it never blocks page load
- Dark mode default with a light-mode toggle (saved to localStorage)
- Contact form wired for **Netlify Forms** (no backend needed — submissions show up in your Netlify dashboard under Forms)
- Responsive layout throughout, keyboard-focus states, `prefers-reduced-motion` respected

## 3. Things YOU need to add before deploying

These were placeholders in our planning — the site will run without them, but looks unfinished until you add them:

| What | Where it goes | Notes |
|---|---|---|
| Profile photo | `public/images/profile.jpg` | Used on `/about` |
| Project screenshots | `public/images/projects/[name].jpg` | See exact filenames in `data/projects.js` → `image` field |
| CV PDF | `public/cv/sisay-abebayew-cv.pdf` | Linked from the homepage "Download CV" button |
| Real bio text | `app/about/page.js` | Currently a draft — let's refine together |
| Real dates for education/experience | `data/experience.js` | Currently placeholder text |
| Live/GitHub URLs per project | `data/projects.js` | Fill in `liveUrl` / `githubUrl` as you get them — case-study pages already handle empty values gracefully |
| Real email/WhatsApp/LinkedIn/GitHub links | `components/layout/Footer.js` and `app/contact/page.js` | Currently placeholder links |

Delete the `.placeholder` marker files in `public/` once you've added the real assets — they're just there so the folders aren't empty in git.

## 4. Editing content

Almost all real content lives in `/data`:
- `data/projects.js` — all project info
- `data/skills.js` — skills grid
- `data/experience.js` — About page timeline

Editing these files updates the site everywhere they're used — no need to touch components for content changes.

## 5. Deploying to Netlify

Since you're already on `sisaydev-portfolio.netlify.app`:

1. Push this project to a GitHub repo.
2. In Netlify: **Site settings → Build & deploy → Link to this repo**.
3. Netlify will auto-detect `netlify.toml` (already included) which uses the official `@netlify/plugin-nextjs` — no manual config needed.
4. Build command: `pnpm build` (already set). Publish directory: `.next` (already set).
5. Push to `main` → Netlify builds and deploys automatically.

If you're setting this up as a **new** Netlify site instead of reusing the existing one, just run `netlify init` from the project root (requires the Netlify CLI: `npm install -g netlify-cli`).

## 6. Performance notes (why it stays light)

- 3D scene uses only primitive Three.js geometry — no `.glb` downloads, nothing to decode
- `dpr={[1, 1.5]}` caps the render resolution so it doesn't tax integrated GPUs
- Canvas is lazy-loaded via `next/dynamic` with `ssr: false` — it never renders during build/SSR and doesn't block first paint
- Fonts load via `next/font` (self-hosted automatically, no render-blocking Google Fonts request)
- All project images should be compressed (WebP/AVIF, next/image will convert automatically) and kept under ~300KB each

## 7. Suggested next build phase (Phase 2)

- Swap the procedural 3D core for a custom low-poly `.glb` (dev desk / workspace) once you're ready — drop it in `public/models/` and I'll wire it in
- Blog section (`/blog`) — structure is easy to add later following the same pattern as `/projects`
- Testimonials section — add once you have 2–3 genuine ones
- Certifications section on `/about`

---

Once you've run `pnpm install` and confirmed `pnpm dev` works, send me a screenshot or describe what you see — we'll refine from there (bio wording, exact colors, real photos/screenshots once you have them).
