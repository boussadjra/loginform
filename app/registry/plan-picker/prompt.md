Build a single-file sign-up screen with plan selection using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section, background #f6f7fb, with a soft indigo radial glow across the top (`radial-gradient(60% 100% at 50% 0%, rgba(79,70,229,.16), transparent 70%)`, 420px tall).
- Centered column max-w-3xl: small "Cadence" logo (indigo #4f46e5 rounded square with a white arc), a 36px semibold headline "Choose a plan, then create your account", and a slate (#64748b) line "Every plan starts with a 14-day trial. No card required."

Plan cards
- A fieldset of three radio cards (1 column on mobile, 3 on sm+): Free $0, Pro $12 / mo (checked by default, with an indigo "Most popular" pill hanging off the top edge), Team $29 / seat. Each has a one-line description.
- Each card is a `<label>` wrapping an `sr-only` radio: white, 16px radius, #e2e8f0 border. When selected use `has-[:checked]:` to switch to an indigo border, #f5f5ff fill and a 3px indigo/15 halo; `has-[:focus-visible]:` draws an indigo outline for keyboard users.
- A custom radio dot top-right: 20px circle with a grey border that becomes a 6px indigo border (`group-has-[:checked]:`).

Form
- Below, a white card max-w-xl with a subtle layered shadow: full name + work email side by side on sm+, password full width. 8px-radius inputs with indigo focus border and 4px indigo/15 ring.
- Full-width indigo button "Start Pro trial" (the plan name in a `data-plan-label` span) with a soft indigo drop glow, darker #4338ca on hover. Small terms line under it and "Already on Cadence? Sign in" beneath the card.
- Font: Inter. Labels visible, ids prefixed `plan-picker-`, correct autocomplete values.

Behaviour
- Script updates the plan name in the button when the radio changes, and on submit shows "Creating your account…" briefly.
