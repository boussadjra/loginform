import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  // Every page is static: prerender them at build time (crawling from /) so Vercel serves them from its CDN.
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: 'Threshold',
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'description', content: 'Copy-paste auth UIs built with Tailwind CSS, each with a prompt to regenerate it.' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
})
