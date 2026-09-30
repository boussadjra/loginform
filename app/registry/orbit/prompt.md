Build a single-file passkey sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section, deep space background (#0b0618) with two soft nebula radial glows (#3b1d7a at 30%/45%, #86198f top-right) and a sparse starfield made of three offset radial-gradient dot layers with odd, non-matching tile sizes (113×97, 173×151, 263×229) so it never looks like a grid. Font: Sora.
- Two columns from md (orbit illustration left, glass card right), stacked on mobile; max width 64rem.

Orbit illustration (decorative, aria-hidden)
- An 18rem (24rem from sm) square with three concentric rings: outer solid, middle dashed, inner solid, violet (#8b5cf6) borders at 20/30/40% opacity.
- Each ring has a full-size wrapper spinning with `animate-spin` and an arbitrary `[animation-duration:40s|28s|18s]` (the middle one reversed). A small device tile sits on each ring edge (#160c30 rounded tile, violet or pink #f0abfc border + glow): laptop on the outer ring, phone on the middle, security key on the inner. The tile itself counter-spins with the same duration so it stays upright.
- Center: a glowing orb (radial gradient #ddd6fe → #8b5cf6 → #4c1d95, 0 0 40px violet glow, inset shadow) holding a dark key glyph, with a blurred violet halo behind.

Card
- Glass card: white/3% fill, white/10% border, rounded-3xl, backdrop blur, violet drop glow. Eyebrow "HALCYON" (0.3em tracking, #a78bfa). Heading "One key. / Every device." with the second line in a #c4b5fd → #f0abfc gradient text. Helper text (#a59bc4, aria-live): "Your passkey syncs across your laptop, phone and security key. Pick any of them to sign in."
- Email input (sr-only label, `autocomplete="username webauthn"`, #120a26, violet focus ring) and a full-width gradient button (#7c3aed → #a855f7 → #d946ef) "Sign in with passkey" with a key icon.
- Footer links: "Email me a code instead" and "Lost your devices?".

Behaviour
- Root `data-orbit data-state="idle"`, form `data-passkey-form`, button text `data-label`, helper `data-status`. On submit: preventDefault, state "scanning" (orbits speed up to 2–4s via group-data-[state=scanning]:[animation-duration:…], halo pings), after 2.4s state "success" (orb turns fuchsia and shows a check), then reset. Comment that the timers stand in for navigator.credentials.get().
