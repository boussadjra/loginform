Build a single-file early-access waitlist sign-up screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section on near-black violet (#08060f), content centered in a max-w-2xl column.
- Behind the content, a huge blurred glow: a 26rem-tall ellipse with a conic gradient (#8b5cf6 → #ff5fa2 → #ff9a3d → #8b5cf6), 55% opacity, `blur-[110px]`, sitting a little below centre, plus a gradient to #08060f at the bottom so it fades out.

Content
- Glassy pill badge: a pink (#ff5fa2) dot with `animate-ping` halo and "Halo is launching this winter".
- Giant Instrument Serif headline (56px mobile, 96px sm+, 0.95 leading, tight tracking): "Your inbox, / finally quiet." — the second line italic with a gradient text fill (#c4b5fd → #ff5fa2 → #ff9a3d via `bg-clip-text text-transparent`).
- Sub copy in white/60: "Halo reads every email so you only see the five that matter. Get early access before the public launch."

Form
- A single pill field with a glowing gradient border: outer wrapper `rounded-full p-px` with a violet → pink → orange gradient and a pink glow shadow that intensifies on `focus-within`; inner row on #110d1c holding the email input (sr-only label, `inputmode="email"`) and a white pill "Join waitlist" button.
- Tiny white/40 note "No spam. One email when your spot opens."
- Social proof below: five overlapping 32px gradient avatar circles ringed in the background colour, then "2,431 people ahead of you" with the number in white, tabular numerals.

Success state
- A hidden glass card (`role="status"`): "You're on the list. Your spot in line:", then a 72px gradient serif "#2,432", then "Invite friends to skip ahead. Each signup moves you up 50 spots."
- Font: Inter for text, Instrument Serif for display. Ids prefixed `waitlist-`.

Behaviour
- Script reads the ahead-of-you count, shows "Joining…" on submit, then hides the form and reveals the success card with position = count + 1.
