Build a single-file sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section; the background is one linear gradient that doubles as sky and horizon: #0b0120 → #1e0645 (40%) → #4a0d5e (58%) → #7a1270 (62%), then a hard cut to #0b0120 for the ground. Font Orbitron.
- Sky: a white 1px dot starfield (radial-gradient, 48px spacing, 40% opacity) over the top 60%.
- Sun: a circle sitting on the horizon (bottom 38%), 24rem on mobile / 34rem on sm+, gradient #ffe45e → #ff8a3d → #ff2e97, a pink glow, and horizontal slices cut out of its lower half with `[mask-image:linear-gradient(to_bottom,#000_0_46%,transparent_46%_49%,#000_49%_58%,transparent_58%_62%,#000_62%_70%,transparent_70%_75%,#000_75%_82%,transparent_82%_89%,#000_89%_100%)]`.
- Floor: the bottom 38% clips a 200%-wide, 260%-tall plane with pink (#ff2e97) horizontal and cyan (#22d3ee) vertical 2px grid lines (60px × 40px) tilted with `[transform:perspective(220px)_rotateX(62deg)]`, plus a dark fade at the horizon.

Card
- Centered, max-w-md, rounded-2xl, bg #0b0120 at 75% with backdrop-blur, cyan/60 border, pink outer ring, cyan outer and inner glows.
- Logo "Nightdrive" in Monoton, neon pink #ff5cb3 with a double pink text-shadow glow.
- Headline "SIGN IN" in Orbitron bold, widely tracked, chrome effect: bg-clip-text with a gradient white → #c7ecff (45%) → hard dark #1b1b3a band at 50% → #ff8ad8 (56%) → white.
- Tagline "SYNTHWAVE RADIO · 24/7" in tiny cyan #7df9ff tracked uppercase with glow.

Form
- Labels in tiny cyan tracked uppercase. Inputs: rounded-lg, #150433 fill, pink/50 border, sans-serif text; focus turns the border cyan with a cyan glow.
- "Forgot password?" in #ff8ad8 beside the Password label. An eye button inside the password field (slash hidden when aria-pressed).
- Submit: gradient pink #ff2e97 → purple #b537f2 → cyan #22d3ee, bold tracked uppercase "INSERT COIN", pink glow that turns cyan on hover.
- Spotify and Apple buttons (2-col), then "No account? Start your engine" in cyan.
- Hooks: `data-auth-form`, `data-toggle-password aria-controls="outrun-password"`, `data-label` around the submit text.

Behaviour
- Eye toggles password visibility and aria-pressed. Submit: preventDefault, disable, "Loading…", then "Ready player 1", then restore.
