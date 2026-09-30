Build a single-file cross-device passkey sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section, pale mint background (#f4fbfa), Plus Jakarta Sans. A centered white card, max width 64rem, rounded-3xl, 1px #d5ecea ring, teal-tinted shadow (0 24px 60px -24px #0d948840). Two equal columns from md, stacked on mobile.

Left column (explainer)
- Brand row: 32px teal (#0d9488) rounded square with a two-wave icon + "Tidewell".
- Heading "Sign in with the passkey on your phone" (extrabold, 36px, deep teal #083f3c) and body copy in #4b6f6c explaining the passkey stays on the device.
- Numbered list with mint (#e6f6f4) circular badges: "Open the camera on your phone", "Point it at the code and tap the prompt", "Confirm with Face ID or your fingerprint".
- Visible "Email" label, email input (`autocomplete="username webauthn"`, #cfe5e2 border, teal focus ring) and a full-width teal "Sign in with passkey" button with a key icon.
- Fallback: "Can't use a passkey? Email me a code".

Right column (device)
- Mint (#e6f6f4) panel with two big decorative rings (thick #d2eeea borders) bleeding off the corners.
- A phone outline: 15rem wide white body, 7px #083f3c border, 2.6rem radius, pill notch. Inside: "Use a phone or tablet" (bold), "Scan to approve on another device", then a decorative 25×25 QR code drawn as one SVG path of 1-unit rects (three finder squares, random modules, crispEdges, fill #083f3c) with a teal key badge in the center, and a status line "Code refreshes every 30s" with a teal dot.

Behaviour
- Root `data-handoff data-state="idle"`, form `data-passkey-form`, button text `data-label`, status `data-status-text`.
- On submit: preventDefault, state "waiting" (teal ring pings around the QR, dot pulses, button "Waiting for your device…", status "Waiting for your phone…"), after 2.6s state "success" (QR fades, teal check disc scales in, "Approved on iPhone"), then reset. Comment that the timers stand in for navigator.credentials.get().
