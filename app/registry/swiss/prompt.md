Build a single-file sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport white section, black text, Swiss red #e30613 as the only accent. Font Inter, bold weights, tight negative tracking on display type.
- A solid red rectangle anchored top-right (40% of the height, 1/3 wide on mobile, 22% on desktop). On lg, faint 1px black/6% vertical lines mark a 12-column grid across the page.
- Content is a max-w-7xl 12-column grid (gap-x-4) with header, body and footer pushed apart (content-between).

Header
- 4px black top rule, then tiny two-line labels in grid columns: "Raster / Type Archive" (bold), "Anmeldung / Connexion", "Zürich / Est. 1957", and "Mitglieder / Members" right-aligned (white where it sits on the red block).

Body (asymmetric)
- Left 6 columns: a giant red "01" numeral (9rem → 13rem → 17rem, leading 0.78, tracking -0.08em), the headline "Sign / in." (6xl → 8xl, leading 0.85), and a short paragraph under a 2px rule: "Access 4,812 digitised specimens, grids and posters from the archive. Members only."
- Right form in columns 8-12: each field is a row with a 2px black top rule and a 3rem index column holding a red "1.1" / "1.2", then the bold label and a borderless input with only a 2px black/15 bottom line that turns red on focus; input text 2xl medium.
- "Forgot password" underlined link aligned right on the password label row.
- Submit: full-width black block in the same 3-column rhythm ("→", big bold "Sign in", faint "Enter ↵"), turns red on hover.

Footer
- 2px rule, "Not a member yet? Create an account", "Typeface: Inter", "© Raster 2026" in grid columns.
- Hooks: `data-auth-form`, `data-label` around the button text.

Behaviour
- Submit: preventDefault, disable, "Signing in", then "Willkommen", then restore.
