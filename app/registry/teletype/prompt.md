Build a single-file magic-link sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section in dark desk green (#2e3a36) with a slightly lighter radial glow at the top. All text uppercase; Special Elite for the typed/tape text, Courier Prime for form labels. Ink colour #2a2418, accent red #b3261e.
- Center a telegram form (max width 42rem) on yellowed paper #efe4c8 with a deep drop shadow. Left and right are tractor-feed margins (24px, 32px on sm): a dashed inner border and a vertical row of sprocket holes made with `radial-gradient(circle, #2e3a36 4.5px, transparent 5px)` tiled at 24px (32×28px on sm), bg-repeat-y.

Details
- Header: "TELEGRAM" in Special Elite (4xl → 5xl, tracking 0.12em) over a 2px ink rule, with "RELAY WIRE CO. / NO. 0417 · PRIORITY" tiny on the right.
- A three-column meta row in 10px caps with hairline dividers: "CLASS: FULL RATE", "WORDS: 14", "FILED: 16:04".
- The message is three pasted ticker-tape strips (#f2d27a, w-fit, small shadow, each rotated a fraction of a degree differently): "SIGN-IN REQUESTED STOP", "NO PASSWORD REQUIRED STOP", "WIRE YOUR ADDRESS FOR A LINK STOP", with every STOP in red.

Form
- Label "DELIVER TO (EMAIL ADDRESS)" in spaced 11px caps.
- The email input sits in a half-transparent tape band with dashed top/bottom borders that turn solid red with full tape colour on focus-within; typed text is uppercase Special Elite, placeholder "ADA@LOVELACE.DEV".
- Footer: "LINK EXPIRES 15 MIN · SINGLE USE" and an ink-black "TRANSMIT ▸" button (tracking 0.35em) that turns red on hover.

Behaviour
- On submit, show "SENDING…", then hide the form and reveal an "■ INCOMING REPLY" section whose tape strip types out, character by character, "LINK DISPATCHED TO <EMAIL> STOP CHECK YOUR INBOX STOP EXPIRES IN 15 MINUTES STOP END". A dotted-underline "WIRE A DIFFERENT ADDRESS" button restores the form.
