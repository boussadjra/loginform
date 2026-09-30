Build a single-file magic-link sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section on a kraft desk colour (#e7dcc4) with a faint dot grid (`radial-gradient(#d6c8a8 1px, transparent 1px)` at 18px). Center an envelope, max width 36rem, tilted -0.6deg, with a soft long shadow.
- The envelope edge is a classic airmail border: 10px of padding showing `repeating-linear-gradient(135deg, #c0392b 0 14px, #fbf6ea 14px 28px, #1f4e9c 28px 42px, #fbf6ea 42px 56px)`; the inner paper is #fbf6ea.

Details
- Top-left: a boxed "PAR AVION" label (2px #1f4e9c border, tracking 0.25em), "BY AIR MAIL" beneath, then an italic serif "Wren & Co.".
- Top-right: a postage stamp with a perforated edge: a wrapper with 6px padding and `radial-gradient(circle, #fbf6ea 3px, #fff 3.5px)` at 12px tiles offset -6px, around a 72×96px (84×108 on sm) green (#2f5d50) stamp with an inline SVG of mountains, a paper plane and a sun, plus "WREN" and a bold "12c".
- Overlapping the stamp's left side, a navy (#1b2a4a at 70%) SVG postmark: double ring, "WREN · AIRMAIL" on a textPath arc, today's date in the center, and four wavy cancellation lines running across the stamp.
- Fonts: Libre Baskerville for headings, Courier Prime (typewriter) for everything else.

Form
- Heading "Send me a sign-in letter." (serif bold, 3xl→4xl), short copy about getting a one-time link.
- A "TO:" label in blue caps beside an email input drawn as a dashed 2px bottom border (solid red on focus), followed by two faint ruled lines like envelope address lines.
- Footer row: "Delivered in under a minute." and a red (#c0392b) "SEAL & SEND" button with a hard 3px ink offset shadow that lifts on hover.

Behaviour
- On submit, show "Posting…", then hide the form and reveal the sent panel: heading "It's in the post.", copy naming the entered address, a "Wrong address? Write again" dashed-underline link that restores the form, and a red double-bordered "SENT" rubber stamp rotated -8deg above the heading.
