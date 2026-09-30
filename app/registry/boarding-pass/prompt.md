Build a single-file magic-link sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section in pale sky blue (#cfe0f0) with a faint white dotted flight-path curve drawn by a full-bleed SVG. Fonts: Barlow Condensed (codes, labels, button) and DM Sans (body). Navy #0b2545, muted label colour #5b7089, orange accent #ff6b35.
- Center a white boarding pass (max width 48rem) with a soft navy drop-shadow filter. Desktop: main section on the left, a 14rem stub on the right. Mobile: the stub stacks under the main section.
- Notched tear line: each half's background is two `radial-gradient(circle at <corner>, transparent 14px, #fff 14.5px)` layers, each sized to 51% and anchored to the corners that meet the tear line (right corners of the main part and left corners of the stub on desktop; bottom corners of the main part and top corners of the stub on mobile), so round bites appear at both ends of the dashed 2px tear border. Outer corners are rounded-3xl.

Main section
- A navy header band: orange plane icon + "AERIS" (bold, tracking 0.15em) left, "BOARDING PASS" (white/70, tracking 0.25em) right.
- Route row: "FROM / EML / Your email" and "TO / APP / Signed in" in huge 5xl→6xl condensed bold, joined by dotted lines around an orange plane rotated 90°.
- Form: label "PASSENGER EMAIL" (10px caps) and an underline-only email input in 2xl condensed semibold (orange underline on focus), then a 3-column row "GATE Magic link / BOARDS Instantly / SEAT 1A", then a full-width rounded-full orange "SEND BOARDING LINK" button with an orange glow.

Stub
- On desktop the stub has its own navy header band ("AE 404" left, "STUB" right) whose top-left corner carries the notch via `radial-gradient(circle at 0 0, transparent 14px, #0b2545 14.5px)`; the main header likewise notches its top-right corner.
- Three fields (row on mobile: "FLIGHT AE 404"; column on desktop: "DATE Today"), plus "CLASS No pwd" and "ZONE 01" (orange).
- A barcode made of ~34 navy `<span>`s of widths 1px, 2px, 3px and 4px spread with justify-between in a 56px-tall flex row, with "AE404 01A 7731" in tiny mono beneath.

Behaviour
- On submit, show "CHECKING IN…", then swap the form for a pale blue panel: "YOU'RE CLEARED TO BOARD", copy naming the entered email and a 15-minute gate, and a "Change passenger" link. Also reveal a green (#1c9d6c) bordered, white-filled "CHECKED IN" stamp rotated -12deg on the stub.
