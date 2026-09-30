Build a single-file social sign-in screen styled as a ⌘K command palette, using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport near-black section (#0b0b10) with a 640px soft violet radial glow (rgba(139,92,246,.32)) behind the palette, and a faint fake window bar pinned to the top (three #27272a dots and "forge.dev / sign-in" in JetBrains Mono, #52525b). Font: Inter; JetBrains Mono for key hints.
- Centered palette, max 560px, rounded-2xl, #17171f at 95% with backdrop blur, 1px white/10 border, huge dark drop shadow and an inset top highlight.

Palette
- Search row: magnifier icon, a borderless 56px combobox input (sr-only label "Sign in with…", placeholder "Sign in with…", violet caret) and an "esc" kbd chip.
- A listbox with small uppercase #52525b group labels "Providers" and "Other". Rows (role="option", `data-cmd-item`, `data-name`, `data-key`): a 32px rounded icon tile (#1f1f29, white/10 border) holding the logo, a title "Continue with GitHub" (14px medium #e4e4e7) over a 12px #71717a subtitle, and on the right two kbd chips "⌘" + key.
- Providers: GitHub "Recommended for Forge" ⌘1, GitLab ⌘2, Google ⌘3, Microsoft ⌘4, Apple ⌘5. Other: "Email magic link" ⌘E, "Single sign-on" (SAML or OIDC) ⌘S.
- Selected row via `aria-selected="true"`: bg white/7, brighter text, icon tile border turns violet (#8b5cf6); on phones the kbd chips hide and a violet ↵ icon shows on the selected row.
- Empty state (hidden): "No sign-in method matches. Try “email”."
- Footer bar on black/20: a violet "F" badge + "Forge" status text (aria-live) on the left, "↑↓ navigate  ↵ select" mono hints on the right.

Behaviour
- Typing filters rows by `data-name` and hides group labels; the first match becomes selected.
- ArrowUp/ArrowDown cycle the selection (updating aria-activedescendant), Enter or click chooses, Esc clears, ⌘/Ctrl+key triggers a row's shortcut, hover moves the highlight.
- Choosing shows "Redirecting to GitHub…" in the footer, then "Signed in ✓" (replace with your OAuth redirect).
