Build a single-file SMS verification (one-time code) screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section, background #f2f2f7 with two pastel glows: `radial-gradient(circle at 15% 15%, #dbeafe, transparent 40%)` and `radial-gradient(circle at 85% 85%, #dcfce7, transparent 40%)`. Font: Inter. Text #1c1c1e.
- Centered white card, max width 24rem, 32px radius, overflow hidden, soft shadow and a 1px black/4 outline. The top half is a messages-app thread (#f9f9fb), the bottom half the form, split by a #e5e5ea hairline.

Messages thread
- Centered contact header: a 44px round avatar with an indigo gradient (#a5b4fc → #6366f1) and a white "L", the name "Lumen" with a tiny grey chevron, then an 11px grey (#8e8e93) timestamp "Text Message · Today 9:41".
- Two received bubbles on the left in #e9e9eb, 20px radius, 15px text, max width 85%: "Your Lumen code is 482 913. Don't share it with anyone, we'll never ask for it." (the code is a blue #0a84ff underlined button; first bubble has a small bottom-left corner) and "@lumen.app #482913" (small top-left corner).

Form
- "Enter the code" (xl, bold, centered) and "We texted +1 (415) ••• 0427" in #6e6e73.
- Six flex-1 boxes, 56px tall, rounded-2xl, filled #f2f2f7, 2xl semibold digits, blue caret; on focus they turn white with a 2px #0a84ff ring and a 6px soft blue halo. sr-only labels "Digit N"; `type="text" inputmode="numeric" pattern="[0-9]*"`; the first box has `autocomplete="one-time-code"`, the rest `maxlength="1"`.
- Grey tip "Tip: tap the code in the message to fill it in.", a full-width pill "Continue" button in #0a84ff (hover #0071e3), and two blue text buttons "Resend text" and "Change number".

Behaviour (vanilla JS, hooks `data-otp="sms"`, `data-otp-box`, `data-sms-fill`, `data-otp-submit`)
- Auto-advance on digit, Backspace on empty goes back, arrows move, paste spreads a full code.
- Clicking the code in the bubble fills all six boxes from its `data-sms-fill` value.
- Submit prevents default and shows "Checking…" as a demo pending state.
