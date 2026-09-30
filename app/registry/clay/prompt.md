Build a single-file sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section in pastel grey-blue #e3e8ef; the card uses the exact same color so it is defined only by shadows. Font Nunito, text #4a5670, headings #3b4660, periwinkle accent #7286d3.
- Centered card, max-w-sm, rounded-[2.5rem], raised with dual shadows: 18px 18px 36px #b8c1ce and -18px -18px 36px #ffffff.

Details
- Top: an 80px raised circle containing a 56px inset circle (inset 5px shadows) with a periwinkle cloud icon.
- "Hello again" (2xl bold), subline "Sign in to your Nimbus space" in #7a86a0.

Form
- Small bold labels indented to line up inside the pills. Inputs are fully rounded pills pressed into the surface (inset 6px 6px 12px #b8c1ce, inset -6px -6px 12px #fff) with a leading mail / lock icon; focus deepens the inset.
- Inside the password pill on the right: a small raised round eye button that becomes inset and periwinkle when pressed (aria-pressed variants).
- Row: a pill toggle "Remember me" built from a sr-only peer checkbox (inset track, raised knob via after:, knob slides 20px and turns periwinkle when checked, track tints #c9d2f5), and a periwinkle "Forgot password?" link.
- Submit: full-width raised pill with periwinkle bold "Sign in"; on :active (and while disabled) it flips to an inset shadow so it looks physically pressed.
- "or continue with", then three 48px raised circular buttons (Google, Apple, GitHub) that press in on active.
- Footer: "New here? Create an account".
- Hooks: `data-auth-form`, `data-toggle-password aria-controls="clay-password"`, `data-label` around the submit text.

Behaviour
- The eye button toggles the password type and aria-pressed.
- Submit: preventDefault, disable (inset), "Signing in…", then "Welcome back", then restore.
