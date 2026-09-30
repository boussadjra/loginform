Build a single-file forgot-password screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport blueprint: #1c4f96 background with a two-level grid made of four linear gradients (major 100px lines in white/15, minor 20px lines in white/6). An inset 1px white/40 sheet border and a tiny "DRAFTLINE / AUTH-SYSTEM / SHEET 04 OF 06" label in the top-left corner. IBM Plex Mono throughout, white ink.
- Centered drawing, max width 28rem. Around it: a width dimension line above (white extension ticks at both ends, #9cc3ff line with triangle arrowheads, "MAX 448" label in the middle) and, from sm up, a vertical height dimension on the right labelled "AUTO" in vertical writing mode.
- From lg up, two handwritten callouts in Architects Daughter (#cfe2ff) with leader lines ending in small circles: left "input: type=email / must match account on file", right "link expires / after 30 min — R.02".

Card
- 2px white border, translucent blueprint fill, hard 8px offset shadow in #123a73, and circular crosshair registration marks on the top-left and bottom-right corners.
- "FIG. 4.1 — ACCOUNT RECOVERY" caption in wide-tracked #9cc3ff, uppercase "RESET PASSWORD" heading, and copy: "Enter the email tied to your Draftline workspace. We will send a single-use link to redraw your credentials."
- A title block footer: 3-column grid with a 2px white top border and hairline dividers: DWG NO. PR-0042 · SCALE 1 : 1 · REV. B.

Form
- Label row "A — EMAIL ADDRESS" with "⌀ REQ." on the right, tiny tracked #9cc3ff text.
- Input with a dashed white border and dark blue (#123a73) fill that turns solid with a soft #9cc3ff glow on focus.
- Solid white "SEND RESET LINK" button in blueprint blue text, arrow on the right that nudges on hover.
- "← RETURN TO SIGN IN" link with a dashed underline.

Behaviour
- On submit (`data-bp-form`) show "TRANSMITTING…", then "LINK SENT — CHECK INBOX", then reset after a couple of seconds.
