Build a single-file sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport white section, text #111111, font Inter Tight, antialiased. Base size is tiny: 13px body, 11px meta, 10px floated labels.
- Three rows (flex column): a header with "ONDO" (semibold, 11px, 0.08em tracking, uppercase) on the left and a faint "CREATE ACCOUNT" link on the right; a centered 18rem-wide form column with huge vertical breathing room; a footer with "© 2026" and "Privacy · Terms" at 35% black.

Content
- "Sign in" (13px medium) and "Welcome back. Enter your details." at 45% black, then a 4rem gap before the fields.

Form
- Each field is a relative wrapper with pt-4. The input comes first (class `peer`, `placeholder=" "`), with no border except a 1px black/15 bottom hairline, transparent background, 13px text.
- The label comes after the input and floats: by default it is 10px uppercase tracked at the top; `peer-placeholder-shown:` drops it onto the line at normal case 13px; `peer-focus:` floats it back up and turns it black. transition-all duration-300.
- A 1px black line (span after the input) scales from 0 to full width from the left on focus (origin-left, scale-x-0 → peer-focus:scale-x-100, duration-500).
- A tiny "Show" / "Hide" text button sits at the right end of the password line.
- Bottom row: a faint "Forgot password?" link on the left and the only solid element on the page on the right: a black pill button "Continue" with a thin arrow; hover widens the gap and nudges the arrow.
- Below, far down: "No account? Create one" with a faint underline.
- Hooks: `data-auth-form`, `data-toggle-password aria-controls="hairline-password" data-show="Show" data-hide="Hide"`, `data-label` around the button text.

Behaviour
- Show/Hide toggles the password type. Submit: preventDefault, disable, "Signing in", then "Done", then restore.
