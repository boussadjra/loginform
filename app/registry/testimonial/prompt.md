Build a single-file split-screen sign-up page using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport grid on warm off-white (#fbf8f4). On lg+ two columns (`1.1fr 1fr`): a testimonial panel on the left, the form on the right. On mobile the panel stacks above the form.
- Left panel: sand (#e9e1d6) with generous padding, content spread top-to-bottom (logo, quote, logos). A huge pair of quotation marks drawn as an inline SVG in #dcd1c3 bleeds off the top-right corner.

Testimonial panel
- "Quire" wordmark in DM Serif Display next to a dark (#2b2420) circle with a lowercase "q".
- Quote in DM Serif Display, ~44px on xl, 1.15 line-height: "We moved our whole editorial calendar into Quire in a weekend. Six months later, nobody on the team can remember how we shipped anything before it." — the last phrase italic in terracotta (#c2562f).
- Caption: 48px terracotta avatar with white initials "PN" and a soft white ring, then "Priya Natarajan" / "Head of Content, Fieldnote" in #6f6259.
- Bottom: uppercase tracked eyebrow "Trusted by 4,000+ writing teams" and a wrapping row of five fictional wordmarks in #6f6259, each with its own typographic style (Fieldnote with a diamond, Harbor&Co italic serif, LUMEN spaced caps with a ring, paperkite mono, Alta with a triangle).

Form
- Centered, max-w-sm: DM Serif Display 36px "Start writing together", sub "Free for teams up to five. Set up takes two minutes."
- Pill "Continue with Google" button (white, #e2d9cd border, colour Google G), an "or with email" divider, then name / work email / password inputs: white, 12px radius, #e2d9cd border, dark border and faint terracotta ring on focus.
- Full-width dark pill "Create free account" that turns terracotta on hover, and "Already have an account? Sign in" with a terracotta underline.
- Body font Inter. Visible labels, ids prefixed `testimonial-`, correct autocomplete. Form marked `data-auth-form`.

Behaviour
- Script prevents submit and shows "Creating account…" briefly.
