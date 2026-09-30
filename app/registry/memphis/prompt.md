Build a single-file playful Memphis-design sign-up screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section in pastel pink (#ffd6e0) with a 26px ink dot pattern at 12% opacity (`radial-gradient(#1a1a2e 1.5px, transparent 1.5px)`), overflow hidden.
- Scatter inline-SVG Memphis shapes behind the card: a thick purple (#9b5de5) squiggle top-left, an ink squiggle bottom-right rotated 12°, a yellow (#ffd23f) circle with ink outline and dotted cross peeking from the top edge, a teal (#3bceac) outlined triangle bottom-left, plus on lg+ a blue (#5b8def) ring, a coral (#ff6b6b) diamond and a coral zigzag.
- Centered card max-w-md: white, 3px ink (#1a1a2e) border, 32px radius, hard 10px offset ink shadow. A tilted teal "it's free!" sticker pill with its own mini offset shadow overlaps the top-left corner.

Content
- "wiggle" wordmark with a yellow smiley circle icon.
- Headline in Fredoka bold, 48px, tight leading: "Join the / fun club" with a hand-drawn coral SVG underline under "fun club". Sub: "Tiny daily habits, big happy streaks. Make an account in 10 seconds flat." in #4a4a68.
- Fields with friendly labels: "What should we call you?" (nickname), "Email", "Secret password". Inputs: 3px ink border, 16px radius, cream fill (#fff7e0), large text; on focus white with a 4px purple offset shadow.
- Bouncy pill button "Let's go! ✦": yellow, 3px ink border, 5px offset shadow. Hover lifts, tilts -1° and grows the shadow with an overshoot easing `cubic-bezier(.34,1.56,.64,1)`; active presses it into the shadow.
- "Been here before? Log in" with a thick purple underline that turns wavy on hover.
- Font: Fredoka. Visible labels, ids prefixed `memphis-`, `data-auth-form` on the form.

Behaviour
- Submit adds Tailwind's `animate-bounce` to the button and shows "Wiggling…" briefly.
