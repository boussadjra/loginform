Build a single-file one-time code screen styled as a bank vault door, using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section, background #0d0e10 with a soft `radial-gradient(circle at 50% 40%, #23252a, transparent 60%)`. Text #e9e4d8.
- Centered door panel, max width 48rem, 28px radius, black border. Brushed-steel fill made of two layered backgrounds: `repeating-linear-gradient(90deg, rgba(255,255,255,.035) 0 1px, transparent 1px 3px)` over `linear-gradient(160deg, #4a4d53, #2b2d31 45%, #1b1c1f)`. Shadows: a deep drop shadow, a top inset highlight, an inset 6px #1a1b1e frame and a 1px brass (#c9a24a/35) inner rim. Four 10px brass rivets (radial #f3d98a → #8a6a24) in the corners.
- Two columns on md+ (240px dial, then the form); stacked and centered on mobile (dial ~176px wide).

Dial (inline SVG, aria-hidden, viewBox 200x200)
- Dark #17181b disc with a 3px brass gradient rim; a ring of 60 minor ticks (circle r=84, stroke #9aa0a8, width 8, dasharray `1.2 7.596`) and 12 brass major ticks (width 12, dasharray `2.4 41.58`); brass labels 0 / 25 / 50 / 75 in JetBrains Mono.
- A steel radial-gradient knob (r=62) with three brass spokes at 0°, 120°, 240° ending in brass balls, a brass hub, and a brass triangle pointer at the top. Prefix gradient ids with `vault-`.

Form
- Eyebrow "STERLING & VALE" (Cinzel, bold, 0.35em tracking, #c9a24a), heading "Private Vault" (Cinzel, 3xl/4xl, black text shadow), and "Enter the 4-digit access code sent to your registered device to release the door." at 65% opacity.
- A recessed tray (#0b0b0d, inset black shadow) holding 4 flex-1 digit wheels, 128px tall: cylinder gradient `linear-gradient(180deg, #050505, #2a2c30 22%, #4a4d53 50%, #2a2c30 78%, #050505)`, black border, a brass/40 hairline window around the centre, faint ghost digits above and below (the previous and next number), and a centred 5xl extra-bold JetBrains Mono input with a black text shadow and brass caret. Brass ring on keyboard focus via `has-[input:focus-visible]`.
- Inputs: sr-only labels "Digit N of 4", `type="text" inputmode="numeric" pattern="[0-9]*"`, the first with `autocomplete="one-time-code"`, the rest `maxlength="1"`.
- Full-width brass button "UNLOCK VAULT": gradient #f6df98 → #c9a24a → #9a7a2e, #6e531c border, Cinzel bold with wide tracking, dark text, top inner highlight.
- Footer in 11px mono: "VAULT 07 · GENEVA" left, "3 ATTEMPTS LEFT" right.

Behaviour (vanilla JS, hooks `data-otp="vault"`, `data-wheel`, `data-otp-box`, `data-prev`, `data-next`)
- Auto-advance on digit, Backspace on empty goes back and clears, arrows move, paste spreads a full code. Ghost digits update to the value ±1.
- Submit prevents default, then shows "TURNING TUMBLERS…" as a demo pending state.
