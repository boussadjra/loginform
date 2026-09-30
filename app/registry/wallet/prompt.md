Build a single-file web3 "connect wallet" modal using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport near-black section (#07060d) with three large blurred glow blobs: violet #7c3aed/30 top-left, teal #14b8a6/25 bottom-right, pink #ec4899/20 center-right (blur 100–120px). Font: Space Grotesk.
- Centered dialog (role="dialog", aria-modal, labelled by its title), max 760px. Its iridescent edge is a 1px padding wrapper with a conic-gradient (from 140deg: #a78bfa, #5eead4, #fde68a, #f472b6, #818cf8, back to #a78bfa) and 28px radius; the inner panel is #0d0b16 at 95% with 27px radius and a violet glow shadow.
- Inner grid: a 320px wallet list column and, from md up, an explainer pane separated by a white/7 hairline. Phones show only the list.

Wallet list
- Header: "Connect a wallet" (18px semibold) and a network pill button "Ethereum" (white/5 fill, white/10 border) with a pinging green (#34d399) dot and a small chevron.
- Group labels: "INSTALLED" in #a78bfa and "POPULAR" in white/40 (11px, 0.12em tracking).
- Rows are full-width buttons: 40px rounded-xl logo tile, name (15px medium) over a white/45 12px caption, and a right chevron that nudges right on hover; rows get a white/6 hover fill.
- Generic hand-drawn wallet marks (no real trademarks): "Foxhole" geometric orange fox head on #fff4ea with a green "Detected" pill; "Prism" five rainbow arcs on a navy gradient; "Orbit Wallet" white circle with a blue square on #1652f0; "Relay" white wave/zigzag on #3b99fc ("Scan a QR code"); "Hardware key" outlined device on #1b1a22.
- Phones: a footer line "New to wallets? Learn more".

Explainer pane
- Soft violet and teal corner radial washes. Eyebrow "TIDEPOOL", heading "What is a wallet?" (24px).
- Two points with 44px gradient icon tiles (violet→teal house, pink→amber key): "A home for your digital assets" / "Send, receive, store and display tokens and collectibles." and "A new way to sign in" / "No accounts or passwords. Just sign a message to prove it’s you."
- Bottom: a white pill "Get a wallet" button-link and a violet "Learn more" link.
- All logos `aria-hidden`; the network pill has an aria-label describing the current network.
