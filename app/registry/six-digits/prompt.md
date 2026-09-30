Build a single-file email verification (one-time code) screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section, background #f4f5f9 with a soft indigo glow at the top: `radial-gradient(circle at 50% 0%, #e0e7ff, transparent 55%)`. Center a white card, max width 28rem, 28px radius, 1px border #e6e8f0, padding 24px (40px on sm+), shadow `0 24px 48px -24px rgba(79,70,229,.25)`.
- Font: Plus Jakarta Sans. Text #0f172a, muted text #64748b.

Details
- Top: a 56px rounded-2xl badge in #eef2ff with an indigo (#4f46e5) envelope line icon and an 8px faint ring of the same tint.
- Heading "Check your inbox" (2xl, bold, tight tracking), then "We sent a 6-digit code to maya@lumen.app. It expires in 10 minutes." with the email in semibold dark text.

Form
- A fieldset with a small uppercase legend "Verification code".
- Six digit inputs in two groups of three separated by a short 12px grey (#cbd5e1) dash. Each box is flex-1 (so the row never overflows at 390px), 56px tall, rounded-xl, border #e2e8f0, fill #f8fafc, centered 2xl bold digits, indigo caret. Focus: indigo border, white fill and a 4px indigo/15 ring.
- Every box has an sr-only label ("Digit 1"…), `type="text" inputmode="numeric" pattern="[0-9]*"`; the first has `autocomplete="one-time-code"`, the others `maxlength="1"`.
- Full-width indigo "Verify email" button, rounded-xl, with a soft indigo drop shadow and darker hover (#4338ca).
- Footer line: "Didn't get it? Resend in 0:30" where the resend part is a disabled indigo text button.

Behaviour (vanilla JS, hooks `data-otp="six-digits"`, `data-otp-box`, `data-otp-resend`, `data-otp-submit`)
- Typing a digit moves to the next box; Backspace in an empty box clears and focuses the previous one; arrow keys move; pasting or autofilling a full code spreads it across the boxes.
- The resend button counts down from 30 seconds, then becomes "Resend code"; clicking restarts the timer.
- Submit prevents default, focuses the first empty box if incomplete, otherwise shows "Verifying…" as a demo pending state.
