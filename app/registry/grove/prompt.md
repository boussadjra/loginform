Build a single-file organic, nature-themed sign-up screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section in oat (#efe8da) with two soft blob shapes bleeding off opposite corners (sage #dfe3cf top-left, clay #ead6c4 bottom-right) using asymmetric border-radius like `62% 38% 46% 54% / 60% 44% 56% 40%`.
- Centered card max-w-4xl: cream (#faf6ee), 40px radius, soft green-tinted drop shadow. On md+ a two-column grid (5fr / 6fr): illustration left, form right. On mobile the illustration becomes a smaller 320px-tall arch above the form.

Arched window
- Container with `a top radius of half its width (`rounded-t-[9rem]` at 18rem wide, `md:rounded-t-[11rem]`) and a 28px bottom radius so it reads as an arched window, overflow hidden, 8px oat ring, 480px tall on desktop.
- Inside, a full-bleed inline SVG (`preserveAspectRatio="xMidYMax slice"`): peach sky gradient (#f6d9b8 → #f3e6cf), a low terracotta sun (#e08a5f) with a faint halo half-hidden behind the hills, a few cream cloud strokes, four layered rolling hills from light to dark (#b9c79e, #8fa97a, #5f7f55, #2f4a34), a dark green fern stem with leaves on the left, a terracotta sprig on the right, and a tiny bird drawn with two arcs.

Form
- Small uppercase tracked "FERNWAY" wordmark in sage-green with a leaf icon.
- Fraunces headline, 48px semibold, dark green (#2f4a34): "Grow something good this season." with "good" italic, regular weight, terracotta (#c0643f). Sub copy in #5d6656.
- Name / email / password inputs as fully rounded pills: white, 2px #e2dccd border, green border + sage ring on focus; labels indented to line up with the pill's text.
- Checkbox "Send me the monthly planting calendar for my region." (green accent).
- Terracotta pill button "Plant my first seed" with a small leaf icon and a warm glow shadow, darker #a8532f on hover. Footer "Already tending a garden? Sign in".
- Fonts: Fraunces for display, Nunito Sans for text. Ids prefixed `grove-`, `data-auth-form` on the form.

Behaviour
- Submit shows "Planting…" briefly.
