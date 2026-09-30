Build a single-file security-focused sign-up screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section on deep navy slate (#0b1120). Background layer: an emerald radial glow at the top (`radial-gradient(50% 40% at 50% 0%, rgba(16,185,129,.18), transparent)`) stacked over a faint 48px grid made of two 1px linear gradients in rgba(148,163,184,.06).
- Centered column max-w-md. Header: 56px rounded-2xl shield badge (emerald #10b981 border at 30%, 10% fill, #34d399 icon, soft emerald glow), "Create your Vaultline account" (30px semibold white), and a #94a3b8 line "End-to-end encrypted. We cannot see your password, so make it a strong one."
- Form card: #0f172a at 80% with backdrop blur, 1px #1e293b border, 16px radius, heavy black drop shadow.

Form
- Email input and a "Master password" input in IBM Plex Mono with a "Show" toggle button inside the right edge. Inputs: #020617 fill, #1e293b border, emerald border + 4px emerald/15 ring on focus.
- Strength meter: four 6px pill segments in a row, #1e293b when empty. The wrapper carries `data-level="0-4"`; segments colour via `group-data-[level=n]:` — level 1 rose #f43f5e (first segment), 2 amber #f59e0b (two), 3 lime #84cc16 (three), 4 emerald #10b981 (all four). Under it a mono row "Strength … Weak / Fair / Good / Strong" whose label colour follows the level.
- Rule checklist in an inset #020617 box, 2 columns on sm+: "12+ characters", "Upper & lowercase", "A number", "A symbol (!@#…)". Each `<li data-ok>` is slate #64748b with an empty circle, turning #34d399 with a check when `data-[ok=true]`.
- Full-width emerald button with a padlock icon, dark green text (#022c22), "Create secure account". Beneath it a mono footnote with a glowing emerald dot: "AES-256 · zero-knowledge · SOC 2 Type II". Then "Already protected? Sign in".
- Fonts: IBM Plex Sans for text, IBM Plex Mono for technical accents. Labels visible, ids prefixed `fortress-`, `autocomplete="new-password"`, `aria-describedby` on the password pointing at the rules.

Behaviour
- Script tests the four rules on every input, sets each rule's `data-ok`, and sets meter level = number of rules passed (min 1 once anything is typed). Show/Hide toggles the input type.
- Submit is blocked with a hint until level 4, then shows "Encrypting vault…" briefly.
