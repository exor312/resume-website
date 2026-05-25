# Resume Portfolio Website

A creative portfolio-style resume website built with Next.js 15, Tailwind CSS, and Lucide icons.

## Stack

- **Framework:** Next.js 15 (App Router) — static export
- **UI:** Tailwind CSS + shadcn/ui design system
- **Icons:** Lucide React
- **Fonts:** Space Grotesk (headings), Inter (body), JetBrains Mono (code)
- **Theme:** Dark mode with purple/teal accent palette

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
```

Static output is generated in the `out/` directory — deploy anywhere (Vercel, Netlify, GitHub Pages, S3, etc.).

## Project Structure

```
app/
├── layout.tsx          # Root layout with fonts
├── page.tsx            # Main page composing all sections
└── globals.css         # Design system CSS variables
components/
└── sections/
    ├── Navbar.tsx      # Fixed nav with smooth scroll
    ├── Hero.tsx        # Full-height landing
    ├── About.tsx       # Bio + stats
    ├── Experience.tsx  # Work timeline
    ├── Education.tsx   # Education cards
    ├── Skills.tsx      # Skill pills by category
    ├── Projects.tsx    # Project grid
    ├── Contact.tsx     # Contact CTA + social links
    └── Footer.tsx      # Copyright
lib/
└── utils.ts            # cn() utility
types/
└── index.ts            # TypeScript types
```

## Customization

1. **Personal info:** Edit the placeholder content in each section component
2. **Resume data:** Update the data arrays in `Experience.tsx`, `Education.tsx`, `Skills.tsx`, `Projects.tsx`
3. **Colors:** Modify CSS variables in `app/globals.css`
4. **Fonts:** Change imports in `app/layout.tsx`

## Deployment

### Vercel (recommended)

```bash
npx vercel
```

### Static hosting

```bash
npm run build
# Deploy the out/ directory to any static host
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build (static export) |
| `npm run typecheck` | TypeScript type check |
| `npm run lint` | ESLint |
