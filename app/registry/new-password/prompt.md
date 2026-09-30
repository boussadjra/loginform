Build a single-file set-new-password screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section, cool off-white (#f3f5f9) with a subtle 22px dot grid (`bg-[radial-gradient(#d9dee8_1px,transparent_1px)]`). Manrope font, slate ink (#0f172a).
- Centered white card, max width 28rem, 24px radius, 1px #e3e7ef border, soft layered shadow.

Details
- Header row: a 44px near-black rounded-2xl tile with a white key icon, then "Ledgerly · Account security" in muted slate (#64748b).
- Heading "Set a new password" (28px, extra-bold, tight tracking), then "Resetting for maya@ledgerly.app. Choose something you haven't used here before." with the email bolded.

Form
- "New password" and "Confirm password" fields with visible bold labels, #f8fafc fill, #d6dce6 border, 12px radius, dark focus border plus a faint ring. `autocomplete="new-password"`.
- Each input has an eye button inside on the right (aria-pressed, aria-label) that swaps to an eye-off icon via `group-aria-pressed:` variants.
- Under the first input, a 4-segment strength meter (6px rounded bars, #e5e9f0 when empty).
- A requirements checklist in a #f8fafc rounded box, two columns on sm+: "12+ characters", "One number", "One symbol (!@#…)", "Passwords match". Each item has an empty circle outline that fills emerald (#10b981) with a white check scaling in, and the text turns #047857, driven purely by a `data-ok` attribute (`data-ok:` / `group-data-ok:` variants).
- Full-width near-black "Update password" button, disabled (grey #cbd3df) until every rule passes. A status line below for the success message.

Behaviour
- On input, test each rule, toggle `data-ok` on each `[data-np-rule]` item, colour the meter bars red → amber → lime → emerald by number of rules passed, and enable the button only when all four pass.
- Eye buttons toggle their input's type between password and text.
- On submit: show "Updating…", then "Password updated. You can sign in now." in emerald.
