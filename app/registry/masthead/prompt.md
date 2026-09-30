Build a single-file sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section on cream paper #f3eee3 with ink #1a1714 text and an oxblood accent #9b2c1f. Body font Fraunces, display font Playfair Display (bold).
- Max-w-7xl, two columns on lg (1.15fr / 1fr) separated by a 2px ink rule; on mobile the columns stack with a 2px rule between them.

Left: the magazine cover
- Top strip of tiny tracked uppercase text ("Issue Nº 214 · Autumn · 2026 · £6.50") over a 1px rule, then the nameplate "The Margin" centered (5xl → 7xl Playfair bold) above a 4px double rule.
- Oxblood kicker "MEMBERS' ENTRANCE", then a giant headline "Welcome / *back,* reader." (3.4rem → 8xl → 7.5rem, leading 0.9), where "back," is regular-weight italic.
- Under a hairline, a two-column text block: a paragraph with a large Playfair drop cap ("Your saved essays, annotations and the full archive back to 1987…") and an italic pull quote with attribution (hidden on mobile).
- Footer line on lg: "Essays · Criticism · Fiction · Letters".

Right: the form
- Tiny "PAGE 02 — SIGN IN" folio, then "Continue where / *you left off.*" (3xl).
- Labels are 11px tracked uppercase (small-caps feel). Inputs have no box: only a 1px ink bottom border, transparent background, 20px text (email in italic), turning into a 2px oxblood underline on focus.
- "Forgotten?" italic underlined link aligned with the password label.
- Submit: full-width ink block with cream italic "Sign in & read" left and an arrow right; hover turns it oxblood.
- A rule with a ✦ ornament, then "Not yet a subscriber? *Subscribe from £4 a month*" with an oxblood underline.
- Hooks: `data-auth-form`, `data-label` on the button text.

Behaviour
- Submit: preventDefault, disable, "Turning the page…", then "Welcome back", then restore.
