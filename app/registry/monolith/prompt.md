Build a single-file magic-link sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport off-white section (#f1efe8), ink #0d0d0d, a single signal red #ff3b1f. Anton for the giant word, Inter Tight for everything else. Stack three bands with justify-between so the page always fills the screen; 16px gutters on mobile, 32px on desktop; overflow hidden.
- Top bar over a 1px ink rule, xs uppercase tracking 0.12em: a small 8×16 black block + "OBELISK" left, "PASSWORDLESS ACCESS" in the middle (hidden on mobile), "CREATE ACCOUNT" link right.
- Middle: the word "ENTER." in Anton at 39vw on desktop (leading 0.8); on mobile 62vw, leading 0.96, with break-all so it stacks as "ENT" / "ER.", nudged -0.04em left so it bleeds edge to edge; the full stop is red.
- Bottom band over another 1px rule, 12-column grid on desktop: a 4-column caption ("01 / Sign in" bold, then "One address, one link, no password. We'll email you the way in.") and the form in the remaining 8 columns.

Form
- A square 2px-bordered email input (text-xl → 2xl, placeholder "your@email.com", sr-only label) that inverts to black with off-white text on focus, joined flush to a black "SEND LINK →" button (uppercase, tracking 0.15em) that turns red on hover with the arrow nudging right. Stacked on mobile, side by side on desktop.

Behaviour
- On submit, show "Sending…", then change the giant word to "SENT." and replace the form with a 2px-bordered box: "Check <email>. The link expires in 15 minutes." (email underlined in red) and a "CHANGE EMAIL" button that restores "ENTER." and the form.
