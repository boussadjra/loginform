Build a single-file magic-link sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section with a soft gradient mesh: base #f6ece8 under layered radial gradients (peach #ffd6c2 at 12% 18%, lilac #d9c8ff at 88% 12%, mint #bff0dc at 78% 88%, pale violet #e8d4ff at 18% 92%, warm white #fff3ea at the center, each fading to transparent by 40-60%). Add two big blurred blobs (peach #ffc4a8/60 top right, mint #a8e8cf/60 bottom left, blur-3xl) for depth.
- Centered frosted card, max width 28rem: white/55, backdrop-blur-2xl, rounded-3xl, 1px white/80 ring, soft violet shadow `0 30px 80px -30px rgba(88,60,140,.35)`. Font Plus Jakarta Sans; ink #2b2140, secondary #5d5470. No emoji.

Details
- Brand row: an organic blob logo (rounded 40% 60% 55% 45%, conic gradient of #ffb08a, #c9a8ff, #8fdcbc with a white inset ring) + "Kindred" in bold.
- Heading "Welcome back" (3xl bold, tight tracking) and "Pop in your email and we'll send a magic link. No password to remember, ever."

Form
- Visible "Email" label; the input lives in a rounded-2xl white/80 pill with an @ icon, 1px ink/10 ring that becomes a 2px #9b7bff ring on focus-within.
- Full-width rounded-2xl ink (#2b2140) "Send magic link" button with a deep shadow and a slight lift on hover.
- An "or" divider, then a translucent white "Continue with Google" button with the four-colour G.
- Footer: "New here? Create an account" (link #6d4fe0).

Behaviour
- On submit, show "Sending…", then swap the form for a sent state: an 80px circle filled with a peach→lilac→mint radial gradient holding an envelope icon, "Check your email", the address in bold and "It's good for the next 15 minutes.", plus "Resend link" (briefly shows "Sent again") and "Use another email" buttons side by side on desktop.
