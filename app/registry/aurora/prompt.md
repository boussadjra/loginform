Build a single-file sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section on deep navy (#070b1f), font Plus Jakarta Sans, white text.
- Behind everything, three huge blurred color blobs (rounded-full, blur 110-120px, 60-70% opacity): violet #7c3aed top-left, teal #14b8a6 right (animate-pulse), pink #ec4899 bottom-center. Add a radial vignette (transparent 40% → #070b1f) on top so edges stay dark.
- Centered glass card, max width 26rem, rounded-[2rem], bg-white/[0.07], backdrop-blur-2xl, 1px white/20 border with brighter top/left edges (white/40, white/30), inset top highlight and a deep drop shadow.

Details
- Brand row: a 36px rounded-xl tile with a violet → pink → teal gradient, glow and a white sparkle/star icon, next to "Lumen".
- Heading "Welcome back" (3xl semibold), subline "Sign in to pick up where your team left off." at 65% white.

Form
- Small labels (white/75) above inputs. Inputs: rounded-2xl, white/15 border, bg-white/[0.06], placeholder white/35; focus brightens the border and adds a 4px violet (#a78bfa/25) ring.
- "Forgot password?" in lavender #c4b5fd right-aligned beside the Password label. An eye icon button inside the password field swaps to an eye-off icon via `group-aria-pressed:` variants.
- "Keep me signed in" checkbox with violet accent.
- Submit: full-width rounded-2xl gradient button (violet #8b5cf6 → pink #ec4899 → teal #14b8a6), pink glow shadow, "Sign in".
- A gradient-hairline "OR" divider, then Google and Apple buttons in a 2-col grid (glass style), and "New to Lumen? Create an account" at the bottom.
- Hooks: `data-auth-form` on the form, `data-toggle-password aria-controls="aurora-password"` on the eye button, `data-label` around the submit text.

Behaviour
- The eye button toggles the password field type and aria-pressed/aria-label.
- On submit: preventDefault, disable, show "Signing in…", then "Welcome back ✦", then restore.
