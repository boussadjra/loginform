Build a single-file conversational social sign-in screen styled like a messenger, using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport lavender section (#ece8ff) with two soft radial highlights (white top-left, #d8d0ff bottom-right). Font: DM Sans.
- Centered chat window, max 420px, 28px radius, #f7f6ff body, violet-tinted drop shadow (0 30px 60px -20px rgba(49,36,160,.35)).

Header
- White/80 blurred bar: a 40px violet gradient (#7a6bff → #5b4bff) robot avatar with a green (#22c55e) online dot, "Pip from Tandem" (15px semibold) over "Typically replies instantly" (12px #6b6890), and a small "Sign in" pill (#5b4bff on #ece8ff).

Conversation (ordered list, aria-live polite)
- Tiny uppercase "Today" divider, then bot bubbles on the left (white, 20px radius with a small 6px bottom-left corner, 15px text, max 82% width): "Hey! 👋 Welcome back to Tandem." and "How do you want to sign in today?".
- A user bubble on the right in #5b4bff with white text: "Whatever’s fastest 🙂", then bot: "Then pick one below, it takes one tap. No passwords here."
- A hidden typing indicator bubble (three 6px #9b98b8 dots with animate-bounce and staggered animation-delay) for the script to clone.

Quick replies
- A wrap row of pill chips (white, 1px #d9d4ff border, 14px medium, 18px logo + label): Google, Apple, GitHub, Discord, Microsoft, right-aligned like quick replies. Hover lifts 2px and turns border/text #5b4bff.

Composer
- White bottom bar with a pill email input (sr-only label, placeholder "Or type your email…", #f3f1ff fill, violet ring on focus) and a 44px round violet send button with an arrow icon and aria-label "Send".

Behaviour
- Clicking a chip hides the chips, appends a user bubble "Google, please", shows the typing dots for 0.9s, then the bot replies "On it! Opening Google in a new window…".
- Submitting the email appends it as a user bubble and the bot replies that a magic link was sent (replace with your auth calls).
