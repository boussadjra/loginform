Build a single-file sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section on warm off-white #efeee9, font Geist, ink #16161a, muted text #6b6b73. Accent colours: lime #d4f36b, peach #ffb38a, lavender #c9b8ff.
- A max-w-6xl bento grid with 12px gaps and 28px tile radii: 1 column on mobile (tiles stack, form first), 2 on md, 4 on lg with rows `auto 1fr auto`.
- lg placement: the white sign-in tile spans columns 1-2 and all three rows; right side row 1 = stats tile + security tile, row 2 = wide illustration tile, row 3 = wide testimonial tile.

Sign-in tile (white, generous padding)
- Brand: a 32px ink square (rounded 10px) with three lime lines, then "Tidy".
- Vertically centered body: "Sign in to Tidy" (4xl → 5xl, semibold, tracking -0.04em), "Your roadmap, docs and sprints in one calm place."
- Inputs: rounded-2xl, #f7f7f4 fill, #e4e3de border; focus turns white with an ink border and a 4px lime ring. Labels "Work email" and "Password"; "Forgot password?" muted link on the right of the password label; a small "Show"/"Hide" text button inside the password field.
- Full-width ink "Continue" button, then Google and Microsoft outline buttons (2-col).
- Footer line: "New to Tidy? Create a free workspace" with a thick lime underline.

Other tiles
- Stats (ink): "Teams shipping on Tidy", big "12.4k", lime "+38% this quarter" with a trend icon.
- Security (peach): shield-check icon, "SSO & SOC 2", "Okta, Google & SAML ready."
- Illustration (lavender, aria-hidden): two tilted mini UI cards (a white note card and an ink card with lime/peach blocks) plus a lime circle and an ink rounded square peeking from the bottom.
- Testimonial (lime): a quote "We replaced three tools with Tidy and our Monday stand-up got 20 minutes shorter." with an "MO" avatar, "Maya Okafor, Head of Product, Fieldnote".
- Hooks: `data-auth-form`, `data-toggle-password aria-controls="bento-password" data-show="Show" data-hide="Hide"`, `data-label` around the button text.

Behaviour
- Show/Hide toggles the password type. Submit: preventDefault, disable, "Signing in…", then "Welcome back", then restore.
