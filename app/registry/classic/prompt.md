Build a single-file sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries), plus a small vanilla JS file for behaviour.

Layout
- Full-viewport section with a raspberry background (#c61951). Behind the card, a light grey (#f0f0f0) layer clipped to `circle(79% at 21% 3%)` so a huge soft circle sweeps in from the top-left corner.
- Decorations: a 288px ring with a 28px indigo (#1b083d at 15%) border half off the bottom-right corner, and on larger screens three tiny rotated squares (cream #f8f7aa and indigo) near the top right, made with one element and box-shadow copies.
- Centered card, max width ~36rem, light grey (#f0f0f0) background, square corners and a heavy dark glow shadow (0 0 73px #050505).

Header ribbon
- The card header is a raspberry strip with ~12px top padding.
- Inside it, a "Log in" title bar in deep indigo (#1b083d) with cream text (#f8f7aa), 70% wide, pulled 36px past the card's left edge, and clipped to `polygon(0 0, 100% 0, 80% 100%, 0 100%)` so its right edge slants.
- Directly under the title's overhang, a 36px darker indigo (#170731) triangle clipped to `polygon(100% 0, 0 0, 100% 100%)`, so the ribbon looks folded behind the card.
- On the right of the strip, "Welcome back" in tiny cream uppercase with 0.25em tracking, right aligned on two lines.

Form
- Vertical stack with generous padding (about 15% horizontally on larger screens), `novalidate`, marked with `data-auth-form`.
- A hidden error banner (`role="alert"`, `data-auth-error`) with a raspberry left border and 10% raspberry tint.
- User name and password inputs with outline icons (person, padlock) inset on the left. Inputs are transparent with 4px radius, a hairline indigo glow (0 0 2px #1b083d) instead of a border, and a 2px raspberry ring on focus or when `aria-invalid="true"`.
- The password field has a "Show"/"Hide" text button inside on the right (`data-toggle-password`, `aria-pressed`).
- A row with a raspberry-accented "Remember me" checkbox and a "Forgot your password?" link, wrapping on narrow screens.
- A full-width indigo "Login" button with light grey text, 4px radius, small drop shadow, a white sheen that sweeps across on hover, and a 1px press-down on active.
- An "or" divider with hairlines, then two outlined buttons side by side: Google (four-color G) and GitHub (mark), which gain a white fill on hover.
- Footer: "New here? Create an account" with the link in raspberry.
- Use the Montserrat font, visually hidden labels, correct autocomplete attributes, and visible focus rings.

Behaviour (JS)
- Toggle password visibility.
- On submit, prevent default; mark empty or too-short required fields with `aria-invalid`, show a message in the banner and focus the first invalid field; clear errors on input.
- When valid, disable the button, show "Logging in…", then "Welcome back ✓", then reset. Leave a comment where the real auth call goes.
