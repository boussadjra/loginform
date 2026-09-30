import type { UiEntry, UiMeta } from '~/types/registry'

/*
 * Each UI lives in its own folder:
 *   meta.ts       – name, category, tags (required)
 *   snippet.html  – the copyable markup, Tailwind classes only (required)
 *   snippet.js    – optional vanilla JS, no imports
 *   prompt.md     – the prompt that regenerates the UI (required)
 * Adding a folder is all it takes to publish a new entry.
 */
const metas = import.meta.glob<UiMeta>('./*/meta.ts', { eager: true, import: 'default' })
const html = import.meta.glob<string>('./*/snippet.html', { eager: true, query: '?raw', import: 'default' })
const js = import.meta.glob<string>('./*/snippet.js', { eager: true, query: '?raw', import: 'default' })
const prompts = import.meta.glob<string>('./*/prompt.md', { eager: true, query: '?raw', import: 'default' })

function folderOf(path: string) {
  return path.split('/')[1]!
}

function fileIn(files: Record<string, string>, slug: string, name: string) {
  return files[`./${slug}/${name}`]
}

export const registry: UiEntry[] = Object.entries(metas)
  .map(([path, meta]) => {
    const slug = folderOf(path)
    const markup = fileIn(html, slug, 'snippet.html')
    const prompt = fileIn(prompts, slug, 'prompt.md')
    if (!markup || !prompt)
      throw new Error(`[registry] "${slug}" needs both snippet.html and prompt.md`)
    return { ...meta, slug, html: markup.trim(), js: fileIn(js, slug, 'snippet.js')?.trim(), prompt: prompt.trim() }
  })
  .sort((a, b) => a.name.localeCompare(b.name))

export function findUi(slug: string) {
  return registry.find(entry => entry.slug === slug)
}
