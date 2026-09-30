Build a single-file sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section on acid yellow (#ffde59) with a faint black dot grid (radial-gradient 1.2px dots, 22px spacing, 20% opacity).
- Two decorative stickers on md+ screens only: a pink (#ff5c8a) "NO FLUFF" bar rotated -8deg bleeding off the top-left, and a cyan (#6ee7ff) round "SHIP DAILY" badge rotated 12deg near the bottom-right. Both have 3px black borders and 6px 6px 0 #111 hard shadows.
- Centered white card, max-w-md, 4px black border, square corners, hard shadow 10px 10px 0 #111. A pink "SLAB / V2.4" sticker label hangs off its top-left edge, rotated -4deg.

Details
- Fonts: Archivo Black for the headline and button, Space Grotesk for everything else. Text #111111.
- Headline "Log in. / Get to work." (two lines, tight leading, 4xl → 5xl). Under it: "No account? Make one in 30s" with a thick yellow underline on the link.
- Two social buttons side by side (Google, GitHub) with 3px borders, 4px hard shadows that collapse on press (active:translate + shadow-none), cyan hover.
- A divider: 3px black bars either side of "OR EMAIL" in tracked uppercase.

Form
- Labels are black sticker chips with yellow uppercase text, slightly rotated (-1deg / 1deg).
- Inputs: 3px black border, cream #fffbea fill, square; on focus they turn white and get a pink 5px 5px 0 #ff5c8a hard shadow.
- "Forgot it?" link right-aligned beside the password label. A small yellow "SHOW" chip sits inside the password input on the right.
- Submit: full-width black bar with yellow uppercase "LOG IN" on the left and a thick arrow on the right, pink 6px hard shadow that disappears as the button shifts 6px on press.
- Mark the form with `data-auth-form`, the show chip with `data-toggle-password aria-controls="concrete-password"`, and wrap the button text in `data-label`.

Behaviour
- The show chip toggles the password type and swaps its text between Show/Hide (aria-pressed).
- On submit: preventDefault, disable the button, show "Checking…", then "You're in!", then restore.
