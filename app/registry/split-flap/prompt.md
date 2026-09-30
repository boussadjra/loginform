Build a single-file one-time code screen styled as an airport split-flap departure board, using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section, background #0c0c0c with a faint top glow (`radial-gradient(ellipse at 50% 0%, #1f1f1f, transparent 60%)`). Font: IBM Plex Mono everywhere. Text #f5f5f5, labels #8a8a8a, accent yellow #ffcc00.
- Centered board, max width 42rem, rounded-2xl, 1px #262626 border, fill #141414, deep shadow, padding 16px (32px on sm+).

Details
- Header row with a bottom hairline: a 36px yellow square holding a black plane icon, "DEPARTURES" (bold, 0.2em tracking, yellow) over "AEROLUX · TERMINAL 2" (10px, grey), and a big "09:41" clock on the right.
- A wrapping row of columns, each with a 10px grey tracked label on top: FLIGHT "AX204", DESTINATION "LISBON" (white), GATE "B14" (yellow), then a green (#4ade80) "BOARDING" status with a pinging dot.
- Every character is its own flap tile, styled from the parent with `*:` variants: 24x36px (28x40 on sm), 3px radius, split fill `linear-gradient(180deg, #2c2c2c 0 50%, #212121 50% 100%)`, top inner highlight, and a 1px black horizontal split line through the middle via `*:after:` (absolute, top-1/2).

Form
- A recessed panel (#0f0f0f, #262626 border). Legend "ENTER BOARDING CODE" (yellow, tracked) and "We sent a 6-digit code to +44 •••• 8812".
- Six big flip tiles, flex-1, 80px tall (96px on sm), split gradient #2e2e2e / #1f1f1f, a 2px black split line (`after:`), a hard 3px black bottom shadow, and a yellow ring while focused (`has-[input:focus]`). Each holds a transparent input with a hidden caret and 4xl/5xl bold yellow digits.
- sr-only labels "Digit N"; `type="text" inputmode="numeric" pattern="[0-9]*"`; first input `autocomplete="one-time-code"`, the rest `maxlength="1"`.
- Actions: "RESEND CODE" grey text button and a yellow "CHECK IN →" button with black text and a #8a6d00 3px bottom shadow that presses down when active. Stack them (button first) on mobile.

Behaviour (vanilla JS, hooks `data-otp="split-flap"`, `data-otp-box`, `data-otp-submit`)
- When a digit lands, the tile flips through five random digits (40ms apart) before settling, like a real split-flap display.
- Auto-advance, Backspace to previous tile, arrow keys, and pasting a full code (each tile flips).
- Submit prevents default and shows "CHECKING…" as a demo pending state.
