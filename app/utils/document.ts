import type { UiEntry } from '~/types/registry'

const TAILWIND_CDN = 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4'

export function fontsLink(fonts: string[] = []) {
  if (!fonts.length)
    return ''
  const families = fonts.map(font => `family=${font.replace(/ /g, '+')}:wght@400;500;600;700`).join('&')
  return `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?${families}&display=swap">`
}

/** A standalone page that renders the snippet as-is; used by the preview frame and the "full page" copy. */
export function buildDocument(entry: Pick<UiEntry, 'name' | 'html' | 'js' | 'fonts' | 'canvas'>) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${entry.name}</title>
  <script src="${TAILWIND_CDN}"></script>
  ${fontsLink(entry.fonts)}
</head>
<body style="margin:0;background:${entry.canvas ?? '#ffffff'}">
${entry.html}
${entry.js ? `<script>\n${entry.js}\n</script>` : ''}
</body>
</html>
`
}
