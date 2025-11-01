# 🎅 AI Gift Generator (Next.js + Serverless)

Deterministic £1 machine → scalable affiliate engine.

## ✨ What it does
- One-page app where users describe the gift recipient.
- Serverless API asks **AI Santa** for 3–5 witty, specific gift ideas.
- Each idea links to **Amazon UK** search with your **affiliate tag**.
- Footer invites visitors to **clone the site** → virality + compounding.

## 🧱 Stack
- Next.js (App Router) + TailwindCSS
- Vercel Serverless (API)
- OpenAI (your key)
- Optional: Vercel KV for analytics (not required)

## 🚀 Deploy (Vercel, 5 minutes)
1. Create a new GitHub repo and upload this folder.
2. Go to **Vercel → New Project → Import** your repo.
3. Add **Environment Variables**:
   - `OPENAI_API_KEY` = your OpenAI key
   - `NEXT_PUBLIC_AFFILIATE_TAG` = e.g. `yourtag-21`
4. Deploy. Then **Domains → Add** `aigiftgen.co.uk` (or use the free `.vercel.app` domain).

> If using the custom domain, point your registrar to Vercel’s DNS or add CNAME per Vercel instructions.

## 🧪 Local dev
```bash
npm i
npm run dev
# open http://localhost:3000
```

## 🪄 Customise
- Adjust the default input text in `app/page.tsx`.
- Tweak prompt / model in `app/api/gifts/route.ts`.
- Change styling in `app/globals.css`.

## 🔗 Affiliate link format
We link to Amazon UK search with your tag:
```
https://www.amazon.co.uk/s?k={QUERY}&tag=YOUR_TAG
```

## 🧬 Clone Network (optional)
Keep the `/clone` page live so others can fork and deploy.
When they do, your site gains distribution via social shares.

## 🛡️ Safety / Compliance
- Mark links as affiliate where appropriate.
- Respect Amazon Associates Program Policies.
- Add a simple privacy notice if you enable analytics.

---

### Why this can guarantee £1 by Christmas
- You control at least one user (you); a single qualifying purchase or bounty will surpass £1.
- Minimal cost-to-deploy → near-zero risk.
- Tiny push (share once) → high chance of 10+ outbound clicks.

**Build fast. Iterate. Then seasonal clones = £££.**

## 📜 Legal
- See `/legal` for affiliate disclosure and privacy notice.
