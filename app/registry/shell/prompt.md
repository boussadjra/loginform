Build a single-file sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section, near-black #050705, font JetBrains Mono. A soft green radial glow in the middle and faint CRT scanlines (repeating-linear-gradient, 1px white/2.5% every 3px).
- Centered terminal window, max-w-2xl, rounded-xl, #0b0f0b body, #1f2a1f border, deep shadow plus a faint green outer glow.
- Title bar (#111711): red/yellow/green traffic-light dots and a centered grey (#6b7f6b) title "brick@deploy: ~/api — zsh — 80×24".

Session content (13-14px, leading-6, soft green text #b6f5c3)
- Grey line "Last login: Tue Sep 30 09:41:07 on ttys002".
- A small green ASCII-art "DEPLOY" banner in a <pre> (aria-hidden).
- Prompt line: amber "~/api", green "$", white "deploy auth login". Then a grey comment heading "# Authenticate this machine to push builds to production."

Form (inputs styled as interactive prompts)
- Each row: amber "?", white label, green "›", then a borderless transparent input in green #4ade80 with green caret and dark placeholder (#3a4a3a). The whole row gets a faint green background on focus-within.
- Rows: "Email address" (you@company.dev), "Password" (********) with a "[--show]" text button that toggles to "[--hide]" and turns amber when pressed.
- A checkbox rendered as "[ ]" / "[x]" via a sr-only peer checkbox: "Remember this machine for 30 days".
- Submit: solid green button with dark green text "⏎ authenticate" and a green glow.
- Below: two amber "hint:" lines linking "deploy auth reset" (forgot password) and "deploy auth signup" (create account) with dotted underlines.
- Final prompt line ending in a green block caret (w-2 h-4) with animate-pulse.
- Hooks: `data-auth-form`, `data-toggle-password aria-controls="shell-password" data-show="[--show]" data-hide="[--hide]"`, `data-label` around the button text.

Behaviour
- Toggle swaps the password type, text and aria-pressed.
- Submit: preventDefault, disable, "authenticating…", then "✓ token saved to ~/.deploy/credentials", then restore.
