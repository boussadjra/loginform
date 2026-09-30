Build a single-file sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section with a raspberry background (#c61951). Behind the card, a light grey (#f0f0f0) layer clipped to `circle(79% at 21% 3%)` so a huge soft circle sweeps in from the top-left corner.
- Centered card, max width ~36rem, light grey (#f0f0f0) background, square corners and a heavy dark glow shadow (0 0 73px #050505).

Header ribbon
- The card header is a raspberry strip with ~12px top padding.
- Inside it, a "Log in" title bar in deep indigo (#1b083d) with cream text (#f8f7aa), 70% wide, pulled 36px past the card's left edge, and clipped to `polygon(0 0, 100% 0, 80% 100%, 0 100%)` so its right edge slants.
- Directly under the title's overhang, a 36px darker indigo (#170731) triangle clipped to `polygon(100% 0, 0 0, 100% 100%)`, so the ribbon looks folded behind the card.

Form
- Vertical stack with generous padding (about 15% horizontally on larger screens): user name input, password input, a small centered "Forgot your password?" link, and a full-width "Login" button.
- Inputs are transparent with 4px radius, a hairline indigo glow (0 0 2px #1b083d) instead of a border, and a raspberry glow on focus.
- The button is indigo with light grey text, 4px radius and a small drop shadow.
- Use the Montserrat font. Include visually hidden labels, correct autocomplete attributes, and a visible focus ring on the button.
- Mark the form with `data-auth-form` so a script can attach a submit handler.
