Build a single-file 2FA account-recovery screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport near-black (#0b0c0f) section with barely visible amber diagonal hazard stripes (135deg, #f5a524 at ~3% alpha, 28px tiles). IBM Plex Sans for text, JetBrains Mono for codes and labels, text #e7e9ee.
- Centered panel, max width 56rem, #15171c, 1px #262a33 border, 16px radius, deep shadow.
- Top bar: amber shield tile + "Northstack Console" on the left, an amber outlined mono pill "ACCOUNT RECOVERY" on the right.
- Body is two columns on md+ (form 1.25fr, aside 1fr with a #111317 background and a left border); stacked on mobile.

Form column
- Heading "Lost your authenticator?" and muted (#9aa1ad) copy: "Enter one of the 10 backup codes you saved when you turned on two-factor authentication for ops@northstack.io."
- Label "Recovery code" with a mono "xxxx-xxxx" hint on the right. One big centered mono input (24–30px, 0.35em tracking, amber text, #0b0c0f fill, #2d323c border, amber border + 4px amber/12 glow on focus), placeholder "7K2Q-M9XD", `autocomplete="one-time-code"`, maxlength 9, pattern `[A-Za-z0-9]{4}-[A-Za-z0-9]{4}`.
- Amber warning callout (amber/35 border, amber/8 fill, triangle icon): "Each code works only once. Using it removes 2FA from your lost device. Anyone with your codes can do the same, so keep the rest offline."
- Full-width amber "Verify recovery code" button, disabled (#2d323c / #6b7280) until a full code is entered. A green (#86efac) status line below.

Aside
- Mono caption "WHAT HAPPENS NEXT" and a numbered list with circular badges (first one amber, others grey): "We verify your code", "Your old device is unlinked", "You set up 2FA again", each with a one-line explanation.
- Footer: "No codes? Start identity verification — takes 1–3 business days." with the link in amber.

Behaviour
- On input, uppercase, strip non-alphanumerics, cap at 8 chars and insert the dash after 4; enable the button only at 8 chars.
- On submit (`data-rc-form`): "Verifying…", then show "Code accepted. 9 backup codes remain — continue to set up 2FA."
