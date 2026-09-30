# Threshold

Copy-paste auth UIs built with plain HTML and Tailwind CSS. Every screen ships with the prompt that regenerates it, so you can drop it into any frontend or remix it with a model.

> Threshold grew out of [loginform](legacy/), a pure-CSS login form from 2018. The original lives on in `legacy/` and as the **Classic** entry in the gallery.

## Stack

- Nuxt 4 + Tailwind CSS v4, no UI component libraries
- Snippets are framework-agnostic: HTML with Tailwind classes, plus optional vanilla JS

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm generate   # static site in .output/public
```

## Deploying to Vercel

Import the repository in Vercel and keep the defaults: `vercel.json` pins the Nuxt preset, pnpm install and `pnpm build`. All pages are prerendered at build time and served from the CDN, so no environment variables are needed.

## Adding a UI

Create a folder in `app/registry/<slug>/`. The folder name becomes the URL (`/ui/<slug>`).

| File | Required | What it holds |
| --- | --- | --- |
| `meta.ts` | yes | `defineUi({ name, tagline, category, tags, palette, fonts?, canvas? })` |
| `snippet.html` | yes | The copyable markup. Tailwind utilities only, no custom CSS. |
| `snippet.js` | no | Vanilla JS with no imports. Target elements with `data-*` hooks such as `data-auth-form`. |
| `prompt.md` | yes | A self-contained prompt that rebuilds the UI from scratch. |

The registry picks the folder up automatically. Previews render the snippet in a sandboxed iframe with the Tailwind browser build, exactly as a consumer would paste it.

## Roadmap

- More screens and variants per category
- Auth integrations: wiring guides for Better Auth, nuxt-auth-utils, Supabase, Clerk, Firebase and generic OIDC
