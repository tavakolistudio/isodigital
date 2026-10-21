# ISO Digital

## Local development

Run `npm install`, copy `.env.example` to `.env.local`, configure an approved `LEADS_WEBHOOK_URL`, then run `npm run dev`.

## Cloudflare Workers deployment

This project uses the Cloudflare OpenNext adapter so App Router routes and the server-side inquiry endpoint run on Workers. It is not a Cloudflare Pages static export.

1. Authenticate once with `npx wrangler login`.
2. Install dependencies with `npm install`.
3. Set the real production webhook without placing it in source control: `npx wrangler secret put LEADS_WEBHOOK_URL`.
4. Add `NEXT_PUBLIC_SITE_URL` as a Cloudflare **build variable**, using the final `workers.dev` or custom-domain origin.
5. Run `npm run cf:preview` to test in the Workers runtime, then `npm run cf:deploy` to publish.

For Git-based deployment, connect the repository in **Workers & Pages → Create → Workers → Import a repository**. Set the deploy command to `npm run cf:deploy`; use `npm run cf:preview` for previews. Keep `LEADS_WEBHOOK_URL` as a secret, never a build variable.

The endpoint validates inputs and contains a honeypot plus a short instance-level throttle. Before accepting public traffic, add a Cloudflare WAF rate-limiting rule for `POST /api/leads`; an in-memory Worker map is not a globally durable rate limiter.

## Quality checks

Run `npm run typecheck`, `npm run lint`, `npm run build`, and `npm run cf:preview` before production deployment.

## Content safeguards

Portfolio placeholders and legal copy are clearly marked draft until verified assets, commercial rules, and legal text are approved. No testimonial or result claims are included.
