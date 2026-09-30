Build a single-file magic-link sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport dark stage (#07070b), Geist for text and Geist Mono for small labels. Two decorative layers: a violet radial glow `rgba(139,92,246,.22)` centred slightly above middle, and a 28px dot grid of white/7% masked by a radial gradient so it fades out at the edges.
- A slim header row: a small conic-gradient dot + "Nocturne" on the left, a muted "Need help?" link on the right. A tiny mono footer: "By continuing you agree to the Terms and Privacy Policy."

Content (centred)
- Mono eyebrow "PASSWORDLESS" (xs, tracking 0.3em, zinc-500).
- Huge headline "Just your email." (5xl → 7xl, semibold, tracking -0.04em) filled with a vertical gradient from #fafafa to #71717a via bg-clip-text.
- One line of zinc-400 copy: "We'll send a link that signs you in. No password, no codes."

Form
- A single pill (max width 32rem). Its 1.5px ring is a rounded-full overflow-hidden wrapper holding an oversized square (120% width, centred) filled with `conic-gradient(#27272a, #8b5cf6 60deg, #22d3ee 150deg, #8b5cf6 220deg, #27272a 280deg)` that uses `animate-spin` at 5s, so light races around the border. A blurred copy of the same spinning gradient sits behind for a glow that brightens on focus-within.
- Inside (#0c0c12): a mail icon, a borderless email input (sr-only label, placeholder "you@studio.com"), and a round white 44px submit button with an arrow icon and aria-label.
- Below: "Press ↵ Enter to get your link" with a styled `<kbd>` keycap (zinc-900, zinc-700 border, 2px bottom shadow).

Behaviour
- On submit, pulse the button, then replace the form with a sent pill: a pinging cyan dot, "Link sent to <email>" (truncated), and a "Change" button that brings the form back; under it "Check your inbox. The link works once and expires in 15 minutes."
