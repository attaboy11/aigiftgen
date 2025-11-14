# ☀️ Codex Solar Platform

Launch high-performance solar projects with Codex Solar — a boutique engineering team that blends digital modelling with boots-on-roof delivery.

## 🌍 What we deliver
- Feasibility and irradiance modelling tailored to your estate.
- Turnkey EPC delivery for rooftop, carport and ground-mount arrays.
- 24/7 monitoring, maintenance, and optimisation with transparent reporting dashboards.

## 🚀 Getting started

Install dependencies and launch the Next.js dev server:

```bash
npm install
npm run dev
# visit http://localhost:3000
```

To inspect the static export exactly as Netlify will serve it, run a production preview:

```bash
npm run build
npm run preview
# visit http://localhost:4173
```

Set environment variables in `.env.local` if you plan to integrate APIs (none are required for the static marketing experience).

## 🌐 Deploying to Netlify

This project is configured for static export so Netlify can serve it from the global edge network:

1. Push the repo to GitHub/GitLab/Bitbucket and connect it to Netlify.
2. Leave the **Base directory** blank. Netlify will detect `package.json` in the repository root (double-check with `ls` if you run into ENOENT errors).
3. Use the default build command (`npm run build`) and publish directory (`out`). These values match the bundled `netlify.toml`.
4. Trigger a deploy. Netlify installs dependencies, runs the static export, and uploads the generated site from `out/`.

### Troubleshooting Netlify builds

- **`ENOENT: no such file or directory, open '.../package.json'`** – make sure you deployed the repository root rather than a subdirectory. The `package.json` included in this project lives at the root level.
- **`out` directory missing in preview** – run `npm run build` before `npm run preview`; the preview server simply serves the generated static files.

If you change the output directory in the future, mirror that value in `netlify.toml` and the Netlify UI.

## 🧰 Tech stack
- Next.js 14 App Router
- React 18
- Tailwind CSS 3
- TypeScript

## 🗺️ Project layout
```
app/
  layout.tsx      # Global metadata and shell
  page.tsx        # Marketing site homepage
  globals.css     # Tailwind layers + design tokens
components/
  QuoteCalculator.tsx  # Interactive solar feasibility calculator
```

## 📄 Licensing
All assets and content in this repository are provided under the MIT License unless stated otherwise.
