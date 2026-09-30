Build a single-file passkey-first sign-in card using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section, warm off-white background (#f6f5f3), Geist font, antialiased, a centered column max width 25rem.
- Above the card: a logo row — a 28px near-black (#1c1917) rounded square holding a 2×2 grid of tiny white/white-40% squares — and the name "Ledgerly".
- White card, 1px #e7e5e4 border, rounded-2xl, very soft shadow (0 1px 0 #0000000a, 0 12px 32px -16px #1c191726), 24–32px padding.

Content
- "Sign in to Ledgerly" (20px semibold, tight tracking) and a stone-grey (#78716c) sub line: "Welcome back. Use your passkey for the fastest, most secure sign-in."
- Hero button: full-width, rounded-xl, #1c1917 with white 15px medium text "Sign in with passkey", a person-with-key outline icon, inner top highlight. Under it a tiny centered hint (#a8a29e): "Touch ID, Face ID, Windows Hello or a security key" (aria-live).
- A `<details>` (named group `group/more`) separated by a hairline: summary "Other ways to sign in" with a chevron that rotates 180° when open, native marker hidden.
- Inside: email input (`autocomplete="username webauthn"`), password input with a "Forgot?" link next to its label, an outlined "Sign in with password" button, and a text link "Email me a magic link instead". Inputs are #fafaf9 with a #e7e5e4 border, turning white with a dark border and faint ring on focus.
- Below the card: "New to Ledgerly? Create an account".

Behaviour
- Root `data-passkey-first data-state="idle"`; hero button `data-passkey-button` with text in `data-label`; hint `data-status`; fallback form `data-auth-form`.
- Clicking the hero: state "pending" (key icon swaps to a spinner, "Waiting for your passkey…"), after 1.8s state "success" (button turns green #15803d with a check, "Signed in"), then reset. Comment that the timers stand in for navigator.credentials.get(). The password form preventDefaults and shows "Signing in…".
