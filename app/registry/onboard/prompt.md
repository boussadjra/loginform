Build a single-file multi-step sign-up wizard using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section on warm paper (#f4f1ea), centered white card (max-w-4xl, 28px radius, soft deep shadow `0 30px 80px -30px rgba(28,25,23,.35)`).
- Card is a two-column grid on md+ (`280px 1fr`): a near-black (#1c1917) rail on the left, the form on the right. On mobile the rail stacks on top.
- Rail: "Relay" wordmark with a tangerine (#ff5b37) rounded-square "R" badge; a faint tangerine ring (28px border at 20% opacity) peeking from the bottom-right corner.
- Progress list of three steps (Account / Profile / Workspace, each with a small grey sub-label on desktop). Vertical on md+, a 3-column row on mobile.
- Each step has a 36px circle: outlined + number when upcoming, solid tangerine when active, solid cream (#f4f1ea) with a check icon when done. Drive this with `data-state="todo|active|done"` on the `<li>` and `group-data-[state=…]:` variants.

Form
- A 4px progress bar at the top (cream track, tangerine fill at 1/3, 2/3, 3/3), then an uppercase tracked "STEP 1 OF 3" eyebrow in tangerine.
- Three `<fieldset data-step>` panels, only one visible (`hidden` attribute): 1) "Create your account" with work email + new password; 2) "Tell us about you" with full name + role select; 3) "Name your workspace" with name + URL field that has a `.relay.app` suffix addon.
- Legends are 30px extra-bold. Inputs: 12px radius, #e7e2d9 border, #faf8f4 fill, tangerine border + 4px tangerine/15 ring on focus.
- Footer row: ghost "← Back" (invisible on step 1) and a dark "Continue →" button that lifts and turns tangerine on hover. Below: "Already have an account? Sign in" with a tangerine underline.
- Font: Manrope. Labels visible, correct autocomplete (email, new-password, name, organization-title, organization), ids prefixed `onboard-`.

Behaviour
- A small script validates the current step's fields (`reportValidity`, `aria-invalid`) before advancing, updates the rail states, bar width, step counter and Back visibility, and relabels the primary button "Create workspace →" on the last step.
- Final submit shows "Creating…", then marks all steps done and reveals a green success message.
