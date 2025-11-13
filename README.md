# BrightGrid Kent Static Site

This repository contains the static marketing site for **BrightGrid Kent**, a lead generation landing page designed for Netlify hosting. The site is intentionally lightweight and resilient so it continues working even if JavaScript fails.

## Structure

- `index.html` – main page content with SEO meta tags, JSON-LD, and Netlify form markup.
- `assets/style.css` – styling for the entire site, including responsive navigation that degrades gracefully without JavaScript.
- `assets/main.js` – minimal enhancements: mobile navigation toggle, smooth scrolling, and footer year update.
- `robots.txt` / `sitemap.xml` – search engine directives referencing the production domain.

## Deployment

1. Zip the project directory or connect the repository directly to Netlify.
2. Deploy as a static site (no build step required).
3. Configure the custom domain `brightgridkent.co.uk` in Netlify and update the registrar DNS records.
4. Enable email notifications for the Netlify form named `quote` so new leads are delivered to your inbox.

## Next Steps

- Monitor the Netlify form submissions and respond to leads promptly.
- Prepare additional location pages (e.g., Tunbridge Wells) and add them to the sitemap as they go live.
- Create a simple privacy policy page once lead volume increases.
