Build a single-file social sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport near-black zinc section (#09090b) with a faint dot grid (radial-gradient #27272a 1px dots on a 22px grid) that fades out toward the edges via a radial mask. Font: Geist.
- Centered 380px column. Header: a small pill "Halcyon Cloud" (11px, #a1a1aa text, #18181b fill, #27272a border) with a 6px green (#4ade80) status dot; "Choose how to sign in" (26px semibold, -0.02em tracking, #fafafa); subline "One tap. We never post on your behalf." in #71717a.

Grid
- A 3×3 grid (12px gap) of square tiles (aspect-square), rounded-2xl, #18181b fill, 1px #27272a border, inset top highlight.
- Each tile stacks a 28px inline SVG logo over a 12px medium label in #a1a1aa: Google (4-color G), Apple (white), GitHub (white octocat), Microsoft (4 squares), X (white), Discord (#5865F2), GitLab (orange tanuki #E24329/#FC6D26/#FCA326), Slack (pill pinwheel), Figma (five colored shapes).
- Hover/focus: tile lifts 4px (-translate-y-1), border #3f3f46, bg #1f1f23, label turns white, deep drop shadow, and the logo scales to 110% (group-hover). 200ms transitions. White focus-visible outline.

Footer
- A row link "Use email and password instead" with a right arrow, #a1a1aa turning white on hover.
- Small print legal footer: 11px #71717a text above a #27272a top border, with underlined Terms of Service and Privacy Policy links, mentioning only name, email and avatar are requested.
- All SVGs `aria-hidden`, every tile is a `<button type="button">` with a visible text label.
