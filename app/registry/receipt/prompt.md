Build a single-file forgot-password screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport dark counter (#1f1b18) with a warm radial spotlight (#3d352e) behind the centre. Space Mono throughout, ink #141414.
- A thermal receipt, max width 22rem, rotated -1.5deg (straightens on hover), with a soft `drop-shadow` so the shadow follows the torn edges.
- Torn zig-zag edges: 8px strips above and below the paper using `conic-gradient(from 135deg at 50% 0, transparent 90deg, #fbfaf5 0)` at 16px×8px, repeat-x; the top strip is rotated 180deg.
- Paper #fbfaf5 with ultra-faint horizontal 28px lines.

Details
- Centered header "★ PARCEL&PINE ★" (bold, tracked) and "ACCOUNT DESK · ONLINE STORE / 30/09/2026 · 14:07 · TERM 03" in small grey.
- Dashed 2px separators around the bold title "RESET REQUEST / #0042".
- Line items with dot leaders (a `before:content-['.....']` filler that clips): "1 × PASSWORD RESET … 0.00", "1 × PEACE OF MIND … 0.00", "LINK VALID FOR … 30 MIN".
- A fake barcode made from two layered repeating-linear-gradients (irregular black bars), digits under it, "*** THANK YOU · COME AGAIN ***" and a dashed-underline "← BACK TO SIGN IN" link.

Form
- "CUSTOMER EMAIL:" label, borderless input with a dashed 2px bottom rule that turns solid on focus.
- "TOTAL DUE $0.00" row between 2px solid rules.
- Full-width black "PRINT RESET LINK" button with tracked cream text that turns red (#d63a2f) on hover.
- A hidden rubber stamp "SENT ✓": red double 4px border, rotated -12deg, absolutely positioned over the form.

Behaviour
- On submit (`data-receipt-form`): button shows "PRINTING…", then relabels to "REPRINT LINK" and reveals the `data-receipt-stamp`.
