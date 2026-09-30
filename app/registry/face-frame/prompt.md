Build a single-file passkey sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section, iOS system grey background (#f2f2f7), Inter font, antialiased. A centered white card, max width 22rem, radius 2.25rem, soft layered shadow (0 1px 2px rgba(0,0,0,.04), 0 20px 50px -12px rgba(0,0,0,.12)), everything text-centered.

Face glyph
- An 8rem square with two stacked inline SVGs (viewBox 100, stroke 5, round caps, iOS blue #0a84ff):
  - four rounded corner brackets (12-unit radius corners, 24-unit arms) — the Face ID frame — with `animate-pulse` while idle;
  - a minimal face: two short vertical eyes, an L-shaped nose, a smile curve.
- A green (#34c759) ring with a check, hidden (scale-50, opacity-0) until success; the brackets scale up and fade then.

Copy
- Heading "Sign in to Lumen" (26px, semibold, -0.02em tracking). Helper text in #6e6e73: "Look at your screen to sign in with Face ID. Your passkey never leaves this device." (aria-live).

Form
- iOS grouped field: #f2f2f7 rounded-2xl box with a tiny grey label "Apple ID or email" above an email input (`autocomplete="username webauthn"`); on focus-within it turns white with a 2px blue ring.
- Full-width rounded-2xl blue "Sign in with passkey" button (white semibold, darker #0071e3 on hover, slight press scale). It reads "Scanning…" / "Signed in" (turning green) via group-data-[state=…] variants.
- An "or" divider with hairlines (#e5e5ea) and a blue text link "Use email and password".

Behaviour
- Root `data-face-frame data-state="idle"`, form `data-passkey-form`. On submit: preventDefault, state "scanning" (brackets shrink to 90%, face pulses), after 2s state "success", then reset. Comment that the timers stand in for navigator.credentials.get().
