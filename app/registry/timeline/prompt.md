Build a single-file multi-step password-recovery screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport lavender section (#f4f0ff) with two huge blurred blobs: violet #dcd0ff top-left and pink #ffd9f1 bottom-right. Plus Jakarta Sans, ink #2a2250.
- Centered glassy card, max width 32rem, white/80 with backdrop blur, 1px white border, 28px radius, soft violet shadow (0 30px 60px -30px #5b3fd466).
- Header row: extra-bold "Recover your account" and a pill counter "Step 1 of 3" (#efeaff bg, #6a4ae8 text). Subline "Three quick steps and you're back in Lumen."

Timeline
- An ordered list of three steps: Request, Verify, Reset. Each item has 48px left padding, a 32px circular node on the left and a 2px connector line (a `before:` pseudo-element, #e6e0fb) running down to the next node.
- Each item carries `data-state="done|current|upcoming"`, and every visual change comes from `data-[state=…]:` / `group-data-[state=…]:` variants:
  - upcoming: grey outlined node with its number, muted title (#a59cc8) and a one-line description ("We email you a 6-digit code.", "Prove it's you with that code.", "Choose a fresh password.").
  - current: violet (#7c5cff) outlined node with a 6px violet/15 halo, dark title, description hidden and its form revealed.
  - done: solid violet node with a white check, violet connector line, and a small violet suffix after the title ("· code sent", "· confirmed", "· all set").
- Forms (each `data-tl-form`): "Account email" email input; "6-digit code" numeric input (centered, 24px bold, 0.6em tracking, `autocomplete="one-time-code"`); "New password" with `autocomplete="new-password"`. Inputs: #faf8ff fill, #e0d9fa border, 16px radius, violet focus ring. Buttons: full-width violet with a violet glow shadow: "Send code", "Verify code", "Reset password".
- When the last step is done, show a lavender note "You're back in. Signing you in to Lumen…".
- Footer divider and "Remembered it? Back to sign in".

Behaviour
- Submitting a step's form shows "One moment…", then marks that step done, sets the next one current (focusing its input) and updates the counter; after the last step the counter reads "Done".
