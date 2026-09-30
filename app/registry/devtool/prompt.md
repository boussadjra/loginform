Build a single-file developer-tool sign-up screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport pure black section. Background: a 22px dot grid (`radial-gradient(rgba(255,255,255,.12) 1px, transparent 1px)`) faded out at the edges with `mask-image: radial-gradient(ellipse 60% 60% at 50% 45%, #000 30%, transparent)`, plus a blurred purple-to-cyan glow blob behind the card.
- Centered column 400px wide. Above the card a mono wordmark: a cyan `>` chevron and purple underscore icon, "stackpipe", and a tiny outlined "v2.4" pill.

Card
- Gradient border made with a wrapper: 16px radius, 1px padding, background `linear-gradient(140deg, #a855f7e6, rgba(255,255,255,.08) 35%, rgba(255,255,255,.08) 65%, #22d3eee6)`, soft purple drop shadow. Inside, the form at 15px radius on #0a0a0a.
- "Create your account" (20px semibold) and #a1a1a1 sub "Deploy your first pipeline in under a minute."
- GitHub first: solid white full-width button with the black GitHub mark. Then a subtle outlined "Continue with GitLab" button (orange tanuki).
- Mono uppercase "OR" divider, then email and password inputs (black fill, white/10 border, purple border + purple/20 ring on focus, sr-only labels).
- Primary button with a purple → cyan gradient (#a855f7 → #22d3ee) and black text, "Create account"; tiny terms line.

Below the card
- A command bar in Geist Mono: `$ npx stackpipe@latest init` (the `$` dim and unselectable, `npx` cyan, `@latest` purple) with a small outlined "Copy" button on the right.
- "Have an account? Log in →".
- Fonts: Geist and Geist Mono. Ids prefixed `devtool-`.

Behaviour
- Copy button writes the command to the clipboard and flashes "Copied". Submit shows "Provisioning…" briefly.
