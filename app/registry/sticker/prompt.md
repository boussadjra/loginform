Build a single-file social sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport cork board: base #b98a57 plus four layered radial-gradient specks (#7a4d22, #dcb47e, #9c6b3a, #caa06b) at mismatched sizes (7×9, 11×13, 17×19, 29×23 px) and offsets so the texture looks irregular. Fonts: Bricolage Grotesque (bold) with Caveat for handwriting.
- Content row, max 860px: a paper note on the left and a sticker sheet on the right (stacked on mobile, note first).

Paper note
- 340px wide, cream (#fffaf0), rotated -2deg, deep soft drop shadow. A pink washi tape strip (#f7c5d9 at 80%, slightly rotated, ragged clip-path polygon) overlaps its top edge.
- Handwritten "hey you, welcome back!" (Caveat, 24px, #c2410c), then "Stick with Pinpile." (40px bold, 0.95 line height, tight tracking), then a 15px #57534e paragraph "Peel off any sticker to sign in. Your boards, pins and scraps are right where you left them."
- Below a 2px dashed #e6dccb rule: "Rather type? Use your email" with a thick yellow (#ffd23f) underline on the link.

Stickers
- A 2-column grid of pill buttons; each is a die-cut sticker: rounded-full, 5px solid white border, bold 15px (17px from sm) label, offset drop shadow (0 2px 0 #e8dcc8, 0 10px 18px -4px rgba(60,30,0,.55)).
- Each is tilted differently and filled with its own color: Google on #ffd23f (logo inside a white circle), GitHub on #1f1f1f (white text), Discord on #5865f2, Apple on #ff8fab, Microsoft on #7ed6a5, Slack on #d8c4ff. On desktop the right column is pushed down 24px for a scattered look.
- Hover/focus: rotate back to 0, scale 105%, bigger shadow; focus-visible adds a dark 3px outline.
- Decorative (aria-hidden, desktop only): a round burnt-orange (#c2410c) "no password needed" sticker and a yellow star with white stroke, both tilted, pinned around the sheet.
