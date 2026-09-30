Build a single-file passkey sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section, near-black navy background (#05070d) with a faint 32px blueprint grid (#0c1222 1px lines) and a deep blue radial glow (#0d2a6b) behind the illustration. Content is a centered column, max width ~24rem, text-center.
- Fonts: Space Grotesk for text, JetBrains Mono for tiny uppercase labels (11px, 0.3em tracking). Eyebrow "Vaultline · Secure sign-in" in electric blue (#3d8bff).

Fingerprint
- A 13–15rem circle stage: a hairline ring (#1f2a44), an inner dashed ring, a soft blue blur glow.
- Inside, an inline SVG fingerprint (viewBox 120) made of 10 nested inverted-U paths centered at (60,64), radii 5–50, stroke-width 3.2, round caps, uneven leg lengths and some stroke-dasharray breaks so it reads as ridges. Idle stroke #1f2a44; each ridge has `data-ridge` and `data-lit:stroke-[#3d8bff]` with a color transition.
- A 2px scan line (#8fd3ff, glow shadow 0 0 18px 4px #3d8bff) sits at the top, hidden until scanning.
- A blue check disc (#3d8bff, dark check) is hidden (scale-50, opacity-0) until success; the fingerprint scales down and fades then.

Copy and form
- Heading "Touch to sign in" (swaps to "Verifying…" / "Welcome back" via group-data-[state=…] variants on the root), helper line "Use your fingerprint or device passkey. No password required." with aria-live.
- Email input (visible mono label, `autocomplete="username webauthn"`, dark #0a0f1c fill, blue focus ring) and a full-width glowing blue "Sign in with passkey" button with a fingerprint icon.
- Fallback: "No passkey on this device? Email me a sign-in link".

Behaviour
- Root has `data-fingerprint data-state="idle"`; the form has `data-passkey-form`.
- On submit: preventDefault, disable the button, set state "scanning" (the scan line slides to the bottom over 2.2s, the dashed ring spins), light ridges one by one every 200ms, then set state "success" and reset after a pause. Comment that the timers stand in for navigator.credentials.get().
