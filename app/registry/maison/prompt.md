Build a single-file sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport section, near-black #0a0908, ivory text #efe6d2, champagne gold #c9a96e with a lighter gold #e6cf9c. Font Cormorant Garamond throughout.
- Two nested hairline frames inset from the viewport edges (1px gold at 25% and 10% opacity, ~16px and ~22px in; 24px/30px on sm+).
- Max-w-5xl grid; on lg two columns, on mobile only the form column.

Left (lg only, decorative)
- A tall arch (w-80, h-[34rem], rounded-t-full) drawn with a 1px gold/60 hairline and a second inner arch at gold/30, filled with a soft gold radial glow.
- Inside, centered: "AUTOMNE — HIVER" (10px, 0.5em tracking), a large italic "2026", a fading vertical gold hairline, the italic quote "“Elegance is refusal.”" and "ATELIER VALOIS".

Right (form, max-w-sm, centered text)
- Monogram crest SVG: two concentric gold circles (0.8 and 0.4 stroke), tiny diamonds at top and bottom, italic "MV" in the middle.
- "MAISON VALOIS" (2xl, 0.55em tracking, light gold), "PARIS · DEPUIS MCMXXVIII" below, then a short gold hairline ornament with a four-point star.
- Italic "Welcome back" (4xl) and "Sign in to your private client account." at 65% ivory.

Form
- Left-aligned. Labels are 10px semibold gold uppercase with 0.4em tracking. Inputs have no box, only a 1px gold/35 bottom hairline that brightens to #e6cf9c on focus; 20px text, wide tracking on the password.
- Italic "Forgotten your password?" under the password field with a faint gold underline.
- Submit: full-width transparent button with a 1px gold border, tiny uppercase "SIGN IN" at 0.5em tracking; on hover it slowly fills gold (duration-500) with black text.
- Below: "NEW TO THE MAISON?" in tiny tracked caps and an italic gold "Create your account" link.
- Hooks: `data-auth-form`, `data-label` around the button text.

Behaviour
- Submit: preventDefault, disable, "One moment", then "Bienvenue", then restore.
