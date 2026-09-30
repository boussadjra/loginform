Build a single-file magic-link sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section, calm pale blue (#eef4fb) with a soft radial glow of #dbe8fb from the top center. Everything uses Inter; text colour deep navy #0f2542, secondary #5a6b85.
- Centered column, max width 26rem: a small "Harbor" wordmark with a two-wave SVG logo in #2f6fed, a white card (rounded-2xl, 1px navy/5 ring, soft blue-tinted shadow `0 12px 40px -12px rgba(47,111,237,.25)`), and a footer line "New to Harbor? Create a workspace".

Form state
- Heading "Sign in without a password" (2xl semibold, tight tracking) and a sentence about getting a secure link.
- Visible label "Email address" and an email input: rounded-xl, #d5e0ef border, #f8fbff fill, 4px #2f6fed/15 focus ring.
- Full-width #2f6fed button "Email me a sign-in link" with a right arrow icon and a blue glow shadow.
- A small lock icon line: "Links expire after 10 minutes and work once."

Sent state (hidden initially)
- A centered inline SVG illustration of an open envelope with a letter (blue text lines) peeking out, a blue check badge and two sparkles.
- "Check your inbox", "We sent a sign-in link to" + the entered email in bold.
- Two outlined buttons side by side (stacked below 400px): "Open Gmail" (multicolour M icon, links to mail.google.com) and "Open Outlook" (blue O tile, links to outlook.live.com).
- A divider, then "Didn't get it? Resend in 0:30" (disabled grey until the timer ends, then a blue "Resend email"), and a "Use a different email" link.

Behaviour
- On submit, show "Sending link…", then hide the form and fade/slide the sent state in (opacity-0 translate-y-2 removed on the next frame). Start a 30-second countdown; resend restarts it; "Use a different email" returns to the form.
