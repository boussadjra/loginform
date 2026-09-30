Build a single-file sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section in classic desktop teal #008080, font Pixelify Sans. A 40px grey #c0c0c0 taskbar pinned to the bottom with a bevelled "Start" button (four-colour pixel logo) and a sunken "9:41 AM" clock.
- On sm+, a column of desktop icons top-left (My Computer, Inbox, Recycle Bin): hand-drawn pixel SVGs (shape-rendering crispEdges) with white 13px labels.
- Centered dialog window, max width 26rem, grey #c0c0c0, 3px padding, raised bevel via layered inset shadows (-1px -1px #0a0a0a, 1px 1px #dfdfdf, -2px -2px #808080, 2px 2px #fff) plus a hard 6px drop shadow.

Window chrome
- Title bar gradient navy #000080 → #1084d0 with a small pixel key icon, white bold "Welcome to HomeNet", and two tiny bevelled buttons: "?" and a pixel X (press flips the bevel).

Body
- A large pixel-art gold key icon beside "Type your user name and password to log on to **HomeNet**."
- Two-column grid (6.5rem labels): "User name:" and "Password:" with the accelerator letter underlined; inputs are white and sunken (inverse bevel: -1px -1px #fff, 1px 1px #808080, -2px -2px #dfdfdf, 2px 2px #0a0a0a) with a dotted focus outline.
- A sunken 13px checkbox (sr-only peer, pixel checkmark SVG shown on check) "Remember me on this PC", aligned with the inputs.
- Right-aligned "OK" (default button, extra 1px black ring) and "Cancel" (type reset) bevelled buttons, min width 5.5rem, bevel inverts on :active, dotted focus rectangle inside.
- An etched separator (#808080 line with white highlight), then navy underlined links "Forgot password?" and "New user? Sign up…".
- Hooks: `data-auth-form`, `data-label` on the OK text.

Behaviour
- Submit: preventDefault, disable (grey text), "Wait…", then "Done!", then restore.
