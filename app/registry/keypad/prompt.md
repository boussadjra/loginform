Build a single-file one-time code screen that looks like a phone passcode pad, using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section, background #0b0a12 with two faint glows: `radial-gradient(ellipse at 20% 10%, #2e1065, transparent 45%)` and `radial-gradient(ellipse at 85% 90%, #1e1b4b, transparent 50%)`. Font: Outfit. Text #f5f3ff.
- Centered phone-like card, max width 340px, 44px radius, 1px white/10 border, fill #13111d at 90% with backdrop blur, deep shadow `0 40px 80px -20px rgba(0,0,0,.8)` and a subtle inset top highlight. A small black pill "dynamic island" (96x24px) sits at the top.

Details
- A 48px rounded-2xl violet gradient tile (#a78bfa to #6d28d9, glowing shadow) with a white padlock icon, then "Enter your code" (xl, medium) and "Sent to your phone ending in 0427" in white/55.
- A row of six 14px code dots with a 2px white/35 border; filled dots turn solid #a78bfa and scale up slightly.

Form
- A real input sits invisibly over the dots row (`absolute inset-0`, transparent text and caret) with an sr-only label "6-digit code", `type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6"`. When it has keyboard focus the dots row shows a violet ring (`has-[input:focus-visible]:ring-2`).
- A 3x4 keypad grid (gap-x 20px, gap-y 16px) of round buttons (aspect-square, max 76px) in white/7 with a white/5 ring: large light digits 1-9 with tiny letter captions (ABC, DEF, GHI, JKL, MNO, PQRS, TUV, WXYZ), a blank cell, 0 with "+", and a borderless delete button with a backspace icon (aria-label "Delete last digit"). Pressed keys scale to 95% and flash violet.
- Footer row: "Resend code" (muted) on the left and "Verify" (submit, #c4b5fd) on the right.

Behaviour (vanilla JS, hooks `data-otp="keypad"`, `data-key`, `data-keypad-input`, `data-keypad-dot`)
- Keys append digits, delete removes the last one; typing or pasting into the input works too; dots mirror the length.
- At six digits the form auto-submits: prevent default, show "Verifying…" with pulsing dots, then reset as a demo.
