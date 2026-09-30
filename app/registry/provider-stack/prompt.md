Build a single-file social sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport pure white (#ffffff) section, content centered in a 400px column, 16px side padding on phones. Font: Inter Tight.
- Header: a 44px near-black (#0a0a0a) rounded-xl app mark with a white line-chart icon, then "Sign in to Ledgerly" (28px, semibold, -0.02em tracking) and a grey (#737373) 15px subline "Pick up where your books left off."

Provider stack
- A vertical list of five full-width 48px buttons, 10px apart, rounded-xl, 1px #e5e5e5 border, white fill, #fafafa on hover: Google, Apple, Microsoft, GitHub, Slack.
- Each has a 20px inline SVG logo on the left (Google 4-color G, Apple silhouette, Microsoft 4 squares #F25022/#7FBA00/#00A4EF/#FFB900, GitHub octocat mark, Slack pinwheel of rounded pills in #36C5F0/#2EB67D/#ECB22E/#E01E5A) and left-aligned "Continue with …" text, 15px medium.
- The Google row is the last-used one: near-black border, a soft blue ring (0 0 0 3px rgba(37,99,235,.12)) and a right-aligned pill badge "LAST USED" in #2563eb on #eff6ff, 11px semibold uppercase.

Email fallback
- An "OR" divider: 12px uppercase wide-tracked #a3a3a3 text between two hairlines.
- Form (`data-auth-form`): email input (sr-only label "Work email", type email, autocomplete email, placeholder name@company.com) on #fafafa with blue focus ring, then a black full-width "Continue with email" button.
- Footer: "New to Ledgerly? Create an account" in 13px grey, link underlined with a light decoration.
- All logos `aria-hidden`, every button `type="button"` with a blue focus-visible outline.

Behaviour
- On submit, prevent default, disable the button and show "Sending link…" for 1.2s (replace with your auth call).
