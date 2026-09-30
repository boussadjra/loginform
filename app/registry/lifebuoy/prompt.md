Build a single-file forgot-password screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section in deep navy (#0b2545) with two faint radial glows (#13315c top-left, #134074 bottom-right).
- Centered card, max width ~56rem, cream (#f8f4ec), 2rem radius, big soft shadow. On md+ it splits into two columns (illustration left, form right); on mobile the illustration stacks on top (~15rem tall).

Illustration panel
- Harbor blue (#134074) background. Hand-drawn inline SVG lifebuoy: a 40px-thick ring whose stroke is white with four red (#e63946) segments made via `stroke-dasharray` on a second circle, a dotted white rope circle around it, two tan (#c9a66b) rope loops and a white highlight arc. It lifts and tilts slightly on hover.
- Three stacked wave paths along the bottom (#8fb8de at 55% opacity, #1d5a96, #0b2545) and a tiny "Harbor · Crew Portal" caption in wide-tracked uppercase.

Form panel
- Pill badge "Man overboard? No problem." in red on a red/10 background, then a Fraunces serif heading "Lost your password?" and DM Sans body copy: "It happens to the best sailors. Tell us the email on your account and we'll throw you a line to get back aboard."
- Visible "Email address" label, white input with 2px navy/15 border, 12px radius, focus ring in #8fb8de.
- Red "Send me a reset link" button with a solid darker red (#a4161a) bottom shadow that presses in on click.
- A "Back to sign in" link with a chevron at the bottom.
- A hidden success panel: navy circle with a mail icon, heading "Line thrown!", copy with the email in bold, and a "Use a different email" text button.

Behaviour
- On submit: disable the button and show "Throwing a line…", then hide the request panel and reveal the success panel with the typed email. "Use a different email" swaps back. Hook with `data-lifebuoy-form`, `data-lifebuoy-request`, `data-lifebuoy-sent`, `data-lifebuoy-address`, `data-lifebuoy-retry`.
