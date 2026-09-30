Build a single-file hardware security key sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section, charcoal (#17181b) with a subtle knurled texture: repeating-linear-gradient(45deg, #1b1c20 0 2px, transparent 2px 9px). Fonts: Archivo (headings/body) and IBM Plex Mono (labels, steps).
- Centered panel, max width 56rem, #1f2024, 1px #34353b border, rounded-xl, heavy black shadow plus a 1px inner top highlight. Two columns from md (1fr / 1.15fr), stacked on mobile.

Illustration (left)
- Warm radial glow (#3a2f1a) behind an inline SVG USB security key rotated -12deg with a drop shadow: brushed-metal USB-A plug (linear gradient #8d9199 → #e3e5ea → #7d8189) with two dark holes, a rounded #2a2b30 body with a #44464d outline, a gold touch contact (radial gradient #ffe6a8 → #d9a441 → #8a6420) inside a dark bezel with faint ridge lines, a pulsing translucent gold halo (`animate-pulse`), "KEYSTONE" engraved in mono, and a key-ring hole.
- Mono corner labels: "FIDO2 · USB-A" and an LED dot + "Standby" (dot pings gold while touching, turns green #6fcf97 on success).

Content (right)
- Mono gold eyebrow "Anvil Cloud · Hardware sign-in", heading "Insert and touch / your key" (extrabold, 36px), grey helper text (aria-live).
- Ordered list of three step rows (mono 13px, dark rows with #34353b border): "01 Plug the key into a USB port", "02 Touch the gold contact when it glows", "03 Wait for the green light". Rows use data-[state=active] (gold border, cream text) and data-[state=done] (number chip turns solid green) via named groups.
- Optional username input (`autocomplete="username webauthn"`, sr-only label) and a full-width gold gradient button (#f0c56a → #c98f2a, dark text, inner highlight) "Sign in with security key" with a key icon.
- Fallback links: "Use a passkey on this device" · "Sign in with email".

Behaviour
- Root `data-touch-key data-state="idle"`, form `data-passkey-form`, steps `data-step`, LED text `data-led`. On submit: preventDefault, then every 1.5s advance insert → touch → success, marking steps active/done and updating the status and LED text; reset after 6s. Comment that this stands in for navigator.credentials.get().
