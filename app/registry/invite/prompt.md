Build a single-file "accept team invitation" sign-up screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section in pale mint (#ecf5f3) with two soft radial glows: teal (rgba(15,118,110,.14)) top-left and amber (rgba(245,158,11,.14)) bottom-right.
- Centered card max-w-md: white at 90% with backdrop blur, 24px radius, white hairline border and a layered teal-tinted shadow.

Header
- A 64px rounded-2xl teal (#0f766e) workspace logo (white stroked "N" mark with a mint #5eead4 dot at its top-right) with the inviter's 40px amber (#fbbf24) avatar "MR" overlapping its bottom-right corner, ringed in white.
- Centered 26px bold, `text-balance` headline: "Maya Ruiz invited you to join Northwind" with the inviter's name in teal.
- Workspace chip below: pill with a mint border and fill, tiny teal "N" dot, "northwind.team · 24 members".

Form
- Locked email: readonly input prefilled "sam.okoro@northwind.team", dashed #cbd8d5 border, muted fill and text, padlock icon on the right, `cursor-not-allowed`, hint "This invite is tied to this address." wired with `aria-describedby`.
- "Full name" and "Choose a password" inputs: 12px radius, #d7e3e0 border, teal border + 4px teal/15 ring on focus.
- Full-width teal button "Accept invite & join" with a teal glow, darker #115e59 on hover.
- Footer inside the card, separated by a hairline: five overlapping 32px avatars (`-space-x-2`, white rings) with pastel initials PK, TB, LA, JW and a dark "+20", next to "Priya, Tom and 22 others are already here".
- Under the card: "Not you? Use a different account".
- Font: Plus Jakarta Sans. Visible labels, ids prefixed `invite-`, `data-auth-form` on the form.

Behaviour
- Submit shows "Joining Northwind…" briefly.
