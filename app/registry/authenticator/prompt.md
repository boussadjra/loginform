Build a single-file two-factor (authenticator app / TOTP) code screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section, background #070d1a with an emerald glow at the top (`radial-gradient(circle at 50% -10%, rgba(52,211,153,.18), transparent 45%)`) layered over a faint 32px grid (two 1px white/2.5% linear gradients, `bg-[size:auto,32px_32px,32px_32px]`). Font: Manrope. Text #e2e8f0.
- Centered card, max width 28rem, rounded-3xl, 1px white/10 border, #111a2e at 85% with backdrop blur, deep shadow and a top inset highlight; padding 24px (32px on sm+).

Details
- Header row: a 56px rounded-2xl "app icon" with an emerald gradient (#34d399 → #0f766e), glow and inner highlight, holding a dark (#052e22) shield-check icon. Beside it "Two-factor authentication" (bold, white) and "Open your authenticator app" (#94a3b8).
- Account row in a #0b1324 rounded-2xl panel: tiny uppercase emerald "HALCYON" over "mara@halcyon.io", and on the right a 48px countdown ring: an SVG rotated -90° with a white/8 track circle (r=20, 4px stroke) and an emerald progress circle (`stroke-dasharray="125.66"`, round cap), with the remaining seconds centred in bold tabular numbers.

Form
- Legend "Enter the 6-digit code", then six boxes in two flex-1 groups of three: 56px tall, rounded-xl, 1px white/10 border, fill #0b1324, 2xl bold white digits, emerald caret. Focus: emerald border plus a 4px emerald/15 ring and a soft emerald glow.
- sr-only labels "Digit N"; `type="text" inputmode="numeric" pattern="[0-9]*"`; first box `autocomplete="one-time-code"`, the rest `maxlength="1"`.
- Checkbox "Trust this device for 30 days" (emerald accent), a full-width emerald (#34d399) "Verify and continue" button with dark text and glow (hover #6ee7b7), and "Lost your device? Use a recovery code".

Behaviour (vanilla JS, hooks `data-otp="authenticator"`, `data-otp-box`, `data-totp-ring`, `data-totp-seconds`)
- Every 100ms compute the seconds left in the current 30s window from the clock, set the ring's `strokeDashoffset` to `circumference * (1 - remaining/30)`, update the number, and turn the ring amber (#fbbf24) under 6 seconds.
- Auto-advance, Backspace to previous box, arrow keys, and pasting a full code across the boxes.
- Submit prevents default and shows "Verifying…" as a demo pending state.
