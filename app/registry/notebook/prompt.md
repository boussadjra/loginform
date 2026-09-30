Build a single-file sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section on a kraft desk colour #e7dcc6 with a faint brown dot texture (14px). Handwritten fonts: Caveat for headings/labels, Kalam for body and typed text. Ink colour #2b3a67 / #1f2d5c.
- A notebook page, max-w-xl, #fffdf6, rotated -0.6deg, with a few stacked 1px under-sheets (layered 0 1px/2px/3px shadows) and a soft drop shadow.
- Ruled lines: `repeating-linear-gradient(to_bottom,transparent_0_31px,#b9cff0_31px_32px)` shifted up 5px, so every line of text sits on a rule. Everything inside keeps a strict 32px rhythm (h-8/leading-8 rows, mt-8 gaps, pt-16/pb-16).
- A red margin line (#ef8f8f with a pale #f6c0c0 double) near the left edge, and three hole punches (20px circles in the desk colour with an inset shadow) spaced down the far left.

Content
- Top right: "Tue, Sept 30" in pale Caveat. Headline "Welcome back!" (Caveat bold 5xl → 6xl, occupying two rules). Subline "Sign in to your Scribble sketchbook ✎".

Form (written on the lines)
- Labels in pale Caveat 2xl: "my email is…" and "and my password…", with a red wavy-underlined "forgot it?" on the password label's line.
- Inputs are borderless and transparent, exactly one rule tall (h-8, leading-8, Kalam text-lg); on focus a yellow highlighter stripe appears behind the text (linear-gradient transparent 40% / rgba(255,236,110,0.7) to 85%).
- "remember me" with a hand-drawn square checkbox (irregular radii) that shows a red scribbled tick SVG when checked (sr-only peer).
- Submit: a hand-drawn looking button — cream fill, 3px ink border, irregular radii `rounded-[22px_8px_26px_6px]`, rotated -1deg, hard 3px 4px ink shadow, Caveat bold 3xl "Sign me in →"; hover tilts it and fills it highlighter yellow.

Sticky note
- A yellow #fff27a sticky note rotated 3deg with a translucent strip of tape across its top: "Psst… no account yet?", a red underlined "Start a fresh page →" sign-up link and "It's free, forever. Pinky promise." On lg it hangs off the page's top-right edge; below lg it sits under the page.
- Hooks: `data-auth-form`, `data-label` around the button text.

Behaviour
- Submit: preventDefault, disable, "scribbling…", then "you're in! ♥", then restore.
