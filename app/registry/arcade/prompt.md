Build a single-file one-time code screen styled as an 8-bit arcade "ENTER CODE" high-score screen, using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section, background #05010d with `radial-gradient(ellipse at center, #1a0b2e, #05010d 70%)`. Font: Press Start 2P for everything.
- Two pointer-events-none overlays above the content: CRT scanlines `repeating-linear-gradient(0deg, rgba(0,0,0,.45) 0 1px, transparent 1px 3px)` and a dark vignette `radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,.75))`.
- Centered black "screen", max width 36rem, padding 20px (40px on sm+), with a notched pixel border made of four 6px cyan (#22d3ee) box-shadows (top, bottom, left, right, no spread) plus a soft cyan glow.

Details
- HUD row (8px, 10px on sm): "1UP 004820" left, "HI-SCORE 999990" centre, "TIME 30" right, labels in red #f87171.
- Title "ENTER / CODE" on two lines, 2xl (4xl on sm), cyan with a hard 3px magenta (#c026d3) offset shadow and a cyan glow.
- Yellow (#facc15) 8px line "A 6-DIGIT CODE WAS BEAMED / TO P1@PIXELPOST.GG".
- A tiny high-score list: "1ST ACE 999990" (pink #f0abfc), "2ND ZED 874300" (#a5f3fc), "3RD YOU ??????" (yellow, the ?????? pulsing).

Form
- Six flex-1 boxes, 48px tall (64px on sm), black, with 4px notched pink (#f0abfc) pixel borders from four box-shadows, yellow glowing digits, hidden caret and a "_" placeholder. Focus swaps the border to cyan, adds a cyan glow and a #1a0b2e fill.
- sr-only labels "Digit N"; `type="text" inputmode="numeric" pattern="[0-9]*"`; first box `autocomplete="one-time-code"`, the rest `maxlength="1"`.
- "PRESS START" button: green #4ade80 with black text, a 4px dark-green (#052e16) notched pixel border and an inset bottom-right #16a34a bevel; it drops 4px when pressed.
- Footer row: "▶ RESEND" (button), a pulsing pink "INSERT COIN", and "CREDIT 01".

Behaviour (vanilla JS, hooks `data-otp="arcade"`, `data-otp-box`, `data-arcade-time`, `data-arcade-resend`)
- TIME counts down from 30 to "OVER"; RESEND restarts it.
- Auto-advance, Backspace to previous box, arrow keys, and pasting a full code across the boxes.
- Submit prevents default and shows "LOADING..." as a demo pending state.
